(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-modals-CardInfo-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CardInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/CardInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_admin_Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/admin/Card.vue */ "./resources/js/components/admin/Card.vue");
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
  props: ['game'],
  methods: {
    getPlacePrice: function getPlacePrice() {
      return Math.ceil(this.game.base_price / this.game.places);
    }
  },
  components: {
    Card: _components_admin_Card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CardInfo.vue?vue&type=template&id=f50e5ce8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/CardInfo.vue?vue&type=template&id=f50e5ce8& ***!
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
  return _vm.game
    ? _c(
        "div",
        { staticClass: "modal-body card-info-modal" },
        [
          _c("h1", {
            domProps: { innerHTML: _vm._s(_vm.$lang.modals.card_info.title) }
          }),
          _vm._v(" "),
          _c("p", [
            _vm.game.console_type == 1
              ? _c("i", { staticClass: "fab fa-playstation" })
              : _vm._e(),
            _vm._v(" "),
            _vm.game.console_type == 0
              ? _c("i", { staticClass: "fab fa-xbox" })
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.game.lot_type == "2"
            ? _c(
                "div",
                { staticClass: "card" },
                [_c("card", { attrs: { card: _vm.game.lot.card } })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("p", [
            _vm._v(_vm._s(_vm.$lang.modals.card_info.base_price) + " "),
            _c("strong", [_vm._v(_vm._s(_vm.game.base_price))]),
            _vm._v(" " + _vm._s(_vm.$lang.modals.card_info.money) + "\n    ")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(_vm._s(_vm.$lang.modals.card_info.place_price) + " "),
            _c("strong", [_vm._v(_vm._s(_vm.getPlacePrice()))]),
            _vm._v(" " + _vm._s(_vm.$lang.modals.card_info.money) + "\n    ")
          ]),
          _vm._v(" "),
          _vm._l(_vm.game.place_list, function(place) {
            return _c("div", { staticClass: "history-item" }, [
              _c("p", [
                _vm._v(
                  _vm._s(place.user.name) +
                    " " +
                    _vm._s(_vm.$lang.modals.card_info.pick_place) +
                    " "
                ),
                _c("strong", [_vm._v(_vm._s(place.place_number + 1))]),
                _vm._v(
                  "\n            [ " + _vm._s(place.created_at) + " ]\n        "
                )
              ])
            ])
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/modals/CardInfo.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/modals/CardInfo.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardInfo_vue_vue_type_template_id_f50e5ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardInfo.vue?vue&type=template&id=f50e5ce8& */ "./resources/js/components/modals/CardInfo.vue?vue&type=template&id=f50e5ce8&");
/* harmony import */ var _CardInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/CardInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardInfo_vue_vue_type_template_id_f50e5ce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardInfo_vue_vue_type_template_id_f50e5ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/CardInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/CardInfo.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/modals/CardInfo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CardInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/CardInfo.vue?vue&type=template&id=f50e5ce8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/modals/CardInfo.vue?vue&type=template&id=f50e5ce8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInfo_vue_vue_type_template_id_f50e5ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardInfo.vue?vue&type=template&id=f50e5ce8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/CardInfo.vue?vue&type=template&id=f50e5ce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInfo_vue_vue_type_template_id_f50e5ce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardInfo_vue_vue_type_template_id_f50e5ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);