<template>
    <div>
        <div class="chat-btn" @click="openChat()" v-if="show">{{$lang.chat.chat}}</div>

        <div class="chat" v-draggable v-if="open">
            <div class="title">
                {{$lang.chat.chat}}
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
        props:["show"],
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
            show: {
                handler(newVal, oldVal) {
                    this.getCurrentUser();
                }
            },
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

        directives: {
            Draggable,
        },
        components: {
            ChatBoxComponent
        }
    }
</script>
<style lang="scss">
    @import "~/chat.scss";

</style>