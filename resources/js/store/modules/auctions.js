let state = {
    auctions: null,
    mylots: null,
    mybids: null,
};

let getters = {
    AUCTIONS: state => {
        return state.auctions;
    },

    MY_LOTS: state => {
        return state.mylots;
    },

    MY_BIDS: state => {
        return state.mybids;
    },

};

let mutations = {
    SET_AUCTIONS: (state, payload) => {
        state.auctions = payload;
    },
    SET_MY_LOTS: (state, payload) => {
        state.mylots = payload;
    },
    SET_MY_BIDS: (state, payload) => {
        state.mybids = payload;
    },

};

let actions = {
    loadAuctions: (context, payload) => {
        let formData = new FormData()

        let type = payload.type == null || payload.type == undefined ? 0 : payload.type;

        formData.append('type', type)

        axios.post('/auction/all', formData).then(res => {
            switch (type) {
                default:
                case 0:
                    context.commit('SET_AUCTIONS', res.data.auctions);
                    break;
                case 1:
                    context.commit('SET_MY_BIDS', res.data.auctions);
                    break;
                case 2:
                    context.commit('SET_MY_LOTS', res.data.auctions);
                    break;
            }

        });

        return Promise.resolve();
    },
    doBidLot: (context, payload) => {
        let lotId = payload.id;

        if (lotId == null || lotId == undefined)
            return Promise.reject(new Error("Не указан идентификатор лота!"))

        return axios.post('/auction/bid', {
            id: lotId
        })

    },
    doBuyLot: (context, payload) => {
        let lotId = payload.id;

        if (lotId == null || lotId == undefined)
            return Promise.reject(new Error("Не указан идентификатор лота!"))

        return axios.post('/auction/buy', {
            id: lotId
        })
    },
    removeAuctionLot: (context, payload) => {
        let lotId = payload.id;

        if (lotId == null || lotId == undefined)
            return Promise.reject(new Error("Не указан идентификатор лота!"))

        return axios.post('/auction/remove', {
            id: lotId
        })
    },
    updateAuctionLot: (context, payload) => {
        return axios.post('/auction/update', payload)
    }

};

export default {
    state,
    getters,
    mutations,
    actions,
};