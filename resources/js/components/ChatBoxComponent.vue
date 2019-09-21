<template>
    <div>
        <div id="chatbox">
            <div id="chat-loader" v-if="chatLoading">
                <h1>{{$lang.chat.loading}}</h1>
            </div>
            <scroll class="scroll-area" :settings="settings" v-if="users&&!chatLoading">
                <ul>
                    <li v-for="message in messages" :key="message.id" v-if="message.id">
                        <p>{{ message.text }}</p>
                        <div class="message-footer">
                            <i> ({{ formatTime(message.timestamp) }}) </i>
                            : <strong>{{ findSender(message.senderId).name }}</strong>
                        </div>

                    </li>
                </ul>
            </scroll>
        </div>
        <div class="input-group">
            <input type="text" v-model="message" @keyup.enter="sendMessage" class="form-control"
                   :placeholder="$lang.chat.placeholder" autofocus>
            <button @click="sendMessage" class="btn btn-yellow">{{$lang.chat.send}}</button>

        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Chatkit from '@pusher/chatkit-client';
    import Scroll from 'vue-custom-scrollbar'

    export default {
        props: {
            roomId: String,
            userId: String,
            initial: Array,
        },
        data() {
            return {
                currentUser: null,
                message: '',
                messages: this.initial,
                users: null,
                chatLoading: true,
                settings: {
                    maxScrollbarLength: 60,

                }
            }
        },
        watch: {
            initial: {
                handler(newVal, oldVal) {
                    this.messages = this.initial;
                    document.querySelector('#chatbox').scrollTop = 100000
                }
            },
            roomId: {
                handler(newVal, oldVal) {
                    this.chatLoading = true;
                    this.getUsers();
                    this.connectToChatkit();
                }
            }
        },
        methods: {
            connectToChatkit() {
                if (this.userId == null)
                    return;

                const tokenProvider = new Chatkit.TokenProvider({
                    url: `/api/chat/authenticate`,
                });
                const chatManager = new Chatkit.ChatManager({
                    instanceLocator: window.instanceLocator,
                    userId: this.userId,
                    tokenProvider,
                });
                chatManager.connect()
                    .then(user => {
                        this.currentUser = user;
                        this.subscribeToRoom();
                        this.chatLoading = false;
                    })
                    .catch(error => {
                    })
            },
            subscribeToRoom() {
                this.currentUser.subscribeToRoomMultipart({
                    roomId: this.roomId,
                    hooks: {
                        onMessage: message => {
                            let find = this.messages.find(msg => message.id == msg.id);

                            if (!find)
                                this.messages.push({
                                    id: message.id,
                                    senderId: message.senderId,
                                    text: message['parts'][0]['payload']['content'],
                                    timestamp: message.createdAt
                                })

                            document.querySelector('#chatbox .scroll-area').scrollTop =document.querySelector('#chatbox .scroll-area').scrollHeight;

                        },
                        onUserJoined: async user => {
                            await this.getUsers()
                            this.messages.push({
                                text: `${user.name} joined ${this.formatTime(user.created_at)}`
                            })
                        },
                    },
                    messageLimit: 0
                })
            },
            getUsers() {
                if (this.roomId == null)
                    return;

                axios.post(`/chat/users`, {
                    room_id: this.roomId
                })
                    .then(res => {
                        this.users = res['data']['users']
                    });
            },
            sendMessage() {
                if (this.message.trim() === '') return;
                axios.post('/chat/send', {
                    user_id: this.userId,
                    text: this.message,
                    room_id: this.roomId
                })
                    .then(message => {
                        this.message = ''
                        document.querySelector('#chatbox .scroll-area').scrollTop =document.querySelector('#chatbox .scroll-area').scrollHeight;
                    });
            },
            findSender(senderId) {
                const sender = this.users.find(user => senderId == user.id);
                return sender
            },
            formatTime(timestamp) {
                return moment(timestamp).fromNow();
            },
        },
        mounted() {
            this.getUsers();
            this.connectToChatkit();
        },
        components: {
            Scroll
        }
    };
</script>
<style lang="scss">
    @import "~/chat.scss";
</style>
