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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/canvas.js":
/*!**********************!*\
  !*** ./js/canvas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* -----------------------------------------------\n/* How to use? : Check the GitHub README\n/* ----------------------------------------------- */\n\n/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */\nparticlesJS.load('particles-js', 'particles.json', function () {\n  console.log('particles.js loaded - callback');\n});\n/* Otherwise just put the config content (json): */\n\nparticlesJS('particles-js', {\n  \"particles\": {\n    \"number\": {\n      \"value\": 80,\n      \"density\": {\n        \"enable\": true,\n        \"value_area\": 800\n      }\n    },\n    \"color\": {\n      \"value\": \"#ffffff\"\n    },\n    \"shape\": {\n      \"type\": \"circle\",\n      \"stroke\": {\n        \"width\": 0,\n        \"color\": \"#000000\"\n      },\n      \"polygon\": {\n        \"nb_sides\": 5\n      },\n      \"image\": {\n        \"src\": \"img/github.svg\",\n        \"width\": 100,\n        \"height\": 100\n      }\n    },\n    \"opacity\": {\n      \"value\": 0.5,\n      \"random\": false,\n      \"anim\": {\n        \"enable\": false,\n        \"speed\": 1,\n        \"opacity_min\": 0.1,\n        \"sync\": false\n      }\n    },\n    \"size\": {\n      \"value\": 5,\n      \"random\": true,\n      \"anim\": {\n        \"enable\": false,\n        \"speed\": 40,\n        \"size_min\": 0.1,\n        \"sync\": false\n      }\n    },\n    \"line_linked\": {\n      \"enable\": true,\n      \"distance\": 150,\n      \"color\": \"#ffffff\",\n      \"opacity\": 0.4,\n      \"width\": 1\n    },\n    \"move\": {\n      \"enable\": true,\n      \"speed\": 6,\n      \"direction\": \"none\",\n      \"random\": false,\n      \"straight\": false,\n      \"out_mode\": \"out\",\n      \"attract\": {\n        \"enable\": false,\n        \"rotateX\": 600,\n        \"rotateY\": 1200\n      }\n    }\n  },\n  \"interactivity\": {\n    \"detect_on\": \"canvas\",\n    \"events\": {\n      \"onhover\": {\n        \"enable\": true,\n        \"mode\": \"repulse\"\n      },\n      \"onclick\": {\n        \"enable\": true,\n        \"mode\": \"push\"\n      },\n      \"resize\": true\n    },\n    \"modes\": {\n      \"grab\": {\n        \"distance\": 400,\n        \"line_linked\": {\n          \"opacity\": 1\n        }\n      },\n      \"bubble\": {\n        \"distance\": 400,\n        \"size\": 40,\n        \"duration\": 2,\n        \"opacity\": 8,\n        \"speed\": 3\n      },\n      \"repulse\": {\n        \"distance\": 200\n      },\n      \"push\": {\n        \"particles_nb\": 4\n      },\n      \"remove\": {\n        \"particles_nb\": 2\n      }\n    }\n  },\n  \"retina_detect\": true,\n  \"config_demo\": {\n    \"hide_card\": false,\n    \"background_color\": \"#b61924\",\n    \"background_image\": \"\",\n    \"background_position\": \"50% 50%\",\n    \"background_repeat\": \"no-repeat\",\n    \"background_size\": \"cover\"\n  }\n});\n\n//# sourceURL=webpack:///./js/canvas.js?");

/***/ }),

/***/ "./src/css/canvas.css":
/*!****************************!*\
  !*** ./src/css/canvas.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/canvas.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/canvas.js */ \"./js/canvas.js\");\n/* harmony import */ var _js_canvas_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_canvas_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_canvas_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/canvas.css */ \"./src/css/canvas.css\");\n/* harmony import */ var _css_canvas_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_canvas_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_typing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/typing.js */ \"./src/js/typing.js\");\n/* harmony import */ var _js_typing_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_typing_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/typing.js":
/*!**************************!*\
  !*** ./src/js/typing.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var box = document.querySelector('.professions');\nvar professions = [\"Strony internetowe\", \"Marketing w internecie\", \"Copywriting\", \"Social media\"];\nvar wordIndex = 0;\nvar professionsIndex = 0;\nvar oldTime = 0;\nvar speed = 50;\nvar stop = 2000;\nvar activeDOMElement = box;\n\nvar typing = function typing(newTime) {\n  if (newTime - oldTime > speed) {\n    var letter = professions[professionsIndex].substr(wordIndex, 1);\n\n    if (wordIndex === professions[professionsIndex].length) {\n      if (professionsIndex === professions.length - 1) {\n        return setTimeout(function () {\n          box.textContent = \"\";\n          professionsIndex = 0;\n          wordIndex = 0;\n          requestAnimationFrame(typing);\n        }, stop);\n      }\n\n      return setTimeout(function () {\n        box.textContent = \"\";\n        professionsIndex++;\n        wordIndex = 0;\n        requestAnimationFrame(typing);\n      }, stop);\n    } else if (wordIndex === 0) {\n      var h4 = document.createElement('h4');\n      box.appendChild(h4);\n      activeDOMElement = h4;\n    }\n\n    activeDOMElement.textContent += letter;\n    oldTime = newTime;\n    wordIndex++;\n  }\n\n  requestAnimationFrame(typing);\n};\n\ntyping();\n\n//# sourceURL=webpack:///./src/js/typing.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ })

/******/ });