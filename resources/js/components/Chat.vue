<template>
    <div>
        <div class="chat-btn" @click="openChat()" v-if="show">
            <i class="fas fa-comments"></i>
        </div>

        <div class="chat" v-draggable v-if="open">
            <div class="title">
                {{$lang.chat.chat}}
                <a class="close" @click="open=false"></a>
            </div>
            <div class="channels" v-if="user_id">
                <a v-for="room in rooms" @click="changeChatRoom(room.id)" :id="prepareId(room.id)" :title="room.id"
                   v-html="room.title"></a>
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
        props: ["show"],
        data() {
            return {
                open: false,
                rooms: null,
                selectedRoom: null,
                user_id: null,
                messages: [],
            }
        },
        computed: {
                loadChatRooms() {
                    return this.$store.getters.ROOMS;
                },
                loadChatUser() {
                    return this.$store.getters.CHAT_USER;
                },
                loadMessages() {
                    return this.$store.getters.MESSAGES;
                },
            },
            watch: {
                loadChatRooms(newValue, oldValue) {
                    this.rooms = newValue
                    if (newValue[0] != undefined || newValue[0] != null)
                        this.selectedRoom = newValue[0].id;
                },
                loadChatUser(newValue, oldValue) {
                    this.user_id = newValue
                },
                loadMessages(newValue, oldValue) {
                    this.messages = newValue
                },
        },
        activated() {
            this.refreshCurrentUser()
            this.refreshChatRooms()
            this.refreshChatMessages()
        },
        mounted() {
            this.refreshCurrentUser()
            this.refreshChatRooms()
            this.refreshChatMessages()
        },

        methods: {
            message(message) {
                this.$notify({
                    group: 'main',
                    type: "warn",
                    title: "Chat",
                    text: message
                })
            },
            openChat() {
                this.open = !this.open;
            },
            refreshChatMessages() {
                this.$store.dispatch("loadChatMessages", {id: this.selectedRoom})
                  /*  .catch((error) => {
                        this.message(error)
                    })*/
            },
            changeChatRoom(room) {
                var elements = document.querySelectorAll(".channels a");

                [].forEach.call(elements, function (el) {
                    el.classList.remove("active");
                });

                document.querySelector(`#${this.prepareId(room)}`).classList.add("active");

                this.selectedRoom = room;
                this.$store.dispatch("loadChatMessages", {id: this.selectedRoom})
                   /* .catch((error) => {
                        this.message(error)
                    })*/

            },
            prepareId(id) {
                return btoa(id);
            },
            refreshChatRooms() {
                this.$store.dispatch("loadChatRooms")
                  /*  .catch((error) => {
                        this.message(error)
                    })*/
            },
            refreshCurrentUser() {
                this.$store.dispatch("getCurrentChatUser")
                  /*  .catch((error) => {
                        this.message(error)
                    })*/
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