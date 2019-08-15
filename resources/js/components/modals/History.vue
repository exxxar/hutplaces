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
        <ul class="body" v-for="(item, index) in historyList" @click="selfHide()">
            <li>{{++index}}</li>

            <li>
                <router-link tag="a" :to="{ name: 'Lottery',params: {gameId:item.lottery_id} }" >
                    {{item.lottery_title}}
                </router-link>
            </li>
            <li><img :src="getPlatform(item.console_type)" alt=""></li>
            <li>
                <router-link tag="a" :to="{ name: 'PlayerInfo',params: {userId:item.user_id} }" >
                    {{item.user_name}}
                </router-link>
            </li>
            <li>{{item.end}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'faq',
        data() {
            return {
                historyList: null
            }
        },
        mounted() {
            this.loadHistory();
        },
        methods: {
            selfHide(){
                this.$emit("self-hide");
            },
            loadHistory() {
                this.$loading(true)
                axios.get('/lottery/history')
                    .then(response => {
                        this.historyList = response.data.history
                        this.$loading(false)
                    }).catch(err => {
                })
            },
            getPlatform(id) {
                switch (id) {
                    default:
                    case 1:
                        return "/img/xbox-icon.png";
                    case 2:
                        return "/img/ps4-icon.png";
                    case 3:
                        return "/img/pc-icon.png";
                }
            },
        }
    }
</script>
<style>

</style>
