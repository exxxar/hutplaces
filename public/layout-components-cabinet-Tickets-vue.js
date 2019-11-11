(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-components-cabinet-Tickets-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Tickets.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["win"],
  activated: function activated() {
    this.loadLotteries(); //this.loadContent()
  },
  mounted: function mounted() {
    var _this = this;

    Event.$on('updateLotteries', function () {
      _this.loadLotteries();
    });
  },
  methods: {
    loadContent: function loadContent() {
      var _this2 = this;

      var url = this.win ? '/content/wins/all' : '/content/lotteries/all';
      axios.get(url).then(function (response) {
        _this2.content = response.data.content;
      });
    },
    loadLotteries: function loadLotteries() {
      var _this3 = this;

      var url = this.win ? "/users/wins/".concat(auth.user.id) : "/users/lotteries/".concat(auth.user.id);
      axios.get(url).then(function (response) {
        _this3.lotteries = response.data.lotteries;
      });
    },
    prepareCard: function prepareCard(lottery) {
      return JSON.parse(lottery.lot.card.Card_data).value;
    },
    lineWidth: function lineWidth(c1, c2) {
      return {
        '--line-width': c1 / c2 * 100 + '%'
      };
    },
    lotteryOpen: function lotteryOpen(lotteryId) {
      this.$router.push({
        name: 'Lottery',
        params: {
          gameId: lotteryId
        }
      });
    }
  },
  data: function data() {
    return {
      content: {
        title: "Выигранные рандомы",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
      },
      lotteries: null
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n*[data-v-7e8d1295] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\nbutton[data-v-7e8d1295]:focus,\ntextarea[data-v-7e8d1295]:focus,\nselect[data-v-7e8d1295]:focus,\ninput[data-v-7e8d1295]:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close[data-v-7e8d1295] {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close[data-v-7e8d1295]:hover {\n  opacity: 1;\n}\n.close[data-v-7e8d1295]:before, .close[data-v-7e8d1295]:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close[data-v-7e8d1295]:before {\n  transform: rotate(45deg);\n}\n.close[data-v-7e8d1295]:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop[data-v-7e8d1295] {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop[data-v-7e8d1295]:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area[data-v-7e8d1295] {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge[data-v-7e8d1295] {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification[data-v-7e8d1295] {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn[data-v-7e8d1295] {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error[data-v-7e8d1295] {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success[data-v-7e8d1295] {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay[data-v-7e8d1295] {\n  background: rgba(0, 0, 0, 0.999);\n}\n.v--modal-overlay .v--modal-background-click[data-v-7e8d1295] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal[data-v-7e8d1295] {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable[data-v-7e8d1295] {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x[data-v-7e8d1295]:hover,\n.ps .ps__rail-y[data-v-7e8d1295]:hover,\n.ps .ps__rail-x[data-v-7e8d1295]:focus,\n.ps .ps__rail-y[data-v-7e8d1295]:focus,\n.ps .ps__rail-x.ps--clicking[data-v-7e8d1295],\n.ps .ps__rail-y.ps--clicking[data-v-7e8d1295] {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y[data-v-7e8d1295],\n.ps__rail-y:focus > .ps__thumb-y[data-v-7e8d1295],\n.ps__rail-y.ps--clicking .ps__thumb-y[data-v-7e8d1295] {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading][data-v-7e8d1295] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error][data-v-7e8d1295] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.ncard[data-v-7e8d1295],\n.ncard .backplate[data-v-7e8d1295] {\n  margin: auto;\n  z-index: 10;\n  cursor: pointer;\n  overflow: hidden;\n  background-size: contain;\n}\n.ncard .card-empty[data-v-7e8d1295],\n.card-19-empty[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xempty-19.png.pagespeed.ic.aMWM7AwyAx.webp);\n}\n.card-19-empty[data-v-7e8d1295] {\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n}\n.ncard .sgold[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold.png.pagespeed.ic.tufKkK0v4G.webp);\n}\n.ncard .sgold_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold_tag.png.pagespeed.ic.YleI5BHsyy.webp);\n}\n.ncard .ssilver[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ssilver.png.pagespeed.ce.Sh4c_i51Te.png);\n}\n.ncard .ssilver_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xssilver_tag.png.pagespeed.ic.m9SbJkSgf_.webp);\n}\n.ncard .sbronze[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsbronze.png.pagespeed.ic.50Mj3Z9mZ5.webp);\n}\n.ncard .sbronze_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsbronze_tag.png.pagespeed.ic.Cm_pDlUERt.webp);\n}\n.ncard .gold[data-v-7e8d1295],\n.ncard .silver[data-v-7e8d1295],\n.ncard .bronze[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/common.png.pagespeed.ce.w6gVJnZfVD.png);\n}\n.ncard .gold_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xgold_tag.png.pagespeed.ic.EcyAEWTD29.webp);\n}\n.ncard .silver_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsilver_tag.png.pagespeed.ic.8-mUkkH55R.webp);\n}\n.ncard .bronze_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xbronze_tag.png.pagespeed.ic.TZFQ5vav2s.webp);\n}\n.ncard .gold_footer[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xgold_footer.png.pagespeed.ic.u0Hsy6rzEZ.webp);\n}\n.ncard .silver_footer[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsilver_footer.png.pagespeed.ic.JicugInsOL.webp);\n}\n.ncard .bronze_footer[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xbronze_footer.png.pagespeed.ic.son4mSaWYf.webp);\n}\n.ncard .alumni[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xalumni-bg.png.pagespeed.ic.YL2zihnXhx.webp);\n}\n.ncard .totw_gold[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_gold.png.pagespeed.ce.-U-XX7Hz1O.png);\n}\n.ncard .totw_gold_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_gold_tag.png.pagespeed.ic.Ie1_aLEAuR.webp);\n}\n.ncard .totw_gold_footer[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_gold_footer.png);\n}\n.ncard .totw_gold_line[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_gold_line.png);\n}\n.ncard .totw_silver[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_silver.png.pagespeed.ce.P60tprdykv.png);\n}\n.ncard .totw_silver_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_silver_tag.png.pagespeed.ic.jD9Nr4zps9.webp);\n}\n.ncard .totw_silver_footer[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_silver_footer.png);\n}\n.ncard .totw_silver_line[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_silver_line.png);\n}\n.ncard .totw_bronze[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/totw_bronze.png.pagespeed.ce.L2JZH9sSVk.png);\n}\n.ncard .totw_bronze_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw/xtotw_bronze_tag.png.pagespeed.ic.i7RwgHOuNB.webp);\n}\n.ncard .totw_bronze_footer[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_bronze_footer.png);\n}\n.ncard .totw_bronze_line[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/totw_bronze_line.png);\n}\n.ncard .gat[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/gat.png.pagespeed.ce.fz5jPOCIrU.png);\n}\n.ncard .hwn[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/hwn.png.pagespeed.ce.K0K6xTXDYe.png);\n}\n.ncard .evo[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/evo.png.pagespeed.ce.N_SFhLLX7j.png);\n}\n.ncard .evo_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/xtag.png.pagespeed.ic.vcXKFhtKVF.webp);\n}\n.ncard .evo2[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo2/xevo2.png.pagespeed.ic.aQa-SY0pjx.webp);\n}\n.ncard .evo2_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo2/xtag.png.pagespeed.ic.HrJWlHJAe-.webp);\n}\n.ncard .cs[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/cs.png.pagespeed.ce.TlE6be1KEU.png);\n  background-size: cover;\n}\n.ncard .cs_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xcs_tag.png.pagespeed.ic.T13q6iqGwV.webp);\n}\n.ncard .pt[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xpt.png.pagespeed.ic.9HSMhQLxwg.webp);\n}\n.ncard .pt_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xpt_tag.png.pagespeed.ic.c4BkE9Zf_b.webp);\n}\n.ncard .ms[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ms/xms.png.pagespeed.ic.EvzPj-OpmW.webp);\n}\n.ncard .ms_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ms/xtag.png.pagespeed.ic.1F67LnKutr.webp);\n}\n.ncard .tg[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/tg/xtg.png.pagespeed.ic.WgdhVCpnGi.webp);\n}\n.ncard .tg_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/tg/xtag.png.pagespeed.ic.nDdqED5RjM.webp);\n}\n.ncard .xmas[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xmas/xmas.png);\n}\n.ncard .xmas_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xmas/xtag.png.pagespeed.ic.paF-MP0saM.webp);\n}\n.ncard .gscsi[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscsi.png.pagespeed.ic.4enTelZeac.webp);\n}\n.ncard .gscse[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscse.png.pagespeed.ic.D4rpZ4Hjhd.webp);\n}\n.ncard .gscfi[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscfi.png.pagespeed.ic.MUUVfflGEv.webp);\n}\n.ncard .gscge[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscge.png.pagespeed.ic.bybpQgNfvN.webp);\n}\n.ncard .gscsi_swipe[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscsi_swipe.png.pagespeed.ic.69llzCf3CM.webp);\n}\n.ncard .gscse_swipe[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscse_swipe.png.pagespeed.ic.aKOPw0JtaS.webp);\n}\n.ncard .gscfi_swipe[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscfi_swipe.png.pagespeed.ic.MF1UVMWzNE.webp);\n}\n.ncard .gscge_swipe[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/global/xgscge_swipe.png.pagespeed.ic.MLFzxSKciR.webp);\n}\n#my-card-list[data-v-7e8d1295] {\n  height: 500px;\n  overflow-y: scroll;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n#my-card-list .card-wrap[data-v-7e8d1295],\n#my-card-list .ncard .backplate[data-v-7e8d1295],\n#my-card-list .ncard[data-v-7e8d1295] {\n  width: 136px;\n  height: 190px;\n  font-size: 10px;\n}\n.quick-search[data-v-7e8d1295],\n.ncard[data-v-7e8d1295],\n.ncard .backplate[data-v-7e8d1295],\n.card-wrap[data-v-7e8d1295] {\n  width: 240px;\n  height: 340px;\n  font-size: 20px;\n}\n@media (min-width: 1550px) {\n.tb2 .quick-search[data-v-7e8d1295],\n.scale .ncard[data-v-7e8d1295],\n.scale .ncard .backplate[data-v-7e8d1295] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1400px) and (max-width: 1550px) {\n.tb2 .quick-search[data-v-7e8d1295],\n.scale .ncard[data-v-7e8d1295],\n.scale .ncard .backplate[data-v-7e8d1295] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1250px) and (max-width: 1399px) {\n.tb2 .quick-search[data-v-7e8d1295],\n.scale .ncard[data-v-7e8d1295],\n.scale .ncard .backplate[data-v-7e8d1295] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1249px) {\n.quick-search[data-v-7e8d1295],\n.scale .ncard[data-v-7e8d1295],\n.scale .ncard .backplate[data-v-7e8d1295] {\n    width: 156px;\n    height: 220px;\n    font-size: 12.5px;\n}\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n.quick-search[data-v-7e8d1295],\n.scale .ncard[data-v-7e8d1295],\n.scale .ncard .backplate[data-v-7e8d1295] {\n    width: 113px;\n    height: 160px;\n    font-size: 10.5px;\n}\n}\n@media (min-width: 320px) and (max-width: 767px) {\n.quick-search[data-v-7e8d1295],\n.scale .ncard[data-v-7e8d1295],\n.scale .ncard .backplate[data-v-7e8d1295] {\n    width: 99px;\n    height: 140px;\n    font-size: 8px;\n}\n}\n.ncard .tag[data-v-7e8d1295] {\n  background-size: cover;\n  height: 50%;\n  width: 100%;\n  z-index: 5;\n}\n.ncard .top[data-v-7e8d1295] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: transparent !important;\n}\n.ncard .cardtype[data-v-7e8d1295] {\n  position: absolute;\n  left: 1em;\n  font-size: 0.9em;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  top: 0.3em;\n  letter-spacing: 0.04em;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  opacity: 0.7;\n  width: 3em;\n  z-index: 3;\n  text-align: center;\n}\n.ncard .texture[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xsgold_texture.png.pagespeed.ic._ouLXX8XYR.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n}\n.ncard .background[data-v-7e8d1295] {\n  position: absolute;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 3;\n}\n.ncard .backplate[data-v-7e8d1295] {\n  position: absolute;\n}\n.ncard .overall[data-v-7e8d1295],\n.ncard .overall2[data-v-7e8d1295] {\n  position: absolute;\n  font-family: \"steelfish\";\n  font-size: 3.3em;\n  line-height: 1;\n  color: white;\n  font-weight: normal;\n  z-index: 5;\n  top: 0.58em;\n  left: 0.35em;\n  transform: scale(1, 1.1);\n}\n.ncard .overall2[data-v-7e8d1295] {\n  left: 8.5% !important;\n}\n.ncard .name[data-v-7e8d1295] {\n  position: absolute;\n  font-size: 1.4em;\n  color: white;\n  text-align: center;\n  width: 100%;\n  z-index: 4;\n  top: 56%;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  font-style: italic;\n  left: 4%;\n}\n.ncard .team[data-v-7e8d1295],\n.ncard .team-right[data-v-7e8d1295] {\n  position: absolute;\n  z-index: 5;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  font-size: 0.4em;\n  bottom: 23.5%;\n  font-weight: 800;\n  color: #fff;\n  font-style: italic;\n  LINE-HEIGHT: 100%;\n}\n.ncard .team[data-v-7e8d1295] {\n  left: 8%;\n}\n.ncard .team-right[data-v-7e8d1295] {\n  right: 1.3em;\n}\n.ncard .firstname[data-v-7e8d1295] {\n  width: 100%;\n  text-align: left;\n  line-height: 0.5em;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-left: 4%;\n  font-weight: normal;\n}\n.ncard .lastname[data-v-7e8d1295] {\n  width: 100%;\n  text-align: left;\n  font-weight: bold;\n  font-size: 1.3em;\n  transform: translate(0.15em, 0.3em);\n}\n.ncard .headshot[data-v-7e8d1295] {\n  height: 50%;\n  width: 100%;\n  z-index: 5;\n  -webkit-filter: brightness(1.15);\n          filter: brightness(1.15);\n  background-size: cover;\n  background-position: -90%;\n  background-repeat: no-repeat;\n}\n.ncard .logo-backdrop[data-v-7e8d1295] {\n  width: 100%;\n  height: 60%;\n  background-repeat: no-repeat;\n  background-position: center 20%;\n  background-size: 100%;\n  z-index: 3;\n  opacity: 0.2;\n  mix-blend-mode: overlay;\n}\n.ncard .attributes[data-v-7e8d1295] {\n  display: flex;\n  position: absolute;\n  bottom: 1.75em;\n  width: 72%;\n  color: white;\n  z-index: 3;\n  padding: 0 1em;\n  text-align: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  font-style: italic;\n}\n.ncard .attributes-right[data-v-7e8d1295] {\n  right: 0.4em;\n}\n.ncard .attributes .attr-name[data-v-7e8d1295] {\n  width: 17%;\n  font-size: 0.55em;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  margin-left: 0%;\n  text-align: right;\n  color: #797979;\n}\n.ncard .attributes .attr-value[data-v-7e8d1295] {\n  width: 17%;\n  font-size: 1.2em;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  left: -0.2em;\n  position: relative;\n  line-height: 0.9em;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n}\n.ncard .logo[data-v-7e8d1295] {\n  width: 48%;\n  height: 40%;\n  position: absolute;\n  z-index: 6;\n  right: -17%;\n  top: 55%;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.ncard .info[data-v-7e8d1295],\n.ncard .info2[data-v-7e8d1295] {\n  position: absolute;\n  top: 51%;\n  font-size: 0.6em;\n  z-index: 5;\n  letter-spacing: 0;\n  font-weight: bold;\n  color: #000;\n  text-align: right;\n  right: 1.4em;\n}\n.ncard .info div[data-v-7e8d1295],\n.ncard .info2 div[data-v-7e8d1295] {\n  display: inline-block;\n}\n.ncard .info .bullet[data-v-7e8d1295],\n.ncard .info2 .bullet[data-v-7e8d1295] {\n  margin: 0;\n  width: 3px;\n  height: 2px;\n  border-radius: 0;\n  transform: translateY(-3px);\n  background: #000;\n}\n.ncard .logo-bottom[data-v-7e8d1295] {\n  background-size: contain;\n  position: absolute;\n  bottom: 0.8em;\n  left: 0.65em;\n  height: 2.3em;\n  width: 2.3em;\n  z-index: 7;\n}\n.ncard .footer[data-v-7e8d1295] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0.25em;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  z-index: 4;\n  background-size: 100%;\n}\n.totw-attributes[data-v-7e8d1295] {\n  transform: rotate(-16deg);\n  bottom: 15% !important;\n  right: -0.5em;\n}\n.totw-team[data-v-7e8d1295] {\n  transform: rotate(-16deg);\n  bottom: 31% !important;\n  right: 1.5em !important;\n}\n.totw-name[data-v-7e8d1295] {\n  transform: rotate(-16deg);\n  top: 63.5% !important;\n  left: -0.5em !important;\n  text-align: right !important;\n  font-size: 1.2em !important;\n}\n.totw-logo[data-v-7e8d1295] {\n  bottom: 1em !important;\n  left: 1.5em !important;\n}\n.totw_text[data-v-7e8d1295] {\n  opacity: 1 !important;\n  mix-blend-mode: unset !important;\n  background-position: top !important;\n}\n.totw_line[data-v-7e8d1295] {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: 2em;\n}\n.totw_footer[data-v-7e8d1295] {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  bottom: 0;\n  right: -0.5em;\n}\n.totw_info[data-v-7e8d1295] {\n  right: unset !important;\n  transform: rotate(-16deg) !important;\n  top: 61% !important;\n  left: 5.5em !important;\n  color: #e1c885 !important;\n}\n.totw_overall[data-v-7e8d1295] {\n  transform: rotate(-14deg) !important;\n  font-style: italic !important;\n  left: 0.25em !important;\n  top: 0.6em !important;\n}\n.totw_cardtype[data-v-7e8d1295] {\n  transform: rotate(-14deg) !important;\n  font-style: italic !important;\n  font-size: 0.75em !important;\n  left: 1.3em !important;\n}\n.totw_gold_color[data-v-7e8d1295] {\n  color: #d8bf7c !important;\n}\n.totw_bronze_color[data-v-7e8d1295] {\n  color: #ecc5a4 !important;\n}\n.totw_silver_color[data-v-7e8d1295] {\n  color: #e1e1e1 !important;\n}\n.ncard .alm .info[data-v-7e8d1295] {\n  top: 5px;\n  color: #fff;\n}\n.ncard .alm .logo-backdrop[data-v-7e8d1295] {\n  mix-blend-mode: normal;\n  opacity: 0.3 !important;\n}\n.alumni-overlay[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xalumni-overlay.png.pagespeed.ic.2a_3M6NXyg.webp) no-repeat;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 7;\n  background-size: contain;\n}\n.ncard .alm .alm-tag[data-v-7e8d1295] {\n  z-index: 8;\n}\n.ncard .alm .alm-overall[data-v-7e8d1295] {\n  left: 8%;\n  top: 7%;\n  color: #fff;\n  font-size: 4em;\n}\n.alm-logo[data-v-7e8d1295] {\n  width: 16%;\n  height: 15%;\n  position: absolute;\n  z-index: 9;\n  right: 6%;\n  top: 44%;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-filter: brightness(1.2) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.95));\n          filter: brightness(1.2) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.95));\n}\n.ncard .alm .alm-name[data-v-7e8d1295] {\n  top: 60.5%;\n  left: -3%;\n  color: #fff;\n}\n.ncard .alm .alm-name .firstname[data-v-7e8d1295],\n.ncard .alm .alm-name .lastname[data-v-7e8d1295] {\n  text-align: center;\n}\n.ncard .alm .alm-headshot[data-v-7e8d1295] {\n  height: 43%;\n  width: 80%;\n  left: 1.8em;\n  top: 1em;\n  background-position: center;\n}\n.ncard .alm .alm-team[data-v-7e8d1295] {\n  position: absolute;\n  z-index: 5;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  color: white;\n  font-size: 0.48em;\n  bottom: 46%;\n  font-weight: 800;\n  color: #fff;\n  font-style: italic;\n  width: 100%;\n  left: 0%;\n  text-align: center;\n}\n.ncard .alm.backplate .alm-attributes[data-v-7e8d1295] {\n  display: flex;\n  position: absolute;\n  bottom: 6.15%;\n  width: 100%;\n  color: #fff;\n  z-index: 3;\n  padding: 0 10%;\n  text-align: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  font-style: italic;\n}\n.alm .alm-attributes.attributes .attr-value[data-v-7e8d1295] {\n  line-height: 1.8em;\n}\n.ncard .alm .alm-attributes.attributes .attr-name[data-v-7e8d1295] {\n  text-align: left;\n  padding-left: 3%;\n  color: #fff;\n}\n.no-opacity[data-v-7e8d1295] {\n  opacity: 1;\n}\n.hc-logo[data-v-7e8d1295] {\n  bottom: -2% !important;\n  height: 23% !important;\n  width: 23% !important;\n  background-repeat: no-repeat !important;\n}\n.hc-team[data-v-7e8d1295] {\n  font-size: 0.6em !important;\n  bottom: 22% !important;\n  right: 10% !important;\n}\n.hc-ovr[data-v-7e8d1295] {\n  top: 7% !important;\n}\n.ncard .hc .attributes .attr-name[data-v-7e8d1295],\n.ncard .hc .attributes .attr-value[data-v-7e8d1295],\n.ncard .hc .team-right[data-v-7e8d1295],\n.ncard .hc .cardtype[data-v-7e8d1295] {\n  color: #000;\n}\n.ncard .hc .attributes[data-v-7e8d1295],\n.ncard .cs .attributes[data-v-7e8d1295],\n.ncard .pt .attributes[data-v-7e8d1295] {\n  bottom: 8%;\n}\n.ncard .cs .logo-backdrop[data-v-7e8d1295] {\n  opacity: 0.5;\n}\n.ncard .cs .attributes .attr-name[data-v-7e8d1295],\n.ncard .cs .attributes .attr-value[data-v-7e8d1295],\n.ncard .cs .team-right[data-v-7e8d1295],\n.ncard .cs .name[data-v-7e8d1295],\n.ncard .cs .info[data-v-7e8d1295],\n.ncard .cs .cardtype[data-v-7e8d1295] {\n  color: #fff;\n}\n.ncard .cs .cardtype[data-v-7e8d1295] {\n  color: #000;\n}\n.cs-team[data-v-7e8d1295] {\n  font-size: 0.6em !important;\n  bottom: 21.5% !important;\n  right: 10% !important;\n  color: #000 !important;\n}\n.cs-ovr[data-v-7e8d1295] {\n  top: 17% !important;\n}\n.ncard .pt .logo-backdrop[data-v-7e8d1295] {\n  opacity: 0.5;\n}\n.ncard .pt .attributes .attr-name[data-v-7e8d1295],\n.ncard .pt .attributes .attr-value[data-v-7e8d1295],\n.ncard .pt .team-right[data-v-7e8d1295],\n.ncard .pt .name[data-v-7e8d1295],\n.ncard .pt .info[data-v-7e8d1295],\n.ncard .pt .cardtype[data-v-7e8d1295] {\n  color: #fff;\n}\n.ncard .pt .cardtype[data-v-7e8d1295] {\n  color: #000;\n}\n.pt-team[data-v-7e8d1295] {\n  font-size: 0.6em !important;\n  bottom: 21.5% !important;\n  right: 10% !important;\n  color: #fff !important;\n}\n.pt-ovr[data-v-7e8d1295] {\n  top: 17% !important;\n}\n.ncard .gat-headshot[data-v-7e8d1295],\n.ncard .evo-headshot[data-v-7e8d1295] {\n  z-index: 2 !important;\n}\n.ncard .hwn-headshot[data-v-7e8d1295] {\n  z-index: 3 !important;\n}\n.gat-team[data-v-7e8d1295],\n.evo-team[data-v-7e8d1295],\n.hwn-team[data-v-7e8d1295] {\n  font-size: 0.6em !important;\n  bottom: 22% !important;\n  right: 10% !important;\n  color: #fff !important;\n}\n.ncard .hwn-attr[data-v-7e8d1295] {\n  color: #fff !important;\n}\n.ncard.gat-wrap .attributes .attr-name[data-v-7e8d1295],\n.ncard.evo-wrap .attributes .attr-name[data-v-7e8d1295],\n.ncard.hwn-wrap .attributes .attr-name[data-v-7e8d1295] {\n  color: #000;\n}\n.ncard.gat-wrap .attributes .attr-value[data-v-7e8d1295],\n.ncard.gat-wrap .name[data-v-7e8d1295],\n.ncard.gat-wrap .info .bullet[data-v-7e8d1295] {\n  color: #fff;\n}\n.ncard.gat-wrap .overall[data-v-7e8d1295] {\n  font-weight: 800;\n  font-style: italic;\n  color: #fff;\n  top: 7%;\n  left: 3%;\n}\n.ncard.gat-wrap .info[data-v-7e8d1295] {\n  left: 5%;\n  top: 23%;\n  font-size: 0.4em;\n  color: #fff;\n  right: inherit;\n}\n.ncard.gat-wrap .logo-backdrop[data-v-7e8d1295],\n.ncard.evo-wrap .logo-backdrop[data-v-7e8d1295] {\n  z-index: 2;\n}\n.gsc-texture[data-v-7e8d1295] {\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n}\n.gat-texture[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/xgat_ol.png.pagespeed.ic.kbJ8EBqWSc.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  mix-blend-mode: color-dodge;\n}\n.evo-texture[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/evo/xoverlay.png.pagespeed.ic.hML-DUqUjC.webp);\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n.ncard.evo-wrap .attributes[data-v-7e8d1295] {\n  bottom: 7% !important;\n}\n.ms-texture[data-v-7e8d1295] {\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n}\n.ms-headshot[data-v-7e8d1295] {\n  background-position: 30% !important;\n  top: 3.5% !important;\n}\n.ncard.ms-ol .attributes .attr-name[data-v-7e8d1295],\n.ncard.ms-ol .attributes .attr-value[data-v-7e8d1295],\n.ncard.ms-ol .team-right[data-v-7e8d1295],\n.ncard.ms-ol .name[data-v-7e8d1295],\n.ncard.ms-ol .cardtype[data-v-7e8d1295] {\n  color: #c6ac66 !important;\n}\n.ncard.ms-ol .name .lastname[data-v-7e8d1295] {\n  font-size: 1em;\n  margin-left: 3.5%;\n  transform: unset;\n}\n.ncard.ms-ol .name[data-v-7e8d1295] {\n  top: 58%;\n}\n.ncard.ms-ol .ms-team[data-v-7e8d1295] {\n  color: #c6ac66;\n  font-size: 0.6em;\n  bottom: 21.5%;\n}\n.ncard.ms-ol .ms-fill[data-v-7e8d1295] {\n  background: red;\n}\n.ncard.ms-ol .ms-logo[data-v-7e8d1295] {\n  right: 5%;\n  top: 59%;\n  height: 20%;\n  width: 30%;\n}\n.ncard.ms-ol .attributes[data-v-7e8d1295] {\n  width: 100%;\n  height: 12%;\n  transform: translateX(4%);\n}\n.ncard.ms-ol .attributes .attr-name[data-v-7e8d1295] {\n  transform: translateX(-150%) translateY(72%);\n  font-size: 0.5em;\n}\n.ncard.ms-ol .overall[data-v-7e8d1295] {\n  left: 6%;\n  font-size: 3em;\n}\n.ncard.ms-ol .info[data-v-7e8d1295] {\n  top: 3%;\n  color: #000;\n}\n.ncard.ms-ol .cardtype[data-v-7e8d1295] {\n  left: 4%;\n  top: 10%;\n  color: #000 !important;\n  font-size: 0.8em;\n}\n.hwn-ct[data-v-7e8d1295] {\n  top: 13% !important;\n  left: 8% !important;\n  font-size: 0.75em !important;\n  color: #000 !important;\n}\n.hwn-team-text[data-v-7e8d1295] {\n  position: absolute;\n  bottom: 15%;\n  right: 2%;\n  font-family: \"Bebas\", \"Bebas Neue\", \"Roboto Condensed\", sans-serif;\n  font-style: italic;\n  font-size: 2em;\n  opacity: 0.3;\n  letter-spacing: 0.05em;\n}\n.gsc-att[data-v-7e8d1295] {\n  bottom: 7% !important;\n  width: 75% !important;\n  padding-right: 0 !important;\n}\n.gsc-att .attr-name[data-v-7e8d1295] {\n  padding-right: 2% !important;\n  padding-bottom: 3% !important;\n}\n.gsc-ovr[data-v-7e8d1295] {\n  top: 18% !important;\n  left: 10% !important;\n}\n.ncard.gscsi-wrap .attributes .attr-name[data-v-7e8d1295],\n.ncard.gscsi-wrap .cardtype[data-v-7e8d1295],\n.ncard.gscsi-wrap .info[data-v-7e8d1295] {\n  color: #ccc;\n}\n.ncard.gscsi-wrap .bullet[data-v-7e8d1295] {\n  background: #ccc;\n}\n.ncard.gscsi-wrap .attributes .attr-value[data-v-7e8d1295],\n.ncard.gscsi-wrap .team-right[data-v-7e8d1295],\n.ncard.gscsi-wrap .name[data-v-7e8d1295],\n.ncard.gscsi-wrap .overall[data-v-7e8d1295] {\n  color: #fff;\n}\n.ncard.gscfi-wrap .attributes .attr-name[data-v-7e8d1295],\n.ncard.gscfi-wrap .cardtype[data-v-7e8d1295],\n.ncard.gscfi-wrap .info[data-v-7e8d1295] {\n  color: #43c7e7;\n}\n.ncard.gscfi-wrap .bullet[data-v-7e8d1295] {\n  background: #43c7e7;\n}\n.ncard.gscfi-wrap .attributes .attr-value[data-v-7e8d1295],\n.ncard.gscfi-wrap .team-right[data-v-7e8d1295],\n.ncard.gscfi-wrap .name[data-v-7e8d1295],\n.ncard.gscfi-wrap .overall[data-v-7e8d1295] {\n  color: #fff;\n}\n.ncard.gscse-wrap .attributes .attr-name[data-v-7e8d1295],\n.ncard.gscse-wrap .cardtype[data-v-7e8d1295],\n.ncard.gscse-wrap .info[data-v-7e8d1295] {\n  color: #004998;\n}\n.ncard.gscse-wrap .bullet[data-v-7e8d1295] {\n  background: #004998;\n}\n.ncard.gscse-wrap .attributes .attr-value[data-v-7e8d1295],\n.ncard.gscse-wrap .team-right[data-v-7e8d1295],\n.ncard.gscse-wrap .name[data-v-7e8d1295],\n.ncard.gscse-wrap .overall[data-v-7e8d1295] {\n  color: #011e41;\n}\n.ncard.gscge-wrap .attributes .attr-name[data-v-7e8d1295],\n.ncard.gscge-wrap .cardtype[data-v-7e8d1295],\n.ncard.gscge-wrap .info[data-v-7e8d1295] {\n  color: #fff;\n}\n.ncard.gscge-wrap .bullet[data-v-7e8d1295] {\n  background: #fff;\n}\n.ncard.gscge-wrap .attributes .attr-value[data-v-7e8d1295],\n.ncard.gscge-wrap .team-right[data-v-7e8d1295],\n.ncard.gscge-wrap .name[data-v-7e8d1295],\n.ncard.gscge-wrap .overall[data-v-7e8d1295] {\n  color: #facd01;\n}\n.tg-texture[data-v-7e8d1295] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  background-image: url(https://hutdb.net/assets/img/cards/19/tg/xoverlay.png.pagespeed.ic.o_dh5pQgX6.webp);\n  z-index: 4;\n  left: 0;\n  height: 100%;\n}\n.ncard.tg_main .headshot[data-v-7e8d1295] {\n  background-position: -20%;\n  top: 5%;\n}\n.ncard.tg_main .logo-backdrop[data-v-7e8d1295] {\n  background-position: center top;\n}\n.ncard.tg_main .attributes[data-v-7e8d1295] {\n  width: 90%;\n  left: 5%;\n  bottom: 8%;\n}\n.ncard.tg_main .overall[data-v-7e8d1295] {\n  color: #fff;\n  left: 11.5%;\n  top: 32%;\n  font-size: 3.1em;\n}\n.ncard.tg_main .team[data-v-7e8d1295] {\n  left: 8%;\n  text-align: left;\n  width: 50%;\n  bottom: 21.5%;\n  color: #000;\n  font-size: 0.45em;\n}\n.ncard.tg_main .info[data-v-7e8d1295] {\n  font-size: 0.45em;\n  bottom: 21.5%;\n  top: inherit;\n  right: 8%;\n}\n.ncard.tg_main .name[data-v-7e8d1295] {\n  color: #000;\n  left: 5%;\n  top: 59%;\n}\n.ncard.tg_main .logo-bottom[data-v-7e8d1295] {\n  width: 3.5em;\n  height: 3.5em;\n  right: 5%;\n  left: inherit;\n  bottom: 25%;\n}\n.ncard.tg_main .attributes .attr-name[data-v-7e8d1295] {\n  color: #000;\n  text-align: left;\n  transform: translateX(0.3em);\n  margin-bottom: 1%;\n}\n.ncard.xmas-wrap .headshot[data-v-7e8d1295] {\n  z-index: 2;\n}\n.ncard.xmas-wrap .logo-backdrop[data-v-7e8d1295] {\n  z-index: 1;\n}\n.ncard.xmas-wrap .overall[data-v-7e8d1295] {\n  left: 12%;\n  font-size: 3em;\n  top: 25%;\n}\n.ncard.xmas-wrap .name[data-v-7e8d1295] {\n  top: 54%;\n  font-size: 1.25em;\n}\n.xmas-top[data-v-7e8d1295] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.ncard.xmas-wrap .info .bullet[data-v-7e8d1295] {\n  background: #717171;\n}\n.ncard.xmas-wrap .info[data-v-7e8d1295] {\n  color: #717171;\n}\n.ncard.xmas-wrap .attributes .attr-value[data-v-7e8d1295],\n.ncard.xmas-wrap .team-right[data-v-7e8d1295],\n.ncard.xmas-wrap .name[data-v-7e8d1295],\n.ncard .attributes .attr-name[data-v-7e8d1295],\n.ncard.xmas-wrap .overall[data-v-7e8d1295] {\n  color: #e9e9e9;\n}\n.ncard.xmas-wrap .logo[data-v-7e8d1295] {\n  right: 1%;\n  height: 25%;\n  width: 25%;\n  top: 60%;\n}\n.ncard.xmas-wrap .team[data-v-7e8d1295] {\n  font-size: 0.65em;\n  bottom: 24.75%;\n}\n.ncard.xmas-wrap .cardtype[data-v-7e8d1295] {\n  top: 15%;\n  font-size: 0.75em;\n  left: 11%;\n  color: #fff;\n}\n.ncard .ipotg[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/background.png.pagespeed.ce.PmEXPQUxA_.png);\n}\n.ncard .ipotg_tag[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xtag.png.pagespeed.ic.FGuh0IQT6M.webp);\n  background-size: cover;\n}\n.ncard .ipotg .black-background[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xblack.png.pagespeed.ic.7nqBLXI06W.webp);\n  background-size: cover;\n  top: 0;\n}\n.ncard .ipotg .silver-background[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/xsilver.png.pagespeed.ic.QR0TQn3_Pa.webp);\n  background-size: cover;\n  z-index: 4;\n  top: 0;\n}\n.ncard .ipotg .ice-background[data-v-7e8d1295] {\n  background: url(https://hutdb.net/assets/img/cards/19/ipotg/ice.png.pagespeed.ce.SS0jb_qb_Q.png);\n}\n.ncard.ipotg-wrap .headshot[data-v-7e8d1295] {\n  top: 0;\n  height: 50%;\n  background-position: center;\n  left: 8%;\n  z-index: 3;\n}\n.ncard.ipotg-wrap .logo-fix[data-v-7e8d1295] {\n  top: 0;\n  left: 0;\n}\n.ncard.ipotg-wrap .overall[data-v-7e8d1295] {\n  left: 8%;\n}\n.ncard.ipotg-wrap .cardtype[data-v-7e8d1295] {\n  left: 6%;\n  top: 10%;\n}\n.ncard.ipotg-wrap .attributes-right[data-v-7e8d1295] {\n  z-index: 5;\n}\n.ncard.ipotg-wrap .attributes .attr-name[data-v-7e8d1295] {\n  color: #545454;\n}\n.ncard.ipotg-wrap .ipotg-team[data-v-7e8d1295] {\n  color: #545454;\n  font-size: 0.5em;\n  bottom: 21.5%;\n}\n.ncard.ipotg-wrap .logo-bottom[data-v-7e8d1295] {\n  left: 6%;\n  bottom: 8%;\n}\n.ncard.ipotg-wrap .name[data-v-7e8d1295] {\n  top: 59%;\n}\n.ncard.ipotg-wrap .logo-backdrop[data-v-7e8d1295] {\n  z-index: 2;\n}\n.evo2-wrap.ncard .headshot[data-v-7e8d1295],\n.evo2-wrap.ncard .logo-backdrop[data-v-7e8d1295] {\n  z-index: 2;\n}\n.evo2-wrap.ncard .cardtype[data-v-7e8d1295] {\n  top: 5%;\n  left: 5.5%;\n}\n.evo2-wrap.ncard .overall[data-v-7e8d1295] {\n  left: 7.5%;\n}\n.evo2-wrap.ncard .cardtype[data-v-7e8d1295],\n.evo2-wrap.ncard .overall[data-v-7e8d1295],\n.evo2-wrap.ncard .attributes .attr-value[data-v-7e8d1295],\n.evo2-wrap.ncard .info[data-v-7e8d1295],\n.evo2-wrap.ncard .name[data-v-7e8d1295] {\n  color: #fff;\n}\n.evo2-wrap.ncard .info .bullet[data-v-7e8d1295] {\n  background: #fff;\n}\n.evo2-wrap.ncard .attributes[data-v-7e8d1295] {\n  bottom: 7.5%;\n  width: 80%;\n  right: 0%;\n}\n.card-list[data-v-7e8d1295] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding-top: 10px;\n  padding-bottom: 100px;\n  box-sizing: border-box;\n}\n.card-list h4[data-v-7e8d1295] {\n  width: 100%;\n  text-align: center;\n  font-weight: 900;\n  font-size: 12px;\n  color: white;\n}\n.card-list .filters[data-v-7e8d1295] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.card-list .filters .input-group[data-v-7e8d1295] {\n  width: 400px;\n  box-sizing: border-box;\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  /* Stuff after this is only to make things more pretty */\n}\n.card-list .filters .input-group .input-hidden[data-v-7e8d1295] {\n  position: absolute;\n  left: -9999px;\n}\n.card-list .filters .input-group input[type=radio]:checked + label > img[data-v-7e8d1295] {\n  box-shadow: 0px 0px 2px 2px yellow inset, 0px 0px 2px 0px black;\n}\n.card-list .filters .input-group input[type=radio] + label > img[data-v-7e8d1295] {\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  box-sizing: border-box;\n  transition: 500ms all;\n  background-color: #2c3e50;\n  box-shadow: 0px 0px 2px 0px black;\n  cursor: pointer;\n}\n.card-list .filters .input-group input[type=radio]:checked + label > img[data-v-7e8d1295] {\n  transform: rotateZ(0deg) rotateX(0deg);\n}\n.card-list .category[data-v-7e8d1295] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.card-list .category h1.category[data-v-7e8d1295] {\n  font-size: 36px;\n  color: white;\n  font-weight: 100;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.card-list .category h1.category span[data-v-7e8d1295] {\n  min-width: 400px;\n  padding: 10px 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  position: relative;\n}\n.card-list .category h1.category span[data-v-7e8d1295]:after {\n  content: \"\";\n  width: 100px;\n  height: 2px;\n  background: white;\n  position: absolute;\n  top: 30px;\n  left: 0px;\n}\n.card-list .category h1.category span[data-v-7e8d1295]:before {\n  content: \"\";\n  width: 100px;\n  height: 2px;\n  background: white;\n  position: absolute;\n  top: 30px;\n  right: 0px;\n}\n.card-list .category .radio[data-v-7e8d1295] {\n  position: relative;\n  cursor: pointer;\n  line-height: 20px;\n  font-size: 14px;\n  margin: 15px;\n}\n.card-list .category .radio .label[data-v-7e8d1295] {\n  position: relative;\n  display: block;\n  float: left;\n  margin-right: 10px;\n  width: 20px;\n  height: 20px;\n  border: 2px solid gray;\n  border-radius: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\n.card-list .category .radio .label[data-v-7e8d1295]:after {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  background: yellow;\n  transform: scale(0);\n  transition: all 0.2s ease;\n  opacity: 0.08;\n  pointer-events: none;\n}\n.card-list .category .radio:hover .label[data-v-7e8d1295]:after {\n  transform: scale(3.6);\n}\n.card-list .category input[type=radio]:checked + .label[data-v-7e8d1295] {\n  border-color: yellow;\n}\n.card-list .category input[type=radio]:checked + .label[data-v-7e8d1295]:after {\n  transform: scale(1);\n  transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);\n  opacity: 1;\n}\n.card-list .category .hidden[data-v-7e8d1295] {\n  display: none;\n}\n.cards[data-v-7e8d1295] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 20px;\n  flex-wrap: wrap;\n}\n.cards .card[data-v-7e8d1295] {\n  color: white;\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 255px;\n}\n.cards .card .card-wrapper[data-v-7e8d1295] {\n  padding: 5px;\n  box-sizing: border-box;\n  border: 1px white solid;\n  box-shadow: 0px 0px 8px 1px white inset, 0px 0px 3px 0px black;\n  position: relative;\n}\n.cards .card .card-wrapper .card-data[data-v-7e8d1295] {\n  z-index: 0;\n}\n.cards .card .card-wrapper .price[data-v-7e8d1295] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 10px 20px;\n  background: white;\n  color: #2c3e50;\n  z-index: 11;\n  font-weight: 800;\n  font-size: 14px;\n}\n.cards .card .card-wrapper .places[data-v-7e8d1295] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 20px;\n  background: white;\n  color: #2c3e50;\n  z-index: 11;\n  font-weight: 800;\n  font-size: 14px;\n}\n.cards .card .progress[data-v-7e8d1295] {\n  width: 100%;\n  height: 35px;\n  /* padding: 0px; */\n  margin-top: 5px;\n  box-shadow: 0px 0px 3px 0px black;\n  background-color: #2c3e50;\n  position: relative;\n  overflow: hidden;\n}\n.cards .card .progress .line[data-v-7e8d1295] {\n  height: 100%;\n  background-color: #a0cd00;\n  width: var(--line-width);\n  top: 0;\n  left: 0;\n  position: absolute;\n  z-index: 1;\n}\n.cards .card .progress .info[data-v-7e8d1295] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  font-size: 12px;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 12;\n  position: relative;\n}\nh3[data-v-7e8d1295] {\n  font-weight: 100;\n  font-size: 36px;\n  color: white;\n  text-transform: uppercase;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=template&id=7e8d1295&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cabinet/Tickets.vue?vue&type=template&id=7e8d1295&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _vm.lotteries != null && _vm.lotteries.length > 0
      ? _c(
          "ul",
          { staticClass: "cards" },
          _vm._l(_vm.lotteries, function(lottery) {
            return _c("li", { staticClass: "card" }, [
              _c("div", { staticClass: "card-wrapper" }, [
                _c("div", {
                  staticClass: "card-data",
                  domProps: { innerHTML: _vm._s(_vm.prepareCard(lottery)) },
                  on: {
                    click: function($event) {
                      return _vm.lotteryOpen(lottery.id)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "price" }, [
                  _vm._v(_vm._s(lottery.base_price) + " Pucks")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "places" }, [
                  _vm._v(_vm._s(lottery.places))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", {
                  staticClass: "line",
                  style: _vm.lineWidth(lottery.occupied_places, lottery.places)
                }),
                _vm._v(" "),
                _c("div", { staticClass: "info" }, [
                  _vm._v(
                    _vm._s(lottery.occupied_places) +
                      "/" +
                      _vm._s(lottery.places)
                  )
                ])
              ])
            ])
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.lotteries == null || _vm.lotteries.length == 0
      ? _c("h3", [_vm._v("Вы еще ничего не выиграли:(")])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cabinet/Tickets.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/cabinet/Tickets.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tickets_vue_vue_type_template_id_7e8d1295_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tickets.vue?vue&type=template&id=7e8d1295&scoped=true& */ "./resources/js/components/cabinet/Tickets.vue?vue&type=template&id=7e8d1295&scoped=true&");
/* harmony import */ var _Tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tickets.vue?vue&type=script&lang=js& */ "./resources/js/components/cabinet/Tickets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Tickets_vue_vue_type_style_index_0_id_7e8d1295_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true& */ "./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tickets_vue_vue_type_template_id_7e8d1295_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tickets_vue_vue_type_template_id_7e8d1295_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e8d1295",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cabinet/Tickets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cabinet/Tickets.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/cabinet/Tickets.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tickets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_style_index_0_id_7e8d1295_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=style&index=0&id=7e8d1295&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_style_index_0_id_7e8d1295_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_style_index_0_id_7e8d1295_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_style_index_0_id_7e8d1295_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_style_index_0_id_7e8d1295_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_style_index_0_id_7e8d1295_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cabinet/Tickets.vue?vue&type=template&id=7e8d1295&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cabinet/Tickets.vue?vue&type=template&id=7e8d1295&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_template_id_7e8d1295_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tickets.vue?vue&type=template&id=7e8d1295&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cabinet/Tickets.vue?vue&type=template&id=7e8d1295&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_template_id_7e8d1295_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tickets_vue_vue_type_template_id_7e8d1295_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);