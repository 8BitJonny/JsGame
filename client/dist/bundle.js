/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/BODY_skeleton.png":
/*!*******************************!*\
  !*** ./img/BODY_skeleton.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/8a592a26be017c4deb54d55a28f4a2f6-BODY_skeleton.png\";\n\n//# sourceURL=webpack:///./img/BODY_skeleton.png?");

/***/ }),

/***/ "./img/Testmap.json":
/*!**************************!*\
  !*** ./img/Testmap.json ***!
  \**************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":15,\"infinite\":false,\"layers\":[{\"data\":[55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55],\"height\":15,\"id\":1,\"name\":\"Backround\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":30,\"x\":0,\"y\":0},{\"data\":[6,7,7,7,7,193,194,195,196,197,198,7,7,7,7,7,7,7,7,7,7,7,8,6,7,7,7,7,7,8,30,31,31,31,31,217,218,219,220,221,222,31,31,31,173,31,31,31,31,31,31,31,32,30,31,31,31,174,31,32,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,54,0,0,0,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,54,0,89,90,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,54,0,113,114,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,54,0,137,138,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,89,90,0,0,0,0,0,0,0,0,57,58,0,0,0,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,113,114,0,0,0,0,0,0,0,0,81,82,0,0,0,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,137,138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,54,0,0,0,208,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,54,0,0,0,232,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,183,183,0,0,0,0,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,183,183,0,0,0,0,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80],\"height\":15,\"id\":3,\"name\":\"Foreground\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":30,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":4,\"name\":\"Objektebene 1\",\"objects\":[{\"height\":14.5,\"id\":1,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":480,\"x\":0.5,\"y\":0.5},{\"height\":226.5,\"id\":2,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":8,\"x\":471.5,\"y\":15.5},{\"height\":226.5,\"id\":3,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":9,\"x\":-1,\"y\":15.5},{\"height\":11.5,\"id\":4,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":481,\"x\":-1,\"y\":229},{\"height\":96.5,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17,\"x\":359,\"y\":14.5},{\"height\":7.5,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":355.5,\"y\":104},{\"height\":20.5,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":339.5,\"y\":160.5},{\"height\":19,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":13,\"x\":201.5,\"y\":102},{\"height\":8,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":19,\"x\":70.5,\"y\":150.5},{\"height\":15.5,\"id\":10,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":12.5,\"x\":409.5,\"y\":53}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":5,\"nextobjectid\":12,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.4\",\"tileheight\":16,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../Desktop/Blocky Dungeon.tsx\"}],\"tilewidth\":16,\"type\":\"map\",\"version\":1.2,\"width\":30};\n\n//# sourceURL=webpack:///./img/Testmap.json?");

/***/ }),

/***/ "./img/dungeon_sheet.png":
/*!*******************************!*\
  !*** ./img/dungeon_sheet.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/cab5b0e2a99ca06cc506ad1b9884ab4e-dungeon_sheet.png\";\n\n//# sourceURL=webpack:///./img/dungeon_sheet.png?");

/***/ }),

/***/ "./src/assetLoader.js":
/*!****************************!*\
  !*** ./src/assetLoader.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports.AssetLoader = class AssetLoader {\n    constructor() {\n        this.imagesToBeLoaded = 0;\n        this.startedLoading = false;\n        this.sprites = {};\n        this.mapLayouts = {};\n    }\n\n    loadMapData() {\n        const MapData = __webpack_require__(/*! ../img/Testmap.json */ \"./img/Testmap.json\");\n\n        this.mapLayouts[\"mainLobby\"] = MapData;\n    }\n\n    loadAssets() {\n        const Player1 = __webpack_require__(/*! ../img/BODY_skeleton.png */ \"./img/BODY_skeleton.png\");\n        const Map1 = __webpack_require__(/*! ../img/dungeon_sheet.png */ \"./img/dungeon_sheet.png\");\n\n        this.sprites[\"player1\"] = this._imageForPath(Player1);\n        this.sprites[\"mainLobby\"] = this._imageForPath(Map1);\n\n        this.loadMapData();\n\n        this.startedLoading = true;\n    };\n\n    isFinishedLoading() {\n        return this.imagesToBeLoaded <= 0 && this.startedLoading;\n    };\n\n    _imageForPath(path) {\n        let newImage = new Image();\n        newImage.src = path;\n        newImage.addEventListener('load', _ => {\n            this.imagesToBeLoaded--\n        }, false);\n        this.imagesToBeLoaded++;\n        return newImage;\n    };\n};\n\n//# sourceURL=webpack:///./src/assetLoader.js?");

/***/ }),

/***/ "./src/collisionDetection.js":
/*!***********************************!*\
  !*** ./src/collisionDetection.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { GameObject } = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n\nmodule.exports.CollisionDetection = class CollisionDetection {\n    constructor(colliders) {\n        this.colliders = colliders;\n    };\n\n    addCollidier(obj) {\n        if (obj instanceof GameObject) {\n            this.colliders.push(obj);\n        }\n    };\n\n    isColliding(position, hitBox) {\n        let isColliding = false;\n        this.colliders.forEach(collider => {\n            if (position.x <= collider.position.x + collider.hitBox.width\n             && position.x + hitBox.width >= collider.position.x\n             && position.y <= collider.position.y + collider.hitBox.height\n             && position.y + hitBox.height >= collider.position.y) {\n                isColliding = true;\n            }\n        });\n\n        return isColliding;\n    };\n};\n\n//# sourceURL=webpack:///./src/collisionDetection.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { UI } = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\nconst { Map } = __webpack_require__(/*! ./map */ \"./src/map.js\");\nconst { Player } = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst { GameObject } = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\nconst { Networking } = __webpack_require__(/*! ./networking */ \"./src/networking.js\");\nconst { AssetLoader } = __webpack_require__(/*! ./assetLoader */ \"./src/assetLoader.js\");\nconst { InputHandler } = __webpack_require__(/*! ./inputHandler */ \"./src/inputHandler.js\");\nconst { CollisionDetection } = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\nmodule.exports.Game = class Game {\n    constructor() {\n        this.ctxForeground = {};\n        this.ctxBackground = {};\n\n        this.lastFrameTime = 0;\n\n        this.ui = new UI();\n\n        this.map = {};\n        this.objects = [];\n        this.character = {};\n        this.onlinePlayer = {};\n        this.networking = {};\n        this.inputHandler = {};\n        this.collisionDetection = {};\n        this.assetLoader = new AssetLoader();\n    };\n\n    start() {\n        this.setupCanvas();\n\n        this.assetLoader.loadAssets();\n\n        this.waitForLoadedAssetsAndStart();\n    }\n\n    setupCanvas() {\n        this.ui.addAutoResizeCanvas();\n\n        this.ctxForeground = this.ui.cfg.getContext(\"2d\");\n        this.ctxForeground.imageSmoothingEnabled = false;\n\n        this.ctxBackground = this.ui.cbg.getContext(\"2d\");\n        this.ctxBackground.imageSmoothingEnabled = false;\n    }\n\n    gameLoop(time) {\n        let timeSinceLastFrame = (time - this.lastFrameTime)/16;     //how much time has passed since last drawn frame relative to our standard interval of 16 ms\n        this.lastFrameTime = time;\n\n        this.ctxForeground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);\n        \n        this.update(timeSinceLastFrame);\n        this.draw();\n\n        requestAnimationFrame(this.gameLoop.bind(this));\n    }\n\n    waitForLoadedAssetsAndStart() {\n        if (this.assetLoader.isFinishedLoading() === false) {\n            this.ui.drawLoadingScreen();\n            requestAnimationFrame(this.waitForLoadedAssetsAndStart.bind(this));\n        } else {\n            this.ui.hideLoadingScreen();\n            this.initializeGameObjects();\n            this.map.drawBackground(this.ctxBackground);\n            this.connectToServer();\n            this.gameLoop(0);\n        }\n    }\n\n    initializeGameObjects() {\n        this.map = new Map(this.assetLoader.mapLayouts[\"mainLobby\"], this.assetLoader.sprites[\"mainLobby\"], 240, 24, 10);\n        this.character = new Player(this.assetLoader.sprites[\"player1\"], 100, 100);\n\n        window.addEventListener(\"resize\", _ => {\n            this.ctxForeground.imageSmoothingEnabled = false;\n            this.ctxBackground.imageSmoothingEnabled = false;\n            this.map.drawBackground(this.ctxBackground);\n        });\n\n        this.inputHandler = new InputHandler(this.character, this);\n        this.collisionDetection = new CollisionDetection([...this.map.colliders]);\n        this.character.setCollisionDetectionObject(this.collisionDetection);\n    }\n\n    draw() {\n        this.map.drawForeground(this.ctxForeground);\n        for (let i = 0; i < this.objects.length; i++) {\n            let object = this.objects[i];\n            object.draw(this.ctxForeground);\n        }\n        this.character.draw(this.ctxForeground);\n        \n        for (let playerId in this.onlinePlayer) {\n            if (this.onlinePlayer.hasOwnProperty(playerId)) {\n                this.onlinePlayer[playerId].draw(this.ctxForeground)\n            }\n        }\n    };\n    \n    update(timePassed) {\n        this.inputHandler.handleInput();\n        this.networking.sendInput(this.inputHandler.keysDown);\n\n        for (let i = 0; i < this.objects.length; i++) {\n            let object = this.objects[i];\n            object.update(timePassed);\n        }\n\n        this.character.update(timePassed);\n\n        /*for (let playerId in this.onlinePlayer) {\n            if (this.onlinePlayer.hasOwnProperty(playerId)) {\n              this.onlinePlayer[playerId].update(timePassed)\n            }\n        }*/\n    };\n    \n    connectToServer() {\n        this.networking = new Networking('http://localhost:4004', (payload) => {\n            let updatedPlayer = [];\n            for (let playerId in payload.p) {\n                let serverPlayer = payload.p[playerId];\n                if (this.isValidNetworkObject(serverPlayer)) {\n                    updatedPlayer.push(playerId);\n                    if (this.onlinePlayer.hasOwnProperty(playerId)) {\n                        let curPlayer = this.onlinePlayer[playerId];\n                        curPlayer.position.x = serverPlayer.p.x;\n                        curPlayer.position.y = serverPlayer.p.y;\n                        curPlayer.facing = serverPlayer.f;\n                        curPlayer.spriteInterpreter = curPlayer.spriteInterpreterList[serverPlayer.f];\n                    } else {\n                        this.onlinePlayer[playerId] = new Player(this.assetLoader.sprites[\"player1\"], serverPlayer.p.x, serverPlayer.p.y)\n                    }\n                }\n            }\n\n            for (let onlinePlayerId in this.onlinePlayer) {\n                if (this.onlinePlayer.hasOwnProperty(onlinePlayerId)) {\n                    let index = updatedPlayer.indexOf(onlinePlayerId);\n                    \n                    if(index === - 1){\n                        delete this.onlinePlayer[onlinePlayerId];\n                    }\n                }\n            }\n        });\n    };\n\n    isValidNetworkObject(obj) {\n        return obj.hasOwnProperty(\"f\") && obj.hasOwnProperty(\"p\");\n    }\n};\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameObject.js":
/*!***************************!*\
  !*** ./src/gameObject.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { Vector } = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\nmodule.exports.GameObject = class GameObject {\n    constructor(spriteInterpreter, x, y) {\n        this.spriteInterpreter = spriteInterpreter;\n        this.position = new Vector(x,y);\n        this.velocity = new Vector(0,0);\n\n        let shapeWidth = this.spriteInterpreter != null ? this.spriteInterpreter.shapeWidth : 0;\n        let shapeHeight = this.spriteInterpreter != null ? this.spriteInterpreter.shapeHeight : 0;\n\n        this.hitBox = {\n            width: shapeWidth,\n            height: shapeHeight \n        };\n\n    };\n\n    draw(ctx) {\n        ctx.save();\n        ctx.translate(this.position.x, this.position.y);\n\n        if(this.spriteInterpreter != null){\n            this.spriteInterpreter.draw(ctx);\n        }\n\n        ctx.restore();\n    };\n    \n    update(timePassed) {\n        // the velocity represent the speed in pixels per second.\n        // we have to multiply this with the seconds that have passed\n        // to get the value we have to add to the current position\n        let distanceTraveled = this.velocity.mul_scalar(timePassed);\n        this.position.add(distanceTraveled);\n    };\n    \n    drawDebug() {\n        ctx.strokeStyle = \"red\";\n        ctx.strokeRect(this.position.x,this.position.y,this.hitBox.width,this.hitBox.height);\n    };\n};\n\n//# sourceURL=webpack:///./src/gameObject.js?");

/***/ }),

/***/ "./src/inputHandler.js":
/*!*****************************!*\
  !*** ./src/inputHandler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.InputHandler = class InputHandler{\n    constructor(player, game){\n        this.player = player;\n        this.game = game;\n        this.keysDown = [];\n        document.addEventListener(\"keydown\",event => {\n            switch(event.code) {\n                case \"KeyW\":\n                case \"KeyA\":\n                case \"KeyS\":\n                case \"KeyD\":\n                case \"ArrowUp\":\n                case \"ArrowDown\":\n                case \"ArrowLeft\":\n                case \"ArrowRight\":\n                    if(!this.keysDown.includes(event.code)){\n                        this.keysDown.unshift(event.code);\n                    }\n            }\n        });\n        document.addEventListener(\"keyup\",event => {\n            switch(event.code) {\n                case \"KeyW\":\n                case \"KeyA\":\n                case \"KeyS\":\n                case \"KeyD\":\n                case \"ArrowUp\":\n                case \"ArrowDown\":\n                case \"ArrowLeft\":\n                case \"ArrowRight\":\n                    let index = this.keysDown.indexOf(event.code);\n                    \n                    if(index > - 1){\n                        this.keysDown.splice(index, 1);\n                    }\n                    \n                    if(this.keysDown.length === 0){\n                        this.player.stopMovement();\n                    }\n            }\n        });\n    };\n    handleInput() {\n        if(this.keysDown.length > 0){\n            this.player.movePlayer(this.keysDown);\n        }\n    };\n};\n\n//# sourceURL=webpack:///./src/inputHandler.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { Game } = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nlet game = new Game();\n\ngame.start();\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { SpriteInterpreter } = __webpack_require__(/*! ./spriteInterpreter */ \"./src/spriteInterpreter.js\");\nconst { GameObject } = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n\nmodule.exports.Map = class Map {\n    constructor(mapJson, mapImage, totalShapeCount, shapesInRow, shapesInColumn){\n        this.SCALE = 2;\n        this.spriteinterpreter = mapImage != null ? new SpriteInterpreter(\n            mapImage,\n            this.SCALE,\n            0,\n            totalShapeCount - 1,\n            shapesInRow,\n            shapesInColumn,\n        ) : null;\n        this.backgroundLayers = [];\n        this.foregroundLayers = [];\n        this.colliders = [];\n\n        this.readMapData(mapJson);\n    };\n\n    drawBackground(ctx) {\n        this.draw(ctx, this.backgroundLayers);\n    };\n\n    drawForeground(ctx) {\n        this.draw(ctx, this.foregroundLayers);\n    };\n\n    draw(ctx, tileLayers) {\n        if (this.spriteinterpreter === null) {\n            return\n        }\n\n        tileLayers.forEach(layer =>{\n            let x = 0;\n            let y = 0;\n            layer.data.forEach((value, index) => {\n                this.spriteinterpreter.currentShapeIndex = value - 1;\n\n                x = index % layer.width;\n                y = Math.floor(index / layer.width);\n                \n                ctx.save();\n                ctx.translate(\n                    x * this.spriteinterpreter.shapeWidth * this.SCALE,\n                    y * this.spriteinterpreter.shapeHeight * this.SCALE\n                );\n                \n                this.spriteinterpreter.draw(ctx);\n                ctx.restore();\n            });\n        });\n    };\n\n    readMapData(json) {\n        json.layers.forEach(layer =>{\n            switch(layer.type) {\n                case \"tilelayer\":\n                    switch (layer.name) {\n                        case \"Backround\":\n                            this.backgroundLayers.push(layer);\n                            break;\n                        case \"Foreground\":\n                            this.foregroundLayers.push(layer);\n                            break;\n                    }\n                    break;\n                case \"objectgroup\":\n                    layer.objects.forEach(object => {\n                        let newCollider = new GameObject(null, object.x * this.SCALE, object.y * this.SCALE);\n                        newCollider.hitBox = {\n                            width: object.width * this.SCALE, \n                            height: object.height * this.SCALE  \n                        };\n                        this.colliders.push(newCollider);\n                    });\n                    break;\n            }\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/networking.js":
/*!***************************!*\
  !*** ./src/networking.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.Networking = class Networking {\n    constructor(ip,serverStateHandler) {\n        this.socket = io.connect(ip);\n        this.socket.on(\"onconnected\", (payload) => {\n            this.socket.userid = payload.id;\n            this.networkStatus.innerHTML = \"Connected\";\n        });\n\n        this.socket.on(\"connectToRoom\", (payload) => {\n            this.networkStatus.innerHTML = payload.room;\n        });\n\n        this.socket.on(\"disconnect\", () => {\n            this.networkStatus.innerHTML = \"Offline\";\n        });\n\n        this.socket.on(\"sp\", (payload) => {\n            var tof = new Date().getTime() - parseFloat (payload.t);\n            this.pingHtml.innerHTML = tof / 2\n        });\n\n        this.socket.on(\"serverstate\", (payload) => {\n            serverStateHandler(payload)\n        });\n\n        this.startPingTimer();\n\n        this.networkStatus = document.getElementById(\"connectionStatus\");\n        this.pingHtml = document.getElementById(\"ping\");\n    }\n\n    startPingTimer() {\n        setInterval(() => {\n            this.last_ping_time = new Date().getTime();\n            this.socket.emit(\"cp\", { t:this.last_ping_time });\n        }, 1000);\n    }\n\n    // Sends the received input from the player to the server e.g. which keys he pressed to move or to do an action\n    sendInput(playerInput) {\n        this.socket.emit(\"i\", { k: playerInput });\n    }\n};\n\n//# sourceURL=webpack:///./src/networking.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { GameObject } = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\nconst { SpriteInterpreter } = __webpack_require__(/*! ./spriteInterpreter */ \"./src/spriteInterpreter.js\");\nconst { Vector } = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\nconst { CollisionDetection } = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\nmodule.exports.Player = class Player extends GameObject {\n    constructor(imgSprite,x,y){\n        let PADDINGX = 34;\n        let PADDINGY = 10;\n        let SCALE = 1;\n        let spriteInterpreter = imgSprite != null ? new SpriteInterpreter(imgSprite, SCALE, 18, 0, 9, 4, PADDINGX, PADDINGY) : null;\n        \n        super(spriteInterpreter, x, y);\n        this.SCALE = SCALE;\n        this.MAXSPEED = 2;\n        this.facingDirection = 0;\n        this.spriteInterpreterList = [\n            spriteInterpreter,\n            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE,  1, 7, 9, 4, PADDINGX, PADDINGY, 10) : null,\n            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE, 27, 7, 9, 4, PADDINGX, PADDINGY, 10) : null,\n            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE, 19, 7, 9, 4, PADDINGX, PADDINGY, 10) : null,\n            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE,  9, 7, 9, 4, PADDINGX, PADDINGY, 10) : null\n        ];\n\n        this.collisionDetection = null;\n    };\n\n    update(timePassed) {\n        if (this.collisionDetection != null) {\n            //check for Collision before updating position\n            let oldPosition = this.position.copy();\n\n            //check if the hitbox of the next frame collides with something when only the xVelocity is added to the hitbox\n            this.position.x += this.velocity.x;\n            let isCollidingX = this.collisionDetection.isColliding(this.position, this.hitBox);\n\n            if (isCollidingX) {\n                // if it collides reset this the xVelocity\n                this.velocity.x = 0;\n            }\n\n            //reset the hitbox to now check the yAxis\n            this.position = oldPosition.copy();\n\n            //check if the hitbox of the next frame collides with something when only the yVelocity is added to the hitbox\n            this.position.y += this.velocity.y;\n            let isCollidingY = this.collisionDetection.isColliding(this.position, this.hitBox);\n\n            if (isCollidingY) {\n                // if it collides reset this the yVelocity\n                this.velocity.y = 0;\n            }\n\n            //reset the hitbox and the position because through object reference the position variable changed too\n            this.position = oldPosition.copy();\n        }\n\n        super.update(timePassed);\n    };\n\n    movePlayer(keysDown) {\n        var newVelocity = new Vector(0,0);\n        let oldFacingDirection = this.facingDirection;\n\n        // Change speed and faced direction according to keyboard input\n        if (keysDown.includes(\"KeyW\") || keysDown.includes(\"ArrowUp\")) {\n            newVelocity.y -= this.MAXSPEED;\n            this.facingDirection = 1;\n        }\n\n        if (keysDown.includes(\"KeyS\") || keysDown.includes(\"ArrowDown\")) {\n            newVelocity.y += this.MAXSPEED;\n            this.facingDirection = 3;\n        }\n\n        if (keysDown.includes(\"KeyA\") || keysDown.includes(\"ArrowLeft\")) {\n            newVelocity.x -= this.MAXSPEED;\n            this.facingDirection = 4;\n        }\n\n        if (keysDown.includes(\"KeyD\") || keysDown.includes(\"ArrowRight\")) {\n            newVelocity.x += this.MAXSPEED;\n            this.facingDirection = 2;\n        }\n\n        if (oldFacingDirection !== this.facingDirection) {\n            this.spriteInterpreter = this.spriteInterpreterList[this.facingDirection]\n        }\n\n        if (keysDown.length === 0) {\n            this.facingDirection = 0;\n        }\n\n        this.velocity = newVelocity;\n    };\n\n    stopMovement() {\n        this.facingDirection = 0;\n        this.velocity = new Vector(0, 0);\n        this.spriteInterpreter = this.spriteInterpreterList[0];\n    };\n\n    setCollisionDetectionObject(object) {\n        if (object instanceof CollisionDetection) {\n            this.collisionDetection = object;\n        }\n    };\n\n    returnNetworkData() {\n        return {\n            p: {\n                x: this.position.x,\n                y: this.position.y\n            },\n            f: this.facingDirection\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/spriteInterpreter.js":
/*!**********************************!*\
  !*** ./src/spriteInterpreter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.SpriteInterpreter = class SpriteInterpreter {\n    constructor(\n       image,\n       scale,\n       startShapeIndex,\n       shapeCount,\n       shapesX,\n       shapesY,\n       paddingX = 0,\n       paddingY = 0,\n       speed = 0 \n    ){\n       this.image = image;\n       this.scale = scale;\n       this.currentShapeIndex = startShapeIndex;\n       this.startShapeIndex = startShapeIndex;\n       this.endShapeIndex = startShapeIndex + shapeCount;\n       this.shapesX = shapesX;\n       this.shapesY = shapesY;\n       this.paddingX = paddingX;\n       this.paddingY = paddingY;\n       this.speed = speed;\n\n       this.shapeWidth = (this.image.width - this.paddingX * (this.shapesX - 1)) / this.shapesX;\n       this.shapeHeight = (this.image.height - this.paddingY * (this.shapesY - 1)) / this.shapesY;\n       this.nextFrameTime = new Date().getTime();\n    };\n    \n    draw(ctx) {\n        let currentTime = new Date().getTime();\n        if(this.speed > 0 && currentTime > this.nextFrameTime){\n            this.currentShapeIndex ++;\n            this.nextFrameTime = currentTime + (1000/this.speed);\n        };\n        if(this.currentShapeIndex > this.endShapeIndex){\n            this.currentShapeIndex = this.startShapeIndex;\n        };\n        let posX = (this.currentShapeIndex % this.shapesX) * this.shapeWidth + (this.currentShapeIndex % this.shapesX) * this.paddingX;\n        let posY = Math.floor(this.currentShapeIndex / this.shapesX) * this.shapeHeight + Math.floor(this.currentShapeIndex / this.shapesX) * this.paddingY;\n\n        ctx.drawImage(\n            this.image,\n            posX,\n            posY,\n            this.shapeWidth,\n            this.shapeHeight,\n            0,\n            0,\n            this.shapeWidth * this.scale,\n            this.shapeHeight * this.scale\n        );\n    };\n};\n\n//# sourceURL=webpack:///./src/spriteInterpreter.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.UI = class UI {\n    constructor() {\n        this.cfg = document.getElementById(\"foreground\");   //cfg = canvas foreground\n        this.cbg = document.getElementById(\"background\");   //cbg = canvas background\n        this.loadingHtml = document.getElementById(\"loadingAssets\");\n    }\n\n    addAutoResizeCanvas() {\n        this.resizeCanvas();\n\n        window.addEventListener(\"resize\", _ => {\n            this.resizeCanvas();\n        })\n    }\n\n    resizeCanvas() {\n        this.cfg.width = window.innerWidth;\n        this.cfg.height = window.innerHeight;\n\n        this.cbg.width = window.innerWidth;\n        this.cbg.height = window.innerHeight;\n    }\n\n    drawLoadingScreen() {\n        this.loadingHtml.style.display = \"block\";\n    }\n\n    hideLoadingScreen() {\n        this.loadingHtml.style.display = \"none\";\n    }\n}\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.Vector = class Vector {\n    constructor(x,y) {\n        this.x = x;\n        this.y = y;\n    };\n\n    copy() {\n        return new Vector(this.x, this.y);\n    };\n\n    add(otherVector) {\n        this.x += otherVector.x;\n        this.y += otherVector.y;\n    };\n\n    sub(otherVector) {\n        this.x -= otherVector.x;\n        this.y -= otherVector.y;\n    };\n\n    // scalar multiplication. see https://www.mathebibel.de/skalarmultiplikation\n    mul_scalar(scalar) {\n        return new Vector(Number((this.x * scalar).toFixed(3)), Number((this.y * scalar).toFixed(3)));\n    }\n};\n\n//# sourceURL=webpack:///./src/vector.js?");

/***/ })

/******/ });