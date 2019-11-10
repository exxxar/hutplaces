let state = {
    lifetime: null,
    achievement_category_type: null,
    achievement_type: null,
    console_type: null,
    content_type: null,
    game_type: null,
    item_type: null,
    lot_type: null,
    ticket_type: null,
    trigger_type: null,
    images:null,
    levels:null,
};

let getters = {

    LIFETIME: state => {
        return state.lifetime;
    },
    ACHIEVEMENT_CATEGORY_TYPE: state => {
        return state.achievement_category_type;
    },
    ACHIEVEMENT_TYPE: state => {
        return state.achievement_type;
    },
    CONSOLE_TYPE: state => {
        return state.console_type;
    },
    CONTENT_TYPE: state => {
        return state.content_type;
    },
    GAME_TYPE: state => {
        return state.game_type;
    },
    ITEM_TYPE: state => {
        return state.item_type;
    },
    LOT_TYPE: state => {
        return state.lot_type;
    },
    TICKET_TYPE: state => {
        return state.ticket_type;
    },
    TRIGGER_TYPE: state => {
        return state.trigger_type;
    },
    IMAGES: state => {
        return state.images;
    },
    LEVELS: state => {
        return state.levels;
    },
};

let mutations = {
    SET_LIFETIME: (state, payload) => {
        state.lifetime = payload;
    },
    SET_ACHIEVEMENT_CATEGORY_TYPE: (state, payload) => {
        state.achievement_category_type = payload;
    },
    SET_ACHIEVEMENT_TYPE: (state, payload) => {
        state.achievement_type = payload;
    },
    SET_CONSOLE_TYPE: (state, payload) => {
        state.console_type = payload;
    },
    SET_CONTENT_TYPE: (state, payload) => {
        state.content_type = payload;
    },
    SET_GAME_TYPE: (state, payload) => {
        state.game_type = payload;
    },
    SET_ITEM_TYPE: (state, payload) => {
        state.item_type = payload;
    },
    SET_LOT_TYPE: (state, payload) => {
        state.lot_type = payload;
    },
    SET_TICKET_TYPE: (state, payload) => {
        state.ticket_type = payload;
    },
    SET_TRIGGER_TYPE: (state, payload) => {
        state.trigger_type = payload;
    },
    SET_IMAGES: (state, payload) => {
        state.images = payload;
    },
    SET_LEVELS: (state, payload) => {
        state.levels = payload;
    },
};

let actions = {
    loadLifetime: (context, payload) => {
        return axios.get('/settings/lifetime').then(response => {
            context.commit('SET_LIFETIME', response.data.lifetime);
        });
    },
    loadTriggerType: (context, payload) => {
        return axios.get(`/users/stats/types`)
            .then(response => {
                context.commit('SET_TRIGGER_TYPE', response.data.trigger_types);
            });

    },
    loadImages: (context, payload) => {
        return axios.get('/images/all').then(response => {
            context.commit('SET_IMAGES', response.data.images);
        });
    },
    loadLevels: (context, payload) => {
        return axios.get('/levels').then(response => {
            context.commit('SET_LEVELS', response.data.levels);
        });
    },

};

export default {
    state,
    getters,
    mutations,
    actions,
};