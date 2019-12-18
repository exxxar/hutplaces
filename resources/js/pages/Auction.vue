<template>
    <div class="info-block">

        <div class="filters-btn">
            <i class="fas fa-funnel-dollar"></i>
            <div class="filters-panel-wrapper">
                <div class="filters-panel">
                    <div class="form-group">
                        <label>Название карты</label>
                        <input type="text" maxlength="30" v-model="filters.title">
                    </div>

                    <div class="row">
                        <div class="half">
                            <div class="form-group">
                                <label>Минимальный щаг ставки</label>
                                <input type="number" min="0" max="99999999" v-model="filters.min_step_price">
                            </div>
                        </div>
                        <div class="half">
                            <div class="form-group">
                                <label>Максимальный шаг ставки</label>
                                <input type="number" min="0" max="99999999" v-model="filters.max_step_price">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="half">
                            <div class="form-group">
                                <label>Минимальная цена ставки</label>
                                <input type="number" min="0" max="99999999" v-model="filters.min_bid_price">
                            </div>
                        </div>
                        <div class="half">

                            <div class="form-group">
                                <label>Максимальная цена ставки</label>
                                <input type="number" min="0" max="99999999" v-model="filters.max_bid_price">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="half">
                            <div class="form-group">
                                <label>Минимальная цена выкупа</label>
                                <input type="number" min="0" max="99999999" v-model="filters.min_buy_price">
                            </div>
                        </div>
                        <div class="half">
                            <div class="form-group">
                                <label>Максимальная цена выкупа</label>
                                <input type="number" min="0" max="99999999" v-model="filters.max_buy_price">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="half">
                            <div class="form-group">
                                <label>Минимальный OVR</label>
                                <input type="number" min="0" max="99999999" v-model="filters.min_ovr">
                            </div>
                        </div>
                        <div class="half">
                            <div class="form-group">
                                <label>Максимальный OVR</label>
                                <input type="number" min="0" max="99999999" v-model="filters.max_ovr">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div v-if="lifetime!=null&&lifetime.length>0" class="form-group">
                            <label>Срок жизни</label>
                            <select v-model="filters.lifetime">
                                <option v-for="time in lifetime" :value="time.value">{{prepareLifetime(time.key)}}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div v-if="user">
                        <div class="row" v-if="user.is_trader==1">
                            <div class="form-group">
                                <label>Показывать скрытое</label>
                                <toggle :check="filters.show_all_hiddens"
                                        :id="'show-all-hiddens'"
                                        v-on:check="setHiddens($event)"
                                        :labelon="'Показать'"
                                        :labeloff="'Скрывать'"
                                        :width="210"></toggle>

                            </div>
                        </div>
                    </div>



                    <div class="row">
                        <div class="form-group">
                            <label for="alllots-all-consoles">Тип консоли</label>
                            <toggle :check="filters.all_consoles"
                                    :id="'alllots-all-consoles'"
                                    v-on:check="setAllConsoles($event)"
                                    :labelon="'Любой'"
                                    :labeloff="'Выбрать'"
                                    :width="200"></toggle>
                        </div>
                    </div>

                    <div class="row" v-if="!filters.all_consoles">
                        <div class="form-group">
                            <toggle :check="filters.console_type"
                                    :id="'alllots-console'"
                                    v-on:check="checkConsole($event)"
                                    :labelon="'XBOX'"
                                    :labeloff="'PS4'"
                                    :width="147"></toggle>
                        </div>


                    </div>

                    <div class="row">

                        <div class="form-group">
                            <div class="btn btn-yellow roundet-left" @click="refresh()"><i class="fas fa-sync"></i>
                            </div>
                            <div class="btn btn-yellow roundet-right" @click="reset()"><i class="fas fa-ban"></i></div>
                        </div>


                    </div>


                </div>
            </div>
        </div>

        <tabs :options="{ useUrlFragment: false }">
            <tab :name="$lang.auction.lots">
                <div class="all-lots">
                    <lots :type="0"
                          :filters="filters"
                          :user="user"
                          :lifetime="lifetime"
                    ></lots>
                </div>
            </tab>
            <tab :name="$lang.auction.my_bids" v-if="user">
                <div class="my-bids">
                    <lots :type="1"
                          :filters="null"
                          :user="user"
                          :lifetime="lifetime"
                    ></lots>
                </div>
            </tab>
            <tab :name="$lang.auction.my_lots" v-if="user">
                <div class="my-lots">
                    <lots :type="2"
                          :filters="null"
                          :user="user"
                          :lifetime="lifetime"
                    ></lots>
                </div>
            </tab>
        </tabs>

        <div v-if="user">
            <div class="admin-btn" v-if="user.is_trader==1" @click="show('auction-add')">
                <i class="fas fa-plus"></i>
            </div>
        </div>

        <modal name="auction-add" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('auction-add')" class="close"></a>
                <h1 v-html="$lang.modals.user_card_panel.h1"></h1>

                <auction-card-panel
                        :user="user"
                        v-on:close="hide('auction-add')">
                </auction-card-panel>
            </scroll>
        </modal>
    </div>
</template>

<script>

    import AuctionCardPanel from '@/components/auction/AuctionCardPanel.vue'
    import Lots from '@/components/Lots.vue'
    import Scroll from 'vue-custom-scrollbar'
    import Toggle from '@/components/Toggle.vue'


    export default {
        data() {
            return {
                lifetime: this.loadLifetime,
                user: this.loadCurrentUser,
                filters: {
                    title: '',
                    min_bid_price: 0,
                    max_bid_price: 0,
                    min_buy_price: 0,
                    max_buy_price: 0,
                    min_step_price: 0,
                    max_step_price: 0,
                    min_ovr: 0,
                    max_ovr: 0,
                    lifetime: 0,
                    console_type: true,
                    all_consoles: true,
                    show_all_hiddens: true
                },

            }
        },


        computed: {
            loadLifetime() {
                return this.$store.getters.LIFETIME;
            },
            loadCurrentUser() {
                return this.$store.getters.USER;
            }
        },
        watch: {
            '$route': 'fetchData',
            loadCurrentUser(newValue, oldValue) {
                this.user = newValue
            },
            loadLifetime(newValue, oldValue) {
                this.lifetime = newValue
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.$store.dispatch('getCurrentUser')

                this.$store.dispatch("loadAllSettings")

                this.$store.dispatch("loadAuctions", {type: 0})
                this.$store.dispatch("loadAuctions", {type: 1})
                this.$store.dispatch("loadAuctions", {type: 2})

            },
            setAllConsoles(event) {
                this.filters.all_consoles = event;
            },
            setHiddens(event) {
                this.filters.show_all_hiddens = event;
            },
            checkConsole(event) {
                this.filters.console_type = event;
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
            },

            refresh() {
                this.reset()
                this.$store.dispatch("loadAuctions", {type: 0})
                document.getElementById("pageContent").scrollTop = 0;
                this.message("Обновление лотов!")
            },
            reset() {
                this.filters = {
                    title: '',
                    min_bid_price: 0,
                    max_bid_price: 0,
                    min_buy_price: 0,
                    max_buy_price: 0,
                    min_step_price: 0,
                    max_step_price: 0,
                    lifetime: 0,
                    console_type: true,
                    all_consoles: true
                };
                document.getElementById("pageContent").scrollTop = 0;

                this.message("Фильтры сброшены на значения по умолчанию.")
            },
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: 'Аукцион',
                    text: message
                })
            },
        },
        components: {
            AuctionCardPanel, Toggle, Scroll, Lots
        }

    }
</script>
<style lang="scss" scoped>
    @import "~/auction.scss";
</style>

