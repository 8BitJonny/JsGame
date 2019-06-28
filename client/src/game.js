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
        this.networking.sendInput(this.inputHandler.keysDown);

        for (let i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.update(timePassed);
        }

        this.character.update(timePassed);

        /*for (let playerId in this.onlinePlayer) {
            if (this.onlinePlayer.hasOwnProperty(playerId)) {
              this.onlinePlayer[playerId].update(timePassed)
            }
        }*/
    };
    
    connectToServer() {
        this.networking = new Networking('http://localhost:4004', (payload) => {
            let updatedPlayer = [];
            for (let playerId in payload.p) {
                let serverPlayer = payload.p[playerId];
                if (this.isValidNetworkObject(serverPlayer)) {
                    updatedPlayer.push(playerId);
                    if (this.onlinePlayer.hasOwnProperty(playerId)) {
                        let curPlayer = this.onlinePlayer[playerId];
                        curPlayer.position.x = serverPlayer.p.x;
                        curPlayer.position.y = serverPlayer.p.y;
                        curPlayer.facing = serverPlayer.f;
                        curPlayer.spriteInterpreter = curPlayer.spriteInterpreterList[serverPlayer.f];
                    } else {
                        this.onlinePlayer[playerId] = new Player(this.assetLoader.sprites["player1"], serverPlayer.p.x, serverPlayer.p.y)
                    }
                }
            }

            for (let onlinePlayerId in this.onlinePlayer) {
                if (this.onlinePlayer.hasOwnProperty(onlinePlayerId)) {
                    let index = updatedPlayer.indexOf(onlinePlayerId);
                    
                    if(index === - 1){
                        delete this.onlinePlayer[onlinePlayerId];
                    }
                }
            }
        });
    };

    isValidNetworkObject(obj) {
        return obj.hasOwnProperty("f") && obj.hasOwnProperty("p");
    }
};