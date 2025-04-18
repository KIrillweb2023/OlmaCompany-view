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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/core/Breakpoint.core.js":
/*!****************************************!*\
  !*** ./src/js/core/Breakpoint.core.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Breakpoint; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Breakpoint {
  constructor(SlimeInit) {
    _defineProperty(this, "BreakpointMethod", () => {
      if (!this.SlimeInit.breakpoints) return;
      const _WidthWindow = window.innerWidth;
      let breakpointConfirm = false;
      this.SlimeInit.breakpoints.sort((a, b) => b.breakpoint - a.breakpoint);
      for (let i = 0; i < this.SlimeInit.breakpoints.length; i++) {
        const item = this.SlimeInit.breakpoints[i];
        if (_WidthWindow <= item.breakpointSize) {
          this.SlimeInit.previewSlides = item.previewSlides;
          this.SlimeInit.previewScrollSlide = item.previewScrollSlide;
          breakpointConfirm = true;
        }
      }
      if (!breakpointConfirm) {
        this.SlimeInit.previewSlides = this.SlimeInit._ConfirmPreviewSlide;
        this.SlimeInit.previewScrollSlide = this.SlimeInit._ConfirmScrollSlide;
      }
    });
    this.SlimeInit = SlimeInit;
  }
}

/***/ }),

/***/ "./src/js/core/EventsSlider.core.js":
/*!******************************************!*\
  !*** ./src/js/core/EventsSlider.core.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsSlider; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class EventsSlider {
  constructor(SlimeInit) {
    _defineProperty(this, "EventSliderMethod", () => {
      if (!this.SlimeInit.navigation.nextSlideBtn || !this.SlimeInit.navigation.prevSlideBtn) return;
      const _NextBtnSlide = document.querySelector(this.SlimeInit.navigation.nextSlideBtn);
      const _PrevBtnSlide = document.querySelector(this.SlimeInit.navigation.prevSlideBtn);
      _NextBtnSlide.addEventListener("click", () => this.SlimeInit._LogicsScrollCore.NextScrolling());
      _PrevBtnSlide.addEventListener("click", () => this.SlimeInit._LogicsScrollCore.PrevScrolling());
    });
    this.SlimeInit = SlimeInit;
  }
}

/***/ }),

/***/ "./src/js/core/LogicsScroll.core.js":
/*!******************************************!*\
  !*** ./src/js/core/LogicsScroll.core.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogicsScroll; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class LogicsScroll {
  constructor(SlimeInit) {
    _defineProperty(this, "NextScrolling", () => {
      const maxIndexSlide = this.SlimeInit.NumberSlide - this.SlimeInit.previewSlides;
      this.SlimeInit._IndexSlide = this.SlimeInit._IndexSlide < maxIndexSlide ? Math.min(this.SlimeInit._IndexSlide + this.SlimeInit.previewScrollSlide, maxIndexSlide) : 0;
      this.SlimeInit._TransformSlide = this.SlimeInit._IndexSlide * this.SlimeInit._SlideWidth;
      this.SlimeInit._StyleSliderCore.ScrollingSlide();
      this.SlimeInit._PluginPaginaton.UpdatePaginationSlider();
    });
    _defineProperty(this, "PrevScrolling", () => {
      const maxIndexSlide = this.SlimeInit.NumberSlide - this.SlimeInit.previewSlides;
      this.SlimeInit._IndexSlide = this.SlimeInit._IndexSlide > 0 ? Math.max(this.SlimeInit._IndexSlide - this.SlimeInit.previewScrollSlide, 0) : this.SlimeInit.NumberSlide > this.SlimeInit.previewSlides ? maxIndexSlide : 0;
      this.SlimeInit._TransformSlide = this.SlimeInit._IndexSlide * this.SlimeInit._SlideWidth;
      this.SlimeInit._StyleSliderCore.ScrollingSlide();
      this.SlimeInit._PluginPaginaton.UpdatePaginationSlider();
    });
    this.SlimeInit = SlimeInit;
  }
}

/***/ }),

/***/ "./src/js/core/StyleSlider.core.js":
/*!*****************************************!*\
  !*** ./src/js/core/StyleSlider.core.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitSliderStylesContainer; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class InitSliderStylesContainer {
  // настраивание ширины слайдов и их контейнера
  constructor(SlimeInit) {
    _defineProperty(this, "InitSliderStyle", () => {
      this.SlimeInit._SlideWidth = this.SlimeInit._Slider.clientWidth / this.SlimeInit.previewSlides;
      this.SlimeInit._Slide.forEach(item => {
        item.style.width = `${this.SlimeInit._SlideWidth}px`;
      });
      this.SlimeInit._ContainerSlide.style.width = `${this.SlimeInit.NumberSlide * this.SlimeInit._SlideWidth}px`;
      this.SlimeInit._ContainerSlide.style.display = "flex";
      this.SlimeInit._ContainerSlide.style.transition = `transform ${this.SlimeInit.speedSlider}s ease-in-out`;
      this.ScrollingSlide();
      this.SlimeInit._BreakpointCore.BreakpointMethod();
    });
    _defineProperty(this, "ScrollingSlide", () => {
      // Прокрутка слайдера
      this.SlimeInit._ContainerSlide.style.transform = `translateX(-${this.SlimeInit._TransformSlide}px)`;
    });
    this.SlimeInit = SlimeInit;
  }
}

/***/ }),

/***/ "./src/js/core/WindowResize.core.js":
/*!******************************************!*\
  !*** ./src/js/core/WindowResize.core.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowResize; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class WindowResize {
  constructor(SlimeInit) {
    _defineProperty(this, "WindowResizeMethod", () => {
      window.addEventListener("resize", e => {
        this.SlimeInit._BreakpointCore.BreakpointMethod();
        this.SlimeInit._StyleSliderCore.InitSliderStyle();
        this.SlimeInit._PluginPaginaton.PaginationSlider();
        this.SlimeInit._PluginPaginaton.UpdatePaginationSlider();
        this.SlimeInit._TransformSlide = 0;
        this.SlimeInit._IndexSlide = 0;
      });
    });
    this.SlimeInit = SlimeInit;
  }
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_StyleSlider_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/StyleSlider.core */ "./src/js/core/StyleSlider.core.js");
/* harmony import */ var _core_LogicsScroll_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/LogicsScroll.core */ "./src/js/core/LogicsScroll.core.js");
/* harmony import */ var _core_EventsSlider_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/EventsSlider.core */ "./src/js/core/EventsSlider.core.js");
/* harmony import */ var _core_WindowResize_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/WindowResize.core */ "./src/js/core/WindowResize.core.js");
/* harmony import */ var _plugins_Pagination_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/Pagination.plugin */ "./src/js/plugins/Pagination.plugin.js");
/* harmony import */ var _core_Breakpoint_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Breakpoint.core */ "./src/js/core/Breakpoint.core.js");
/* harmony import */ var _modules_AboutText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/AboutText */ "./src/js/modules/AboutText.js");
/* harmony import */ var _modules_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/Tabs */ "./src/js/modules/Tabs.js");
/* harmony import */ var _modules_MaskaText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/MaskaText */ "./src/js/modules/MaskaText.js");
/* harmony import */ var _modules_Hamburger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/Hamburger */ "./src/js/modules/Hamburger.js");
/* harmony import */ var _modules_ScrollFooterMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/ScrollFooterMenu */ "./src/js/modules/ScrollFooterMenu.js");
/* harmony import */ var _modules_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/Modal */ "./src/js/modules/Modal.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }












class SlimeInit {
  constructor({
    sliderClass = "",
    navigation = {
      nextSlideBtn: "",
      prevSlideBtn: ""
    },
    previewSlides = 1,
    speedSlider = 0.5,
    previewScrollSlide = 1,
    breakpoints = [],
    pagination = false
  }) {
    _defineProperty(this, "InitSlider", () => {
      this._BreakpointCore.BreakpointMethod();
      this._StyleSliderCore.InitSliderStyle();
      this._WindowResizeCore.WindowResizeMethod();
      this._EventSliderCore.EventSliderMethod();
      this._PluginPaginaton.PaginationSlider();
      this._PluginPaginaton.UpdatePaginationSlider();
    });
    this.sliderClass = sliderClass;
    this._ContainerSlide = document.querySelector(`${this.sliderClass}-slides`); // контейнер слайдов
    this._Slide = document.querySelectorAll(`${this.sliderClass}-slide`); // сами слайды
    this._Slider = document.querySelector(`${this.sliderClass}-container`); // слайдер в общем

    this.previewSlides = previewSlides;
    this.navigation = navigation;
    this.speedSlider = speedSlider;
    this.previewScrollSlide = previewScrollSlide;
    this.breakpoints = breakpoints;
    this.pagination = pagination;
    this._ConfirmScrollSlide = this.previewScrollSlide;
    this._ConfirmPreviewSlide = this.previewSlides;
    this._TransformSlide = 0; // расчетная переменная для перелистывания слайдера
    this._IndexSlide = 0; // индекс слайдера
    this.NumberSlide = this._ContainerSlide.children.length; // количество слайдов

    this._StyleSliderCore = new _core_StyleSlider_core__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this._LogicsScrollCore = new _core_LogicsScroll_core__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this._EventSliderCore = new _core_EventsSlider_core__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this._WindowResizeCore = new _core_WindowResize_core__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this._PluginPaginaton = new _plugins_Pagination_plugin__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    this._BreakpointCore = new _core_Breakpoint_core__WEBPACK_IMPORTED_MODULE_5__["default"](this);
  }
}
document.addEventListener("DOMContentLoaded", e => {
  const PriceSectionSlider = new SlimeInit({
    sliderClass: ".price",
    navigation: {
      nextSlideBtn: ".price-navigation-next",
      prevSlideBtn: ".price-navigation-prev"
    },
    previewSlides: 3,
    speedSlider: 0.6,
    previewScrollSlide: 3,
    pagination: true,
    breakpoints: [{
      breakpointSize: 1200,
      previewScrollSlide: 2,
      previewSlides: 2
    }, {
      breakpointSize: 768,
      previewScrollSlide: 1,
      previewSlides: 2
    }, {
      breakpointSize: 567,
      previewScrollSlide: 1,
      previewSlides: 1
    }]
  });
  const ReviewSectionSlider = new SlimeInit({
    sliderClass: ".reviews",
    navigation: {
      nextSlideBtn: ".reviews-navigation-next",
      prevSlideBtn: ".reviews-navigation-prev"
    },
    previewSlides: 3,
    speedSlider: 0.6,
    previewScrollSlide: 1,
    pagination: true,
    breakpoints: [{
      breakpointSize: 1200,
      previewScrollSlide: 2,
      previewSlides: 2
    }, {
      breakpointSize: 768,
      previewScrollSlide: 1,
      previewSlides: 1
    }]
  });
  PriceSectionSlider.InitSlider();
  ReviewSectionSlider.InitSlider();
  Object(_modules_AboutText__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_MaskaText__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules_Hamburger__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_modules_ScrollFooterMenu__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_modules_Modal__WEBPACK_IMPORTED_MODULE_11__["default"])();
});

/***/ }),

/***/ "./src/js/modules/AboutText.js":
/*!*************************************!*\
  !*** ./src/js/modules/AboutText.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutText; });
function AboutText() {
  document.querySelector('.about__details').addEventListener('click', function () {
    const hiddenContent = document.querySelector('.about-text__hidden');
    const detailsBtn = this;
    hiddenContent.classList.toggle('show');
    if (hiddenContent.classList.contains('show')) {
      detailsBtn.textContent = 'Скрыть';
    } else {
      detailsBtn.textContent = 'Подробнее';
    }
  });
}
;

/***/ }),

/***/ "./src/js/modules/Hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/Hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hamburger; });
function Hamburger() {
  const OpenBtnMenu = document.querySelector(".header__hamburger");
  const CloseBtnMenu = document.querySelector(".menu-close");
  const ThisMenu = document.querySelector(".menu");
  function OpenMenu(menu) {
    menu.classList.add("menu-active");
    document.body.style.overflow = "hidden";
  }
  function CloseMenu(menu) {
    menu.classList.remove("menu-active");
    document.body.style.overflow = "";
  }
  OpenBtnMenu.addEventListener("click", e => OpenMenu(ThisMenu));
  CloseBtnMenu.addEventListener("click", e => CloseMenu(ThisMenu));
}

/***/ }),

/***/ "./src/js/modules/MaskaText.js":
/*!*************************************!*\
  !*** ./src/js/modules/MaskaText.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskaText; });
function MaskaText() {
  window.formatPhoneNumber = function (input, isBackspace = false, cursorPos) {
    let value = input.value.replace(/\D/g, '');
    const selectionStart = cursorPos !== undefined ? cursorPos : input.selectionStart;
    const isDeleting = isBackspace || input.value.length > 0 && selectionStart < input.selectionEnd;
    if (/^[78]/.test(value)) {
      value = '7' + value.substring(1);
    } else if (/^\d/.test(value)) {
      value = '7' + value;
    }
    if (!value || value === '7') {
      input.value = '';
      return {
        value: '',
        pos: 0
      };
    }
    let formatted = '+7';
    let mask = '+7 (XXX) XXX-XX-XX';
    let newValue = '';
    let i = 0;
    let j = 1;
    for (; i < mask.length && j < value.length; i++) {
      if (mask[i] === 'X') {
        newValue += value[j++];
      } else {
        newValue += mask[i];
      }
    }
    if (i < mask.length && mask[i] !== 'X') {
      newValue += mask[i];
    }
    input.value = newValue;
    let newPos = selectionStart;
    if (isDeleting) {
      newPos = Math.max(4, selectionStart);
    } else {
      if (value.length > 1) {
        const lastPos = newValue.length - 1;
        const currentChar = newValue[newPos];
        if (currentChar === ' ' || currentChar === '(' || currentChar === ')' || currentChar === '-') {
          newPos++;
        }
        newPos = Math.min(newPos, lastPos + 1);
      }
    }
    if (newPos < 3) newPos = 3;
    return {
      value: newValue,
      pos: newPos
    };
  };
  const phoneInput = document.getElementById('userPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      const result = window.formatPhoneNumber(this);
      this.setSelectionRange(result.pos, result.pos);
    });
    phoneInput.addEventListener('keydown', function (e) {
      const cursorPos = this.selectionStart;
      const isBackspace = e.key === 'Backspace';
      const isDelete = e.key === 'Delete';
      if (isBackspace || isDelete) {
        e.preventDefault();
        if (cursorPos <= 3 && isBackspace) return;
        if (cursorPos <= 2 && isDelete) return;
        let value = this.value.replace(/\D/g, '');
        let deletePos = cursorPos;
        if (isBackspace) {
          while (deletePos > 0 && !/\d/.test(this.value[deletePos - 1])) {
            deletePos--;
          }
          deletePos--;
        } else {
          while (deletePos < this.value.length && !/\d/.test(this.value[deletePos])) {
            deletePos++;
          }
        }
        if (deletePos >= 0 && deletePos < this.value.length && /\d/.test(this.value[deletePos])) {
          const digitIndex = Array.from(this.value.slice(0, deletePos + 1)).filter(c => /\d/.test(c)).length - 1;
          value = value.substring(0, digitIndex) + value.substring(digitIndex + 1);
          this.value = value;
          const result = window.formatPhoneNumber(this, true, isBackspace ? deletePos : cursorPos);
          this.value = result.value;
          this.setSelectionRange(result.pos, result.pos);
        }
      }
    });
    phoneInput.addEventListener('focus', function () {
      if (!this.value) {
        this.value = '+7 ';
        this.setSelectionRange(4, 4);
      } else if (this.value.length < 3) {
        this.value = '+7 ';
        this.setSelectionRange(4, 4);
      }
    });
    phoneInput.addEventListener('keypress', function (e) {
      if (!/\d/.test(e.key) && e.key !== '+' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
      }
    });
  }
  window.sanitizeInput = function (input) {
    input.value = input.value.replace(/<[^>]*>/g, '');
    if (input.id === 'userName') {
      input.value = input.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');
    }
    if (input.id === 'userEmail' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      input.setCustomValidity(emailRegex.test(input.value) ? '' : 'Пожалуйста, введите корректный email');
    }
  };
  document.querySelectorAll('.submit__container-form-input').forEach(input => {
    input.addEventListener('paste', function (e) {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text');
      const sanitized = text.replace(/<[^>]*>/g, '');
      document.execCommand('insertText', false, sanitized);
      if (input.id === 'userPhone') {
        const result = window.formatPhoneNumber(input);
        input.setSelectionRange(result.pos, result.pos);
      }
    });
    input.addEventListener('input', function () {
      window.sanitizeInput(this);
    });
  });
}

/***/ }),

/***/ "./src/js/modules/Modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function Modal() {
  function openModal(openBtn, modal) {
    openBtn.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }
  function closeModal(closeBtn, modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
  openModal(document.querySelector(".breakins"), document.querySelector(".modal"));
  closeModal(document.querySelector(".modal__container-form-close"), document.querySelector(".modal"));
  openModal(document.querySelector(".consult"), document.querySelector(".consultation"));
  closeModal(document.querySelector(".consultation-close"), document.querySelector(".consultation"));
}

/***/ }),

/***/ "./src/js/modules/ScrollFooterMenu.js":
/*!********************************************!*\
  !*** ./src/js/modules/ScrollFooterMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollFooterMenu; });
function ScrollFooterMenu() {
  const MenuItems = document.querySelectorAll(".footer-item");
  MenuItems.forEach(item => {
    item.addEventListener("click", e => {
      item.classList.toggle("active");
    });
  });
}

/***/ }),

/***/ "./src/js/modules/Tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/Tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabsFunction; });
function TabsFunction() {
  const tabsContainer = document.querySelector(".adventages__container-pagination");
  const tabContainerItem = document.querySelectorAll(".adventages__container-pagination-item");
  const containerItemTabs = document.querySelectorAll(".adventages__list");
  const blockItem = document.querySelector(".adventages__container");
  function removeClassActiveTab() {
    tabContainerItem.forEach(item => {
      item.classList.remove('adventages__container-pagination-item-active');
    });
    containerItemTabs.forEach(item => {
      item.classList.remove('adventages__list-active');
    });
  }
  function addClassTabActive(i) {
    tabsContainer.children[i].classList.add("adventages__container-pagination-item-active");
    blockItem.children[i].classList.add("adventages__list-active");
    blockItem.children[i].children[0].style.animation = "tab-animation 1s";
    blockItem.children[i].children[1].style.animation = "tab-animation 1.5s";
    blockItem.children[i].children[2].style.animation = "tab-animation 2s";
  }
  function eventTabs() {
    tabContainerItem.forEach((item, index) => {
      item.addEventListener('click', e => {
        removeClassActiveTab();
        addClassTabActive(index);
      });
    });
  }
  removeClassActiveTab();
  addClassTabActive(0);
  eventTabs();
}

/***/ }),

/***/ "./src/js/plugins/Pagination.plugin.js":
/*!*********************************************!*\
  !*** ./src/js/plugins/Pagination.plugin.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Pagination {
  constructor(SlimeInit) {
    _defineProperty(this, "PaginationSlider", () => {
      if (this.SlimeInit.pagination === true) {
        const paginationContainer = document.querySelector(`${this.SlimeInit.sliderClass}-pagination`);
        let paginationNumbers = 0;
        if (this.SlimeInit.NumberSlide > this.SlimeInit.previewSlides) {
          paginationNumbers = Math.ceil((this.SlimeInit.NumberSlide - this.SlimeInit.previewSlides) / this.SlimeInit.previewScrollSlide) + 1;
        } else {
          paginationNumbers = 1;
        }
        paginationContainer.innerHTML = "";
        for (let i = 0; i < paginationNumbers; i++) {
          const paginationItem = document.createElement("li");
          paginationItem.classList.add(`${this.SlimeInit.sliderClass.slice(1)}-pagination-item`);
          paginationItem.addEventListener("click", () => this.getIndexSlider(i));
          paginationContainer.appendChild(paginationItem);
        }
        this.UpdatePaginationSlider();
      }
    });
    _defineProperty(this, "UpdatePaginationSlider", () => {
      const paginationContainer = document.querySelector(`${this.SlimeInit.sliderClass}-pagination`);
      const indicators = paginationContainer.querySelectorAll(`${this.SlimeInit.sliderClass}-pagination-item`);
      indicators.forEach(indicator => indicator.classList.remove("active"));
      const maxIndexSlide = this.SlimeInit.NumberSlide - this.SlimeInit.previewSlides;
      let activeIndex = Math.ceil(this.SlimeInit._IndexSlide / this.SlimeInit.previewScrollSlide);
      if (maxIndexSlide < 0) {
        activeIndex = 0;
      } else if (this.SlimeInit._IndexSlide >= maxIndexSlide) {
        activeIndex = indicators.length > 0 ? indicators.length - 1 : 0;
      }
      activeIndex = Math.min(activeIndex, indicators.length - 1);
      activeIndex = Math.max(activeIndex, 0);
      if (activeIndex >= 0 && activeIndex < indicators.length) {
        indicators[activeIndex].classList.add("active");
      }
    });
    _defineProperty(this, "getIndexSlider", index => {
      const maxIndexSlide = this.SlimeInit.NumberSlide - this.SlimeInit.previewSlides;
      let newIndexSlide = index * this.SlimeInit.previewScrollSlide;
      newIndexSlide = Math.min(newIndexSlide, maxIndexSlide);
      this.SlimeInit._IndexSlide = newIndexSlide;
      this.SlimeInit._TransformSlide = this.SlimeInit._IndexSlide * this.SlimeInit._SlideWidth;
      this.SlimeInit._StyleSliderCore.ScrollingSlide();
      this.UpdatePaginationSlider();
    });
    this.SlimeInit = SlimeInit;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map