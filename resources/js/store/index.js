import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import enums from './modules/enums';
import games from './modules/games';
import auctions from './modules/auctions';
import achievements from './modules/achievements';
import chat from './modules/chat';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,enums, games, auctions,achievements, chat
    },
});