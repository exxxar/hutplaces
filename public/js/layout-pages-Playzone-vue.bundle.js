(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-pages-Playzone-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Playzone.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    showError: function showError(message) {
      this.$notify({
        group: 'main',
        type: 'warn',
        title: 'Important message',
        text: message
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\nbutton[data-v-bdf8e12e]:focus,\ntextarea[data-v-bdf8e12e]:focus,\nselect[data-v-bdf8e12e]:focus,\ninput[data-v-bdf8e12e]:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close[data-v-bdf8e12e] {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close[data-v-bdf8e12e]:hover {\n  opacity: 1;\n}\n.close[data-v-bdf8e12e]:before, .close[data-v-bdf8e12e]:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close[data-v-bdf8e12e]:before {\n  transform: rotate(45deg);\n}\n.close[data-v-bdf8e12e]:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop[data-v-bdf8e12e] {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop[data-v-bdf8e12e]:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area[data-v-bdf8e12e] {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge[data-v-bdf8e12e] {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification[data-v-bdf8e12e] {\n  padding: 20px;\n  margin: 0 5px 5px;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn[data-v-bdf8e12e] {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error[data-v-bdf8e12e] {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success[data-v-bdf8e12e] {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay[data-v-bdf8e12e] {\n  background: rgba(0, 0, 0, 0.97);\n}\n.v--modal-overlay .v--modal[data-v-bdf8e12e] {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay.scrollable[data-v-bdf8e12e] {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x[data-v-bdf8e12e]:hover,\n.ps .ps__rail-y[data-v-bdf8e12e]:hover,\n.ps .ps__rail-x[data-v-bdf8e12e]:focus,\n.ps .ps__rail-y[data-v-bdf8e12e]:focus,\n.ps .ps__rail-x.ps--clicking[data-v-bdf8e12e],\n.ps .ps__rail-y.ps--clicking[data-v-bdf8e12e] {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y[data-v-bdf8e12e],\n.ps__rail-y:focus > .ps__thumb-y[data-v-bdf8e12e],\n.ps__rail-y.ps--clicking .ps__thumb-y[data-v-bdf8e12e] {\n  background-color: yellow;\n  width: 7px;\n}\nul[data-v-bdf8e12e] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 10px 10px 100px 10px;\n  width: 1000px;\n}\n@media (max-width: 1000px) {\nul[data-v-bdf8e12e] {\n    width: 100%;\n}\n}\nul li[data-v-bdf8e12e] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  position: relative;\n  background-position: center center;\n  background-size: auto;\n  background-repeat: no-repeat;\n  height: 370px;\n  width: 270px;\n  text-transform: uppercase;\n  box-shadow: 2px 2px 2px 0px black;\n  cursor: pointer;\n  background-color: yellow;\n  box-sizing: border-box;\n  padding: 30px;\n  font-size: 32px;\n  text-align: center;\n  font-weight: 400;\n  color: #2c3e50;\n  transition: 0.5s;\n  text-shadow: 2px 2px 2px black;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n@media (max-height: 850px) {\nul li[data-v-bdf8e12e] {\n    height: 350px;\n    width: 250px;\n}\n}\n@media (max-height: 670px) {\nul li[data-v-bdf8e12e] {\n    height: 300px;\n    width: 200px;\n}\n}\nul li span[data-v-bdf8e12e] {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  bottom: 15px;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\nul li.closed[data-v-bdf8e12e] {\n  color: gray;\n  box-shadow: 0px 0px 2px 0px black;\n}\nul li.closed[data-v-bdf8e12e]:hover {\n  transition: 0.5s;\n  color: darkred;\n}\nul li.closed:hover span[data-v-bdf8e12e] {\n  -webkit-animation: 1.2s ease-in-out 0s normal none infinite running lockAnim-data-v-bdf8e12e;\n          animation: 1.2s ease-in-out 0s normal none infinite running lockAnim-data-v-bdf8e12e;\n}\nul li.closed span[data-v-bdf8e12e] {\n  background-image: url(\"/img/lock-close.png\");\n  transform-origin: center center;\n}\nul li.opened[data-v-bdf8e12e] {\n  box-shadow: 0px 0px 2px 0px black;\n}\nul li.opened[data-v-bdf8e12e]:hover {\n  transition: 0.5s;\n  box-shadow: 0px 0px 2px 0px black, 0px 0px 14px 5px #2c3e50 inset;\n}\nul li.opened span[data-v-bdf8e12e] {\n  background-image: url(\"/img/lock-open.png\");\n}\nul li.auction[data-v-bdf8e12e] {\n  background-image: url(\"/img/auction-bg.png\");\n}\nul li.coins[data-v-bdf8e12e] {\n  background-image: url(\"/img/coins-bg.png\");\n}\nul li.packs[data-v-bdf8e12e] {\n  background-image: url(\"/img/packs-bg.png\");\n}\nul li.randoms[data-v-bdf8e12e] {\n  background-image: url(\"/img/lottery-bg.png\");\n}\nul li.fortune[data-v-bdf8e12e] {\n  background-image: url(\"/img/wheel-of-fortune-bg.png\");\n}\nul li.wager[data-v-bdf8e12e] {\n  background-image: url(\"/img/wager-bg.png\");\n}\n@-webkit-keyframes lockAnim-data-v-bdf8e12e {\n0%, 50%, 100% {\n    transform: rotate(0deg);\n}\n10%, 30% {\n    transform: rotate(-10deg);\n}\n20%, 40% {\n    transform: rotate(10deg);\n}\n}\n@keyframes lockAnim-data-v-bdf8e12e {\n0%, 50%, 100% {\n    transform: rotate(0deg);\n}\n10%, 30% {\n    transform: rotate(-10deg);\n}\n20%, 40% {\n    transform: rotate(10deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      [
        _c(
          "router-link",
          {
            staticClass: "btn randoms opened",
            attrs: { tag: "li", to: "/randoms" }
          },
          [_vm._v("\n      " + _vm._s(_vm.$lang.messages.randoms) + "\n    ")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "btn fortune closed",
            on: {
              click: function($event) {
                return _vm.showError("Раздел Колесо фортуны не доступен")
              }
            }
          },
          [
            _vm._v(
              "\n      " +
                _vm._s(_vm.$lang.messages.wheel_of_fortune) +
                "\n      "
            ),
            _c("span")
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "btn wager closed",
            on: {
              click: function($event) {
                return _vm.showError("Раздел Вагер-матчей не доступен")
              }
            }
          },
          [
            _vm._v(
              "\n      " + _vm._s(_vm.$lang.messages.wager_matches) + "\n      "
            ),
            _c("span")
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Playzone.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Playzone.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playzone_vue_vue_type_template_id_bdf8e12e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true& */ "./resources/js/pages/Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true&");
/* harmony import */ var _Playzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playzone.vue?vue&type=script&lang=js& */ "./resources/js/pages/Playzone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Playzone_vue_vue_type_style_index_0_id_bdf8e12e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss& */ "./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Playzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Playzone_vue_vue_type_template_id_bdf8e12e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Playzone_vue_vue_type_template_id_bdf8e12e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bdf8e12e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Playzone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Playzone.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Playzone.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playzone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_style_index_0_id_bdf8e12e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=style&index=0&id=bdf8e12e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_style_index_0_id_bdf8e12e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_style_index_0_id_bdf8e12e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_style_index_0_id_bdf8e12e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_style_index_0_id_bdf8e12e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_style_index_0_id_bdf8e12e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_template_id_bdf8e12e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Playzone.vue?vue&type=template&id=bdf8e12e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_template_id_bdf8e12e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playzone_vue_vue_type_template_id_bdf8e12e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);