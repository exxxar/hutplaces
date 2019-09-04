import './bootstrap';
import {store} from './store';
import Vue from 'vue'

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'img/error.png',
    loading: 'img/loading.gif',
    attempt: 5,
    lazyComponent: true
})

import App from './Main'
import router from './routes'
import Lang from 'vuejs-localization';
import {VueReCaptcha} from 'vue-recaptcha-v3'
import VTooltip from 'v-tooltip'
import VueLoading from 'vuejs-loading-plugin'
import VueClipboard from 'vue-clipboard2'
import VueScrollTo from 'vue-scrollto';
import {Tabs, Tab} from 'vue-tabs-component';


Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Lang);

window.Event = new Vue;


Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(VTooltip)


Vue.use(VueLoading, {
    text: 'HUTPLACES',
    background: 'rgba(0,0,0,0.97)',
    classes: ['hutplace-preloader']
})

Vue.use(VueReCaptcha, {
    siteKey: '6LfQrq4UAAAAAF1gdoj9RN6F1ALNPX7sVp5ZFlER',
    loaderOptions: {
        useRecaptchaNet: true
    }
})

Vue.config.productionTip = false


// eslint-disable-next-line no-new
const app = new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>',

})


router.beforeResolve((to, from, next) => {
    if (to.name) {
        app.$loading(true)
    }
    next()
})

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (!store.getters.CHECK) {
            next({
                path: '/signin',
                query: {redirect: to.fullPath}
            });

            return;
        }
    }
    next();
})


router.afterEach((to, from) => {
    setTimeout(function () {
        app.$loading(false)
    }, 1000)

})
