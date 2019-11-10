<template>
    <div>

        <header>
            <div class="center">
                <div class="logo-wrapper">
                    <div class="logo">
                        <a href="/index"> <img v-lazy="'/img/logo.png'" alt=""></a>
                    </div>
                </div>
                <p>{{$lang.start.title}} <i class="fas fa-arrow-right"></i></p>
                <ul class="social">
                    <li><a href="/social-auth/vkontakte"><i class="fab fa-vk"></i></a></li>
                    <li><a href="/social-auth/facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
                </ul>
            </div>
        </header>

        <section class="section-1">
            <div class="center">
                <h1 v-html="$lang.start.h1"></h1>
                <h3 v-html="$lang.start.sub"></h3>
                <nav>
                    <ul>
                        <li>
                            <h5 v-html="$lang.start.h5_1"></h5>
                            <p v-html="$lang.start.p_1"></p>
                        </li>
                        <li>
                            <h5 v-html="$lang.start.h5_2"></h5>
                            <p v-html="$lang.start.p_2"></p>
                        </li>
                        <li>
                            <h5 v-html="$lang.start.h5_3"></h5>
                            <p v-html="$lang.start.p_3"></p>
                        </li>
                        <li>
                            <h5 v-html="$lang.start.h5_4"></h5>
                            <p v-html="$lang.start.p_4"></p>
                        </li>
                        <li>
                            <h5 v-html="$lang.start.h5_5"></h5>
                            <p v-html="$lang.start.p_5"></p>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>


        <section class="section-2">
            <div class="center">
                <div class="left"><img v-lazy="'/img/cards-block.png'" alt=""></div>
                <div class="right">
                    <p v-html="$lang.start.s2_p4"></p>
                    <flip-countdown :deadline="prepareDeadline()"></flip-countdown>
                    <ul class="social">
                        <li><a href="/social-auth/vkontakte"><i class="fab fa-vk"></i></a></li>
                        <li><a href="/social-auth/facebook"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section-6">
            <div class="center">
                <h1 v-html="$lang.start.s6_h1"></h1>
                <div class="bonus">
                    <img v-lazy="'/img/ach-3.png'" v-tooltip.bottom="$lang.start.s6_tooltip_1"
                         alt="">
                    <img v-lazy="'/img/ach-2.png'" v-tooltip.bottom="$lang.start.s6_tooltip_2" alt="">
                    <img v-lazy="'/img/ach-1.png'" v-tooltip.bottom="$lang.start.s6_tooltip_3"
                         alt="">

                </div>
                <div class="arrow">
                    <img src="/img/arrow-2.png" alt="">
                </div>

                <h2 v-html="$lang.start.s6_h2"></h2>
            </div>
        </section>

        <section class="section-8">
            <div class="center">
                <div class="logo"><i class="fas fa-gifts"></i></div>
                <h1 v-html="$lang.start.s8_h1"></h1>
                <div class="row">
                    <div class="input-group">
                        <label for="promo" v-html="$lang.start.promo_1"></label><input id="promo" MAXLENGTH="25"
                                                                                       :placeholder="$lang.start.promo_2"
                                                                                       type="text">
                        <button class="btn btn-yellow" @click="activatePromo()" v-html="$lang.start.promo_btn"></button>
                    </div>
                    <div class="input-group">
                        <p v-html="$lang.start.bonus_1"></p>
                    </div>

                    <div class="input-group">
                        <button class="btn btn-yellow" @click="show('payment')" v-html="$lang.start.bonus_2"></button>
                    </div>
                </div>
                <div class="row">
                    <a href="#rules" @click="show('rules')" v-html="$lang.start.rules"></a>
                </div>

                <ul class="social">
                    <li><a href="/vklogin"><i class="fab fa-vk"></i></a></li>
                    <li><a href="/fblogin"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="/twlogin"><i class="fab fa-telegram-plane"></i></a></li>
                </ul>

            </div>
        </section>

        <section class="section-7">
            <div class="center">
                <h1 class="top" v-html="$lang.start.s7_h1"></h1>
                <ul>
                    <li @click="activatePlayzone()">
                        <p v-html="$lang.start.s7_p1"></p>
                    </li>
                    <li @click="activateMarket()">
                        <p v-html="$lang.start.s7_p2"></p>
                    </li>
                </ul>
                <h1 class="bottom" v-html="$lang.start.s7_h1_2"></h1>
            </div>
        </section>

        <section class="section-3">
            <div class="center">
                <h1 v-html="$lang.start.s3_h1"></h1>
                <ul>
                    <li>
                        <h4 v-html="$lang.start.s3_h4_1"></h4>
                        <div class="circle">
                            <p>{{cardsCounter}}</p>
                        </div>
                    </li>

                    <li>
                        <h4 v-html="$lang.start.s3_h4_2"></h4>
                        <div class="circle">
                            <p>{{packsCounter}}</p>
                        </div>
                    </li>

                    <li>
                        <h4 v-html="$lang.start.s3_h4_3"></h4>
                        <div class="circle large">
                            <p>{{safeCounter}}<</p>
                            <p v-html="$lang.start.s3_money"></p>
                        </div>
                    </li>

                    <li>
                        <h4 v-html="$lang.start.s3_h4_4"></h4>
                        <div class="circle">
                            <p>{{randomsCounter}}<</p>
                        </div>
                    </li>

                    <li>
                        <h4 v-html="$lang.start.s3_h4_5"></h4>
                        <div class="circle">
                            <p>{{matchesCounter}}<</p>
                        </div>
                    </li>

                </ul>

            </div>
        </section>


        <section class="section-4">
            <div class="center">
                <h1 v-html="$lang.start.s4_h1"></h1>
                <ul>
                    <li><a href=""><img v-lazy="'/img/WebMoney_logo_blue.svg'" alt=""></a></li>
                    <li><a href=""><img v-lazy="'/img/1280px-Qiwi_logo.svg.png'" alt=""></a></li>
                    <li><a href=""><img v-lazy="'/img/MasterCard_Logo.svg.png'" alt=""></a></li>
                    <li><a href=""><img v-lazy="'/img/Visa_Inc._logo.svg.png'" alt=""></a></li>
                    <li><a href=""><img v-lazy="'/img/1280px-Логотип_Яндекс.Денег.svg.png'" alt=""></a></li>
                </ul>
            </div>
        </section>
        <section class="section-5">
            <div class="center">
                <div class="slider">
                    <carousel-3d :autoplay="true" :perspective="20" :width="270" :height="370" :display="10"
                                 :space="210">
                        <slide :index="0">
                            <img v-lazy="'/img/cards/1.jpg'" alt="">
                            <div class="shadow"></div>
                        </slide>
                        <slide :index="1">
                            <img v-lazy="'/img/cards/2.jpg'" alt="">
                            <div class="shadow"></div>
                        </slide>
                        <slide :index="2">
                            <img v-lazy="'/img/cards/3.jpg'" alt="">
                            <div class="shadow"></div>
                        </slide>
                        <slide :index="3">
                            <img v-lazy="'/img/cards/4.jpg'" alt="">
                            <div class="shadow"></div>
                        </slide>
                        <slide :index="4">
                            <img v-lazy="'/img/cards/5.jpg'" alt="">
                            <div class="shadow"></div>
                        </slide>
                        <slide :index="5">
                            <img v-lazy="'/img/cards/6.jpg'" alt="">
                            <div class="shadow"></div>
                        </slide>
                        <slide :index="6">
                            <img v-lazy="'/img/cards/7.jpg'" alt="">
                            <div class="shadow"></div>
                        </slide>
                    </carousel-3d>
                </div>

            </div>

            <div class="modal">
                <div class="center">
                    <h1 v-html="$lang.start.modal_h1"></h1>
                    <ul class="social">
                        <li><a href="/vklogin"><i class="fab fa-vk"></i></a></li>
                        <li><a href="/fblogin"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="/twlogin"><i class="fab fa-telegram-plane"></i></a></li>
                    </ul>

                </div>
            </div>

        </section>

        <footer>
            <div class="center">

                <div class="logo">
                    <img src="/img/logo.png" alt="">
                </div>

                <p v-html="$lang.start.footer_p1"></p>

            </div>
        </footer>

        <div class="lang">
            <ul>
                <li @click="lang('ru')"><img src="/img/ru.jpg" alt=""></li>
                <li @click="lang('en')"><img src="/img/en.jpg" alt=""></li>
                <li @click="lang('fi')"><img src="/img/fi.jpg" alt=""></li>
                <li @click="lang('se')"><img src="/img/se.jpg" alt=""></li>
                <li @click="lang('cz')"><img src="/img/cz.gif" alt=""></li>
            </ul>
        </div>
        <notifications group="main"/>

        <modal name="rules" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('rules')" class="close"></a>
                <rules></rules>
            </scroll>
        </modal>

        <modal name="payment" height="auto">
            <a href="#" @click="hide('payment')" class="close"></a>
            <payment v-on:self-hide="hide('payment')"></payment>
        </modal>
    </div>
</template>

<script>

    import Payment from '@/components/modals/Payment.vue'
    import Rules from '@/components/modals/Rules.vue'
    import {Carousel3d, Slide} from 'vue-carousel-3d'
    import Scroll from 'vue-custom-scrollbar'
    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        name: 'Start',
        data() {
            return {
                cardsCounter: 410,
                packsCounter: 111,
                safeCounter: 14580,
                randomsCounter: 92,
                matchesCounter: 120
            }
        },
        methods: {
            prepareDeadline() {
                var date = Date.now();
                var time = [100000,6, 12, 24, 36, 48, 96, 128,256];

                date = date + time[7] * 60 * 60 * 1000;
                return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
            },

            lang(lang) {
                this.$lang.setLang(lang)
                localStorage.setItem('lang', lang)
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            activatePromo() {
                this.message('Скоро будет доступно!')
            },
            activatePlayzone() {
                this.$router.push({path: 'Playzone'})
            },
            activateMarket() {
                this.$router.push({path: 'Market'})
            },
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: 'HUT PLACE',
                    text: message
                })
            },
            recount: function () {
                setInterval(() => {
                    this.cardsCounter += 1
                }, Math.floor(Math.random() * ( Math.floor(30000) - Math.ceil(1000))) + Math.ceil(1000))

                setInterval(() => {
                    this.packsCounter += 1
                }, Math.floor(Math.random() * ( Math.floor(30000) - Math.ceil(1000))) + Math.ceil(1000))

                setInterval(() => {
                    this.safeCounter += 100
                }, Math.floor(Math.random() * ( Math.floor(30000) - Math.ceil(1000))) + Math.ceil(1000))

                setInterval(() => {
                    this.randomsCounter += 1
                }, Math.floor(Math.random() * ( Math.floor(30000) - Math.ceil(1000))) + Math.ceil(1000))

                setInterval(() => {
                    this.matchesCounter += 1
                }, Math.floor(Math.random() * ( Math.floor(30000) - Math.ceil(1000))) + Math.ceil(1000))
            }
        },
        mounted: function () {
            this.recount()
            var savedLang = localStorage.getItem('lang')
            if (savedLang != null) {
                this.lang(savedLang)
            } else {
                localStorage.setItem('lang', 'ru')
                this.lang('ru')
            }
        },
        components: {
            Carousel3d,
            Slide,
            Scroll,
            Payment,
            FlipCountdown,
            Rules
        }
    }
</script>

<style lang="scss">
    @import "~/start.scss";

    .lang {
        width: 30px;
        padding: 5px;
        position: fixed;
        z-index: 100;
        top: 200px;
        right: 0;

        li {
            width: 30px;
            height: 20px;
            margin-bottom: 5px;
            box-shadow: 0 0 2px 0 #000;
            transition: .3s;
            cursor: pointer;

            &:hover {
                transition: .3s;
                transform: translateX(-10px);
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    h1 {
        font-weight: 100;
        font-size: 36px;
        text-align: center;
        color: white;
        text-transform: uppercase;
    }

    .v--modal-overlay {
        background: rgba(0, 0, 0, 0.999) !important;
    }

    .vue-notification {
        padding: 20px;
        margin: 0 5px 5px;
        z-index: 1200;
        font-size: 14px;

        color: #ffffff;
        background: #44A4FC;
        border-left: 5px solid #187FE7;
        box-shadow: 0px 0px 5px 0px black;

        &.warn {
            background: #393939 !important;
            border-left-color: yellow !important;
            color: yellow !important;

        }

        &.error {
            background: yellow;
            color: #393939 !important;
            border-left-color: #393939 !important;

        }

        &.success {
            background: rgb(160, 205, 0);
            border-left-color: #42A85F;
        }
    }

</style>
