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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\nwindow.addEventListener('load', _routes_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.addEventListener('hashchange', _routes_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/Character.js":
/*!********************************!*\
  !*** ./src/pages/Character.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getAPI */ \"./src/utils/getAPI.js\");\n\n\n\nconst Character = async () => {\n  const id = Object(_utils_getHash__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const character = await Object(_utils_getAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  const view = `\n    <section class=\"Character-inner\">\n      <figure class=\"Characters-card\">\n        <img src=\"${character.sprites.front_default}\" alt=\"${character.name}\">\n        <img src=\"${character.sprites.back_shiny}\" alt=\"${character.name}\">\n        <img src=\"${character.sprites.front_shiny}\" alt=\"${character.name}\">\n        <img src=\"${character.sprites.back_default}\" alt=\"${character.name}\">\n        <figcaption>${character.name}</figcaption>\n      </figure>\n      <article class=\"Character-card\">\n        <h3>Moves:</h3>\n        <ul>\n          ${character.moves.map(item => `\n            <li>${item.move.name}</li>\n          `)}\n        </ul>\n        <h3>Types:</h3>\n        <ul>\n          ${character.types.map(item => `\n            <li>${item.type.name}</li>\n          `)}\n        </ul>\n        <h3>Species:<span>\n          ${character.species.name}\n        </span></h3>\n        <h3>Weight: <span>${character.weight}kg</span></h3>\n        <h3>Abilities:</h3>\n        <ul>\n          ${character.abilities.map(item => `\n            <li>${item.ability.name}</li>\n          `)}\n        </ul>\n      </article>\n    </section>\n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\n//# sourceURL=webpack:///./src/pages/Character.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Error404 = () => {\n  const view = `\n    <section class=\"error\">\n      <h2>Error 404 not found</h2>\n    </section>\n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error404);\n\n//# sourceURL=webpack:///./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getAPI */ \"./src/utils/getAPI.js\");\n\n\nconst Home = async () => {\n  const characters = [];\n\n  for (let i = 1; i <= 62; i++) {\n    const item = await Object(_utils_getAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i);\n    characters.push(item);\n  }\n\n  const view = `\n    <div class=\"Characters\">\n      <ul>\n        ${characters.map(character => `\n          <li class=\"Character-item\">\n            <a href=\"#/${character.id}/\">\n              <img src=\"${character.sprites.front_default}\" alt=\"${character.name}\">\n              <h2>${character.name}</h2>\n            </a>\n          </li>\n        `).join()}\n      </ul>\n    </div>\n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Character */ \"./src/pages/Character.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n\n\n\n\n\n\nconst routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  '/:id': _pages_Character__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  '/contact': 'Contact'\n};\n\nconst router = async () => {\n  const header =  false || document.getElementById('header');\n  const data =  false || document.querySelector('#data');\n  header.innerHTML = await Object(_templates_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  data.innerHTML = await Object(_pages_Error404__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  let hash = Object(_utils_getHash__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  let route = await Object(_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hash);\n  let render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; // routes.'/'\n\n  console.log(routes[route]);\n  data.innerHTML = await render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Header = () => {\n  const view = `\n    <section class=\"Header\">\n      <div class=\"Header-logo\">\n        <h1>\n          <a href=\"/\">POKE-war</a>\n        </h1>\n      </div>\n      <nav class=\"Header-nav\">\n        <a href=\"#/about/\">About</a>\n      </nav>\n    </section>\n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getAPI.js":
/*!*****************************!*\
  !*** ./src/utils/getAPI.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getAPI = async id => {\n  const API = 'https://pokeapi.co/api/v2/pokemon/';\n  let response;\n  const ApiUrl = id ? `${API}${id}` : API;\n\n  try {\n    response = await fetch(ApiUrl);\n    const data = await response.json();\n    return data;\n  } catch (e) {\n    console.log('FETCH ERROR: ', e);\n    return e;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAPI);\n\n//# sourceURL=webpack:///./src/utils/getAPI.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getHash);\n\n//# sourceURL=webpack:///./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst resolveRoutes = route => {\n  console.log(route.length);\n\n  if (route.length <= 3) {\n    let validRoute = route === '/' ? route : '/:id';\n    return validRoute;\n  }\n\n  return `/${route}`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolveRoutes);\n\n//# sourceURL=webpack:///./src/utils/resolveRoutes.js?");

/***/ })

/******/ });