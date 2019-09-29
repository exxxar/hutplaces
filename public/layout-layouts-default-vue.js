(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layouts-default-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AsideMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
  name: 'defaultLayout',
  methods: {
    selfHide: function selfHide() {
      this.$emit("self-hide");
    },
    openModal: function openModal(name) {
      this.selfHide();
      this.$emit("modal", name);
    }
  }
});

/***/ }),

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
      var _this2 = this;

      this.$store.dispatch('logoutUser').then(function () {
        Event.$emit("userLogout");

        _this2.$router.push({
          path: "/signin"
        });
      });
    },
    getAvatar: function getAvatar(img) {
      if (img == '' || img == null || img == undefined) return "/img/noavatar.png";else return "/img/avatars/".concat(img);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/About.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/About.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'about',
  methods: {}
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Help.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Help.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'faq',
  props: ['show'],
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/History.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
  name: 'faq',
  data: function data() {
    return {
      historyList: null
    };
  },
  mounted: function mounted() {
    this.loadHistory();
  },
  methods: {
    message: function message(title, _message, type) {
      this.$notify({
        group: 'main',
        type: type,
        title: title,
        text: _message
      });
    },
    selfHide: function selfHide() {
      this.$emit("self-hide");
    },
    loadHistory: function loadHistory() {
      var _this = this;

      this.$loading(true);
      axios.get('/lottery/history').then(function (response) {
        _this.historyList = response.data.history;
      })["catch"](function (reason) {
        _this.message("Авторизация", "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B!", 'warn');
      });
      this.$loading(false);
    },
    getPlatform: function getPlatform(id) {
      switch (id) {
        default:
        case 1:
          return "/img/xbox-icon.png";

        case 2:
          return "/img/ps4-icon.png";

        case 3:
          return "/img/pc-icon.png";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Howtostart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Howtostart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'promo',
  data: function data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: null,
      password: null,
      error: false
    };
  },
  methods: {
    login: function login() {
      var app = this;
      this.$auth.login({
        params: {
          email: app.email,
          password: app.password
        },
        success: function success() {},
        error: function error() {},
        rememberMe: true,
        redirect: '/cabinet',
        fetchUser: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Promo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Promo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'promo',
  data: function data() {
    return {
      promo: ""
    };
  },
  methods: {
    message: function message(title, _message, type) {
      this.$notify({
        group: 'main',
        type: type,
        title: title,
        text: _message
      });
    },
    doRequest: function doRequest() {
      var _this = this;

      if (this.promo.length != 8) {
        this.message("Ввод промокода", "А где промокод?", "warn");
        return;
      }

      axios.post('/promo/activate', {
        code: this.promo
      }).then(function (response) {
        console.log(response);

        _this.message("Ввод промокода", response.data.message, "warn");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Registration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Registration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
    recaptcha: function recaptcha() {},
    register: function register() {
      this.$recaptcha('login').then(function (token) {
        console.log(token); // Will print the token
      });
      /*var app = this
      this.$auth.register({
        data: {
          name: app.name,
          email: app.email,
          password: app.password
        },
        success: function () {
          app.success = true
        },
        error: function (resp) {
          app.error = true;
          app.errors = resp.response.data.errors;
        },
        redirect: null
      });*/
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modals_Rules_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/modals/Rules.vue */ "./resources/js/components/modals/Rules.vue");
/* harmony import */ var _components_modals_About_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/modals/About.vue */ "./resources/js/components/modals/About.vue");
/* harmony import */ var _components_modals_Supplier_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modals/Supplier.vue */ "./resources/js/components/modals/Supplier.vue");
/* harmony import */ var _components_modals_Payment_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/modals/Payment.vue */ "./resources/js/components/modals/Payment.vue");
/* harmony import */ var _components_modals_Help_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modals/Help.vue */ "./resources/js/components/modals/Help.vue");
/* harmony import */ var _components_modals_History_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/modals/History.vue */ "./resources/js/components/modals/History.vue");
/* harmony import */ var _components_modals_Howtostart_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/modals/Howtostart.vue */ "./resources/js/components/modals/Howtostart.vue");
/* harmony import */ var _components_modals_FAQ_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/modals/FAQ.vue */ "./resources/js/components/modals/FAQ.vue");
/* harmony import */ var _components_modals_Promo_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/modals/Promo.vue */ "./resources/js/components/modals/Promo.vue");
/* harmony import */ var _components_modals_Report_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/modals/Report.vue */ "./resources/js/components/modals/Report.vue");
/* harmony import */ var _components_modals_Login_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/modals/Login.vue */ "./resources/js/components/modals/Login.vue");
/* harmony import */ var _components_modals_Registration_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/modals/Registration.vue */ "./resources/js/components/modals/Registration.vue");
/* harmony import */ var _components_AsideMenu_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/AsideMenu.vue */ "./resources/js/components/AsideMenu.vue");
/* harmony import */ var _components_MainMenu_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/MainMenu.vue */ "./resources/js/components/MainMenu.vue");
/* harmony import */ var _components_Chat_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Chat.vue */ "./resources/js/components/Chat.vue");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-custom-scrollbar */ "./node_modules/vue-custom-scrollbar/dist/vueScrollbar.umd.min.js");
/* harmony import */ var vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_15__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      authenticated: this.check,
      user: this.getUser,
      settings: {
        maxScrollbarLength: 60
      }
    };
  },
  methods: {
    lang: function lang(_lang) {
      this.$lang.setLang(_lang);
      localStorage.setItem('lang', _lang);
    },
    message: function message(title, _message, type) {
      this.$notify({
        group: 'main',
        type: type,
        title: title,
        text: _message
      });
    },
    show: function show(name) {
      this.$modal.show(name);
    },
    hide: function hide(name) {
      this.$modal.hide(name);
    },
    showAsideMenu: function showAsideMenu() {
      if (window.innerWidth > 600) return;
      this.show("aside-menu");
    },
    showMainMenu: function showMainMenu() {
      if (window.innerWidth > 1050) return;
      this.show("main-menu");
    }
  },
  computed: {
    check: function check() {
      console.log("check", this.$store.getters.CHECK);
      return this.$store.getters.CHECK;
    },
    getUser: function getUser() {
      return this.$store.getters.USER;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.check) {
      this.$store.dispatch('getCurrentUser').then(function () {
        _this.authenticated = _this.check;
        _this.user = _this.getUser;
      })["catch"](function (reason) {
        _this.message("Авторизация", "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B!", 'warn');
      });
    }

    window.addEventListener("resize", function () {
      document.querySelector(".ps-container").scrollTop = 0;
    });
    pusher.subscribe('pick-place-chanel').bind('pick-place-event', function (data) {
      Event.$emit("updatePlaces");
      if (_this.user != null) if (data.user.id == _this.user.id) return;

      _this.message("Лотерея", "".concat(data.user.name, " \u0437\u0430\u043D\u044F\u043B \u043C\u0435\u0441\u0442\u043E \u0432 \u043B\u043E\u0442\u0435\u0440\u0435\u0435 ").concat(data.lottery.title), 'warn');
    });
    pusher.subscribe('achievement-gain-chanel').bind('achievement-gain-event', function (data) {
      _this.message("Получение достижения", "".concat(data.message), 'warn');
    });
    pusher.subscribe('raffle-chanel').bind('raffle-event', function (data) {
      Event.$emit("startRaffle", data);

      _this.message("Сообщение от администрации", "".concat(data.message), 'warn');
    });
    pusher.subscribe('message-chanel').bind('message-event', function (data) {
      _this.message("".concat(data.title), "".concat(data.message), 'warn');
    });
    pusher.subscribe("user-update-chanel").bind('user-update-event', function (data) {
      if (_this.user.id == data.userId) {
        Event.$emit("updateStats");
        Event.$emit("updateAchievements");
        Event.$emit("updateTransactions");
        Event.$emit("updatePromocodes");
        Event.$emit("updateLotteries");
        Event.$emit("updateTickets");

        _this.$store.dispatch('getCurrentUser')["catch"](function (reason) {
          _this.message("Авторизация", "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B!", 'warn');
        });
      }
    });

    if (this.$route.query.token) {
      this.$store.dispatch('retriveUser', this.$route.query.token)["catch"](function (reason) {
        _this.message("Авторизация", "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B!", 'warn');
      });
      this.$router.replace({
        query: ''
      });
    }

    if (this.$route.query.error) {
      var error = "";

      switch (this.$route.query.error) {
        default:
        case 409:
          error = "Данная учетная запись уже зарегестриривана через другую социальную сеть!";
          break;
      }

      this.$router.replace({
        query: ''
      });
      this.$notify({
        group: 'main',
        type: 'error',
        title: 'Вход в систему',
        text: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443!".concat(error)
      });
    }
    /*   Event.$on('userLoggedIn', () => {
           this.authenticated = true;
           this.user = auth.user;
            this.$notify({
               group: 'main',
               type: 'success',
               title: 'Вход в систему',
               text: `Пользователь ${this.user.name} успешно вошел в систему!`
           })
        });*/


    Event.$on('updateUserProfile', function () {
      _this.$store.dispatch('getCurrentUser').then(function () {
        _this.authenticated = _this.check;
        _this.user = _this.getUser;
      })["catch"](function (reason) {
        _this.message("Авторизация", "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B!", 'warn');
      });
    });
    Event.$on("userLogout", function () {
      _this.authenticated = false;
      _this.user = null;
    });
    /*   Event.$on('userLoggedOut', () => {
           this.authenticated = false;
           this.user = null;
       });*/
  },
  components: {
    Chat: _components_Chat_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    Payment: _components_modals_Payment_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Help: _components_modals_Help_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    HowToStart: _components_modals_Howtostart_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    History: _components_modals_History_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FAQ: _components_modals_FAQ_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Promo: _components_modals_Promo_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Report: _components_modals_Report_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Login: _components_modals_Login_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Registration: _components_modals_Registration_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    Scroll: vue_custom_scrollbar__WEBPACK_IMPORTED_MODULE_15___default.a,
    AsideMenu: _components_AsideMenu_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    MainMenu: _components_MainMenu_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Rules: _components_modals_Rules_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Supplier: _components_modals_Supplier_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    About: _components_modals_About_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after {\n  content: \"\";\n  content: none;\n}\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\nbutton:focus,\ntextarea:focus,\nselect:focus,\ninput:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close:hover {\n  opacity: 1;\n}\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close:before {\n  transform: rotate(45deg);\n}\n.close:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay {\n  background: rgba(0, 0, 0, 0.999);\n  min-height: 100%;\n}\n.v--modal-overlay .v--modal-background-click {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.tabs-component {\n  width: 100%;\n}\n.tabs-component .tabs-component-tabs {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n@media (max-width: 880px) {\n.tabs-component .tabs-component-tabs {\n    justify-content: center;\n}\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab {\n  padding: 10px;\n  border-bottom: 2px transparent solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-active {\n  border-bottom: 2px yellow solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab .tabs-component-tab-a {\n  color: white;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 12px;\n  text-transform: uppercase;\n  position: relative;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-disabled .tabs-component-tab-a {\n  color: gray;\n}\n.tabs-component .tabs-component-panels .tabs-component-panel .scroll-area {\n  padding: 20px 0px 100px 0px;\n}\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\nbutton:focus,\ntextarea:focus,\nselect:focus,\ninput:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close:hover {\n  opacity: 1;\n}\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close:before {\n  transform: rotate(45deg);\n}\n.close:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay {\n  background: rgba(0, 0, 0, 0.999);\n  min-height: 100%;\n}\n.v--modal-overlay .v--modal-background-click {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.tabs-component {\n  width: 100%;\n}\n.tabs-component .tabs-component-tabs {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n@media (max-width: 880px) {\n.tabs-component .tabs-component-tabs {\n    justify-content: center;\n}\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab {\n  padding: 10px;\n  border-bottom: 2px transparent solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-active {\n  border-bottom: 2px yellow solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab .tabs-component-tab-a {\n  color: white;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 12px;\n  text-transform: uppercase;\n  position: relative;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-disabled .tabs-component-tab-a {\n  color: gray;\n}\n.tabs-component .tabs-component-panels .tabs-component-panel .scroll-area {\n  padding: 20px 0px 100px 0px;\n}\n.modal-body {\n  min-height: 300px;\n  height: auto;\n  width: 800px;\n  padding: 20px;\n  box-sizing: border-box;\n}\n@media (max-width: 800px) {\n.modal-body {\n    width: 100%;\n}\n}\n.modal-body .modal-logo {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.modal-body p {\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 150%;\n  text-transform: uppercase;\n  color: white;\n}\n.modal-body p span {\n  color: yellow;\n}\n.modal-body p a {\n  color: yellow;\n  font-weight: 900;\n}\n.modal-body hr {\n  border: none;\n  width: 100%;\n  height: 1px;\n  background-color: white;\n}\n.modal-body h1 {\n  width: 100%;\n  text-align: center;\n  font-weight: 100;\n  font-size: 24px;\n  line-height: 150%;\n  text-transform: uppercase;\n  color: white;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.modal-body h2 {\n  width: 100%;\n  text-align: center;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 150%;\n  text-transform: uppercase;\n  color: white;\n}\n.modal-body h2 span {\n  color: yellow;\n}\n.modal-body .input-group {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.modal-body .input-group label {\n  font-weight: 600;\n  font-size: 10px;\n  color: white;\n}\n.modal-body .input-group textarea,\n.modal-body .input-group select,\n.modal-body .input-group input {\n  border: none;\n  border-bottom: 1px solid white;\n  color: white;\n  font-weight: 100;\n  font-size: 24px;\n  width: 100%;\n  min-width: 100%;\n  text-align: center;\n  background: transparent;\n  padding: 15px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n}\n.modal-body .input-group textarea option,\n.modal-body .input-group select option,\n.modal-body .input-group input option {\n  color: #2c3e50;\n}\n.modal-body .input-group input[type=file] {\n  display: none;\n}\n.modal-body .input-group input[type=file] + label {\n  padding: 20px;\n  width: 100%;\n  cursor: pointer;\n  border: 1px yellow solid;\n}\n.modal-body .input-group textarea {\n  font-size: 16px;\n  text-align: left;\n  resize: vertical;\n}\n.modal-body .input-group select {\n  font-size: 16px;\n  text-transform: initial;\n}\n.promo-modal {\n  width: 500px;\n}\n.partner-modal {\n  width: 500px;\n}\n.partner-modal p {\n  text-align: justify;\n  font-weight: 100;\n}\n.partner-modal p:first-letter {\n  margin-left: 50px;\n}\n.supplier-modal {\n  width: 500px;\n}\n.supplier-modal p {\n  text-align: justify;\n  font-weight: 100;\n}\n.supplier-modal p:first-letter {\n  margin-left: 50px;\n}\n.report-modal,\n.help-modal {\n  width: 500px;\n}\n.about-modal p {\n  text-align: justify;\n  font-weight: 100;\n}\n.about-modal p:first-letter {\n  margin-left: 50px;\n}\n.recharge-modal {\n  width: 500px;\n}\n.questions-modal {\n  padding: 20px;\n  box-sizing: border-box;\n}\n.questions-modal > ul {\n  position: relative;\n  margin-top: 10px;\n  width: 100%;\n  padding: 10px 20px;\n  border: 1px yellow solid;\n  overflow: hidden;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.questions-modal > ul.active:after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  transform-origin: center center;\n  border-right: 2px solid yellow;\n  border-bottom: 2px solid yellow;\n  width: 10px;\n  height: 10px;\n  transform: rotate(45deg);\n  transition: 0.5s;\n}\n.questions-modal > ul:after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  transform-origin: center center;\n  border-bottom: 2px solid yellow;\n  width: 10px;\n  height: 10px;\n  transition: 0.5s;\n}\n.questions-modal > ul.active {\n  height: auto;\n}\n.questions-modal > ul.active > li > ul {\n  display: block;\n}\n.questions-modal > ul:focus, .questions-modal > ul:active, .questions-modal > ul:hover {\n  height: auto;\n  transition: 0.5s;\n}\n.questions-modal > ul:focus:after, .questions-modal > ul:active:after, .questions-modal > ul:hover:after {\n  transform: rotate(45deg);\n  transition: 0.5s;\n  border-right: 2px solid yellow;\n}\n.questions-modal > ul:focus > li > ul, .questions-modal > ul:active > li > ul, .questions-modal > ul:hover > li > ul {\n  display: block;\n}\n.questions-modal > ul > li > p {\n  color: white;\n  line-height: 150%;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 10px;\n  text-align: left;\n  text-overflow: ellipsis;\n  word-break: keep-all;\n}\n.questions-modal > ul > li > ul {\n  width: 100%;\n  display: none;\n}\n.questions-modal > ul > li > ul li {\n  color: yellow;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 5px 5px;\n}\n.history-modal {\n  width: 800px;\n}\n.history-modal ul {\n  border: 1px yellow solid;\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.history-modal ul li {\n  width: 16%;\n  text-align: center;\n  color: white;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.history-modal ul li a {\n  color: yellow;\n}\n.aside-menu-modal > nav {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.aside-menu-modal > nav > ul {\n  display: block;\n  width: 100%;\n}\n.aside-menu-modal > nav > ul > li {\n  font-size: 24px;\n  transition: 0.5s;\n  background-color: transparent;\n}\n.aside-menu-modal > nav > ul > li.more-menu {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  border-top: 1px white solid;\n}\n.aside-menu-modal > nav > ul > li.more-menu .lang {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.aside-menu-modal > nav > ul > li.more-menu .lang a {\n  padding: 5px;\n}\n.aside-menu-modal > nav > ul > li.more-menu ul.more li {\n  cursor: pointer;\n  text-align: center;\n}\n.aside-menu-modal > nav > ul > li.more-menu ul.more li a {\n  color: lightgray;\n  font-size: 16px;\n  text-decoration: none;\n  transition: 0.5s;\n}\n.aside-menu-modal > nav > ul > li.more-menu ul.more li a:hover {\n  color: yellow;\n}\n.aside-menu-modal > nav > ul > li.more-menu ul.more li a.report {\n  font-weight: 900;\n  color: yellow;\n}\n.aside-menu-modal > nav > ul > li.more-menu ul.more li a.report:hover {\n  color: darkred;\n}\n.aside-menu-modal > nav > ul .btn {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n}\n.aside-menu-modal > nav > ul .btn.btn-black-2 {\n  box-shadow: none;\n}\n.aside-menu-modal > nav > ul .btn.btn-yellow {\n  color: yellow;\n}\n.aside-menu-modal > nav > ul .btn.btn-yellow:hover {\n  color: #2c3e50;\n}\n.main-menu-modal > nav {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-menu-modal > nav > ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-direction: column-reverse;\n}\n.main-menu-modal > nav > ul > li {\n  font-size: 24px;\n  transition: 0.5s;\n  background-color: transparent;\n  width: 100%;\n}\n.main-menu-modal > nav > ul > li.auth {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 10px;\n  box-sizing: border-box;\n  border-bottom: 1px yellow solid;\n}\n.main-menu-modal > nav > ul > li.auth .btn {\n  width: 100%;\n}\n.main-menu-modal > nav > ul > li.auth .btn.btn-info {\n  background-color: #007fb3;\n}\n.main-menu-modal > nav > ul > li.auth .btn.btn-primary {\n  background-color: #7ab300;\n  margin-top: 10px;\n}\n.main-menu-modal > nav > ul > li.user {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  border-bottom: 1px solid yellow;\n}\n.main-menu-modal > nav > ul > li.user .avatar {\n  width: 120px;\n  height: 120px;\n}\n.main-menu-modal > nav > ul > li.user .avatar img {\n  width: 100%;\n  height: 100%;\n}\n.main-menu-modal > nav > ul > li.user .info p {\n  width: 100%;\n  text-align: left;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 150%;\n  text-transform: uppercase;\n  color: white;\n}\n.main-menu-modal > nav > ul > li.user .info p strong {\n  color: yellow;\n}\n.main-menu-modal > nav > ul > li.user .dropdown {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.main-menu-modal > nav > ul > li.user .dropdown ul {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.main-menu-modal > nav > ul > li.user .dropdown ul li {\n  width: 100%;\n  text-align: center;\n}\n.main-menu-modal > nav > ul > li.user .dropdown ul li a {\n  text-decoration: none;\n  font-size: 24px;\n  color: white;\n  padding: 20px;\n  display: block;\n  font-weight: 900;\n}\n.main-menu-modal > nav > ul > li.user .dropdown ul li:hover {\n  background-color: white;\n}\n.main-menu-modal > nav > ul > li.user .dropdown ul li:hover a {\n  color: #2c3e50;\n}\n.main-menu-modal > nav > ul .btn {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n}\n.main-menu-modal > nav > ul .btn.btn-black:hover {\n  box-shadow: none;\n  background-color: yellow;\n  color: #2c3e50;\n}\n.main-menu-modal > nav > ul .btn.btn-black-2:hover {\n  box-shadow: none;\n  background-color: yellow;\n}\n.main-menu-modal > nav > ul .btn.btn-yellow {\n  color: yellow;\n}\n.main-menu-modal > nav > ul .btn.btn-yellow:hover {\n  box-shadow: none;\n  color: #2c3e50;\n}\n.about-modal,\n.rules-modal {\n  width: 800px;\n}\n@media (max-width: 800px) {\n.about-modal,\n.rules-modal {\n    width: 100%;\n}\n}\n.about-modal ul,\n.rules-modal ul {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.about-modal ul li,\n.rules-modal ul li {\n  width: 100%;\n}\n.about-modal p,\n.rules-modal p {\n  color: white;\n  line-height: 150%;\n  padding: 20px;\n  box-sizing: border-box;\n  font-size: 16px;\n  font-weight: 100;\n  text-align: justify;\n}\n.about-modal p:first-letter,\n.rules-modal p:first-letter {\n  margin-left: 50px;\n}\n.about-modal p strong,\n.rules-modal p strong {\n  font-weight: 800;\n}\n.about-modal p a,\n.rules-modal p a {\n  color: yellow;\n  font-weight: 800;\n}\n.about-modal h2,\n.rules-modal h2 {\n  color: white;\n  padding: 20px;\n  box-sizing: border-box;\n  font-size: 20px;\n  font-weight: 800;\n}\n.about-modal h2 strong,\n.rules-modal h2 strong {\n  color: yellow;\n}\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\nТЕМА 1\n$mainBg:'img/background.jpg';\n$color1:#2c3e50; //color\n$color2: #393939; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*\nТЕМА 2\n\n$mainBg:'img/background-landing-2.jpg';\n$color1:#393939; //color\n$color2: #4a2626; //bg color\n$color3:yellow; //color \\ btn-color\n$color4:white; // color \\ btn-color\n$color5:darkred; //color\n$color6:gray;\n$color7:#74b65f; //btn-random\n$color8:#5fa252; //btn-random line\n$color9:#d86a43; //btn-buy\n$color10:#393939af; //slot in lottery + opacity\n$color11:#50504f; //number in slot\n$color12:black; //number in slot\n$color13:lightgray;*/\n/*ТЕМА 3*/\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\nbutton:focus,\ntextarea:focus,\nselect:focus,\ninput:focus {\n  outline: none;\n}\n\n/* Close modal button*/\n.close {\n  position: fixed;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.8;\n}\n.close:hover {\n  opacity: 1;\n}\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n}\n.close:before {\n  transform: rotate(45deg);\n}\n.close:after {\n  transform: rotate(-45deg);\n}\n\n/* Scroll top button*/\n.scrollTop {\n  position: fixed;\n  bottom: 80px;\n  right: 0px;\n  background: red;\n  opacity: 0.3;\n  z-index: 100;\n  padding: 20px;\n  color: white;\n  font-weight: 800;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.scrollTop:hover {\n  transition: 0.5s;\n  opacity: 0.9;\n}\n\n/* Scroll area*/\n.scroll-area {\n  height: 100%;\n  width: 100%;\n  padding: 100px 0px;\n  box-sizing: border-box;\n}\n\n/* Google recaptcha btn*/\n.grecaptcha-badge {\n  z-index: 100;\n}\n\n/* notifications*/\n.vue-notification {\n  padding: 20px;\n  margin: 0 5px 5px;\n  z-index: 1200;\n  font-size: 14px;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n  box-shadow: 0px 0px 5px 0px black;\n}\n.vue-notification.warn {\n  background: #393939;\n  border-left-color: yellow;\n  color: yellow;\n}\n.vue-notification.error {\n  background: yellow;\n  color: #393939;\n  border-left-color: #393939;\n}\n.vue-notification.success {\n  background: #a0cd00;\n  border-left-color: #42A85F;\n}\n\n/* modal window*/\n.v--modal-overlay {\n  background: rgba(0, 0, 0, 0.999);\n  min-height: 100%;\n}\n.v--modal-overlay .v--modal-background-click {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.v--modal-overlay .v--modal-background-click .v--modal {\n  background: transparent;\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100% !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n}\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: transparent;\n  opacity: 0.9;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: yellow;\n  width: 7px;\n}\nimg[lazy=loading] {\n  width: 50px !important;\n  height: 50px !important;\n}\nimg[lazy=error] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.tabs-component {\n  width: 100%;\n}\n.tabs-component .tabs-component-tabs {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n@media (max-width: 880px) {\n.tabs-component .tabs-component-tabs {\n    justify-content: center;\n}\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab {\n  padding: 10px;\n  border-bottom: 2px transparent solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-active {\n  border-bottom: 2px yellow solid;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab .tabs-component-tab-a {\n  color: white;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 12px;\n  text-transform: uppercase;\n  position: relative;\n}\n.tabs-component .tabs-component-tabs .tabs-component-tab.is-disabled .tabs-component-tab-a {\n  color: gray;\n}\n.tabs-component .tabs-component-panels .tabs-component-panel .scroll-area {\n  padding: 20px 0px 100px 0px;\n}\n.tooltip {\n  display: block !important;\n  z-index: 10000;\n}\n.tooltip .tooltip-inner {\n  background: #2c3e50;\n  box-shadow: 0px 0px 2px 0px black;\n  color: yellow;\n  font-family: \"Open Sans\";\n  font-weight: 900;\n  padding: 10px 20px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 150%;\n}\n.tooltip .tooltip-arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: 5px;\n  border-color: #2c3e50;\n  z-index: 1;\n}\n.tooltip[x-placement^=top] {\n  margin-bottom: 5px;\n}\n.tooltip[x-placement^=top] .tooltip-arrow {\n  border-width: 5px 5px 0 5px;\n  border-left-color: transparent !important;\n  border-right-color: transparent !important;\n  border-bottom-color: transparent !important;\n  bottom: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.tooltip[x-placement^=bottom] {\n  margin-top: 10px;\n}\n.tooltip[x-placement^=bottom] .tooltip-arrow {\n  border-width: 0 10px 10px 10px;\n  border-left-color: transparent !important;\n  border-right-color: transparent !important;\n  border-top-color: transparent !important;\n  top: -10px;\n  left: calc(50% - 10px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.tooltip[x-placement^=right] {\n  margin-left: 5px;\n}\n.tooltip[x-placement^=right] .tooltip-arrow {\n  border-width: 5px 5px 5px 0;\n  border-left-color: transparent !important;\n  border-top-color: transparent !important;\n  border-bottom-color: transparent !important;\n  left: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n.tooltip[x-placement^=left] {\n  margin-right: 5px;\n}\n.tooltip[x-placement^=left] .tooltip-arrow {\n  border-width: 5px 0 5px 5px;\n  border-top-color: transparent !important;\n  border-right-color: transparent !important;\n  border-bottom-color: transparent !important;\n  right: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n.tooltip.popover {\n  color: white;\n}\n.tooltip.popover .popover-inner {\n  background: white;\n  color: black;\n  padding: 24px;\n  border-radius: 5px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);\n}\n.tooltip.popover .popover-arrow {\n  border-color: white;\n}\n.tooltip[aria-hidden=true] {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.15s, visibility 0.15s;\n}\n.tooltip[aria-hidden=false] {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.15s;\n}\n.hutplace-preloader {\n  color: red;\n  font-weight: 900;\n  z-index: 1002 !important;\n  width: 100% !important;\n  height: 100% !important;\n}\n.hutplace-preloader .loading-circle {\n  border-left-color: red !important;\n}\n.hutplace-preloader .loading-text {\n  margin-top: 15px;\n  color: yellow;\n  font-size: 12px;\n  font-family: \"Open Sans\";\n}\nbody {\n  overflow: hidden;\n  /* @media (max-height: 670px) {\n     & {\n       zoom:0.8;\n     }\n   }*/\n}\n.full {\n  width: 100%;\n  box-sizing: border-box;\n}\n.btn {\n  padding: 20px 20px;\n  text-align: center;\n  font-weight: 800;\n  list-style: none;\n  cursor: pointer;\n  border: none;\n  box-shadow: 2px 2px 2px 0px black;\n  transition: 0.5s;\n  box-sizing: border-box;\n}\n.btn a {\n  text-decoration: none;\n}\n.btn:focus {\n  outline: none;\n}\n.btn.btn-yellow {\n  color: #2c3e50;\n  background-color: yellow;\n  box-shadow: 2px 2px 2px 0px black;\n}\n.btn.btn-yellow a {\n  color: #2c3e50;\n}\n.btn.btn-yellow:hover {\n  background-color: white;\n  transition: 0.5s;\n  color: #2c3e50;\n}\n.btn.btn-yellow:hover a {\n  color: #2c3e50;\n}\n.btn.btn-black {\n  color: white;\n  background-color: #2c3e50;\n  box-shadow: 2px 2px 2px 0px black, 0px 0px 5px 2px white inset;\n}\n.btn.btn-black a {\n  color: white;\n}\n.btn.btn-black:hover {\n  box-shadow: 2px 2px 2px 0px black, 0px 0px 5px 2px yellow inset;\n  transition: 0.5s;\n}\n.btn.btn-black-2 {\n  color: white;\n  background-color: #2c3e50;\n  box-shadow: 2px 2px 2px 0px black;\n}\n.btn.btn-black-2 a {\n  color: white;\n}\n.btn.btn-black-2:hover {\n  transition: 0.5s;\n  background-color: white;\n  color: #2c3e50;\n}\n.btn.btn-black-2:hover a {\n  color: #2c3e50;\n}\n.btn.btn-black-2.active {\n  background-color: yellow;\n  color: #2c3e50;\n}\n.btn.btn-primary {\n  color: white;\n  background-color: #7ab300;\n}\n.btn.btn-primary a {\n  color: white;\n}\n.btn.btn-primary:hover {\n  background-color: white;\n  transition: 0.5s;\n}\n.btn.btn-info {\n  color: white;\n  background-color: #007fb3;\n}\n.btn.btn-info a {\n  color: white;\n}\n.btn.btn-info:hover {\n  background-color: white;\n  transition: 0.5s;\n}\nh1.main-title {\n  font-weight: 100;\n  color: white;\n  text-transform: uppercase;\n  font-size: 36px;\n  line-height: 150%;\n  width: 100%;\n}\np.description {\n  border-left: 1px yellow solid;\n  padding: 20px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n  font-style: italic;\n  font-size: 14px;\n  color: white;\n  line-height: 150%;\n  margin-bottom: 20px;\n  width: 100%;\n}\nheader, section, footer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\nheader .center, section .center, footer .center {\n  padding: 10px;\n  box-sizing: border-box;\n  width: 1200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 1200px) {\nheader .center, section .center, footer .center {\n    width: 100%;\n}\n}\nheader {\n  height: 80px;\n}\nheader .center {\n  height: inherit;\n}\n#app {\n  font-family: \"Open Sans\", sans-serif;\n  text-align: center;\n  color: #393939;\n  width: 100%;\n  height: 100vh;\n  background-image: url(\"/img/background-landing.jpg\");\n  background-color: #2c3e50;\n  background-attachment: fixed;\n  background-position: center center;\n  background-size: cover;\n}\nheader {\n  height: 80px;\n  background-color: #2c3e50;\n  box-shadow: 0px 0px 6px 0px black;\n  position: relative;\n  z-index: 101;\n}\nheader .center {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\nheader .center .logo-wrapper {\n  background-color: #2c3e50;\n  padding: 0 10px 10px 10px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\nheader .center .logo-wrapper:after {\n  content: \"\";\n  width: 100%;\n  height: 54px;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  position: absolute;\n  box-shadow: 7px 8px 2px -5px black;\n}\nheader .center .logo-wrapper .logo {\n  width: 100px;\n  transition: 0.5s;\n}\n@media (max-width: 1050px) {\nheader .center .logo-wrapper {\n    background-color: transparent;\n}\nheader .center .logo-wrapper:after {\n    content: none;\n}\nheader .center .logo-wrapper .logo {\n    width: 60px;\n    transition: 0.5s;\n}\n}\nheader .center .auth {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 300px;\n}\nheader .center .auth button {\n  margin-left: 10px;\n}\nheader .center .user {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 300px;\n  position: relative;\n  z-index: 0;\n}\nheader .center .user .info {\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\nheader .center .user .info p {\n  text-align: left;\n  color: white;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-size: 10pt;\n  line-height: 150%;\n  margin-top: 0px;\n}\nheader .center .user .info p.pucks {\n  color: yellow;\n  font-weight: 600;\n}\nheader .center .user .info p.pucks strong {\n  color: white;\n}\nheader .center .user .avatar {\n  position: relative;\n  width: 60px;\n  height: 60px;\n}\nheader .center .user .avatar img {\n  width: 100%;\n  height: 100%;\n}\nheader .center .user .avatar:before {\n  content: \"\";\n  width: 10px;\n  height: 2px;\n  background: white;\n  position: absolute;\n  bottom: -5px;\n  right: 20px;\n  transform: rotate(-15deg);\n}\nheader .center .user .avatar:after {\n  content: \"\";\n  width: 10px;\n  height: 2px;\n  background: white;\n  position: absolute;\n  bottom: -5px;\n  left: 20px;\n  transform: rotate(15deg);\n}\nheader .center .user .dropdown {\n  transition: 0.5s;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  bottom: -50px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\nheader .center .user .dropdown > ul > li {\n  padding: 10px 25px;\n  background-color: #2c3e50;\n}\nheader .center .user .dropdown > ul > li > a {\n  text-align: left;\n  text-decoration: none;\n  color: white;\n}\nheader .center .user .dropdown > ul > li > a:hover {\n  color: yellow;\n}\nheader .center .btn-mobile {\n  display: none;\n  width: 150px;\n  margin-left: -80px;\n}\n@media (max-width: 1050px) {\nheader .center .btn-mobile {\n    display: block;\n    padding: 15px 15px;\n    margin-top: 5px;\n}\n}\n@media (max-width: 700px) {\nheader .center .btn-mobile {\n    margin-left: -40px;\n}\n}\nheader .center nav {\n  position: relative;\n  border: none;\n}\nheader .center nav ul {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n}\nheader .center nav ul li {\n  margin-left: 10px;\n}\n@media (max-width: 1050px) {\nheader .center nav {\n    width: 25px;\n    height: 20px;\n    border-top: 1px white solid;\n    border-bottom: 1px white solid;\n    cursor: pointer;\n    top: 15px;\n    right: 20px;\n}\nheader .center nav:after {\n    content: \"\";\n    width: 100%;\n    position: absolute;\n    top: 10px;\n    left: 0;\n    height: 1px;\n    background: white;\n}\nheader .center nav ul {\n    display: none !important;\n}\n}\naside {\n  position: fixed;\n  z-index: 100;\n  top: 150px;\n  left: 0px;\n  width: 200px;\n  background-color: #2c3e507d;\n  padding: 10px;\n}\naside nav {\n  width: 100%;\n}\naside nav > ul {\n  width: 100%;\n}\naside nav > ul > li {\n  margin-bottom: 10px;\n  transition: 0.5s;\n  box-sizing: border-box;\n}\naside nav > ul > li.more-menu {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}\naside nav > ul > li.more-menu ul.more li {\n  cursor: pointer;\n  padding: 2px;\n}\naside nav > ul > li.more-menu ul.more li a {\n  text-align: center;\n  color: lightgray;\n  font-size: 16px;\n  text-decoration: none;\n  transition: 0.5s;\n}\naside nav > ul > li.more-menu ul.more li a:hover {\n  color: yellow;\n}\naside nav > ul > li.more-menu ul.more li a.report {\n  font-weight: 900;\n  color: yellow;\n}\naside nav > ul > li.more-menu ul.more li a.report:hover {\n  color: darkred;\n}\n@media (min-width: 601px) and (max-width: 1550px) {\naside {\n    left: 0px;\n    width: 50px;\n    background-color: transparent;\n    padding: 0px;\n}\naside:hover {\n    width: 200px;\n    background-color: #2c3e507d;\n    padding: 10px;\n}\naside:hover > nav {\n    background: none;\n    box-shadow: none;\n    width: auto;\n    height: auto;\n    border-radius: initial;\n}\naside:hover > nav > ul {\n    display: block;\n}\naside > nav {\n    width: 50px;\n    background-image: url(\"/img/btn-menu.png\");\n    background-position: center center;\n    background-color: yellow;\n    background-size: 20px 20px;\n    background-repeat: no-repeat;\n    box-shadow: 2px 2px 2px 0px black;\n    height: 50px;\n    border-radius: 0px 50% 50% 0px;\n}\naside > nav > ul {\n    display: none;\n}\n}\n@media (max-width: 600px) {\naside {\n    left: 0px;\n    background-color: transparent;\n    padding: 0px;\n}\naside > nav {\n    width: 50px;\n    background-image: url(\"/img/btn-menu.png\");\n    background-position: center center;\n    background-color: yellow;\n    background-size: 20px 20px;\n    background-repeat: no-repeat;\n    box-shadow: 0px 0px 2px 0px black;\n    height: 50px;\n    border-radius: 0px 50% 50% 0px;\n    cursor: pointer;\n}\naside > nav > ul {\n    display: none;\n}\n}\n#pageContent {\n  height: 100vh;\n  width: 100%;\n}\n#pageContent .center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 600px) {\n#pageContent .center {\n    margin: 0;\n    padding: 20px;\n    box-sizing: border-box;\n    width: 100%;\n}\n}\n.no-items {\n  width: 100%;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.5;\n}\n.no-items img {\n  width: 500px;\n  height: 100%;\n}\n@media (max-width: 500px) {\n.no-items {\n    height: auto;\n    width: 100%;\n}\n.no-items img {\n    width: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "ul",
    [
      _c(
        "router-link",
        {
          staticClass: "btn btn-black-2",
          attrs: { to: { name: "Playzone" }, tag: "li" }
        },
        [_vm._v(_vm._s(_vm.$lang.menu.playzone) + "\n    ")]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "btn btn-black-2",
          attrs: { to: { name: "Market" }, tag: "li" }
        },
        [_vm._v(_vm._s(_vm.$lang.menu.market) + "\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "btn btn-black-2",
          on: {
            click: function($event) {
              return _vm.openModal("promo")
            }
          }
        },
        [_vm._v(_vm._s(_vm.$lang.menu.promocodes))]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "btn btn-black-2",
          attrs: { to: { name: "Achievements" }, tag: "li" }
        },
        [_vm._v(_vm._s(_vm.$lang.menu.achievement) + "\n    ")]
      ),
      _vm._v(" "),
      _c("li", { staticClass: "more-menu" }, [
        _c("ul", { staticClass: "more" }, [
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("rules")
                }
              }
            },
            [
              _c("a", { attrs: { href: "#rules" } }, [
                _vm._v(_vm._s(_vm.$lang.menu.terms_of_use))
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("supplier")
                }
              }
            },
            [
              _c("a", { attrs: { href: "#supplier" } }, [
                _vm._v(_vm._s(_vm.$lang.menu.become_a_supplier))
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("about")
                }
              }
            },
            [
              _c("a", { attrs: { href: "#about" } }, [
                _vm._v(_vm._s(_vm.$lang.menu.about_us))
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.openModal("report")
                }
              }
            },
            [
              _c("a", { staticClass: "report", attrs: { href: "#report" } }, [
                _vm._v(_vm._s(_vm.$lang.menu.report))
              ])
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
      [_vm._v(_vm._s(_vm.$lang.menu.how_to_start))]
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
      [_vm._v(_vm._s(_vm.$lang.menu.history))]
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
      [_vm._v(_vm._s(_vm.$lang.menu.help))]
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
      [_vm._v(_vm._s(_vm.$lang.menu.f_a_q))]
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
      [_vm._v(_vm._s(_vm.$lang.menu.recharge))]
    ),
    _vm._v(" "),
    _vm.authenticated && _vm.user != null
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
                _vm._v(" " + _vm._s(_vm.$lang.menu.money))
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
                            { attrs: { to: { name: "Cabinet" }, tag: "a" } },
                            [_vm._v(_vm._s(_vm.$lang.menu.user_cabinet))]
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
                              [_vm._v(_vm._s(_vm.$lang.menu.logout))]
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
              [_vm._v(_vm._s(_vm.$lang.menu.sign_in))]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary ",
                attrs: { to: "/signup", tag: "button" }
              },
              [_vm._v(_vm._s(_vm.$lang.menu.sign_up))]
            )
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/About.vue?vue&type=template&id=5b507d4f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/About.vue?vue&type=template&id=5b507d4f& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "modal-body about-modal" }, [
      _c("h1", [_vm._v("Приветствуем вас на Hutplace.net")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n        Вы находитесь на первом в мире, хоккейном портале по игре NHL 20. Мы реализовали большое количество интересных идей на одной игровой платформе и рады предложить вам качественный, удобный и безопасный сервис. У нас вы сможете продать или купить карточки игроков/монеты, открыть игровые наборы, принять участие в бесплатных розыгрышах или в захватывающих вагер-матчах с другими участниками портала.\n    "
        )
      ]),
      _vm._v(" "),
      _c("h2", [_c("strong", [_vm._v("Hutplace.net это:")])]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [
            _vm._v("Команда профессионалов, постоянно работающая на результат.")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "Качественный, удобный и безопасный сервис включающий в себя различные игровые развлекательные режимы."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "Ваш верный помощник и партнер в создании команды своей мечты в режиме HUT."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h2", [_c("strong", [_vm._v("Спасибо что выбрали нас!")])])
    ])
  }
]
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Help.vue?vue&type=template&id=07ee666f&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Help.vue?vue&type=template&id=07ee666f& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "modal-body help-modal" }, [
      _c("h1", [_vm._v("Помощь и обратная связь")]),
      _vm._v(" "),
      _c("div", { staticClass: "input-group" }, [
        _c("label", [_vm._v("Тема сообщение")]),
        _vm._v(" "),
        _c("input", { attrs: { type: "text" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-group" }, [
        _c("label", [_vm._v("Email")]),
        _vm._v(" "),
        _c("input", { attrs: { type: "email" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-group" }, [
        _c("label", [_vm._v("Сообщение")]),
        _vm._v(" "),
        _c("textarea", { attrs: { placeholder: "Введите ваше сообщение" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-group" }, [
        _c("div", { staticClass: "btn btn-yellow full" }, [
          _vm._v("Задать вопрос")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal-body history-modal" },
    [
      _c("h1", [_vm._v("История игр пользователей")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.historyList, function(item, index) {
        return _vm.historyList != null && _vm.historyList.length > 0
          ? _c(
              "ul",
              {
                staticClass: "body",
                on: {
                  click: function($event) {
                    return _vm.selfHide()
                  }
                }
              },
              [
                _c("li", [_vm._v(_vm._s(++index))]),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          tag: "a",
                          to: {
                            name: "Lottery",
                            params: { gameId: item.lottery_id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.lottery_title) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: _vm.getPlatform(item.console_type),
                        expression: "getPlatform(item.console_type)"
                      }
                    ],
                    attrs: { alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          tag: "a",
                          to: {
                            name: "PlayerInfo",
                            params: { userId: item.user_id }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.user_name) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(item.end))])
              ]
            )
          : _c("h3", [_vm._v("Не найдено ни одного победителя")])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "head" }, [
      _c("li", [_vm._v("#")]),
      _vm._v(" "),
      _c("li", [_vm._v("Игра")]),
      _vm._v(" "),
      _c("li", [_vm._v("Платформа")]),
      _vm._v(" "),
      _c("li", [_vm._v("Победитель")]),
      _vm._v(" "),
      _c("li", [_vm._v("Дата заверщения")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Howtostart.vue?vue&type=template&id=5990e025&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Howtostart.vue?vue&type=template&id=5990e025& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal-body" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "modal-logo" }, [
      _c("img", {
        directives: [
          {
            name: "lazy",
            rawName: "v-lazy",
            value: "/img/vk-login-icon.png",
            expression: "'/img/vk-login-icon.png'"
          }
        ],
        attrs: { alt: "" }
      })
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "modal-logo" }, [
      _c("img", {
        directives: [
          {
            name: "lazy",
            rawName: "v-lazy",
            value: "/img/money-icon-1.png",
            expression: "'/img/money-icon-1.png'"
          }
        ],
        attrs: { alt: "" }
      })
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _c("div", { staticClass: "modal-logo" }, [
      _c("img", {
        directives: [
          {
            name: "lazy",
            rawName: "v-lazy",
            value: "/img/security-icon-1.png",
            expression: "'/img/security-icon-1.png'"
          }
        ],
        attrs: { alt: "" }
      })
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(6),
    _vm._v(" "),
    _c("div", { staticClass: "modal-logo" }, [
      _c("img", {
        directives: [
          {
            name: "lazy",
            rawName: "v-lazy",
            value: "/img/time-icon-1.png",
            expression: "'/img/time-icon-1.png'"
          }
        ],
        attrs: { alt: "" }
      })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Для принятия участия в розыгрыше,"),
      _c("br"),
      _vm._v("\n    необходимо авторизоваться через ВК")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Перед участием в игре незабудьте"),
      _c("br"),
      _vm._v("\n    пополнить свой счет!")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(" В игре собственная валюта - "),
      _c("span", [_vm._v("Pucks")]),
      _vm._v(".")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("На балансе должно быть досаточное "),
      _c("br"),
      _vm._v("\n    количество средств.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _vm._v("1 "),
      _c("span", [_vm._v("Pucks")]),
      _vm._v(" = 1 Руб")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Честность выбора победителя можно "),
      _c("br"),
      _vm._v("\n    проверить на сайте "),
      _c("span", [_vm._v("random.org")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Быстрая доставка выигрыша"),
      _c("br"),
      _vm._v("\n    в течении 24-х часов")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Login.vue?vue&type=template&id=44affb2b&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Login.vue?vue&type=template&id=44affb2b&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal-body", attrs: { id: "login-form" } }, [
    _vm.error
      ? _c("div", { staticClass: "alert alert-danger" }, [
          _c("p", [
            _vm._v(
              "There was an error, unable to sign in with those credentials."
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("h1", [_vm._v("Авторизация пользователя")]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.login($event)
          }
        }
      },
      [
        _c("div", { staticClass: "input-group" }, [
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
              autocomplete: "false",
              type: "email",
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
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
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
              autocomplete: "false",
              type: "password",
              id: "password",
              placeholder: "Password",
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
          })
        ]),
        _vm._v(" "),
        _vm._m(1)
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
      _c("img", { attrs: { src: "/img/money-card-icon-1.png", alt: "" } })
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
        [_vm._v("Sign in")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Promo.vue?vue&type=template&id=7b7891d1&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Promo.vue?vue&type=template&id=7b7891d1& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal-body promo-modal" }, [
    _c("div", { staticClass: "modal-logo" }, [
      _c("img", {
        directives: [
          {
            name: "lazy",
            rawName: "v-lazy",
            value: "/img/promo-logo.png",
            expression: "'/img/promo-logo.png'"
          }
        ],
        attrs: { alt: "" }
      })
    ]),
    _vm._v(" "),
    _c("h1", [_vm._v("Введите действительный промокод")]),
    _vm._v(" "),
    _c("div", { staticClass: "input-group" }, [
      _c("label", [_vm._v("Ваш промокод")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.promo,
            expression: "promo"
          }
        ],
        attrs: { type: "text", autocomplete: "off", maxlength: "8" },
        domProps: { value: _vm.promo },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.promo = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "input-group" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-yellow full",
          on: {
            click: function($event) {
              return _vm.doRequest()
            }
          }
        },
        [_vm._v("Активировать")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Registration.vue?vue&type=template&id=2866e432&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Registration.vue?vue&type=template&id=2866e432&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal-body", attrs: { id: "register-form" } },
    [
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
      _vm._m(0),
      _vm._v(" "),
      _c("h1", [_vm._v("Регистрация нового пользователя")]),
      _vm._v(" "),
      !_vm.success
        ? _c(
            "form",
            {
              attrs: { method: "post", "accept-charset": "UTF-8" },
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
                  staticClass: "input-group",
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
                  staticClass: "input-group",
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
                  staticClass: "input-group",
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
              _c("div", { staticClass: "input-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-yellow full",
                    attrs: { type: "submit" },
                    on: { click: _vm.recaptcha }
                  },
                  [_vm._v("Submit")]
                )
              ])
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-logo" }, [
      _c("img", { attrs: { src: "/img/money-card-icon-1.png", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal-body report-modal" },
    [
      _vm._m(0),
      _vm._v(" "),
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
          _vm._m(1),
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
          _vm._m(2)
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
    return _c("div", { staticClass: "modal-logo" }, [
      _c("img", { attrs: { src: "/img/report-logo.png", alt: "" } })
    ])
  },
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
        _c("option", { attrs: { value: "" } }, [_vm._v("Ошибка интерфейса")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v("Сетевые ошибки")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v("Логические ошибки")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d& ***!
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
  return _c(
    "div",
    [
      _c("header", { attrs: { id: "pageHeader" } }, [
        _c("div", { staticClass: "center" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-yellow btn-mobile",
              on: {
                click: function($event) {
                  return _vm.show("payment")
                }
              }
            },
            [_vm._v(_vm._s(_vm.$lang.messages.recharge))]
          ),
          _vm._v(" "),
          _c(
            "nav",
            {
              on: {
                click: function($event) {
                  return _vm.showMainMenu()
                }
              }
            },
            [
              _c("main-menu", {
                attrs: { authenticated: _vm.authenticated, user: _vm.user },
                on: {
                  modal: function($event) {
                    return _vm.show($event)
                  }
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("scroll", { attrs: { id: "pageContent", settings: _vm.settings } }, [
        _c(
          "div",
          { staticClass: "center" },
          [_c("keep-alive", [_c("router-view")], 1)],
          1
        )
      ]),
      _vm._v(" "),
      _c("aside", [
        _c(
          "nav",
          {
            on: {
              click: function($event) {
                return _vm.showAsideMenu()
              }
            }
          },
          [
            _c("aside-menu", {
              on: {
                modal: function($event) {
                  return _vm.show($event)
                }
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("footer"),
      _vm._v(" "),
      _c("div", { staticClass: "lang" }, [
        _c("ul", [
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.lang("ru")
                }
              }
            },
            [_c("img", { attrs: { src: "/img/ru.jpg", alt: "" } })]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.lang("en")
                }
              }
            },
            [_c("img", { attrs: { src: "/img/en.jpg", alt: "" } })]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.lang("fi")
                }
              }
            },
            [_c("img", { attrs: { src: "/img/fi.jpg", alt: "" } })]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.lang("se")
                }
              }
            },
            [_c("img", { attrs: { src: "/img/se.jpg", alt: "" } })]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.lang("cz")
                }
              }
            },
            [_c("img", { attrs: { src: "/img/cz.gif", alt: "" } })]
          )
        ])
      ]),
      _vm._v(" "),
      _c("chat", { attrs: { show: _vm.user != null } }),
      _vm._v(" "),
      _c("notifications", { attrs: { group: "main" } }),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "report",
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
                    return _vm.hide("report")
                  }
                }
              }),
              _vm._v(" "),
              _c("report")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { name: "promo", height: "auto" } },
        [
          _c("a", {
            staticClass: "close",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.hide("promo")
              }
            }
          }),
          _vm._v(" "),
          _c("promo")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { name: "payment", height: "auto" } },
        [
          _c("a", {
            staticClass: "close",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.hide("payment")
              }
            }
          }),
          _vm._v(" "),
          _c("payment", {
            on: {
              "self-hide": function($event) {
                return _vm.hide("payment")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "howtostart",
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
                    return _vm.hide("howtostart")
                  }
                }
              }),
              _vm._v(" "),
              _c("how-to-start")
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
            name: "history",
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
                    return _vm.hide("history")
                  }
                }
              }),
              _vm._v(" "),
              _c("history", {
                on: {
                  "self-hide": function($event) {
                    return _vm.hide("history")
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
          attrs: { name: "help", adaptive: true, width: "100%", height: "100%" }
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
                    return _vm.hide("help")
                  }
                }
              }),
              _vm._v(" "),
              _c("help")
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
          attrs: { name: "faq", adaptive: true, width: "100%", height: "100%" }
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
                    return _vm.hide("faq")
                  }
                }
              }),
              _vm._v(" "),
              _c("f-a-q")
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
            name: "login",
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
                    return _vm.hide("login")
                  }
                }
              }),
              _vm._v(" "),
              _c("login")
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
            name: "registration",
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
                    return _vm.hide("registration")
                  }
                }
              }),
              _vm._v(" "),
              _c("registration")
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
            name: "rules",
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
                    return _vm.hide("rules")
                  }
                }
              }),
              _vm._v(" "),
              _c("rules")
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
            name: "supplier",
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
                    return _vm.hide("supplier")
                  }
                }
              }),
              _vm._v(" "),
              _c("supplier")
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
            name: "about",
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
                    return _vm.hide("about")
                  }
                }
              }),
              _vm._v(" "),
              _c("about")
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
            name: "aside-menu",
            adaptive: true,
            width: "100%",
            height: "100%"
          }
        },
        [
          _c("a", {
            staticClass: "close",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.hide("aside-menu")
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body aside-menu-modal" }, [
            _c(
              "nav",
              [
                _c("aside-menu", {
                  on: {
                    modal: function($event) {
                      return _vm.show($event)
                    },
                    "self-hide": function($event) {
                      return _vm.hide("aside-menu")
                    }
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "main-menu",
            adaptive: true,
            width: "100%",
            height: "100%"
          }
        },
        [
          _c("a", {
            staticClass: "close",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.hide("main-menu")
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body main-menu-modal" }, [
            _c(
              "nav",
              [
                _c("main-menu", {
                  attrs: {
                    authenticated: _vm.authenticated,
                    user: _vm.user,
                    alwaysShow: true
                  },
                  on: {
                    modal: function($event) {
                      return _vm.show($event)
                    },
                    "self-hide": function($event) {
                      return _vm.hide("main-menu")
                    }
                  }
                })
              ],
              1
            )
          ])
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
    return _c("div", { staticClass: "logo-wrapper" }, [
      _c("a", { attrs: { href: "/" } }, [
        _c("img", {
          staticClass: "logo",
          attrs: { src: "/img/logo.jpg", alt: "" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AsideMenu.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AsideMenu.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsideMenu.vue?vue&type=template&id=40ef2d48& */ "./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&");
/* harmony import */ var _AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AsideMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AsideMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AsideMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AsideMenu.vue?vue&type=template&id=40ef2d48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AsideMenu.vue?vue&type=template&id=40ef2d48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsideMenu_vue_vue_type_template_id_40ef2d48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/modals/About.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/modals/About.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_5b507d4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=5b507d4f& */ "./resources/js/components/modals/About.vue?vue&type=template&id=5b507d4f&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_5b507d4f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_5b507d4f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/About.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/modals/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/About.vue?vue&type=template&id=5b507d4f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/modals/About.vue?vue&type=template&id=5b507d4f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_5b507d4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=5b507d4f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/About.vue?vue&type=template&id=5b507d4f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_5b507d4f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_5b507d4f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/modals/Help.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/modals/Help.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Help_vue_vue_type_template_id_07ee666f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Help.vue?vue&type=template&id=07ee666f& */ "./resources/js/components/modals/Help.vue?vue&type=template&id=07ee666f&");
/* harmony import */ var _Help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Help.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/Help.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Help_vue_vue_type_template_id_07ee666f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Help_vue_vue_type_template_id_07ee666f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/Help.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/Help.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/modals/Help.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Help.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Help.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/Help.vue?vue&type=template&id=07ee666f&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/modals/Help.vue?vue&type=template&id=07ee666f& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_vue_vue_type_template_id_07ee666f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Help.vue?vue&type=template&id=07ee666f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Help.vue?vue&type=template&id=07ee666f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_vue_vue_type_template_id_07ee666f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Help_vue_vue_type_template_id_07ee666f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/History.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/modals/History.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=43a2bf54& */ "./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&");
/* harmony import */ var _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/History.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/History.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/modals/History.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=template&id=43a2bf54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/History.vue?vue&type=template&id=43a2bf54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_43a2bf54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/Howtostart.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/modals/Howtostart.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Howtostart_vue_vue_type_template_id_5990e025___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Howtostart.vue?vue&type=template&id=5990e025& */ "./resources/js/components/modals/Howtostart.vue?vue&type=template&id=5990e025&");
/* harmony import */ var _Howtostart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Howtostart.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/Howtostart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Howtostart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Howtostart_vue_vue_type_template_id_5990e025___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Howtostart_vue_vue_type_template_id_5990e025___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/Howtostart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/Howtostart.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/modals/Howtostart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Howtostart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Howtostart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Howtostart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Howtostart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/Howtostart.vue?vue&type=template&id=5990e025&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/modals/Howtostart.vue?vue&type=template&id=5990e025& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Howtostart_vue_vue_type_template_id_5990e025___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Howtostart.vue?vue&type=template&id=5990e025& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Howtostart.vue?vue&type=template&id=5990e025&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Howtostart_vue_vue_type_template_id_5990e025___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Howtostart_vue_vue_type_template_id_5990e025___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/Login.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/modals/Login.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_44affb2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=44affb2b&scoped=true& */ "./resources/js/components/modals/Login.vue?vue&type=template&id=44affb2b&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_44affb2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_44affb2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44affb2b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/modals/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/Login.vue?vue&type=template&id=44affb2b&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/modals/Login.vue?vue&type=template&id=44affb2b&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_44affb2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=44affb2b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Login.vue?vue&type=template&id=44affb2b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_44affb2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_44affb2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/Promo.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/modals/Promo.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Promo_vue_vue_type_template_id_7b7891d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Promo.vue?vue&type=template&id=7b7891d1& */ "./resources/js/components/modals/Promo.vue?vue&type=template&id=7b7891d1&");
/* harmony import */ var _Promo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Promo.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/Promo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Promo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Promo_vue_vue_type_template_id_7b7891d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Promo_vue_vue_type_template_id_7b7891d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/Promo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/Promo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/modals/Promo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Promo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Promo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Promo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Promo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/Promo.vue?vue&type=template&id=7b7891d1&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/modals/Promo.vue?vue&type=template&id=7b7891d1& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Promo_vue_vue_type_template_id_7b7891d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Promo.vue?vue&type=template&id=7b7891d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Promo.vue?vue&type=template&id=7b7891d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Promo_vue_vue_type_template_id_7b7891d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Promo_vue_vue_type_template_id_7b7891d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/Registration.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/modals/Registration.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_2866e432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=2866e432&scoped=true& */ "./resources/js/components/modals/Registration.vue?vue&type=template&id=2866e432&scoped=true&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_2866e432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_2866e432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2866e432",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modals/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/Registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/modals/Registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/Registration.vue?vue&type=template&id=2866e432&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/modals/Registration.vue?vue&type=template&id=2866e432&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_2866e432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=2866e432&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Registration.vue?vue&type=template&id=2866e432&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_2866e432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_2866e432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modals/Report.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/modals/Report.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_2f38cd62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=2f38cd62&scoped=true& */ "./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&scoped=true&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/components/modals/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_2f38cd62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_2f38cd62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f38cd62",
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

/***/ "./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2f38cd62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=2f38cd62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modals/Report.vue?vue&type=template&id=2f38cd62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2f38cd62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2f38cd62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/default.vue":
/*!******************************************!*\
  !*** ./resources/js/layouts/default.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_vue_vue_type_template_id_06bc2b2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.vue?vue&type=template&id=06bc2b2d& */ "./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&");
/* harmony import */ var _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.vue?vue&type=script&lang=js& */ "./resources/js/layouts/default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _default_vue_vue_type_template_id_06bc2b2d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _default_vue_vue_type_template_id_06bc2b2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/default.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=template&id=06bc2b2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);