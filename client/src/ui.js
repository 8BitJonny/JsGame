const { isFunction } = require("./utils");

module.exports.UI = class UI {
    constructor() {
        document.getElementById("loginForm").onsubmit = this._onLogin.bind(this);
        document.getElementById("playForm").onsubmit = this._onPlay.bind(this);
        document.getElementById("loginButton").focus();


        this.cfg = document.getElementById("foreground");   //cfg = canvas foreground
        this.cbg = document.getElementById("background");   //cbg = canvas background

        // Event Handler
        this.onPlay = null
    }

    addAutoResizeCanvas() {
        this.resizeCanvas();

        window.addEventListener("resize", _ => {
            this.resizeCanvas();
        })
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

    displayVersions(clientVersion, serverVersion) {
        let clientVersionHtml = document.getElementById("clientVersion");
        let serverVersionHtml = document.getElementById("serverVersion");

        clientVersionHtml.innerHTML = clientVersion;
        serverVersionHtml.innerHTML = serverVersion;
    }

    _onLogin(e) {
        e.preventDefault();
        let loginButton = document.getElementById("loginButton");
        let playDiv = document.getElementById("playForm");

        loginButton.style.display = "none";
        playDiv.style.display = "inline-block";

        document.getElementById("playerName").focus();
    }

    _onPlay(e) {
        e.preventDefault();
        let startScreen = document.getElementById("startScreen");
        let playerName = document.getElementById("playerName").value;

        // if name is null or empty
        if (!playerName||!playerName.trim()) {
            let errorSpan = document.getElementById("formError");
            errorSpan.innerHTML = "The name cannot be empty!";
            errorSpan.className = "error active";
            return;
        }

        if (playerName.length > 12) {
            let errorSpan = document.getElementById("formError");
            errorSpan.innerHTML = "The given name is too long!";
            errorSpan.className = "error active";
            return
        }

        startScreen.style.display = "none";

        if (isFunction(this.onPlay)) {
            this.onPlay(playerName)
        }
    }
};