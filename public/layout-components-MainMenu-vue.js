(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-MainMenu-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MainMenu.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MainMenu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'defaultLayout',
  props: {
    authenticated: Boolean,
    user: Object,
    alwaysShow: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      menuShow: this.alwaysShow,
      menuHideTimer: null
    };
  },
  methods: {
    selfHide: function selfHide() {
      this.$emit("self-hide");
    },
    closeMenu: function closeMenu() {
      if (this.alwaysShow) return;
      this.menuShow = false;
    },
    openMenu: function openMenu(time) {
      var _this = this;

      if (this.alwaysShow) return;
      this.menuShow = true;
      if (this.menuHideTimer != null) clearTimeout(this.menuHideTimer);
      this.menuHideTimer = setTimeout(function () {
        return _this.menuShow = false;
      }, time);
    },
    openModal: function openModal(name) {
      this.selfHide();
      this.$emit("modal", name);
    },
    logout: function logout() {
      auth.logout();
      this.$router.push('signin');
    },
    getAvatar: function getAvatar(img) {
      if (img == '' || img == null || img == undefined) return "/img/noavatar.png";else return img;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MainMenu.vue?vue&type=template&id=da41f7ba&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MainMenu.vue?vue&type=template&id=da41f7ba& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("ul", [
    _c(
      "li",
      {
        staticClass: "btn btn-black",
        on: {
          click: function($event) {
            return _vm.openModal("howtostart")
          }
        }
      },
      [_vm._v(_vm._s(_vm.$lang.messages.how_to_start))]
    ),
    _vm._v(" "),
    _c(
      "li",
      {
        staticClass: "btn btn-black",
        on: {
          click: function($event) {
            return _vm.openModal("history")
          }
        }
      },
      [_vm._v(_vm._s(_vm.$lang.messages.history))]
    ),
    _vm._v(" "),
    _c(
      "li",
      {
        staticClass: "btn btn-black",
        on: {
          click: function($event) {
            return _vm.openModal("help")
          }
        }
      },
      [_vm._v(_vm._s(_vm.$lang.messages.help))]
    ),
    _vm._v(" "),
    _c(
      "li",
      {
        staticClass: "btn btn-black",
        on: {
          click: function($event) {
            return _vm.openModal("faq")
          }
        }
      },
      [_vm._v(_vm._s(_vm.$lang.messages.f_a_q))]
    ),
    _vm._v(" "),
    _c(
      "li",
      {
        staticClass: "btn btn-yellow",
        on: {
          click: function($event) {
            return _vm.openModal("payment")
          }
        }
      },
      [_vm._v(_vm._s(_vm.$lang.messages.recharge))]
    ),
    _vm._v(" "),
    _vm.authenticated && _vm.user
      ? _c(
          "li",
          {
            staticClass: "user",
            on: {
              click: function($event) {
                return _vm.selfHide()
              }
            }
          },
          [
            _c("div", { staticClass: "info" }, [
              _c("p", { staticClass: "name" }, [_vm._v(_vm._s(_vm.user.name))]),
              _vm._v(" "),
              _c("p", { staticClass: "email" }, [
                _vm._v(_vm._s(_vm.user.email))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "pucks" }, [
                _c("strong", [_vm._v(_vm._s(Math.floor(_vm.user.money)))]),
                _vm._v(" Pucks")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "avatar",
                on: {
                  mouseover: function($event) {
                    return _vm.openMenu(2000)
                  }
                }
              },
              [
                _c("img", {
                  attrs: { src: _vm.getAvatar(_vm.user.avatar), alt: "" }
                })
              ]
            ),
            _vm._v(" "),
            _vm.menuShow
              ? _c(
                  "div",
                  {
                    staticClass: "dropdown",
                    on: {
                      mouseover: function($event) {
                        return _vm.openMenu(2000)
                      },
                      mouseleave: function($event) {
                        return _vm.closeMenu()
                      }
                    }
                  },
                  [
                    _c("ul", [
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "cabinet" }, tag: "a" } },
                            [_vm._v("User cabinet")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.authenticated && _vm.user
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.logout()
                                  }
                                }
                              },
                              [_vm._v("Logout")]
                            )
                          ])
                        : _vm._e()
                    ])
                  ]
                )
              : _vm._e()
          ]
        )
      : _c(
          "li",
          {
            staticClass: "auth",
            on: {
              click: function($event) {
                return _vm.selfHide()
              }
            }
          },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-info ",
                attrs: { to: "/signin", tag: "button" }
              },
              [_vm._v("Sign In")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary ",
                attrs: { to: "/signup", tag: "button" }
              },
              [_vm._v("Sign Up")]
            )
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/MainMenu.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MainMenu.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainMenu_vue_vue_type_template_id_da41f7ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=template&id=da41f7ba& */ "./resources/js/components/MainMenu.vue?vue&type=template&id=da41f7ba&");
/* harmony import */ var _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainMenu_vue_vue_type_template_id_da41f7ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainMenu_vue_vue_type_template_id_da41f7ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MainMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MainMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MainMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MainMenu.vue?vue&type=template&id=da41f7ba&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/MainMenu.vue?vue&type=template&id=da41f7ba& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_da41f7ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=template&id=da41f7ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MainMenu.vue?vue&type=template&id=da41f7ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_da41f7ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_da41f7ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);