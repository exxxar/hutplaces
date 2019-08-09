<template>
    <div class="coins-section">

        <h1>ПОКУПА \ ПРОДАЖА МОНЕТ</h1>
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
                    <div><span>{{final_price_pucks}}</span> Pucks</div>
                    <div><span>{{final_price_money}}</span> {{$lang.messages.rubles}}</div>
                </div>
            </div>
            <a class="link-yellow" href="#">{{$lang.messages.how_to_buy}}</a>
        </div>

        <hr>
        <p><a href="#" @click="show('card-search')">Найдите карточку</a> или, впишите вручную</p>
        <form class="player">
            <input :placeholder="$lang.messages.player" type="text" v-model="info.player">
            <input :placeholder="$lang.messages.team" type="text" v-model="info.team">
            <input :placeholder="$lang.messages.rating" type="text" v-model="info.rating">
            <input :placeholder="$lang.messages.initial_price" type="text" v-model="info.initial_price">
            <input :placeholder="$lang.messages.buyout_price" type="text" v-model="info.buyout_price">
            <input :placeholder="$lang.messages.team_hut" type="text" v-model="info.team_hut">
            <div class="buy-row">
                <button class="btn btn-yellow" type="button" @click="requestCoins()">{{$lang.messages.buy}}</button>
                <a class="link-light" href="#">{{$lang.messages.sell_to_us}}</a>
            </div>
        </form>

        <modal name="card-search" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('card-search')" class="close"></a>
                <h1>Поиск карточек игроков</h1>
                <card-search v-on:card="getCard($event)"></card-search>
            </scroll>
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
        methods: {
            reset() {
                Object.assign(this.$data, this.$options.data.call(this));
            },
            message(title,message,type){
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            requestCoins(){
                if (this.info.sum==0) {
                    this.message("Отправка монет", "Укажите желаемую сумму", "error");
                    return
                }

                if (this.info.player.trim()==''||
                    this.info.team.trim()==''||
                    this.info.rating.trim()==''||
                    this.info.initial_price.trim()==''||
                    this.info.buyout_price.trim()==''||
                    this.info.team_hut.trim()==''
                ) {
                    this.message("Отправка монет","Не все поля заполнены","error");
                    return
                }

                axios.post('coinsrequest', {info: this.info})
                    .then(res => {
                        this.message("Отправка монет","Запрос успешно отправлен","error");
                        this.reset()
                    }).catch(err => {
                    this.message("Отправка монет","Ошибка запроса(","error");
                })
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

        a {
            font-weight: 900;
            color: white;
            text-decoration-style: dashed;
        }
    }
</style>

<style lang="scss">
    @import "~/cardsearch.scss";
</style>