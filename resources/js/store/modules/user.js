let state = {
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
    }
};

let mutations = {
    SET_USER: (state, payload) => {
        state.user = payload;
    },
    SET_TOKEN: (state, payload) => {
        state.token = payload;
    },
};

let actions = {
    loginUser: async (context, payload) => {

        let data = {
            username: payload.username,
            password: payload.password,
            _token: axios.defaults.headers.common['X-CSRF-TOKEN']
        };


        var response = await axios.post('/login', data)
            .then(res => {
                return res;
            });

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
        localStorage.setItem('token', response.data.token)

        context.commit('SET_USER', response.data.token);
        context.commit('SET_TOKEN', response.data.user);

        return new Promise(function (resolve, reject) {
            if (response == null)
                reject()
            resolve();
        });

    },

    retriveUser: async (context, payload) => {

        context.commit('SET_TOKEN', payload);

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload;

        let {response} = await axios.get('/get-user')
            .then(res => {
                console.log("getuser", res);
                return res;
            })

        context.commit('SET_USER', response);

        return new Promise(function (resolve, reject) {
            if (response == null)
                reject()
            resolve();
        });

    },
    registerUser: async (context, payload) => {
        let data = {
            email: payload.email,
            password: payload.password,
            name: payload.name,
            _token: axios.defaults.headers.common['X-CSRF-TOKEN']
        };

        await axios.post('/registration', data);

        return new Promise(function (resolve, reject) {
            resolve();
        });

    },

    logoutUser: async (context, payload) => {

        context.commit('SET_USER', null);
        context.commit('SET_TOKEN', null);
        localStorage.removeItem('token')

        let {data} = await axios.get('/logout');

        return new Promise(function (resolve, reject) {
            resolve();
        });
    },

    getAnyUser: async (context, payload) => {
        if (context.getters.TOKEN == null && localStorage.getItem('token')==null)
            return new Promise(function (resolve, reject) {
                reject();
            });

        if (context.getters.TOKEN == null && localStorage.getItem('token')!=null)
            await context.dispatch("retriveUser", localStorage.getItem('token'));


        if (axios.defaults.headers.common['Authorization']==undefined)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.getters.TOKEN;

        var response = await axios.get(`/get-user/${payload.user_id}`).then(res => {
            return res;
        })

        return new Promise(function (resolve, reject) {
            if (response.data==null||response.data.length==0)
                reject();

            if (response.status == 200)
                resolve(response);
            reject();
        });

    },
    getCurrentUser: async (context, payload) => {
        if (context.getters.TOKEN == null && localStorage.getItem('token')==null)
            return new Promise(function (resolve, reject) {
                reject();
            });

        if (context.getters.TOKEN == null && localStorage.getItem('token')!=null)
            await context.dispatch("retriveUser", localStorage.getItem('token'));


        if (axios.defaults.headers.common['Authorization']==undefined)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.getters.TOKEN;

        var response = await axios.get('/get-user').then(res => {
            return res;
        })

        console.log("current_user", response.data)
        context.commit('SET_USER', response.data);

        return new Promise(function (resolve, reject) {
            if (response.status == 200)
                resolve();
            reject();
        });

    },

    updateUser: async (context, payload) => {

        var response = await axios.post('/user/update/info',{
            name: payload.name,
            skype: payload.skype,
            vk: payload.vk,
            fb: payload.fb,
            tw: payload.tw,
        }).then(res => {
            return res;
        })

        return new Promise(function (resolve, reject) {
            if (response.status == 200)
                resolve(response);
            reject();
        });
    },

    updatePassword: async (context, payload) => {

        var response = await axios.post('/user/update/pass',{
            new: payload.new1,
            old: payload.old,
        }).then(res => {
            return res;
        })

        return new Promise(function (resolve, reject) {
            if (response.status == 200)
                resolve(response);
            reject();
        });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};