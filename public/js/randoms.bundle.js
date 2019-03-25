(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["randoms"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/pages/Randoms.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chenfengyuan/vue-carousel */ "./node_modules/@chenfengyuan/vue-carousel/dist/vue-carousel.js");
/* harmony import */ var _chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    scrollZone: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    carousel: _chenfengyuan_vue_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      games: [{
        route: 'nhl',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/EA_Sports.svg/220px-EA_Sports.svg.png',
        url: 'http://www.easports.com/nhl',
        banner: '/img/nhl-banner.jpg',
        title: 'NHL 19',
        platforms: [{
          platform_id: 1,
          title: 'xbox one'
        }, {
          platform_id: 2,
          title: 'play station 4'
        }],
        lottery_count: 78,
        slides: ['<div class="example-slide"><img src="/img/nhl-banner.jpg" alt=""></div>', '<div class="example-slide"><img src="/img/nhl-banner.jpg" alt=""></div>', '<div class="example-slide"><img src="/img/nhl-banner.jpg" alt=""></div>']
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-slide {\n  align-items: center;\n  background-color: #666;\n  color: #999;\n  display: flex;\n  font-size: 1.5rem;\n  justify-content: center;\n  min-height: 10rem;\n}\nh1 {\n  color: #ff0;\n  font-weight: 600;\n  text-align: center;\n  font-size: 30px;\n}\nh1 strong {\n  font-size: 36px;\n  color: white;\n}\nh1 strong i {\n  color: #ff0;\n  font-style: italic;\n}\n.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y {\n  background-color: #ff0 !important;\n}\n.games-list {\n  display: grid;\n  width: 100%;\n  border-top: 2px #a7a5a5 solid;\n  box-sizing: border-box;\n  padding: 10px 10px;\n  justify-items: center;\n}\n.games-list .game {\n  display: grid;\n  height: 550px;\n  width: 1000px;\n  align-items: center;\n  justify-items: center;\n  box-sizing: border-box;\n  padding: 10px 0px 10px 0px;\n}\n.games-list .game a[target=_blank] {\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 800;\n  color: gray;\n  line-height: 35px;\n  -webkit-text-decoration-style: dashed;\n          text-decoration-style: dashed;\n}\n.games-list .game a[target=_blank]:after {\n  content: \"\";\n  width: 23px;\n  height: 15px;\n  background: url(\"/img/link-arrow.png\");\n  top: 0;\n  left: 0;\n  display: block;\n  margin: 10px auto;\n}\n.games-list .game .game-logo {\n  width: 50px;\n  height: 50px;\n}\n.games-list .game .large-promo {\n  height: 350px;\n  box-sizing: border-box;\n  border: 2px #a7a5a5 solid;\n  padding: 10px;\n  width: 100%;\n}\n.games-list .game .control {\n  margin-top: 10px;\n  height: 50px;\n  width: 100%;\n  background-color: #393939;\n  box-shadow: 2px 2px 11px 0px black;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  position: relative;\n}\n.games-list .game .control p {\n  margin: 0;\n}\n.games-list .game .control p.label {\n  font-size: 16px;\n  font-weight: 900;\n  margin-left: 20px;\n  color: #989898;\n}\n.games-list .game .control .platforms {\n  display: flex;\n}\n.games-list .game .control .platforms li {\n  list-style: none;\n}\n.games-list .game .control .platforms li a {\n  color: white;\n  padding-left: 5px;\n  padding-right: 5px;\n  -webkit-text-decoration-style: dashed;\n          text-decoration-style: dashed;\n}\n.games-list .game .control p.counter {\n  width: 145px;\n  color: #989898;\n  font-weight: 900;\n}\n.games-list .game .control p.counter span {\n  width: 70px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: yellow;\n  color: #000000;\n  font-size: 16px;\n  font-weight: 900;\n  position: absolute;\n  right: 0;\n  top: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Randoms.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=template&id=4b6b1a4d&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/pages/Randoms.vue?vue&type=template&id=4b6b1a4d& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._m(0), _vm._v(" - " + _vm._s(_vm.$lang.messages.games_h1))]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "games-list" },
      _vm._l(_vm.games, function(game) {
        return _c(
          "li",
          { staticClass: "game" },
          [
            _c("img", {
              staticClass: "game-logo",
              attrs: { src: game.logo, alt: "" }
            }),
            _vm._v(" "),
            _c("a", { attrs: { href: game.url, target: "_blank" } }, [
              _vm._v(_vm._s(game.url))
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "large-promo",
                attrs: { to: { path: "/games/" + game.route }, append: "" }
              },
              [
                _c("carousel", {
                  attrs: { autoplay: true, controls: false, data: game.slides }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "control" }, [
              _c("p", { staticClass: "label" }, [_vm._v(_vm._s(game.title))]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "platforms" },
                _vm._l(game.platforms, function(platform) {
                  return _c("li", [
                    _c("a", { attrs: { href: "" } }, [
                      _vm._v(_vm._s(platform.title))
                    ])
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("p", { staticClass: "counter" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$lang.messages.lottery) +
                    "\n                    "
                ),
                _c("span", [_vm._v(_vm._s(game.lottery_count))])
              ])
            ])
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [_vm._v(" HUT"), _c("i", [_vm._v("Place")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/main/pages/Randoms.vue":
/*!*********************************************!*\
  !*** ./resources/js/main/pages/Randoms.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Randoms_vue_vue_type_template_id_4b6b1a4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Randoms.vue?vue&type=template&id=4b6b1a4d& */ "./resources/js/main/pages/Randoms.vue?vue&type=template&id=4b6b1a4d&");
/* harmony import */ var _Randoms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Randoms.vue?vue&type=script&lang=js& */ "./resources/js/main/pages/Randoms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Randoms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Randoms.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Randoms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Randoms_vue_vue_type_template_id_4b6b1a4d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Randoms_vue_vue_type_template_id_4b6b1a4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/pages/Randoms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/pages/Randoms.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/main/pages/Randoms.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Randoms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Randoms.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/main/pages/Randoms.vue?vue&type=template&id=4b6b1a4d&":
/*!****************************************************************************!*\
  !*** ./resources/js/main/pages/Randoms.vue?vue&type=template&id=4b6b1a4d& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_template_id_4b6b1a4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Randoms.vue?vue&type=template&id=4b6b1a4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/pages/Randoms.vue?vue&type=template&id=4b6b1a4d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_template_id_4b6b1a4d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Randoms_vue_vue_type_template_id_4b6b1a4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);