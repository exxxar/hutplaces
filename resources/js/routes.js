import Vue from 'vue'
import Router from 'vue-router'
import Coins from '@/pages/Coins'
import PageNotFound from '@/pages/PageNotFound'
import Market from '@/pages/Market'
import Playzone from '@/pages/Playzone'
import Promotions from '@/pages/Promotions'
import Auction from '@/pages/Auction'
import Cabinet from '@/pages/Cabinet'
import Games from '@/pages/Games'
import WheelWin from '@/pages/WheelWin'
import Start from '@/pages/Start'
import Lottery from '@/pages/Lottery'
import Packs from '@/pages/PacksSection'
import Main from '@/pages/Main'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import PlayerInfo from '@/pages/PlayerInfo'
import Achievements from '@/pages/Achievement'
import Notifications from 'vue-notification'
import VModal from 'vue-js-modal'
import Lang from 'vuejs-localization'

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
axios.defaults.baseURL =  '../api';

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
            path: '/packs',
            name: 'Packs',
            component: Packs
        },
        {
            path: '/coins',
            name: 'Coins',
            component: Coins
        },
        {
            path: '/promotions',
            name: 'Promotions',
            component: Promotions
        },
        {
            path: '/playzone',
            name: 'Playzone',
            component: Playzone
        },
        {
            path: '/achievements',
            name: 'Achievements',
            component: Achievements
        },
        {
            path: '/cabinet',
            name: 'Cabinet',
            component: Cabinet,
            meta: {middlewareAuth: true}
        },
        {
            path: '/user/:userId',
            name: 'PlayerInfo',
            component: PlayerInfo,
            props: true
        },
        {
            path: '/signin',
            name: 'Login',
            component: Login,
        },
        {
            path: '/signup',
            name: 'Register',
            component: Register,
        },
/*        {
            path: '/randoms',
            name: 'Randoms',
            component: Randoms
        },*/
        {
            path: '/auction',
            name: 'Auction',
            component: Auction
        },
        {
            path: '/nhl',
            name: 'Games',
            component: Games
        },
        {
            path: '/nhl/:gameId',
            name: 'Lottery',
            component: Lottery,
            props: true
        },


        {
            path: "*",
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
});

