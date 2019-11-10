let state = {
    rooms: null,
    messages: null,
    chat_user: null,
    all_chat_users: null

};

let getters = {
    ROOMS: state => {
        return state.rooms;
    },
    CHAT_USER: state => {
        return state.chat_user;
    },
    ALL_CHAT_USERS: state => {
        return state.all_chat_users;
    },
    MESSAGES: state => {
        return state.messages;
    },


};

let mutations = {
    SET_ROOMS: (state, payload) => {
        state.rooms = payload;
    },
    SET_CHAT_USER: (state, payload) => {
        state.chat_user = payload;
    },
    SET_ALL_CHAT_USERS: (state, payload) => {
        state.all_chat_users = payload;
    },
    SET_MESSAGES: (state, payload) => {
        state.messages = payload;
    },


};

let actions = {
    loadChatRooms: (context, payload) => {
        return axios
            .get('/chat/rooms').then(response => {
                context.commit('SET_ROOMS', response.data.chats);
            });
    },
    loadChatMessages: (context, payload) => {

        let roomId = payload.id;

        if (roomId == null || roomId == undefined)
            return Promise.reject(new Error("Не указан идентификатор комнаты чата!"))

        return axios.post('/chat/messages', {
            "room_id": roomId
        }).then((response) => {
            console.log("chat_messages = ",response.data)
            context.commit('SET_MESSAGES', response.data);
        });
    },
    loadChatUsers: (context, payload) => {

        let roomId = payload.id;

        if (roomId == null || roomId == undefined)
            return Promise.reject(new Error("Не указан идентификатор комнаты чата!"))

        return axios
            .post('/chat/users', {
                room_id: roomId
            }).then(response => {
                context.commit('SET_ALL_CHAT_USERS', response['data']['users']);
            });
    },

    getCurrentChatUser: (context, payload) => {
        return axios
            .get('/chat/user').then(response => {
                context.commit('SET_CHAT_USER', response.data.current_user_id);
            });
    },

    sendChatMessage: (context, payload) => {
        let message = payload.message == null || payload.message == undefined ? '' : payload.message;
        let roomId = payload.id;

        if (message == '')
            return Promise.reject(new Error("Введите сообщение!"))

        if (roomId == null || roomId == undefined)
            return Promise.reject(new Error("Не указан идентификатор комнаты чата!"))

        return axios
            .post('/chat/send', {
                user_id:payload.user_id,
                text: payload.message,
                room_id: roomId
            })
    }


};

export default {
    state,
    getters,
    mutations,
    actions,
};