(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-pages-Reports-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'report',
  props: ['show'],
  data: function data() {
    return {
      images: [],
      title: '',
      description: '',
      email: '',
      success: ''
    };
  },
  methods: {
    close: function close() {
      this.email = '';
      this.description = '';
      this.success = '';
      this.$emit('close', false);
    },
    onImageChange: function onImageChange(e) {
      this.images = this.$refs.files.files;
    },
    formSubmit: function formSubmit(e) {
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();

      for (var i = 0; i < this.images.length; i++) {
        var file = this.images[i];
        formData.append('images[' + i + ']', file);
      }

      formData.append('email', this.email);
      formData.append('description', this.description);
      axios.post('/reportSubmit', formData, config).then(function (response) {
        currentObj.success = response.data.success;
        e.target.reset();
        this.email = '';
        this.description = '';
        this.success = '';
      })["catch"](function (error) {
        currentObj.output = error;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports.vue?vue&type=template&id=21e11a74&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Reports.vue?vue&type=template&id=21e11a74& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    { staticClass: "report" },
    [
      _c("h1", [_vm._v(_vm._s(_vm.$lang.messages.report))]),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "reports-link",
          attrs: { tag: "a", disabled: "", to: "/my-reports" }
        },
        [_vm._v("\n    " + _vm._s(_vm.$lang.messages.my_reports) + "\n  ")]
      ),
      _vm._v(" "),
      _vm.success != ""
        ? _c(
            "p",
            {
              staticClass: "alert",
              attrs: { role: "alert" },
              on: {
                click: function($event) {
                  _vm.success = ""
                }
              }
            },
            [_vm._v("\n    " + _vm._s(_vm.success) + "\n  ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.formSubmit($event)
            }
          }
        },
        [
          _c("div", { staticClass: "input-group" }, [
            _c("label", { attrs: { for: "select-email" } }, [_vm._v("Email:")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              attrs: {
                autocomplete: "false",
                type: "text",
                id: "select-email",
                placeholder: "Enter email",
                required: ""
              },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("label", { attrs: { for: "select-errorMessage" } }, [
              _vm._v("Сообщение:")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.description,
                  expression: "description"
                }
              ],
              attrs: {
                autocomplete: "false",
                id: "select-errorMessage",
                placeholder: "Enter problem description",
                required: ""
              },
              domProps: { value: _vm.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.description = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              ref: "files",
              staticClass: "inputfile",
              attrs: {
                type: "file",
                name: "file",
                accept: ".gif,.jpg,.jpeg,.png",
                id: "file",
                multiple: ""
              },
              on: { change: _vm.onImageChange }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "file" } }, [
              _vm.images.length == 0
                ? _c("p", [_vm._v("Choose a file")])
                : _c("p", [
                    _vm._v("You choos " + _vm._s(_vm.images.length) + " files")
                  ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group" }, [
      _c("label", { attrs: { for: "select-errorType" } }, [
        _vm._v("Тип ошибки:")
      ]),
      _vm._v(" "),
      _c("select", { attrs: { id: "select-errorType" } }, [
        _c("option", { attrs: { value: "0" } }, [_vm._v("Ошибка интерфейса")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("Сетевые ошибки")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "2" } }, [_vm._v("Логические ошибки")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-yellow full", attrs: { type: "submit" } },
        [_vm._v("Отправить")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Reports.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Reports.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reports_vue_vue_type_template_id_21e11a74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reports.vue?vue&type=template&id=21e11a74& */ "./resources/js/pages/Reports.vue?vue&type=template&id=21e11a74&");
/* harmony import */ var _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reports.vue?vue&type=script&lang=js& */ "./resources/js/pages/Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reports_vue_vue_type_template_id_21e11a74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reports_vue_vue_type_template_id_21e11a74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Reports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Reports.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Reports.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Reports.vue?vue&type=template&id=21e11a74&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Reports.vue?vue&type=template&id=21e11a74& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_21e11a74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Reports.vue?vue&type=template&id=21e11a74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Reports.vue?vue&type=template&id=21e11a74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_21e11a74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_21e11a74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);