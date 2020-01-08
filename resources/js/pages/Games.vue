<template>
    <div class="card-list">

        <h1 class="main-title">Выбери свою игру!</h1>
        <p class="description">
            Попробуй бесплатно и ощути преимущества данной платформы! Получай игрвые бонусы и достижения играя в рандомы с другими игроками.
            Перед начало игры обязательно ознакомься с правилами нашей платформы.
        </p>


        <div v-if="lotteries!=null">
            <div class="filters-btn">
                <i class="fas fa-funnel-dollar"></i>
                <div class="filters-panel-wrapper">
                    <div class="filters-panel">
                        <div class="form-group">
                            <label>Card title</label>
                            <input type="text" maxlength="30" v-model="filters.title">
                        </div>
                        <div class="row">
                            <div class="half">
                                <div class="form-group">
                                    <label>Min Base price</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.min_base_price">
                                </div>
                            </div>
                            <div class="half">
                                <div class="form-group">
                                    <label>Max Base price</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.max_base_price">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="half">
                                <div class="form-group">
                                    <label>Min Discount</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.min_base_discount">
                                </div>
                            </div>
                            <div class="half">

                                <div class="form-group">
                                    <label>Max Discount</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.max_base_discount">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="half">
                                <div class="form-group">
                                    <label>Min Places</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.min_places">
                                </div>
                            </div>
                            <div class="half">
                                <div class="form-group">
                                    <label>Max Places</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.max_places">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="half">
                                <div class="form-group">
                                    <label>Min Occupied Places</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.min_occupied_places">
                                </div>
                            </div>
                            <div class="half">
                                <div class="form-group">
                                    <label>Max Occupied Places</label>
                                    <input type="number" min="0" max="99999999" v-model="filters.max_occupied_places">
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div v-if="lifetime!=null&&lifetime.length>0" class="form-group">
                                <label>Lifetime</label>
                                <select v-model="filters.lifetime">
                                    <option v-for="time in lifetime" :value="time.value">{{prepareLifetime(time.key)}}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group">
                                <label for="all-consoles">Тип консоли</label>
                                <toggle :check="filters.all_consoles"
                                        :id="'all-consoles'"
                                        v-on:check="setAllConsoles($event)"
                                        :labelon="'Любой'"
                                        :labeloff="'Выбрать'"
                                        :width="200"></toggle>
                            </div>
                        </div>

                        <div class="row" v-if="!filters.all_consoles">
                            <div class="form-group">
                                <toggle :check="filters.console_type"
                                        :id="'console-type'"
                                        v-on:check="checkConsole($event)"
                                        :labelon="'XBOX'"
                                        :labeloff="'PS4'"
                                        :width="147"></toggle>
                            </div>


                        </div>

                        <div class="row">

                            <div class="form-group">
                                <div class="btn btn-yellow " @click="refresh()"><i class="fas fa-sync"></i>
                                </div>
                                <div class="btn btn-yellow " @click="reset()"><i class="fas fa-ban"></i></div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>


            <div v-for="category in categories" class="category"
                 v-if="prepareLots(category.min,category.max).length>0">
                <h1 class="category"><span>{{category.title}} Pucks</span></h1>
                <ul class="lots">
                    <game-item :game="lot" v-for="lot in prepareLots(category.min,category.max)"
                               v-if="isActiveDate(lot)"
                               :user="user"
                               :lifetime="lifetime"
                               :controls="true">
                    </game-item>
                </ul>
            </div>
            <div class="no-items" v-if="prepareLots(0,10000).length==0">
                <img src="img/empty-ru.png" alt="">
            </div>

            <div v-if="user">
                <div class="admin-btn" v-if="user.is_trader==1" @click="show('lottery-add')">
                    <i class="fas fa-plus"></i>
                </div>

                <div class="drafts-btn" v-if="user.is_trader==1" @click="show('drafts')">
                    <i class="fas fa-folder-open"></i>
                </div>
            </div>

            <modal name="lottery-add" :adaptive="true" width="100%" height="100%">
                <scroll class="scroll-area">
                    <a href="#" @click="hide('lottery-add')" class="close"></a>
                    <user-card-panel
                            :user="user"
                            v-on:close="hide('lottery-add')">

                    </user-card-panel>
                </scroll>
            </modal>

            <modal name="drafts" width="100%" height="100%">
                <scroll class="scroll-area">
                    <a href="#" @click="hide('drafts')" class="close"></a>
                    <drafts v-on:close="hide('drafts')" :user="user"></drafts>
                </scroll>
            </modal>
        </div>

    </div>
</template>

<script>


    import GameItem from '@/components/GameItem.vue'

    import Scroll from 'vue-custom-scrollbar'

    import UserCardPanel from '@/components/admin/LotteryCardPanel.vue'
    import Drafts from '@/components/modals/Drafts.vue'

    import Toggle from '@/components/Toggle.vue'


    export default {

        data() {
            return {
                sliderLoaded: false,
                deadlineList: [],
                categories: [
                    {min: 0, max: 49, title: '0-50'},
                    {min: 50, max: 99, title: '50-100'},
                    {min: 100, max: 199, title: '100-200'},
                    {min: 200, max: 999, title: '200-1000'},
                    {min: 1000, max: 9999, title: '1000+'},

                ],
                user: this.loadCurrentUser,
                lotteries: this.loadGames,
                lifetime: this.loadLifetime,
                filters: {
                    title: '',
                    min_base_price: 0,
                    max_base_price: 0,
                    min_base_discount: 0,
                    max_base_discount: 0,
                    min_places: 0,
                    max_places: 0,
                    min_occupied_places: 0,
                    max_occupied_places: 0,
                    lifetime: 0,
                    console_type: true,
                    all_consoles: true,
                    sort: 0
                }

            }
        },

        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData',
            loadGames(newValue, oldValue) {
                this.lotteries = newValue
            },
            loadCurrentUser(newValue, oldValue) {
                this.user = newValue
            },
            loadLifetime(newValue, oldValue) {
                this.lifetime = newValue
            }
        },
        computed: {
            loadLifetime() {
                return this.$store.getters.LIFETIME;
            },
            loadGames() {
                return this.$store.getters.GAMES;
            },
            loadCurrentUser() {
                return this.$store.getters.USER;
            }
        },


        mounted() {
            Event.$on('updateGames', () => {
                this.fetchData()
            });

            setInterval(() => {
                this.deadlineList.forEach((game, index) => {
                    if (game)
                        if (!this.isActiveDate(game)) {
                            this.deadlineList.splice(index, 1);
                            this.$store.dispatch("loadGames")
                        }
                });
            }, 10000);
        },
        methods: {
            fetchData() {
                this.$loading(true)
                this.$store.dispatch("loadAllSettings")
                this.$store.dispatch("loadGames")
                    .then(() => {
                        this.$loading(false)
                    })
                    .catch(() => {
                        this.$loading(false)
                    })
            },
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: 'Рандомы',
                    text: message
                })
            },
            isActiveDate(game) {
                let date1 = Date.parse(game.updated_at == null ? game.created_at : game.updated_at);
                let date2 = Date.now();
                let time = [100000, 6, 12, 24, 36, 48, 96, 128];
                date1 = date1 + time[game.lifetime] * 60 * 60 * 1000;
                return date2 < date1;
            },

            prepareLots(min, max) {
                this.deadlineList = [];

                if (this.lotteries == null || this.lotteries == undefined)
                    return [];

                var tmp_summary = this.lotteries;

                tmp_summary = tmp_summary.filter(lot => this.isActiveDate(lot));

                tmp_summary = tmp_summary.filter(lot => lot.occupied_places < lot.places);

                tmp_summary = tmp_summary.filter(lot => lot.winner_id == null && lot.winner_place == null);

                if (this.filters != null) {

                    if (this.filters.title.trim().length > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.title != null ? lot.title.indexOf(this.filters.title) != -1 : false ||
                            lot.card != null ? lot.card.player.indexOf(this.filters.title) != -1 : false ||
                            lot.item != null ? lot.item.title.indexOf(this.filters.title) != -1 : false
                        );


                    if (this.filters.max_base_price > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.base_price >= this.filters.min_base_price &&
                            lot.base_price <= this.filters.max_base_price);


                    if (this.filters.max_base_discount > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.base_discount >= this.filters.min_base_discount &&
                            lot.base_discount <= this.filters.max_base_discount);


                    if (this.filters.max_places > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.places >= this.filters.min_places &&
                            lot.places <= this.filters.max_places);


                    if (this.filters.max_occupied_places > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.occupied_places >= this.filters.min_occupied_places &&
                            lot.occupied_places <= this.filters.max_occupied_places);

                    if (!this.filters.all_consoles)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.console_type == (this.filters.console_type ? 1 : 0));


                    if (this.filters.lifetime > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.lifetime == this.filters.lifetime);


                    this.deadlineList = tmp_summary.filter(lot =>
                        lot.lifetime > 0);
                }

               tmp_summary = tmp_summary
                        .filter(lottery => lottery.base_price >= parseInt(min) && lottery.base_price < parseInt(max));

                return tmp_summary;
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

            setAllConsoles(event) {
                this.filters.all_consoles = event;
            },
            checkConsole(event) {
                this.filters.console_type = event;
            },
            refresh() {
                this.reset()
                this.$store.dispatch("loadGames")
                document.getElementById("pageContent").scrollTop = 620;
                this.message("Обновление лотов!")
            },
            reset() {
                this.filters = {
                    title: '',
                    min_base_price: 0,
                    max_base_price: 0,
                    min_base_discount: 0,
                    max_base_discount: 0,
                    min_places: 0,
                    max_places: 0,
                    min_occupied_places: 0,
                    max_occupied_places: 0,
                    lifetime: 0,
                    console_type: true,
                    all_consoles: true,
                    sort: 0
                };
                document.getElementById("pageContent").scrollTop = 0;

                this.message("Фильтры сброшены на значения по умолчанию.")
            },
        },
        components: {
            Scroll, UserCardPanel, GameItem, Drafts, Toggle
        }

    }
</script>

<style lang="scss">
    @import "~/fonts.scss";
    @import "~/games.scss";

    .lots {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
        box-sizing: border-box;
    }

    .filters-btn {
        box-shadow: 0px 0px 5px 0px black;
        position: fixed;
        bottom: 55px;
        left: -28px;
        width: 100px;
        transition: 0.5s;
        height: 60px;
        background-color: orangered;
        font-weight: 900;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        z-index: 102;
        padding: 10px 20px 10px 10px;
        border-radius: 0px 5px 5px 0px;
        color: white;
        font-size: 34px;

        .filters-panel-wrapper {

            position: fixed;
            display: none;
            width: 300px;
            top: 0px;
            left: 0px;
            height: 100vh;
            z-index: 1000;
            background: #2c3e50;
            border-right: 2px yellow solid;
            box-shadow: 0px 0px 5px 0px black;
            padding: 20px 0px;

            .filters-panel {
                display: flex;
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;

                hr {
                    width: 100%;
                    border: none;
                    border-bottom: 1px yellow solid;
                    height: 1px;
                }

                .row {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 0px 10px;
                    box-sizing: border-box;

                    .half {
                        width: 50%;
                    }

                }

                .form-group {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    padding: 5px;
                    box-sizing: border-box;

                    width: auto;
                    max-width: 200px;

                    & > label {
                        color: white;
                        width: 100%;
                        text-align: left;
                        line-height: 150%;
                        font-weight: 800;
                        font-size: 10px;
                        text-transform: uppercase;
                    }

                    select,
                    input {
                        border: 2px yellow solid;
                        width: 100%;
                        padding: 10px;
                        border-radius: 5px;
                        background-color: #2c3e50;
                        color: white;
                        max-width: 200px;

                    }

                    input[type="number"] {
                        text-align: right;

                    }

                    .btn {
                        padding: 0px;
                        margin: 0;
                        line-height: 100%;
                        height: 50px;
                        width: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 10px;
                    }
                }

                .sort-type {
                    input[type="radio"] {
                        display: none;

                        & + label {
                            width: 40px;
                            height: 40px;
                            padding: 4px;
                            box-sizing: border-box;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }

            }
        }

        &:hover {
            left: 0px;
            transition: .5s;

            .filters-panel-wrapper {
                display: block;
            }

        }

    }

</style>
