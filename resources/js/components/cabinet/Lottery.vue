<template>
    <div>
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <ul class="cards" v-if="lotteries!=null&&lotteries.length>0">
            <li class="card" v-for="lottery in lotteries">
                <div class="card-wrapper">
                    <div v-html="prepareCard(lottery)" class="card-data" @click="lotteryOpen(lottery.id)"></div>
                    <div class="price">{{lottery.base_price }} Pucks</div>
                    <div class="places">{{lottery.places}}</div>
                </div>
                <div class="progress">
                    <div class="line" :style="lineWidth(lottery.occupied_places,lottery.places)"></div>
                    <div class="info">{{lottery.occupied_places}}/{{lottery.places}}</div>
                </div>
            </li>
        </ul>
        <h3 v-if="lotteries==null||lotteries.length==0">Вы еще ничего не выиграли:(</h3>
    </div>
</template>

<script>

    export default {
        props:["win"],
        activated() {
            this.loadLotteries()
            //this.loadContent()
        },
        mounted() {
            Event.$on('updateLotteries', () => {
                this.loadLotteries()
            });
        },
        methods: {
            loadContent() {
                var url = this.win?
                    '/content/wins/all':
                    '/content/lotteries/all';

                axios
                    .get(url)
                    .then(response => {
                        this.content = response.data.content;
                    });
            },
            loadLotteries() {
                var url = this.win?
                    `/users/wins/${auth.user.id}`:
                    `/users/lotteries/${auth.user.id}`;

                axios
                    .get(url)
                    .then(response => {
                        this.lotteries = response.data.lotteries;
                    });
            },
            prepareCard(lottery) {
                return (JSON.parse(lottery.lot.card.Card_data)).value
            },
            lineWidth: function (c1, c2) {
                return {
                    '--line-width': ((c1 / c2) * 100) + '%'
                }
            },
            lotteryOpen: function (lotteryId) {
                this.$router.push({ name: 'Lottery', params: { gameId: lotteryId } })
            }


        },
        data() {
            return {
                content: {
                    title: "Выигранные рандомы",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
                },
                lotteries: null,
            }
        },

    }
</script>
<style lang="scss" scoped>

    @import "~/games.scss";

    h3 {
        font-weight: 100;
        font-size: 36px;
        color: white;
        text-transform: uppercase;
    }


</style>


