const { isFunction } = require("./utils");

module.exports.UI = class UI {
    constructor() {
        this.cfg = document.getElementById("foreground");   //cfg = canvas foreground
        this.cbg = document.getElementById("background");   //cbg = canvas background

        // Event Handler
        this.onGameStart = null;
        this.onGameResume = null;
        this.onGameExit = null;
    }

    addWindowEventListener(onPauseCallback) {
        this.resizeCanvas();

        window.addEventListener("resize", () => {
            this.resizeCanvas();
        });

        // Set the name of the hidden property and the change event for visibility
        let hidden, visibilityChange;
        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }

        // If the page is hidden, pause the video;
        // if the page is shown, play the video
        function handleVisibilityChange() {
            if (document[hidden]) {
                onPauseCallback()
            }
        }

        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === "undefined" || hidden === undefined) {
            console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
        } else {
            // Handle page visibility change
            document.addEventListener(visibilityChange, handleVisibilityChange, false);
        }
    }

    resizeCanvas() {
        this.cfg.width = window.innerWidth;
        this.cfg.height = window.innerHeight;

        this.cbg.width = window.innerWidth;
        this.cbg.height = window.innerHeight;
    }

    drawLoadingScreen() {
        let loadingHtml = document.getElementById("loadingAssets");
        loadingHtml.style.display = "block";
    }

    hideLoadingScreen() {
        let loadingHtml = document.getElementById("loadingAssets");
        loadingHtml.style.display = "none";
    }

    drawPauseScreen() {
        let loadingHtml = document.getElementById("loadingAssets");

        if (loadingHtml.style.display !== "none") {
            return
        }

        let pauseHtml = document.getElementById("pauseScreen");
        pauseHtml.style.display = "flex";

        document.getElementById("resumeGameBtn").onclick = this.onGameResume;
        document.getElementById("settingsBtn").onclick = () => {alert("Howdie Partner!\nThis horse is still missing. Maybe next time this button will run like a horse.\nYeeeehaaaaa!")};
        document.getElementById("exitGameBtn").onclick = this.onGameExit;
    }

    hidePauseScreen() {
        let pauseHtml = document.getElementById("pauseScreen");
        pauseHtml.style.display = "none";
    }

    displayVersions(clientVersion, serverVersion) {
        let clientVersionHtml = document.getElementById("clientVersion");
        let serverVersionHtml = document.getElementById("serverVersion");

        clientVersionHtml.innerHTML = clientVersion;
        serverVersionHtml.innerHTML = serverVersion;
    }
};