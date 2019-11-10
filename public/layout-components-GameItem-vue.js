(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-GameItem-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GameItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-flip-countdown */ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_admin_Card_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/admin/Card.vue */ "./resources/js/components/admin/Card.vue");
/* harmony import */ var vue_simple_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-simple-tabs */ "./node_modules/vue-simple-tabs/src/index.js");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-custom-scrollbar */ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.umd.min.js");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Toggle.vue */ "./resources/js/components/Toggle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['game', 'controls', 'user'],
  data: function data() {
    return {
      active:  false || this.game.active,
      visible:  false || this.game.visible,
      completed:  false || this.game.completed,
      is_only_one:  false || this.game.is_only_one,
      lifetime: this.loadLifetime,
      selected_lifetime: this.game.lifetime
    };
  },
  computed: {
    loadLifetime: function loadLifetime() {
      return this.$store.getters.LIFETIME;
    }
  },
  watch: {
    loadLifetime: function loadLifetime(newValue, oldValue) {
      this.lifetime = newValue;
    }
  },
  methods: {
    prepareLifetime: function prepareLifetime(time) {
      return eval("this.$lang.lifetime.".concat(time));
    },
    remove: function remove() {
      var _this = this;

      axios.post('/lottery/remove', {
        id: this.game.id
      }).then(function (response) {
        _this.message(_this.$lang.game.success_3);

        _this.$store.dispatch("loadGames");

        _this.$store.dispatch("loadDrafts");

        document.querySelectorAll(".lot-item ul li:nth-of-type(1)").forEach(function (a) {
          a.click();
        });
      })["catch"](function (error) {
        _this.message(_this.$lang.game.error_2);
      });
      this.message(this.$lang.game.success_2);
    },
    setLifetime: function setLifetime(event) {
      this.selected_lifetime = event.target.value;
      this.save();
    },
    setIsOnlyOne: function setIsOnlyOne(onlyOne) {
      this.is_only_one = onlyOne;
      this.save();
    },
    setCompleted: function setCompleted(completed) {
      this.completed = completed;
      this.save();
    },
    setVisible: function setVisible(visible) {
      this.visible = visible;
      this.save();
    },
    setActive: function setActive(active) {
      this.active = active;
      this.save();
    },
    save: function save() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('id', this.game.id);
      formData.append('is_only_one', this.is_only_one ? 1 : 0);
      formData.append('completed', this.completed ? 1 : 0);
      formData.append('visible', this.visible ? 1 : 0);
      formData.append('active', this.active ? 1 : 0);
      formData.append('lifetime', this.selected_lifetime);
      axios.post('/lottery/update', formData).then(function (response) {
        _this2.message(_this2.$lang.game.success_1);

        _this2.$store.dispatch("loadGames");

        _this2.$store.dispatch("loadDrafts");
      })["catch"](function (error) {
        _this2.message(_this2.$lang.game.error_1);
      });
      this.message(this.$lang.game.success_2);
    },
    getCard: function getCard() {
      return this.game.lot.card;
    },
    lotteryOpen: function lotteryOpen() {
      this.$router.push({
        name: 'Lottery',
        params: {
          gameId: this.game.id
        }
      });
    },
    prepareDeadline: function prepareDeadline() {
      var date = Date.parse(this.game.updated_at);
      var time = [1000, 6, 12, 24, 36, 48, 96, 128];
      date = date + time[this.game.lifetime] * 60 * 60 * 1000;
      return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
    },
    lineWidth: function lineWidth(c1, c2) {
      return {
        '--line-width': c1 / c2 * 100 + '%'
      };
    },
    show: function show(name) {
      this.$modal.show(name);
    },
    hide: function hide(name) {
      this.$modal.hide(name);
    },
    message: function message(_message) {
      this.$notify({
        group: 'main',
        type: 'warn',
        title: this.$lang.game.error_title,
        text: _message
      });
    }
  },
  components: {
    Card: _components_admin_Card_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardTabs: vue_simple_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"],
    CardSection: vue_simple_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"],
    FlipCountdown: vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0___default.a,
    Scroll: vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a,
    Toggle: _components_Toggle_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"steelfish\";\n  src: url(/fonts/steelfish/steelfish.eot);\n  src: url(/fonts/steelfish/steelfish.eot?#iefix) format(\"embedded-opentype\"), url(/fonts/steelfish/steelfish.woff2) format(\"woff2\"), url(/fonts/steelfish/steelfish.woff) format(\"woff\"), url(/fonts/steelfish/steelfish.ttf) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Bebas\";\n  src: url(/fonts/BebasNeueBold.eot);\n  src: url(/fonts/BebasNeueBold.eot?#iefix) format(\"embedded-opentype\"), url(/fonts/BebasNeueBold.woff2) format(\"woff2\"), url(/fonts/BebasNeueBold.woff) format(\"woff\"), url(/fonts/BebasNeueBold.ttf) format(\"truetype\");\n  font-style: normal;\n}\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\nbutton:focus,\ntextarea:focus,\nselect:focus,\ninput:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close:hover {\n  opacity: 1;\n}\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close:before {\n  transform: rotate(45deg);\n}\n.close:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay {\n  background: rgba(0, 0, 0, 0.999);\n  min-height: 100%;\n}\n.v--modal-overlay .v--modal-background-click {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.tabs-component {\n  width: 100%;\n}\n.tabs-component .tabs-component-tabs {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n@media (max-width: 880px) {\n.tabs-component .tabs-component-tabs {\n    justify-content: center;\n}\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab {\n  padding: 10px;\n  border-bottom: 2px transparent solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-active {\n  border-bottom: 2px yellow solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab .tabs-component-tab-a {\n  color: white;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 12px;\n  text-transform: uppercase;\n  position: relative;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-disabled .tabs-component-tab-a {\n  color: gray;\n}\n.tabs-component .tabs-component-panels .tabs-component-panel .scroll-area {\n  padding: 20px 0px 100px 0px;\n}\n.ncard,\n.ncard .backplate {\n  margin: auto;\n  z-index: 10;\n  cursor: pointer;\n  overflow: hidden;\n  background-size: contain;\n}\n.ncard .card-empty,\n.card-19-empty {\n  background: url(https://hutdb.net/assets/img/cards/19/xempty-19.png.pagespeed.ic.aMWM7AwyAx.webp);\n}\n.card-19-empty {\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n}\n.ncard .sgold {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold.png.pagespeed.ic.tufKkK0v4G.webp);\n}\n.ncard .sgold_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold_tag.png.pagespeed.ic.YleI5BHsyy.webp);\n}\n.ncard .ssilver {\n  background: url(https://hutdb.net/assets/img/cards/19/ssilver.png.pagespeed.ce.Sh4c_i51Te.png);\n}\n.ncard .ssilver_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xssilver_tag.png.pagespeed.ic.m9SbJkSgf_.webp);\n}\n.ncard .sbronze {\n  background: url(https://hutdb.net/assets/img/cards/19/xsbronze.png.pagespeed.ic.50Mj3Z9mZ5.webp);\n}\n.ncard .sbronze_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xsbronze_tag.png.pagespeed.ic.Cm_pDlUERt.webp);\n}\n.ncard .gold,\n.ncard .silver,\n.ncard .bronze {\n  background: url(https://hutdb.net/assets/img/cards/19/common.png.pagespeed.ce.w6gVJnZfVD.png);\n}\n.ncard .gold_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xgold_tag.png.pagespeed.ic.EcyAEWTD29.webp);\n}\n.ncard .silver_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xsilver_tag.png.pagespeed.ic.8-mUkkH55R.webp);\n}\n.ncard .bronze_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xbronze_tag.png.pagespeed.ic.TZFQ5vav2s.webp);\n}\n.ncard .gold_footer {\n  background: url(https://hutdb.net/assets/img/cards/19/xgold_footer.png.pagespeed.ic.u0Hsy6rzEZ.webp);\n}\n.ncard .silver_footer {\n  background: url(https://hutdb.net/assets/img/cards/19/xsilver_footer.png.pagespeed.ic.JicugInsOL.webp);\n}\n.ncard .bronze_footer {\n  background: url(https://hutdb.net/assets/img/cards/19/xbronze_footer.png.pagespeed.ic.son4mSaWYf.webp);\n}\n.ncard .alumni {\n  background: url(https://hutdb.net/assets/img/cards/19/xalumni-bg.png.pagespeed.ic.YL2zihnXhx.webp);\n}\n.ncard .totw_gold {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_gold.png.pagespeed.ce.-U-XX7Hz1O.png);\n}\n.ncard .totw_gold_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_gold_tag.png.pagespeed.ic.Ie1_aLEAuR.webp);\n}\n.ncard .totw_gold_footer {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_gold_footer.png);\n}\n.ncard .totw_gold_line {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_gold_line.png);\n}\n.ncard .totw_silver {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_silver.png.pagespeed.ce.P60tprdykv.png);\n}\n.ncard .totw_silver_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_silver_tag.png.pagespeed.ic.jD9Nr4zps9.webp);\n}\n.ncard .totw_silver_footer {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_silver_footer.png);\n}\n.ncard .totw_silver_line {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_silver_line.png);\n}\n.ncard .totw_bronze {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_bronze.png.pagespeed.ce.L2JZH9sSVk.png);\n}\n.ncard .totw_bronze_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_bronze_tag.png.pagespeed.ic.i7RwgHOuNB.webp);\n}\n.ncard .totw_bronze_footer {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_bronze_footer.png);\n}\n.ncard .totw_bronze_line {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_bronze_line.png);\n}\n.ncard .gat {\n  background: url(https://hutdb.net/assets/img/cards/19/gat.png.pagespeed.ce.fz5jPOCIrU.png);\n}\n.ncard .hwn {\n  background: url(https://hutdb.net/assets/img/cards/19/hwn.png.pagespeed.ce.K0K6xTXDYe.png);\n}\n.ncard .evo {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/evo.png.pagespeed.ce.N_SFhLLX7j.png);\n}\n.ncard .evo_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/xtag.png.pagespeed.ic.vcXKFhtKVF.webp);\n}\n.ncard .evo2 {\n  background: url(https://hutdb.net/assets/img/cards/19/evo2/xevo2.png.pagespeed.ic.aQa-SY0pjx.webp);\n}\n.ncard .evo2_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/evo2/xtag.png.pagespeed.ic.HrJWlHJAe-.webp);\n}\n.ncard .cs {\n  background: url(https://hutdb.net/assets/img/cards/19/cs.png.pagespeed.ce.TlE6be1KEU.png);\n  background-size: cover;\n}\n.ncard .cs_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xcs_tag.png.pagespeed.ic.T13q6iqGwV.webp);\n}\n.ncard .pt {\n  background: url(https://hutdb.net/assets/img/cards/19/xpt.png.pagespeed.ic.9HSMhQLxwg.webp);\n}\n.ncard .pt_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xpt_tag.png.pagespeed.ic.c4BkE9Zf_b.webp);\n}\n.ncard .ms {\n  background: url(https://hutdb.net/assets/img/cards/19/ms/xms.png.pagespeed.ic.EvzPj-OpmW.webp);\n}\n.ncard .ms_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/ms/xtag.png.pagespeed.ic.1F67LnKutr.webp);\n}\n.ncard .tg {\n  background: url(https://hutdb.net/assets/img/cards/19/tg/xtg.png.pagespeed.ic.WgdhVCpnGi.webp);\n}\n.ncard .tg_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/tg/xtag.png.pagespeed.ic.nDdqED5RjM.webp);\n}\n.ncard .xmas {\n  background: url(https://hutdb.net/assets/img/cards/19/xmas/xmas.png);\n}\n.ncard .xmas_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/xmas/xtag.png.pagespeed.ic.paF-MP0saM.webp);\n}\n.ncard .gscsi {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscsi.png.pagespeed.ic.4enTelZeac.webp);\n}\n.ncard .gscse {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscse.png.pagespeed.ic.D4rpZ4Hjhd.webp);\n}\n.ncard .gscfi {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscfi.png.pagespeed.ic.MUUVfflGEv.webp);\n}\n.ncard .gscge {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscge.png.pagespeed.ic.bybpQgNfvN.webp);\n}\n.ncard .gscsi_swipe {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscsi_swipe.png.pagespeed.ic.69llzCf3CM.webp);\n}\n.ncard .gscse_swipe {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscse_swipe.png.pagespeed.ic.aKOPw0JtaS.webp);\n}\n.ncard .gscfi_swipe {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscfi_swipe.png.pagespeed.ic.MF1UVMWzNE.webp);\n}\n.ncard .gscge_swipe {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscge_swipe.png.pagespeed.ic.MLFzxSKciR.webp);\n}\n#my-card-list {\n  height: 500px;\n  overflow-y: scroll;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n#my-card-list .card-wrap,\n#my-card-list .ncard .backplate,\n#my-card-list .ncard {\n  width: 136px;\n  height: 190px;\n  font-size: 10px;\n}\n.quick-search,\n.ncard,\n.ncard .backplate,\n.card-wrap {\n  width: 240px;\n  height: 340px;\n  font-size: 20px;\n  background: linear-gradient(135deg, #4c4c4c 0%, #595959 12%, #666666 25%, #474747 39%, #2c2c2c 45%, black 53%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%);\n}\n@media (min-width: 1550px) {\n.tb2 .quick-search,\n.scale .ncard,\n.scale .ncard .backplate {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1400px) and (max-width: 1550px) {\n.tb2 .quick-search,\n.scale .ncard,\n.scale .ncard .backplate {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1250px) and (max-width: 1399px) {\n.tb2 .quick-search,\n.scale .ncard,\n.scale .ncard .backplate {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1249px) {\n.quick-search,\n.scale .ncard,\n.scale .ncard .backplate {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n.quick-search,\n.scale .ncard,\n.scale .ncard .backplate {\n    width: 113px;\n    height: 160px;\n    font-size: 10.5px;\n}\n}\n@media (min-width: 320px) and (max-width: 767px) {\n.quick-search,\n.scale .ncard,\n.scale .ncard .backplate {\n    width: 99px;\n    height: 140px;\n    font-size: 8px;\n}\n}\n.ncard .tag {\n  background-size: cover;\n  height: 50%;\n  width: 100%;\n  z-index: 5;\n}\n.ncard .top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: transparent !important;\n}\n.ncard .cardtype {\n  position: absolute;\n  left: 1em;\n  font-size: 0.9em;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  top: 0.3em;\n  letter-spacing: 0.04em;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  opacity: 0.7;\n  width: 3em;\n  z-index: 3;\n  text-align: center;\n}\n.ncard .texture {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold_texture.png.pagespeed.ic._ouLXX8XYR.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n}\n.ncard .background {\n  position: absolute;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 3;\n}\n.ncard .backplate {\n  position: absolute;\n}\n.ncard .overall,\n.ncard .overall2 {\n  position: absolute;\n  font-family: \"steelfish\";\n  font-size: 3.3em;\n  line-height: 1;\n  color: white;\n  font-weight: normal;\n  z-index: 5;\n  top: 0.58em;\n  left: 0.35em;\n  transform: scale(1, 1.1);\n}\n.ncard .overall2 {\n  left: 8.5% !important;\n}\n.ncard .name {\n  position: absolute;\n  font-size: 1.4em;\n  color: white;\n  text-align: center;\n  width: 100%;\n  z-index: 4;\n  top: 56%;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  font-style: italic;\n  left: 4%;\n}\n.ncard .team,\n.ncard .team-right {\n  position: absolute;\n  z-index: 5;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  font-size: 0.4em;\n  bottom: 23.5%;\n  font-weight: 800;\n  color: #fff;\n  font-style: italic;\n  LINE-HEIGHT: 100%;\n}\n.ncard .team {\n  left: 8%;\n}\n.ncard .team-right {\n  right: 1.3em;\n}\n.ncard .firstname {\n  width: 100%;\n  text-align: left;\n  line-height: 0.5em;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-left: 4%;\n  font-weight: normal;\n}\n.ncard .lastname {\n  width: 100%;\n  text-align: left;\n  font-weight: bold;\n  font-size: 1.3em;\n  transform: translate(0.15em, 0.3em);\n}\n.ncard .headshot {\n  height: 50%;\n  width: 100%;\n  z-index: 5;\n  -webkit-filter: brightness(1.15);\n          filter: brightness(1.15);\n  background-size: cover;\n  background-position: -90%;\n  background-repeat: no-repeat;\n}\n.ncard .logo-backdrop {\n  width: 100%;\n  height: 60%;\n  background-repeat: no-repeat;\n  background-position: center 20%;\n  background-size: 100%;\n  z-index: 3;\n  opacity: 0.2;\n  mix-blend-mode: overlay;\n}\n.ncard .attributes {\n  display: flex;\n  position: absolute;\n  bottom: 1.75em;\n  width: 72%;\n  color: white;\n  z-index: 3;\n  padding: 0 1em;\n  text-align: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  font-style: italic;\n}\n.ncard .attributes-right {\n  right: 0.4em;\n}\n.ncard .attributes .attr-name {\n  width: 17%;\n  font-size: 0.55em;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  margin-left: 0%;\n  text-align: right;\n  color: #797979;\n}\n.ncard .attributes .attr-value {\n  width: 17%;\n  font-size: 1.2em;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  left: -0.2em;\n  position: relative;\n  line-height: 0.9em;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n}\n.ncard .logo {\n  width: 48%;\n  height: 40%;\n  position: absolute;\n  z-index: 6;\n  right: -17%;\n  top: 55%;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.ncard .info,\n.ncard .info2 {\n  position: absolute;\n  top: 51%;\n  font-size: 0.6em;\n  z-index: 5;\n  letter-spacing: 0;\n  font-weight: bold;\n  color: #000;\n  text-align: right;\n  right: 1.4em;\n}\n.ncard .info div,\n.ncard .info2 div {\n  display: inline-block;\n}\n.ncard .info .bullet,\n.ncard .info2 .bullet {\n  margin: 0;\n  width: 3px;\n  height: 2px;\n  border-radius: 0;\n  transform: translateY(-3px);\n  background: #000;\n}\n.ncard .logo-bottom {\n  background-size: contain;\n  position: absolute;\n  bottom: 0.8em;\n  left: 0.65em;\n  height: 2.3em;\n  width: 2.3em;\n  z-index: 7;\n}\n.ncard .footer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0.25em;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  z-index: 4;\n  background-size: 100%;\n}\n.totw-attributes {\n  transform: rotate(-16deg);\n  bottom: 15% !important;\n  right: -0.5em;\n}\n.totw-team {\n  transform: rotate(-16deg);\n  bottom: 31% !important;\n  right: 1.5em !important;\n}\n.totw-name {\n  transform: rotate(-16deg);\n  top: 63.5% !important;\n  left: -0.5em !important;\n  text-align: right !important;\n  font-size: 1.2em !important;\n}\n.totw-logo {\n  bottom: 1em !important;\n  left: 1.5em !important;\n}\n.totw_text {\n  opacity: 1 !important;\n  mix-blend-mode: unset !important;\n  background-position: top !important;\n}\n.totw_line {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: 2em;\n}\n.totw_footer {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  bottom: 0;\n  right: -0.5em;\n}\n.totw_info {\n  right: unset !important;\n  transform: rotate(-16deg) !important;\n  top: 61% !important;\n  left: 5.5em !important;\n  color: #e1c885 !important;\n}\n.totw_overall {\n  transform: rotate(-14deg) !important;\n  font-style: italic !important;\n  left: 0.25em !important;\n  top: 0.6em !important;\n}\n.totw_cardtype {\n  transform: rotate(-14deg) !important;\n  font-style: italic !important;\n  font-size: 0.75em !important;\n  left: 1.3em !important;\n}\n.totw_gold_color {\n  color: #d8bf7c !important;\n}\n.totw_bronze_color {\n  color: #ecc5a4 !important;\n}\n.totw_silver_color {\n  color: #e1e1e1 !important;\n}\n.ncard .alm .info {\n  top: 5px;\n  color: #fff;\n}\n.ncard .alm .logo-backdrop {\n  mix-blend-mode: normal;\n  opacity: 0.3 !important;\n}\n.alumni-overlay {\n  background: url(https://hutdb.net/assets/img/cards/19/xalumni-overlay.png.pagespeed.ic.2a_3M6NXyg.webp) no-repeat;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 7;\n  background-size: contain;\n}\n.ncard .alm .alm-tag {\n  z-index: 8;\n}\n.ncard .alm .alm-overall {\n  left: 8%;\n  top: 7%;\n  color: #fff;\n  font-size: 4em;\n}\n.alm-logo {\n  width: 16%;\n  height: 15%;\n  position: absolute;\n  z-index: 9;\n  right: 6%;\n  top: 44%;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-filter: brightness(1.2) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.95));\n          filter: brightness(1.2) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.95));\n}\n.ncard .alm .alm-name {\n  top: 60.5%;\n  left: -3%;\n  color: #fff;\n}\n.ncard .alm .alm-name .firstname,\n.ncard .alm .alm-name .lastname {\n  text-align: center;\n}\n.ncard .alm .alm-headshot {\n  height: 43%;\n  width: 80%;\n  left: 1.8em;\n  top: 1em;\n  background-position: center;\n}\n.ncard .alm .alm-team {\n  position: absolute;\n  z-index: 5;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  font-size: 0.48em;\n  bottom: 46%;\n  font-weight: 800;\n  color: #fff;\n  font-style: italic;\n  width: 100%;\n  left: 0%;\n  text-align: center;\n}\n.ncard .alm.backplate .alm-attributes {\n  display: flex;\n  position: absolute;\n  bottom: 6.15%;\n  width: 100%;\n  color: #fff;\n  z-index: 3;\n  padding: 0 10%;\n  text-align: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  font-style: italic;\n}\n.alm .alm-attributes.attributes .attr-value {\n  line-height: 1.8em;\n}\n.ncard .alm .alm-attributes.attributes .attr-name {\n  text-align: left;\n  padding-left: 3%;\n  color: #fff;\n}\n.no-opacity {\n  opacity: 1;\n}\n.hc-logo {\n  bottom: -2% !important;\n  height: 23% !important;\n  width: 23% !important;\n  background-repeat: no-repeat !important;\n}\n.hc-team {\n  font-size: 0.6em !important;\n  bottom: 22% !important;\n  right: 10% !important;\n}\n.hc-ovr {\n  top: 7% !important;\n}\n.ncard .hc .attributes .attr-name,\n.ncard .hc .attributes .attr-value,\n.ncard .hc .team-right,\n.ncard .hc .cardtype {\n  color: #000;\n}\n.ncard .hc .attributes,\n.ncard .cs .attributes,\n.ncard .pt .attributes {\n  bottom: 8%;\n}\n.ncard .cs .logo-backdrop {\n  opacity: 0.5;\n}\n.ncard .cs .attributes .attr-name,\n.ncard .cs .attributes .attr-value,\n.ncard .cs .team-right,\n.ncard .cs .name,\n.ncard .cs .info,\n.ncard .cs .cardtype {\n  color: #fff;\n}\n.ncard .cs .cardtype {\n  color: #000;\n}\n.cs-team {\n  font-size: 0.6em !important;\n  bottom: 21.5% !important;\n  right: 10% !important;\n  color: #000 !important;\n}\n.cs-ovr {\n  top: 17% !important;\n}\n.ncard .pt .logo-backdrop {\n  opacity: 0.5;\n}\n.ncard .pt .attributes .attr-name,\n.ncard .pt .attributes .attr-value,\n.ncard .pt .team-right,\n.ncard .pt .name,\n.ncard .pt .info,\n.ncard .pt .cardtype {\n  color: #fff;\n}\n.ncard .pt .cardtype {\n  color: #000;\n}\n.pt-team {\n  font-size: 0.6em !important;\n  bottom: 21.5% !important;\n  right: 10% !important;\n  color: #fff !important;\n}\n.pt-ovr {\n  top: 17% !important;\n}\n.ncard .gat-headshot,\n.ncard .evo-headshot {\n  z-index: 2 !important;\n}\n.ncard .hwn-headshot {\n  z-index: 3 !important;\n}\n.gat-team,\n.evo-team,\n.hwn-team {\n  font-size: 0.6em !important;\n  bottom: 22% !important;\n  right: 10% !important;\n  color: #fff !important;\n}\n.ncard .hwn-attr {\n  color: #fff !important;\n}\n.ncard.gat-wrap .attributes .attr-name,\n.ncard.evo-wrap .attributes .attr-name,\n.ncard.hwn-wrap .attributes .attr-name {\n  color: #000;\n}\n.ncard.gat-wrap .attributes .attr-value,\n.ncard.gat-wrap .name,\n.ncard.gat-wrap .info .bullet {\n  color: #fff;\n}\n.ncard.gat-wrap .overall {\n  font-weight: 800;\n  font-style: italic;\n  color: #fff;\n  top: 7%;\n  left: 3%;\n}\n.ncard.gat-wrap .info {\n  left: 5%;\n  top: 23%;\n  font-size: 0.4em;\n  color: #fff;\n  right: inherit;\n}\n.ncard.gat-wrap .logo-backdrop,\n.ncard.evo-wrap .logo-backdrop {\n  z-index: 2;\n}\n.gsc-texture {\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n}\n.gat-texture {\n  background: url(https://hutdb.net/assets/img/cards/19/xgat_ol.png.pagespeed.ic.kbJ8EBqWSc.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  mix-blend-mode: color-dodge;\n}\n.evo-texture {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/xoverlay.png.pagespeed.ic.hML-DUqUjC.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n.ncard.evo-wrap .attributes {\n  bottom: 7% !important;\n}\n.ms-texture {\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n}\n.ms-headshot {\n  background-position: 30% !important;\n  top: 3.5% !important;\n}\n.ncard.ms-ol .attributes .attr-name,\n.ncard.ms-ol .attributes .attr-value,\n.ncard.ms-ol .team-right,\n.ncard.ms-ol .name,\n.ncard.ms-ol .cardtype {\n  color: #c6ac66 !important;\n}\n.ncard.ms-ol .name .lastname {\n  font-size: 1em;\n  margin-left: 3.5%;\n  transform: unset;\n}\n.ncard.ms-ol .name {\n  top: 58%;\n}\n.ncard.ms-ol .ms-team {\n  color: #c6ac66;\n  font-size: 0.6em;\n  bottom: 21.5%;\n}\n.ncard.ms-ol .ms-fill {\n  background: red;\n}\n.ncard.ms-ol .ms-logo {\n  right: 5%;\n  top: 59%;\n  height: 20%;\n  width: 30%;\n}\n.ncard.ms-ol .attributes {\n  width: 100%;\n  height: 12%;\n  transform: translateX(4%);\n}\n.ncard.ms-ol .attributes .attr-name {\n  transform: translateX(-150%) translateY(72%);\n  font-size: 0.5em;\n}\n.ncard.ms-ol .overall {\n  left: 6%;\n  font-size: 3em;\n}\n.ncard.ms-ol .info {\n  top: 3%;\n  color: #000;\n}\n.ncard.ms-ol .cardtype {\n  left: 4%;\n  top: 10%;\n  color: #000 !important;\n  font-size: 0.8em;\n}\n.hwn-ct {\n  top: 13% !important;\n  left: 8% !important;\n  font-size: 0.75em !important;\n  color: #000 !important;\n}\n.hwn-team-text {\n  position: absolute;\n  bottom: 15%;\n  right: 2%;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  font-style: italic;\n  font-size: 2em;\n  opacity: 0.3;\n  letter-spacing: 0.05em;\n}\n.gsc-att {\n  bottom: 7% !important;\n  width: 75% !important;\n  padding-right: 0 !important;\n}\n.gsc-att .attr-name {\n  padding-right: 2% !important;\n  padding-bottom: 3% !important;\n}\n.gsc-ovr {\n  top: 18% !important;\n  left: 10% !important;\n}\n.ncard.gscsi-wrap .attributes .attr-name,\n.ncard.gscsi-wrap .cardtype,\n.ncard.gscsi-wrap .info {\n  color: #ccc;\n}\n.ncard.gscsi-wrap .bullet {\n  background: #ccc;\n}\n.ncard.gscsi-wrap .attributes .attr-value,\n.ncard.gscsi-wrap .team-right,\n.ncard.gscsi-wrap .name,\n.ncard.gscsi-wrap .overall {\n  color: #fff;\n}\n.ncard.gscfi-wrap .attributes .attr-name,\n.ncard.gscfi-wrap .cardtype,\n.ncard.gscfi-wrap .info {\n  color: #43c7e7;\n}\n.ncard.gscfi-wrap .bullet {\n  background: #43c7e7;\n}\n.ncard.gscfi-wrap .attributes .attr-value,\n.ncard.gscfi-wrap .team-right,\n.ncard.gscfi-wrap .name,\n.ncard.gscfi-wrap .overall {\n  color: #fff;\n}\n.ncard.gscse-wrap .attributes .attr-name,\n.ncard.gscse-wrap .cardtype,\n.ncard.gscse-wrap .info {\n  color: #004998;\n}\n.ncard.gscse-wrap .bullet {\n  background: #004998;\n}\n.ncard.gscse-wrap .attributes .attr-value,\n.ncard.gscse-wrap .team-right,\n.ncard.gscse-wrap .name,\n.ncard.gscse-wrap .overall {\n  color: #011e41;\n}\n.ncard.gscge-wrap .attributes .attr-name,\n.ncard.gscge-wrap .cardtype,\n.ncard.gscge-wrap .info {\n  color: #fff;\n}\n.ncard.gscge-wrap .bullet {\n  background: #fff;\n}\n.ncard.gscge-wrap .attributes .attr-value,\n.ncard.gscge-wrap .team-right,\n.ncard.gscge-wrap .name,\n.ncard.gscge-wrap .overall {\n  color: #facd01;\n}\n.tg-texture {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  background-image: url(https://hutdb.net/assets/img/cards/19/tg/xoverlay.png.pagespeed.ic.o_dh5pQgX6.webp);\n  z-index: 4;\n  left: 0;\n  height: 100%;\n}\n.ncard.tg_main .headshot {\n  background-position: -20%;\n  top: 5%;\n}\n.ncard.tg_main .logo-backdrop {\n  background-position: center top;\n}\n.ncard.tg_main .attributes {\n  width: 90%;\n  left: 5%;\n  bottom: 8%;\n}\n.ncard.tg_main .overall {\n  color: #fff;\n  left: 11.5%;\n  top: 32%;\n  font-size: 3.1em;\n}\n.ncard.tg_main .team {\n  left: 8%;\n  text-align: left;\n  width: 50%;\n  bottom: 21.5%;\n  color: #000;\n  font-size: 0.45em;\n}\n.ncard.tg_main .info {\n  font-size: 0.45em;\n  bottom: 21.5%;\n  top: inherit;\n  right: 8%;\n}\n.ncard.tg_main .name {\n  color: #000;\n  left: 5%;\n  top: 59%;\n}\n.ncard.tg_main .logo-bottom {\n  width: 3.5em;\n  height: 3.5em;\n  right: 5%;\n  left: inherit;\n  bottom: 25%;\n}\n.ncard.tg_main .attributes .attr-name {\n  color: #000;\n  text-align: left;\n  transform: translateX(0.3em);\n  margin-bottom: 1%;\n}\n.ncard.xmas-wrap .headshot {\n  z-index: 2;\n}\n.ncard.xmas-wrap .logo-backdrop {\n  z-index: 1;\n}\n.ncard.xmas-wrap .overall {\n  left: 12%;\n  font-size: 3em;\n  top: 25%;\n}\n.ncard.xmas-wrap .name {\n  top: 54%;\n  font-size: 1.25em;\n}\n.xmas-top {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.ncard.xmas-wrap .info .bullet {\n  background: #717171;\n}\n.ncard.xmas-wrap .info {\n  color: #717171;\n}\n.ncard.xmas-wrap .attributes .attr-value,\n.ncard.xmas-wrap .team-right,\n.ncard.xmas-wrap .name,\n.ncard .attributes .attr-name,\n.ncard.xmas-wrap .overall {\n  color: #e9e9e9;\n}\n.ncard.xmas-wrap .logo {\n  right: 1%;\n  height: 25%;\n  width: 25%;\n  top: 60%;\n}\n.ncard.xmas-wrap .team {\n  font-size: 0.65em;\n  bottom: 24.75%;\n}\n.ncard.xmas-wrap .cardtype {\n  top: 15%;\n  font-size: 0.75em;\n  left: 11%;\n  color: #fff;\n}\n.ncard .ipotg {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/background.png.pagespeed.ce.PmEXPQUxA_.png);\n}\n.ncard .ipotg_tag {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xtag.png.pagespeed.ic.FGuh0IQT6M.webp);\n  background-size: cover;\n}\n.ncard .ipotg .black-background {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xblack.png.pagespeed.ic.7nqBLXI06W.webp);\n  background-size: cover;\n  top: 0;\n}\n.ncard .ipotg .silver-background {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xsilver.png.pagespeed.ic.QR0TQn3_Pa.webp);\n  background-size: cover;\n  z-index: 4;\n  top: 0;\n}\n.ncard .ipotg .ice-background {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/ice.png.pagespeed.ce.SS0jb_qb_Q.png);\n}\n.ncard.ipotg-wrap .headshot {\n  top: 0;\n  height: 50%;\n  background-position: center;\n  left: 8%;\n  z-index: 3;\n}\n.ncard.ipotg-wrap .logo-fix {\n  top: 0;\n  left: 0;\n}\n.ncard.ipotg-wrap .overall {\n  left: 8%;\n}\n.ncard.ipotg-wrap .cardtype {\n  left: 6%;\n  top: 10%;\n}\n.ncard.ipotg-wrap .attributes-right {\n  z-index: 5;\n}\n.ncard.ipotg-wrap .attributes .attr-name {\n  color: #545454;\n}\n.ncard.ipotg-wrap .ipotg-team {\n  color: #545454;\n  font-size: 0.5em;\n  bottom: 21.5%;\n}\n.ncard.ipotg-wrap .logo-bottom {\n  left: 6%;\n  bottom: 8%;\n}\n.ncard.ipotg-wrap .name {\n  top: 59%;\n}\n.ncard.ipotg-wrap .logo-backdrop {\n  z-index: 2;\n}\n.evo2-wrap.ncard .headshot,\n.evo2-wrap.ncard .logo-backdrop {\n  z-index: 2;\n}\n.evo2-wrap.ncard .cardtype {\n  top: 5%;\n  left: 5.5%;\n}\n.evo2-wrap.ncard .overall {\n  left: 7.5%;\n}\n.evo2-wrap.ncard .cardtype,\n.evo2-wrap.ncard .overall,\n.evo2-wrap.ncard .attributes .attr-value,\n.evo2-wrap.ncard .info,\n.evo2-wrap.ncard .name {\n  color: #fff;\n}\n.evo2-wrap.ncard .info .bullet {\n  background: #fff;\n}\n.evo2-wrap.ncard .attributes {\n  bottom: 7.5%;\n  width: 80%;\n  right: 0%;\n}\n.lottery-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .left-side {\n  width: 265px;\n}\n.lottery-section .left-side .fixed {\n  position: fixed;\n  width: inherit;\n  top: 80px;\n}\n.lottery-section .left-side .fixed .controls {\n  padding: 10px 0px 10px 0px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lottery-section .left-side .fixed .controls .mini-btn {\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  background-color: #2c3e50;\n  padding: 3px;\n  box-sizing: border-box;\n  margin-left: 10px;\n  box-shadow: 0px 0px 2px 0px black;\n}\n.lottery-section .left-side .fixed .controls .mini-btn:hover {\n  transition: 0.5s;\n  box-shadow: 0px 0px 2px 0px black, 0px 0px 5px 0px yellow inset;\n}\n.lottery-section .left-side .fixed .controls .mini-btn img {\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .left-side .fixed .card {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lottery-section .left-side .fixed .block-info {\n  width: 100%;\n  position: relative;\n  background-color: #2c3e50;\n  margin-top: 10px;\n  box-sizing: border-box;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  box-shadow: 0px 0px 2px 0px black;\n}\n.lottery-section .left-side .fixed .block-info .console {\n  position: absolute;\n  right: -35px;\n  top: -35px;\n  width: 70px;\n  height: 70px;\n  border: 4px yellow solid;\n  padding: 10px;\n  background-color: #393939af;\n  box-sizing: border-box;\n  border-radius: 50%;\n  z-index: 12;\n}\n.lottery-section .left-side .fixed .block-info .console img {\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .left-side .fixed .block-info h4 {\n  color: white;\n  text-align: center;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 100;\n}\n.lottery-section .left-side .fixed .block-info p.year {\n  width: 100%;\n  text-align: center;\n  /* line-height: 202%; */\n  font-size: 14px;\n  padding-top: 10px;\n  color: #646464;\n}\n.lottery-section .left-side .fixed .block-info p.price {\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n  color: #646464;\n  /* padding: 0; */\n  line-height: 0;\n}\n.lottery-section .left-side .fixed .block-info p.price strong {\n  color: yellow;\n}\n.lottery-section .left-side .fixed .buttons {\n  width: 100%;\n  padding: 0px 0px 10px 0px;\n}\n.lottery-section .left-side .fixed .buttons .random {\n  height: 55px;\n  background-color: #74b65f;\n  position: relative;\n  cursor: pointer;\n  box-shadow: 1px 1px 5px 0px black;\n}\n.lottery-section .left-side .fixed .buttons .random .line {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: var(--line-width);\n  background-color: #5fa252;\n  transition: 1s;\n}\n.lottery-section .left-side .fixed .buttons .random[disabled] {\n  cursor: progress;\n  background-color: gray !important;\n  transition: 1s;\n}\n.lottery-section .left-side .fixed .buttons .random[disabled] .line {\n  transition: 1s;\n  background-color: lightgray !important;\n}\n.lottery-section .left-side .fixed .buttons .random[disabled] .text {\n  color: #2c3e50 !important;\n  transition: 1s;\n}\n.lottery-section .left-side .fixed .buttons .random .text {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: white;\n  font-weight: 600;\n  font-size: 18px;\n  transition: 1s;\n}\n.lottery-section .left-side .fixed .buttons button {\n  height: 55px;\n  margin-top: 10px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  font-weight: 600;\n  font-size: 18px;\n  width: 100%;\n  /* padding: 20px; */\n  color: white;\n  cursor: pointer;\n  box-shadow: 1px 1px 5px 0px black;\n}\n.lottery-section .left-side .fixed .buttons button.buy {\n  background-color: #d86a43;\n}\n.lottery-section .right-side {\n  width: 800px;\n  height: auto;\n  padding-bottom: 100px;\n}\n.lottery-section .right-side .lottery {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  align-content: space-evenly;\n}\n.lottery-section .right-side .lottery .slot {\n  width: 120px;\n  height: 120px;\n  border: 1px white solid;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  box-shadow: 0px 0px 11px 0px white inset, 0px 0px 2px 0px black;\n  position: relative;\n  background-color: #393939af;\n  cursor: pointer;\n}\n.lottery-section .right-side .lottery .slot[disabled] {\n  cursor: progress;\n}\n.lottery-section .right-side .lottery .slot[disabled]:after {\n  content: \"\\F023\";\n  font-family: \"Font Awesome 5 Free\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background: #4d4d4dcf;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  color: yellow;\n  font-weight: 900;\n}\n.lottery-section .right-side .lottery .slot div {\n  height: inherit;\n  width: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.lottery-section .right-side .lottery .slot div img {\n  width: 100%;\n  height: 100%;\n}\n.lottery-section .right-side .lottery .slot .number {\n  width: 100%;\n  height: 100%;\n  background-color: #50504f;\n  /* padding: 10px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  color: white;\n  border-radius: 50%;\n}\n@media (max-width: 1090px) {\n.lottery-section {\n    width: 815px;\n}\n.lottery-section .right-side {\n    width: 550px;\n}\n.lottery-section .right-side .lotery {\n    justify-content: center;\n}\n}\n@media (max-width: 850px) {\n.lottery-section {\n    width: 100%;\n}\n}\n@media (max-width: 850px) {\n.lottery-section .left-side {\n    width: 100%;\n    border-bottom: 1px white solid;\n}\n.lottery-section .left-side .fixed {\n    position: relative;\n    top: 0px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.lottery-section .left-side .fixed .controls {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.lottery-section .left-side .fixed .controls .mini-btn {\n    width: 40px;\n    height: 40px;\n    margin-left: 5px;\n    margin-right: 5px;\n    padding: 5px;\n}\n.lottery-section .left-side .fixed .buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.lottery-section .left-side .fixed .buttons .random,\n.lottery-section .left-side .fixed .buttons .buy {\n    width: 260px;\n}\n.lottery-section .right-side {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 100%;\n    padding-top: 10px;\n}\n.lottery-section .right-side .lottery .slot {\n    width: 100px;\n    height: 100px;\n    margin-bottom: 10px;\n    margin-left: 10px;\n}\n}\n.lottery-animation .slot:nth-of-type(1):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.lottery-animation .slot:nth-of-type(2):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.lottery-animation .slot:nth-of-type(3):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.lottery-animation .slot:nth-of-type(4):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n.lottery-animation .slot:nth-of-type(5):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.lottery-animation .slot:nth-of-type(6):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n.lottery-animation .slot:nth-of-type(7):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.lottery-animation .slot:nth-of-type(8):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s;\n}\n.lottery-animation .slot:nth-of-type(9):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.lottery-animation .slot:nth-of-type(10):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.3s;\n          animation-delay: 1.3s;\n}\n.lottery-animation .slot:nth-of-type(11):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n.lottery-animation .slot:nth-of-type(12):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.lottery-animation .slot:nth-of-type(13):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s;\n}\n.lottery-animation .slot:nth-of-type(14):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n}\n.lottery-animation .slot:nth-of-type(15):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n.lottery-animation .slot:nth-of-type(16):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 1.9s;\n          animation-delay: 1.9s;\n}\n.lottery-animation .slot:nth-of-type(17):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n.lottery-animation .slot:nth-of-type(18):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s;\n}\n.lottery-animation .slot:nth-of-type(19):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.2s;\n          animation-delay: 2.2s;\n}\n.lottery-animation .slot:nth-of-type(20):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.3s;\n          animation-delay: 2.3s;\n}\n.lottery-animation .slot:nth-of-type(21):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s;\n}\n.lottery-animation .slot:nth-of-type(22):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s;\n}\n.lottery-animation .slot:nth-of-type(23):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n.lottery-animation .slot:nth-of-type(24):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s;\n}\n.lottery-animation .slot:nth-of-type(25):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.8s;\n          animation-delay: 2.8s;\n}\n.lottery-animation .slot:nth-of-type(26):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 2.9s;\n          animation-delay: 2.9s;\n}\n.lottery-animation .slot:nth-of-type(27):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n.lottery-animation .slot:nth-of-type(28):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.1s;\n          animation-delay: 3.1s;\n}\n.lottery-animation .slot:nth-of-type(29):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.2s;\n          animation-delay: 3.2s;\n}\n.lottery-animation .slot:nth-of-type(30):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.3s;\n          animation-delay: 3.3s;\n}\n.lottery-animation .slot:nth-of-type(31):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.4s;\n          animation-delay: 3.4s;\n}\n.lottery-animation .slot:nth-of-type(32):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s;\n}\n.lottery-animation .slot:nth-of-type(33):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.6s;\n          animation-delay: 3.6s;\n}\n.lottery-animation .slot:nth-of-type(34):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.7s;\n          animation-delay: 3.7s;\n}\n.lottery-animation .slot:nth-of-type(35):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.8s;\n          animation-delay: 3.8s;\n}\n.lottery-animation .slot:nth-of-type(36):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 3.9s;\n          animation-delay: 3.9s;\n}\n.lottery-animation .slot:nth-of-type(37):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.lottery-animation .slot:nth-of-type(38):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.1s;\n          animation-delay: 4.1s;\n}\n.lottery-animation .slot:nth-of-type(39):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.2s;\n          animation-delay: 4.2s;\n}\n.lottery-animation .slot:nth-of-type(40):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.3s;\n          animation-delay: 4.3s;\n}\n.lottery-animation .slot:nth-of-type(41):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.4s;\n          animation-delay: 4.4s;\n}\n.lottery-animation .slot:nth-of-type(42):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s;\n}\n.lottery-animation .slot:nth-of-type(43):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.6s;\n          animation-delay: 4.6s;\n}\n.lottery-animation .slot:nth-of-type(44):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.7s;\n          animation-delay: 4.7s;\n}\n.lottery-animation .slot:nth-of-type(45):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s;\n}\n.lottery-animation .slot:nth-of-type(46):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 4.9s;\n          animation-delay: 4.9s;\n}\n.lottery-animation .slot:nth-of-type(47):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n}\n.lottery-animation .slot:nth-of-type(48):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.1s;\n          animation-delay: 5.1s;\n}\n.lottery-animation .slot:nth-of-type(49):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.2s;\n          animation-delay: 5.2s;\n}\n.lottery-animation .slot:nth-of-type(50):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.3s;\n          animation-delay: 5.3s;\n}\n.lottery-animation .slot:nth-of-type(51):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.4s;\n          animation-delay: 5.4s;\n}\n.lottery-animation .slot:nth-of-type(52):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.5s;\n          animation-delay: 5.5s;\n}\n.lottery-animation .slot:nth-of-type(53):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.6s;\n          animation-delay: 5.6s;\n}\n.lottery-animation .slot:nth-of-type(54):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.7s;\n          animation-delay: 5.7s;\n}\n.lottery-animation .slot:nth-of-type(55):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.8s;\n          animation-delay: 5.8s;\n}\n.lottery-animation .slot:nth-of-type(56):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 5.9s;\n          animation-delay: 5.9s;\n}\n.lottery-animation .slot:nth-of-type(57):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s;\n}\n.lottery-animation .slot:nth-of-type(58):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.1s;\n          animation-delay: 6.1s;\n}\n.lottery-animation .slot:nth-of-type(59):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.2s;\n          animation-delay: 6.2s;\n}\n.lottery-animation .slot:nth-of-type(60):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.3s;\n          animation-delay: 6.3s;\n}\n.lottery-animation .slot:nth-of-type(61):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.4s;\n          animation-delay: 6.4s;\n}\n.lottery-animation .slot:nth-of-type(62):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.5s;\n          animation-delay: 6.5s;\n}\n.lottery-animation .slot:nth-of-type(63):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.6s;\n          animation-delay: 6.6s;\n}\n.lottery-animation .slot:nth-of-type(64):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.7s;\n          animation-delay: 6.7s;\n}\n.lottery-animation .slot:nth-of-type(65):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.8s;\n          animation-delay: 6.8s;\n}\n.lottery-animation .slot:nth-of-type(66):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 6.9s;\n          animation-delay: 6.9s;\n}\n.lottery-animation .slot:nth-of-type(67):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.lottery-animation .slot:nth-of-type(68):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.1s;\n          animation-delay: 7.1s;\n}\n.lottery-animation .slot:nth-of-type(69):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.2s;\n          animation-delay: 7.2s;\n}\n.lottery-animation .slot:nth-of-type(70):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.3s;\n          animation-delay: 7.3s;\n}\n.lottery-animation .slot:nth-of-type(71):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.4s;\n          animation-delay: 7.4s;\n}\n.lottery-animation .slot:nth-of-type(72):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.5s;\n          animation-delay: 7.5s;\n}\n.lottery-animation .slot:nth-of-type(73):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.6s;\n          animation-delay: 7.6s;\n}\n.lottery-animation .slot:nth-of-type(74):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.7s;\n          animation-delay: 7.7s;\n}\n.lottery-animation .slot:nth-of-type(75):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.8s;\n          animation-delay: 7.8s;\n}\n.lottery-animation .slot:nth-of-type(76):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 7.9s;\n          animation-delay: 7.9s;\n}\n.lottery-animation .slot:nth-of-type(77):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s;\n}\n.lottery-animation .slot:nth-of-type(78):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.1s;\n          animation-delay: 8.1s;\n}\n.lottery-animation .slot:nth-of-type(79):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.2s;\n          animation-delay: 8.2s;\n}\n.lottery-animation .slot:nth-of-type(80):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.3s;\n          animation-delay: 8.3s;\n}\n.lottery-animation .slot:nth-of-type(81):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.4s;\n          animation-delay: 8.4s;\n}\n.lottery-animation .slot:nth-of-type(82):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.5s;\n          animation-delay: 8.5s;\n}\n.lottery-animation .slot:nth-of-type(83):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.6s;\n          animation-delay: 8.6s;\n}\n.lottery-animation .slot:nth-of-type(84):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.7s;\n          animation-delay: 8.7s;\n}\n.lottery-animation .slot:nth-of-type(85):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.8s;\n          animation-delay: 8.8s;\n}\n.lottery-animation .slot:nth-of-type(86):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 8.9s;\n          animation-delay: 8.9s;\n}\n.lottery-animation .slot:nth-of-type(87):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9s;\n          animation-delay: 9s;\n}\n.lottery-animation .slot:nth-of-type(88):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.1s;\n          animation-delay: 9.1s;\n}\n.lottery-animation .slot:nth-of-type(89):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.2s;\n          animation-delay: 9.2s;\n}\n.lottery-animation .slot:nth-of-type(90):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.3s;\n          animation-delay: 9.3s;\n}\n.lottery-animation .slot:nth-of-type(91):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.4s;\n          animation-delay: 9.4s;\n}\n.lottery-animation .slot:nth-of-type(92):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.5s;\n          animation-delay: 9.5s;\n}\n.lottery-animation .slot:nth-of-type(93):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.6s;\n          animation-delay: 9.6s;\n}\n.lottery-animation .slot:nth-of-type(94):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.7s;\n          animation-delay: 9.7s;\n}\n.lottery-animation .slot:nth-of-type(95):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.8s;\n          animation-delay: 9.8s;\n}\n.lottery-animation .slot:nth-of-type(96):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 9.9s;\n          animation-delay: 9.9s;\n}\n.lottery-animation .slot:nth-of-type(97):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n.lottery-animation .slot:nth-of-type(98):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10.1s;\n          animation-delay: 10.1s;\n}\n.lottery-animation .slot:nth-of-type(99):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10.2s;\n          animation-delay: 10.2s;\n}\n.lottery-animation .slot:nth-of-type(100):after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background-color: rgba(255, 255, 0, 0.81);\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-name: AnimSlot;\n          animation-name: AnimSlot;\n  -webkit-animation-iteration-count: 20;\n          animation-iteration-count: 20;\n  -webkit-animation-delay: 10.3s;\n          animation-delay: 10.3s;\n}\n.lottery-animation .win-slot:before {\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 11;\n  background-color: rgba(255, 165, 0, 0.85);\n  -webkit-animation: AnimSlot 2s ease-in-out infinite;\n          animation: AnimSlot 2s ease-in-out infinite;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  animation-direction: alternate-reverse;\n}\n@-webkit-keyframes AnimSlot {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes AnimSlot {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.scroll-area-2 {\n  width: 100%;\n  height: 350px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.scroll-area-2 .input-group {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.scroll-area-2 .input-group label {\n  color: white;\n  line-height: 150%;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 900;\n}\n.scroll-area-2 .input-group select {\n  border: 2px yellow solid !important;\n  background: #2c3e50 !important;\n  color: white !important;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: 900;\n}\n.scroll-area-2 .input-group select option {\n  color: white !important;\n}\n.card-wrapper {\n  padding: 50px 30px 0px 30px;\n}\n.lot-item {\n  width: 255px;\n  border: 1px yellow solid;\n  height: 350px;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lot-item .controlls {\n  position: absolute;\n  bottom: 0;\n  left: 0px;\n}\n.lot-item .controlls button {\n  color: #2c3e50;\n  background-color: yellow;\n  box-shadow: 1px 0px 2px 0px black;\n  border-radius: 0px 5px 0px 0px;\n  padding: 10px 20px;\n}\n.lot-item .card-info {\n  position: absolute;\n  top: -38px;\n  right: -38px;\n  width: 36px;\n  height: 36px;\n  border-radius: 0% 50% 50% 0%;\n  border: 1px yellow solid;\n  box-shadow: 0px 0px 2px 0px black;\n  /* text-shadow: 1px 1px 1px black; */\n  z-index: 14;\n  color: white;\n  font-weight: 900;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.3s;\n  background: #2c3e50;\n}\n.lot-item .card-info:hover {\n  transition: 0.3s;\n  background-color: yellow;\n  color: #2c3e50;\n}\n.lot-item .sale {\n  border: 35px solid transparent;\n  border-top: 35px solid yellow;\n  border-right: 35px solid yellow;\n  position: absolute;\n  z-index: 14;\n  top: 0;\n  right: 0;\n}\n.lot-item .sale:after {\n  content: attr(data-sale);\n  position: absolute;\n  top: -17px;\n  right: -29px;\n  color: #2c3e50;\n  font-size: 14px;\n  font-weight: 900;\n  transform: rotate(45deg);\n}\n.lot-item .price {\n  z-index: 14;\n  position: absolute;\n  color: #2c3e50;\n  font-weight: bold;\n  bottom: 0px;\n  right: 0px;\n  background: yellow;\n  padding: 10px;\n  border-radius: 5px 0px 0px 0px;\n}\n.lot-item .progress {\n  z-index: 5;\n  position: absolute;\n  font-weight: bold;\n  top: -37px;\n  left: 0px;\n  height: 37px;\n  padding: 10px;\n  color: white;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  background: #2c3e5096;\n}\n.lot-item .progress .info {\n  position: absolute;\n  z-index: 5;\n}\n.lot-item .progress .line {\n  height: 100%;\n  background: #054608ad;\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  width: var(--line-width);\n}\n.lot-item .coins,\n.lot-item .item {\n  overflow: hidden;\n}\n.lot-item .coins img,\n.lot-item .item img {\n  width: 253px;\n  height: 350px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.lot-item ul {\n  position: absolute;\n  z-index: 12;\n  width: 100%;\n  border-radius: 5px 0px 0px 0px;\n  top: -38px;\n  border: 1px yellow solid;\n  left: -1px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: white;\n  flex-wrap: wrap;\n  text-transform: uppercase;\n  font-weight: 900;\n}\n.lot-item ul li {\n  padding: 10px;\n  cursor: pointer;\n}\n.lot-item ul li:after {\n  content: \"\\F007\";\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  text-shadow: 1px 1px 1px black;\n}\n.lot-item ul li.active {\n  color: yellow;\n}\n.lot-item ul li:nth-of-type(1):after {\n  content: \"\\F2BB\";\n}\n.lot-item ul li:nth-of-type(2):after {\n  content: \"\\F1DA\";\n}\n.lot-item ul li:nth-of-type(3):after {\n  content: \"\\F007\";\n}\n.lot-item .prices {\n  position: absolute;\n  bottom: 64px;\n  width: 100%;\n  z-index: 14;\n  padding: 0px 30px;\n  box-sizing: border-box;\n  left: 0;\n}\n.lot-item .prices h5 {\n  font-size: 20px;\n  font-weight: 900;\n  line-height: 150%;\n  color: yellow;\n  text-transform: uppercase;\n  text-align: center;\n  border-top: 1px yellow solid;\n}\n.lot-item .prices p {\n  color: white;\n  font-size: 16px;\n  font-weight: 900;\n  line-height: 150%;\n  text-align: center;\n}\n.lot-item .console {\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  padding: 0px 10px;\n  font-size: 40px;\n  color: #ffff00;\n  text-shadow: 2px 2px 2px black;\n}\n.lot-item .win {\n  position: absolute;\n  z-index: 12;\n  top: 20px;\n  left: 0;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lot-item .win h1 {\n  text-transform: uppercase;\n  color: white;\n  text-shadow: 2px 2px 2px black;\n  font-size: 24px;\n}\n.lot-item .deadline {\n  padding: 20px;\n  position: absolute;\n  z-index: 12;\n  top: 20px;\n  opacity: 0.1;\n  transition: 0.3s;\n  left: 0;\n  width: 100%;\n  color: #FFEB3B;\n  text-transform: uppercase;\n  text-shadow: 2px 2px 2px black;\n  height: 200px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 11px !important;\n}\n.lot-item .deadline:hover {\n  transition: 0.3s;\n  opacity: 1;\n}\n.lot-item .deadline .flip-clock {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  box-sizing: border-box;\n}\n.lot-item .deadline .flip-clock .flip-card {\n  font-size: 2.25rem !important;\n}\n.lot-item .deadline .flip-clock .flip-clock__slot {\n  font-size: 12px;\n}\n.lot-item .seller {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 170px;\n  left: 0;\n  z-index: 12;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lot-item .seller a img {\n  width: 100%;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.lot-item h3 {\n  left: 0px;\n  position: absolute;\n  width: 100%;\n  top: 20px;\n  font-size: 18px;\n}\n.lot-item .buyer {\n  position: absolute;\n  z-index: 14;\n  top: 10px;\n  width: 100%;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lot-item .buyer .user {\n  width: 80px;\n  height: 80px;\n  border: 1px yellow solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d3d3d3c4;\n  box-shadow: 0px 0px 5px 0px black;\n  cursor: pointer;\n  border-radius: 10px 0px;\n  overflow: hidden;\n}\n.lot-item .buyer .user img {\n  width: 100%;\n  height: 100%;\n}\n.lot-item .cancel {\n  position: absolute;\n  z-index: 20;\n  font-size: 72px;\n  color: red;\n  text-shadow: 2px 2px 2px black;\n  cursor: pointer;\n  transition: 0.5s;\n  top: 15px;\n}\n.lot-item .cancel:hover {\n  transition: 0.5s;\n  color: orangered;\n}\n.lot-item .card {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.lot-item .card img {\n  width: 253px;\n  height: 350px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./GameItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=template&id=699f6d10&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GameItem.vue?vue&type=template&id=699f6d10& ***!
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
  return _c("div", { staticClass: "card-wrapper" }, [
    _c(
      "div",
      { staticClass: "lot-item" },
      [
        _c("div", { staticClass: "progress" }, [
          _c("div", {
            staticClass: "line",
            style: _vm.lineWidth(_vm.game.occupied_places, _vm.game.places)
          }),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _vm._v(
              _vm._s(_vm.game.occupied_places) + "/" + _vm._s(_vm.game.places)
            )
          ])
        ]),
        _vm._v(" "),
        _vm.game.lot_type == "2"
          ? _c(
              "div",
              {
                staticClass: "card-info",
                on: {
                  click: function($event) {
                    return _vm.show("card-show-" + _vm.game.id)
                  }
                }
              },
              [_vm._v("i\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.game.lot_type == "1" || _vm.game.lot_type == "0"
          ? _c(
              "div",
              {
                staticClass: "card-info",
                on: {
                  click: function($event) {
                    return _vm.show("card-show-item-" + _vm.game.id)
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
              _vm.game.lot_type == "2"
                ? _c("div", { staticClass: "card" }, [
                    _vm.game.lot.card.image == null
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
                              value: "/img/cards/" + _vm.game.lot.card.image,
                              expression: "`/img/cards/${game.lot.card.image}`"
                            }
                          ],
                          attrs: { alt: "" }
                        })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.game.lot_type == "0"
                ? _c("div", { staticClass: "item" }, [
                    _vm.game.lot.item.image == null
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
                              value: "/img/cards/" + _vm.game.lot.item.image,
                              expression: "`/img/cards/${game.lot.item.image}`"
                            }
                          ],
                          attrs: { alt: "" }
                        })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.game.lot_type == "1"
                ? _c("div", { staticClass: "coins" }, [
                    _vm.game.lot.item.image == null
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
                              value: "/img/cards/" + _vm.game.lot.item.image,
                              expression: "`/img/cards/${game.lot.item.image}`"
                            }
                          ],
                          attrs: { alt: "" }
                        })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.game.base_discount > 0
                ? _c("div", {
                    staticClass: "sale",
                    attrs: { "data-sale": "-" + _vm.game.base_discount + "%" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "price" }, [
                _vm._v(
                  _vm._s(_vm.game.base_price) +
                    " " +
                    _vm._s(_vm.$lang.games.money)
                )
              ]),
              _vm._v(" "),
              _vm.controls
                ? _c("div", { staticClass: "controlls" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-yellow",
                        on: {
                          click: function($event) {
                            return _vm.lotteryOpen()
                          }
                        }
                      },
                      [_vm._v("Open")]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.game.completed != 1 && _vm.game.lifetime != 0
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
              _vm.game.completed == 1
                ? _c("div", { staticClass: "win" }, [
                    _c("h1", {
                      domProps: { innerHTML: _vm._s(_vm.$lang.game.completed) }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "console" }, [
                _vm.game.console_type == 1
                  ? _c("i", { staticClass: "fab fa-playstation" })
                  : _vm._e(),
                _vm._v(" "),
                _vm.game.console_type == 0
                  ? _c("i", { staticClass: "fab fa-xbox" })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.controls && _vm.user.is_trader
              ? _c(
                  "card-section",
                  { attrs: { title: "" } },
                  [
                    _c("scroll", { staticClass: "scroll-area-2" }, [
                      _c(
                        "div",
                        { staticClass: "input-group" },
                        [
                          _c("label", {
                            staticClass: "col-form-label",
                            attrs: { for: "status-completed-" + _vm.game.id },
                            domProps: {
                              innerHTML: _vm._s(_vm.$lang.game.completed)
                            }
                          }),
                          _vm._v(" "),
                          _c("toggle", {
                            attrs: {
                              check: _vm.game.completed == 1 ? true : false,
                              id: "status-completed-" + _vm.game.id,
                              labelon: _vm.$lang.game.yes,
                              labeloff: _vm.$lang.game.no,
                              width: 120
                            },
                            on: {
                              check: function($event) {
                                return _vm.setCompleted($event)
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
                            staticClass: "col-form-label",
                            attrs: { for: "visible-type-" + _vm.game.id },
                            domProps: {
                              innerHTML: _vm._s(_vm.$lang.game.visible)
                            }
                          }),
                          _vm._v(" "),
                          _c("toggle", {
                            attrs: {
                              check: _vm.game.visible == 1 ? true : false,
                              id: "visible-type-" + _vm.game.id,
                              labelon: _vm.$lang.game.yes,
                              labeloff: _vm.$lang.game.no,
                              width: 120
                            },
                            on: {
                              check: function($event) {
                                return _vm.setVisible($event)
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
                            staticClass: "col-form-label",
                            attrs: { for: "active-type-" + _vm.game.id },
                            domProps: {
                              innerHTML: _vm._s(_vm.$lang.game.active)
                            }
                          }),
                          _vm._v(" "),
                          _c("toggle", {
                            attrs: {
                              check: _vm.game.active == 1 ? true : false,
                              id: "active-type-" + _vm.game.id,
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
                            staticClass: "col-form-label",
                            attrs: { for: "only-one-type-" + _vm.game.id },
                            domProps: {
                              innerHTML: _vm._s(_vm.$lang.game.is_only_one)
                            }
                          }),
                          _vm._v(" "),
                          _c("toggle", {
                            attrs: {
                              check: _vm.game.is_only_one == 1 ? true : false,
                              id: "only-one-type-" + _vm.game.id,
                              labelon: _vm.$lang.game.yes,
                              labeloff: _vm.$lang.game.no,
                              width: 120
                            },
                            on: {
                              check: function($event) {
                                return _vm.setIsOnlyOne($event)
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        _c("label", {
                          attrs: { for: "lifetime" },
                          domProps: {
                            innerHTML: _vm._s(_vm.$lang.game.lifetime)
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
                                expression: "selected_lifetime"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "lifetime" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selected_lifetime = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  return _vm.setLifetime($event)
                                }
                              ]
                            }
                          },
                          _vm._l(_vm.lifetime, function(time) {
                            return _vm.lifetime != null &&
                              _vm.lifetime.length > 0
                              ? _c(
                                  "option",
                                  { domProps: { value: time.value } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.prepareLifetime(time.key)) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        _c("button", {
                          staticClass: "btn btn-yellow",
                          domProps: {
                            innerHTML: _vm._s(_vm.$lang.game.remove)
                          },
                          on: {
                            click: function($event) {
                              return _vm.remove()
                            }
                          }
                        })
                      ])
                    ])
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "modal",
          {
            attrs: {
              name: "card-show-" + _vm.game.id,
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
                      return _vm.hide("card-show-" + _vm.game.id)
                    }
                  }
                }),
                _vm._v(" "),
                _c("card", {
                  attrs: { card: _vm.getCard() },
                  on: {
                    close: function($event) {
                      return _vm.hide("card-show-" + _vm.game.id)
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
        _vm.game.lot_type == "1" || _vm.game.lot_type == "0"
          ? _c(
              "modal",
              {
                attrs: {
                  name: "card-show-item-" + _vm.game.id,
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
                        return _vm.hide("card-show-item-" + _vm.game.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("h1", [_vm._v(_vm._s(_vm.game.title))]),
                    _vm._v(" "),
                    _vm.game.lot.item.description != null
                      ? _c("p", {
                          domProps: {
                            innerHTML: _vm._s(_vm.game.lot.item.description)
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.game.lot_type == "1"
                      ? _c("p", [_vm._v(_vm._s(_vm.game.lot.item.value))])
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/GameItem.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/GameItem.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameItem_vue_vue_type_template_id_699f6d10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameItem.vue?vue&type=template&id=699f6d10& */ "./resources/js/components/GameItem.vue?vue&type=template&id=699f6d10&");
/* harmony import */ var _GameItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameItem.vue?vue&type=script&lang=js& */ "./resources/js/components/GameItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GameItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameItem.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GameItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GameItem_vue_vue_type_template_id_699f6d10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GameItem_vue_vue_type_template_id_699f6d10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GameItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GameItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/GameItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GameItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./GameItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/GameItem.vue?vue&type=template&id=699f6d10&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/GameItem.vue?vue&type=template&id=699f6d10& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_template_id_699f6d10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GameItem.vue?vue&type=template&id=699f6d10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GameItem.vue?vue&type=template&id=699f6d10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_template_id_699f6d10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GameItem_vue_vue_type_template_id_699f6d10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);