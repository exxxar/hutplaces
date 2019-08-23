<template>
    <div>
        <div class="chat-btn" @click="openChat()">Chat</div>

        <div class="chat" v-draggable v-if="open">
            <div class="title">
                Чат
                <a class="close" @click="open=false"></a>
            </div>
            <div class="channels">
                <a v-for="room in rooms" @click="changeChatRoom(room.id)" :id="prepareId(room.id)" :title="room.id" v-html="room.title"></a>
            </div>
            <chat-box-component :user-id='user_id' :room-id='selectedRoom' :initial='messages'></chat-box-component>

        </div>
    </div>
</template>
<script>
    import ChatBoxComponent from '@/components/ChatBoxComponent.vue'
    import {Draggable} from 'draggable-vue-directive'

    export default {
        name: 'chat',
        data() {
            return {
                open: false,
                rooms:null,
                selectedRoom:null,
                user_id:null,
                messages: [],
            }
        },
        watch: {
            user_id: {
                handler(newVal, oldVal) {
                    this.getChatRooms();
                }
            },
            rooms: {
                handler(newVal, oldVal) {
                    this.loadMessages();
                }
            }

        },
        methods: {
            openChat() {
                this.open = !this.open;
            },
            loadMessages(){
                axios
                    .post('/chat/messages',{
                        "room_id":this.selectedRoom
                    }).then(response => {
                    this.messages = response.data;
                });
            },
            changeChatRoom(room) {
                var elements = document.querySelectorAll(".channels a");

                [].forEach.call(elements, function(el) {
                    el.classList.remove("active");
                });

                document.querySelector(`#${this.prepareId(room)}`).classList.add("active");

                this.selectedRoom = room;
                this.loadMessages()

            },
            prepareId(id){
              return btoa(id);
            },
            getChatRooms(){
                axios
                    .get('/chat/rooms').then(response => {
                    this.rooms = response.data.chats;
                    this.selectedRoom = response.data.chats[0].id;
                });
            },
            getCurrentUser(){
                axios
                    .get('/chat/user').then(response => {
                    this.user_id = response.data.current_user_id;
                });
            }
        },

        mounted() {
            this.getCurrentUser();

        },
        directives: {
            Draggable,
        },
        components: {
            ChatBoxComponent
        }
    }
</script>
<style lang="scss">
    .chat-btn {
        box-shadow:0px 0px 5px 0px black;
        position: fixed;
        bottom: 100px;
        right: -28px;
        width: 100px;
        transition: 0.5s;
        height: 60px;
        background-color: yellow;
        color: #2c3e50;
        font-weight: 900;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px 0px 0px 5px;
        cursor: pointer;
        padding: 0px 0px 0px 20px;
        box-sizing: border-box;
        &:hover {
            right:0px;
            transition:  .5s;

        }
    }

    .title {
        min-height: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellow;
        margin: 0px 0px 5px 0px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 900;
        position: relative;
        .close {
            position: absolute;
            top:5px;
            right:12px;
            width:20px;
            height:20px;
            cursor: pointer;
            &:before,
            &:after {
                height:18px;
                width: 1px;
                background-color: #2c3e50;
            }
        }
    }
    .channels {
        display: flex;
        justify-content: center;
        height: 50px;
        padding: 5px;
        a {
            width: 50px;
            height: 50px;
            background-color: #f1f154;
            color: #2c3e50;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
            cursor: pointer;
            border-radius: 5px;
            &.active {
                background-color: yellow;
            }
        }
    }

    .chat {

        height: 405px;
        width: 300px;
        position: fixed;
        left: 20px;
        bottom: 20px;
        background-color: #2c3e50;
        z-index: 15;
        box-shadow: 0px 0px 5px 0px black;

        .input-group {
            display: flex;
            input {
                width: 224px;
                height: 59px;
                border: 1px solid yellow;
                padding: 10px;
                box-sizing: border-box;
                background: #2c3e50;
                color: white;
            }

            .btn {
                box-shadow: none;
            }
        }
    }


</style>