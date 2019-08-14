(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-AsideMenu-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AsideMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'defaultLayout',
  methods: {
    openModal: function openModal(name) {
      this.$emit("self-hide");
      this.$emit("modal", name);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "ul",
    [
      _c(
        "router-link",
        {
          staticClass: "btn btn-black-2",
          attrs: { to: { name: "Playzone" }, tag: "li" }
        },
        [_vm._v("Игровая зона\n    ")]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "btn btn-black-2",
          attrs: { to: { name: "Market" }, tag: "li" }
        },
        [_vm._v("Маркет\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "btn btn-black-2",
          on: {
            click: function($event) {
              return _vm.openModal("promo")
            }
          }
        },
        [_vm._v("Промокоды")]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("li", { staticClass: "more-menu" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("ul", { staticClass: "more" }, [
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("terms")
                }
              }
            },
            [
              _c("a", { attrs: { href: "#terms" } }, [
                _vm._v("Пользовательское соглашение")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("supplier")
                }
              }
            },
            [
              _c("a", { attrs: { href: "#supplier" } }, [
                _vm._v("Стать поставщиком")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("partner")
                }
              }
            },
            [
              _c("a", { attrs: { href: "#partner" } }, [
                _vm._v("Стать партнером")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("report")
                }
              }
            },
            [
              _c("a", { staticClass: "report", attrs: { href: "#report" } }, [
                _vm._v("Баг-репорты")
              ])
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "btn btn-black-2" }, [
      _c("a", { attrs: { href: "" } }, [_vm._v("Достижения")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lang" }, [
      _c("a", { attrs: { href: "" } }, [
        _c("img", { attrs: { src: "/img/ru.jpg", alt: "" } })
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "" } }, [
        _c("img", { attrs: { src: "/img/en.jpg", alt: "" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AsideMenu.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AsideMenu.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsideMenu.vue?vue&type=template&id=40ef2d48& */ "./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&");
/* harmony import */ var _AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AsideMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AsideMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AsideMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AsideMenu.vue?vue&type=template&id=40ef2d48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);