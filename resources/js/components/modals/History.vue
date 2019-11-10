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
        computed: {
            loadHistory() {
                return this.$store.getters.HISTORY;
            },
        },
        watch: {
            loadHistory(newValue, oldValue) {
                this.history = newValue
            },
        },
        activated(){
            this.refreshHistory()
        },
        mounted() {
            this.refreshHistory()
        },
        methods: {
            refreshHistory() {
                this.$loading(true)
                this.$store.dispatch("loadHistory")
                this.$loading(false)
            },
        }
    }
</script>
<style>

</style>
