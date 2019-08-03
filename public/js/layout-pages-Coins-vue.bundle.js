(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-pages-Coins-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Coins.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Toggle.vue */ "./resources/js/components/Toggle.vue");
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
  data: function data() {
    return {
      console: true,
      year: false,
      currency: true,
      sum: 0
    };
  },
  methods: {
    checkConsole: function checkConsole(event) {
      console.log(event);
      this.console = event;
    },
    checkYear: function checkYear(event) {
      console.log(event);
      this.year = event;
    },
    checkCurrency: function checkCurrency(event) {
      console.log(event);
      this.currency = event;
    },
    increase: function increase() {
      if (this.sum < 10000000) {
        this.sum += 50000;
      }
    },
    decrease: function decrease() {
      if (this.sum >= 50000) {
        this.sum -= 50000;
      }
    }
  },
  components: {
    Toggle: _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\nbutton[data-v-779e1b49]:focus,\ntextarea[data-v-779e1b49]:focus,\nselect[data-v-779e1b49]:focus,\ninput[data-v-779e1b49]:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close[data-v-779e1b49] {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close[data-v-779e1b49]:hover {\n  opacity: 1;\n}\n.close[data-v-779e1b49]:before, .close[data-v-779e1b49]:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close[data-v-779e1b49]:before {\n  transform: rotate(45deg);\n}\n.close[data-v-779e1b49]:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop[data-v-779e1b49] {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop[data-v-779e1b49]:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area[data-v-779e1b49] {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge[data-v-779e1b49] {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification[data-v-779e1b49] {\n  padding: 20px;\n  margin: 0 5px 5px;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn[data-v-779e1b49] {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error[data-v-779e1b49] {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success[data-v-779e1b49] {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay[data-v-779e1b49] {\n  background: rgba(0, 0, 0, 0.97);\n}\n.v--modal-overlay .v--modal[data-v-779e1b49] {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay.scrollable[data-v-779e1b49] {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x[data-v-779e1b49]:hover,\n.ps .ps__rail-y[data-v-779e1b49]:hover,\n.ps .ps__rail-x[data-v-779e1b49]:focus,\n.ps .ps__rail-y[data-v-779e1b49]:focus,\n.ps .ps__rail-x.ps--clicking[data-v-779e1b49],\n.ps .ps__rail-y.ps--clicking[data-v-779e1b49] {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y[data-v-779e1b49],\n.ps__rail-y:focus > .ps__thumb-y[data-v-779e1b49],\n.ps__rail-y.ps--clicking .ps__thumb-y[data-v-779e1b49] {\n  background-color: yellow;\n  width: 7px;\n}\ninput[data-v-779e1b49]:focus {\n  outline: none;\n}\nbutton[data-v-779e1b49] {\n  border: none;\n}\nbutton[data-v-779e1b49]:focus {\n  outline: none;\n}\n.coins-section[data-v-779e1b49] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 500px;\n  padding: 0px 0px 100px 0px;\n}\n.coins-section h1[data-v-779e1b49] {\n  font-size: 24px;\n  color: white;\n  font-weight: 100;\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}\n@media (max-width: 500px) {\n.coins-section[data-v-779e1b49] {\n    width: 100%;\n}\n}\n.switchers[data-v-779e1b49] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px;\n}\nh2[data-v-779e1b49] {\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n  font-size: 14px;\n  width: 100%;\n  margin-bottom: 17px;\n}\n.calc[data-v-779e1b49] {\n  background: white;\n  padding: 28px 24px 28px 24px;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 2px 0px black;\n  width: 100%;\n  height: 140px;\n  border-radius: 5px;\n}\n.calc .row[data-v-779e1b49] {\n  display: flex;\n  justify-content: space-between;\n}\n.calc .row input[data-v-779e1b49] {\n  color: #2c3e50;\n  border: 1px solid #dcdcdc;\n  border-radius: 5px;\n  width: 300px;\n  height: 40px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 16px;\n}\n@media (max-width: 500px) {\n.calc .row input[data-v-779e1b49] {\n    width: 250px;\n}\n}\n.calc .row:nth-child(1) button[data-v-779e1b49] {\n  width: 40px;\n  height: 40px;\n  background: #2c3e50;\n  color: white;\n  border-radius: 5px;\n  font-weight: bold;\n  font-size: 30px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n.calc .row[data-v-779e1b49]:nth-child(2) {\n  padding: 0px;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 500px) {\n.calc .row[data-v-779e1b49]:nth-child(2) {\n    padding: 0;\n}\n}\n.calc .row:nth-child(2) button[data-v-779e1b49] {\n  color: #2c3e50;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  width: 45px;\n  height: 40px;\n  font-weight: bold;\n  font-size: 12px;\n  cursor: pointer;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.price[data-v-779e1b49] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  padding-left: 210px;\n  width: 100%;\n  border-bottom: 1px solid white;\n  padding-bottom: 15px;\n}\n@media (max-width: 500px) {\n.price[data-v-779e1b49] {\n    padding-left: 0;\n}\n}\n.price .main-price[data-v-779e1b49] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.price .main-price .price-text[data-v-779e1b49] {\n  text-transform: uppercase;\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n  margin-right: 10px;\n}\n.price .main-price .price-amount div[data-v-779e1b49] {\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n}\n.price .main-price .price-amount div span[data-v-779e1b49] {\n  color: red;\n}\n.price .link-yellow[data-v-779e1b49] {\n  font-weight: bold;\n  color: yellow;\n  border-bottom: 1px dashed yellow;\n  align-self: flex-start;\n  text-decoration: none;\n}\n.player[data-v-779e1b49] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin-top: 25px;\n}\n.player input[data-v-779e1b49] {\n  border: 2px solid yellow;\n  background: #2c3e50;\n  color: white;\n  width: 100%;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 7px;\n  box-sizing: border-box;\n}\n.player .buy-row[data-v-779e1b49] {\n  width: 100%;\n  margin-top: 13px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.player .buy-row .link-light[data-v-779e1b49] {\n  color: white;\n  border-bottom: 1px dashed white;\n  margin-left: 10px;\n  text-decoration: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=template&id=779e1b49&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Coins.vue?vue&type=template&id=779e1b49&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "coins-section" }, [
    _c("h1", [_vm._v("ПОКУПА \\ ПРОДАЖА МОНЕТ")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "switchers" },
      [
        _c("toggle", {
          attrs: {
            check: _vm.console,
            id: "sw-console",
            labelon: "XBOX",
            labeloff: "PS4",
            width: 148
          },
          on: {
            check: function($event) {
              return _vm.checkConsole($event)
            }
          }
        }),
        _vm._v(" "),
        _c("toggle", {
          attrs: {
            check: _vm.year,
            id: "sw-year",
            labelon: "2020",
            labeloff: "2021",
            width: 140
          },
          on: {
            check: function($event) {
              return _vm.checkYear($event)
            }
          }
        }),
        _vm._v(" "),
        _c("toggle", {
          attrs: {
            check: _vm.currency,
            id: "sw-currency",
            labelon: "PUCKS",
            labeloff: _vm.$lang.messages.rub,
            width: 160
          },
          on: {
            check: function($event) {
              return _vm.checkCurrency($event)
            }
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("h2", [_vm._v(_vm._s(_vm.$lang.messages.coins_h2))]),
    _vm._v(" "),
    _c("div", { staticClass: "calc" }, [
      _c("div", { staticClass: "row" }, [
        _c("button", { on: { click: _vm.decrease } }, [_vm._v("-")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.number",
              value: _vm.sum,
              expression: "sum",
              modifiers: { number: true }
            }
          ],
          attrs: { type: "text" },
          domProps: { value: _vm.sum },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.sum = _vm._n($event.target.value)
            },
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        }),
        _vm._v(" "),
        _c("button", { on: { click: _vm.increase } }, [_vm._v("+")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.sum = 50000
              }
            }
          },
          [_vm._v("50k")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.sum = 100000
              }
            }
          },
          [_vm._v("100k")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.sum = 250000
              }
            }
          },
          [_vm._v("250k")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.sum = 500000
              }
            }
          },
          [_vm._v("500k")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.sum = 1000000
              }
            }
          },
          [_vm._v("1M")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "price" }, [
      _c("div", { staticClass: "main-price" }, [
        _c("div", { staticClass: "price-text" }, [
          _vm._v(_vm._s(_vm.$lang.messages.price) + ":")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-amount" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", [
            _c("span", [_vm._v("400.00")]),
            _vm._v(" " + _vm._s(_vm.$lang.messages.rubles))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "link-yellow", attrs: { href: "#" } }, [
        _vm._v(_vm._s(_vm.$lang.messages.how_to_buy))
      ])
    ]),
    _vm._v(" "),
    _c("form", { staticClass: "player" }, [
      _c("input", {
        attrs: { placeholder: _vm.$lang.messages.player, type: "text" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { placeholder: _vm.$lang.messages.team, type: "text" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { placeholder: _vm.$lang.messages.rating, type: "text" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { placeholder: _vm.$lang.messages.initial_price, type: "text" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { placeholder: _vm.$lang.messages.buyout_price, type: "text" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { placeholder: _vm.$lang.messages.team_hut, type: "text" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "buy-row" }, [
        _c(
          "button",
          { staticClass: "btn btn-yellow", attrs: { type: "submit" } },
          [_vm._v(_vm._s(_vm.$lang.messages.buy))]
        ),
        _vm._v(" "),
        _c("a", { staticClass: "link-light", attrs: { href: "#" } }, [
          _vm._v(_vm._s(_vm.$lang.messages.sell_to_us))
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("span", [_vm._v("400.00")]), _vm._v(" Pucks")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Coins.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Coins.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Coins_vue_vue_type_template_id_779e1b49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coins.vue?vue&type=template&id=779e1b49&scoped=true& */ "./resources/js/pages/Coins.vue?vue&type=template&id=779e1b49&scoped=true&");
/* harmony import */ var _Coins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coins.vue?vue&type=script&lang=js& */ "./resources/js/pages/Coins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Coins_vue_vue_type_style_index_0_id_779e1b49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true& */ "./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Coins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Coins_vue_vue_type_template_id_779e1b49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Coins_vue_vue_type_template_id_779e1b49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "779e1b49",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Coins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Coins.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Coins.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Coins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_style_index_0_id_779e1b49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=style&index=0&id=779e1b49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_style_index_0_id_779e1b49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_style_index_0_id_779e1b49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_style_index_0_id_779e1b49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_style_index_0_id_779e1b49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_style_index_0_id_779e1b49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Coins.vue?vue&type=template&id=779e1b49&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Coins.vue?vue&type=template&id=779e1b49&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_template_id_779e1b49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Coins.vue?vue&type=template&id=779e1b49&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Coins.vue?vue&type=template&id=779e1b49&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_template_id_779e1b49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coins_vue_vue_type_template_id_779e1b49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);