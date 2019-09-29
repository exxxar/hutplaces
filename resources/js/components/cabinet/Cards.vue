<template>
    <div class="info-block">
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <ul class="cards-list" v-if="cards!=null&&cards.length>0">
            <li class="card" v-for="card in cards" v-html="prepareCard(card)"></li>
        </ul>
        <div class="no-items" v-if="cards==null||cards.length==0"><img :src="$lang.cabinet.cards.error_1" alt=""></div>

    </div>
</template>

<script>

    export default {
        props: ["user"],
        activated() {
            this.loadCards()
            this.prepareContent()
        },
        mounted() {
            this.prepareContent()
            Event.$on('updateCards', () => {
                this.loadCards()
            });
        },

        methods: {
            loadCards() {
                axios
                    .get(`/users/cards/${this.user.id}`)
                    .then(response => {
                        this.cards = response.data.cards;
                    });
            },
            prepareCard(card) {
                return (JSON.parse(card.Card_data)).value
            },
            prepareContent() {
                this.content.title = this.$lang.cabinet.cards.main_title
                this.content.content = this.$lang.cabinet.cards.main_description
            }

        },

        data() {
            return {
                content: {
                    title: '',
                    content: ''
                },
                cards: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>


