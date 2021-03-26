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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inputSync__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__minimalSearch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginPanel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_nav__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fab__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nodes__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nodes_collapse__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widthToggle__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tooltipFix__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__debug__ = __webpack_require__(14);

//import Canvas from './canvas';










// import Anchors from './anchors';


new __WEBPACK_IMPORTED_MODULE_0__inputSync__["a" /* default */]({
    settings: window.themehouse.settings.inputSync
}).register();

new __WEBPACK_IMPORTED_MODULE_1__minimalSearch__["a" /* default */]({
    settings: window.themehouse.settings.minimalSearch
}).register();

new __WEBPACK_IMPORTED_MODULE_2__loginPanel__["a" /* default */]({
    settings: window.themehouse.settings.loginPanel
}).register();

new __WEBPACK_IMPORTED_MODULE_4__sidebar__["a" /* default */]({
    settings: window.themehouse.settings.sidebar
}).register();

new __WEBPACK_IMPORTED_MODULE_3__sidebar_nav__["a" /* default */]({
    settings: window.themehouse.settings.sidebarNav
}).register();

new __WEBPACK_IMPORTED_MODULE_5__fab__["a" /* default */]({
    settings: window.themehouse.settings.fab
}).register();

new __WEBPACK_IMPORTED_MODULE_6__nodes__["a" /* default */]({
    settings: window.themehouse.settings.nodes
}).register();

new __WEBPACK_IMPORTED_MODULE_7__nodes_collapse__["a" /* default */]({
    settings: window.themehouse.settings.nodesCollapse
}).register();

new __WEBPACK_IMPORTED_MODULE_8__widthToggle__["a" /* default */]({
    settings: window.themehouse.settings.widthToggle
}).register();

new __WEBPACK_IMPORTED_MODULE_9__tooltipFix__["a" /* default */]({
    settings: window.themehouse.settings.tooltipFix
}).register();

// new Anchors({
//     settings: window.themehouse.settings.anchors,
// }).register();

__webpack_require__(15);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var inputSync = function () {
    function InputSync(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, InputSync);

        this.sync = function (e) {
            var target = e.target || e.srcElement;
            if (target) {
                var value = target.value;
                var sync = target.getAttribute('data-' + _this.settings.data);
                var otherTargets = window.document.querySelectorAll(_this.settings.selector + '[data-' + _this.settings.data + '="' + sync + '"]:not(:focus)');
                for (var i = 0, len = otherTargets.length; i < len; i++) {
                    otherTargets[i].value = value;
                }
            }
        };

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.initGet = function () {
            _this.inputs = window.document.querySelectorAll(_this.settings.selector);
            for (var i = 0, len = _this.inputs.length; i < len; i++) {
                var input = _this.inputs[i];
                input.addEventListener('propertychange', _this.sync);
                input.addEventListener('input', _this.sync);
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.running = false;
        this.settings = Object.assign({
            selector: '.js-uix_syncValue', // selector for all inputSync
            data: 'uixsync' // data attribute for knowing what to sync together
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];
        this.inputs = [];

        if (init) {
            this.init();
        }
    }

    _createClass(InputSync, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_InputSync',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_InputSync',
                func: this.initSet,
                order: 10
            });
        }
    }]);

    return InputSync;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.inputSync = {
    inputSync: inputSync
};

/* harmony default export */ __webpack_exports__["a"] = (inputSync);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var minimalSearch = function () {
    function MinimalSearch(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, MinimalSearch);

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.setState = function (state, parent) {
            if (state) {
                var parentEle = parent.closest(_this.settings.activeTargetsSelector);
                if (parentEle) {
                    if (_this.common.values.innerWidth < parseInt(_this.settings.breakpoint, 10)) {
                        parentEle.classList.add(_this.settings.active);
                    } else {
                        parentEle.classList.remove(_this.settings.active);
                    }
                }
            } else {
                _this.focusBlocked = true;
                var activeEles = window.document.querySelectorAll('.' + _this.settings.active);
                if (activeEles) {
                    for (var i = 0, len = activeEles.length; i < len; i++) {
                        activeEles[i].classList.remove(_this.settings.active);
                    }
                }
                _this.blurActiveEle();

                window.setTimeout(function () {
                    _this.blurActiveEle();
                    _this.focusBlocked = false;
                }, 900);
            }
        };

        this.blurActiveEle = function () {
            var activeEle = window.document.activeElement;
            if (activeEle) {
                activeEle.blur();
            }
        };

        this.setDropdown = function (ele, state) {
            if (state) {
                var wrapper = ele.closest(_this.settings.searchBarSelector).querySelector(_this.settings.selector);
                if (wrapper) {
                    var rect = wrapper.getBoundingClientRect();
                    ele.style.top = rect.height + 10 + 'px';
                }
                ele.style.display = 'block';

                window.setTimeout(function () {
                    ele.classList.add(_this.settings.searchDropdownActive);
                    ele.style.display = '';
                }, 17);
                _this.numOpenedDropdown += 1;
            } else {
                ele.classList.remove(_this.settings.searchDropdownActive);
                ele.style.top = '';

                _this.numOpenedDropdown -= 1;
            }

            _this.checkCloser();
        };

        this.checkCloser = function () {
            if (_this.numOpenedDropdown > 0) {
                if (_this.closerListener === null) {
                    _this.closerListener = window.document.addEventListener('click', function (e) {
                        var target = e.target || e.toElelent || e.srcElement;
                        if (target) {
                            var closestSearch = target.closest(_this.settings.searchBarSelector);
                            var closeSearch = false;
                            if (closestSearch === null) {
                                closeSearch = true;
                            } else {
                                var closeEle = target.closest(_this.settings.closeSelector);
                                if (closeEle !== null) {
                                    closeSearch = true;
                                }
                            }

                            if (closeSearch) {
                                var activeSearchEles = window.document.querySelectorAll('.' + _this.settings.searchDropdownActive);
                                if (activeSearchEles && activeSearchEles.length) {
                                    for (var i = 0, len = activeSearchEles.length; i < len; i++) {
                                        var activeSearchEle = activeSearchEles[i];
                                        _this.setDropdown(activeSearchEle, false);
                                    }
                                }
                            }
                        }
                        _this.numOpenedDropdown = 0;
                    });
                }
            } else if (_this.closerListener !== null) {
                window.document.removeEventListener('click', _this.closerListener);
                _this.closerListener = null;
            }
        };

        this.forceFocus = function (ele) {
            // workaround for android keyboard issue
            ele.focus();
            for (var i = 0; i < 10; i++) {
                window.setTimeout(function () {
                    ele.focus();
                }, 50 * i);
            }
        };

        this.initGet = function () {
            var dropdownTriggerEles = window.document.querySelectorAll(_this.settings.searchDropdownTriggerSelector);

            var _loop = function _loop(i, len) {
                var triggerEle = dropdownTriggerEles[i];
                var searchBar = triggerEle.closest(_this.settings.searchBarSelector);
                if (searchBar) {
                    var menuEle = searchBar.querySelector(_this.settings.searchDropdownSelector);
                    if (menuEle) {
                        triggerEle.addEventListener('focus', function () {
                            if (!_this.focusBlocked) {
                                if (_this.common.values.innerWidth >= _this.settings.dropdownBreakpoint) {
                                    var closestActive = searchBar.querySelector('.' + _this.settings.searchDropdownActive);
                                    if (closestActive === null) {
                                        _this.setDropdown(menuEle, true);
                                    }
                                }
                            }
                        });
                    }
                }
            };

            for (var i = 0, len = dropdownTriggerEles.length; i < len; i++) {
                _loop(i, len);
            }

            var inputEles = window.document.querySelectorAll(_this.settings.selector);
            if (inputEles && inputEles.length) {
                var _loop2 = function _loop2(i, len) {
                    var inputEle = inputEles[i];

                    inputEle.addEventListener('focus', function () {
                        if (!_this.focusBlocked) {
                            var searchForm = inputEle.closest(_this.settings.searchFormSelector);
                            if (searchForm) {
                                searchForm.classList.add(_this.settings.focusedSearchForm);
                            }
                        }
                    });

                    inputEle.addEventListener('blur', function () {
                        if (!_this.focusBlocked) {
                            var searchForm = inputEle.closest(_this.settings.searchFormSelector);
                            if (searchForm) {
                                searchForm.classList.remove(_this.settings.focusedSearchForm);
                            }
                        }
                    });

                    var searchBar = inputEle.closest(_this.settings.searchBarSelector);
                    if (searchBar) {
                        var trigger = searchBar.querySelector(_this.settings.triggerSelector);
                        if (trigger) {
                            trigger.addEventListener('click', function () {
                                if (!_this.focusBlocked) {
                                    _this.setState(true, searchBar);
                                    window.setTimeout(function () {
                                        _this.forceFocus(inputEle);
                                    }, 350);
                                }
                            });
                        }

                        var searchForm = searchBar.querySelector(_this.settings.searchFormSelector);
                        if (searchForm) {
                            searchForm.addEventListener('click', function () {
                                if (!_this.focusBlocked) {
                                    _this.forceFocus(inputEle);
                                }
                            });

                            var submitIcon = searchForm.querySelector(_this.settings.submitIconSelector);
                            if (submitIcon) {
                                submitIcon.addEventListener('click', function () {
                                    searchForm.submit();
                                });
                            }
                        }

                        var detailedEle = searchBar.querySelector(_this.settings.detailedSelector);
                        if (detailedEle) {
                            detailedEle.addEventListener('click', function (e) {
                                var menuEle = searchBar.querySelector(_this.settings.searchDropdownSelector);
                                if (menuEle) {
                                    _this.setDropdown(menuEle, true);
                                }

                                e.preventDefault();
                                return false;
                            });
                        }
                    }
                };

                for (var i = 0, len = inputEles.length; i < len; i++) {
                    _loop2(i, len);
                }
            }

            var closeEles = window.document.querySelectorAll(_this.settings.closeSelector);
            if (closeEles && closeEles.length) {
                for (var i = 0, len = closeEles.length; i < len; i++) {
                    var closeEle = closeEles[i];
                    closeEle.addEventListener('click', function (e) {
                        e.preventDefault();
                        _this.setState(false);
                        e.preventDefault();
                        return false;
                    });
                }
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.resizeGet = function () {
            var openXFMenuEle = window.document.querySelector(_this.settings.xfMenuOpenSelector);
            if (openXFMenuEle) {
                _this.xfMenuOpen = true;
            }
        };

        this.resizeSet = function () {
            if (_this.xfMenuOpen) {
                window.XF.MenuWatcher.closeAll(); // close XF dropdown menu since trigger could responsively hide
                _this.xfMenuOpen = false;
            }
        };

        this.running = false;
        this.settings = Object.assign({
            selector: '.uix_searchInput', // selector for search input
            closeSelector: '.uix_search--close',
            active: 'minimalSearch--active',
            activeTargetsSelector: '.p-nav-inner, .p-sectionLinks, .p-header-content, .p-staffBar',
            detailedSelector: '.uix_search--settings',
            detailed: 'minimalSearch--detailed',
            breakpoint: '650px',
            clickDelay: 100,
            clickTargetSelector: '.js-uix_minimalSearch__target',
            triggerSelector: '.uix_searchIconTrigger',
            searchFormSelector: '.uix_searchForm',
            focusedSearchForm: 'uix_searchForm--focused',
            searchBarSelector: '.uix_searchBar',
            searchInnerSelector: '.uix_searchBarInner',
            submitIconSelector: '.uix_search--submit .uix_icon--search',
            searchDropdownSelector: '.uix_searchDropdown__menu',
            searchDropdownTriggerSelector: '.uix_searchDropdown__trigger',
            searchDropdownActive: 'uix_searchDropdown__menu--active',
            dropdownBreakpoint: 0,
            xfMenuOpenSelector: '.menu.is-active form[data-xf-init="quick-search"]'
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];
        this.numOpenedDropdown = 0;
        this.closerListener = null;
        this.xfMenuOpen = false;
        this.focusBlocked = false;

        if (init) {
            this.init();
        }
    }

    _createClass(MinimalSearch, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_MinimalSearch',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_MinimalSearch',
                func: this.initSet,
                order: 10
            });

            this.common.register({
                phase: 'resizeGet',
                addon: 'TH_UIX_MinimalSearch',
                func: this.resizeGet,
                order: 10
            });
            this.common.register({
                phase: 'resizeSet',
                addon: 'TH_UIX_MinimalSearch',
                func: this.resizeSet,
                order: 10
            });
        }
    }]);

    return MinimalSearch;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.minimalSearch = {
    minimalSearch: minimalSearch
};

/* harmony default export */ __webpack_exports__["a"] = (minimalSearch);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loginPanel = function () {
    function LoginPanel(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, LoginPanel);

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.keyCheck = function (e) {
            if (_this.state) {
                if (e.keyCode === 27) {
                    _this.setState(false);
                }
            }
        };

        this.setState = function (state, selector) {
            if (state) {
                var ele = window.document.querySelector(selector);
                if (ele) {
                    var inputEle = ele.querySelector(_this.settings.inputSelector);
                    if (inputEle) {
                        inputEle.focus();
                    }
                    ele.classList.add(_this.settings.active);
                }

                if (!_this.listener) {
                    _this.listener = true;
                    window.document.addEventListener('keydown', _this.keyCheck);
                }
            } else {
                window.document.querySelector(_this.settings.loginSelector).classList.remove(_this.settings.active);
                window.document.querySelector(_this.settings.registerSelector).classList.remove(_this.settings.active);

                if (_this.listener) {
                    window.document.removeEventListener('keydown', _this.keyCheck);
                    _this.listener = false;
                }
            }

            _this.state = state;
        };

        this.initGet = function () {
            var loginTrigger = window.document.querySelector(_this.settings.loginTriggerSelector);
            if (loginTrigger) {
                loginTrigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    _this.setState(true, _this.settings.loginSelector);

                    return false;
                });
            }

            var registerTrigger = window.document.querySelector(_this.settings.registerTriggerSelector);
            if (registerTrigger) {
                registerTrigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    _this.setState(true, _this.settings.registerSelector);
                    return false;
                });
            }

            var mask = window.document.querySelector(_this.settings.maskSelector);
            if (mask) {
                mask.addEventListener('click', function () {
                    _this.setState(false);
                });
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.running = false;
        this.settings = Object.assign({
            loginSelector: '.uix__loginForm--login', // selector for login form
            loginTriggerSelector: '#uix_loginPanel--trigger',
            registerSelector: '.uix__loginForm--register', // selector for login form
            registerTriggerSelector: '#uix_registerPanel--trigger',
            maskSelector: '.uix__loginForm--mask',
            active: 'is-active',
            inputSelector: '.input'
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];
        this.state = false;
        this.listener = false;

        if (init) {
            this.init();
        }
    }

    _createClass(LoginPanel, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_LoginPanel',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_LoginPanel',
                func: this.initSet,
                order: 10
            });
        }
    }]);

    return LoginPanel;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.loginPanel = {
    loginPanel: loginPanel
};

/* harmony default export */ __webpack_exports__["a"] = (loginPanel);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sidebarNav = function () {
    function SidebarNav(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, SidebarNav);

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.toggleSidebar = function () {
            var stateName = '0';
            if (_this.visible) {
                window.document.querySelector(_this.settings.selector).classList.remove(_this.settings.visible);
                stateName = '1';
            } else {
                window.document.querySelector(_this.settings.selector).classList.add(_this.settings.visible);
            }
            _this.visible = !_this.visible;

            _this.common.fetch({
                url: _this.settings.link,
                data: {
                    collapsed: stateName
                }
            });
        };

        this.navTrigger = function (e) {
            var rootEle = e.target;
            if (rootEle) {
                var parent = rootEle.closest(_this.settings.navElSelector);
                if (parent) {
                    var subNav = parent.querySelector(_this.settings.subNavSelector);
                    if (subNav) {
                        var subNavInner = subNav.querySelector(_this.settings.subNavInnerSelector);
                        if (subNavInner) {
                            var eleHeight = subNavInner.offsetHeight + 'px';
                            var triggerEle = rootEle.closest(_this.settings.collapseTriggerSelector);
                            triggerEle.classList.toggle(_this.settings.collapseClass);
                            if (subNav.classList.contains(_this.settings.expandClass)) {
                                subNav.style.height = eleHeight;
                                subNav.classList.remove(_this.settings.expandClass);
                                window.setTimeout(function () {
                                    window.requestAnimationFrame(function () {
                                        subNav.style.height = 0;
                                        window.setTimeout(function () {
                                            window.requestAnimationFrame(function () {
                                                subNav.style.height = '';
                                                _this.common.resizeFire();
                                            });
                                        }, _this.settings.collapseDuration);
                                    });
                                }, 17);
                            } else {
                                subNav.classList.add(_this.settings.expandClass);
                                subNav.style.height = eleHeight;
                                window.setTimeout(function () {
                                    window.requestAnimationFrame(function () {
                                        subNav.style.height = '';
                                        _this.common.resizeFire();
                                    });
                                }, _this.settings.collapseDuration);
                            }
                        }
                    }
                }
            }
        };

        this.initGet = function () {
            var triggers = window.document.querySelectorAll(_this.settings.collapseTriggerSelector);
            if (triggers && triggers.length) {
                for (var i = 0, len = triggers.length; i < len; i++) {
                    var _trigger = triggers[i];
                    _trigger.addEventListener('click', _this.navTrigger);
                }
            }

            var trigger = window.document.querySelector(_this.settings.triggerSelector);
            if (trigger) {
                trigger.addEventListener('click', function () {
                    _this.toggleSidebar();
                });
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.running = false;
        this.settings = Object.assign({
            selector: 'html',
            triggerSelector: '#uix_sidebarNav--trigger',
            visible: 'sidebarNav--active',
            collapseTriggerSelector: '.uix_sidebarNav--trigger',
            navElSelector: '.p-navEl',
            subNavSelector: '.uix_sidebarNav__subNav',
            subNavInnerSelector: '.uix_sidebarNav__subNavInner',
            collapseClass: 'is-expanded',
            expandClass: 'subNav--expand',
            collapseDuration: 400
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];
        this.visible = !this.settings.state;

        if (init) {
            this.init();
        }
    }

    _createClass(SidebarNav, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_SidebarNav',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_SidebarNav',
                func: this.initSet,
                order: 10
            });
        }
    }]);

    return SidebarNav;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.sidebarNav = {
    sidebarNav: sidebarNav
};

/* harmony default export */ __webpack_exports__["a"] = (sidebarNav);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sidebar = function () {
    function Sidebar(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, Sidebar);

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.toggleSidebar = function () {
            var stateName = '1';
            if (window.document.querySelector(_this.settings.selector).classList.contains(_this.settings.collapseClass)) {
                window.document.querySelector(_this.settings.selector).classList.remove(_this.settings.collapseClass);
                stateName = '0';
            } else {
                window.document.querySelector(_this.settings.selector).classList.add(_this.settings.collapseClass);
            }
            if (_this.settings.link === null) {
                _this.common.warn('No AJAX link set for sidebar toggle');
            } else {
                _this.common.fetch({
                    url: _this.settings.link,
                    data: {
                        collapsed: stateName
                    }
                });
            }

            window.setTimeout(function () {
                _this.common.resizeFire();
            }, _this.settings.delay);
        };

        this.initGet = function () {
            var triggers = window.document.querySelectorAll(_this.settings.triggerSelector);
            if (triggers && triggers.length) {
                for (var i = 0, len = triggers.length; i < len; i++) {
                    var trigger = triggers[i];
                    trigger.addEventListener('click', function () {
                        _this.toggleSidebar();
                    });
                }
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.running = false;
        this.settings = Object.assign({
            selector: 'html',
            triggerSelector: '.uix_sidebarTrigger',
            collapseClass: 'uix_sidebarCollapsed',
            link: null,
            delay: 400
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];

        if (init) {
            this.init();
        }
    }

    _createClass(Sidebar, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_Sidebar',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_Sidebar',
                func: this.initSet,
                order: 10
            });
        }
    }]);

    return Sidebar;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.sidebar = {
    sidebar: sidebar
};

/* harmony default export */ __webpack_exports__["a"] = (sidebar);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fab = function () {
    function Fab(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, Fab);

        this.setState = function (state) {
            if (state !== _this.active) {
                _this.active = state;
                for (var i = 0, len = _this.eles.length; i < len; i++) {
                    var ele = _this.eles[i];
                    if (state) {
                        ele.classList.add(_this.settings.active);
                    } else {
                        ele.classList.remove(_this.settings.active);
                    }
                }
            }
        };

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.initGet = function () {
            if (_this.settings.enabled) {
                _this.eles = window.document.querySelectorAll(_this.settings.selector);
            }

            var quickReplyButtons = window.document.querySelectorAll(_this.settings.quickReplySelector);
            if (quickReplyButtons && quickReplyButtons.length) {
                for (var i = 0, len = quickReplyButtons.length; i < len; i++) {
                    var quickReplyButton = quickReplyButtons[i];
                    quickReplyButton.addEventListener('click', function (e) {
                        var $editor = window.XF.findRelativeIf('.js-quickReply .js-editor', window.jQuery(e.target));
                        if ($editor) {
                            window.XF.focusEditor($editor);
                            e.preventDefault();
                        }
                    });
                }
            }

            if (_this.settings.enableQuickPost) {
                var quickPostButtons = window.document.querySelectorAll(_this.settings.quickPostSelector);
                if (quickPostButtons && quickPostButtons.length) {
                    for (var _i = 0, _len = quickPostButtons.length; _i < _len; _i++) {
                        var quickPostButton = quickPostButtons[_i];
                        quickPostButton.addEventListener('click', function (e) {
                            var target = window.document.querySelector(_this.settings.quickPostTargetSelector);
                            if (target) {
                                e.preventDefault();
                                target.focus();
                            }
                        });
                    }
                }
            }
        };

        this.initSet = function () {
            if (_this.settings.enabled) {
                _this.running = true;
            }
        };

        this.scroll = function () {
            _this.scrollGet();
            _this.scrollSet();
        };

        this.scrollGet = function () {
            if (_this.settings.enabled) {}
        };

        this.scrollSet = function () {
            if (_this.settings.enabled) {
                if (window.themehouse.data.scrollY > _this.lastScrollTop) {
                    _this.setState(false);
                } else if (window.themehouse.data.scrollY < _this.lastScrollTop) {
                    _this.setState(true);
                }
                _this.lastScrollTop = window.themehouse.data.scrollY;
            }
        };

        this.running = false;
        this.settings = Object.assign({
            selector: '.uix_fabBar',
            active: 'uix_fabBar--active',
            quickReplySelector: '.uix_quickReply--button',
            quickPostSelector: '.uix_quickPost--button',
            quickPostTargetSelector: '.js-titleInput',
            enabled: false,
            enableQuickPost: false
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];
        this.eles = [];
        this.active = true;
        this.lastScrollTop = 0;

        if (init) {
            this.init();
        }
    }

    _createClass(Fab, [{
        key: 'register',
        value: function register() {
            if (this.settings.enabled) {
                this.common.register({
                    phase: 'afterGet',
                    addon: 'TH_UIX_Fab',
                    func: this.initGet,
                    order: 10
                });
                this.common.register({
                    phase: 'afterSet',
                    addon: 'TH_UIX_Fab',
                    func: this.initSet,
                    order: 10
                });
                this.common.register({
                    phase: 'scrollGet',
                    addon: 'TH_UIX_Fab',
                    func: this.scrollGet,
                    order: 10
                });
                this.common.register({
                    phase: 'scrollSet',
                    addon: 'TH_UIX_Fab',
                    func: this.scrollSet,
                    order: 10
                });
            }
        }
    }]);

    return Fab;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.fab = {
    fab: fab
};

/* harmony default export */ __webpack_exports__["a"] = (fab);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nodes = function () {
    function Nodes(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, Nodes);

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.initGet = function () {
            if (_this.settings.enabled) {
                var eles = window.document.querySelectorAll(_this.settings.selector);
                if (eles && eles.length) {
                    var _loop = function _loop(i, len) {
                        var ele = eles[i];
                        ele.addEventListener('click', function (e) {
                            var target = e.target;
                            if (target) {
                                if (target.closest(_this.settings.subNodeSelector)) {
                                    return true;
                                }
                                if (target.closest('a')) {
                                    return true;
                                }
                                if (target.tagName.toLowerCase() === 'a') {
                                    return true;
                                }
                            }

                            var hrefEle = ele.querySelector(_this.settings.hrefSelector);
                            if (hrefEle) {
                                var href = hrefEle.getAttribute('href');
                                if (href) {
                                    window.location.href = href;
                                }
                            }
                            return true;
                        });
                    };

                    for (var i = 0, len = eles.length; i < len; i++) {
                        _loop(i, len);
                    }
                }
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.running = false;
        this.settings = Object.assign({
            selector: '.node-body',
            hrefSelector: '.node-title a',
            subNodeSelector: '.node-subNodeMenu',
            enabled: false
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];

        if (init) {
            this.init();
        }
    }

    _createClass(Nodes, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_Nodes',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_Nodes',
                func: this.initSet,
                order: 10
            });
        }
    }]);

    return Nodes;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.nodeClick = {
    nodes: nodes
};

/* harmony default export */ __webpack_exports__["a"] = (nodes);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nodesCollapse = function () {
    function NodesCollapse(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, NodesCollapse);

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.initGet = function () {
            var triggers = window.document.querySelectorAll(_this.settings.triggerSelector);
            if (triggers && triggers.length) {
                for (var i = 0, len = triggers.length; i < len; i++) {
                    var trigger = triggers[i];
                    trigger.addEventListener('click', function (e) {
                        var ele = e.target;
                        var parent = ele.closest(_this.settings.parentSelector);
                        var parentClassSplit = parent.className.split(' ');
                        var nodeId = -1;
                        for (var classIndex = 0, classLen = parentClassSplit.length; classIndex < classLen; classIndex++) {
                            var className = parentClassSplit[classIndex];
                            if (className.indexOf(_this.settings.nodeIdReplace) === 0 && className !== _this.settings.nodeIdReplace) {
                                nodeId = parseInt(className.replace(_this.settings.nodeIdReplace, ''), 10);
                            }
                        }
                        var child = parent.querySelector(_this.settings.childSelector);
                        var innerChild = child.querySelector(_this.settings.childInnerSelector);
                        var height = innerChild.offsetHeight;
                        child.style.height = height + 'px';
                        child.classList.add('uix_node--transitioning');
                        window.requestAnimationFrame(function () {
                            var stateName = '1';
                            if (parent.classList.contains(_this.settings.active)) {
                                parent.classList.remove(_this.settings.active);
                                stateName = '0';
                            } else {
                                parent.classList.add(_this.settings.active);
                            }

                            _this.common.fetch({
                                url: _this.settings.link,
                                data: {
                                    collapsed: stateName,
                                    node_id: nodeId
                                }
                            });

                            window.setTimeout(function () {
                                child.style.height = '';
                                child.classList.remove('uix_node--transitioning');
                            }, _this.settings.duration);
                        });
                    });
                }
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.running = false;
        this.settings = Object.assign({
            triggerSelector: '.categoryCollapse--trigger',
            parentSelector: '.block--category',
            nodeIdReplace: 'block--category',
            childSelector: '.uix_block-body--outer',
            childInnerSelector: '.block-body',
            active: 'category--collapsed',
            duration: 400
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];
        this.state = false;
        this.listener = false;

        if (init) {
            this.init();
        }
    }

    _createClass(NodesCollapse, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_NodesCollapse',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_NodesCollapse',
                func: this.initSet,
                order: 10
            });
        }
    }]);

    return NodesCollapse;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.nodesCollapse = {
    nodesCollapse: nodesCollapse
};

/* harmony default export */ __webpack_exports__["a"] = (nodesCollapse);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var widthToggle = function () {
    function WidthToggle(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? false : _ref$init,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, WidthToggle);

        this.init = function () {
            _this.initGet();
            _this.initSet();
        };

        this.initGet = function () {
            var triggerEle = window.document.querySelector(_this.settings.triggerSelector);
            var rootEle = window.document.querySelector(_this.settings.selector);
            if (triggerEle && rootEle) {
                triggerEle.addEventListener('click', function () {
                    var stateName = 'fixed';
                    if (rootEle.classList.contains(_this.settings.fixedClass)) {
                        rootEle.classList.remove(_this.settings.fixedClass);
                        rootEle.classList.add(_this.settings.fluidClass);
                        stateName = 'fluid';
                    } else {
                        rootEle.classList.add(_this.settings.fixedClass);
                        rootEle.classList.remove(_this.settings.fluidClass);
                    }

                    window.setTimeout(function () {
                        _this.common.resizeFire();
                    }, _this.settings.delay);

                    _this.common.fetch({
                        url: _this.settings.link,
                        data: {
                            width: stateName
                        }
                    });
                });
            }
        };

        this.initSet = function () {
            _this.running = true;
        };

        this.running = false;
        this.settings = Object.assign({
            selector: 'html',
            triggerSelector: '#uix_widthToggle--trigger',
            fixedClass: 'uix_page--fixed',
            fluidClass: 'uix_page--fluid',
            enabled: false,
            link: '',
            delay: 400
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];

        if (init) {
            this.init();
        }
    }

    _createClass(WidthToggle, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'afterGet',
                addon: 'TH_UIX_WidthToggle',
                func: this.initGet,
                order: 10
            });
            this.common.register({
                phase: 'afterSet',
                addon: 'TH_UIX_WidthToggle',
                func: this.initSet,
                order: 10
            });
        }
    }]);

    return WidthToggle;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.widthToggle = {
    widthToggle: widthToggle
};

/* harmony default export */ __webpack_exports__["a"] = (widthToggle);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tooltipFix = function () {
    function TooltipFix(_ref) {
        var _this = this;

        var _ref$settings = _ref.settings,
            settings = _ref$settings === undefined ? {} : _ref$settings,
            _ref$commonVersion = _ref.commonVersion,
            commonVersion = _ref$commonVersion === undefined ? '20180112' : _ref$commonVersion;

        _classCallCheck(this, TooltipFix);

        this.scroll = function () {
            _this.scrollGet();
            _this.scrollSet();
        };

        this.scrollGet = function () {
            if (window.XF.MemberTooltip.activeTooltip && window.XF.MemberTooltip.activeTooltip.trigger && window.XF.MemberTooltip.activeTooltip.trigger.$target && window.XF.MemberTooltip.activeTooltip.trigger.$target.length) {
                var triggerEle = window.XF.MemberTooltip.activeTooltip.trigger.$target[0];
                var disablerEle = triggerEle.closest(_this.settings.fixClassSelector);
                if (disablerEle) {
                    _this.needsReposition = true;
                }
            }
        };

        this.scrollSet = function () {
            if (_this.needsReposition) {
                if (window.XF.MemberTooltip.activeTooltip && window.XF.MemberTooltip.activeTooltip.tooltip) {
                    window.XF.MemberTooltip.activeTooltip.tooltip.reposition();
                }
                _this.needsReposition = false;
            }
        };

        this.needsReposition = false;
        this.settings = Object.assign({
            fixClassSelector: '.uix_stickyBodyElement',
            enabled: false
        }, settings);

        this.commonVersion = commonVersion;
        this.common = window.themehouse.common[commonVersion];
    }

    _createClass(TooltipFix, [{
        key: 'register',
        value: function register() {
            this.common.register({
                phase: 'scrollGet',
                addon: 'TH_UIX_TooltipFix',
                func: this.scrollGet,
                order: 10
            });
            this.common.register({
                phase: 'scrollSet',
                addon: 'TH_UIX_TooltipFix',
                func: this.scrollSet,
                order: 10
            });
        }
    }]);

    return TooltipFix;
}();

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.tooltipFix = {
    tooltipFix: tooltipFix
};

/* harmony default export */ __webpack_exports__["a"] = (tooltipFix);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var debug = function debug() {
    var settings = window.themehouse.settings;
    var keys = Object.keys(settings);
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        console.log('==========================');
        console.log(key);
        printObject(settings[key], 1);
    }
};

var printObject = function printObject(data) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var spacer = '';
    for (var spacerIndex = 0; spacerIndex < depth; spacerIndex++) {
        spacer += '     ';
    }
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        var keys = Object.keys(data);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var childData = data[key];
            if ((typeof childData === 'undefined' ? 'undefined' : _typeof(childData)) === 'object') {
                console.log(spacer + key + ':');
                printObject(data[key], depth + 1);
            } else {
                console.log(spacer + key + ': ' + data[key]);
            }
        }
    } else {
        console.log(spacer + data);
    }
};

if (typeof window.themehouse === 'undefined') {
    window.themehouse = {};
}

window.themehouse.debug = debug;

/* unused harmony default export */ var _unused_webpack_default_export = (debug);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

window.XF.HScroller.prototype.updateScroll = function () {
    var el = this.$scrollTarget[0];
    var left = this.$scrollTarget.normalizedScrollLeft();
    var width = el.offsetWidth;
    var scrollWidth = el.scrollWidth;
    var startActive = left > 0;
    var endActive = width + left + 1 < scrollWidth;

    if (startActive) {
        this.$scrollTarget.addClass('th_scroller--start-active');
    } else {
        this.$scrollTarget.removeClass('th_scroller--start-active');
    }

    if (endActive) {
        this.$scrollTarget.addClass('th_scroller--end-active');
    } else {
        this.$scrollTarget.removeClass('th_scroller--end-active');
    }

    this.$goStart[startActive ? 'addClass' : 'removeClass']('is-active');
    this.$goEnd[endActive ? 'addClass' : 'removeClass']('is-active');
};

/***/ })
/******/ ]);