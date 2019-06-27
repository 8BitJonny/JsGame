const { UI } = require("./ui");
const { Map } = require("./map");
const { Player } = require("./player");
const { GameObject } = require("./gameObject");
const { Networking } = require("./networking");
const { AssetLoader } = require("./assetLoader");
const { InputHandler } = require("./inputHandler");
const { CollisionDetection } = require("./collisionDetection");

module.exports.Game = class Game {
    constructor() {
        this.ctxForeground = {};
        this.ctxBackground = {};

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

    gameLoop() {
        this.ctxForeground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);
        
        this.update();
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
            this.gameLoop();
        }
    }

    initializeGameObjects() {
        this.map = new Map(this.assetLoader.mapLayouts["mapLayout1"], this.assetLoader.sprites["map1"], 240, 24, 10);
        this.character = new Player(this.assetLoader.sprites["player1"], 100, 100);

        window.addEventListener("resize", _ => {
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
        for (var i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.draw(this.ctxForeground);
        };
        this.character.draw(this.ctxForeground);
        
        for (var playerId in this.onlinePlayer) {
            if (this.onlinePlayer.hasOwnProperty(playerId)) {
                this.onlinePlayer[playerId].draw(this.ctxForeground)
            };
        };
    };
    
    update() {
        this.inputHandler.handleInput();
        for (var i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.update();
        };
        this.character.update();

        this.networking.sendPosition(this.character);

        for (var playerId in this.onlinePlayer) {
            if (this.onlinePlayer.hasOwnProperty(playerId)) {
              this.onlinePlayer[playerId].update()
            };
        };
    };
    
    connectToServer() {
        this.networking = new Networking('https://bga.timonchristiansen.com', (payload) => {
            let updatedPlayer = [];
            for (var playerId in payload.p) {
                var serverPlayer = payload.p[playerId];
                if (this.networking.socket.userid === playerId) {
                
                } else if (this.isValidNetworkObject(serverPlayer)) {
                    updatedPlayer.push(playerId);
                    if (this.onlinePlayer.hasOwnProperty(playerId)) {
                        var curPlayer = this.onlinePlayer[playerId];
                        curPlayer.position.x = serverPlayer.position.x;
                        curPlayer.position.y = serverPlayer.position.y;
                        curPlayer.facing = serverPlayer.facing;
                        curPlayer.spriteInterpreter = curPlayer.spriteInterpreterList[serverPlayer.facing];
                    } else {
                        this.onlinePlayer[playerId] = new Player(this.assetLoader.sprites["player1"], serverPlayer.position.x, serverPlayer.position.y)
                    };
                };
            };

            for (var playerId in this.onlinePlayer) {
                if (this.onlinePlayer.hasOwnProperty(playerId)) {
                    let index = updatedPlayer.indexOf(playerId);
                    
                    if(index === - 1){
                        delete this.onlinePlayer[playerId];
                    };
                };
            };
        });
    };

    isValidNetworkObject(obj) {
        return obj.hasOwnProperty("facing") && obj.hasOwnProperty("position") && obj.hasOwnProperty("userid")
    }
};