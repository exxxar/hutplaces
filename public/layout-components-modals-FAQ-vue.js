(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-modals-FAQ-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/FAQ.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/FAQ.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
  name: 'faq',
  props: ['show'],
  data: function data() {
    return {
      faq: null
    };
  },
  mounted: function mounted() {
    this.loadFAQ();
  },
  methods: {
    loadFAQ: function loadFAQ() {
      var _this = this;

      axios.get("/content/faq/all").then(function (response) {
        console.log(response);
        _this.faq = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/FAQ.vue?vue&type=template&id=703356d8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/FAQ.vue?vue&type=template&id=703356d8& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body questions-modal" }, [
      _c("h1", [_vm._v("Часто задаваемые вопросы")]),
      _vm._v(" "),
      _c("ul", { staticClass: "active" }, [
        _c("li", [_c("p", [_vm._v("Как принять участие в розыгрыше?")])]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", [
              _vm._v("Войдите с фпомощью безопасной авторизации в ВК.")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Пополните свой счет через платежный агрегатор.\n\n                "
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v(" Выберите желаемую игру.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Выберите карточку и сделайте ставку. Ставку вомзожно сделать сразу на несколько ячеек.\n                    Либо выкупить карточку по полной цене.\n                "
              )
            ]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("В какой валюте проходит розыгрыш и покупка лотов?")])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", [
              _vm._v("Войдите с фпомощью безопасной авторизации в ВК.")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Пополните свой счет через платежный агрегатор.\n\n                "
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v(" Выберите желаемую игру.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Выберите карточку и сделайте ставку. Ставку вомзожно сделать сразу на несколько ячеек.\n                    Либо выкупить карточку по полной цене.\n                "
              )
            ]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_c("p", [_vm._v("Как получить свой выигрыш?")])]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", [
              _vm._v("Войдите с фпомощью безопасной авторизации в ВК.")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Пополните свой счет через платежный агрегатор.\n\n                "
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v(" Выберите желаемую игру.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Выберите карточку и сделайте ставку. Ставку вомзожно сделать сразу на несколько ячеек.\n                    Либо выкупить карточку по полной цене.\n                "
              )
            ]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_c("p", [_vm._v("Как пополнить свой счет?")])]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", [
              _vm._v("Войдите с фпомощью безопасной авторизации в ВК.")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Пополните свой счет через платежный агрегатор.\n\n                "
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v(" Выберите желаемую игру.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Выберите карточку и сделайте ставку. Ставку вомзожно сделать сразу на несколько ячеек.\n                    Либо выкупить карточку по полной цене.\n                "
              )
            ]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [
            _vm._v(
              "Как узнать о своём выигрыше или проигрыше если в процессе розыгрыша меня не было на сайте?"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", [
              _vm._v("Войдите с фпомощью безопасной авторизации в ВК.")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Пополните свой счет через платежный агрегатор.\n\n                "
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v(" Выберите желаемую игру.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Выберите карточку и сделайте ставку. Ставку вомзожно сделать сразу на несколько ячеек.\n                    Либо выкупить карточку по полной цене.\n                "
              )
            ]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [
            _vm._v(
              "Как мне проверить что результат не накрученный администрацией в свою пользу?"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", [
              _vm._v("Войдите с фпомощью безопасной авторизации в ВК.")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Пополните свой счет через платежный агрегатор.\n\n                "
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v(" Выберите желаемую игру.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Выберите карточку и сделайте ставку. Ставку вомзожно сделать сразу на несколько ячеек.\n                    Либо выкупить карточку по полной цене.\n                "
              )
            ]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [
            _vm._v(
              "Каково минимальное и максиальное время ожидания начала розыгрыша карточки?"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", [
              _vm._v("Войдите с фпомощью безопасной авторизации в ВК.")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Пополните свой счет через платежный агрегатор.\n\n                "
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v(" Выберите желаемую игру.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Выберите карточку и сделайте ставку. Ставку вомзожно сделать сразу на несколько ячеек.\n                    Либо выкупить карточку по полной цене.\n                "
              )
            ]),
            _vm._v(" "),
            _c("li")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/modals/FAQ.vue":
/*!************************************************!*\
  !*** ./resources/js/components/modals/FAQ.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FAQ_vue_vue_type_template_id_703356d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FAQ.vue?vue&type=template&id=703356d8& */ "./resources/js/components/modals/FAQ.vue?vue&type=template&id=703356d8&");
/* harmony import */ var _FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FAQ.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/FAQ.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FAQ_vue_vue_type_template_id_703356d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FAQ_vue_vue_type_template_id_703356d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/FAQ.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/FAQ.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/modals/FAQ.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FAQ.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/FAQ.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/FAQ.vue?vue&type=template&id=703356d8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/modals/FAQ.vue?vue&type=template&id=703356d8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_template_id_703356d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FAQ.vue?vue&type=template&id=703356d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/FAQ.vue?vue&type=template&id=703356d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_template_id_703356d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_template_id_703356d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);