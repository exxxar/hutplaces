
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import './bootstrap';

import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import App from './views/App';
import Chat from 'vue-beautiful-chat';
import Lang from 'vuejs-localization';
import Cookies from 'vue-cookies';



Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Lang);
Vue.use(Chat);
Vue.use(Vuetify);
Vue.use(Cookies);


Cookies.config('7d')


/*const app = new Vue({
    el:'#app',
    showModal: false,
    router:Routes,
    render: h => h(App),
    });
*/

Vue.router = Routes
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router
const app = new Vue(App).$mount('#app');




export default app;
