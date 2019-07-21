const { UI } = require("./ui");
const { Map } = require("./map");
const { Player } = require("./player");
const { Networking } = require("./networking");
const { AssetLoader } = require("./assetLoader");
const { InputHandler } = require("./inputHandler");
const { CollisionDetection } = require("./collisionDetection");
const { Camera } = require("./camera");

const config = require("./config.json");

module.exports.Game = class Game {
    constructor() {
        this.ctxForeground = {};
        this.ctxBackground = {};

        this.lastFrameTime = 0;

        this.ui = new UI();

        this.camera = new Camera();
        this.map = {};
        this.objects = [];
        this.character = {};
        this.onlinePlayer = {};
        this.networking = {};
        this.inputHandler = {};
        this.collisionDetection = {};
        this.assetLoader = new AssetLoader();
        this.debugShow = false;
        this.config = config;

        this.ui.onPlay = this.start.bind(this);
    };
    
    // start game
    start(playerName) {
        this.setupCanvas();

        this.assetLoader.loadAssets();

        this.waitForLoadedAssetsAndStart(playerName);
    }

    // setup canvas
    setupCanvas() {
        this.ui.addAutoResizeCanvas();

        this.ctxForeground = this.ui.cfg.getContext("2d");
        this.ctxForeground.imageSmoothingEnabled = false;

        this.ctxBackground = this.ui.cbg.getContext("2d");
        this.ctxBackground.imageSmoothingEnabled = false;
    }

    // main game loop with update and draw method call
    gameLoop(time) {
        let timeSinceLastFrame = (time - this.lastFrameTime)/16;     //how much time has passed since last drawn frame relative to our standard interval of 16 ms
        this.lastFrameTime = time;

        this.ctxForeground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);
        this.ctxBackground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);
      
        this.update(timeSinceLastFrame);
        this.draw();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    // wait for everything to load and display loading screen while doing it
    waitForLoadedAssetsAndStart(playerName) {
        if (this.assetLoader.isFinishedLoading() === false) {
            this.ui.drawLoadingScreen();
            requestAnimationFrame(this.waitForLoadedAssetsAndStart.bind(this,playerName));
        } else {
            this.ui.hideLoadingScreen();
            this.initializeGameObjects(playerName);
            this.map.drawBackground(this.ctxBackground);
            this.connectToServer();
            this.gameLoop(0);
        }
    }

    // initialize Gameobject like map, the character, inputhandler, ...
    initializeGameObjects(playerName) {
        this.map = new Map(this.assetLoader.mapLayouts["mainLobby"], this.assetLoader.sprites["mainLobby"], 240, 24, 10);
        this.character = new Player(this.assetLoader.sprites["player1"], 100, 100, playerName);

        window.addEventListener("resize", () => {
            this.ctxForeground.imageSmoothingEnabled = false;
            this.ctxBackground.imageSmoothingEnabled = false;
            this.map.drawBackground(this.ctxBackground);
        });

        this.inputHandler = new InputHandler(this.character, this);
        this.collisionDetection = new CollisionDetection([...this.map.colliders]);
        this.character.setCollisionDetectionObject(this.collisionDetection);
    }

    // draw map, character, objects and onlinePlayer
    draw() {
        this.ctxBackground.save();
        this.ctxForeground.save();
        
        this.ctxBackground.translate(this.camera.position.x, this.camera.position.y);
        this.ctxForeground.translate(this.camera.position.x, this.camera.position.y);

        this.map.drawForeground(this.ctxForeground);
        this.map.drawBackground(this.ctxBackground);
        
        for (var i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.draw(this.ctxForeground);
        }
        this.character.draw(this.ctxForeground);
        
        if(this.debugShow === true){
            for (var i = 0; i < this.collisionDetection.colliders.length; i++) {
                let object = this.collisionDetection.colliders[i];
                object.drawDebug(this.ctxForeground);
            }
            this.character.drawDebug(this.ctxForeground);
        }

        for (var playerId in this.onlinePlayer) {
            if (this.onlinePlayer.hasOwnProperty(playerId)) {
                this.onlinePlayer[playerId].draw(this.ctxForeground)
            }
        }
        this.ctxBackground.restore();
        this.ctxForeground.restore();
    };

    // update the positions of all objects
    update(timePassed) {
        this.inputHandler.handleInput(timePassed);
        let inputStateForServer = this.inputHandler.prepareAndReturnInputStateForServer();
        this.networking.sendInput(inputStateForServer);

        for (let i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.update();
        }

        // Process the received server updates and
        // calculate online player position with interpolation
        this.networking.processNetUpdates();

        // Do client side prediction
        // While we wait on the server response we calculate the next character position on our own
        // Upon receiving server confirmation, we then update the character positions accordingly
        this.character.update(timePassed);
        this.camera.moveToKeepObjectFocused(this.character);
    };

    // connect to the server
    connectToServer() {
        this.networking = new Networking('http://localhost:4004', this);
    };
};