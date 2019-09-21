<template>
    <div class="my-lots">
        <div class="left-panel">
            <div class="form-group">
                <button class="btn btn-yellow full" v-if="lot.card==null" @click="show('card-search')">Найти карточку</button>
                <p>или создайте</p>
                <button class="btn btn-yellow full" @click="show('create-item')">Создать предмет</button>
                <hr>
                <button class="btn btn-yellow full" @click="addNewLot()">Добавить лот</button>
            </div>

          <!--  <switch-tabs>
                <switch-section title="Main" active="true">

                    <div class="form-group">
                        <label>Step price</label>
                        <input type="number" min="0" max="99999999" v-model="lot.step_price">
                    </div>

                    <div class="form-group">
                        <label>Bid price</label>
                        <input type="number" min="0" max="99999999" v-model="lot.bid_price">
                    </div>


                    <div class="form-group">
                        <label>Buy price</label>
                        <input type="number" min="0" max="99999999" v-model="lot.buy_price">
                    </div>

                    <div v-if="lifetime!=null&&lifetime.length>0" class="form-group">
                        <label>Lifetime</label>
                        <select v-model="lot.lifetime">
                            <option v-for="time in lifetime" :value="time.value">{{prepareLifetime(time.key)}}</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <toggle :check="lot.console_type"
                                :id="'mylots-console'"
                                v-on:check="checkConsole($event)"
                                :labelon="'XBOX'"
                                :labeloff="'PS4'"
                                :width="147"></toggle>
                    </div>

                </switch-section>

                <switch-section title="Card">
                    <div class="form-group">
                        <label>Card title</label>
                        <input type="text" maxlength="30" v-model="lot.title">
                    </div>

                    <div class="form-group ">
                        <button class="btn btn-primary full" v-if="lot.card==null" @click="show('card-search')">
                            Найти карточку
                        </button>
                        <button class="btn btn-info full" v-else @click="clearCard()">Сбросить карточку</button>
                    </div>

                </switch-section>

                <switch-section title="Item">
                    item
                </switch-section>

                <switch-section title="Coins">
                    coins
                </switch-section>

            </switch-tabs>
          -->


        </div>


        <div class="right-panel">
            <scroll class="scroll-area">
                <lots :type="'mylots'" :userId="userId"></lots>
            </scroll>
        </div>


        <modal name="card-search" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('card-search')" class="close"></a>
                <h1>{{$lang.coins.search_player_cards}}</h1>
                <card-search v-on:card="getCard($event)"></card-search>
            </scroll>
        </modal>

        <modal name="create-item" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('create-item')" class="close"></a>
                <h1>Создать предмет</h1>
                <div class="row">
                    <div class="form-group">
                        <label>Step price</label>
                        <input type="number" min="0" max="99999999" v-model="lot.step_price">
                    </div>

                    <div class="form-group">
                        <label>Bid price</label>
                        <input type="number" min="0" max="99999999" v-model="lot.bid_price">
                    </div>
                </div>

                <div class="row">
                    <div class="form-group">
                        <label>Buy price</label>
                        <input type="number" min="0" max="99999999" v-model="lot.buy_price">
                    </div>

                    <div v-if="lifetime!=null&&lifetime.length>0" class="form-group">
                        <label>Lifetime</label>
                        <select v-model="lot.lifetime">
                            <option v-for="time in lifetime" :value="time.value">{{prepareLifetime(time.key)}}</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group">
                        <toggle :check="lot.console_type"
                                :id="'mylots-console'"
                                v-on:check="checkConsole($event)"
                                :labelon="'XBOX'"
                                :labeloff="'PS4'"
                                :width="147"></toggle>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" v-model="lot.title">
                    </div>

                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" v-model="lot.description">
                    </div>
                </div>





            </scroll>
        </modal>
    </div>

</template>


<script>

    import Toggle from '@/components/Toggle.vue'
    import CardSearch from '@/components/admin/CardSearch.vue'
    import Lots from '@/components/Lots.vue'
    import Scroll from 'vue-custom-scrollbar'

    import {Tabs as SwitchTabs, Tab as SwitchSection} from 'vue-simple-tabs';

    export default {
        props: ["userId"],
        activated() {
            this.loadLifetimes();
            localStorage.setItem('lot', JSON.stringify(this.lot))
        },
        mounted() {
            this.loadLifetimes()
            localStorage.setItem('lot', JSON.stringify(this.lot))
        },
        methods: {
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            getCard(data) {
                this.lot.title = data.Player;
                this.lot.card = data;
                this.hide("card-search")
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },

            clearCard() {
                this.lot.card = null;
            },

            loadLifetimes() {
                axios
                    .get('/settings/lifetime')
                    .then(response => {
                        this.lifetime = response.data.lifetime;
                        console.log(response)
                    });
            },
            addNewLot() {
                axios
                    .post('/auction/add', this.lot)
                    .then(response => {
                        this.lot = JSON.parse(localStorage.getItem('lot'))
                        Event.$emit("updateUserLots");
                    });
            },
            checkConsole: function (event) {
                this.lot.console_type = event
            },
            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
            },


        },
        data() {
            return {
                lifetime: null,
                lot: {
                    title: '',
                    step_price: 0,
                    bid_price: 0,
                    buy_price: 0,
                    lifetime: null,
                    console_type: true,
                    card: null
                },

            }
        },
        components: {
            Toggle, CardSearch, Scroll, Lots, SwitchTabs, SwitchSection
        }

    }
</script>
<style lang="scss">
    @import "~/auction.scss";

    .type-switcher {
        width: 100%;
        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 30px;
            li {
                text-transform: uppercase;
                font-size: 10px;
                color: white;
                font-weight: 900;
                line-height: 150%;

                &.active {
                    border-bottom: 2px yellow solid;
                }
            }
        }
    }

</style>

