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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generate; });\n// possible bars\nconst bars = [\n  {\n    id: 1,\n    content: [\n      [1],\n      [2],\n      [3],\n      [2],\n    ],\n    next: [2, 1, 3, 5, 7],\n  },\n  {\n    id: 2,\n    content: [\n      [2],\n      [3],\n      [],\n      [4, 2],\n    ],\n    next: [3, 9],\n  },\n  {\n    id: 3,\n    content: [\n      [2],\n      [1],\n      [],\n      [1, 5],\n    ],\n    next: [1, 2, 3, 4, 5, 6, 7, 8, 9],\n  },\n  {\n    id: 4,\n    content: [\n      [5],\n      [3],\n      [4],\n      [2],\n    ],\n    next: [6, 7, 4, 8],\n  },\n  {\n    id: 5,\n    content: [\n      [2],\n      [1],\n      [3],\n      [1],\n    ],\n    next: [4, 7],\n  },\n  {\n    id: 6,\n    content: [\n      [1],\n      [2],\n      [3, 1],\n      [],\n    ],\n    next: [7],\n  },\n  {\n    id: 7,\n    content: [\n      [3],\n      [3],\n      [1],\n      [],\n    ],\n    next: [6, 8],\n  },\n  {\n    id: 8,\n    content: [\n      [2],\n      [2],\n      [2, 4],\n      [2],\n    ],\n    next: [8, 5, 9],\n  },\n  {\n    id: 9,\n    content: [\n      [3],\n      [3],\n      [1],\n      [1],\n    ],\n    next: [8, 5, 7, 1],\n  },\n];\n\nfunction generate(bar = 'default') {\n  // return random bar for initilization\n  if (bar === 'default') {\n    return bars[Math.floor(Math.random() * bars.length)];\n  }\n\n  // find id of next bar\n  // randomly picked\n  const nextId = bar.next[Math.floor(Math.random() * bar.next.length)];\n\n  // init result\n  let result = {};\n\n  // find and return bar\n  bars.forEach((item) => {\n    if (item.id === nextId) {\n      result = item;\n    }\n  });\n  return result;\n}\n\n\n//# sourceURL=webpack:///./src/generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nObject(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return player; });\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./src/generator.js\");\n/* global Synth */\n\n\n// piano, edm, acoustic, organ\nconst instrument = Synth.createInstrument('piano');\n\n// play single note\nfunction playNote(num, pitch) {\n  const notes = ['C', 'D', 'F', 'G', 'A'];\n  instrument.play(notes[num - 1], pitch, 2);\n}\n\n// plays multiple notes\nfunction playChord(chord, pitch) {\n  chord.forEach((item) => { playNote(item, pitch); });\n}\n\n// test generate\nfunction player(beatLength = 500) {\n  // initilize to random bar\n  let currentBar = Object(_generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  // between 0 to 3\n  let beatNum = 0;\n\n  // init pitch (random)\n  let pitch = Math.floor((Math.random() * 3) + 3);\n\n  // loop on every beat\n  window.setInterval(() => {\n    // play chord\n    playChord(currentBar.content[beatNum], pitch);\n\n    // generate new bar once bar\n    if (beatNum === 3) {\n      currentBar = Object(_generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentBar);\n      pitch = Math.floor((Math.random() * 3) + 3);\n      beatNum = 0;\n    } else {\n      beatNum += 1;\n    }\n  }, beatLength);\n}\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });