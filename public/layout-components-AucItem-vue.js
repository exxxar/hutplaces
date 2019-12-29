(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-AucItem-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AucItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-flip-countdown */ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_admin_Card_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/admin/CardHUTDB.vue */ "./resources/js/components/admin/Card.vue");
/* harmony import */ var _components_modals_MoneyCalcDialog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modals/MoneyCalcDialog.vue */ "./resources/js/components/modals/MoneyCalcDialog.vue");
/* harmony import */ var vue_simple_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-simple-tabs */ "./node_modules/vue-simple-tabs/src/index.js");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-custom-scrollbar */ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.umd.min.js");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Toggle.vue */ "./resources/js/components/Toggle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["auc", "controls", "lifetime", "user"],
  data: function data() {
    return {
      is_active:  false || this.auc.is_active,
      selected_lifetime: this.auc.lifetime
    };
  },
  methods: {
    bidLot: function bidLot(step) {
      var _this = this;

      console.log(step);
      this.$store.dispatch("doBidLot", {
        id: this.auc.id,
        step: Math.max(this.auc.step_price, step)
      }).then(function (res) {
        _this.message(res.data.message);
      })["catch"](function () {
        _this.message("Сделать ставку не удалось, обратитесь к администратору!");
      });
    },
    buyLot: function buyLot() {
      var _this2 = this;

      this.$store.dispatch("doBuyLot", {
        id: this.auc.id
      }).then(function (res) {
        _this2.message(res.data.message);
      })["catch"](function () {
        _this2.message("Неудалось преобрести лот, обратитесь к администрации");
      });
    },
    prepareLifetime: function prepareLifetime(time) {
      return eval("this.$lang.lifetime.".concat(time));
    },
    remove: function remove() {
      var _this3 = this;

      this.$store.dispatch("removeAuctionLot", {
        id: this.auc.id
      }).then(function (res) {
        _this3.message(res.data.message);

        _this3.$store.dispatch("loadAuctions", {
          type: _this3.auc.id
        });

        document.querySelectorAll(".lot-item ul li:nth-of-type(1)").forEach(function (a) {
          a.click();
        });
      });
    },
    setLifetime: function setLifetime(event) {
      this.selected_lifetime = event.target.value;
      this.save();
    },
    setActive: function setActive(active) {
      this.is_active = active;
      this.save();
    },
    save: function save() {
      var _this4 = this;

      this.$store.dispatch("updateAuctionLot", {
        id: this.auc.id,
        lifetime: this.selected_lifetime,
        active: this.is_active ? 1 : 0
      }).then(function () {
        _this4.$store.dispatch("loadAuctions");
      })["catch"](function (msg) {
        console.log(msg);
      });
      this.message(this.$lang.game.success_1);
    },
    getCard: function getCard() {
      return this.auc.lot.card;
    },
    prepareDeadline: function prepareDeadline() {
      var date = Date.parse(this.auc.updated_at);
      var time = [1000, 6, 12, 24, 36, 48, 96, 128];
      date = date + time[this.auc.lifetime] * 60 * 60 * 1000;
      return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
    },
    show: function show(name) {
      this.$modal.show(name);
    },
    hide: function hide(name) {
      this.$modal.hide(name);
    },
    message: function message(msg) {
      this.$notify({
        group: 'main',
        type: 'warn',
        title: this.$lang.game.error_title,
        text: msg
      });
    }
  },
  computed: {
    cssProps: function cssProps() {
      return {
        '--opacity': this.auc.is_active ? 1 : 0.5
      };
    }
  },
  components: {
    Card: _components_admin_Card_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardTabs: vue_simple_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
    CardSection: vue_simple_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"],
    FlipCountdown: vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0___default.a,
    Scroll: vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    Toggle: _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Calc: _components_modals_MoneyCalcDialog_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"steelfish\";\n  src: url(/fonts/steelfish/steelfish.eot);\n  src: url(/fonts/steelfish/steelfish.eot?#iefix) format(\"embedded-opentype\"), url(/fonts/steelfish/steelfish.woff2) format(\"woff2\"), url(/fonts/steelfish/steelfish.woff) format(\"woff\"), url(/fonts/steelfish/steelfish.ttf) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Bebas\";\n  src: url(/fonts/BebasNeueBold.eot);\n  src: url(/fonts/BebasNeueBold.eot?#iefix) format(\"embedded-opentype\"), url(/fonts/BebasNeueBold.woff2) format(\"woff2\"), url(/fonts/BebasNeueBold.woff) format(\"woff\"), url(/fonts/BebasNeueBold.ttf) format(\"truetype\");\n  font-style: normal;\n}\n*[data-v-ef92ba72] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\ninput[data-v-ef92ba72]::-webkit-outer-spin-button,\ninput[data-v-ef92ba72]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\ninput[type=number][data-v-ef92ba72] {\n  -moz-appearance: textfield;\n}\nbutton[data-v-ef92ba72]:focus,\ntextarea[data-v-ef92ba72]:focus,\nselect[data-v-ef92ba72]:focus,\ninput[data-v-ef92ba72]:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close[data-v-ef92ba72] {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close[data-v-ef92ba72]:hover {\n  opacity: 1;\n}\n.close[data-v-ef92ba72]:before, .close[data-v-ef92ba72]:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close[data-v-ef92ba72]:before {\n  transform: rotate(45deg);\n}\n.close[data-v-ef92ba72]:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop[data-v-ef92ba72] {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop[data-v-ef92ba72]:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area[data-v-ef92ba72] {\n  height: 100%;\n  padding: 20px 0px 100px 0px;\n  box-sizing: border-box;\n}\n.ps-container[data-v-ef92ba72] {\n  padding: 20px 0px 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge[data-v-ef92ba72] {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification[data-v-ef92ba72] {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn[data-v-ef92ba72] {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error[data-v-ef92ba72] {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success[data-v-ef92ba72] {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay[data-v-ef92ba72] {\n  background: rgba(0, 0, 0, 0.999);\n  min-height: 100%;\n}\n.v--modal-overlay .v--modal-background-click[data-v-ef92ba72] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal[data-v-ef92ba72] {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable[data-v-ef92ba72] {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x[data-v-ef92ba72]:hover,\n.ps .ps__rail-y[data-v-ef92ba72]:hover,\n.ps .ps__rail-x[data-v-ef92ba72]:focus,\n.ps .ps__rail-y[data-v-ef92ba72]:focus,\n.ps .ps__rail-x.ps--clicking[data-v-ef92ba72],\n.ps .ps__rail-y.ps--clicking[data-v-ef92ba72] {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y[data-v-ef92ba72],\n.ps__rail-y:focus > .ps__thumb-y[data-v-ef92ba72],\n.ps__rail-y.ps--clicking .ps__thumb-y[data-v-ef92ba72] {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading][data-v-ef92ba72] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error][data-v-ef92ba72] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.tabs-component[data-v-ef92ba72] {\n  width: 100%;\n}\n.tabs-component .tabs-component-tabs[data-v-ef92ba72] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n@media (max-width: 880px) {\n.tabs-component .tabs-component-tabs[data-v-ef92ba72] {\n    justify-content: center;\n}\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab[data-v-ef92ba72] {\n  padding: 10px;\n  border-bottom: 2px transparent solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-active[data-v-ef92ba72] {\n  border-bottom: 2px yellow solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab .tabs-component-tab-a[data-v-ef92ba72] {\n  color: white;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 12px;\n  text-transform: uppercase;\n  position: relative;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-disabled .tabs-component-tab-a[data-v-ef92ba72] {\n  color: gray;\n}\n.tabs-component .tabs-component-panels .tabs-component-panel .scroll-area[data-v-ef92ba72] {\n  padding: 20px 0px 100px 0px;\n}\n.ncard[data-v-ef92ba72],\n.ncard .backplate[data-v-ef92ba72] {\n  margin: auto;\n  z-index: 10;\n  cursor: pointer;\n  overflow: hidden;\n  background-size: contain;\n}\n.ncard .card-empty[data-v-ef92ba72],\n.card-19-empty[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xempty-19.png.pagespeed.ic.aMWM7AwyAx.webp);\n}\n.card-19-empty[data-v-ef92ba72] {\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n}\n.ncard .sgold[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold.png.pagespeed.ic.tufKkK0v4G.webp);\n}\n.ncard .sgold_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold_tag.png.pagespeed.ic.YleI5BHsyy.webp);\n}\n.ncard .ssilver[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ssilver.png.pagespeed.ce.Sh4c_i51Te.png);\n}\n.ncard .ssilver_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xssilver_tag.png.pagespeed.ic.m9SbJkSgf_.webp);\n}\n.ncard .sbronze[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsbronze.png.pagespeed.ic.50Mj3Z9mZ5.webp);\n}\n.ncard .sbronze_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsbronze_tag.png.pagespeed.ic.Cm_pDlUERt.webp);\n}\n.ncard .gold[data-v-ef92ba72],\n.ncard .silver[data-v-ef92ba72],\n.ncard .bronze[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/common.png.pagespeed.ce.w6gVJnZfVD.png);\n}\n.ncard .gold_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xgold_tag.png.pagespeed.ic.EcyAEWTD29.webp);\n}\n.ncard .silver_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsilver_tag.png.pagespeed.ic.8-mUkkH55R.webp);\n}\n.ncard .bronze_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xbronze_tag.png.pagespeed.ic.TZFQ5vav2s.webp);\n}\n.ncard .gold_footer[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xgold_footer.png.pagespeed.ic.u0Hsy6rzEZ.webp);\n}\n.ncard .silver_footer[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsilver_footer.png.pagespeed.ic.JicugInsOL.webp);\n}\n.ncard .bronze_footer[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xbronze_footer.png.pagespeed.ic.son4mSaWYf.webp);\n}\n.ncard .alumni[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xalumni-bg.png.pagespeed.ic.YL2zihnXhx.webp);\n}\n.ncard .totw_gold[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_gold.png.pagespeed.ce.-U-XX7Hz1O.png);\n}\n.ncard .totw_gold_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_gold_tag.png.pagespeed.ic.Ie1_aLEAuR.webp);\n}\n.ncard .totw_gold_footer[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_gold_footer.png);\n}\n.ncard .totw_gold_line[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_gold_line.png);\n}\n.ncard .totw_silver[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_silver.png.pagespeed.ce.P60tprdykv.png);\n}\n.ncard .totw_silver_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_silver_tag.png.pagespeed.ic.jD9Nr4zps9.webp);\n}\n.ncard .totw_silver_footer[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_silver_footer.png);\n}\n.ncard .totw_silver_line[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_silver_line.png);\n}\n.ncard .totw_bronze[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_bronze.png.pagespeed.ce.L2JZH9sSVk.png);\n}\n.ncard .totw_bronze_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_bronze_tag.png.pagespeed.ic.i7RwgHOuNB.webp);\n}\n.ncard .totw_bronze_footer[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_bronze_footer.png);\n}\n.ncard .totw_bronze_line[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_bronze_line.png);\n}\n.ncard .gat[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/gat.png.pagespeed.ce.fz5jPOCIrU.png);\n}\n.ncard .hwn[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/hwn.png.pagespeed.ce.K0K6xTXDYe.png);\n}\n.ncard .evo[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/evo.png.pagespeed.ce.N_SFhLLX7j.png);\n}\n.ncard .evo_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/xtag.png.pagespeed.ic.vcXKFhtKVF.webp);\n}\n.ncard .evo2[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo2/xevo2.png.pagespeed.ic.aQa-SY0pjx.webp);\n}\n.ncard .evo2_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo2/xtag.png.pagespeed.ic.HrJWlHJAe-.webp);\n}\n.ncard .cs[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/cs.png.pagespeed.ce.TlE6be1KEU.png);\n  background-size: cover;\n}\n.ncard .cs_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xcs_tag.png.pagespeed.ic.T13q6iqGwV.webp);\n}\n.ncard .pt[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xpt.png.pagespeed.ic.9HSMhQLxwg.webp);\n}\n.ncard .pt_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xpt_tag.png.pagespeed.ic.c4BkE9Zf_b.webp);\n}\n.ncard .ms[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ms/xms.png.pagespeed.ic.EvzPj-OpmW.webp);\n}\n.ncard .ms_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ms/xtag.png.pagespeed.ic.1F67LnKutr.webp);\n}\n.ncard .tg[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/tg/xtg.png.pagespeed.ic.WgdhVCpnGi.webp);\n}\n.ncard .tg_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/tg/xtag.png.pagespeed.ic.nDdqED5RjM.webp);\n}\n.ncard .xmas[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xmas/xmas.png);\n}\n.ncard .xmas_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xmas/xtag.png.pagespeed.ic.paF-MP0saM.webp);\n}\n.ncard .gscsi[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscsi.png.pagespeed.ic.4enTelZeac.webp);\n}\n.ncard .gscse[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscse.png.pagespeed.ic.D4rpZ4Hjhd.webp);\n}\n.ncard .gscfi[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscfi.png.pagespeed.ic.MUUVfflGEv.webp);\n}\n.ncard .gscge[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscge.png.pagespeed.ic.bybpQgNfvN.webp);\n}\n.ncard .gscsi_swipe[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscsi_swipe.png.pagespeed.ic.69llzCf3CM.webp);\n}\n.ncard .gscse_swipe[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscse_swipe.png.pagespeed.ic.aKOPw0JtaS.webp);\n}\n.ncard .gscfi_swipe[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscfi_swipe.png.pagespeed.ic.MF1UVMWzNE.webp);\n}\n.ncard .gscge_swipe[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscge_swipe.png.pagespeed.ic.MLFzxSKciR.webp);\n}\n#my-card-list[data-v-ef92ba72] {\n  height: 500px;\n  overflow-y: scroll;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n#my-card-list .card-wrap[data-v-ef92ba72],\n#my-card-list .ncard .backplate[data-v-ef92ba72],\n#my-card-list .ncard[data-v-ef92ba72] {\n  width: 136px;\n  height: 190px;\n  font-size: 10px;\n}\n.quick-search[data-v-ef92ba72],\n.ncard[data-v-ef92ba72],\n.ncard .backplate[data-v-ef92ba72],\n.card-wrap[data-v-ef92ba72] {\n  width: 240px;\n  height: 340px;\n  font-size: 20px;\n  background: linear-gradient(135deg, #4c4c4c 0%, #595959 12%, #666666 25%, #474747 39%, #2c2c2c 45%, black 53%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%);\n}\n@media (min-width: 1550px) {\n.tb2 .quick-search[data-v-ef92ba72],\n.scale .ncard[data-v-ef92ba72],\n.scale .ncard .backplate[data-v-ef92ba72] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1400px) and (max-width: 1550px) {\n.tb2 .quick-search[data-v-ef92ba72],\n.scale .ncard[data-v-ef92ba72],\n.scale .ncard .backplate[data-v-ef92ba72] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1250px) and (max-width: 1399px) {\n.tb2 .quick-search[data-v-ef92ba72],\n.scale .ncard[data-v-ef92ba72],\n.scale .ncard .backplate[data-v-ef92ba72] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1249px) {\n.quick-search[data-v-ef92ba72],\n.scale .ncard[data-v-ef92ba72],\n.scale .ncard .backplate[data-v-ef92ba72] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n.quick-search[data-v-ef92ba72],\n.scale .ncard[data-v-ef92ba72],\n.scale .ncard .backplate[data-v-ef92ba72] {\n    width: 113px;\n    height: 160px;\n    font-size: 10.5px;\n}\n}\n@media (min-width: 320px) and (max-width: 767px) {\n.quick-search[data-v-ef92ba72],\n.scale .ncard[data-v-ef92ba72],\n.scale .ncard .backplate[data-v-ef92ba72] {\n    width: 99px;\n    height: 140px;\n    font-size: 8px;\n}\n}\n.ncard .tag[data-v-ef92ba72] {\n  background-size: cover;\n  height: 50%;\n  width: 100%;\n  z-index: 5;\n}\n.ncard .top[data-v-ef92ba72] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: transparent !important;\n}\n.ncard .cardtype[data-v-ef92ba72] {\n  position: absolute;\n  left: 1em;\n  font-size: 0.9em;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  top: 0.3em;\n  letter-spacing: 0.04em;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  opacity: 0.7;\n  width: 3em;\n  z-index: 3;\n  text-align: center;\n}\n.ncard .texture[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold_texture.png.pagespeed.ic._ouLXX8XYR.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n}\n.ncard .background[data-v-ef92ba72] {\n  position: absolute;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 3;\n}\n.ncard .backplate[data-v-ef92ba72] {\n  position: absolute;\n}\n.ncard .overall[data-v-ef92ba72],\n.ncard .overall2[data-v-ef92ba72] {\n  position: absolute;\n  font-family: \"steelfish\";\n  font-size: 3.3em;\n  line-height: 1;\n  color: white;\n  font-weight: normal;\n  z-index: 5;\n  top: 0.58em;\n  left: 0.35em;\n  transform: scale(1, 1.1);\n}\n.ncard .overall2[data-v-ef92ba72] {\n  left: 8.5% !important;\n}\n.ncard .name[data-v-ef92ba72] {\n  position: absolute;\n  font-size: 1.4em;\n  color: white;\n  text-align: center;\n  width: 100%;\n  z-index: 4;\n  top: 56%;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  font-style: italic;\n  left: 4%;\n}\n.ncard .team[data-v-ef92ba72],\n.ncard .team-right[data-v-ef92ba72] {\n  position: absolute;\n  z-index: 5;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  font-size: 0.4em;\n  bottom: 23.5%;\n  font-weight: 800;\n  color: #fff;\n  font-style: italic;\n  LINE-HEIGHT: 100%;\n}\n.ncard .team[data-v-ef92ba72] {\n  left: 8%;\n}\n.ncard .team-right[data-v-ef92ba72] {\n  right: 1.3em;\n}\n.ncard .firstname[data-v-ef92ba72] {\n  width: 100%;\n  text-align: left;\n  line-height: 0.5em;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-left: 4%;\n  font-weight: normal;\n}\n.ncard .lastname[data-v-ef92ba72] {\n  width: 100%;\n  text-align: left;\n  font-weight: bold;\n  font-size: 1.3em;\n  transform: translate(0.15em, 0.3em);\n}\n.ncard .headshot[data-v-ef92ba72] {\n  height: 50%;\n  width: 100%;\n  z-index: 5;\n  -webkit-filter: brightness(1.15);\n          filter: brightness(1.15);\n  background-size: cover;\n  background-position: -90%;\n  background-repeat: no-repeat;\n}\n.ncard .logo-backdrop[data-v-ef92ba72] {\n  width: 100%;\n  height: 60%;\n  background-repeat: no-repeat;\n  background-position: center 20%;\n  background-size: 100%;\n  z-index: 3;\n  opacity: 0.2;\n  mix-blend-mode: overlay;\n}\n.ncard .attributes[data-v-ef92ba72] {\n  display: flex;\n  position: absolute;\n  bottom: 1.75em;\n  width: 72%;\n  color: white;\n  z-index: 3;\n  padding: 0 1em;\n  text-align: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  font-style: italic;\n}\n.ncard .attributes-right[data-v-ef92ba72] {\n  right: 0.4em;\n}\n.ncard .attributes .attr-name[data-v-ef92ba72] {\n  width: 17%;\n  font-size: 0.55em;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  margin-left: 0%;\n  text-align: right;\n  color: #797979;\n}\n.ncard .attributes .attr-value[data-v-ef92ba72] {\n  width: 17%;\n  font-size: 1.2em;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  left: -0.2em;\n  position: relative;\n  line-height: 0.9em;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n}\n.ncard .logo[data-v-ef92ba72] {\n  width: 48%;\n  height: 40%;\n  position: absolute;\n  z-index: 6;\n  right: -17%;\n  top: 55%;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.ncard .info[data-v-ef92ba72],\n.ncard .info2[data-v-ef92ba72] {\n  position: absolute;\n  top: 51%;\n  font-size: 0.6em;\n  z-index: 5;\n  letter-spacing: 0;\n  font-weight: bold;\n  color: #000;\n  text-align: right;\n  right: 1.4em;\n}\n.ncard .info div[data-v-ef92ba72],\n.ncard .info2 div[data-v-ef92ba72] {\n  display: inline-block;\n}\n.ncard .info .bullet[data-v-ef92ba72],\n.ncard .info2 .bullet[data-v-ef92ba72] {\n  margin: 0;\n  width: 3px;\n  height: 2px;\n  border-radius: 0;\n  transform: translateY(-3px);\n  background: #000;\n}\n.ncard .logo-bottom[data-v-ef92ba72] {\n  background-size: contain;\n  position: absolute;\n  bottom: 0.8em;\n  left: 0.65em;\n  height: 2.3em;\n  width: 2.3em;\n  z-index: 7;\n}\n.ncard .footer[data-v-ef92ba72] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0.25em;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  z-index: 4;\n  background-size: 100%;\n}\n.totw-attributes[data-v-ef92ba72] {\n  transform: rotate(-16deg);\n  bottom: 15% !important;\n  right: -0.5em;\n}\n.totw-team[data-v-ef92ba72] {\n  transform: rotate(-16deg);\n  bottom: 31% !important;\n  right: 1.5em !important;\n}\n.totw-name[data-v-ef92ba72] {\n  transform: rotate(-16deg);\n  top: 63.5% !important;\n  left: -0.5em !important;\n  text-align: right !important;\n  font-size: 1.2em !important;\n}\n.totw-logo[data-v-ef92ba72] {\n  bottom: 1em !important;\n  left: 1.5em !important;\n}\n.totw_text[data-v-ef92ba72] {\n  opacity: 1 !important;\n  mix-blend-mode: unset !important;\n  background-position: top !important;\n}\n.totw_line[data-v-ef92ba72] {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: 2em;\n}\n.totw_footer[data-v-ef92ba72] {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  bottom: 0;\n  right: -0.5em;\n}\n.totw_info[data-v-ef92ba72] {\n  right: unset !important;\n  transform: rotate(-16deg) !important;\n  top: 61% !important;\n  left: 5.5em !important;\n  color: #e1c885 !important;\n}\n.totw_overall[data-v-ef92ba72] {\n  transform: rotate(-14deg) !important;\n  font-style: italic !important;\n  left: 0.25em !important;\n  top: 0.6em !important;\n}\n.totw_cardtype[data-v-ef92ba72] {\n  transform: rotate(-14deg) !important;\n  font-style: italic !important;\n  font-size: 0.75em !important;\n  left: 1.3em !important;\n}\n.totw_gold_color[data-v-ef92ba72] {\n  color: #d8bf7c !important;\n}\n.totw_bronze_color[data-v-ef92ba72] {\n  color: #ecc5a4 !important;\n}\n.totw_silver_color[data-v-ef92ba72] {\n  color: #e1e1e1 !important;\n}\n.ncard .alm .info[data-v-ef92ba72] {\n  top: 5px;\n  color: #fff;\n}\n.ncard .alm .logo-backdrop[data-v-ef92ba72] {\n  mix-blend-mode: normal;\n  opacity: 0.3 !important;\n}\n.alumni-overlay[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xalumni-overlay.png.pagespeed.ic.2a_3M6NXyg.webp) no-repeat;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 7;\n  background-size: contain;\n}\n.ncard .alm .alm-tag[data-v-ef92ba72] {\n  z-index: 8;\n}\n.ncard .alm .alm-overall[data-v-ef92ba72] {\n  left: 8%;\n  top: 7%;\n  color: #fff;\n  font-size: 4em;\n}\n.alm-logo[data-v-ef92ba72] {\n  width: 16%;\n  height: 15%;\n  position: absolute;\n  z-index: 9;\n  right: 6%;\n  top: 44%;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-filter: brightness(1.2) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.95));\n          filter: brightness(1.2) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.95));\n}\n.ncard .alm .alm-name[data-v-ef92ba72] {\n  top: 60.5%;\n  left: -3%;\n  color: #fff;\n}\n.ncard .alm .alm-name .firstname[data-v-ef92ba72],\n.ncard .alm .alm-name .lastname[data-v-ef92ba72] {\n  text-align: center;\n}\n.ncard .alm .alm-headshot[data-v-ef92ba72] {\n  height: 43%;\n  width: 80%;\n  left: 1.8em;\n  top: 1em;\n  background-position: center;\n}\n.ncard .alm .alm-team[data-v-ef92ba72] {\n  position: absolute;\n  z-index: 5;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  font-size: 0.48em;\n  bottom: 46%;\n  font-weight: 800;\n  color: #fff;\n  font-style: italic;\n  width: 100%;\n  left: 0%;\n  text-align: center;\n}\n.ncard .alm.backplate .alm-attributes[data-v-ef92ba72] {\n  display: flex;\n  position: absolute;\n  bottom: 6.15%;\n  width: 100%;\n  color: #fff;\n  z-index: 3;\n  padding: 0 10%;\n  text-align: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  font-style: italic;\n}\n.alm .alm-attributes.attributes .attr-value[data-v-ef92ba72] {\n  line-height: 1.8em;\n}\n.ncard .alm .alm-attributes.attributes .attr-name[data-v-ef92ba72] {\n  text-align: left;\n  padding-left: 3%;\n  color: #fff;\n}\n.no-opacity[data-v-ef92ba72] {\n  opacity: 1;\n}\n.hc-logo[data-v-ef92ba72] {\n  bottom: -2% !important;\n  height: 23% !important;\n  width: 23% !important;\n  background-repeat: no-repeat !important;\n}\n.hc-team[data-v-ef92ba72] {\n  font-size: 0.6em !important;\n  bottom: 22% !important;\n  right: 10% !important;\n}\n.hc-ovr[data-v-ef92ba72] {\n  top: 7% !important;\n}\n.ncard .hc .attributes .attr-name[data-v-ef92ba72],\n.ncard .hc .attributes .attr-value[data-v-ef92ba72],\n.ncard .hc .team-right[data-v-ef92ba72],\n.ncard .hc .cardtype[data-v-ef92ba72] {\n  color: #000;\n}\n.ncard .hc .attributes[data-v-ef92ba72],\n.ncard .cs .attributes[data-v-ef92ba72],\n.ncard .pt .attributes[data-v-ef92ba72] {\n  bottom: 8%;\n}\n.ncard .cs .logo-backdrop[data-v-ef92ba72] {\n  opacity: 0.5;\n}\n.ncard .cs .attributes .attr-name[data-v-ef92ba72],\n.ncard .cs .attributes .attr-value[data-v-ef92ba72],\n.ncard .cs .team-right[data-v-ef92ba72],\n.ncard .cs .name[data-v-ef92ba72],\n.ncard .cs .info[data-v-ef92ba72],\n.ncard .cs .cardtype[data-v-ef92ba72] {\n  color: #fff;\n}\n.ncard .cs .cardtype[data-v-ef92ba72] {\n  color: #000;\n}\n.cs-team[data-v-ef92ba72] {\n  font-size: 0.6em !important;\n  bottom: 21.5% !important;\n  right: 10% !important;\n  color: #000 !important;\n}\n.cs-ovr[data-v-ef92ba72] {\n  top: 17% !important;\n}\n.ncard .pt .logo-backdrop[data-v-ef92ba72] {\n  opacity: 0.5;\n}\n.ncard .pt .attributes .attr-name[data-v-ef92ba72],\n.ncard .pt .attributes .attr-value[data-v-ef92ba72],\n.ncard .pt .team-right[data-v-ef92ba72],\n.ncard .pt .name[data-v-ef92ba72],\n.ncard .pt .info[data-v-ef92ba72],\n.ncard .pt .cardtype[data-v-ef92ba72] {\n  color: #fff;\n}\n.ncard .pt .cardtype[data-v-ef92ba72] {\n  color: #000;\n}\n.pt-team[data-v-ef92ba72] {\n  font-size: 0.6em !important;\n  bottom: 21.5% !important;\n  right: 10% !important;\n  color: #fff !important;\n}\n.pt-ovr[data-v-ef92ba72] {\n  top: 17% !important;\n}\n.ncard .gat-headshot[data-v-ef92ba72],\n.ncard .evo-headshot[data-v-ef92ba72] {\n  z-index: 2 !important;\n}\n.ncard .hwn-headshot[data-v-ef92ba72] {\n  z-index: 3 !important;\n}\n.gat-team[data-v-ef92ba72],\n.evo-team[data-v-ef92ba72],\n.hwn-team[data-v-ef92ba72] {\n  font-size: 0.6em !important;\n  bottom: 22% !important;\n  right: 10% !important;\n  color: #fff !important;\n}\n.ncard .hwn-attr[data-v-ef92ba72] {\n  color: #fff !important;\n}\n.ncard.gat-wrap .attributes .attr-name[data-v-ef92ba72],\n.ncard.evo-wrap .attributes .attr-name[data-v-ef92ba72],\n.ncard.hwn-wrap .attributes .attr-name[data-v-ef92ba72] {\n  color: #000;\n}\n.ncard.gat-wrap .attributes .attr-value[data-v-ef92ba72],\n.ncard.gat-wrap .name[data-v-ef92ba72],\n.ncard.gat-wrap .info .bullet[data-v-ef92ba72] {\n  color: #fff;\n}\n.ncard.gat-wrap .overall[data-v-ef92ba72] {\n  font-weight: 800;\n  font-style: italic;\n  color: #fff;\n  top: 7%;\n  left: 3%;\n}\n.ncard.gat-wrap .info[data-v-ef92ba72] {\n  left: 5%;\n  top: 23%;\n  font-size: 0.4em;\n  color: #fff;\n  right: inherit;\n}\n.ncard.gat-wrap .logo-backdrop[data-v-ef92ba72],\n.ncard.evo-wrap .logo-backdrop[data-v-ef92ba72] {\n  z-index: 2;\n}\n.gsc-texture[data-v-ef92ba72] {\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n}\n.gat-texture[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/xgat_ol.png.pagespeed.ic.kbJ8EBqWSc.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  mix-blend-mode: color-dodge;\n}\n.evo-texture[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/xoverlay.png.pagespeed.ic.hML-DUqUjC.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n.ncard.evo-wrap .attributes[data-v-ef92ba72] {\n  bottom: 7% !important;\n}\n.ms-texture[data-v-ef92ba72] {\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n}\n.ms-headshot[data-v-ef92ba72] {\n  background-position: 30% !important;\n  top: 3.5% !important;\n}\n.ncard.ms-ol .attributes .attr-name[data-v-ef92ba72],\n.ncard.ms-ol .attributes .attr-value[data-v-ef92ba72],\n.ncard.ms-ol .team-right[data-v-ef92ba72],\n.ncard.ms-ol .name[data-v-ef92ba72],\n.ncard.ms-ol .cardtype[data-v-ef92ba72] {\n  color: #c6ac66 !important;\n}\n.ncard.ms-ol .name .lastname[data-v-ef92ba72] {\n  font-size: 1em;\n  margin-left: 3.5%;\n  transform: unset;\n}\n.ncard.ms-ol .name[data-v-ef92ba72] {\n  top: 58%;\n}\n.ncard.ms-ol .ms-team[data-v-ef92ba72] {\n  color: #c6ac66;\n  font-size: 0.6em;\n  bottom: 21.5%;\n}\n.ncard.ms-ol .ms-fill[data-v-ef92ba72] {\n  background: red;\n}\n.ncard.ms-ol .ms-logo[data-v-ef92ba72] {\n  right: 5%;\n  top: 59%;\n  height: 20%;\n  width: 30%;\n}\n.ncard.ms-ol .attributes[data-v-ef92ba72] {\n  width: 100%;\n  height: 12%;\n  transform: translateX(4%);\n}\n.ncard.ms-ol .attributes .attr-name[data-v-ef92ba72] {\n  transform: translateX(-150%) translateY(72%);\n  font-size: 0.5em;\n}\n.ncard.ms-ol .overall[data-v-ef92ba72] {\n  left: 6%;\n  font-size: 3em;\n}\n.ncard.ms-ol .info[data-v-ef92ba72] {\n  top: 3%;\n  color: #000;\n}\n.ncard.ms-ol .cardtype[data-v-ef92ba72] {\n  left: 4%;\n  top: 10%;\n  color: #000 !important;\n  font-size: 0.8em;\n}\n.hwn-ct[data-v-ef92ba72] {\n  top: 13% !important;\n  left: 8% !important;\n  font-size: 0.75em !important;\n  color: #000 !important;\n}\n.hwn-team-text[data-v-ef92ba72] {\n  position: absolute;\n  bottom: 15%;\n  right: 2%;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  font-style: italic;\n  font-size: 2em;\n  opacity: 0.3;\n  letter-spacing: 0.05em;\n}\n.gsc-att[data-v-ef92ba72] {\n  bottom: 7% !important;\n  width: 75% !important;\n  padding-right: 0 !important;\n}\n.gsc-att .attr-name[data-v-ef92ba72] {\n  padding-right: 2% !important;\n  padding-bottom: 3% !important;\n}\n.gsc-ovr[data-v-ef92ba72] {\n  top: 18% !important;\n  left: 10% !important;\n}\n.ncard.gscsi-wrap .attributes .attr-name[data-v-ef92ba72],\n.ncard.gscsi-wrap .cardtype[data-v-ef92ba72],\n.ncard.gscsi-wrap .info[data-v-ef92ba72] {\n  color: #ccc;\n}\n.ncard.gscsi-wrap .bullet[data-v-ef92ba72] {\n  background: #ccc;\n}\n.ncard.gscsi-wrap .attributes .attr-value[data-v-ef92ba72],\n.ncard.gscsi-wrap .team-right[data-v-ef92ba72],\n.ncard.gscsi-wrap .name[data-v-ef92ba72],\n.ncard.gscsi-wrap .overall[data-v-ef92ba72] {\n  color: #fff;\n}\n.ncard.gscfi-wrap .attributes .attr-name[data-v-ef92ba72],\n.ncard.gscfi-wrap .cardtype[data-v-ef92ba72],\n.ncard.gscfi-wrap .info[data-v-ef92ba72] {\n  color: #43c7e7;\n}\n.ncard.gscfi-wrap .bullet[data-v-ef92ba72] {\n  background: #43c7e7;\n}\n.ncard.gscfi-wrap .attributes .attr-value[data-v-ef92ba72],\n.ncard.gscfi-wrap .team-right[data-v-ef92ba72],\n.ncard.gscfi-wrap .name[data-v-ef92ba72],\n.ncard.gscfi-wrap .overall[data-v-ef92ba72] {\n  color: #fff;\n}\n.ncard.gscse-wrap .attributes .attr-name[data-v-ef92ba72],\n.ncard.gscse-wrap .cardtype[data-v-ef92ba72],\n.ncard.gscse-wrap .info[data-v-ef92ba72] {\n  color: #004998;\n}\n.ncard.gscse-wrap .bullet[data-v-ef92ba72] {\n  background: #004998;\n}\n.ncard.gscse-wrap .attributes .attr-value[data-v-ef92ba72],\n.ncard.gscse-wrap .team-right[data-v-ef92ba72],\n.ncard.gscse-wrap .name[data-v-ef92ba72],\n.ncard.gscse-wrap .overall[data-v-ef92ba72] {\n  color: #011e41;\n}\n.ncard.gscge-wrap .attributes .attr-name[data-v-ef92ba72],\n.ncard.gscge-wrap .cardtype[data-v-ef92ba72],\n.ncard.gscge-wrap .info[data-v-ef92ba72] {\n  color: #fff;\n}\n.ncard.gscge-wrap .bullet[data-v-ef92ba72] {\n  background: #fff;\n}\n.ncard.gscge-wrap .attributes .attr-value[data-v-ef92ba72],\n.ncard.gscge-wrap .team-right[data-v-ef92ba72],\n.ncard.gscge-wrap .name[data-v-ef92ba72],\n.ncard.gscge-wrap .overall[data-v-ef92ba72] {\n  color: #facd01;\n}\n.tg-texture[data-v-ef92ba72] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  background-image: url(https://hutdb.net/assets/img/cards/19/tg/xoverlay.png.pagespeed.ic.o_dh5pQgX6.webp);\n  z-index: 4;\n  left: 0;\n  height: 100%;\n}\n.ncard.tg_main .headshot[data-v-ef92ba72] {\n  background-position: -20%;\n  top: 5%;\n}\n.ncard.tg_main .logo-backdrop[data-v-ef92ba72] {\n  background-position: center top;\n}\n.ncard.tg_main .attributes[data-v-ef92ba72] {\n  width: 90%;\n  left: 5%;\n  bottom: 8%;\n}\n.ncard.tg_main .overall[data-v-ef92ba72] {\n  color: #fff;\n  left: 11.5%;\n  top: 32%;\n  font-size: 3.1em;\n}\n.ncard.tg_main .team[data-v-ef92ba72] {\n  left: 8%;\n  text-align: left;\n  width: 50%;\n  bottom: 21.5%;\n  color: #000;\n  font-size: 0.45em;\n}\n.ncard.tg_main .info[data-v-ef92ba72] {\n  font-size: 0.45em;\n  bottom: 21.5%;\n  top: inherit;\n  right: 8%;\n}\n.ncard.tg_main .name[data-v-ef92ba72] {\n  color: #000;\n  left: 5%;\n  top: 59%;\n}\n.ncard.tg_main .logo-bottom[data-v-ef92ba72] {\n  width: 3.5em;\n  height: 3.5em;\n  right: 5%;\n  left: inherit;\n  bottom: 25%;\n}\n.ncard.tg_main .attributes .attr-name[data-v-ef92ba72] {\n  color: #000;\n  text-align: left;\n  transform: translateX(0.3em);\n  margin-bottom: 1%;\n}\n.ncard.xmas-wrap .headshot[data-v-ef92ba72] {\n  z-index: 2;\n}\n.ncard.xmas-wrap .logo-backdrop[data-v-ef92ba72] {\n  z-index: 1;\n}\n.ncard.xmas-wrap .overall[data-v-ef92ba72] {\n  left: 12%;\n  font-size: 3em;\n  top: 25%;\n}\n.ncard.xmas-wrap .name[data-v-ef92ba72] {\n  top: 54%;\n  font-size: 1.25em;\n}\n.xmas-top[data-v-ef92ba72] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.ncard.xmas-wrap .info .bullet[data-v-ef92ba72] {\n  background: #717171;\n}\n.ncard.xmas-wrap .info[data-v-ef92ba72] {\n  color: #717171;\n}\n.ncard.xmas-wrap .attributes .attr-value[data-v-ef92ba72],\n.ncard.xmas-wrap .team-right[data-v-ef92ba72],\n.ncard.xmas-wrap .name[data-v-ef92ba72],\n.ncard .attributes .attr-name[data-v-ef92ba72],\n.ncard.xmas-wrap .overall[data-v-ef92ba72] {\n  color: #e9e9e9;\n}\n.ncard.xmas-wrap .logo[data-v-ef92ba72] {\n  right: 1%;\n  height: 25%;\n  width: 25%;\n  top: 60%;\n}\n.ncard.xmas-wrap .team[data-v-ef92ba72] {\n  font-size: 0.65em;\n  bottom: 24.75%;\n}\n.ncard.xmas-wrap .cardtype[data-v-ef92ba72] {\n  top: 15%;\n  font-size: 0.75em;\n  left: 11%;\n  color: #fff;\n}\n.ncard .ipotg[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/background.png.pagespeed.ce.PmEXPQUxA_.png);\n}\n.ncard .ipotg_tag[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xtag.png.pagespeed.ic.FGuh0IQT6M.webp);\n  background-size: cover;\n}\n.ncard .ipotg .black-background[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xblack.png.pagespeed.ic.7nqBLXI06W.webp);\n  background-size: cover;\n  top: 0;\n}\n.ncard .ipotg .silver-background[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xsilver.png.pagespeed.ic.QR0TQn3_Pa.webp);\n  background-size: cover;\n  z-index: 4;\n  top: 0;\n}\n.ncard .ipotg .ice-background[data-v-ef92ba72] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/ice.png.pagespeed.ce.SS0jb_qb_Q.png);\n}\n.ncard.ipotg-wrap .headshot[data-v-ef92ba72] {\n  top: 0;\n  height: 50%;\n  background-position: center;\n  left: 8%;\n  z-index: 3;\n}\n.ncard.ipotg-wrap .logo-fix[data-v-ef92ba72] {\n  top: 0;\n  left: 0;\n}\n.ncard.ipotg-wrap .overall[data-v-ef92ba72] {\n  left: 8%;\n}\n.ncard.ipotg-wrap .cardtype[data-v-ef92ba72] {\n  left: 6%;\n  top: 10%;\n}\n.ncard.ipotg-wrap .attributes-right[data-v-ef92ba72] {\n  z-index: 5;\n}\n.ncard.ipotg-wrap .attributes .attr-name[data-v-ef92ba72] {\n  color: #545454;\n}\n.ncard.ipotg-wrap .ipotg-team[data-v-ef92ba72] {\n  color: #545454;\n  font-size: 0.5em;\n  bottom: 21.5%;\n}\n.ncard.ipotg-wrap .logo-bottom[data-v-ef92ba72] {\n  left: 6%;\n  bottom: 8%;\n}\n.ncard.ipotg-wrap .name[data-v-ef92ba72] {\n  top: 59%;\n}\n.ncard.ipotg-wrap .logo-backdrop[data-v-ef92ba72] {\n  z-index: 2;\n}\n.evo2-wrap.ncard .headshot[data-v-ef92ba72],\n.evo2-wrap.ncard .logo-backdrop[data-v-ef92ba72] {\n  z-index: 2;\n}\n.evo2-wrap.ncard .cardtype[data-v-ef92ba72] {\n  top: 5%;\n  left: 5.5%;\n}\n.evo2-wrap.ncard .overall[data-v-ef92ba72] {\n  left: 7.5%;\n}\n.evo2-wrap.ncard .cardtype[data-v-ef92ba72],\n.evo2-wrap.ncard .overall[data-v-ef92ba72],\n.evo2-wrap.ncard .attributes .attr-value[data-v-ef92ba72],\n.evo2-wrap.ncard .info[data-v-ef92ba72],\n.evo2-wrap.ncard .name[data-v-ef92ba72] {\n  color: #fff;\n}\n.evo2-wrap.ncard .info .bullet[data-v-ef92ba72] {\n  background: #fff;\n}\n.evo2-wrap.ncard .attributes[data-v-ef92ba72] {\n  bottom: 7.5%;\n  width: 80%;\n  right: 0%;\n}\n.lottery-section[data-v-ef92ba72] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .left-side[data-v-ef92ba72] {\n  width: 265px;\n}\n.lottery-section .left-side .fixed[data-v-ef92ba72] {\n  position: fixed;\n  width: inherit;\n  top: 80px;\n}\n.lottery-section .left-side .fixed .controls[data-v-ef92ba72] {\n  padding: 10px 0px 10px 0px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lottery-section .left-side .fixed .controls .mini-btn[data-v-ef92ba72] {\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  background-color: #2c3e50;\n  padding: 3px;\n  box-sizing: border-box;\n  margin-left: 10px;\n  box-shadow: 0px 0px 2px 0px black;\n}\n.lottery-section .left-side .fixed .controls .mini-btn[data-v-ef92ba72]:hover {\n  transition: 0.5s;\n  box-shadow: 0px 0px 2px 0px black, 0px 0px 5px 0px yellow inset;\n}\n.lottery-section .left-side .fixed .controls .mini-btn img[data-v-ef92ba72] {\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .left-side .fixed .card[data-v-ef92ba72] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lottery-section .left-side .fixed .block-info[data-v-ef92ba72] {\n  width: 100%;\n  position: relative;\n  background-color: #2c3e50;\n  margin-top: 10px;\n  box-sizing: border-box;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  box-shadow: 0px 0px 2px 0px black;\n}\n.lottery-section .left-side .fixed .block-info .console[data-v-ef92ba72] {\n  position: absolute;\n  right: -35px;\n  top: -35px;\n  width: 70px;\n  height: 70px;\n  border: 4px yellow solid;\n  padding: 10px;\n  background-color: #393939af;\n  box-sizing: border-box;\n  border-radius: 50%;\n  z-index: 12;\n}\n.lottery-section .left-side .fixed .block-info .console img[data-v-ef92ba72] {\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .left-side .fixed .block-info h4[data-v-ef92ba72] {\n  color: white;\n  text-align: center;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 100;\n}\n.lottery-section .left-side .fixed .block-info p.year[data-v-ef92ba72] {\n  width: 100%;\n  text-align: center;\n  /* line-height: 202%; */\n  font-size: 14px;\n  padding-top: 10px;\n  color: #646464;\n}\n.lottery-section .left-side .fixed .block-info p.price[data-v-ef92ba72] {\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n  color: #646464;\n  /* padding: 0; */\n  line-height: 0;\n}\n.lottery-section .left-side .fixed .block-info p.price strong[data-v-ef92ba72] {\n  color: yellow;\n}\n.lottery-section .left-side .fixed .buttons[data-v-ef92ba72] {\n  width: 250px;\n  padding: 10px 10px 10px 10px;\n  display: flex;\n  justify-content: center;\n}\n.lottery-section .left-side .fixed .buttons .random[data-v-ef92ba72] {\n  height: 55px;\n  background-color: #74b65f;\n  position: relative;\n  cursor: pointer;\n  width: 150px;\n  border: none;\n}\n.lottery-section .left-side .fixed .buttons .random .line[data-v-ef92ba72] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: var(--line-width);\n  background-color: #5fa252;\n  transition: 1s;\n}\n.lottery-section .left-side .fixed .buttons .random[disabled][data-v-ef92ba72] {\n  cursor: progress;\n  background-color: gray !important;\n  transition: 1s;\n}\n.lottery-section .left-side .fixed .buttons .random[disabled] .line[data-v-ef92ba72] {\n  transition: 1s;\n  background-color: lightgray !important;\n}\n.lottery-section .left-side .fixed .buttons .random[disabled] .text[data-v-ef92ba72] {\n  color: #2c3e50 !important;\n  transition: 1s;\n}\n.lottery-section .left-side .fixed .buttons .random .text[data-v-ef92ba72] {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: white;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 10px;\n  box-sizing: border-box;\n  transition: 1s;\n  top: 0;\n  left: 0;\n}\n.lottery-section .left-side .fixed .buttons .buy[data-v-ef92ba72] {\n  height: 55px;\n  border: none;\n  border-radius: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  font-weight: 600;\n  font-size: 12px;\n  color: white;\n  cursor: pointer;\n  width: 150px;\n  padding: 10px;\n  box-sizing: border-box;\n  background-color: #d86a43;\n}\n.lottery-section .right-side[data-v-ef92ba72] {\n  width: 800px;\n  height: auto;\n  padding-bottom: 100px;\n}\n.lottery-section .right-side .lottery[data-v-ef92ba72] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  align-content: space-evenly;\n}\n.lottery-section .right-side .lottery .slot[data-v-ef92ba72] {\n  width: 120px;\n  height: 120px;\n  border: 1px white solid;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  box-shadow: 0px 0px 11px 0px white inset, 0px 0px 2px 0px black;\n  position: relative;\n  background-color: #393939af;\n  cursor: pointer;\n}\n.lottery-section .right-side .lottery .slot[disabled][data-v-ef92ba72] {\n  cursor: progress;\n}\n.lottery-section .right-side .lottery .slot[disabled][data-v-ef92ba72]:after {\n  content: \"\\F023\";\n  font-family: \"Font Awesome 5 Free\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background: #4d4d4dcf;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  color: yellow;\n  font-weight: 900;\n}\n.lottery-section .right-side .lottery .slot div[data-v-ef92ba72] {\n  height: inherit;\n  width: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.lottery-section .right-side .lottery .slot div img[data-v-ef92ba72] {\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .right-side .lottery .slot .number[data-v-ef92ba72] {\n  width: 100%;\n  height: 100%;\n  background-color: #50504f;\n  /* padding: 10px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  color: white;\n  border-radius: 50%;\n}\n@media (max-width: 1090px) {\n.lottery-section[data-v-ef92ba72] {\n    width: 815px;\n}\n.lottery-section .right-side[data-v-ef92ba72] {\n    width: 550px;\n}\n.lottery-section .right-side .lotery[data-v-ef92ba72] {\n    justify-content: center;\n}\n}\n@media (max-width: 850px) {\n.lottery-section[data-v-ef92ba72] {\n    width: 100%;\n}\n}\n@media (max-width: 850px) {\n.lottery-section .left-side[data-v-ef92ba72] {\n    width: 100%;\n    border-bottom: 1px white solid;\n}\n.lottery-section .left-side .fixed[data-v-ef92ba72] {\n    position: relative;\n    top: 0px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.lottery-section .left-side .fixed .controls[data-v-ef92ba72] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.lottery-section .left-side .fixed .controls .mini-btn[data-v-ef92ba72] {\n    width: 40px;\n    height: 40px;\n    margin-left: 5px;\n    margin-right: 5px;\n    padding: 5px;\n}\n.lottery-section .left-side .fixed .buttons[data-v-ef92ba72] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-wrap: nowrap;\n    /* .random,\n     .buy {\n       width: 260px;\n     }*/\n}\n.lottery-section .right-side[data-v-ef92ba72] {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 100%;\n    padding-top: 10px;\n}\n.lottery-section .right-side .lottery[data-v-ef92ba72] {\n    justify-content: center;\n}\n.lottery-section .right-side .lottery .slot[data-v-ef92ba72] {\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n    margin-left: 10px;\n}\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(1):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(2):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(3):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(4):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(5):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(6):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(7):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(8):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(9):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(10):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.3s;\n          animation-delay: 1.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(11):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(12):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(13):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(14):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(15):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(16):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.9s;\n          animation-delay: 1.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(17):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(18):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(19):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.2s;\n          animation-delay: 2.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(20):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.3s;\n          animation-delay: 2.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(21):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(22):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(23):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(24):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(25):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.8s;\n          animation-delay: 2.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(26):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.9s;\n          animation-delay: 2.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(27):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(28):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.1s;\n          animation-delay: 3.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(29):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.2s;\n          animation-delay: 3.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(30):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.3s;\n          animation-delay: 3.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(31):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.4s;\n          animation-delay: 3.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(32):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(33):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.6s;\n          animation-delay: 3.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(34):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.7s;\n          animation-delay: 3.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(35):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.8s;\n          animation-delay: 3.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(36):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.9s;\n          animation-delay: 3.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(37):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(38):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.1s;\n          animation-delay: 4.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(39):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.2s;\n          animation-delay: 4.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(40):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.3s;\n          animation-delay: 4.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(41):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.4s;\n          animation-delay: 4.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(42):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(43):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.6s;\n          animation-delay: 4.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(44):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.7s;\n          animation-delay: 4.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(45):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(46):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.9s;\n          animation-delay: 4.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(47):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(48):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.1s;\n          animation-delay: 5.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(49):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.2s;\n          animation-delay: 5.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(50):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.3s;\n          animation-delay: 5.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(51):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.4s;\n          animation-delay: 5.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(52):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.5s;\n          animation-delay: 5.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(53):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.6s;\n          animation-delay: 5.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(54):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.7s;\n          animation-delay: 5.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(55):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.8s;\n          animation-delay: 5.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(56):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.9s;\n          animation-delay: 5.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(57):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(58):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.1s;\n          animation-delay: 6.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(59):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.2s;\n          animation-delay: 6.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(60):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.3s;\n          animation-delay: 6.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(61):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.4s;\n          animation-delay: 6.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(62):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.5s;\n          animation-delay: 6.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(63):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.6s;\n          animation-delay: 6.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(64):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.7s;\n          animation-delay: 6.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(65):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.8s;\n          animation-delay: 6.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(66):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.9s;\n          animation-delay: 6.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(67):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(68):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.1s;\n          animation-delay: 7.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(69):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.2s;\n          animation-delay: 7.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(70):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.3s;\n          animation-delay: 7.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(71):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.4s;\n          animation-delay: 7.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(72):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.5s;\n          animation-delay: 7.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(73):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.6s;\n          animation-delay: 7.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(74):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.7s;\n          animation-delay: 7.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(75):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.8s;\n          animation-delay: 7.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(76):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.9s;\n          animation-delay: 7.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(77):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(78):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.1s;\n          animation-delay: 8.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(79):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.2s;\n          animation-delay: 8.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(80):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.3s;\n          animation-delay: 8.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(81):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.4s;\n          animation-delay: 8.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(82):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.5s;\n          animation-delay: 8.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(83):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.6s;\n          animation-delay: 8.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(84):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.7s;\n          animation-delay: 8.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(85):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.8s;\n          animation-delay: 8.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(86):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.9s;\n          animation-delay: 8.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(87):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9s;\n          animation-delay: 9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(88):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.1s;\n          animation-delay: 9.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(89):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.2s;\n          animation-delay: 9.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(90):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.3s;\n          animation-delay: 9.3s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(91):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.4s;\n          animation-delay: 9.4s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(92):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.5s;\n          animation-delay: 9.5s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(93):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.6s;\n          animation-delay: 9.6s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(94):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.7s;\n          animation-delay: 9.7s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(95):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.8s;\n          animation-delay: 9.8s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(96):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.9s;\n          animation-delay: 9.9s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(97):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(98):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10.1s;\n          animation-delay: 10.1s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(99):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10.2s;\n          animation-delay: 10.2s;\n}\n.lottery-animation .slot[data-v-ef92ba72]:nth-of-type(100):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot-data-v-ef92ba72;\n          animation-name: AnimSlot-data-v-ef92ba72;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10.3s;\n          animation-delay: 10.3s;\n}\n.lottery-animation .win-slot[data-v-ef92ba72]:before {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 11;\n  background-color: rgba(255, 165, 0, 0.85);\n  -webkit-animation: AnimSlot-data-v-ef92ba72 2s ease-in-out infinite;\n          animation: AnimSlot-data-v-ef92ba72 2s ease-in-out infinite;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  animation-direction: alternate-reverse;\n}\n@-webkit-keyframes AnimSlot-data-v-ef92ba72 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes AnimSlot-data-v-ef92ba72 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.scroll-area-2[data-v-ef92ba72] {\n  width: 100%;\n  height: 350px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.scroll-area-2 .input-group[data-v-ef92ba72] {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.scroll-area-2 .input-group label[data-v-ef92ba72] {\n  color: white;\n  line-height: 150%;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 900;\n}\n.scroll-area-2 .input-group select[data-v-ef92ba72] {\n  border: 2px yellow solid !important;\n  background: #2c3e50 !important;\n  color: white !important;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: 900;\n}\n.scroll-area-2 .input-group select option[data-v-ef92ba72] {\n  color: white !important;\n}\n.card-wrapper[data-v-ef92ba72] {\n  padding: 50px 30px 0px 30px;\n}\n.lot-item[data-v-ef92ba72] {\n  width: 255px;\n  border: 1px yellow solid;\n  height: 350px;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: var(--opacity);\n}\n.lot-item:hover .controlls[data-v-ef92ba72] {\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n.lot-item:hover .price[data-v-ef92ba72] {\n  height: 70px;\n  transition: 0.3s;\n  font-size: 14px;\n}\n.lot-item .controlls[data-v-ef92ba72] {\n  position: absolute;\n  bottom: 80px;\n  right: 0px;\n  display: flex;\n  justify-content: center;\n  height: 59px;\n  width: 100%;\n  z-index: 10;\n  color: white;\n  font-size: 16px;\n  line-height: 120%;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.lot-item .controlls .btn[data-v-ef92ba72]:nth-of-type(1) {\n  border-radius: 5px 0px 0px 5px;\n}\n.lot-item .controlls .btn[data-v-ef92ba72]:nth-of-type(2) {\n  border-radius: 0px 5px 5px 0px;\n}\n.lot-item .controlls .btn.btn-rounded[data-v-ef92ba72] {\n  border-radius: 5px;\n}\n.lot-item .card-info[data-v-ef92ba72] {\n  position: absolute;\n  top: -38px;\n  right: -38px;\n  width: 36px;\n  height: 36px;\n  border-radius: 0% 50% 50% 0%;\n  border: 1px yellow solid;\n  box-shadow: 0px 0px 2px 0px black;\n  z-index: 14;\n  color: white;\n  font-weight: 900;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.3s;\n  background: #2c3e50;\n}\n.lot-item .card-info[data-v-ef92ba72]:hover {\n  transition: 0.3s;\n  background-color: yellow;\n  color: #2c3e50;\n}\n.lot-item .sale[data-v-ef92ba72] {\n  border: 35px solid transparent;\n  border-top: 35px solid yellow;\n  border-right: 35px solid yellow;\n  position: absolute;\n  z-index: 12;\n  top: 0;\n  right: 0;\n}\n.lot-item .sale[data-v-ef92ba72]:after {\n  content: attr(data-sale);\n  position: absolute;\n  top: -17px;\n  right: -29px;\n  color: #2c3e50;\n  font-size: 14px;\n  font-weight: 900;\n  transform: rotate(45deg);\n}\n.lot-item .price[data-v-ef92ba72] {\n  z-index: 14;\n  width: 100%;\n  position: absolute;\n  color: #ffffff;\n  font-weight: bold;\n  bottom: 0px;\n  height: 5px;\n  overflow: hidden;\n  transition: 0.3s;\n  right: 0px;\n  background: rgba(54, 54, 54, 0.56);\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  font-size: 10px;\n  opacity: 1;\n  line-height: 140%;\n}\n.lot-item .price p[data-v-ef92ba72] {\n  width: 32%;\n  display: flex;\n  flex-direction: column;\n}\n.lot-item .price p span[data-v-ef92ba72] {\n  text-transform: uppercase;\n  font-size: 10px;\n  color: yellow;\n}\n.lot-item .price p i[data-v-ef92ba72] {\n  line-height: 150%;\n}\n.lot-item .progress[data-v-ef92ba72] {\n  z-index: 5;\n  position: absolute;\n  font-weight: bold;\n  top: -37px;\n  left: 0px;\n  height: 37px;\n  padding: 10px;\n  color: white;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  background: #2c3e5096;\n}\n.lot-item .progress .info[data-v-ef92ba72] {\n  position: absolute;\n  z-index: 5;\n}\n.lot-item .progress .line[data-v-ef92ba72] {\n  height: 100%;\n  background: #054608ad;\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  width: var(--line-width);\n}\n.lot-item .coins[data-v-ef92ba72],\n.lot-item .item[data-v-ef92ba72] {\n  overflow: hidden;\n  background-color: #2c3e50;\n}\n.lot-item .coins img[data-v-ef92ba72],\n.lot-item .item img[data-v-ef92ba72] {\n  width: 253px;\n  height: 344px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  mix-blend-mode: luminosity;\n}\n.lot-item ul[data-v-ef92ba72] {\n  position: absolute;\n  z-index: 12;\n  width: 100%;\n  border-radius: 5px 0px 0px 0px;\n  top: -38px;\n  border: 1px yellow solid;\n  left: -1px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: white;\n  flex-wrap: wrap;\n  text-transform: uppercase;\n  font-weight: 900;\n}\n.lot-item ul li[data-v-ef92ba72] {\n  padding: 10px;\n  cursor: pointer;\n}\n.lot-item ul li[data-v-ef92ba72]:after {\n  content: \"\\F007\";\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  text-shadow: 1px 1px 1px black;\n}\n.lot-item ul li.active[data-v-ef92ba72] {\n  color: yellow;\n}\n.lot-item ul li[data-v-ef92ba72]:nth-of-type(1):after {\n  content: \"\\F2BB\";\n}\n.lot-item ul li[data-v-ef92ba72]:nth-of-type(2):after {\n  content: \"\\F1DA\";\n}\n.lot-item ul li[data-v-ef92ba72]:nth-of-type(3):after {\n  content: \"\\F007\";\n}\n.lot-item .prices[data-v-ef92ba72] {\n  position: absolute;\n  bottom: 64px;\n  width: 100%;\n  z-index: 14;\n  padding: 0px 30px;\n  box-sizing: border-box;\n  left: 0;\n}\n.lot-item .prices h5[data-v-ef92ba72] {\n  font-size: 20px;\n  font-weight: 900;\n  line-height: 150%;\n  color: yellow;\n  text-transform: uppercase;\n  text-align: center;\n  border-top: 1px yellow solid;\n}\n.lot-item .prices p[data-v-ef92ba72] {\n  color: white;\n  font-size: 16px;\n  font-weight: 900;\n  line-height: 150%;\n  text-align: center;\n}\n.lot-item .console[data-v-ef92ba72] {\n  position: absolute;\n  top: -28px;\n  left: 0px;\n  padding: 0px 10px;\n  font-size: 20px;\n  color: #ffff00;\n  text-shadow: 2px 2px 2px black;\n}\n.lot-item .win[data-v-ef92ba72] {\n  position: absolute;\n  z-index: 12;\n  top: 20px;\n  left: 0;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lot-item .win h1[data-v-ef92ba72] {\n  text-transform: uppercase;\n  color: white;\n  text-shadow: 2px 2px 2px black;\n  font-size: 24px;\n}\n.lot-item .deadline[data-v-ef92ba72] {\n  padding: 20px;\n  position: absolute;\n  z-index: 12;\n  top: -60px;\n  opacity: 0.1;\n  transition: 0.3s;\n  right: -78px;\n  width: 250px;\n  color: #FFEB3B;\n  text-transform: uppercase;\n  text-shadow: 2px 2px 2px black;\n  height: 200px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  transform: scale(0.5);\n}\n.lot-item .deadline[data-v-ef92ba72]:hover {\n  transition: 0.3s;\n  opacity: 1;\n}\n.lot-item .deadline .flip-clock[data-v-ef92ba72] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  box-sizing: border-box;\n}\n.lot-item .deadline .flip-clock .flip-card[data-v-ef92ba72] {\n  font-size: 2.25rem !important;\n}\n.lot-item .deadline .flip-clock .flip-clock__slot[data-v-ef92ba72] {\n  font-size: 12px;\n}\n.lot-item .seller[data-v-ef92ba72] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 170px;\n  left: 0;\n  z-index: 12;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lot-item .seller a img[data-v-ef92ba72] {\n  width: 100%;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.lot-item h3[data-v-ef92ba72] {\n  left: 0px;\n  position: absolute;\n  width: 100%;\n  top: 20px;\n  font-size: 18px;\n}\n.lot-item .buyer[data-v-ef92ba72] {\n  position: absolute;\n  top: -28px;\n  left: 25px;\n  padding: 0;\n  font-size: 18px;\n  color: #03A9F4;\n  text-shadow: 2px 2px 2px black;\n  width: 50px;\n}\n.lot-item .buyer.new-buyer[data-v-ef92ba72] {\n  color: #FF9800;\n}\n.lot-item .cancel[data-v-ef92ba72] {\n  position: relative;\n  z-index: 20;\n  font-size: 72px;\n  color: red;\n  text-shadow: 2px 2px 2px black;\n  cursor: pointer;\n  transition: 0.5s;\n  top: 15px;\n}\n.lot-item .cancel[data-v-ef92ba72]:hover {\n  transition: 0.5s;\n  color: orangered;\n}\n.lot-item .card[data-v-ef92ba72] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: #2c3e50;\n  overflow: hidden;\n}\n.lot-item .card img[data-v-ef92ba72] {\n  width: 253px;\n  height: 350px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  mix-blend-mode: luminosity;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=template&id=ef92ba72&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AucItem.vue?vue&type=template&id=ef92ba72&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper" },
    [
      _vm.auc
        ? _c(
            "div",
            { staticClass: "lot-item", style: _vm.cssProps },
            [
              _vm.auc.lot_type == "2"
                ? _c(
                    "div",
                    {
                      staticClass: "card-info",
                      on: {
                        click: function($event) {
                          return _vm.show("card-show-" + _vm.auc.id)
                        }
                      }
                    },
                    [_vm._v("i\n        ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.auc.lot_type == "1" || _vm.auc.lot_type == "0"
                ? _c(
                    "div",
                    {
                      staticClass: "card-info",
                      on: {
                        click: function($event) {
                          return _vm.show("card-show-item-" + _vm.auc.id)
                        }
                      }
                    },
                    [_vm._v("i\n        ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "card-tabs",
                [
                  _c("card-section", { attrs: { title: "", active: "true" } }, [
                    _vm.user
                      ? _c("div", [
                          _vm.auc.buyer_id != null &&
                          _vm.user.id == _vm.auc.buyer_id
                            ? _c("div", { staticClass: "buyer" }, [
                                _c("i", {
                                  staticClass: "far fa-arrow-alt-circle-up"
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.auc.buyer_id != null &&
                          _vm.user.id != _vm.auc.buyer_id
                            ? _c("div", { staticClass: "buyer new-buyer" }, [
                                _c("i", {
                                  staticClass: "fas fa-exclamation-triangle"
                                })
                              ])
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.auc.lot_type == "2"
                      ? _c("div", { staticClass: "card" }, [
                          _vm.auc.lot.card.image == null
                            ? _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: "/img/item-element.jpg",
                                    expression: "'/img/item-element.jpg'"
                                  }
                                ],
                                attrs: { alt: "" }
                              })
                            : _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value:
                                      "/img/cards/" + _vm.auc.lot.card.image,
                                    expression:
                                      "`/img/cards/${auc.lot.card.image}`"
                                  }
                                ],
                                attrs: { alt: "" }
                              })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.auc.lot_type == "0"
                      ? _c("div", { staticClass: "item" }, [
                          _vm.auc.lot.item.image == null
                            ? _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: "/img/item-element.jpg",
                                    expression: "'/img/item-element.jpg'"
                                  }
                                ],
                                attrs: { alt: "" }
                              })
                            : _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value:
                                      "/img/cards/" + _vm.auc.lot.item.image,
                                    expression:
                                      "`/img/cards/${auc.lot.item.image}`"
                                  }
                                ],
                                attrs: { alt: "" }
                              })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.auc.lot_type == "1"
                      ? _c("div", { staticClass: "coins" }, [
                          _vm.auc.lot.item.image == null
                            ? _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: "/img/coins-element.jpg",
                                    expression: "'/img/coins-element.jpg'"
                                  }
                                ],
                                attrs: { alt: "" }
                              })
                            : _c("img", {
                                directives: [
                                  {
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value:
                                      "/img/cards/" + _vm.auc.lot.item.image,
                                    expression:
                                      "`/img/cards/${auc.lot.item.image}`"
                                  }
                                ],
                                attrs: { alt: "" }
                              })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "price" }, [
                      _c("p", { staticClass: "step-price" }, [
                        _c("span", [_vm._v(" step  ")]),
                        _vm._v(_vm._s(_vm.auc.step_price) + " "),
                        _c("span", [
                          _vm._v(" " + _vm._s(_vm.$lang.games.money) + "  ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bid-price" }, [
                        _c("span", [_vm._v(" bid  ")]),
                        _vm._v(_vm._s(_vm.auc.bid_price) + " "),
                        _c("span", [
                          _vm._v(" " + _vm._s(_vm.$lang.games.money) + "  ")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.auc.buy_price > 0
                        ? _c("p", { staticClass: "buy-price" }, [
                            _c("span", [_vm._v(" buy  ")]),
                            _vm._v(_vm._s(_vm.auc.buy_price) + " "),
                            _c("span", [
                              _vm._v(" " + _vm._s(_vm.$lang.games.money) + "  ")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.auc.buy_price == 0
                        ? _c("p", { staticClass: "buy-price" }, [
                            _c("span", [_vm._v(" buy  ")]),
                            _vm._v(" "),
                            _c("i", { staticClass: "fas fa-infinity" }),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(" " + _vm._s(_vm.$lang.games.money) + "  ")
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm.user && _vm.auc.lifetime != 0 && _vm.auc.buy_price != 0
                      ? _c("div", { staticClass: "controlls" }, [
                          _c(
                            "div",
                            {
                              staticClass: "bid btn btn-yellow",
                              on: {
                                click: function($event) {
                                  return _vm.show("calc-card-" + _vm.auc.id)
                                }
                              }
                            },
                            [_vm._v("Ставка")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "buy btn btn-orange",
                              on: {
                                click: function($event) {
                                  return _vm.buyLot()
                                }
                              }
                            },
                            [_vm._v("Выкуп")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user && _vm.auc.lifetime != 0 && _vm.auc.buy_price == 0
                      ? _c("div", { staticClass: "controlls" }, [
                          _c(
                            "div",
                            {
                              staticClass: "bid btn btn-yellow btn-rounded",
                              on: {
                                click: function($event) {
                                  return _vm.show("calc-card-" + _vm.auc.id)
                                }
                              }
                            },
                            [_vm._v("Ставка")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user && _vm.auc.lifetime == 0 && _vm.auc.buy_price != 0
                      ? _c("div", { staticClass: "controlls" }, [
                          _c(
                            "div",
                            {
                              staticClass: "buy btn btn-yellow btn-rounded",
                              on: {
                                click: function($event) {
                                  return _vm.buyLot()
                                }
                              }
                            },
                            [_vm._v("Выкуп")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user && _vm.auc.lifetime == 0 && _vm.auc.buy_price != 0
                      ? _c("div", { staticClass: "controlls" }, [
                          _c(
                            "div",
                            {
                              staticClass: "buy btn btn-yellow btn-rounded",
                              on: {
                                click: function($event) {
                                  return _vm.buyLot()
                                }
                              }
                            },
                            [_vm._v("Выкуп")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.user
                      ? _c(
                          "div",
                          { staticClass: "controlls" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-yellow ",
                                attrs: { to: "/signin", tag: "button" }
                              },
                              [_c("i", { staticClass: "fas fa-sign-in-alt" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-orange ",
                                attrs: { to: "/signup", tag: "button" }
                              },
                              [_c("i", { staticClass: "fas fa-user-plus" })]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.auc.lifetime != 0
                      ? _c(
                          "div",
                          { staticClass: "deadline" },
                          [
                            _c("flip-countdown", {
                              attrs: { deadline: _vm.prepareDeadline() }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "console" }, [
                      _vm.auc.console_type == 1
                        ? _c("i", { staticClass: "fab fa-playstation" })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.auc.console_type == 0
                        ? _c("i", { staticClass: "fab fa-xbox" })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.controls && _vm.user
                    ? _c(
                        "div",
                        [
                          _vm.user.is_trader
                            ? _c(
                                "card-section",
                                { attrs: { title: "" } },
                                [
                                  _c(
                                    "scroll",
                                    { staticClass: "scroll-area-2" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("label", {
                                            staticClass: "col-form-label",
                                            attrs: {
                                              for: "active-type-" + _vm.auc.id
                                            },
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.$lang.game.active
                                              )
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("toggle", {
                                            attrs: {
                                              check: _vm.auc.is_active == 1,
                                              id: "active-type-" + _vm.auc.id,
                                              labelon: _vm.$lang.game.yes,
                                              labeloff: _vm.$lang.game.no,
                                              width: 120
                                            },
                                            on: {
                                              check: function($event) {
                                                return _vm.setActive($event)
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("label", {
                                            attrs: { for: "lifetime" },
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.$lang.game.lifetime
                                              )
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.selected_lifetime,
                                                  expression:
                                                    "selected_lifetime"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: { id: "lifetime" },
                                              on: {
                                                change: [
                                                  function($event) {
                                                    var $$selectedVal = Array.prototype.filter
                                                      .call(
                                                        $event.target.options,
                                                        function(o) {
                                                          return o.selected
                                                        }
                                                      )
                                                      .map(function(o) {
                                                        var val =
                                                          "_value" in o
                                                            ? o._value
                                                            : o.value
                                                        return val
                                                      })
                                                    _vm.selected_lifetime = $event
                                                      .target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  },
                                                  function($event) {
                                                    return _vm.setLifetime(
                                                      $event
                                                    )
                                                  }
                                                ]
                                              }
                                            },
                                            _vm._l(_vm.lifetime, function(
                                              time
                                            ) {
                                              return _vm.lifetime != null &&
                                                _vm.lifetime.length > 0
                                                ? _c(
                                                    "option",
                                                    {
                                                      domProps: {
                                                        value: time.value
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                    " +
                                                          _vm._s(
                                                            _vm.prepareLifetime(
                                                              time.key
                                                            )
                                                          ) +
                                                          "\n                                "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            }),
                                            0
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("button", {
                                            staticClass: "btn btn-yellow",
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.$lang.game.remove
                                              )
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.remove()
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "card-show-" + _vm.auc.id,
            adaptive: true,
            width: "100%",
            height: "100%"
          }
        },
        [
          _c(
            "scroll",
            { staticClass: "scroll-area" },
            [
              _c("a", {
                staticClass: "close",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    return _vm.hide("card-show-" + _vm.auc.id)
                  }
                }
              }),
              _vm._v(" "),
              _c("card", {
                attrs: { card: _vm.getCard() },
                on: {
                  close: function($event) {
                    return _vm.hide("card-show-" + _vm.auc.id)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "calc-card-" + _vm.auc.id,
            adaptive: true,
            width: "100%",
            height: "100%"
          }
        },
        [
          _c(
            "scroll",
            { staticClass: "scroll-area" },
            [
              _c("a", {
                staticClass: "close",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    return _vm.hide("calc-card-" + _vm.auc.id)
                  }
                }
              }),
              _vm._v(" "),
              _c("calc", {
                attrs: {
                  auc: _vm.auc,
                  buttons: { ok: "Сделать ставку", cancel: "Отменить" },
                  title: "Выбор шага ставки",
                  description: "Позволяет выставить случайный шаг ставки"
                },
                on: {
                  result: function($event) {
                    return _vm.bidLot($event)
                  },
                  close: function($event) {
                    return _vm.hide("calc-card-" + _vm.auc.id)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.auc.lot_type == "1" || _vm.auc.lot_type == "0"
        ? _c(
            "modal",
            {
              attrs: {
                name: "card-show-item-" + _vm.auc.id,
                adaptive: true,
                width: "100%",
                height: "100%"
              }
            },
            [
              _c("scroll", { staticClass: "scroll-area" }, [
                _c("a", {
                  staticClass: "close",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.hide("card-show-item-" + _vm.auc.id)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("h1", [_vm._v(_vm._s(_vm.auc.title))]),
                  _vm._v(" "),
                  _vm.auc.lot.item.description != null
                    ? _c("p", {
                        domProps: {
                          innerHTML: _vm._s(_vm.auc.lot.item.description)
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.auc.lot_type == "1"
                    ? _c("p", [_vm._v(_vm._s(_vm.auc.lot.item.value))])
                    : _vm._e()
                ])
              ])
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AucItem.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AucItem.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AucItem_vue_vue_type_template_id_ef92ba72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AucItem.vue?vue&type=template&id=ef92ba72&scoped=true& */ "./resources/js/components/AucItem.vue?vue&type=template&id=ef92ba72&scoped=true&");
/* harmony import */ var _AucItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AucItem.vue?vue&type=script&lang=js& */ "./resources/js/components/AucItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AucItem_vue_vue_type_style_index_0_id_ef92ba72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true& */ "./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AucItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AucItem_vue_vue_type_template_id_ef92ba72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AucItem_vue_vue_type_template_id_ef92ba72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef92ba72",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AucItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AucItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AucItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AucItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_style_index_0_id_ef92ba72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=style&index=0&id=ef92ba72&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_style_index_0_id_ef92ba72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_style_index_0_id_ef92ba72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_style_index_0_id_ef92ba72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_style_index_0_id_ef92ba72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_style_index_0_id_ef92ba72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./resources/js/components/AucItem.vue?vue&type=template&id=ef92ba72&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/AucItem.vue?vue&type=template&id=ef92ba72&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_template_id_ef92ba72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AucItem.vue?vue&type=template&id=ef92ba72&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AucItem.vue?vue&type=template&id=ef92ba72&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_template_id_ef92ba72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AucItem_vue_vue_type_template_id_ef92ba72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
