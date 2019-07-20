module.exports.UI = class UI {
    constructor() {
        this.cfg = document.getElementById("foreground");   //cfg = canvas foreground
        this.cbg = document.getElementById("background");   //cbg = canvas background
        this.loadingHtml = document.getElementById("loadingAssets");
        this.clientVersion = document.getElementById("clientVersion");
        this.serverVersion = document.getElementById("serverVersion");
        this.loginButton = document.getElementById("login");
        this.loginButton.onclick = this.onLogin.bind(this);
        this.playButton = document.getElementById("play");
        this.playButton.onclick = this.onPlay.bind(this);
        this.playDiv = document.getElementById("playDiv");
        this.startScreen = document.getElementById("startScreen");
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
        this.loadingHtml.style.display = "block";
    }

    hideLoadingScreen() {
        this.loadingHtml.style.display = "none";
    }

    displayVersions(clientVersion, serverVersion) {
        this.clientVersion.innerHTML = clientVersion;
        this.serverVersion.innerHTML = serverVersion;
    }

    onLogin() {
        this.loginButton.style.display = "none";
        this.playDiv.style.display = "inline-block";
    }

    onPlay() {
        this.startScreen.style.display = "none";
    }
};