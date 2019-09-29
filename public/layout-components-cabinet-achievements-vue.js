(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-cabinet-Achievements-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Achievements.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-custom-scrollbar */ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.umd.min.js");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["userId"],
  activated: function activated() {
    this.loadTypes();
    this.loadAchievements(); //this.loadContent()
  },
  methods: {
    lineWidth: function lineWidth(c1, c2) {
      var c0 = c1 > c2 ? c2 : c1;
      return {
        '--line-width': c0 / c2 * 100 + '%'
      };
    },
    show: function show(name, ach) {
      var _this = this;

      this.selected.ach = ach;
      axios.post("/users/achievements/progress", {
        user_id: this.userId,
        ach_id: ach.id
      }).then(function (response) {
        _this.selected.current = response.data.current;
        _this.selected.needed = response.data.needed;
        _this.selected.trigger_title = response.data.trigger_title;
      });
      this.$modal.show(name);
    },
    hide: function hide(name) {
      this.$modal.hide(name);
    },
    filter: function filter(type) {
      this.trigger_type = type;
    },
    cssProps: function cssProps(bg) {
      return {
        '--background-achievements': "url('/img/achievements/bg/".concat(bg, "')")
      };
    },
    prepareImage: function prepareImage(img) {
      return "/img/achievements/element/".concat(img);
    },
    prepareTypeText: function prepareTypeText(type) {
      return eval("this.$lang.triggertypes.".concat(type.toLowerCase()));
    },
    prepareText: function prepareText(key) {
      return eval("this.$lang.".concat(key.toLowerCase()));
    },
    prepareRewards: function prepareRewards(ach) {
      var br = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var tmp = '';
      var hasPrize = false;

      if (ach.discount != null && ach.discount != 0) {
        tmp += eval("this.$lang.achievements.discount") + (br ? "<br>" : ", ");
        hasPrize = true;
      }

      if (ach.exp != null && ach.exp != 0) {
        tmp += eval("this.$lang.achievements.exp") + (br ? "<br>" : ", ");
        hasPrize = true;
      }

      if (ach.coins != null && ach.coins != 0) {
        tmp += eval("this.$lang.achievements.coins") + (br ? "<br>" : ", ");
        hasPrize = true;
      }

      if (ach.money != null && ach.money != 0) {
        tmp += eval("this.$lang.achievements.money") + (br ? "<br>" : ", ");
        hasPrize = true;
      }

      if (ach.card_id != null) {
        tmp += eval("this.$lang.achievements.card") + (br ? "<br>" : ", ");
        hasPrize = true;
      }

      if (ach.item_id != null) {
        tmp += eval("this.$lang.achievements.item") + (br ? "<br>" : "");
        hasPrize = true;
      }

      if (hasPrize) tmp = (ach.random_rewards ? eval("this.$lang.achievements.r_one") : eval("this.$lang.achievements.r_many")) + (br ? "<br>" : " ") + tmp.toLowerCase();else tmp = eval("this.$lang.achievements.empty");
      return tmp.lastIndexOf(",") > 0 ? tmp.slice(0, tmp.lastIndexOf(",")) : tmp;
    },
    loadTypes: function loadTypes() {
      var _this2 = this;

      axios.get('/achievements/types').then(function (response) {
        _this2.types = response.data.trigger_types;
      });
    },
    loadAchievements: function loadAchievements() {
      var _this3 = this;

      axios.get("/users/achievements/".concat(this.userId)).then(function (response) {
        _this3.achievements = response.data.achievements;
      });
    },
    loadContent: function loadContent() {
      var _this4 = this;

      axios.get('/content/achievements/all').then(function (response) {
        _this4.content = response.data.content;
      });
    },
    prepareAchievements: function prepareAchievements() {
      var _this5 = this;

      return this.trigger_type != null ? this.achievements.filter(function (ach) {
        return ach.trigger_type == _this5.trigger_type;
      }) : this.achievements;
    }
  },
  data: function data() {
    return {
      content: {
        title: "Достижения пользователей",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
      },
      achievements: null,
      trigger_type: null,
      types: null,
      selected: {
        current: 0,
        needed: 0,
        trigger_title: "empty",
        ach: null
      }
    };
  },
  components: {
    Scroll: vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n*[data-v-0cc810e6] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\nbutton[data-v-0cc810e6]:focus,\ntextarea[data-v-0cc810e6]:focus,\nselect[data-v-0cc810e6]:focus,\ninput[data-v-0cc810e6]:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close[data-v-0cc810e6] {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close[data-v-0cc810e6]:hover {\n  opacity: 1;\n}\n.close[data-v-0cc810e6]:before, .close[data-v-0cc810e6]:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close[data-v-0cc810e6]:before {\n  transform: rotate(45deg);\n}\n.close[data-v-0cc810e6]:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop[data-v-0cc810e6] {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop[data-v-0cc810e6]:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area[data-v-0cc810e6] {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge[data-v-0cc810e6] {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification[data-v-0cc810e6] {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn[data-v-0cc810e6] {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error[data-v-0cc810e6] {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success[data-v-0cc810e6] {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay[data-v-0cc810e6] {\n  background: rgba(0, 0, 0, 0.999);\n}\n.v--modal-overlay .v--modal-background-click[data-v-0cc810e6] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal[data-v-0cc810e6] {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable[data-v-0cc810e6] {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x[data-v-0cc810e6]:hover,\n.ps .ps__rail-y[data-v-0cc810e6]:hover,\n.ps .ps__rail-x[data-v-0cc810e6]:focus,\n.ps .ps__rail-y[data-v-0cc810e6]:focus,\n.ps .ps__rail-x.ps--clicking[data-v-0cc810e6],\n.ps .ps__rail-y.ps--clicking[data-v-0cc810e6] {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y[data-v-0cc810e6],\n.ps__rail-y:focus > .ps__thumb-y[data-v-0cc810e6],\n.ps__rail-y.ps--clicking .ps__thumb-y[data-v-0cc810e6] {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading][data-v-0cc810e6] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error][data-v-0cc810e6] {\n  width: 50px !important;\n  height: 50px !important;\n}\n*[data-v-0cc810e6] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\nbutton[data-v-0cc810e6]:focus,\ntextarea[data-v-0cc810e6]:focus,\nselect[data-v-0cc810e6]:focus,\ninput[data-v-0cc810e6]:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close[data-v-0cc810e6] {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close[data-v-0cc810e6]:hover {\n  opacity: 1;\n}\n.close[data-v-0cc810e6]:before, .close[data-v-0cc810e6]:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close[data-v-0cc810e6]:before {\n  transform: rotate(45deg);\n}\n.close[data-v-0cc810e6]:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop[data-v-0cc810e6] {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop[data-v-0cc810e6]:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area[data-v-0cc810e6] {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge[data-v-0cc810e6] {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification[data-v-0cc810e6] {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn[data-v-0cc810e6] {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error[data-v-0cc810e6] {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success[data-v-0cc810e6] {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay[data-v-0cc810e6] {\n  background: rgba(0, 0, 0, 0.999);\n}\n.v--modal-overlay .v--modal-background-click[data-v-0cc810e6] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal[data-v-0cc810e6] {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable[data-v-0cc810e6] {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x[data-v-0cc810e6]:hover,\n.ps .ps__rail-y[data-v-0cc810e6]:hover,\n.ps .ps__rail-x[data-v-0cc810e6]:focus,\n.ps .ps__rail-y[data-v-0cc810e6]:focus,\n.ps .ps__rail-x.ps--clicking[data-v-0cc810e6],\n.ps .ps__rail-y.ps--clicking[data-v-0cc810e6] {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y[data-v-0cc810e6],\n.ps__rail-y:focus > .ps__thumb-y[data-v-0cc810e6],\n.ps__rail-y.ps--clicking .ps__thumb-y[data-v-0cc810e6] {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading][data-v-0cc810e6] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error][data-v-0cc810e6] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.tooltip[data-v-0cc810e6] {\n  display: block !important;\n  z-index: 10000;\n}\n.tooltip .tooltip-inner[data-v-0cc810e6] {\n  background: #2c3e50;\n  box-shadow: 0px 0px 2px 0px black;\n  color: yellow;\n  font-family: \"Open Sans\";\n  font-weight: 900;\n  padding: 10px 20px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 150%;\n}\n.tooltip .tooltip-arrow[data-v-0cc810e6] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: 5px;\n  border-color: #2c3e50;\n  z-index: 1;\n}\n.tooltip[x-placement^=top][data-v-0cc810e6] {\n  margin-bottom: 5px;\n}\n.tooltip[x-placement^=top] .tooltip-arrow[data-v-0cc810e6] {\n  border-width: 5px 5px 0 5px;\n  border-left-color: transparent !important;\n  border-right-color: transparent !important;\n  border-bottom-color: transparent !important;\n  bottom: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.tooltip[x-placement^=bottom][data-v-0cc810e6] {\n  margin-top: 10px;\n}\n.tooltip[x-placement^=bottom] .tooltip-arrow[data-v-0cc810e6] {\n  border-width: 0 10px 10px 10px;\n  border-left-color: transparent !important;\n  border-right-color: transparent !important;\n  border-top-color: transparent !important;\n  top: -10px;\n  left: calc(50% - 10px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.tooltip[x-placement^=right][data-v-0cc810e6] {\n  margin-left: 5px;\n}\n.tooltip[x-placement^=right] .tooltip-arrow[data-v-0cc810e6] {\n  border-width: 5px 5px 5px 0;\n  border-left-color: transparent !important;\n  border-top-color: transparent !important;\n  border-bottom-color: transparent !important;\n  left: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n.tooltip[x-placement^=left][data-v-0cc810e6] {\n  margin-right: 5px;\n}\n.tooltip[x-placement^=left] .tooltip-arrow[data-v-0cc810e6] {\n  border-width: 5px 0 5px 5px;\n  border-top-color: transparent !important;\n  border-right-color: transparent !important;\n  border-bottom-color: transparent !important;\n  right: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n.tooltip.popover[data-v-0cc810e6] {\n  color: white;\n}\n.tooltip.popover .popover-inner[data-v-0cc810e6] {\n  background: white;\n  color: black;\n  padding: 24px;\n  border-radius: 5px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);\n}\n.tooltip.popover .popover-arrow[data-v-0cc810e6] {\n  border-color: white;\n}\n.tooltip[aria-hidden=true][data-v-0cc810e6] {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.15s, visibility 0.15s;\n}\n.tooltip[aria-hidden=false][data-v-0cc810e6] {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.15s;\n}\n.achievements[data-v-0cc810e6] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding-bottom: 50px;\n}\n.achievements li[data-v-0cc810e6] {\n  width: 293px;\n  height: 413px;\n  margin-bottom: 30px;\n  padding: 10px;\n  position: relative;\n  box-sizing: border-box;\n  background: transparent var(--background-achievements);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding-top: 41px;\n  cursor: pointer;\n}\n.achievements li .image[data-v-0cc810e6] {\n  width: 100%;\n  height: 190px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.achievements li .image img[data-v-0cc810e6] {\n  height: 100%;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n.achievements li .image img[data-v-0cc810e6]:hover {\n  box-shadow: 0px 0px 10px 8px #ff6600;\n}\n.achievements li .text[data-v-0cc810e6] {\n  width: 100%;\n  padding: 35px 40px 10px 40px;\n  box-sizing: border-box;\n}\n.achievements li .text h4[data-v-0cc810e6] {\n  text-transform: uppercase;\n  font-weight: 900;\n  color: white;\n  font-size: 16px;\n  word-break: break-all;\n}\nh3[data-v-0cc810e6] {\n  font-weight: 100;\n  color: white;\n  text-transform: uppercase;\n  font-size: 36px;\n  line-height: 150%;\n}\n.selected-achievement[data-v-0cc810e6] {\n  width: 300px;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.selected-achievement .achievement[data-v-0cc810e6] {\n  width: 293px;\n  height: 413px;\n  margin-bottom: 30px;\n  padding: 10px;\n  position: relative;\n  box-sizing: border-box;\n  background: transparent var(--background-achievements);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.selected-achievement .achievement .image[data-v-0cc810e6] {\n  width: 100%;\n  height: 190px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.selected-achievement .achievement .image img[data-v-0cc810e6] {\n  height: 100%;\n}\n.selected-achievement h1[data-v-0cc810e6] {\n  color: white;\n  font-size: 18px;\n  font-weight: 900;\n  line-height: 150%;\n  margin-top: 10px;\n}\n.selected-achievement p[data-v-0cc810e6] {\n  margin-top: 10px;\n  font-weight: 100;\n  font-style: italic;\n  line-height: 150%;\n  color: white;\n  width: 100%;\n  text-align: justify;\n  word-break: break-all;\n  padding: 10px 0px 10px 0px;\n}\n.selected-achievement p strong[data-v-0cc810e6] {\n  font-weight: 900;\n  font-size: 12px;\n}\n.selected-achievement hr[data-v-0cc810e6] {\n  width: 100%;\n  height: 1px;\n  background-color: white;\n}\n.selected-achievement .progress[data-v-0cc810e6] {\n  position: relative;\n  background-color: #2c3e5070;\n  width: 100%;\n  height: 50px;\n  box-shadow: 0px 0px 5px 0px white inset;\n}\n.selected-achievement .progress .line[data-v-0cc810e6] {\n  height: 100%;\n  background: #ff6600;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: var(--line-width);\n}\n.selected-achievement .progress .info[data-v-0cc810e6] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  color: white;\n  font-weight: 900;\n  font-size: 12px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.selected-achievement .progress .info h3[data-v-0cc810e6] {\n  color: yellow;\n  font-size: 12px;\n  font-weight: 900;\n  line-height: 150%;\n  width: 100%;\n  text-align: center;\n}\n.selected-achievement .progress .info span[data-v-0cc810e6] {\n  width: 100%;\n  margin-top: -15px;\n}\n.filters[data-v-0cc810e6] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters li[data-v-0cc810e6] {\n  padding: 5px;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: white;\n  font-weight: 100;\n}\n.filters li[data-v-0cc810e6]:hover {\n  color: yellow;\n}\n.filters li.active[data-v-0cc810e6] {\n  font-weight: 400;\n}\n.filters li img[data-v-0cc810e6] {\n  width: 100%;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=template&id=0cc810e6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Achievements.vue?vue&type=template&id=0cc810e6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    [
      _vm.types
        ? _c(
            "ul",
            { staticClass: "filters" },
            [
              _c(
                "li",
                {
                  on: {
                    click: function($event) {
                      return _vm.filter(null)
                    }
                  }
                },
                [_vm._v("#" + _vm._s(_vm.prepareTypeText("all")))]
              ),
              _vm._v(" "),
              _vm._l(_vm.types, function(t) {
                return _c(
                  "li",
                  {
                    on: {
                      click: function($event) {
                        return _vm.filter(t.value)
                      }
                    }
                  },
                  [_vm._v("#" + _vm._s(_vm.prepareTypeText(t.key)))]
                )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("h1", {
        staticClass: "main-title",
        domProps: { innerHTML: _vm._s(_vm.content.title) }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "description",
        domProps: { innerHTML: _vm._s(_vm.content.content) }
      }),
      _vm._v(" "),
      _vm.achievements != null && _vm.achievements != []
        ? _c(
            "ul",
            { staticClass: "achievements" },
            [
              _vm._l(_vm.prepareAchievements(), function(a) {
                return a.is_active
                  ? _c("li", { style: _vm.cssProps(a.background) }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip.bottom",
                              value: _vm.prepareRewards(a),
                              expression: "prepareRewards(a)",
                              modifiers: { bottom: true }
                            }
                          ],
                          staticClass: "image",
                          on: {
                            click: function($event) {
                              return _vm.show("ach", a)
                            }
                          }
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.prepareImage(a.image),
                                expression: "prepareImage(a.image)"
                              }
                            ],
                            attrs: { alt: "" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text" }, [
                        _c("h4", [_vm._v(_vm._s(_vm.prepareText(a.title)))])
                      ])
                    ])
                  : _vm._e()
              }),
              _vm._v(" "),
              _vm.prepareAchievements().length == 0
                ? _c("h3", [_vm._v(_vm._s(_vm.$lang.achievements.no_ach))])
                : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.achievements == null || _vm.achievements.length == 0
        ? _c("h3", [_vm._v(_vm._s(_vm.$lang.achievements.no_ach))])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: { name: "ach", adaptive: true, width: "100%", height: "100%" }
        },
        [
          _c("scroll", { staticClass: "scroll-area" }, [
            _c("a", {
              staticClass: "close",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.hide("ach")
                }
              }
            }),
            _vm._v(" "),
            _vm.selected.ach != null
              ? _c("div", { staticClass: "selected-achievement" }, [
                  _c("h1", [
                    _vm._v(_vm._s(_vm.prepareText(_vm.selected.ach.title)))
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      _vm._s(_vm.prepareText(_vm.selected.ach.description))
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm.prepareRewards(_vm.selected.ach, false))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.selected.needed > 0
                    ? _c("div", { staticClass: "progress" }, [
                        _c("div", {
                          staticClass: "line",
                          style: _vm.lineWidth(
                            _vm.selected.current,
                            _vm.selected.needed
                          )
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "info" }, [
                          _c("h3", [
                            _vm._v(
                              _vm._s(
                                _vm.prepareTypeText(_vm.selected.trigger_title)
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _vm.selected.current < _vm.selected.needed
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(_vm.selected.current) +
                                    "/" +
                                    _vm._s(_vm.selected.needed)
                                )
                              ])
                            : _c("span", [
                                _vm._v(_vm._s(_vm.$lang.achievements.completed))
                              ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "achievement",
                      style: _vm.cssProps(_vm.selected.ach.background)
                    },
                    [
                      _c("div", { staticClass: "image" }, [
                        _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: _vm.prepareImage(_vm.selected.ach.image),
                              expression: "prepareImage(selected.ach.image)"
                            }
                          ],
                          attrs: { alt: "" }
                        })
                      ])
                    ]
                  )
                ])
              : _vm._e()
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cabinet/Achievements.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/cabinet/Achievements.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Achievements_vue_vue_type_template_id_0cc810e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Achievements.vue?vue&type=template&id=0cc810e6&scoped=true& */ "./resources/js/components/cabinet/Achievements.vue?vue&type=template&id=0cc810e6&scoped=true&");
/* harmony import */ var _Achievements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Achievements.vue?vue&type=script&lang=js& */ "./resources/js/components/cabinet/Achievements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Achievements_vue_vue_type_style_index_0_id_0cc810e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true& */ "./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Achievements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Achievements_vue_vue_type_template_id_0cc810e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Achievements_vue_vue_type_template_id_0cc810e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cc810e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cabinet/Achievements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cabinet/Achievements.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/cabinet/Achievements.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Achievements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_style_index_0_id_0cc810e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=style&index=0&id=0cc810e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_style_index_0_id_0cc810e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_style_index_0_id_0cc810e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_style_index_0_id_0cc810e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_style_index_0_id_0cc810e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_style_index_0_id_0cc810e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cabinet/Achievements.vue?vue&type=template&id=0cc810e6&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/cabinet/Achievements.vue?vue&type=template&id=0cc810e6&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_template_id_0cc810e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Achievements.vue?vue&type=template&id=0cc810e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Achievements.vue?vue&type=template&id=0cc810e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_template_id_0cc810e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achievements_vue_vue_type_template_id_0cc810e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);