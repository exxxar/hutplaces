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
            <toggle :check="info.currency"
                    :id="'sw-currency'"
                    v-on:check="checkCurrency($event)"
                    :labelon="'PUCKS'"
                    :labeloff="$lang.messages.rub"
                    :width="160"></toggle>
        </div>
        <h2>{{$lang.coins.h2}}</h2>
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
                <div class="price-text">{{$lang.coins.price}}:</div>
                <div class="price-amount">
                    <div><span>{{final_price_pucks}}</span> {{$lang.coins.money}}</div>
                    <div><span>{{final_price_money}}</span> {{$lang.coins.rub}}</div>
                </div>
            </div>
            <a class="link-yellow" href="#" @click="openModal('faq')">{{$lang.coins.how_to_buy}}</a>
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
                <a class="link-light" href="#" @click="openModal('supplier')">{{$lang.coins.sell_to_us}}</a>
            </div>
        </form>
        <modal name="card-search" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('card-search')" class="close"></a>
                <h1>{{$lang.coins.search_player_cards}}</h1>
                <card-search v-on:card="getCard($event)"></card-search>
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
    import CardSearch from '../components/admin/CardSearchNHLHUT.vue'
    import Scroll from 'vue-custom-scrollbar'
    import FAQ from '@/components/modals/FAQ.vue'

    export default {
        data() {
            return {
                final_price_pucks: 0,
                final_price_money: 0,
                pucks_koef: 0.0075,
                money_koef: 0.0075,
                info: {
                    console: true,
                    year: true,
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
        mounted() {
            Event.$emit('updateData');
        },
        methods: {
            openModal(name) {
                Event.$emit("modal", name)
            },
            reset() {
                Object.assign(this.$data, this.$options.data.call(this));
            },
            doInvoice() {
                if (this.info.sum == 0) {
                    this.message("Укажите желаемое колличество монет!");
                    return
                }

                if (this.info.player.trim() == '' ||
                    this.info.team.trim() == '' ||
                    this.info.rating.trim() == '' ||
                    this.info.initial_price.trim() == '' ||
                    this.info.buyout_price.trim() == '' ||
                    this.info.team_hut.trim() == ''
                ) {
                    this.message("Не все поля указаны");
                    return
                }

                if (!this.check && this.info.currency) {
                    this.message("Ошибка");
                    return
                }

                this.show('coins-invoice');
            },
            message( message) {
                Event.$emit("message", {
                    title: "Покупка монет",
                    message: message,
                    type: "warn"
                });
            },
            requestCoins() {

                let formData = new FormData()


                formData.append('console', this.info.console?1:0);
                formData.append('currency', this.info.currency );
                formData.append('sum', this.info.sum);
                formData.append('player', this.info.player );
                formData.append('team', this.info.team );
                formData.append('rating', this.info.rating);
                formData.append('initial_price', this.info.initial_price);
                formData.append('buyout_price', this.info.buyout_price);
                formData.append('team_hut', this.info.team_hut);


                axios.post('/coinsrequest', formData)
                    .then(res => {
                        this.message("Отлично! Запрос отправлен!");
                        this.reset()
                    }).catch(err => {
                    this.message("Ошибочка вышла!");
                })

                this.hide('coins-invoice');
            },
            getCard(data) {
                let start = data.full_name.indexOf(`">`)+2;
                let end = data.full_name.indexOf(`</`);
                this.info.player = data.full_name.substr(start,end-start);
                this.info.team = `${data.league} ${data.team}`;
                this.info.rating = data.overall;
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
            Toggle, CardSearch, Scroll,FAQ
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
