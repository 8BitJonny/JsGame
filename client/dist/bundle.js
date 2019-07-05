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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AssetLoader; });\n/* harmony import */ var _img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/BODY_skeleton.png */ \"./img/BODY_skeleton.png\");\n/* harmony import */ var _img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/dungeon_sheet.png */ \"./img/dungeon_sheet.png\");\n/* harmony import */ var _img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass AssetLoader {\r\n    constructor() {\r\n        this.imagesToBeLoaded = 0;\r\n        this.startedLoading = false;\r\n        this.sprites = {};\r\n    }\r\n\r\n    loadAssets() {\r\n        this.sprites[\"player1\"] = this._imageForPath(_img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n        this.sprites[\"map1\"] = this._imageForPath(_img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_1___default.a);\r\n        \r\n        this.startedLoading = true;\r\n    };\r\n\r\n    isFinishedLoading() {\r\n        return this.imagesToBeLoaded <= 0 && this.startedLoading;\r\n    };\r\n\r\n    _imageForPath(path) {\r\n        let newImage = new Image();\r\n        newImage.src = path;\r\n        newImage.addEventListener('load', _ => {\r\n            this.imagesToBeLoaded--\r\n        }, false);\r\n        this.imagesToBeLoaded++;\r\n        return newImage;\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/assetLoader.js?");

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Camera; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n\r\n\r\n\r\n\r\n\r\nclass Camera {\r\n    constructor() {\r\n        this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\r\n        this.frameCount = 1;\r\n     };\r\n\r\n    getLocalPosition(gameObject) {\r\n        if(gameObject instanceof _gameObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]){\r\n            return gameObject.position.add(this.position);\r\n        };\r\n    };\r\n\r\n    moveToKeepObjectFocused(gameObject) {\r\n        let localPosition = this.getLocalPosition(gameObject);\r\n        this.frameCount = this.frameCount === 1 ? 2 : 1;\r\n\r\n        if (localPosition.x < window.innerWidth * 0.25) {\r\n            if (this.frameCount === 1) {\r\n                this.position.x += 1;    \r\n            } else {\r\n                this.position.x += 2;\r\n            };\r\n        };\r\n\r\n        if (localPosition.x > window.innerWidth * 0.75){\r\n            if (this.frameCount === 1) {\r\n                this.position.x -= 1;\r\n            } else {\r\n                this.position.x -= 2;\r\n            };\r\n        };\r\n        \r\n        if (localPosition.y < window.innerHeight * 0.25){\r\n            if(this.frameCount === 1) {\r\n                this.position.y += 1;\r\n            } else {\r\n                this.position.y += 2;\r\n            };\r\n        };\r\n        \r\n        if (localPosition.y > window.innerHeight * 0.75){    \r\n            if (this.frameCount === 1) {\r\n                this.position.y -= 1; \r\n            } else {\r\n                this.position.y -= 2;\r\n            };\r\n        };    \r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/camera.js?");

/***/ }),

/***/ "./src/collisionDetection.js":
/*!***********************************!*\
  !*** ./src/collisionDetection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CollisionDetection; });\nclass CollisionDetection {\r\n    constructor(colliders) {\r\n        this.colliders = colliders;\r\n    }\r\n\r\n    addCollidier(obj) {\r\n        if (obj instanceof GameObject) {\r\n            this.colliders.push(obj)\r\n        };\r\n    };\r\n\r\n    isColliding(position, hitBox) {\r\n        let isColliding = false;\r\n        this.colliders.forEach(collider => {\r\n            if (position.x <= collider.position.x + collider.hitBox.width\r\n             && position.x + hitBox.width >= collider.position.x\r\n             && position.y <= collider.position.y + collider.hitBox.height\r\n             && position.y + hitBox.height >= collider.position.y) {\r\n                isColliding = true;\r\n            }\r\n        });\r\n\r\n        return isColliding\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/collisionDetection.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _img_Testmap_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Testmap.json */ \"./img/Testmap.json\");\nvar _img_Testmap_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../img/Testmap.json */ \"./img/Testmap.json\", 1);\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n/* harmony import */ var _networking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./networking */ \"./src/networking.js\");\n/* harmony import */ var _assetLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assetLoader */ \"./src/assetLoader.js\");\n/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputHandler */ \"./src/inputHandler.js\");\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./camera */ \"./src/camera.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.ctxForeground = {};\r\n        this.ctxBackground = {};\r\n\r\n        this.ui = new _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n        this.camera = new _camera__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\r\n        this.map = {};\r\n        this.objects = [];\r\n        this.character = {};\r\n        this.onlinePlayer = {};\r\n        this.networking = {};\r\n        this.inputHandler = {};\r\n        this.collisionDetection = {};\r\n        this.assetLoader = new _assetLoader__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\n        this.debugShow = false;\r\n\r\n    };\r\n    \r\n    start() {\r\n        this.setupCanvas();\r\n\r\n        this.assetLoader.loadAssets();\r\n\r\n        this.waitForLoadedAssetsAndStart();\r\n    }\r\n\r\n    setupCanvas() {\r\n        this.ui.addAutoResizeCanvas();\r\n\r\n        this.ctxForeground = this.ui.cfg.getContext(\"2d\");\r\n        this.ctxForeground.imageSmoothingEnabled = false;\r\n\r\n        this.ctxBackground = this.ui.cbg.getContext(\"2d\");\r\n        this.ctxBackground.imageSmoothingEnabled = false;\r\n    }\r\n\r\n    gameLoop() {\r\n        this.ctxForeground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);\r\n        this.ctxBackground.clearRect(0,0,this.ui.cfg.width, this.ui.cfg.height);\r\n\r\n        this.update();\r\n        this.draw();\r\n        \r\n        requestAnimationFrame(this.gameLoop.bind(this));\r\n    }\r\n\r\n    waitForLoadedAssetsAndStart() {\r\n        if (this.assetLoader.isFinishedLoading() === false) {\r\n            this.ui.drawLoadingScreen();\r\n            requestAnimationFrame(this.waitForLoadedAssetsAndStart.bind(this));\r\n        } else {\r\n            this.ui.hideLoadingScreen();\r\n            this.initializeGameObjects();\r\n            this.map.drawBackground(this.ctxBackground);\r\n            this.connectToServer();\r\n            this.gameLoop();\r\n        }\r\n    }\r\n\r\n    initializeGameObjects() {\r\n        this.map = new _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_img_Testmap_json__WEBPACK_IMPORTED_MODULE_3__, this.assetLoader.sprites[\"map1\"], 240, 24, 10);\r\n        this.character = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.assetLoader.sprites[\"player1\"], 100, 100);\r\n\r\n        window.addEventListener(\"resize\", _ => {\r\n            this.ctxForeground.imageSmoothingEnabled = false;\r\n            this.ctxBackground.imageSmoothingEnabled = false;\r\n            this.map.drawBackground(this.ctxBackground);\r\n        });\r\n\r\n        this.inputHandler = new _inputHandler__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.character, this);\r\n        this.collisionDetection = new _collisionDetection__WEBPACK_IMPORTED_MODULE_8__[\"default\"]([...this.map.colliders]);\r\n        this.character.setCollisionDetectionObject(this.collisionDetection);\r\n    }\r\n\r\n    draw() {\r\n        this.ctxBackground.save();\r\n        this.ctxForeground.save();\r\n        \r\n        this.ctxBackground.translate(this.camera.position.x, this.camera.position.y);\r\n        this.ctxForeground.translate(this.camera.position.x, this.camera.position.y);\r\n\r\n        this.map.drawForeground(this.ctxForeground);\r\n        this.map.drawBackground(this.ctxBackground);\r\n        \r\n        for (var i = 0; i < this.objects.length; i++) {\r\n            let object = this.objects[i];\r\n            object.draw(this.ctxForeground);\r\n        };\r\n        this.character.draw(this.ctxForeground);\r\n        \r\n        if(this.debugShow === true){\r\n            for (var i = 0; i < this.collisionDetection.colliders.length; i++) {\r\n                let object = this.collisionDetection.colliders[i];\r\n                console.log(this.collisionDetection.colliders);\r\n                object.drawDebug(this.ctxForeground);\r\n\r\n            }; \r\n            this.character.drawDebug(this.ctxForeground);\r\n        };\r\n\r\n        for (var playerId in this.onlinePlayer) {\r\n            if (this.onlinePlayer.hasOwnProperty(playerId)) {\r\n                this.onlinePlayer[playerId].draw(this.ctxForeground)\r\n            };\r\n        };\r\n        this.ctxBackground.restore();\r\n        this.ctxForeground.restore();\r\n\r\n        \r\n    };\r\n    \r\n    update() {\r\n        this.inputHandler.handleInput();\r\n        for (var i = 0; i < this.objects.length; i++) {\r\n            let object = this.objects[i];\r\n            object.update();\r\n        };\r\n        this.character.update();\r\n\r\n        this.networking.sendPosition(this.character);\r\n\r\n        for (var playerId in this.onlinePlayer) {\r\n            if (this.onlinePlayer.hasOwnProperty(playerId)) {\r\n              this.onlinePlayer[playerId].update()\r\n            };\r\n        };\r\n        this.camera.moveToKeepObjectFocused(this.character);\r\n    };\r\n    \r\n    connectToServer() {\r\n        this.networking = new _networking__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('https://bga.timonchristiansen.com', (payload) => {\r\n            let updatedPlayer = [];\r\n            for (var playerId in payload.p) {\r\n                var serverPlayer = payload.p[playerId];\r\n                if (this.networking.socket.userid === playerId) {\r\n                \r\n                } else if (this.isValidNetworkObject(serverPlayer)) {\r\n                    updatedPlayer.push(playerId);\r\n                    if (this.onlinePlayer.hasOwnProperty(playerId)) {\r\n                        var curPlayer = this.onlinePlayer[playerId];\r\n                        curPlayer.position.x = serverPlayer.position.x;\r\n                        curPlayer.position.y = serverPlayer.position.y;\r\n                        curPlayer.facing = serverPlayer.facing;\r\n                        curPlayer.spriteInterpreter = curPlayer.spriteInterpreterList[serverPlayer.facing];\r\n                    } else {\r\n                        this.onlinePlayer[playerId] = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.assetLoader.sprites[\"player1\"], serverPlayer.position.x, serverPlayer.position.y)\r\n                    };\r\n                };\r\n            };\r\n\r\n            for (var playerId in this.onlinePlayer) {\r\n                if (this.onlinePlayer.hasOwnProperty(playerId)) {\r\n                    let index = updatedPlayer.indexOf(playerId);\r\n                    \r\n                    if(index === - 1){\r\n                        delete this.onlinePlayer[playerId];\r\n                    };\r\n                };\r\n            };\r\n        });\r\n    };\r\n\r\n    isValidNetworkObject(obj) {\r\n        return obj.hasOwnProperty(\"facing\") && obj.hasOwnProperty(\"position\") && obj.hasOwnProperty(\"userid\")\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameObject.js":
/*!***************************!*\
  !*** ./src/gameObject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\r\n\r\nclass GameObject {\r\n    constructor(spriteInterpreter, x, y) {\r\n        this.spriteInterpreter = spriteInterpreter;\r\n        this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x,y);\r\n        this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\r\n\r\n        let shapeWidth = this.spriteInterpreter != null ? this.spriteInterpreter.shapeWidth : 0;\r\n        let shapeHeight = this.spriteInterpreter != null ? this.spriteInterpreter.shapeHeight : 0;\r\n\r\n        this.hitBox = {\r\n            width: shapeWidth,\r\n            height: shapeHeight \r\n        };\r\n\r\n    };\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position.x, this.position.y);\r\n\r\n        if(this.spriteInterpreter != null){\r\n            this.spriteInterpreter.draw(ctx);\r\n        };\r\n\r\n        ctx.restore();\r\n    };\r\n    \r\n    update() {\r\n        this.position = this.position.add(this.velocity);\r\n    };\r\n    \r\n    drawDebug(ctx) {\r\n        ctx.strokeStyle = \"red\";\r\n        ctx.strokeRect(this.position.x,this.position.y,this.hitBox.width,this.hitBox.height);\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/gameObject.js?");

/***/ }),

/***/ "./src/inputHandler.js":
/*!*****************************!*\
  !*** ./src/inputHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler{\r\n    constructor(player, game){\r\n        this.player = player;\r\n        this.game = game;\r\n        this.keysDown = [];\r\n        document.addEventListener(\"keydown\",event => {\r\n            switch(event.code) {\r\n                case \"KeyW\":\r\n                case \"KeyA\":\r\n                case \"KeyS\":\r\n                case \"KeyD\":\r\n                case \"ArrowUp\":\r\n                case \"ArrowDown\":\r\n                case \"ArrowLeft\":\r\n                case \"ArrowRight\":\r\n                    if(!this.keysDown.includes(event.code)){\r\n                        this.keysDown.unshift(event.code);\r\n                    };\r\n            };\r\n        });\r\n        document.addEventListener(\"keyup\",event => {\r\n            switch(event.code) {\r\n                case \"KeyW\":\r\n                case \"KeyA\":\r\n                case \"KeyS\":\r\n                case \"KeyD\":\r\n                case \"ArrowUp\":\r\n                case \"ArrowDown\":\r\n                case \"ArrowLeft\":\r\n                case \"ArrowRight\":\r\n                    let index = this.keysDown.indexOf(event.code);\r\n                    \r\n                    if(index > - 1){\r\n                        this.keysDown.splice(index, 1);\r\n                    };\r\n                    \r\n                    if(this.keysDown.length === 0){\r\n                        this.player.stopMovement();\r\n                    };\r\n            };\r\n        });\r\n    };\r\n    handleInput() {\r\n        if(this.keysDown.length > 0){\r\n            this.player.movePlayer(this.keysDown);\r\n        };\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/inputHandler.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ngame.start();\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _spriteInterpreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteInterpreter */ \"./src/spriteInterpreter.js\");\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n\r\n\r\n\r\nclass Map {\r\n    constructor(mapJson, mapImage, totalShapeCount, shapesInRow, shapesInColumn){\r\n        this.SCALE = 4;\r\n        this.spriteinterpreter = new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n            mapImage,\r\n            this.SCALE,\r\n            0,\r\n            totalShapeCount - 1,\r\n            shapesInRow,\r\n            shapesInColumn,\r\n        );\r\n        this.backgroundLayers = [];\r\n        this.foregroundLayers = [];\r\n        this.colliders = [];\r\n\r\n        this.readMapData(mapJson);\r\n    };\r\n\r\n    drawBackground(ctx) {\r\n        this.draw(ctx, this.backgroundLayers);\r\n    };\r\n\r\n    drawForeground(ctx) {\r\n        this.draw(ctx, this.foregroundLayers);\r\n    };\r\n\r\n    draw(ctx, tileLayers) {\r\n        tileLayers.forEach(layer =>{\r\n            let x = 0;\r\n            let y = 0;\r\n            layer.data.forEach((value, index) => {\r\n                this.spriteinterpreter.currentShapeIndex = value - 1;\r\n\r\n                x = index % layer.width;\r\n                y = Math.floor(index / layer.width);\r\n                \r\n                ctx.save();\r\n                ctx.translate(\r\n                    x * this.spriteinterpreter.shapeWidth * this.SCALE,\r\n                    y * this.spriteinterpreter.shapeHeight * this.SCALE\r\n                );\r\n                \r\n                this.spriteinterpreter.draw(ctx);\r\n                ctx.restore();\r\n            });\r\n        });\r\n    };\r\n\r\n    readMapData(json) {\r\n        json.layers.forEach(layer =>{\r\n            switch(layer.type) {\r\n                case \"tilelayer\":\r\n                    switch (layer.name) {\r\n                        case \"Backround\":\r\n                            this.backgroundLayers.push(layer);\r\n                            break;\r\n                        case \"Foreground\":\r\n                            this.foregroundLayers.push(layer);\r\n                            break;\r\n                    }\r\n                    break;\r\n                case \"objectgroup\":\r\n                    layer.objects.forEach(object => {\r\n                        let newCollider = new _gameObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](null, object.x * this.SCALE, object.y * this.SCALE);\r\n                        newCollider.hitBox = {\r\n                            width: object.width * this.SCALE, \r\n                            height: object.height * this.SCALE  \r\n                        };\r\n                        this.colliders.push(newCollider);\r\n                    });\r\n                    break;\r\n            };\r\n        });\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/networking.js":
/*!***************************!*\
  !*** ./src/networking.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Networking; });\nclass Networking {\r\n    constructor(ip,serverStateHandler) {\r\n        this.socket = io.connect(ip);\r\n        this.socket.on(\"onconnected\", (payload) => {\r\n            this.socket.userid = payload.id;\r\n            this.networkStatus.innerHTML = \"Connected\";\r\n        });\r\n\r\n        this.socket.on(\"disconnect\", () => {\r\n            this.networkStatus.innerHTML = \"Offline\";\r\n        })\r\n\r\n        this.socket.on(\"sp\", (payload) => {\r\n            var tof = new Date().getTime() - parseFloat (payload.t);\r\n            this.pingHtml.innerHTML = tof / 2\r\n        })\r\n\r\n        this.socket.on(\"serverstate\", (payload) => {\r\n            serverStateHandler(payload)\r\n        })\r\n\r\n        this.startPingTimer()\r\n\r\n        this.networkStatus = document.getElementById(\"connectionStatus\");\r\n        this.pingHtml = document.getElementById(\"ping\");\r\n    }\r\n\r\n    startPingTimer() {\r\n        setInterval(() => {\r\n            this.last_ping_time = new Date().getTime()\r\n            this.socket.emit(\"cp\", { t:this.last_ping_time });\r\n        }, 1000);\r\n    }\r\n\r\n    sendPosition(character) {\r\n        this.socket.emit(\"i\", { x: character.position.x, y: character.position.y, f: character.facingDirection})\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/networking.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n/* harmony import */ var _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spriteInterpreter */ \"./src/spriteInterpreter.js\");\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\r\n\r\n\r\n\r\n\r\nclass Player extends _gameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(imgSprite,x,y){\r\n        let PADDINGX = 34;\r\n        let PADDINGY = 10;\r\n        let SCALE = 1;\r\n        let spriteInterpreter = new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, SCALE, 18, 0, 9, 4, PADDINGX, PADDINGY);\r\n        \r\n        super(spriteInterpreter, x, y);\r\n        this.SCALE = SCALE;\r\n        this.MAXSPEED = 2;\r\n        this.facingDirection = 0;\r\n        this.spriteInterpreterList = [\r\n            spriteInterpreter,\r\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE,  1, 7, 9, 4, PADDINGX, PADDINGY, 10),\r\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE, 27, 7, 9, 4, PADDINGX, PADDINGY, 10),\r\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE, 19, 7, 9, 4, PADDINGX, PADDINGY, 10),\r\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE,  9, 7, 9, 4, PADDINGX, PADDINGY, 10)\r\n        ];\r\n\r\n        this.collisionDetection = null;\r\n    };\r\n\r\n    update() {\r\n        if (this.collisionDetection != null) {\r\n            //check for Collision before updating position\r\n            let oldPosition = this.position.copy();\r\n\r\n            //check if the hitbox of the next frame collides with something when only the xVelocity is added to the hitbox\r\n            this.position.x += this.velocity.x;\r\n            let isCollidingX = this.collisionDetection.isColliding(this.position, this.hitBox);\r\n\r\n            if (isCollidingX) {\r\n                // if it collides reset this the xVelocity\r\n                this.velocity.x = 0;\r\n            }\r\n\r\n            //reset the hitbox to now check the yAxis\r\n            this.position = oldPosition.copy();\r\n\r\n            //check if the hitbox of the next frame collides with something when only the yVelocity is added to the hitbox\r\n            this.position.y += this.velocity.y;\r\n            let isCollidingY = this.collisionDetection.isColliding(this.position, this.hitBox);\r\n\r\n            if (isCollidingY) {\r\n                // if it collides reset this the yVelocity\r\n                this.velocity.y = 0;\r\n            }\r\n\r\n            //reset the hitbox and the position because through object reference the position variable changed too\r\n            this.position = oldPosition.copy();\r\n        }\r\n\r\n        super.update();\r\n    };\r\n\r\n    movePlayer(keysDown) {\r\n        var newVelocity = new _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0);\r\n        let oldFacingDirection = this.facingDirection;\r\n\r\n        // Change speed and faced direction according to keyboard input\r\n        if (keysDown.includes(\"KeyW\") || keysDown.includes(\"ArrowUp\")) {\r\n            newVelocity.y -= this.MAXSPEED;\r\n            this.facingDirection = 1;\r\n        }\r\n\r\n        if (keysDown.includes(\"KeyS\") || keysDown.includes(\"ArrowDown\")) {\r\n            newVelocity.y += this.MAXSPEED;\r\n            this.facingDirection = 3;\r\n        }\r\n\r\n        if (keysDown.includes(\"KeyA\") || keysDown.includes(\"ArrowLeft\")) {\r\n            newVelocity.x -= this.MAXSPEED;\r\n            this.facingDirection = 4;\r\n        }\r\n\r\n        if (keysDown.includes(\"KeyD\") || keysDown.includes(\"ArrowRight\")) {\r\n            newVelocity.x += this.MAXSPEED;\r\n            this.facingDirection = 2;\r\n        }\r\n\r\n        if (oldFacingDirection !== this.facingDirection) {\r\n            this.spriteInterpreter = this.spriteInterpreterList[this.facingDirection]\r\n        }\r\n\r\n        this.velocity = newVelocity;\r\n    };\r\n\r\n    stopMovement() {\r\n        this.facingDirection = 0;\r\n        this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, 0);\r\n        this.spriteInterpreter = this.spriteInterpreterList[0];\r\n    };\r\n\r\n    setCollisionDetectionObject(object) {\r\n        if (object instanceof _collisionDetection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\r\n            this.collisionDetection = object;\r\n        };\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/spriteInterpreter.js":
/*!**********************************!*\
  !*** ./src/spriteInterpreter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpriteInterpreter; });\nclass SpriteInterpreter {\r\n    constructor(\r\n       image,\r\n       scale,\r\n       startShapeIndex,\r\n       shapeCount,\r\n       shapesX,\r\n       shapesY,\r\n       paddingX = 0,\r\n       paddingY = 0,\r\n       speed = 0 \r\n    ){\r\n       this.image = image;\r\n       this.scale = scale;\r\n       this.currentShapeIndex = startShapeIndex;\r\n       this.startShapeIndex = startShapeIndex;\r\n       this.endShapeIndex = startShapeIndex + shapeCount;\r\n       this.shapesX = shapesX;\r\n       this.shapesY = shapesY;\r\n       this.paddingX = paddingX;\r\n       this.paddingY = paddingY;\r\n       this.speed = speed;\r\n\r\n       this.shapeWidth = (this.image.width - this.paddingX * (this.shapesX - 1)) / this.shapesX;\r\n       this.shapeHeight = (this.image.height - this.paddingY * (this.shapesY - 1)) / this.shapesY;\r\n       this.nextFrameTime = new Date().getTime();\r\n    };\r\n    \r\n    draw(ctx) {\r\n        let currentTime = new Date().getTime();\r\n        if(this.speed > 0 && currentTime > this.nextFrameTime){\r\n            this.currentShapeIndex ++;\r\n            this.nextFrameTime = currentTime + (1000/this.speed);\r\n        };\r\n        if(this.currentShapeIndex > this.endShapeIndex){\r\n            this.currentShapeIndex = this.startShapeIndex;\r\n        };\r\n        let posX = (this.currentShapeIndex % this.shapesX) * this.shapeWidth + (this.currentShapeIndex % this.shapesX) * this.paddingX;\r\n        let posY = Math.floor(this.currentShapeIndex / this.shapesX) * this.shapeHeight + Math.floor(this.currentShapeIndex / this.shapesX) * this.paddingY;\r\n\r\n        ctx.drawImage(\r\n            this.image,\r\n            posX,\r\n            posY,\r\n            this.shapeWidth,\r\n            this.shapeHeight,\r\n            0,\r\n            0,\r\n            this.shapeWidth * this.scale,\r\n            this.shapeHeight * this.scale\r\n        );\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/spriteInterpreter.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UI; });\nclass UI {\r\n    constructor() {\r\n        this.cfg = document.getElementById(\"foreground\");   //cfg = canvas foreground\r\n        this.cbg = document.getElementById(\"background\");   //cbg = canvas background\r\n        this.loadingHtml = document.getElementById(\"loadingAssets\");\r\n    }\r\n\r\n    addAutoResizeCanvas() {\r\n        this.resizeCanvas();\r\n\r\n        window.addEventListener(\"resize\", _ => {\r\n            this.resizeCanvas();\r\n        })\r\n    }\r\n\r\n    resizeCanvas() {\r\n        this.cfg.width = window.innerWidth;\r\n        this.cfg.height = window.innerHeight;\r\n\r\n        this.cbg.width = window.innerWidth;\r\n        this.cbg.height = window.innerHeight;\r\n    }\r\n\r\n    drawLoadingScreen() {\r\n        this.loadingHtml.style.display = \"block\";\r\n    }\r\n\r\n    hideLoadingScreen() {\r\n        this.loadingHtml.style.display = \"none\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\nclass Vector {\r\n    constructor(x,y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    };\r\n\r\n    copy() {\r\n        return new Vector(this.x, this.y);\r\n    };\r\n\r\n    add(otherVector) {\r\n        return new Vector(this.x + otherVector.x, this.y + otherVector.y);\r\n    };\r\n\r\n    sub(otherVector) {\r\n        return new Vector(this.x - otherVector.x, this.y - otherVector.y);\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/vector.js?");

/***/ })

/******/ });