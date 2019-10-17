<template>
    <div class="modal-body history-modal">
        <h1>История игр пользователей</h1>
        <ul class="head">
            <li>#</li>
            <li>Игра</li>
            <li>Платформа</li>
            <li>Победитель</li>
            <li>Дата заверщения</li>
        </ul>
        <ul v-if="history!=null&&history.length>0" class="body" v-for="(item, index) in history" >
            <li>{{++index}}</li>

            <li>
                <router-link tag="a" :to="{ name: 'Lottery',params: {gameId:item.lottery_id} }" >
                    {{item.lottery_title}}
                </router-link>
            </li>
            <li>
                <i v-if="item.console_type==1" class="fab fa-playstation"></i>
                <i v-if="item.console_type==0" class="fab fa-xbox"></i>
            </li>
            <li>
                <router-link tag="a" :to="{ name: 'PlayerInfo',params: {userId:item.user_id} }" >
                    {{item.user_name}}
                </router-link>
            </li>
            <li>{{item.end}}</li>
        </ul>
        <div class="no-items" v-if="history==null||history.length==0"><img :src="$lang.modals.history.error_1" alt=""></div>

    </div>
</template>
<script>
    export default {
        name: 'history',
        data() {
            return {
                history: null
            }
        },
        mounted() {
            this.loadHistory();
        },
        methods: {
            close(){
              this.$emit("close");
            },
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },

            loadHistory() {
                this.$loading(true)
                axios.get('/lottery/history')
                    .then(response => {
                        this.history = response.data.history

                    }).catch((reason)=> {
                        this.message("Авторизация", `Вы не авторизованы!`, 'warn');
                });
                this.$loading(false)
            },
        }
    }
</script>
<style>

</style>
