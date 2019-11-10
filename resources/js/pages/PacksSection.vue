<template>
    <div class="packs-page">
        <h1 class="main-title">Игровые наборы</h1>
        <p class="description">
            Найди своего игрока в одном из наших игровых наборов! Твой игрок ждет тебя!
        </p>

        <div class="filters-btn">
            <i class="fas fa-funnel-dollar"></i>
            <div class="filters-panel-wrapper">
                <div class="filters-panel">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" maxlength="30" v-model="filters.title">
                    </div>

                    <div class="row">
                        <div class="half">
                            <div class="form-group">
                                <label>Min price</label>
                                <input type="number" min="0" max="99999999" v-model="filters.min_price">
                            </div>
                        </div>
                        <div class="half">
                            <div class="form-group">
                                <label>Max price</label>
                                <input type="number" min="0" max="99999999" v-model="filters.max_price">
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="half">
                            <div class="form-group">
                                <label>Min Lots in pack</label>
                                <input type="number" min="0" max="99999999" v-model="filters.min_lots_in_pack">
                            </div>
                        </div>
                        <div class="half">

                            <div class="form-group">
                                <label>Max Lots in pack</label>
                                <input type="number" min="0" max="99999999" v-model="filters.max_lots_in_pack">
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="half">
                            <div class="form-group">
                                <label>Min Lots guaranteed</label>
                                <input type="number" min="0" max="99999999" v-model="filters.min_lots_guaranteed">
                            </div>
                        </div>
                        <div class="half">
                            <div class="form-group">
                                <label>Max Lots guaranteed</label>
                                <input type="number" min="0" max="99999999" v-model="filters.max_lots_guaranteed">
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

        <ul class="packs-list">
            <li class="packs-item" v-for="pack in preparePacks()">
                <div class="wrapper">
                    <div class="content">
                        <h1>{{pack.title}}</h1>
                        <h6> {{pack.description}}</h6>

                        <div v-if="user">
                            <a class="cancel" v-if="pack.seller_id==user.id&&user.is_trader"
                               @click="cancelPack(pack.id)">
                                <i class="fas fa-times"></i>
                            </a>
                        </div>


                        <div class="console">
                            <i v-if="pack.console_type==1" class="fab fa-playstation"></i>
                            <i v-if="pack.console_type==0" class="fab fa-xbox"></i>
                        </div>


                        <h4>{{pack.price}} <span>Pucks</span></h4>

                        <div class="controlls">
                            <router-link to="/signin" tag="button" v-if="!user" class="btn btn-yellow "><i
                                    class="fas fa-sign-in-alt"></i></router-link>
                            <button class="btn btn-yellow" v-if="user" @click="openPack(pack.id)">Открыть</button>
                            <button class="btn btn-yellow" @click="demoPack(pack.id)"><i class="far fa-eye"></i>
                            </button>
                        </div>
                        <div class="counters">
                            <div class="half">
                                <h6>Гарантия</h6>
                                <p>{{pack.lots_guaranteed}}</p>
                            </div>

                            <div class="half">
                                <h6>Всего</h6>
                                <p>{{pack.lots_in_pack}}</p>
                            </div>

                        </div>
                    </div>


                    <div class="background image" v-if="pack.image!=null">
                        <img :src="`/img/packs/${pack.image}`">
                    </div>

                    <div class="background no-image" v-if="pack.image==null">
                        <img :src="`/img/packs-bg.png`">
                    </div>
                </div>

            </li>
        </ul>

        <div v-if="user">
            <div class="admin-btn" v-if="user.is_trader==1" @click="show('packs-add')">
                <i class="fas fa-plus"></i>
            </div>
        </div>

        <modal name="packs-add" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('packs-add')" class="close"></a>

                <packs-panel
                        :user="user"
                        v-on:close="hide('packs-add')">
                </packs-panel>
            </scroll>
        </modal>


        <modal name="demo-open" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('demo-open')" class="close"></a>

                <ul class="raitings-list" v-if="selected_raitings!=null">

                    <li class="raitings-item" v-for="rate in selected_raitings">
                        <h1>{{rate.min_ovr}} - {{rate.max_ovr}} ({{rate.rate}}%)</h1>
                        <ul class="demo-list" v-if="drops!=null">
                            <li class="demo-item" v-for="card in prepareDrops(rate)">
                                <div class="wrapper">

                                    <card :card="card"></card>
                                    <!--<h5>{{card.player}}</h5>
                                    <h6>{{card.ovr}}</h6>-->
                                </div>
                            </li>

                        </ul>

                    </li>

                </ul>


            </scroll>
        </modal>

        <modal name="open-pack" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('open-pack')" class="close"></a>

                <ul class="demo-list" v-if="drops!=null">
                    <li class="demo-item" v-for="card in drops">
                        <div class="wrapper">

                            <card :card="card"></card>

                        </div>
                    </li>
                </ul>


            </scroll>
        </modal>


        <modal :name="'show-packs-card'" :adaptive="true" width="100%" height="100%" style="z-index: 1000">
            <scroll class="scroll-area">
                <a href="#" @click="hide('show-packs-card')" class="close"></a>
                <card :card="selected_card" v-on:close="hide('show-packs-card')"></card>
            </scroll>
        </modal>

        <modal :name="'anim-pack'" :adaptive="true" width="100%" height="100%" style="z-index: 1000">
            <packs-anim></packs-anim>
        </modal>
    </div>
</template>
<script>

    import Scroll from 'vue-custom-scrollbar'
    import PacksPanel from '@/components/packs/PacksPanel.vue'
    import PacksAnim from '@/components/animations/AnimPacks.vue'
    import FlipCountdown from 'vue2-flip-countdown'
    import Toggle from '@/components/Toggle.vue'

    import Card from '@/components/admin/Card.vue'

    export default {
        data() {
            return {

                drops: null,
                selected_raitings: null,
                selected_card: null,
                packs: null,
                user: this.loadCurrentUser,
                filters: {
                    title: '',
                    min_price: 0,
                    max_price: 0,
                    min_lots_in_pack: 0,
                    max_lots_in_pack: 0,
                    min_lots_guaranteed: 0,
                    max_lots_guaranteed: 0,
                    console_type: true,
                    all_consoles: true
                },
            }
        },
        activated() {
            this.loadPacks()
            this.$store.dispatch('getCurrentUser')
        },
        mounted() {
            this.loadPacks()
            this.$store.dispatch('getCurrentUser')
            Event.$on("loadPacks", () => {
                this.loadPacks()
            })
        },
        computed: {
            loadCurrentUser() {
                return this.$store.getters.USER;
            }
        },
        watch: {
            loadCurrentUser(newValue, oldValue) {
                this.user = newValue
            },

        },
        methods: {

            cancelPack(id) {
                this.drops = _.remove(this.drops, {id: id})

                axios
                    .get(`/packs/del/${id}`)
                    .then(response => {
                        this.drops = response.data.drops;
                        Event.$emit("loadPacks")
                        this.message("Пак успешно удален!")
                    });
            },
            openPack(id) {

                this.show('anim-pack')

                axios
                    .get(`/packs/open/${id}`)
                    .then(response => {
                        this.show("open-pack");

                        this.drops = response.data.drops;
                        this.selected_raitings = response.data.raitings
                        this.hide('anim-pack')
                        this.message("Пак успешно преобретен!")
                    })
                    .catch(() => {
                        this.hide('anim-pack')
                        this.message("Ошибка открытия пака!")
                    })
            },
            prepareDrops(raiting) {
                return this.drops.filter(drop => {
                    return drop.ovr >= raiting.min_ovr && drop.ovr <= raiting.max_ovr
                });


            },
            openCard(card) {
                this.selected_card = card;
                this.show('show-packs-card')
            },
            demoPack(id) {
                this.show('anim-pack')

                axios
                    .get(`/packs/demo/${id}`)
                    .then(response => {
                        this.show("demo-open");

                        this.drops = response.data.drops;
                        this.selected_raitings = response.data.raitings
                        if (this.drops == null || this.drops.lenght == 0) {
                            this.message("Пак пуст!")
                            this.hide("demo-open");
                        }
                        if (this.selected_raitings == null || this.selected_raitings.lenght == 0)
                            this.message("Для данного пака не заданы шансы выпадения!")

                        this.hide('anim-pack')


                    })
                    .catch(() => {
                        this.hide('anim-pack')
                    })
            },
            preparePacks() {


                if (this.packs == null || this.packs == undefined)
                    return [];

                var tmp_summary = this.packs;

                if (this.filters != null) {

                    if (this.filters.title.trim().length > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.title != null ? lot.title.indexOf(this.filters.title) != -1 : false);

                    if (parseInt(this.filters.max_price) > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            parseInt(lot.price) >= parseInt(this.filters.min_price) &&
                            parseInt(lot.price) <= parseInt(this.filters.max_price));

                    if (parseInt(this.filters.max_lots_in_pack) > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            parseInt(lot.lots_in_pack) >= parseInt(this.filters.min_lots_in_pack) &&
                            parseInt(lot.lots_in_pack) <= parseInt(this.filters.max_lots_in_pack));

                    if (parseInt(this.filters.max_lots_guaranteed) > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            parseInt(lot.lots_guaranteed) >= parseInt(this.filters.min_lots_guaranteed) &&
                            parseInt(lot.lots_guaranteed) <= parseInt(this.filters.max_lots_guaranteed));

                    if (!this.filters.all_consoles)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.console_type == (this.filters.console_type ? 1 : 0));

                    if (this.filters.lifetime > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.lifetime == this.filters.lifetime);
                }

                document.getElementById("pageContent").scrollTop = 0;

                return tmp_summary;
            },
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.modals.promocodes.error_title,
                    text: message
                })
            },
            setAllConsoles(event) {
                this.filters.all_consoles = event;
            },
            checkConsole(event) {
                this.filters.console_type = event;
            },

            refresh() {
                this.reset()
                Event.$emit("loadPacks")
                document.getElementById("pageContent").scrollTop = 0;
                this.message("Обновление лотов!")
            },
            reset() {
                this.filters = {
                    title: '',
                    min_price: 0,
                    max_price: 0,
                    min_lots_in_pack: 0,
                    max_lots_in_pack: 0,
                    min_lots_guaranteed: 0,
                    max_lots_guaranteed: 0,
                    console_type: true,
                    all_consoles: true
                };
                document.getElementById("pageContent").scrollTop = 0;

                this.message("Фильтры сброшены на значения по умолчанию.")
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            loadPacks() {
                axios
                    .get(`/packs/all`)
                    .then(response => {
                        this.packs = response.data.packs;
                    });
            },


        },

        components: {
            FlipCountdown, PacksPanel, Scroll, Toggle, Card, PacksAnim
        },
    }
</script>

<style lang="scss">


    .packs-list {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        padding: 10px;
        box-sizing: border-box;
        .packs-item {
            width: 260px;
            height: 350px;
            padding: 10px;
            box-sizing: border-box;
            .wrapper {
                background-color: #2c3e50;
                box-sizing: border-box;
                text-align: center;
                font-weight: 400;
                color: white;
                position: relative;
                background-position: center center;
                background-size: auto;
                background-repeat: no-repeat;
                height: 100%;
                width: 100%;
                border-radius: 5px;
                border: 2px yellow solid;
                box-shadow: 0px 0px 5px 0px black;

                .content {
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    height: 100%;

                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    flex-direction: column;

                    padding-bottom: 50px;
                    box-sizing: border-box;

                    h1 {
                        font-weight: 700;
                        color: white;
                        line-height: 150%;

                        padding-top: 50px;
                    }
                    h6 {
                        font-weight: 100;
                        color: white;
                        font-style: italic;
                        line-height: 150%;
                        padding: 10px;
                        font-size: 10px;
                    }

                    h4 {
                        font-weight: 600;
                        font-size: 24px;
                        color: white;
                        span {
                            color: yellow;
                        }
                    }

                    .cancel {
                        position: absolute;
                        z-index: 10;
                        right: 10px;
                        top: 5px;
                        color: red;
                        text-shadow: 1px 1px 1px black;
                        font-size: 25px;
                        cursor: pointer;

                        &:hover {
                            color: white;
                        }
                    }

                    .controlls {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        .btn {
                            &:nth-of-type(1) {
                                border-radius: 5px 0px 0px 5px;
                            }

                            &:nth-of-type(2) {
                                border-radius: 0px 5px 5px 0px;
                            }
                        }
                    }

                    .console {
                        position: absolute;
                        top: 10px;
                        left: 0px;
                        padding: 0px 10px;
                        font-size: 40px;
                        color: #ffff00;
                        text-shadow: 2px 2px 2px black;
                    }

                    .counters {
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        height: 75px;
                        position: absolute;
                        bottom: 0;
                        left: 0;

                        .half {
                            width: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-wrap: wrap;
                            h6 {
                                font-size: 10px;
                                font-weight: 600;
                                text-transform: uppercase;
                                width: 100%;
                                line-height: 150%;
                            }

                            p {
                                line-height: 150%;
                                font-size: 12px;
                                font-weight: 900;
                            }
                        }
                    }
                }

                .background {
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &.image {
                        mix-blend-mode: soft-light;
                        img {
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    &.no-image {
                        mix-blend-mode: color-burn;
                    }

                }

            }
        }
    }

    .raitings-list {
        width: 100%;
        box-sizing: border-box;
        .raitings-item {
            h1 {
                font-size: 36px;
                font-weight: 900;
                padding: 10px;
                width: 100%;
                text-align: center;
                box-sizing: border-box;
            }

        }
    }

    .demo-list {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 50px;
        box-sizing: border-box;

        .demo-item {
            padding: 5px;
            box-sizing: border-box;
            cursor: pointer;
            .wrapper {
                width: 100%;
                height: 100%;
                border: 2px yellow solid;
                background-color: #2c3e50;
                padding: 5px;
                box-sizing: border-box;

                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                flex-direction: column;

                background-image: url(/img/packs-bg.png);
                background-size: cover;
                background-blend-mode: color-burn;

                transition: .3s;

                &:hover {
                    transition: .3s;
                    box-shadow: 0px 0px 7px 4px #131b23 inset;
                }

                h5 {
                    color: yellow;
                    text-align: center;
                    font-weight: 900;
                }

                h6 {
                    color: white;
                    line-height: 150%;
                    font-size: 36px;
                    font-weight: 800;
                }
            }
        }
    }


</style>