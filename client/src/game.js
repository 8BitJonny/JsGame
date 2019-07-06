const { UI } = require("./ui");
const { Map } = require("./map");
const { Player } = require("./player");
const { Networking } = require("./networking");
const { AssetLoader } = require("./assetLoader");
const { InputHandler } = require("./inputHandler");
const { CollisionDetection } = require("./collisionDetection");

module.exports.Game = class Game {
    constructor() {
        this.ctxForeground = {};
        this.ctxBackground = {};

        this.lastFrameTime = 0;

        this.ui = new UI();

        this.map = {};
        this.objects = [];
        this.character = {};
        this.onlinePlayer = {};
        this.networking = {};
        this.inputHandler = {};
        this.collisionDetection = {};
        this.assetLoader = new AssetLoader();
    };

    start() {
        this.setupCanvas();

        this.assetLoader.loadAssets();

        this.waitForLoadedAssetsAndStart();
    }

    setupCanvas() {
        this.ui.addAutoResizeCanvas();

        this.ctxForeground = this.ui.cfg.getContext("2d");
        this.ctxForeground.imageSmoothingEnabled = false;

        this.ctxBackground = this.ui.cbg.getContext("2d");
        this.ctxBackground.imageSmoothingEnabled = false;
    }

    gameLoop(time) {
        let timeSinceLastFrame = (time - this.lastFrameTime)/16;     //how much time has passed since last drawn frame relative to our standard interval of 16 ms
        this.lastFrameTime = time;

        this.ctxForeground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);
        
        this.update(timeSinceLastFrame);
        this.draw();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    waitForLoadedAssetsAndStart() {
        if (this.assetLoader.isFinishedLoading() === false) {
            this.ui.drawLoadingScreen();
            requestAnimationFrame(this.waitForLoadedAssetsAndStart.bind(this));
        } else {
            this.ui.hideLoadingScreen();
            this.initializeGameObjects();
            this.map.drawBackground(this.ctxBackground);
            this.connectToServer();
            this.gameLoop(0);
        }
    }

    initializeGameObjects() {
        this.map = new Map(this.assetLoader.mapLayouts["mainLobby"], this.assetLoader.sprites["mainLobby"], 240, 24, 10);
        this.character = new Player(this.assetLoader.sprites["player1"], 100, 100);

        window.addEventListener("resize", () => {
            this.ctxForeground.imageSmoothingEnabled = false;
            this.ctxBackground.imageSmoothingEnabled = false;
            this.map.drawBackground(this.ctxBackground);
        });

        this.inputHandler = new InputHandler(this.character, this);
        this.collisionDetection = new CollisionDetection([...this.map.colliders]);
        this.character.setCollisionDetectionObject(this.collisionDetection);
    }

    draw() {
        this.map.drawForeground(this.ctxForeground);
        for (let i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.draw(this.ctxForeground);
        }
        this.character.draw(this.ctxForeground);
        
        for (let playerId in this.onlinePlayer) {
            if (this.onlinePlayer.hasOwnProperty(playerId)) {
                this.onlinePlayer[playerId].draw(this.ctxForeground)
            }
        }
    };
    
    update(timePassed) {
        this.inputHandler.handleInput();
        this.networking.sendInput(this.inputHandler.prepareAndReturnInputStateForServer());

        for (let i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.update(timePassed);
        }

        // Do client side prediction
        // While we wait on the server response we calculate the next character position on our own
        // Upon receiving server confirmation, we then update the character positions accordingly
        this.character.update(timePassed);

        /*for (let playerId in this.onlinePlayer) {
            if (this.onlinePlayer.hasOwnProperty(playerId)) {
              this.onlinePlayer[playerId].update(timePassed)
            }
        }*/
    };
    
    connectToServer() {
        this.networking = new Networking('http://localhost:4004', this);
    };
};