<template>
    <div class="promo-page">
        <h1 class="main-title">Промо-акции</h1>
        <p class="description">
            Хочешь быть на волне последних событий? Тогда следи за обновлением наших акций! Промо-акции это бесплатная возможность получить какие-либо призы, только есть одно но - промокод находится у наших партнеров! Попробуй найди его;)</p>

        <div class="promo-form">
            <div class="input-group">
                <label v-html="$lang.modals.promocodes.your_promo"></label>
                <input type="text" autocomplete="off" v-model="code" maxlength="8">
            </div>

            <div class="input-group">
                <button class="btn btn-yellow full" @click="doRequest()"
                        v-html="$lang.modals.promocodes.activate"></button>
            </div>
        </div>

        <ul class="promo-list" v-for="promo in promotions">
            <li class="promo-item">
                <div class="wrapper" v-lazy:background-image="'/img/promo-bg.png'">


                    <div class="deadline" v-if="promo.lifetime!=0">
                        <flip-countdown :deadline="prepareDeadline(promo)"></flip-countdown>
                    </div>

                    <h1>{{promo.title}}</h1>
                    <h6>{{promo.description}}</h6>

                    <ul class="prizes" v-if="prepareRewards(promo)!=null" v-html="prepareRewards(promo)"></ul>

                    <div class="counters">
                        <div class="half">
                            <h6>Уже активировано</h6>
                            <p>{{promo.activation_count}}</p>
                        </div>

                        <div class="half">
                            <h6>Всего активаций</h6>
                            <p>{{promo.count}}</p>
                        </div>

                    </div>
                </div>


            </li>
        </ul>


        <div v-if="user">
            <div class="admin-btn" v-if="user.is_trader==1" @click="show('promotions-add')">
                <i class="fas fa-plus"></i>
            </div>
        </div>

        <modal name="promotions-add" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('promotions-add')" class="close"></a>
                <promotions-panel
                        :user="user"
                        v-on:close="hide('promotions-add')">
                </promotions-panel>
            </scroll>
        </modal>

    </div>
</template>
<script>

    import Scroll from 'vue-custom-scrollbar'
    import PromotionsPanel from '@/components/promotions/PromotionsPanel.vue'
    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        data() {
            return {
                code: "",
                promotions: null,
                user: this.loadCurrentUser,
            }
        },
        activated() {
            this.loadPromotions()
            this.$store.dispatch('getCurrentUser')
        },
        mounted() {
            this.loadPromotions()
            this.$store.dispatch('getCurrentUser')
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
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.modals.promocodes.error_title,
                    text: message
                })
            },
            doRequest() {
                if (this.code.length != 8) {
                    this.message(this.$lang.modals.promocodes.error_1);
                    return;
                }
                axios
                    .post('/promo/activate', {
                        code: this.code
                    }).then(response => {
                    this.message(response.data.message);
                });
            },

            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },

            prepareRewards(promo) {
                var tmp = '';
                var hasPrize = false;

                if (promo.discount != null && promo.discount != 0) {
                    tmp += "<li>" + eval(`this.$lang.achievements.discount`) + "</li>";
                    hasPrize = true;
                }

                if (promo.exp != null && promo.exp != 0) {
                    tmp += "<li>" + eval(`this.$lang.achievements.exp`) + "</li>";
                    hasPrize = true;
                }

                if (promo.coins != null && promo.coins != 0) {
                    tmp += "<li>" + eval(`this.$lang.achievements.coins`) + "</li> ";
                    hasPrize = true;
                }

                if (promo.money != null && promo.money != 0) {
                    tmp += "<li>" + eval(`this.$lang.achievements.money`) + "</li>";
                    hasPrize = true;
                }

                if (promo.bonus != null) {
                    tmp += "<li>" + eval(`this.$lang.achievements.bonus`) + "</li>";
                    hasPrize = true;
                }

                if (promo.card_id != null) {
                    tmp += "<li>" + eval(`this.$lang.achievements.card`) + "</li>";
                    hasPrize = true;
                }

                if (promo.item_id != null) {
                    tmp += "<li>" + eval(`this.$lang.achievements.item`) + "</li>";
                    ;
                    hasPrize = true;
                }

                if (!hasPrize)
                    tmp = eval(`this.$lang.achievements.empty`)


                return tmp.length == 0 ? null : tmp;

            },

            loadPromotions() {
                axios
                    .get(`/promo/all`)
                    .then(response => {
                        this.promotions = response.data.promotions;
                    });
            },

            prepareDeadline(promo) {
                let date = Date.parse(promo.updated_at);
                let time = [1000, 6, 12, 24, 36, 48, 96, 128];

                date = date + time[promo.lifetime] * 60 * 60 * 1000;
                return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
            },


        },

        components: {
            FlipCountdown, PromotionsPanel,Scroll
        },
    }
</script>

<style lang="scss">

    .promo-page {
        padding-bottom: 50px;
    }

    .promo-form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .input-group {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            padding: 10px;
            box-sizing: border-box;
            label {
                color: white;
                line-height: 150%;
                text-transform: uppercase;
                font-size: 10px;
                font-weight: 900;
            }

            input {
                border: 2px yellow solid;
                background-color: #2c3e50;
                border-radius: 5px;
                padding: 20px;
                font-size: 14px;
                color: white;
                text-align: center;
                text-transform: uppercase;
            }
        }

    }

    .promo-list {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap:wrap;

        padding: 10px;
        box-sizing: border-box;
        .promo-item {
            width: 260px;
            height: 400px;
            padding:10px;
            box-sizing: border-box;

            .wrapper {
                background-color: yellow;
                box-sizing: border-box;
                padding: 30px;
                text-align: center;
                font-weight: 400;
                color: #2c3e50;

                position: relative;

                background-position: center center;
                background-size: auto;
                background-repeat: no-repeat;

                height: 100%;
                width: 100%;
                border-radius: 5px;

                .deadline {
                    padding: 20px;
                    z-index: 12;
                    transition: 0.3s;
                    text-transform: uppercase;
                    height: 200px;
                    box-sizing: border-box;
                    display: flex;

                    align-items: center;

                    width: 100%;
                    justify-content: center;
                    position: relative;
                    margin-top: -60px;
                    color: #393939;
                    opacity: 1;
                    text-shadow: none;
                    font-weight: 700;
                    transform: scale(0.7);

                    .flip-clock {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;
                        width: 100%;
                        box-sizing: border-box;
                        .flip-card {
                            font-size: 1.75rem !important;
                        }

                        .flip-clock__slot {
                            font-size: 12px !important;
                        }
                    }

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

                h1 {
                    font-weight: 700;
                    color: #2c3e50;
                    line-height: 150%;
                }
                h6 {
                    font-weight: 100;
                    color: #2c3e50;
                    font-style: italic;
                    line-height: 150%;
                }

                .prizes {
                    width: 100%;
                    min-height: 100px;
                    padding: 10px 0px;
                    box-sizing: border-box;
                    text-transform: uppercase;
                    font-weight: 900;
                    font-size: 12px;
                    line-height: 150%;

                    li {
                        width: 100%;

                    }
                }

            }
        }
    }

</style>