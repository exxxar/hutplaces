<template>
    <div class="info-block">
        <h1 class="main-title" v-html="this.$lang.cabinet.cards.main_title"></h1>
        <p class="description" v-html="this.$lang.cabinet.cards.main_description"></p>
        <ul class="cards-list" v-if="cards!=null&&cards.length>0">
            <card v-for="card in cards" :card="card"></card>
        </ul>
        <div class="no-items" v-if="cards==null||cards.length==0"><img :src="$lang.cabinet.cards.error_1" alt=""></div>

    </div>
</template>

<script>
    import Card from '@/components/admin/CardHUTDB.vue'

    export default {
        props: ["user"],
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        mounted() {
            Event.$on('updateCards', () => {
                this.fetchData()
            });
        },
        methods: {
            fetchData()
            {
                this.loadCards()
            },
            loadCards() {
                axios
                    .get(`/users/cards/${this.user.id}`)
                    .then(response => {
                        this.cards = response.data.cards;
                    });
            },

        },
        components: {
            Card
        },
        data() {
            return {
                cards: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>


