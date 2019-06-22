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

/***/ "./ressources/images/BODY_skeleton.png":
/*!*********************************************!*\
  !*** ./ressources/images/BODY_skeleton.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/8a592a26be017c4deb54d55a28f4a2f6-BODY_skeleton.png\";\n\n//# sourceURL=webpack:///./ressources/images/BODY_skeleton.png?");

/***/ }),

/***/ "./ressources/images/imageNotFound.jpg":
/*!*********************************************!*\
  !*** ./ressources/images/imageNotFound.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/f49fd8004f850798b3d4def277983631-imageNotFound.jpg\";\n\n//# sourceURL=webpack:///./ressources/images/imageNotFound.jpg?");

/***/ }),

/***/ "./ressources/images/tileset.png":
/*!***************************************!*\
  !*** ./ressources/images/tileset.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./ressources/images/tileset.png?");

/***/ }),

/***/ "./ressources/map/testmap.json":
/*!*************************************!*\
  !*** ./ressources/map/testmap.json ***!
  \*************************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":15,\"infinite\":false,\"layers\":[{\"data\":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,1,1,1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,3,4,4,3,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,3,4,4,3,1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,3,3,3,3,3,1,2,1,2,3,4,4,3,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2,1,3,4,4,4,3,1,1,1,1,3,4,4,3,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,3,4,4,4,3,1,2,1,2,3,4,4,3,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,3,4,4,4,3,1,1,1,1,3,4,4,3,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,3,3,3,3,3,1,1,2,1,3,4,4,3,1,2,1,1,1,1,1,3,3,3,3,3,3,3,1,1,1,1,1,2,1,1,2,1,1,2,3,4,4,3,1,1,1,2,1,1,2,3,4,4,4,4,4,3,2,1,2,1,1,1,1,1,2,2,1,1,3,4,4,3,2,1,1,1,1,2,1,3,4,4,4,4,4,3,1,1,1,1,2,1,2,1,1,1,2,1,3,4,4,3,1,1,2,1,1,1,1,3,4,4,4,4,4,3,2,1,2,1,1,2,1,1,2,1,1,2,3,4,4,3,3,3,3,3,3,3,3,3,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],\"height\":15,\"id\":2,\"name\":\"Tile Layer 1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":30,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":3,\"name\":\"colliders\",\"objects\":[{\"height\":208,\"id\":37,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":16,\"y\":16},{\"height\":16,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":32,\"y\":208},{\"height\":64,\"id\":39,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":144,\"y\":144},{\"height\":16,\"id\":40,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":96,\"x\":160,\"y\":144},{\"height\":64,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":240,\"y\":160},{\"height\":16,\"id\":42,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":208,\"x\":256,\"y\":208},{\"height\":208,\"id\":43,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":448,\"y\":0},{\"height\":16,\"id\":44,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":416,\"x\":32,\"y\":0},{\"height\":64,\"id\":46,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":80,\"x\":304,\"y\":64}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":4,\"nextobjectid\":47,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.4\",\"tileheight\":16,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../test.tsx\"}],\"tilewidth\":16,\"type\":\"map\",\"version\":1.2,\"width\":30};\n\n//# sourceURL=webpack:///./ressources/map/testmap.json?");

/***/ }),

/***/ "./src/box.js":
/*!********************!*\
  !*** ./src/box.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Box; });\nclass Box {\n    constructor(position, width, height) {\n        this.position = position;\n        this.size = { width, height };\n    }\n\n    draw (ctx) {\n        ctx.strokeStyle = \"red\";\n        ctx.strokeRect(this.position.x, this.position.y, this.size.width, this.size.height);\n    }\n}\n\n//# sourceURL=webpack:///./src/box.js?");

/***/ }),

/***/ "./src/collisionDetection.js":
/*!***********************************!*\
  !*** ./src/collisionDetection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return collisionDetection; });\n/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box */ \"./src/box.js\");\n\n\nclass collisionDetection {\n    constructor(colliders) {\n        this.colliders = colliders;\n    }\n\n    addCollider(obj) {\n        if (obj instanceof _box__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.colliders.push(obj);\n        }\n    }\n\n    isColliding(hitBox) {\n        let isColliding = false;\n        this.colliders.forEach(collider => {\n            if (hitBox.position.x <= collider.position.x + collider.size.width\n             && hitBox.position.x + hitBox.size.width >= collider.position.x\n             && hitBox.position.y <= collider.position.y + collider.size.height\n             && hitBox.position.y + hitBox.size.height >= collider.position.y) {\n                isColliding = true;\n            }\n        });\n\n        return isColliding\n    }\n}\n\n//# sourceURL=webpack:///./src/collisionDetection.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputHandler */ \"./src/inputHandler.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _ressources_images_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ressources/images/BODY_skeleton.png */ \"./ressources/images/BODY_skeleton.png\");\n/* harmony import */ var _ressources_images_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ressources_images_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ressources_images_tileset_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ressources/images/tileset.png */ \"./ressources/images/tileset.png\");\n/* harmony import */ var _ressources_images_tileset_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ressources_images_tileset_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ressources_map_testmap_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ressources/map/testmap.json */ \"./ressources/map/testmap.json\");\nvar _ressources_map_testmap_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../ressources/map/testmap.json */ \"./ressources/map/testmap.json\", 1);\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n/* harmony import */ var _networking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./networking */ \"./src/networking.js\");\n\n\n\n\n\n\n\n\n\nclass Game {\n  constructor(gameWidth, gameHeight) {\n    this.DEBUG = false;\n    this.width = gameWidth;\n    this.height = gameHeight;\n\n    this.networking = new _networking__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('https://bga.timonchristiansen.com:4004', (payload) => {\n      for (var playerId in payload.p) {\n        var serverPlayer = payload.p[playerId];\n        if (this.networking.socket.userid === playerId) {\n        } else {\n          if (this.onlinePlayer.hasOwnProperty(playerId)) {\n            var curPlayer = this.onlinePlayer[playerId];\n            curPlayer.position.x = serverPlayer.position.x;\n            curPlayer.position.y = serverPlayer.position.y;\n            curPlayer.facing = serverPlayer.facing;\n            curPlayer.renderModel = curPlayer.renderables[serverPlayer.facing];\n          } else {\n            this.onlinePlayer[playerId] = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_ressources_images_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_3___default.a, serverPlayer.position.x, serverPlayer.position.y)\n          }\n        }\n      };\n    });\n\n    let map = new _map__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_ressources_map_testmap_json__WEBPACK_IMPORTED_MODULE_5__, _ressources_images_tileset_png__WEBPACK_IMPORTED_MODULE_4___default.a, 4, 4, 1);\n    this.character = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_ressources_images_BODY_skeleton_png__WEBPACK_IMPORTED_MODULE_3___default.a, 100, 100);\n    this.onlinePlayer = {};\n    let npc = [];\n\n    this.collisionDetection = new _collisionDetection__WEBPACK_IMPORTED_MODULE_6__[\"default\"]([...map.colliders]);\n    this.character.collisionDetection = this.collisionDetection;\n\n    this.gameObjects = [map, ...npc, this.character];\n\n    this.input = new _inputHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.character, this);\n  }\n\n  update(timePassed) {\n    this.input.handleInput();\n\n    this.gameObjects.forEach(object => object.update(timePassed));\n    for (var playerId in this.onlinePlayer) {\n      if (this.onlinePlayer.hasOwnProperty(playerId)) {\n        this.onlinePlayer[playerId].update(timePassed)\n      };\n    };\n\n    this.networking.sendPosition(this.character);\n  }\n\n  draw(ctx) {\n    if (this.loadingImages() == true) {\n      this.drawLoading(ctx);\n    } else {\n      this.gameObjects.forEach(object => object.draw(ctx));\n\n      for (var playerId in this.onlinePlayer) {\n        if (this.onlinePlayer.hasOwnProperty(playerId)) {\n          this.onlinePlayer[playerId].draw(ctx)\n        };\n      };\n\n      if (this.DEBUG) {\n        this.collisionDetection.colliders.forEach(collider => {\n          collider.draw(ctx);\n        });\n        this.character.hitbox.draw(ctx);\n      }\n    }\n  }\n\n  drawLoading(ctx) {\n    let x = this.width/2;\n    let y = this.height/2;\n    ctx.font = \"30px Comic Sans MS\";\n    ctx.fillStyle = \"red\";\n    ctx.textAlign = \"center\";\n    ctx.fillText(\"Loading\", x, y);\n  }\n\n  //returns whether some images of the gameObjects are still being loaded\n  loadingImages() {\n    return this.gameObjects.filter(obj => {return obj.renderable.imageLoading == true}).length > 0\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameObject.js":
/*!***************************!*\
  !*** ./src/gameObject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\nclass GameObject {\n  constructor(renderModel, x, y) {\n    this.position = { x: x, y: y };\n    this.velocity = { x: 0, y: 0 };\n\n    this.renderModel = renderModel;\n    this.childrenGameObjs = [];\n  }\n\n  update() {\n    // update the position of the obj and for all its children objects attached to it\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n\n    this.childrenGameObjs.forEach(child => {\n      child.update();\n    });\n  }\n\n  draw(ctx) {\n    // draw the gameObj and all children objects attached to it\n    ctx.save();\n    ctx.translate(this.position.x, this.position.y);\n\n    if (this.renderModel)\n      this.renderModel.draw(ctx);\n\n    this.childrenGameObjs.forEach(child => {\n      child.renderModel.draw(ctx);\n    });\n\n    ctx.restore();\n  }\n\n  addChild(obj) {\n    // attach a GameObject to this GameObject \n    if (this.obj instanceof GameObject) {\n      this.children.push(obj);\n    } else {\n      console.error(\"Child can't be added. Is not of type GameObj\")\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/gameObject.js?");

/***/ }),

/***/ "./src/inputHandler.js":
/*!*****************************!*\
  !*** ./src/inputHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(player, game) {\n    this.keysDown = [];\n    this.player = player;\n\n    document.addEventListener(\"keydown\", event => {\n      //onKeyDown of movement keys -> add to list\n      switch (event.code) {\n        case \"KeyW\":\n        case \"KeyA\":\n        case \"KeyS\":\n        case \"KeyD\":\n          if (!this.keysDown.includes(event.code))\n            this.keysDown.unshift(event.code)\n      }\n    });\n\n    document.addEventListener(\"keyup\", event => {\n      //onKeyUp of movement keys -> remove them from the list and if it was the last tell the player to stop\n      switch (event.code) {\n        case \"KeyW\":\n        case \"KeyA\":\n        case \"KeyS\":\n        case \"KeyD\":\n          let index = this.keysDown.indexOf(event.code);\n          if (index > -1) \n            this.keysDown.splice(index, 1);\n          if (this.keysDown.length === 0)\n            this.player.stopMovement();\n      }\n    });\n  };\n\n  isKeyDown(keyCode) {\n    return this.keysDown[keyCode];\n  }\n\n  handleInput() {\n    // tell the player which keys are pressed and let him handle the movements\n    if (this.keysDown.length > 0) {\n      this.player.translate(this.keysDown);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/inputHandler.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nlet canvas = document.getElementById(\"game\");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nlet ctx = canvas.getContext(\"2d\");\nctx.imageSmoothingEnabled = false;\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height);\nlet lastTime = 0;\n\nfunction gameLoop(timestamp) {\n  let deltaTime = timestamp - lastTime;\n  lastTime = timestamp;\n\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  game.update(deltaTime);\n  game.draw(ctx);\n\n  requestAnimationFrame(gameLoop);\n}\n\nrequestAnimationFrame(gameLoop);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box */ \"./src/box.js\");\n\n\n\n\nclass Map extends _gameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(mapJson, mapImage, totalSpriteCount, spriteInRow, spriteInColumn) {\n        super(null, 0, 0);\n\n        this.SCALE = 2;\n\n        this.renderable = new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mapImage,this.SCALE,0,totalSpriteCount-1,spriteInRow,spriteInColumn);\n        this.tilelayers = mapJson.layers.filter(layer => layer.type === \"tilelayer\");\n        this.colliders = [];\n        mapJson.layers.forEach(layer => {\n            if (layer.type === \"objectgroup\") {\n                layer.objects.forEach((obj,index) => {\n                    //if (index != 0) return;\n                    this.colliders.push(new _box__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ x: obj.x * this.SCALE, y: obj.y * this.SCALE}, obj.width * this.SCALE, obj.height * this.SCALE));\n                })\n            }\n        });\n    }\n\n    draw(ctx) {\n        this.tilelayers.forEach(layer => {\n            let x = 0;\n            let y = 0;\n            layer.data.forEach((value, index) => {\n                ctx.save();\n                this.renderable.frame = value - 1;\n\n                x = index % layer.width;\n                y = Math.floor(index/layer.width);\n\n                ctx.translate(\n                    this.position.x + x * this.renderable.frameWidth * this.SCALE,\n                    this.position.y + y * this.renderable.frameHeight * this.SCALE\n                );\n\n                this.renderable.draw(ctx);\n                ctx.restore();\n            })\n        });\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/networking.js":
/*!***************************!*\
  !*** ./src/networking.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Networking; });\nclass Networking {\n    constructor(ip,serverStateHandler) {\n        this.socket = io.connect(ip);\n        this.socket.on(\"onconnected\", (payload) => {\n            this.socket.userid = payload.id;\n            this.networkStatus.innerHTML = \"Connected\";\n        });\n\n        this.socket.on(\"disconnect\", () => {\n            this.networkStatus.innerHTML = \"Offline\";\n        })\n\n        this.socket.on(\"sp\", (payload) => {\n            var tof = new Date().getTime() - parseFloat (payload.t);\n            this.pingHtml.innerHTML = tof / 2\n        })\n\n        this.socket.on(\"serverstate\", (payload) => {\n            serverStateHandler(payload)\n        })\n\n        this.startPingTimer()\n\n        this.networkStatus = document.getElementById(\"connectionStatus\");\n        this.pingHtml = document.getElementById(\"ping\");\n\n    }\n\n    startPingTimer() {\n        setInterval(() => {\n            this.last_ping_time = new Date().getTime()\n            this.socket.emit(\"cp\", { t:this.last_ping_time });\n        }, 1000);\n    }\n\n    sendPosition(character) {\n        this.socket.emit(\"i\", { x: character.position.x, y: character.position.y, f: character.facing})\n    }\n}\n\n//# sourceURL=webpack:///./src/networking.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box */ \"./src/box.js\");\n\n\n\n\nclass Player extends _gameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(imageSprite, x, y) {\n    let SCALE = 1;\n    let XPADDING = 34;\n    let YPADDING = 10;\n\n    let renderable = new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imageSprite, SCALE, 18, 0, 9, 4, XPADDING, YPADDING, 10, true, ()=>{this.hitbox = new _box__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.position, this.renderable.frameWidth, this.renderable.frameHeight)});\n    super(renderable, x, y);\n\n    this.facing = 0;\n    this.speed = 1;\n\n    this.collisionDetection = null;\n\n    this.renderable = renderable;\n    this.renderables = [\n      renderable,\n      new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imageSprite, SCALE,  1, 7, 9, 4, XPADDING, YPADDING, 10, true),\n      new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imageSprite, SCALE, 27, 7, 9, 4, XPADDING, YPADDING, 10, true),\n      new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imageSprite, SCALE, 19, 7, 9, 4, XPADDING, YPADDING, 10, true),\n      new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imageSprite, SCALE,  9, 7, 9, 4, XPADDING, YPADDING, 10, true)\n    ];\n    this.hitbox = new _box__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.position, this.frameWidth, this.frameHeight);\n  }\n\n  update() {\n    if (this.collisionDetection != null) {\n      //check for Collision before updating position\n      let oldX = this.hitbox.position.x;\n      let oldY = this.hitbox.position.y;\n\n      //check if the hitbox of the next frame collides with something when only the xVelocity is added to the hitbox\n      this.hitbox.position.x += this.velocity.x;\n      let isCollidingX = this.collisionDetection.isColliding(this.hitbox);\n\n      if (isCollidingX) {\n        // if it collides reset this the xVelocity\n        this.velocity.x = 0;\n      }\n\n      //reset the hitbox to now check the yAxis\n      this.hitbox.position = {x: oldX,y: oldY};\n\n      //check if the hitbox of the next frame collides with something when only the yVelocity is added to the hitbox\n      this.hitbox.position.y += this.velocity.y;\n      let isCollidingY = this.collisionDetection.isColliding(this.hitbox);\n\n      if (isCollidingY) {\n        // if it collides reset this the yVelocity\n        this.velocity.y = 0;\n      }\n\n      //reset the hitbox and the position because through object reference the position variable changed too\n      this.hitbox.position = {x: oldX,y: oldY};\n      this.position = {x: oldX,y: oldY};\n    }\n\n    super.update();\n\n    // update the hitbox to be according to the new position\n    this.hitbox.position = this.position;\n  }\n\n  translate(keysDown) {\n    var x = 0, y = 0;\n    let oldFacing = this.facing;\n\n    // Change speed and faced direction according to keyboard input\n    if (keysDown.includes(\"KeyW\")) {\n      y -= this.speed*0.8;\n      this.facing = 1;\n    }\n    if (keysDown.includes(\"KeyS\")) {\n      y += this.speed*0.8;\n      this.facing = 3;\n    }\n    if (keysDown.includes(\"KeyA\")) {\n      x -= this.speed;\n      this.facing = 4;\n    }\n    if (keysDown.includes(\"KeyD\")) {\n      x += this.speed;\n      this.facing = 2;\n    }\n\n    // Only update the current rendered Model if the player changed the faced direction\n    if (oldFacing !== this.facing)\n      this.renderModel = this.renderables[this.facing];\n\n    // Update position\n    this.velocity.x = x;\n    this.velocity.y = y;\n  }\n\n  stopMovement() {\n    this.facing = 0;\n    this.velocity = { x: 0, y: 0};\n    this.renderModel = this.renderables[0];\n  }\n}\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/renderable.js":
/*!***************************!*\
  !*** ./src/renderable.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderable; });\n/* harmony import */ var _ressources_images_imageNotFound_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ressources/images/imageNotFound.jpg */ \"./ressources/images/imageNotFound.jpg\");\n/* harmony import */ var _ressources_images_imageNotFound_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ressources_images_imageNotFound_jpg__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Renderable {\n  constructor(\n    image = _ressources_images_imageNotFound_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,\n    scale = 1,\n    startFrame = 0,\n    frameCount = 0,\n    framesx = 1,\n    framesy = 1,\n    xPadding = 0,\n    yPadding = 0,\n    speed = 0,\n    animation = false,\n    onLoadCallBack = () => {}\n  ) {\n    //indicates that the img is being loaded and not ready to draw\n    this.imageLoading = true;\n\n    this.img = new Image();\n    this.img.src = image;\n\n    this.imgOnLoadCallback = onLoadCallBack;\n    this.img.addEventListener('load', (obj) => {\n      this.imageLoading = false;\n      this.frameWidth = (this.img.width - this.xPadding * (this.framesx - 1)) / this.framesx;\n      this.frameHeight = (this.img.height - this.yPadding * (this.framesy -1)) / this.framesy;\n      this.imgOnLoadCallback()\n\n    }, false);\n    this.scale = scale;\n\n    this.frame = startFrame;\n    this.startFrame = startFrame;         //the frame of the sprite to start off with\n    this.frameCount = frameCount;         //how many frames it should render after the startFrame before it starts with the startFrame again (for Animation)\n\n    // How many frames the sprite has vertically and horizontally\n    this.framesx = framesx;\n    this.framesy = framesy;\n\n    // How much pixels are between each frame for both axis\n    this.xPadding = xPadding;\n    this.yPadding = yPadding;\n\n    // How wide and high a frame is in the sprite. These values are beeing filled in the img onLoad Event Listener\n    this.frameWidth = 0\n    this.frameHeight = 0\n\n    // speed of animation and next timestamp when the frame should be changed\n    this.speed = speed;\n    this.animation = animation;\n    this.animTime = new Date().getTime();\n  }\n\n  draw(ctx) {\n    let t = new Date().getTime();\n    if (t > this.animTime && this.animation) {\n      this.frame++;\n      this.animTime = t + 1000 / this.speed;\n    }\n\n    // if we displayed the lastFrame set the next frame to be the startFrame again\n    if (this.frame > this.startFrame + this.frameCount) {\n      this.frame = this.startFrame;\n    }\n\n    // determine which x and y position the frame has in the sprite\n    let posx = (this.frame % this.framesx) * this.frameWidth + (this.frame % this.framesx) * this.xPadding;\n    let posy = Math.floor(this.frame / this.framesx) * this.frameHeight + Math.floor(this.frame / this.framesx) * this.yPadding;\n\n    ctx.drawImage(\n      this.img,\n      posx,\n      posy,\n      this.frameWidth,\n      this.frameHeight,\n      0,\n      0,\n      this.frameWidth * this.scale,\n      this.frameHeight * this.scale\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./src/renderable.js?");

/***/ })

/******/ });