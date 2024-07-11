"use strict";
(self["webpackChunkhamburguer"] = self["webpackChunkhamburguer"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/style.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 1200px;
  background-color: #1e1e1e;
}
@media screen and (max-width: 450px) {
  body header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    color: white;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body h1 {
    font-size: 1.2em;
  }
  body .menu-toggle {
    display: none;
  }
  body .menu-icon {
    padding-bottom: 0.5em;
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  body .menu-icon span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.5s;
  }
  body nav.menu {
    display: flex;
  }
  body nav.menu a {
    color: white;
    text-decoration: none;
    margin: 0 1em;
  }
  body button {
    color: #1e1e1e;
    background-color: #b3a0cd;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}
@media screen and (max-width: 450px) and (max-width: 768px) {
  body .menu-icon {
    display: flex;
  }
  body nav.menu {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #2e2d2d;
    position: absolute;
    top: 60px;
    left: 0;
  }
  body nav.menu a,
  body nav.menu button {
    margin: 1em 0;
    text-align: center;
  }
  body .menu-toggle:checked + .menu-icon + nav.menu {
    display: flex;
  }
  body .menu-toggle:checked + .menu-icon span:nth-child(1) {
    transform: rotate(45deg) translate(10px, 10px);
    background-color: #b3a0cd;
    width: 35px;
  }
  body .menu-toggle:checked + .menu-icon span:nth-child(2) {
    opacity: 0;
  }
  body .menu-toggle:checked + .menu-icon span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
    background-color: #b3a0cd;
    width: 35px;
  }
}
@media screen and (max-width: 450px) {
  body .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  body .section1 h1 {
    color: #e9e3dc;
    font-size: 1.5em;
    padding: 0 1em;
    line-height: 1em;
    text-align: center;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .section1 .ImgBurger {
    width: 100%;
  }
  body .section2 {
    margin-top: 0.5em;
  }
  body .section2 div {
    background-color: #d1ef53;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  body .section2 div h2 {
    font-size: 1em;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .section2 div div {
    display: flex;
  }
  body .section2 div div button {
    background-color: #e9e3dc;
    border: 2px solid #1e1e1e;
    box-shadow: 5px 5px 0px #1e1e1e;
    align-self: start;
    margin-top: 0.5em;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}
@media screen and (min-width: 450px) and (max-width: 768px) {
  body header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    color: white;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .menu-toggle {
    display: none;
  }
  body .menu-icon {
    padding-bottom: 0.5em;
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  body .menu-icon span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.5s;
  }
  body nav.menu {
    display: flex;
  }
  body nav.menu a {
    color: white;
    text-decoration: none;
    margin: 0 1em;
  }
  body button {
    color: #1e1e1e;
    background-color: #b3a0cd;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}
@media screen and (min-width: 450px) and (max-width: 768px) and (max-width: 768px) {
  body .menu-icon {
    display: flex;
  }
  body nav.menu {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #2e2d2d;
    position: absolute;
    top: 60px;
    left: 0;
  }
  body nav.menu a,
  body nav.menu button {
    margin: 1em 0;
    text-align: center;
  }
  body .menu-toggle:checked + .menu-icon + nav.menu {
    display: flex;
  }
  body .menu-toggle:checked + .menu-icon span:nth-child(1) {
    transform: rotate(45deg) translate(10px, 10px);
    background-color: #b3a0cd;
    width: 35px;
  }
  body .menu-toggle:checked + .menu-icon span:nth-child(2) {
    opacity: 0;
  }
  body .menu-toggle:checked + .menu-icon span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
    background-color: #b3a0cd;
    width: 35px;
  }
}
@media screen and (min-width: 450px) and (max-width: 768px) {
  body .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  body .section1 h1 {
    color: #e9e3dc;
    font-size: 2.5em;
    line-height: 1em;
    text-align: center;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .section1 .ImgBurger {
    width: 100%;
  }
  body .section2 {
    margin-top: 0.5em;
  }
  body .section2 div {
    background-color: #d1ef53;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  body .section2 div h2 {
    font-size: 1.5em;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .section2 div div {
    display: flex;
  }
  body .section2 div div button {
    background-color: #e9e3dc;
    border: 2px solid #1e1e1e;
    box-shadow: 5px 5px 0px #1e1e1e;
    align-self: start;
    margin-top: 0.5em;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}
@media screen and (min-width: 769px) {
  body header {
    color: #e9e3dc;
    height: 80px;
    padding: 0 3em 0 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  body header h1 {
    cursor: pointer;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body header input,
  body header label {
    display: none;
  }
  body header nav {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body header nav a {
    color: #e9e3dc;
    text-decoration: none;
  }
  body header nav button {
    color: #1e1e1e;
    background-color: #b3a0cd;
    border: none;
    padding: 0.5em;
    cursor: pointer;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .section1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  body .section1 h1 {
    color: #e9e3dc;
    font-size: 4em;
    line-height: 1em;
    text-align: center;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .section1 .ImgBurger {
    width: 80%;
  }
  body .section2 {
    margin-top: 2em;
  }
  body .section2 div {
    margin: 0 auto;
    height: 300px;
    border-radius: 20px;
    background-color: #d1ef53;
    width: 80%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body .section2 div h2 {
    margin-left: 5%;
    font-size: 2em;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body .section2 div div {
    margin: 0 5% 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10%;
  }
  body .section2 div div button {
    background-color: #e9e3dc;
    padding: 0.5em 1.2em;
    border: 2px solid #1e1e1e;
    box-shadow: 5px 5px 0px #1e1e1e;
    align-self: start;
    margin-top: 2em;
    font-family: "Bowlby One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/stylesheets/style.scss"],"names":[],"mappings":"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","sourcesContent":["$background-color-small: red;\n$background-color-medium: rgb(187, 255, 0);\n$background-color-large: rgb(0, 47, 255);\n$cor-primaria: #1e1e1e;\n$cor-secundaria: #e9e3dc;\n$cor-terciaria: #b3a0cd;\n$cor-quaternaria: #d1ef53;\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 1200px;\n    background-color: $cor-primaria;\n    @media screen and (max-width: 450px) {\n        header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 1em;\n            // background-color: $cor-primaria;\n            color: white;\n            // font title\n            font-family: \"Bowlby One\", sans-serif;\n            font-weight: 400;\n            font-style: normal;\n        }\n        h1 {\n            font-size: 1.2em;\n        }\n        .menu-toggle {\n            display: none;\n        }\n        // Linhas do Hamburguer\n        .menu-icon {\n            padding-bottom: 0.5em;\n            display: none;\n            flex-direction: column;\n            cursor: pointer;\n        }\n\n        .menu-icon span {\n            width: 25px;\n            height: 3px;\n            background-color: white;\n            margin: 4px 0;\n            transition: 0.5s;\n        }\n\n        nav.menu {\n            display: flex;\n        }\n\n        nav.menu a {\n            color: white;\n            text-decoration: none;\n            margin: 0 1em;\n        }\n\n        button {\n            color: $cor-primaria;\n            background-color: $cor-terciaria;\n            border: none;\n            padding: 0.5em 1em;\n            cursor: pointer;\n            // font\n            font-family: \"Bowlby One\", sans-serif;\n            font-weight: 400;\n            font-style: normal;\n        }\n        // caixa\n        @media (max-width: 768px) {\n            .menu-icon {\n                display: flex;\n            }\n            // item dentro da CAIXA\n            nav.menu {\n                display: none;\n                flex-direction: column;\n                width: 100%;\n                background-color: #2e2d2d;\n                position: absolute;\n                top: 60px;\n                left: 0;\n            }\n            nav.menu a,\n            nav.menu button {\n                margin: 1em 0;\n                text-align: center;\n            }\n\n            .menu-toggle:checked + .menu-icon + nav.menu {\n                display: flex;\n            }\n            .menu-toggle:checked + .menu-icon span:nth-child(1) {\n                transform: rotate(45deg) translate(10px, 10px);\n                background-color: $cor-terciaria;\n                width: 35px;\n            }\n\n            .menu-toggle:checked + .menu-icon span:nth-child(2) {\n                opacity: 0;\n            }\n\n            .menu-toggle:checked + .menu-icon span:nth-child(3) {\n                transform: rotate(-45deg) translate(5px, -5px);\n                background-color: $cor-terciaria;\n                width: 35px;\n            }\n        }\n        // Corpo\n        .section1 {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            h1 {\n                color: $cor-secundaria;\n                font-size: 1.5em;\n                padding: 0 1em;\n                line-height: 1em;\n                text-align: center;\n                // font\n                font-family: \"Bowlby One\", sans-serif;\n                font-weight: 400;\n                font-style: normal;\n            }\n            .ImgBurger {\n                width: 100%;\n            }\n        }\n        .section2 {\n            margin-top: 0.5em;\n            div {\n                background-color: $cor-quaternaria;\n                padding: 1em;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-direction: column;\n                h2 {\n                    font-size: 1em;\n                    // font\n                    font-family: \"Bowlby One\", sans-serif;\n                    font-weight: 400;\n                    font-style: normal;\n                }\n                div {\n                    display: flex;\n                    button {\n                        background-color: $cor-secundaria;\n                        border: 2px solid $cor-primaria;\n                        box-shadow: 5px 5px 0px $cor-primaria;\n                        align-self: start;\n                        margin-top: 0.5em;\n                        // font\n                        font-family: \"Bowlby One\", sans-serif;\n                        font-weight: 400;\n                        font-style: normal;\n                    }\n                }\n            }\n        }\n        // Fim do corpo\n    }\n\n    @media screen and (min-width: 450px) and (max-width: 768px) {\n        header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 1em;\n            // background-color: $cor-primaria;\n            color: white;\n            // font title\n            font-family: \"Bowlby One\", sans-serif;\n            font-weight: 400;\n            font-style: normal;\n        }\n\n        .menu-toggle {\n            display: none;\n        }\n        // Linhas do Hamburguer\n        .menu-icon {\n            padding-bottom: 0.5em;\n            display: none;\n            flex-direction: column;\n            cursor: pointer;\n        }\n\n        .menu-icon span {\n            width: 25px;\n            height: 3px;\n            background-color: white;\n            margin: 4px 0;\n            transition: 0.5s;\n        }\n\n        nav.menu {\n            display: flex;\n        }\n\n        nav.menu a {\n            color: white;\n            text-decoration: none;\n            margin: 0 1em;\n        }\n\n        button {\n            color: $cor-primaria;\n            background-color: $cor-terciaria;\n            border: none;\n            padding: 0.5em 1em;\n            cursor: pointer;\n            // font\n            font-family: \"Bowlby One\", sans-serif;\n            font-weight: 400;\n            font-style: normal;\n        }\n        // caixa style\n        @media (max-width: 768px) {\n            .menu-icon {\n                display: flex;\n            }\n            // item dentro da CAIXA\n            nav.menu {\n                display: none;\n                flex-direction: column;\n                width: 100%;\n                background-color: #2e2d2d;\n                position: absolute;\n                top: 60px;\n                left: 0;\n            }\n            nav.menu a,\n            nav.menu button {\n                margin: 1em 0;\n                text-align: center;\n            }\n\n            .menu-toggle:checked + .menu-icon + nav.menu {\n                display: flex;\n            }\n            .menu-toggle:checked + .menu-icon span:nth-child(1) {\n                transform: rotate(45deg) translate(10px, 10px);\n                background-color: $cor-terciaria;\n                width: 35px;\n            }\n\n            .menu-toggle:checked + .menu-icon span:nth-child(2) {\n                opacity: 0;\n            }\n\n            .menu-toggle:checked + .menu-icon span:nth-child(3) {\n                transform: rotate(-45deg) translate(5px, -5px);\n                background-color: $cor-terciaria;\n                width: 35px;\n            }\n        }\n        // Corpo\n        .section1 {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            h1 {\n                color: $cor-secundaria;\n                font-size: 2.5em;\n                line-height: 1em;\n                text-align: center;\n                // font\n                font-family: \"Bowlby One\", sans-serif;\n                font-weight: 400;\n                font-style: normal;\n            }\n            .ImgBurger {\n                width: 100%;\n            }\n        }\n        .section2 {\n            margin-top: 0.5em;\n            div {\n                background-color: $cor-quaternaria;\n                padding: 1em;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-direction: column;\n                h2 {\n                    font-size: 1.5em;\n                    // font\n                    font-family: \"Bowlby One\", sans-serif;\n                    font-weight: 400;\n                    font-style: normal;\n                }\n                div {\n                    display: flex;\n                    button {\n                        background-color: $cor-secundaria;\n                        border: 2px solid $cor-primaria;\n                        box-shadow: 5px 5px 0px $cor-primaria;\n                        align-self: start;\n                        margin-top: 0.5em;\n                        // font\n                        font-family: \"Bowlby One\", sans-serif;\n                        font-weight: 400;\n                        font-style: normal;\n                    }\n                }\n            }\n        }\n        // Fim do corpo\n    }\n    @media screen and (min-width: 769px) {\n        // background-color: $background-color-large;\n        header {\n            // background-color: $cor-primaria;\n            color: $cor-secundaria;\n            height: 80px;\n            padding: 0 3em 0 3em;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            h1 {\n                cursor: pointer;\n                // font\n                font-family: \"Bowlby One\", sans-serif;\n                font-weight: 400;\n                font-style: normal;\n            }\n            input,\n            label {\n                display: none;\n            }\n            nav {\n                width: 30%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                justify-content: space-around;\n                font-family: \"Bowlby One\", sans-serif;\n                font-weight: 400;\n                font-style: normal;\n                a {\n                    color: $cor-secundaria;\n                    text-decoration: none;\n                }\n                button {\n                    color: $cor-primaria;\n                    background-color: $cor-terciaria;\n                    border: none;\n                    padding: 0.5em;\n                    cursor: pointer;\n                    // font\n                    font-family: \"Bowlby One\", sans-serif;\n                    font-weight: 400;\n                    font-style: normal;\n                }\n            }\n        }\n        // Corpo\n        .section1 {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            h1 {\n                color: $cor-secundaria;\n                font-size: 4em;\n                line-height: 1em;\n                text-align: center;\n                // font\n                font-family: \"Bowlby One\", sans-serif;\n                font-weight: 400;\n                font-style: normal;\n            }\n            .ImgBurger {\n                width: 80%;\n            }\n        }\n        .section2 {\n            margin-top: 2em;\n            div {\n                margin: 0 auto;\n                height: 300px;\n                border-radius: 20px;\n                background-color: $cor-quaternaria;\n                width: 80%;\n                padding: 1em;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                h2 {\n                    margin-left: 5%;\n                    font-size: 2em;\n                    // font\n                    font-family: \"Bowlby One\", sans-serif;\n                    font-weight: 400;\n                    font-style: normal;\n                }\n                div {\n                    margin: 0 5% 0 0;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    flex-direction: column;\n                    padding: 10%;\n                    button {\n                        background-color: $cor-secundaria;\n                        padding: 0.5em 1.2em;\n                        border: 2px solid $cor-primaria;\n                        box-shadow: 5px 5px 0px $cor-primaria;\n                        align-self: start;\n                        margin-top: 2em;\n\n                        // font\n                        font-family: \"Bowlby One\", sans-serif;\n                        font-weight: 400;\n                        font-style: normal;\n                    }\n                }\n            }\n        }\n        // Fim do corpo\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/stylesheets/style.scss":
/*!*******************************************!*\
  !*** ./src/assets/stylesheets/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/stylesheets/style.scss */ "./src/assets/stylesheets/style.scss");
/* harmony import */ var _assets_img_Burgers_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/Burgers.png */ "./src/assets/img/Burgers.png");
// import _ from "lodash";

// menu Mobile
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll("nav.menu a, nav.menu button");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });
});

// End menu Mobile

// Import img

const DomImgBurger = document.querySelector(".ImgBurger");
DomImgBurger.src = _assets_img_Burgers_png__WEBPACK_IMPORTED_MODULE_1__;


/***/ }),

/***/ "./src/assets/img/Burgers.png":
/*!************************************!*\
  !*** ./src/assets/img/Burgers.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e813f7eb5fe8e17bfac2.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhidW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9HQUFvRyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLE9BQU8sVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBO0FBQ2tEO0FBQ2xEO0FBQ0EsbUJBQW1CLG9EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFtYnVyZ3Vlci8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9oYW1idXJndWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9oYW1idXJndWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaGFtYnVyZ3Vlci8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8zNTc5Iiwid2VicGFjazovL2hhbWJ1cmd1ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaGFtYnVyZ3Vlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaGFtYnVyZ3Vlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9oYW1idXJndWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hhbWJ1cmd1ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9oYW1idXJndWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaGFtYnVyZ3Vlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgYm9keSBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJCb3dsYnkgT25lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgYm9keSBoMSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuICBib2R5IC5tZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBib2R5IC5tZW51LWljb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGJvZHkgLm1lbnUtaWNvbiBzcGFuIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbiAgYm9keSBuYXYubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBib2R5IG5hdi5tZW51IGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuICBib2R5IGJ1dHRvbiB7XG4gICAgY29sb3I6ICMxZTFlMWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzYTBjZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJCb3dsYnkgT25lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSAubWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGJvZHkgbmF2Lm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICBib2R5IG5hdi5tZW51IGEsXG4gIGJvZHkgbmF2Lm1lbnUgYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBib2R5IC5tZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtaWNvbiArIG5hdi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGJvZHkgLm1lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1pY29uIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2EwY2Q7XG4gICAgd2lkdGg6IDM1cHg7XG4gIH1cbiAgYm9keSAubWVudS10b2dnbGU6Y2hlY2tlZCArIC5tZW51LWljb24gc3BhbjpudGgtY2hpbGQoMikge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgYm9keSAubWVudS10b2dnbGU6Y2hlY2tlZCArIC5tZW51LWljb24gc3BhbjpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDVweCwgLTVweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzYTBjZDtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgYm9keSAuc2VjdGlvbjEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIGJvZHkgLnNlY3Rpb24xIGgxIHtcbiAgICBjb2xvcjogI2U5ZTNkYztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJvd2xieSBPbmVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBib2R5IC5zZWN0aW9uMSAuSW1nQnVyZ2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBib2R5IC5zZWN0aW9uMiB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gIH1cbiAgYm9keSAuc2VjdGlvbjIgZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlZjUzO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBib2R5IC5zZWN0aW9uMiBkaXYgaDIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJvd2xieSBPbmVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBib2R5IC5zZWN0aW9uMiBkaXYgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGJvZHkgLnNlY3Rpb24yIGRpdiBkaXYgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllM2RjO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZTFlMWU7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggIzFlMWUxZTtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBmb250LWZhbWlseTogXCJCb3dsYnkgT25lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJCb3dsYnkgT25lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgYm9keSAubWVudS10b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYm9keSAubWVudS1pY29uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBib2R5IC5tZW51LWljb24gc3BhbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIGJvZHkgbmF2Lm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgYm9keSBuYXYubWVudSBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAxZW07XG4gIH1cbiAgYm9keSBidXR0b24ge1xuICAgIGNvbG9yOiAjMWUxZTFlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2EwY2Q7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiQm93bGJ5IE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSAubWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGJvZHkgbmF2Lm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICBib2R5IG5hdi5tZW51IGEsXG4gIGJvZHkgbmF2Lm1lbnUgYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBib2R5IC5tZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtaWNvbiArIG5hdi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGJvZHkgLm1lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1pY29uIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2EwY2Q7XG4gICAgd2lkdGg6IDM1cHg7XG4gIH1cbiAgYm9keSAubWVudS10b2dnbGU6Y2hlY2tlZCArIC5tZW51LWljb24gc3BhbjpudGgtY2hpbGQoMikge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgYm9keSAubWVudS10b2dnbGU6Y2hlY2tlZCArIC5tZW51LWljb24gc3BhbjpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDVweCwgLTVweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzYTBjZDtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBib2R5IC5zZWN0aW9uMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgYm9keSAuc2VjdGlvbjEgaDEge1xuICAgIGNvbG9yOiAjZTllM2RjO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiQm93bGJ5IE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIGJvZHkgLnNlY3Rpb24xIC5JbWdCdXJnZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGJvZHkgLnNlY3Rpb24yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgfVxuICBib2R5IC5zZWN0aW9uMiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVmNTM7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIGJvZHkgLnNlY3Rpb24yIGRpdiBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LWZhbWlseTogXCJCb3dsYnkgT25lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgYm9keSAuc2VjdGlvbjIgZGl2IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBib2R5IC5zZWN0aW9uMiBkaXYgZGl2IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTNkYztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWUxZTFlO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMHB4ICMxZTFlMWU7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQm93bGJ5IE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICBib2R5IGhlYWRlciB7XG4gICAgY29sb3I6ICNlOWUzZGM7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmc6IDAgM2VtIDAgM2VtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgYm9keSBoZWFkZXIgaDEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJCb3dsYnkgT25lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgYm9keSBoZWFkZXIgaW5wdXQsXG4gIGJvZHkgaGVhZGVyIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGJvZHkgaGVhZGVyIG5hdiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZm9udC1mYW1pbHk6IFwiQm93bGJ5IE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIGJvZHkgaGVhZGVyIG5hdiBhIHtcbiAgICBjb2xvcjogI2U5ZTNkYztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSBoZWFkZXIgbmF2IGJ1dHRvbiB7XG4gICAgY29sb3I6ICMxZTFlMWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzYTBjZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJvd2xieSBPbmVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBib2R5IC5zZWN0aW9uMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgYm9keSAuc2VjdGlvbjEgaDEge1xuICAgIGNvbG9yOiAjZTllM2RjO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJvd2xieSBPbmVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBib2R5IC5zZWN0aW9uMSAuSW1nQnVyZ2VyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIGJvZHkgLnNlY3Rpb24yIHtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgYm9keSAuc2VjdGlvbjIgZGl2IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWY1MztcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgYm9keSAuc2VjdGlvbjIgZGl2IGgyIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQm93bGJ5IE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIGJvZHkgLnNlY3Rpb24yIGRpdiBkaXYge1xuICAgIG1hcmdpbjogMCA1JSAwIDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTAlO1xuICB9XG4gIGJvZHkgLnNlY3Rpb24yIGRpdiBkaXYgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllM2RjO1xuICAgIHBhZGRpbmc6IDAuNWVtIDEuMmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZTFlMWU7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggIzFlMWUxZTtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQm93bGJ5IE9uZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EseUJBWlc7QUFNZjtBQU9JO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFFQSxZQUFBO0lBRUEscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBUFY7RUFTTTtJQUNJLGdCQUFBO0VBUFY7RUFTTTtJQUNJLGFBQUE7RUFQVjtFQVVNO0lBQ0kscUJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VBUlY7RUFXTTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUFUVjtFQVlNO0lBQ0ksYUFBQTtFQVZWO0VBYU07SUFDSSxZQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0VBWFY7RUFjTTtJQUNJLGNBM0RHO0lBNERILHlCQTFESTtJQTJESixZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBRUEscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBYlY7QUFDRjtBQWVRO0VBQ0k7SUFDSSxhQUFBO0VBYmQ7RUFnQlU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0VBZGQ7RUFnQlU7O0lBRUksYUFBQTtJQUNBLGtCQUFBO0VBZGQ7RUFpQlU7SUFDSSxhQUFBO0VBZmQ7RUFpQlU7SUFDSSw4Q0FBQTtJQUNBLHlCQTdGQTtJQThGQSxXQUFBO0VBZmQ7RUFrQlU7SUFDSSxVQUFBO0VBaEJkO0VBbUJVO0lBQ0ksOENBQUE7SUFDQSx5QkF2R0E7SUF3R0EsV0FBQTtFQWpCZDtBQUNGO0FBN0VJO0VBaUdJO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQWpCVjtFQWtCVTtJQUNJLGNBbkhDO0lBb0hELGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFFQSxxQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFqQmQ7RUFtQlU7SUFDSSxXQUFBO0VBakJkO0VBb0JNO0lBQ0ksaUJBQUE7RUFsQlY7RUFtQlU7SUFDSSx5QkFsSUU7SUFtSUYsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUFqQmQ7RUFrQmM7SUFDSSxjQUFBO0lBRUEscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBakJsQjtFQW1CYztJQUNJLGFBQUE7RUFqQmxCO0VBa0JrQjtJQUNJLHlCQXBKUDtJQXFKTyx5QkFBQTtJQUNBLCtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUVBLHFDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQWpCdEI7QUFDRjtBQXdCSTtFQUNJO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBRUEsWUFBQTtJQUVBLHFDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQXhCVjtFQTJCTTtJQUNJLGFBQUE7RUF6QlY7RUE0Qk07SUFDSSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUExQlY7RUE2Qk07SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VBM0JWO0VBOEJNO0lBQ0ksYUFBQTtFQTVCVjtFQStCTTtJQUNJLFlBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7RUE3QlY7RUFnQ007SUFDSSxjQWpORztJQWtOSCx5QkFoTkk7SUFpTkosWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUVBLHFDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQS9CVjtBQUNGO0FBaUNRO0VBQ0k7SUFDSSxhQUFBO0VBL0JkO0VBa0NVO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtFQWhDZDtFQWtDVTs7SUFFSSxhQUFBO0lBQ0Esa0JBQUE7RUFoQ2Q7RUFtQ1U7SUFDSSxhQUFBO0VBakNkO0VBbUNVO0lBQ0ksOENBQUE7SUFDQSx5QkFuUEE7SUFvUEEsV0FBQTtFQWpDZDtFQW9DVTtJQUNJLFVBQUE7RUFsQ2Q7RUFxQ1U7SUFDSSw4Q0FBQTtJQUNBLHlCQTdQQTtJQThQQSxXQUFBO0VBbkNkO0FBQ0Y7QUF6REk7RUErRkk7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VBbkNWO0VBb0NVO0lBQ0ksY0F6UUM7SUEwUUQsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBRUEscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBbkNkO0VBcUNVO0lBQ0ksV0FBQTtFQW5DZDtFQXNDTTtJQUNJLGlCQUFBO0VBcENWO0VBcUNVO0lBQ0kseUJBdlJFO0lBd1JGLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VBbkNkO0VBb0NjO0lBQ0ksZ0JBQUE7SUFFQSxxQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFuQ2xCO0VBcUNjO0lBQ0ksYUFBQTtFQW5DbEI7RUFvQ2tCO0lBQ0kseUJBelNQO0lBMFNPLHlCQUFBO0lBQ0EsK0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBRUEscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBbkN0QjtBQUNGO0FBeUNJO0VBRUk7SUFFSSxjQTVUSztJQTZUTCxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtFQXpDVjtFQTBDVTtJQUNJLGVBQUE7SUFFQSxxQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUF6Q2Q7RUEyQ1U7O0lBRUksYUFBQTtFQXpDZDtFQTJDVTtJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLDZCQUFBO0lBQ0EscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBekNkO0VBMENjO0lBQ0ksY0F2Vkg7SUF3VkcscUJBQUE7RUF4Q2xCO0VBMENjO0lBQ0ksY0E1Vkw7SUE2VksseUJBM1ZKO0lBNFZJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUVBLHFDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQXpDbEI7RUE4Q007SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VBNUNWO0VBNkNVO0lBQ0ksY0E5V0M7SUErV0QsY0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFFQSxxQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUE1Q2Q7RUE4Q1U7SUFDSSxVQUFBO0VBNUNkO0VBK0NNO0lBQ0ksZUFBQTtFQTdDVjtFQThDVTtJQUNJLGNBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkEvWEU7SUFnWUYsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQTVDZDtFQTZDYztJQUNJLGVBQUE7SUFDQSxjQUFBO0lBRUEscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBNUNsQjtFQThDYztJQUNJLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUE1Q2xCO0VBNkNrQjtJQUNJLHlCQXZaUDtJQXdaTyxvQkFBQTtJQUNBLHlCQUFBO0lBQ0EsK0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFHQSxxQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUE3Q3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhY2tncm91bmQtY29sb3Itc21hbGw6IHJlZDtcXG4kYmFja2dyb3VuZC1jb2xvci1tZWRpdW06IHJnYigxODcsIDI1NSwgMCk7XFxuJGJhY2tncm91bmQtY29sb3ItbGFyZ2U6IHJnYigwLCA0NywgMjU1KTtcXG4kY29yLXByaW1hcmlhOiAjMWUxZTFlO1xcbiRjb3Itc2VjdW5kYXJpYTogI2U5ZTNkYztcXG4kY29yLXRlcmNpYXJpYTogI2IzYTBjZDtcXG4kY29yLXF1YXRlcm5hcmlhOiAjZDFlZjUzO1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvci1wcmltYXJpYTtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvci1wcmltYXJpYTtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgLy8gZm9udCB0aXRsZVxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQm93bGJ5IE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICB9XFxuICAgICAgICBoMSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5tZW51LXRvZ2dsZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vIExpbmhhcyBkbyBIYW1idXJndWVyXFxuICAgICAgICAubWVudS1pY29uIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZW51LWljb24gc3BhbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgbWFyZ2luOiA0cHggMDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgbmF2Lm1lbnUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBuYXYubWVudSBhIHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIG1hcmdpbjogMCAxZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGNvbG9yOiAkY29yLXByaW1hcmlhO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3ItdGVyY2lhcmlhO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIC8vIGZvbnRcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgfVxcbiAgICAgICAgLy8gY2FpeGFcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgICAgIC5tZW51LWljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAvLyBpdGVtIGRlbnRybyBkYSBDQUlYQVxcbiAgICAgICAgICAgIG5hdi5tZW51IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiA2MHB4O1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBuYXYubWVudSBhLFxcbiAgICAgICAgICAgIG5hdi5tZW51IGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLm1lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1pY29uICsgbmF2Lm1lbnUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAubWVudS10b2dnbGU6Y2hlY2tlZCArIC5tZW51LWljb24gc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29yLXRlcmNpYXJpYTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5tZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtaWNvbiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5tZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtaWNvbiBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDVweCwgLTVweCk7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3ItdGVyY2lhcmlhO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAvLyBDb3Jwb1xcbiAgICAgICAgLnNlY3Rpb24xIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBoMSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29yLXNlY3VuZGFyaWE7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIC8vIGZvbnRcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJCb3dsYnkgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuSW1nQnVyZ2VyIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLnNlY3Rpb24yIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gICAgICAgICAgICBkaXYge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29yLXF1YXRlcm5hcmlhO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBoMiB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnRcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQm93bGJ5IE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29yLXNlY3VuZGFyaWE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvci1wcmltYXJpYTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAkY29yLXByaW1hcmlhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLy8gRmltIGRvIGNvcnBvXFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgaGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29yLXByaW1hcmlhO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAvLyBmb250IHRpdGxlXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJCb3dsYnkgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZW51LXRvZ2dsZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vIExpbmhhcyBkbyBIYW1idXJndWVyXFxuICAgICAgICAubWVudS1pY29uIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZW51LWljb24gc3BhbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgbWFyZ2luOiA0cHggMDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgbmF2Lm1lbnUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBuYXYubWVudSBhIHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIG1hcmdpbjogMCAxZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGNvbG9yOiAkY29yLXByaW1hcmlhO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3ItdGVyY2lhcmlhO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIC8vIGZvbnRcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgfVxcbiAgICAgICAgLy8gY2FpeGEgc3R5bGVcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgICAgIC5tZW51LWljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAvLyBpdGVtIGRlbnRybyBkYSBDQUlYQVxcbiAgICAgICAgICAgIG5hdi5tZW51IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJkMmQ7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiA2MHB4O1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBuYXYubWVudSBhLFxcbiAgICAgICAgICAgIG5hdi5tZW51IGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLm1lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1pY29uICsgbmF2Lm1lbnUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAubWVudS10b2dnbGU6Y2hlY2tlZCArIC5tZW51LWljb24gc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29yLXRlcmNpYXJpYTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5tZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtaWNvbiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5tZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtaWNvbiBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDVweCwgLTVweCk7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3ItdGVyY2lhcmlhO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAvLyBDb3Jwb1xcbiAgICAgICAgLnNlY3Rpb24xIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBoMSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29yLXNlY3VuZGFyaWE7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgLy8gZm9udFxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5JbWdCdXJnZXIge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuc2VjdGlvbjIge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3ItcXVhdGVybmFyaWE7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGgyIHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgICAgICAgICAgICAvLyBmb250XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvci1zZWN1bmRhcmlhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb3ItcHJpbWFyaWE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggJGNvci1wcmltYXJpYTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJCb3dsYnkgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC8vIEZpbSBkbyBjb3Jwb1xcbiAgICB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1sYXJnZTtcXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvci1wcmltYXJpYTtcXG4gICAgICAgICAgICBjb2xvcjogJGNvci1zZWN1bmRhcmlhO1xcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDNlbSAwIDNlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAvLyBmb250XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQm93bGJ5IE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaW5wdXQsXFxuICAgICAgICAgICAgbGFiZWwge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBuYXYge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQm93bGJ5IE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvci1zZWN1bmRhcmlhO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvci1wcmltYXJpYTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3ItdGVyY2lhcmlhO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAvLyBmb250XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC8vIENvcnBvXFxuICAgICAgICAuc2VjdGlvbjEge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb3Itc2VjdW5kYXJpYTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgLy8gZm9udFxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5JbWdCdXJnZXIge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5zZWN0aW9uMiB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29yLXF1YXRlcm5hcmlhO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBoMiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnRcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQm93bGJ5IE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNSUgMCAwO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCU7XFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3Itc2VjdW5kYXJpYTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxLjJlbTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29yLXByaW1hcmlhO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMHB4ICRjb3ItcHJpbWFyaWE7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkJvd2xieSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLy8gRmltIGRvIGNvcnBvXFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzc1wiO1xuLy8gbWVudSBNb2JpbGVcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10b2dnbGVcIik7XG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdi5tZW51IGEsIG5hdi5tZW51IGJ1dHRvblwiKTtcblxuICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbWVudVRvZ2dsZS5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIEVuZCBtZW51IE1vYmlsZVxuXG4vLyBJbXBvcnQgaW1nXG5pbXBvcnQgSW1nQnVyZ3VlciBmcm9tIFwiLi9hc3NldHMvaW1nL0J1cmdlcnMucG5nXCI7XG5jb25zdCBEb21JbWdCdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkltZ0J1cmdlclwiKTtcbkRvbUltZ0J1cmdlci5zcmMgPSBJbWdCdXJndWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9