let state = {
    stats: null,
    user: null,
    token: localStorage.getItem('token'),
};

let getters = {
    USER: state => {
        return state.user;
    },
    TOKEN: state => {
        return state.token;
    },
    CHECK: state => {
        return !!state.token;
    },
    STATS: state => {
        return state.stats;
    }
};

let mutations = {
    SET_USER: (state, payload) => {
        state.user = payload;
    },
    SET_TOKEN: (state, payload) => {
        state.token = payload;
    },
    SET_STATS: (state, payload) => {
        state.stats = payload;
    },
};

let actions = {
    loadStats: (context, payload) => {
        axios
            .get(`/users/stats/${payload.user_id}`)
            .then(response => {
                context.commit('SET_STATS', response.data.stats);
            });
    },
    loginUser: (context, payload) => {

            let data = {
            username: payload.username,
            password: payload.password,
            _token: axios.defaults.headers.common['X-CSRF-TOKEN']
        };

        return axios.post('/login', data)
            .then(res => {

                if (res.data.status==422)
                    return Promise.reject(res)

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
                localStorage.setItem('token', res.data.token)

                context.commit('SET_USER', res.data.user );
                context.commit('SET_TOKEN', res.data.token);

                return Promise.resolve(res);
            })

    },

    retriveUser: (context, payload) => {

        context.commit('SET_TOKEN', payload);

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload;

        return axios.get('/get-user')
            .then(res => {
                context.commit('SET_USER', res.data);
            })

    },
    registerUser: (context, payload) => {
        let data = {
            email: payload.email,
            password: payload.password,
            name: payload.name,
            _token: axios.defaults.headers.common['X-CSRF-TOKEN']
        };

        return axios.post('/registration', data);

    },

    logoutUser: (context, payload) => {

        context.commit('SET_USER', null);
        context.commit('SET_TOKEN', null);
        localStorage.removeItem('token')

        return axios.get('/logout');
    },
    lot: async (context, payload) => {
        if (context.getters.TOKEN == null && localStorage.getItem('token') == null)
            return Promise.reject('Error token');


        if (context.getters.TOKEN == null && localStorage.getItem('token') != null)
            await context.dispatch("retriveUser", localStorage.getItem('token'));


        if (axios.defaults.headers.common['Authorization'] == undefined)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.getters.TOKEN;

        if (payload.type == null)
            return Promise.reject('Error type');

        var url = '';
        switch (payload.type) {
            case 'mylots':
                url = `/auction/mylots`;
                break;
            case 'cancel':
                url = `/auction/cancel/${payload.id}`;
                break;
            case 'updateLot':
                url = `/auction/update/${payload.id}/${payload.lifetime}`;
                break;
            case 'all':
                url = `/auction/all`;
                break;
            case 'mybids':
                url = `/auction/mybids`;
                break;
        }
        var response = await axios.get(url).then(res => {
            return res;
        })

        return new Promise(function (resolve, reject) {
            if (response.data == null || response.data.length == 0)
                reject();

            if (response.status == 200)
                resolve(response);
            reject();
        });

    },

    getAnyUser: (context, payload) => {
        if (context.getters.TOKEN == null && localStorage.getItem('token') == null)
            return new Promise(function (resolve, reject) {
                reject();
            });

        if (context.getters.TOKEN == null && localStorage.getItem('token') != null)
            context.dispatch("retriveUser", localStorage.getItem('token'));


        if (axios.defaults.headers.common['Authorization'] == undefined)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.getters.TOKEN;


        return axios.get(`/get-user/${payload.user_id}`)

    },
    getCurrentUser: (context, payload) => {
        if (context.getters.TOKEN == null && localStorage.getItem('token') == null)
            return new Promise(function (resolve, reject) {
                reject();
            });

        if (context.getters.TOKEN == null && localStorage.getItem('token') != null)
            context.dispatch("retriveUser", localStorage.getItem('token'));


        if (axios.defaults.headers.common['Authorization'] == undefined)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.getters.TOKEN;


        return axios.get('/get-user').then(res => {
            context.commit('SET_USER', res.data);
        })
    },

    updateUser: (context, payload) => {

        return axios.post('/user/update/info', {
            name: payload.name,
            skype: payload.skype,
            vk: payload.vk,
            fb: payload.fb,
            tw: payload.tw,
        });
    },

    updatePassword: (context, payload) => {

        return axios.post('/user/update/pass', {
            new: payload.new1,
            old: payload.old,
        })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};