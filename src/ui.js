export default class UI {
    constructor() {
        this.cfg = document.getElementById("foreground");   //cfg = canvas foreground
        this.cbg = document.getElementById("background");   //cbg = canvas background
        this.loadingHtml = document.getElementById("loadingAssets");
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
}