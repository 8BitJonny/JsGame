import UI from "./ui";
import Map from "./map";
import Player from "./player";
import MapData from "../img/Testmap.json";
import GameObject from "./gameObject";
import Networking from "./networking";
import AssetLoader from "./assetLoader";
import InputHandler from "./inputHandler";
import CollisionDetection from "./collisionDetection";
import Camera from "./camera";

export default class Game {
    constructor() {
        this.ctxForeground = {};
        this.ctxBackground = {};

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
        this.ctxBackground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);

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
        this.map = new Map(MapData, this.assetLoader.sprites["map1"], 240, 24, 10);
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
        this.ctxBackground.save();
        this.ctxForeground.save();
        
        this.ctxBackground.translate(this.camera.position.x, this.camera.position.y);
        this.ctxForeground.translate(this.camera.position.x, this.camera.position.y);

        this.map.drawForeground(this.ctxForeground);
        this.map.drawBackground(this.ctxBackground);
        
        for (var i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.draw(this.ctxForeground);
        };
        this.character.draw(this.ctxForeground);
        
        if(this.debugShow === true){
            for (var i = 0; i < this.collisionDetection.colliders.length; i++) {
                let object = this.collisionDetection.colliders[i];
                console.log(this.collisionDetection.colliders);
                object.drawDebug(this.ctxForeground);

            }; 
            this.character.drawDebug(this.ctxForeground);
        };

        for (var playerId in this.onlinePlayer) {
            if (this.onlinePlayer.hasOwnProperty(playerId)) {
                this.onlinePlayer[playerId].draw(this.ctxForeground)
            };
        };
        this.ctxBackground.restore();
        this.ctxForeground.restore();

        
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
        this.camera.moveToKeepObjectFocused(this.character);
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
    };
};