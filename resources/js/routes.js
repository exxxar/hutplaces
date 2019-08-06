
import Vue from 'vue'
import Router from 'vue-router'
import Coins from '@/pages/Coins'
import PageNotFound from '@/pages/PageNotFound'
import Randoms from '@/pages/Randoms'
import Market from '@/pages/Market'
import Playzone from '@/pages/Playzone'
import Cabinet from '@/pages/Cabinet'
import Games from '@/pages/Games'
import WheelWin from '@/pages/WheelWin'
import Start from '@/pages/Start'
import Lottery from '@/pages/Lottery'
import Main from '@/pages/Main'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Notifications from 'vue-notification'
import VModal from 'vue-js-modal'
import Lang from 'vuejs-localization'

import axios from 'axios';
import VueAxios from 'vue-axios';




Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:8000/api';



Lang.requireAll(require.context('../lang', true, /\.js$/))

Vue.use(VModal)
Vue.use(Router)
Vue.use(Notifications)
Vue.use(Lang)

export default new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Start,
            meta: {
                layout: 'start'
            }
        },

        {
            path: '/index',
            name: 'Main',
            component: Main

        },


        {
            path: '/winwheel',
            name: 'WheelWin',
            component: WheelWin

        },

        {
            path: '/market',
            name: 'Market',
            component: Market
        },
        {
            path: '/coins',
            name: 'Coins',
            component: Coins
        },
        {
            path: '/playzone',
            name: 'Playzone',
            component: Playzone
        },
        {
            path: '/cabinet',
            name: 'Cabinet',
            component: Cabinet,
            meta: { middlewareAuth: true }
        },
        {
            path: '/signin',
            name: 'Login',
            component: Login,
            meta: { middlewareAuth: false }
        },
        {
            path: '/signup',
            name: 'Register',
            component: Register,
            meta: { middlewareAuth: false }
        },
        {
            path: '/randoms',
            name: 'Randoms',
            component: Randoms
        },
        {
            path: '/games/nhl',
            name: 'Games',
            component: Games
        },
        {
            path: '/games/nhl/:id',
            name: 'Lottery',
            component: Lottery
        },

        {
            path: "*",
            component: PageNotFound
        }
    ]
});
