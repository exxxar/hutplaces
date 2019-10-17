let state = {
    lifetime: null,
};

let getters = {
    LIFETIME: state => {
        return state.lifetime;
    },
};

let mutations = {
    SET_LIFETIME: (state, payload) => {
        state.lifetime = payload;
    },

};

let actions = {
    loadLifetime:  (context, payload) => {
        axios.get('/settings/lifetime').then(res => {
            context.commit('SET_LIFETIME', res.data.lifetime);
        });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};