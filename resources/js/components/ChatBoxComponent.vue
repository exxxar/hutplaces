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
        <div class="input-group" v-if="currentUser&&roomId">
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
        computed: {
            chatMessages() {
                return this.$store.getters.MESSAGES;
            },
            chatUsers() {
                return this.$store.getters.ALL_CHAT_USERS;
            },
            chatUser() {
                return this.$store.getters.CHAT_USER;
            }

        },

        watch: {
            chatUser(newValue, oldValue) {
                this.currentUser = newValue
                this.chatLoading = false;
            },
            chatUsers(newValue, oldValue) {
                this.users = newValue
                this.chatLoading = false;
            },
            chatMessages(newValue, oldValue) {
                this.messages = newValue
                this.chatLoading = false;
            },
            initial: {
                handler(newVal, oldVal) {
                    this.messages = this.initial;
                    // document.querySelector('#chatbox').scrollTop = 100000
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

                            let chatBox = document.querySelector('#chatbox .scroll-area');

                            document.querySelector('#chatbox .scroll-area').scrollTop = chatBox == null ? 0 : document.querySelector('#chatbox .scroll-area').scrollHeight;


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

                this.$store.dispatch("loadChatUsers", {id: this.roomId})
            },
            sendMessage() {
                if (this.message.trim() === '') return;


                this.$store.dispatch("sendChatMessage", {
                    message: this.message,
                    id: this.roomId,
                    user_id: this.userId
                }).then(message => {
                    this.message = ''
                });

                this.$store.dispatch("loadChatMessages", {id: this.roomId}).then(() => {
                    let chatBox = document.querySelector('#chatbox .scroll-area');
                    document.querySelector('#chatbox .scroll-area').scrollTop = chatBox == null ? 0 : document.querySelector('#chatbox .scroll-area').scrollHeight;

                })


            },
            findSender(senderId) {
                return this.users.find(user => senderId == user.id);
            },
            formatTime(timestamp) {
                return moment(timestamp).fromNow();
            },
        },
        mounted() {
            this.$store.dispatch("getCurrentChatUser")
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
