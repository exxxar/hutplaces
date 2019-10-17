let state = {
    games: null,
    drafts:null,
};

let getters = {
    GAMES: state => {
        return state.games;
    },
    DRAFTS: state => {
        return state.drafts;
    },
};

let mutations = {
    SET_GAMES: (state, payload) => {
        state.games = payload;
    },

    SET_DRAFTS: (state, payload) => {
        state.drafts = payload;
    },
};

let actions = {
    loadGames:  (context, payload) => {
        axios.get('/lottery').then(res => {
            context.commit('SET_GAMES', res.data.games);
        });
    },
    loadDrafts:  (context, payload) => {
        axios.get('/lottery/drafts').then(res => {
            context.commit('SET_DRAFTS', res.data.games);
        });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};