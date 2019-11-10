<template>
    <div class="info-block">
        <h1 class="main-title" v-html="$lang.cabinet.lottery.main_title"></h1>
        <p class="description" v-html="$lang.cabinet.lottery.main_description"></p>
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
        <div class="no-items" v-if="lotteries==null||lotteries.length==0"><img :src="$lang.cabinet.lottery.error_1"
                                                                               alt=""></div>

    </div>
</template>

<script>

    export default {
        props: ["win", "user"],
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        mounted() {
            Event.$on('updateLotteries', () => {
                this.fetchData()
            });
        },
        methods: {
            fetchData() {
                this.loadLotteries()
            },
            loadLotteries() {
                var url = this.win ?
                    `/users/wins/${this.user.id}` :
                    `/users/lotteries/${this.user.id}`;

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
                this.$router.push({name: 'Lottery', params: {gameId: lotteryId}})
            },


        },
        data() {
            return {
                lotteries: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "~/games.scss";
    @import "~/cabinet.scss";
</style>


