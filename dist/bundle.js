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

/***/ "./src/collisionDetection.js":
/*!***********************************!*\
  !*** ./src/collisionDetection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CollisionDetection; });\nclass CollisionDetection {\n    constructor(colliders) {\n        this.colliders = colliders;\n    }\n\n    addCollidier(obj) {\n        if (obj instanceof GameObject) {\n            this.colliders.push(obj)\n        };\n    };\n\n    isColliding(position, hitBox) {\n        let isColliding = false;\n        this.colliders.forEach(collider => {\n            if (position.x <= collider.position.x + collider.hitBox.width\n             && position.x + hitBox.width >= collider.position.x\n             && position.y <= collider.position.y + collider.hitBox.height\n             && position.y + hitBox.height >= collider.position.y) {\n                isColliding = true;\n            }\n        });\n\n        return isColliding\n    }\n};\n\n//# sourceURL=webpack:///./src/collisionDetection.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/dungeon_sheet.png */ \"./img/dungeon_sheet.png\");\n/* harmony import */ var _img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_Testmap_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/Testmap.json */ \"./img/Testmap.json\");\nvar _img_Testmap_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../img/Testmap.json */ \"./img/Testmap.json\", 1);\n/* harmony import */ var _img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/BODY_skeleton.png */ \"./img/BODY_skeleton.png\");\n/* harmony import */ var _img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inputHandler */ \"./src/inputHandler.js\");\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\n\n\n\n\n\n\n\n\nclass Game {\n    constructor(gameWidth, gameHeight) {\n        this.width = gameWidth;\n        this.height = gameHeight;\n        this.objects = [];\n        //this.objects.push(new GameObject(10,10,10,10), new GameObject(30,10,10,10))\n        this.map = new _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_img_Testmap_json__WEBPACK_IMPORTED_MODULE_4__, _img_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_3___default.a, 240, 24, 10);\n        this.character = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_img_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_5___default.a, 100, 100);\n        this.inputHandler = new _inputHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.character, this);\n        this.collisionDetection = new _collisionDetection__WEBPACK_IMPORTED_MODULE_7__[\"default\"]([...this.map.colliders]);\n        this.character.setCollisionDetectionObject(this.collisionDetection);\n    };\n\n    draw(ctx) {\n        this.map.draw(ctx);\n        for (var i = 0; i < this.objects.length; i++) {\n            let object = this.objects[i];\n            object.draw(ctx);\n        };\n        this.character.draw(ctx);\n    };\n    \n    update() {\n        this.inputHandler.handleInput();\n        for (var i = 0; i < this.objects.length; i++) {\n            let object = this.objects[i];\n            object.update();\n        };\n        this.character.update();\n    };\n};\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameObject.js":
/*!***************************!*\
  !*** ./src/gameObject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\n\nclass GameObject {\n    constructor(spriteInterpreter, x, y) {\n        this.spriteInterpreter = spriteInterpreter;\n        this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x,y);\n        this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n\n        let shapeWidth = this.spriteInterpreter != null ? this.spriteInterpreter.shapeWidth : 0;\n        let shapeHeight = this.spriteInterpreter != null ? this.spriteInterpreter.shapeHeight : 0;\n\n        this.hitBox = {\n            width: shapeWidth,\n            height: shapeHeight \n        };\n\n    };\n\n    draw(ctx) {\n        ctx.save();\n        ctx.translate(this.position.x, this.position.y);\n\n        if(this.spriteInterpreter != null){\n            this.spriteInterpreter.draw(ctx);\n        };\n\n        ctx.restore();\n    };\n    \n    update() {\n        this.position.add(this.velocity);\n    };\n    \n    drawDebug() {\n        ctx.strokeStyle = \"red\";\n        ctx.strokeRect(this.position.x,this.position.y,this.hitBox.width,this.hitBox.height);\n    };\n};\n\n//# sourceURL=webpack:///./src/gameObject.js?");

/***/ }),

/***/ "./src/inputHandler.js":
/*!*****************************!*\
  !*** ./src/inputHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler{\n    constructor(player, game){\n        this.player = player;\n        this.game = game;\n        this.keysDown = [];\n        document.addEventListener(\"keydown\",event => {\n            switch(event.code) {\n                case \"KeyW\":\n                case \"KeyA\":\n                case \"KeyS\":\n                case \"KeyD\":\n                case \"ArrowUp\":\n                case \"ArrowDown\":\n                case \"ArrowLeft\":\n                case \"ArrowRight\":\n                    if(!this.keysDown.includes(event.code)){\n                        this.keysDown.unshift(event.code);\n                    };\n            };\n        });\n        document.addEventListener(\"keyup\",event => {\n            switch(event.code) {\n                case \"KeyW\":\n                case \"KeyA\":\n                case \"KeyS\":\n                case \"KeyD\":\n                case \"ArrowUp\":\n                case \"ArrowDown\":\n                case \"ArrowLeft\":\n                case \"ArrowRight\":\n                    let index = this.keysDown.indexOf(event.code);\n                    \n                    if(index > - 1){\n                        this.keysDown.splice(index, 1);\n                    };\n                    \n                    if(this.keysDown.length === 0){\n                        this.player.stopMovement();\n                    };\n            };\n        });\n    };\n    handleInput() {\n        if(this.keysDown.length > 0){\n            this.player.movePlayer(this.keysDown);\n        };\n    };\n};\n\n//# sourceURL=webpack:///./src/inputHandler.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById(\"game\");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\nconst ctx = canvas.getContext(\"2d\");\nctx.imageSmoothingEnabled = false;\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height);\n\nconst gameLoop = () => {\n    ctx.clearRect(0,0,canvas.width, canvas.height);\n    \n    game.update();\n    game.draw(ctx);\n    \n    requestAnimationFrame(gameLoop);\n};\n\ngameLoop();\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _spriteInterpreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteInterpreter */ \"./src/spriteInterpreter.js\");\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n\n\n\nclass Map {\n    constructor(mapJson, mapImage, totalShapeCount, shapesInRow, shapesInColumn){\n        this.SCALE = 2.5;\n        this.spriteinterpreter = new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n            mapImage,\n            this.SCALE,\n            0,\n            totalShapeCount - 1,\n            shapesInRow,\n            shapesInColumn,\n            0,\n            0,\n            100\n        );\n        this.tileLayers = mapJson.layers.filter(layer => layer.type === \"tilelayer\");\n        this.colliders = [] ;    \n        mapJson.layers.forEach(layer =>{\n            if(layer.type === \"objectgroup\"){\n                layer.objects.forEach(object => {\n                    let newCollider = new _gameObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](null, object.x * this.SCALE, object.y * this.SCALE);\n                    newCollider.hitBox = {\n                        width: object.width * this.SCALE, \n                        height: object.height * this.SCALE  \n                    };\n                    this.colliders.push(newCollider);\n                })\n            };\n        });\n    };\n    draw(ctx) {\n        this.tileLayers.forEach(layer =>{\n            let x = 0;\n            let y = 0;\n            layer.data.forEach((value, index) => {\n                this.spriteinterpreter.currentShapeIndex = value - 1;\n                \n                x = index % layer.width;\n                y = Math.floor(index / layer.width);\n                \n                ctx.save();\n                ctx.translate(\n                    x * this.spriteinterpreter.shapeWidth * this.SCALE,\n                    y * this.spriteinterpreter.shapeHeight * this.SCALE\n                );\n                \n                this.spriteinterpreter.draw(ctx);\n                ctx.restore();\n            });\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n/* harmony import */ var _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spriteInterpreter */ \"./src/spriteInterpreter.js\");\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\n\n\n\n\nclass Player extends _gameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(imgSprite,x,y){\n        let PADDINGX = 34;\n        let PADDINGY = 10;\n        let SCALE = 1;\n        let spriteInterpreter = new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, SCALE, 18, 0, 9, 4, PADDINGX, PADDINGY);\n        \n        super(spriteInterpreter, x, y);\n        this.SCALE = SCALE;\n        this.MAXSPEED = 2;\n        this.facingDirection = 0;\n        this.spriteInterpreterList = [\n            spriteInterpreter,\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE,  1, 7, 9, 4, PADDINGX, PADDINGY, 10),\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE, 27, 7, 9, 4, PADDINGX, PADDINGY, 10),\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE, 19, 7, 9, 4, PADDINGX, PADDINGY, 10),\n            new _spriteInterpreter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imgSprite, this.SCALE,  9, 7, 9, 4, PADDINGX, PADDINGY, 10)\n        ];\n\n        this.collisionDetection = null;\n    };\n\n    update() {\n        if (this.collisionDetection != null) {\n            //check for Collision before updating position\n            let oldPosition = this.position.copy();\n\n            //check if the hitbox of the next frame collides with something when only the xVelocity is added to the hitbox\n            this.position.x += this.velocity.x;\n            let isCollidingX = this.collisionDetection.isColliding(this.position, this.hitBox);\n\n            if (isCollidingX) {\n                // if it collides reset this the xVelocity\n                this.velocity.x = 0;\n            }\n\n            //reset the hitbox to now check the yAxis\n            this.position = oldPosition.copy();\n\n            //check if the hitbox of the next frame collides with something when only the yVelocity is added to the hitbox\n            this.position.y += this.velocity.y;\n            let isCollidingY = this.collisionDetection.isColliding(this.position, this.hitBox);\n\n            if (isCollidingY) {\n                // if it collides reset this the yVelocity\n                this.velocity.y = 0;\n            }\n\n            //reset the hitbox and the position because through object reference the position variable changed too\n            this.position = oldPosition.copy();\n        }\n\n        super.update();\n    };\n\n    movePlayer(keysDown) {\n        var newVelocity = new _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0,0);\n        let oldFacingDirection = this.facingDirection;\n\n        // Change speed and faced direction according to keyboard input\n        if (keysDown.includes(\"KeyW\") || keysDown.includes(\"ArrowUp\")) {\n            newVelocity.y -= this.MAXSPEED;\n            this.facingDirection = 1;\n        }\n\n        if (keysDown.includes(\"KeyS\") || keysDown.includes(\"ArrowDown\")) {\n            newVelocity.y += this.MAXSPEED;\n            this.facingDirection = 3;\n        }\n\n        if (keysDown.includes(\"KeyA\") || keysDown.includes(\"ArrowLeft\")) {\n            newVelocity.x -= this.MAXSPEED;\n            this.facingDirection = 4;\n        }\n\n        if (keysDown.includes(\"KeyD\") || keysDown.includes(\"ArrowRight\")) {\n            newVelocity.x += this.MAXSPEED;\n            this.facingDirection = 2;\n        }\n\n        if (oldFacingDirection !== this.facingDirection) {\n            this.spriteInterpreter = this.spriteInterpreterList[this.facingDirection]\n        }\n\n        this.velocity = newVelocity;\n    };\n\n    stopMovement() {\n        this.facingDirection = 0;\n        this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0, 0);\n        this.spriteInterpreter = this.spriteInterpreterList[0];\n    };\n\n    setCollisionDetectionObject(object) {\n        if (object instanceof _collisionDetection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            this.collisionDetection = object;\n        };\n    };\n};\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/spriteInterpreter.js":
/*!**********************************!*\
  !*** ./src/spriteInterpreter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpriteInterpreter; });\nclass SpriteInterpreter {\n    constructor(\n       image,\n       scale,\n       startShapeIndex,\n       shapeCount,\n       shapesX,\n       shapesY,\n       paddingX = 0,\n       paddingY = 0,\n       speed = 0 \n    ){\n       this.image = new Image();\n       this.image.src = image;\n       this.scale = scale;\n       this.currentShapeIndex = startShapeIndex;\n       this.startShapeIndex = startShapeIndex;\n       this.endShapeIndex = startShapeIndex + shapeCount;\n       this.shapesX = shapesX;\n       this.shapesY = shapesY;\n       this.paddingX = paddingX;\n       this.paddingY = paddingY;\n       this.speed = speed;\n\n       this.shapeWidth = (this.image.width - this.paddingX * (this.shapesX - 1)) / this.shapesX;\n       this.shapeHeight = (this.image.height - this.paddingY * (this.shapesY - 1)) / this.shapesY;\n       this.nextFrameTime = new Date().getTime();\n    };\n    \n    draw(ctx) {\n        let currentTime = new Date().getTime();\n        if(this.speed > 0 && currentTime > this.nextFrameTime){\n            this.currentShapeIndex ++;\n            this.nextFrameTime = currentTime + (1000/this.speed);\n        };\n        if(this.currentShapeIndex > this.endShapeIndex){\n            this.currentShapeIndex = this.startShapeIndex;\n        };\n        let posX = (this.currentShapeIndex % this.shapesX) * this.shapeWidth + (this.currentShapeIndex % this.shapesX) * this.paddingX;\n        let posY = Math.floor(this.currentShapeIndex / this.shapesX) * this.shapeHeight + Math.floor(this.currentShapeIndex / this.shapesX) * this.paddingY;\n\n        ctx.drawImage(\n            this.image,\n            posX,\n            posY,\n            this.shapeWidth,\n            this.shapeHeight,\n            0,\n            0,\n            this.shapeWidth * this.scale,\n            this.shapeHeight * this.scale\n        );\n    };\n};\n\n//# sourceURL=webpack:///./src/spriteInterpreter.js?");

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\nclass Vector {\n    constructor(x,y) {\n        this.x = x;\n        this.y = y;\n    };\n\n    copy() {\n        return new Vector(this.x, this.y);\n    };\n\n    add(otherVector) {\n        this.x += otherVector.x;\n        this.y += otherVector.y;\n    };\n\n    sub(otherVector) {\n        this.x -= otherVector.x;\n        this.y -= otherVector.y;\n    };\n};\n\n//# sourceURL=webpack:///./src/vector.js?");

/***/ })

/******/ });