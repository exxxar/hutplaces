(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-pages-Register-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Register.vue?vue&type=script&lang=js& ***!
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
      name: '',
      email: '',
      password: '',
      error: false,
      errors: {},
      success: false
    };
  },
  methods: {
    register: function register() {
      var app = this;
      this.$auth.register({
        data: {
          name: app.name,
          email: app.email,
          password: app.password
        },
        success: function success() {
          app.success = true;
        },
        error: function error(resp) {
          app.error = true;
          app.errors = resp.response.data.errors;
        },
        redirect: null
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#register-form[data-v-364a2fac] {\n  width: 500px;\n  margin: auto;\n}\nform[data-v-364a2fac] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  background: #393939;\n  padding: 70px 30px 20px 30px;\n  box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;\n}\nform .form-group[data-v-364a2fac] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex-wrap: wrap;\n}\nform .form-group label[data-v-364a2fac] {\n  display: block;\n  color: #8f8f8f;\n  position: relative;\n  /* bottom: 89px; */\n  /* left: 0px; */\n  width: 100%;\n}\nform .form-group input[data-v-364a2fac] {\n  font-size: 18px;\n  padding: 15px 20px;\n  width: 500px;\n  background: transparent;\n  display: block;\n  border: 1px white solid;\n  margin-bottom: 30px;\n  color: white;\n  box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;\n  font-weight: 800;\n}\nform .form-group input[data-v-364a2fac]:focus {\n  outline: none;\n}\nform button[type=submit][data-v-364a2fac] {\n  width: 176px;\n  font-size: 18px;\n  padding: 15px 10px;\n  color: white;\n  font-weight: 800;\n  box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;\n  background: #03a9f4;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true& ***!
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
  return _c("div", { attrs: { id: "register-form" } }, [
    _vm.error && !_vm.success
      ? _c("div", { staticClass: "alert alert-danger" }, [
          _c("p", [
            _vm._v("There was an error, unable to complete registration.")
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.success
      ? _c("div", { staticClass: "alert alert-success" }, [
          _c(
            "p",
            [
              _vm._v("Registration completed. You can now "),
              _c("router-link", { attrs: { to: { name: "login" } } }, [
                _vm._v("sign in.")
              ])
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.success
      ? _c(
          "form",
          {
            attrs: {
              autocomplete: "off",
              method: "post",
              "accept-charset": "UTF-8"
            },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.register($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "form-group",
                class: { "has-error": _vm.error && _vm.errors.name }
              },
              [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    autocomplete: "false",
                    id: "name",
                    placeholder: "Enter Your name",
                    required: ""
                  },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm.error && _vm.errors.name
                  ? _c("span", { staticClass: "help-block" }, [
                      _vm._v(_vm._s(_vm.errors.name))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                class: { "has-error": _vm.error && _vm.errors.email }
              },
              [
                _c("label", { attrs: { for: "email" } }, [_vm._v("E-mail")]),
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
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    autocomplete: "false",
                    id: "email",
                    placeholder: "user@example.com",
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
                }),
                _vm._v(" "),
                _vm.error && _vm.errors.email
                  ? _c("span", { staticClass: "help-block" }, [
                      _vm._v(_vm._s(_vm.errors.email))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                class: { "has-error": _vm.error && _vm.errors.password }
              },
              [
                _c("label", { attrs: { for: "password" } }, [
                  _vm._v("Password")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password,
                      expression: "password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    autocomplete: "false",
                    id: "password",
                    required: ""
                  },
                  domProps: { value: _vm.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm.error && _vm.errors.password
                  ? _c("span", { staticClass: "help-block" }, [
                      _vm._v(_vm._s(_vm.errors.password))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-default", attrs: { type: "submit" } },
              [_vm._v("Submit")]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=364a2fac&scoped=true& */ "./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_id_364a2fac_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped& */ "./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "364a2fac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_364a2fac_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=style&index=0&id=364a2fac&lang=scss&scoped=scoped&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_364a2fac_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_364a2fac_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_364a2fac_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_364a2fac_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_364a2fac_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=364a2fac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);