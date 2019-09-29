(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-Chat-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ChatBoxComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ChatBoxComponent.vue */ "./resources/js/components/ChatBoxComponent.vue");
/* harmony import */ var draggable_vue_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draggable-vue-directive */ "./node_modules/draggable-vue-directive/dist/index.js");
/* harmony import */ var draggable_vue_directive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draggable_vue_directive__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
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
  name: 'chat',
  props: ["show"],
  data: function data() {
    return {
      open: false,
      rooms: null,
      selectedRoom: null,
      user_id: null,
      messages: []
    };
  },
  watch: {
    show: {
      handler: function handler(newVal, oldVal) {
        this.getCurrentUser();
      }
    },
    user_id: {
      handler: function handler(newVal, oldVal) {
        this.getChatRooms();
      }
    },
    rooms: {
      handler: function handler(newVal, oldVal) {
        this.loadMessages();
      }
    }
  },
  methods: {
    openChat: function openChat() {
      this.open = !this.open;
    },
    loadMessages: function loadMessages() {
      var _this = this;

      axios.post('/chat/messages', {
        "room_id": this.selectedRoom
      }).then(function (response) {
        _this.messages = response.data;
      });
    },
    changeChatRoom: function changeChatRoom(room) {
      var elements = document.querySelectorAll(".channels a");
      [].forEach.call(elements, function (el) {
        el.classList.remove("active");
      });
      document.querySelector("#".concat(this.prepareId(room))).classList.add("active");
      this.selectedRoom = room;
      this.loadMessages();
    },
    prepareId: function prepareId(id) {
      return btoa(id);
    },
    getChatRooms: function getChatRooms() {
      var _this2 = this;

      axios.get('/chat/rooms').then(function (response) {
        _this2.rooms = response.data.chats;
        _this2.selectedRoom = response.data.chats[0].id;
      });
    },
    getCurrentUser: function getCurrentUser() {
      var _this3 = this;

      axios.get('/chat/user').then(function (response) {
        _this3.user_id = response.data.current_user_id;
      });
    }
  },
  directives: {
    Draggable: draggable_vue_directive__WEBPACK_IMPORTED_MODULE_1__["Draggable"]
  },
  components: {
    ChatBoxComponent: _components_ChatBoxComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-btn {\n  box-shadow: 0px 0px 5px 0px black;\n  position: fixed;\n  bottom: 100px;\n  right: -28px;\n  width: 100px;\n  transition: 0.5s;\n  height: 60px;\n  background-color: yellow;\n  color: #2c3e50;\n  font-weight: 900;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 5px 0px 0px 5px;\n  cursor: pointer;\n  padding: 0px 0px 0px 20px;\n  box-sizing: border-box;\n}\n.chat-btn:hover {\n  right: 0px;\n  transition: 0.5s;\n}\n.title {\n  min-height: 30px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: yellow;\n  margin: 0px 0px 5px 0px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 900;\n  position: relative;\n}\n.title .close {\n  position: absolute;\n  top: 5px;\n  right: 12px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.title .close:before, .title .close:after {\n  height: 18px;\n  width: 1px;\n  background-color: #2c3e50;\n}\n.channels {\n  display: flex;\n  justify-content: center;\n  height: 50px;\n  padding: 5px;\n}\n.channels a {\n  width: 50px;\n  height: 50px;\n  background-color: #ffff00;\n  color: #2c3e50;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.channels a.active {\n  background-color: #acff3b;\n}\n.chat {\n  height: 405px;\n  width: 300px;\n  position: fixed;\n  left: 20px;\n  bottom: 20px;\n  background-color: #2c3e50;\n  border: 1px solid yellow;\n  z-index: 15;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.chat .input-group {\n  display: flex;\n}\n.chat .input-group input {\n  width: 224px;\n  height: 59px;\n  border: none;\n  padding: 10px;\n  box-sizing: border-box;\n  background: #2c3e50;\n  color: white;\n}\n.chat .input-group .btn {\n  box-shadow: none;\n  border-radius: 5px 0px 0px 0px;\n}\n#chatbox {\n  height: 251px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#chatbox .scroll-area {\n  padding: 0px;\n  width: 100%;\n}\n#chatbox ul {\n  width: 100%;\n}\n#chatbox ul li {\n  border-radius: 5px;\n  width: 100%;\n  /* min-height: 50px; */\n  padding: 10px;\n  box-sizing: border-box;\n  color: yellow;\n  text-align: left;\n  background: #3d546b;\n  margin-bottom: 25px;\n  position: relative;\n  line-height: 150%;\n  word-break: break-all;\n}\n#chatbox ul li .message-footer {\n  color: white;\n  position: absolute;\n  width: 270px;\n  left: 0;\n  bottom: -15px;\n  background: #3d546b;\n  padding: 0px 10px 0px 10px;\n  border-radius: 0px 0px 5px 5px;\n  font-size: 12px;\n  font-style: italic;\n}\n#chatbox ul li span {\n  word-break: break-all;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/draggable-vue-directive/dist/draggable.js":
/*!****************************************************************!*\
  !*** ./node_modules/draggable-vue-directive/dist/draggable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChangePositionType;
(function (ChangePositionType) {
    ChangePositionType[ChangePositionType["Start"] = 1] = "Start";
    ChangePositionType[ChangePositionType["End"] = 2] = "End";
    ChangePositionType[ChangePositionType["Move"] = 3] = "Move";
})(ChangePositionType || (ChangePositionType = {}));
function extractHandle(handle) {
    return handle && handle.$el || handle;
}
function getPosWithBoundaries(elementRect, boundingRect, left, top, boundingRectMargin) {
    if (boundingRectMargin === void 0) { boundingRectMargin = {}; }
    var adjustedPos = { left: left, top: top };
    var height = elementRect.height, width = elementRect.width;
    var topRect = top, bottomRect = top + height, leftRect = left, rightRect = left + width;
    var marginTop = boundingRectMargin.top || 0, marginBottom = boundingRectMargin.bottom || 0, marginLeft = boundingRectMargin.left || 0, marginRight = boundingRectMargin.right || 0;
    var topBoundary = boundingRect.top + marginTop, bottomBoundary = boundingRect.bottom - marginBottom, leftBoundary = boundingRect.left + marginLeft, rightBoundary = boundingRect.right - marginRight;
    if (topRect < topBoundary) {
        adjustedPos.top = topBoundary;
    }
    else if (bottomRect > bottomBoundary) {
        adjustedPos.top = bottomBoundary - height;
    }
    if (leftRect < leftBoundary) {
        adjustedPos.left = leftBoundary;
    }
    else if (rightRect > rightBoundary) {
        adjustedPos.left = rightBoundary - width;
    }
    return adjustedPos;
}
exports.Draggable = {
    bind: function (el, binding, vnode, oldVnode) {
        exports.Draggable.update(el, binding, vnode, oldVnode);
    },
    update: function (el, binding, vnode, oldVnode) {
        if (binding.value && binding.value.stopDragging) {
            return;
        }
        var handler = (binding.value && binding.value.handle && extractHandle(binding.value.handle)) || el;
        if (binding && binding.value && binding.value.resetInitialPos) {
            initializeState();
            handlePositionChanged();
        }
        if (!handler.getAttribute("draggable")) {
            el.removeEventListener("mousedown", el["listener"]);
            handler.addEventListener("mousedown", mouseDown);
            handler.setAttribute("draggable", "true");
            el["listener"] = mouseDown;
            initializeState();
            handlePositionChanged();
        }
        function mouseMove(event) {
            event.preventDefault();
            var stopDragging = binding.value && binding.value.stopDragging;
            if (stopDragging) {
                return;
            }
            var state = getState();
            if (!state.startDragPosition || !state.initialMousePos) {
                initializeState(event);
                state = getState();
            }
            var dx = event.clientX - state.initialMousePos.left;
            var dy = event.clientY - state.initialMousePos.top;
            var currentDragPosition = {
                left: state.startDragPosition.left + dx,
                top: state.startDragPosition.top + dy
            };
            var boundingRect = getBoundingRect();
            var elementRect = el.getBoundingClientRect();
            if (boundingRect && elementRect) {
                currentDragPosition = getPosWithBoundaries(elementRect, boundingRect, currentDragPosition.left, currentDragPosition.top, binding.value.boundingRectMargin);
            }
            setState({ currentDragPosition: currentDragPosition });
            updateElementStyle();
            handlePositionChanged(event);
        }
        function getBoundingRect() {
            if (!binding.value) {
                return;
            }
            return binding.value.boundingRect
                || binding.value.boundingElement
                    && binding.value.boundingElement.getBoundingClientRect();
        }
        function updateElementStyle() {
            var state = getState();
            if (!state.currentDragPosition) {
                return;
            }
            el.style.position = "fixed";
            el.style.left = state.currentDragPosition.left + "px";
            el.style.top = state.currentDragPosition.top + "px";
        }
        function mouseUp(event) {
            event.preventDefault();
            var currentRectPosition = getRectPosition();
            setState({
                initialMousePos: undefined,
                startDragPosition: currentRectPosition,
                currentDragPosition: currentRectPosition
            });
            document.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseup", mouseUp);
            handlePositionChanged(event, ChangePositionType.End);
        }
        function mouseDown(event) {
            setState({ initialMousePos: getInitialMousePosition(event) });
            handlePositionChanged(event, ChangePositionType.Start);
            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);
        }
        function getInitialMousePosition(event) {
            return event && {
                left: event.clientX,
                top: event.clientY
            };
        }
        function getRectPosition() {
            var clientRect = el.getBoundingClientRect();
            if (!clientRect.height || !clientRect.width) {
                return;
            }
            return { left: clientRect.left, top: clientRect.top };
        }
        function initializeState(event) {
            var state = getState();
            var initialRectPositionFromBinding = binding && binding.value && binding.value.initialPosition;
            var initialRectPositionFromState = state.initialPosition;
            var startingDragPosition = getRectPosition();
            var initialPosition = initialRectPositionFromBinding || initialRectPositionFromState || startingDragPosition;
            setState({
                initialPosition: initialPosition,
                startDragPosition: initialPosition,
                currentDragPosition: initialPosition,
                initialMousePos: getInitialMousePosition(event)
            });
            updateElementStyle();
        }
        function setState(partialState) {
            var prevState = getState();
            var state = __assign({}, prevState, partialState);
            handler.setAttribute("draggable-state", JSON.stringify(state));
        }
        function handlePositionChanged(event, changePositionType) {
            var state = getState();
            var posDiff = { x: 0, y: 0 };
            if (state.currentDragPosition && state.startDragPosition) {
                posDiff.x = state.currentDragPosition.left - state.startDragPosition.left;
                posDiff.y = state.currentDragPosition.top - state.startDragPosition.top;
            }
            var currentPosition = state.currentDragPosition && __assign({}, state.currentDragPosition);
            if (changePositionType === ChangePositionType.End) {
                binding.value && binding.value.onDragEnd && state && binding.value.onDragEnd(posDiff, currentPosition, event);
            }
            else if (changePositionType === ChangePositionType.Start) {
                binding.value && binding.value.onDragStart && state && binding.value.onDragStart(posDiff, currentPosition, event);
            }
            else {
                binding.value && binding.value.onPositionChange && state && binding.value.onPositionChange(posDiff, currentPosition, event);
            }
        }
        function getState() {
            return JSON.parse(handler.getAttribute("draggable-state")) || {};
        }
    }
};
//# sourceMappingURL=draggable.js.map

/***/ }),

/***/ "./node_modules/draggable-vue-directive/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/draggable-vue-directive/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(/*! ./draggable */ "./node_modules/draggable-vue-directive/dist/draggable.js");
exports.Draggable = draggable_1.Draggable;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    _vm.show
      ? _c(
          "div",
          {
            staticClass: "chat-btn",
            on: {
              click: function($event) {
                return _vm.openChat()
              }
            }
          },
          [_vm._v(_vm._s(_vm.$lang.chat.chat))]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.open
      ? _c(
          "div",
          {
            directives: [{ name: "draggable", rawName: "v-draggable" }],
            staticClass: "chat"
          },
          [
            _c("div", { staticClass: "title" }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$lang.chat.chat) +
                  "\n            "
              ),
              _c("a", {
                staticClass: "close",
                on: {
                  click: function($event) {
                    _vm.open = false
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "channels" },
              _vm._l(_vm.rooms, function(room) {
                return _c("a", {
                  attrs: { id: _vm.prepareId(room.id), title: room.id },
                  domProps: { innerHTML: _vm._s(room.title) },
                  on: {
                    click: function($event) {
                      return _vm.changeChatRoom(room.id)
                    }
                  }
                })
              }),
              0
            ),
            _vm._v(" "),
            _c("chat-box-component", {
              attrs: {
                "user-id": _vm.user_id,
                "room-id": _vm.selectedRoom,
                initial: _vm.messages
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Chat.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Chat.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_0d66c37a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=0d66c37a& */ "./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/components/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_0d66c37a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_0d66c37a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_0d66c37a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=0d66c37a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_0d66c37a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_0d66c37a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);