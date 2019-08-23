<template>
    <div>
        <div id="chatbox">
            <div id="chat-loader" v-if="chatLoading">
                <h1>Loading...</h1>
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
                   placeholder="Type your message..." autofocus>
            <button @click="sendMessage" class="btn btn-yellow">Send</button>

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
                        console.log('Connected Successfully')
                        this.chatLoading = false;
                    })
                    .catch(error => {
                        console.log('Error on connection', error)
                    })
            },
            subscribeToRoom() {
                this.currentUser.subscribeToRoomMultipart({
                    roomId: this.roomId,
                    hooks: {
                        onMessage: message => {
                            console.log(message);
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
        created() {
            this.getUsers();
            this.connectToChatkit();
        },
        components: {
            Scroll
        }
    };
</script>
<style lang="scss">
    #chatbox {
        height: 250px;
        padding: 5px;
        box-sizing: border-box;

        .scroll-area {
            padding: 0px;
            width: 100%;
        }
        ul {
            width: 100%;
            li {
                border-radius: 5px;
                width: 100%;
                /* min-height: 50px; */
                padding: 10px;
                box-sizing: border-box;
                color: #2c3e50;
                text-align: left;
                background: #f7f7ae;
                margin-bottom: 25px;
                position: relative;
                line-height: 150%;
                word-break: break-all;

                .message-footer {
                    color: #2c3e50;
                    position: absolute;
                    width: 270px;
                    left: 0;
                    bottom: -15px;
                    background: #f7f7ae;
                    padding: 0px 10px 0px 10px;
                    border-radius: 0px 0px 5px 5px;
                    font-size: 12px;
                    font-style: italic;
                }
                span {
                    word-break: break-all;
                }
            }
        }

    }
</style>
