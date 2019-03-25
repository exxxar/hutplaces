
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';

import Home from './pages/Home'

import NHL from './pages/NHL'
import Chains from './components/chainsCards'
import Single from './components/singleCards'

import Help from './pages/Help'

import History from './pages/History'


import Coins from './pages/Coins'
import PageNotFound from './pages/PageNotFound'



const Playzone = () => import(/* webpackChunkName: "playzone" */'./pages/Playzone')
const Market = () => import(/* webpackChunkName: "market" */'./pages/Market')
const Promo = () => import(/* webpackChunkName: "promo" */'./pages/Promo')
const Achievement = () => import(/* webpackChunkName: "achievement" */'./pages/Achievement')
const Randoms = () => import(/* webpackChunkName: "randoms" */'./pages/Randoms')
const Lottery = () => import(/* webpackChunkName: "lottery" */'./pages/Lottery')
const Login = () => import(/* webpackChunkName: "login" */'./pages/Login')
const Register = () => import(/* webpackChunkName: "register" */'./pages/Register')
const Cabinet = () => import(/* webpackChunkName: "register" */'./pages/Cabinet')

Vue.use(Router)
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:8000/api';




const router = new Router({
    mode:'history',
    linkActiveClass: "active",

    routes: [
        {
            path: '/',
            redirect: '/randoms'
        },
        {
            path: '/playzone',
            name: 'Playzone',
            component: Playzone,


        },
        {
            path: '/randoms',
            name: 'Randoms',
            component: Randoms,
            meta: {
                breadcrumb: [
                    {name: 'Игровая зона', link: '/playzone'},
                ],
            },

        },
        {
            path: '/games/nhl',
            name: 'NHL',
            component: NHL,
            meta: {
                breadcrumb: [
                    {name: 'Игровая зона', link: '/playzone'},
                    {name: 'NHL', link: '/games/nhl'},
                ],
            },

            children: [
                {
                    path: 'chains',
                    component: Chains

                },
                {
                    path: 'single',
                    component: Single
                }
            ]
        },
        {
            path: '/market',
            name: 'Market',
            component: Market
        },
        {
            path: '/promo',
            name: 'Promo',
            component: Promo
        },
        {
            path: '/achievement',
            name: 'Achievement',
            component: Achievement
        },
        {
            path: '/lottery/:id',
            name: 'Lottery',
            component: Lottery
        },


        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        {
            path: '/history',
            name: 'History',
            component: History
        },
        {
            path: '/coins',
            name: 'Coins',
            component: Coins
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false
            }
        },{
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                auth: false
            }
        },{
            path: '/cabinet',
            name: 'cabinet',
            component: Cabinet,
            meta: {
                auth: true
            }
        },
        {
            path: "*",
            component: PageNotFound
        }
    ]
});

export default router;