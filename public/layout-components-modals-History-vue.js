(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-modals-History-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/History.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'faq',
  data: function data() {
    return {
      historyList: null
    };
  },
  mounted: function mounted() {
    this.loadHistory();
  },
  methods: {
    message: function message(title, _message, type) {
      this.$notify({
        group: 'main',
        type: type,
        title: title,
        text: _message
      });
    },
    selfHide: function selfHide() {
      this.$emit("self-hide");
    },
    loadHistory: function loadHistory() {
      var _this = this;

      this.$loading(true);
      axios.get('/lottery/history').then(function (response) {
        _this.historyList = response.data.history;
      })["catch"](function (reason) {
        _this.message("Авторизация", "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B!", 'warn');
      });
      this.$loading(false);
    },
    getPlatform: function getPlatform(id) {
      switch (id) {
        default:
        case 1:
          return "/img/xbox-icon.png";

        case 2:
          return "/img/ps4-icon.png";

        case 3:
          return "/img/pc-icon.png";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "modal-body history-modal" },
    [
      _c("h1", [_vm._v("История игр пользователей")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.historyList, function(item, index) {
        return _vm.historyList != null && _vm.historyList.length > 0
          ? _c(
              "ul",
              {
                staticClass: "body",
                on: {
                  click: function($event) {
                    return _vm.selfHide()
                  }
                }
              },
              [
                _c("li", [_vm._v(_vm._s(++index))]),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          tag: "a",
                          to: {
                            name: "Lottery",
                            params: { gameId: item.lottery_id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.lottery_title) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: _vm.getPlatform(item.console_type),
                        expression: "getPlatform(item.console_type)"
                      }
                    ],
                    attrs: { alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          tag: "a",
                          to: {
                            name: "PlayerInfo",
                            params: { userId: item.user_id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.user_name) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(item.end))])
              ]
            )
          : _c("h3", [_vm._v("Не найдено ни одного победителя")])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "head" }, [
      _c("li", [_vm._v("#")]),
      _vm._v(" "),
      _c("li", [_vm._v("Игра")]),
      _vm._v(" "),
      _c("li", [_vm._v("Платформа")]),
      _vm._v(" "),
      _c("li", [_vm._v("Победитель")]),
      _vm._v(" "),
      _c("li", [_vm._v("Дата заверщения")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/modals/History.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/modals/History.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=43a2bf54& */ "./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&");
/* harmony import */ var _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/History.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/History.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/modals/History.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=template&id=43a2bf54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);