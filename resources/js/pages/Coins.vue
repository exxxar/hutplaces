<template>
    <div class="coins-section">
        <h1>{{$lang.coins.purchase_sale_coins}}</h1>
        <div class="switchers">
            <toggle :check="info.console"
                    :id="'sw-console'"
                    v-on:check="checkConsole($event)"
                    :labelon="'XBOX'"
                    :labeloff="'PS4'"
                    :width="148"></toggle>
            <toggle :check="info.year"
                    :id="'sw-year'"
                    v-on:check="checkYear($event)"
                    :labelon="'2020'"
                    :labeloff="'2021'"
                    :width="140"></toggle>
            <toggle :check="info.currency"
                    :id="'sw-currency'"
                    v-on:check="checkCurrency($event)"
                    :labelon="'PUCKS'"
                    :labeloff="$lang.messages.rub"
                    :width="160"></toggle>
        </div>
        <h2>{{$lang.messages.coins_h2}}</h2>
        <div class="calc">
            <div class="row">
                <button v-on:click="decrease">-</button>
                <input type="text" v-model.number="info.sum">
                <button v-on:click="increase">+</button>
            </div>
            <div class="row">
                <button v-on:click="info.sum = 50000">50k</button>
                <button v-on:click="info.sum = 100000">100k</button>
                <button v-on:click="info.sum = 250000">250k</button>
                <button v-on:click="info.sum = 500000">500k</button>
                <button v-on:click="info.sum = 1000000">1M</button>
            </div>
        </div>
        <div class="price">
            <div class="main-price">
                <div class="price-text">{{$lang.messages.price}}:</div>
                <div class="price-amount">
                    <div><span>{{final_price_pucks}}</span> {{$lang.coins.money}}</div>
                    <div><span>{{final_price_money}}</span> {{$lang.messages.rub}}</div>
                </div>
            </div>
            <a class="link-yellow" href="#" @click="show('how-to-buy')">{{$lang.messages.how_to_buy}}</a>
        </div>
        <p><a href="#" @click="show('card-search')">{{$lang.coins.find_card}}</a> {{$lang.coins.enter_manually}}</p>
        <form class="player">
            <input :placeholder="$lang.coins.player" type="text" v-model="info.player">
            <input :placeholder="$lang.coins.team" type="text" v-model="info.team">
            <input type="number" :placeholder="$lang.coins.rating" v-model="info.rating">
            <input type="number" :placeholder="$lang.coins.initial_price" v-model="info.initial_price">
            <input type="number" :placeholder="$lang.coins.buyout_price" v-model="info.buyout_price">
            <input :placeholder="$lang.coins.team_hut" type="text" v-model="info.team_hut">
            <div class="buy-row">
                <button class="btn btn-yellow" type="button" @click="doInvoice()">{{$lang.coins.buy}}</button>
                <a class="link-light" href="#" @click="show('sell-to-us')">{{$lang.coins.sell_to_us}}</a>
            </div>
        </form>
        <modal name="card-search" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('card-search')" class="close"></a>
                <h1>{{$lang.coins.search_player_cards}}</h1>
                <card-search v-on:card="getCard($event)"></card-search>
            </scroll>
        </modal>

        <modal name="sell-to-us" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('sell-to-us')" class="close"></a>
                <h1>{{$lang.coins.sell_to_us}}</h1>
            </scroll>
        </modal>

        <modal name="how-to-buy" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('how-to-buy')" class="close"></a>
                <h1>{{$lang.coins.how_to_buy}}</h1>
            </scroll>
        </modal>

        <modal name="coins-invoice" :adaptive="true" width="100%" height="100%">
            <div class="modal-content">
                <a href="#" @click="hide('coins-invoice')" class="close"></a>
                <h1>{{$lang.coins.payment_request}}</h1>
                <p v-if="info.currency">{{final_price_pucks}}<span>{{$lang.coins.money}}</span></p>
                <p v-else>{{final_price_money}}<span>{{$lang.coins.rub}}</span></p>
                <h1>{{$lang.coins.coins_ordered}}</h1>
                <p><span>{{info.sum}}</span></p>
                <button class="btn btn-yellow full" type="button" @click="requestCoins()">{{$lang.messages.buy}}
                </button>

            </div>
        </modal>
    </div>
</template>

<script>

    import Toggle from '../components/Toggle.vue'
    import CardSearch from '../components/admin/CardSearch.vue'
    import Scroll from 'vue-custom-scrollbar'

    export default {
        data() {
            return {
                final_price_pucks: 0,
                final_price_money: 0,
                pucks_koef: 0.0005,
                money_koef: 0.0005,
                info: {
                    console: true,
                    year: false,
                    currency: true,
                    sum: 0,
                    player: '',
                    team: '',
                    rating: '',
                    initial_price: '',
                    buyout_price: '',
                    team_hut: ''
                }
            }
        },
        watch: {
            'info.sum': {
                handler(newVal, oldVal) {
                    this.final_price_pucks = this.info.sum * this.pucks_koef
                    this.final_price_money = this.info.sum * this.money_koef
                }
            }
        },
        computed: {
            check() {
                return this.$store.getters.CHECK;
            },
            user() {
                return this.$store.getters.USER;
            },
        },
        methods: {
            reset() {
                Object.assign(this.$data, this.$options.data.call(this));
            },
            doInvoice() {
                if (this.info.sum == 0) {
                    this.message(this.$lang.messages.send_coins, $lang.messages.error_coins_3, "error");
                    return
                }

                if (this.info.player.trim() == '' ||
                    this.info.team.trim() == '' ||
                    this.info.rating.trim() == '' ||
                    this.info.initial_price.trim() == '' ||
                    this.info.buyout_price.trim() == '' ||
                    this.info.team_hut.trim() == ''
                ) {
                    this.message(this.$lang.messages.send_coins, this.$lang.messages.error_coins_2, "error");
                    return
                }

                if (!this.check && this.info.currency) {
                    this.message(this.$lang.messages.send_coins, this.$lang.messages.error_coins_1, "error");
                    return
                }

                this.show('coins-invoice');
            },
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            requestCoins() {

                axios.post('coinsrequest', {info: this.info})
                    .then(res => {
                        this.message(this.$lang.messages.send_coins, this.$lang.messages.send_coins_success_1, "error");
                        this.reset()
                    }).catch(err => {
                    this.message(this.$lang.messages.send_coins, this.$lang.messages.error_coins_4, "error");
                })

                this.hide('coins-invoice');
            },
            getCard(data) {
                this.info.player = data.Player;
                this.info.team = `${data.League} ${data.Team}`;
                this.info.rating = data.OVR;
                this.info.initial_price = data.salary;
                this.hide("card-search")
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            checkConsole: function (event) {
                this.info.console = event
            },
            checkYear: function (event) {
                this.info.year = event
            },
            checkCurrency: function (event) {
                this.info.currency = event
            },
            increase: function () {
                if (this.info.sum < 10000000) {
                    this.info.sum += 50000
                }
            },
            decrease: function () {
                if (this.info.sum >= 50000) {
                    this.info.sum -= 50000
                }
            }
        },
        components: {
            Toggle, CardSearch, Scroll
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/coins.scss";

    h1 {
        width: 100%;
        text-align: center;
        font-weight: 100;
        font-size: 24px;
        line-height: 150%;
        text-transform: uppercase;
        color: $color4;
        padding: 10px;
        box-sizing: border-box;
    }

    p {
        text-align: center;
        color: white;
        width: 100%;
        margin-top: 20px;
        a {
            font-weight: 900;
            color: white;
            text-decoration-style: dashed;
        }
    }

    .modal-content {
        width: 400px;
        p {
            line-height: 150%;
            font-weight: 900;
            font-size: 36px;
            padding: 20px;
            box-sizing: border-box;
            margin-top: 0px;

            span {
                color: yellow;
            }
        }
    }
</style>

<style lang="scss">
    @import "~/cardsearch.scss";
</style>