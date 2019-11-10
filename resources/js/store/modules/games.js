let state = {
    games: null,
    drafts: null,
    history: null
};

let getters = {
    GAMES: state => {
        return state.games;
    },
    DRAFTS: state => {
        return state.drafts;
    },
    HISTORY: state => {
        return state.history;
    },
};

let mutations = {
    SET_GAMES: (state, payload) => {
        state.games = payload;
    },

    SET_DRAFTS: (state, payload) => {
        state.drafts = payload;
    },

    SET_HISTORY: (state, payload) => {
        state.history = payload;
    },
};

let actions = {
    loadGames: (context, payload) => {
        return axios.get('/lottery').then(res => {
            context.commit('SET_GAMES', res.data.games);

            return Promise.resolve();
        })
            .catch(()=>{
                        return Promise.reject();
            })
    },
    loadDrafts: (context, payload) => {
        return axios.get('/lottery/drafts').then(res => {
            context.commit('SET_DRAFTS', res.data.games);
        });
    },
    loadHistory: (context, payload) => {
        return axios.get('/lottery/history')
            .then(response => {
                context.commit('SET_HISTORY', response.data.history);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};