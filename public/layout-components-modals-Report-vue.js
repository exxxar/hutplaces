(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-modals-Report-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Report.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Report.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'report',
  props: ['show'],
  data: function data() {
    return {
      images: [],
      description: '',
      email: '',
      error_type: '0'
    };
  },
  methods: {
    message: function message(_message) {
      this.$notify({
        group: 'main',
        type: "warn",
        title: this.$lang.modals.report.message_title,
        text: _message
      });
    },
    onImageChange: function onImageChange(e) {
      this.images = this.$refs.files.files;
    },
    sendReport: function sendReport(e) {
      var _this = this;

      var currentObj = this;

      if (this.email == '' || this.description == '') {
        this.message(this.$lang.modals.report.error_1);
        return;
      }

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
      formData.append('error_type', this.error_type);
      axios.post('/reports/save', formData, config).then(function (response) {
        e.target.reset();
        _this.email = '';
        _this.description = '';

        _this.message(_this.$lang.modals.report.success_2);
      })["catch"](function (error) {
        _this.message(_this.$lang.modals.report.error_2);
      });
      this.message(this.$lang.modals.report.success_1);
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal-body report-modal" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("h1", { domProps: { innerHTML: _vm._s(_vm.$lang.messages.report) } }),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.sendReport($event)
          }
        }
      },
      [
        _c("div", { staticClass: "input-group" }, [
          _c("label", {
            attrs: { for: "select-email" },
            domProps: { innerHTML: _vm._s(_vm.$lang.modals.report.email) }
          }),
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
              type: "email",
              id: "select-email",
              placeholder: _vm.$lang.modals.report.email_placeholder,
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
        _c("div", { staticClass: "input-group" }, [
          _c("label", {
            attrs: { for: "select-errorType" },
            domProps: { innerHTML: _vm._s(_vm.$lang.modals.report.error_type) }
          }),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.error_type,
                  expression: "error_type"
                }
              ],
              attrs: { id: "select-errorType", required: "" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.error_type = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", {
                attrs: { value: "0", selected: "" },
                domProps: {
                  innerHTML: _vm._s(_vm.$lang.modals.report.error_type_1)
                }
              }),
              _vm._v(" "),
              _c("option", {
                attrs: { value: "1" },
                domProps: {
                  innerHTML: _vm._s(_vm.$lang.modals.report.error_type_2)
                }
              }),
              _vm._v(" "),
              _c("option", {
                attrs: { value: "2" },
                domProps: {
                  innerHTML: _vm._s(_vm.$lang.modals.report.error_type_3)
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("label", {
            attrs: { for: "select-errorMessage" },
            domProps: {
              innerHTML: _vm._s(_vm.$lang.modals.report.error_message)
            }
          }),
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
              placeholder: _vm.$lang.modals.report.error_message_placeholder,
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
              ? _c("p", {
                  domProps: {
                    innerHTML: _vm._s(_vm.$lang.modals.report.choose_file)
                  }
                })
              : _c("p", [
                  _vm._v("You choos " + _vm._s(_vm.images.length) + " files")
                ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("button", {
            staticClass: "btn btn-yellow full",
            attrs: { type: "submit" },
            domProps: { innerHTML: _vm._s(_vm.$lang.modals.report.send_report) }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-logo" }, [
      _c("img", { attrs: { src: "/img/report-logo.png", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/modals/Report.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/modals/Report.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_2f38cd62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=2f38cd62& */ "./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_2f38cd62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_2f38cd62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/Report.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/modals/Report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2f38cd62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=2f38cd62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2f38cd62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2f38cd62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);