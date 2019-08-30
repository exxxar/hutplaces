<template>
    <div>
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <ul class="cards-list" v-if="cards!=null&&cards.length>0">
            <li class="card"  v-for="card in cards" v-html="prepareCard(card)"></li>
        </ul>
        <h3 v-if="cards==null||cards.length==0">Карточки не найдены</h3>

    </div>
</template>

<script>

    export default {
        activated() {
            this.loadCards()
            //this.loadContent()
        },
        mounted() {
            Event.$on('updateCards', () => {
                this.loadCards()
            });
        },
        methods: {
            loadCards() {
                axios
                    .get(`/users/cards/${auth.user.id}`)
                    .then(response => {
                        this.cards = response.data.cards;
                    });
            },
            prepareCard(card) {
                return (JSON.parse(card.Card_data)).value
            }


        },
        data() {
            return {
                content: {
                    title: "Карточки пользователей",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
                },
                cards: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    h3 {
        font-weight: 100;
        font-size:36px;
        color:white;
        text-transform: uppercase;
    }

 .cards-list {
     width:100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex-wrap: wrap;
     .card {
         padding: 5px;
         border:1px white solid;
         margin-bottom: 15px;
     }
 }
</style>


