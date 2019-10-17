import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import enums from './modules/enums';
import games from './modules/games';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,enums, games
    },
});