<template>
    <div id="main">
        <header id="pageHeader">
            <div class="center">
                <img class="logo" src="/img/logo.png" alt="">
                <nav>

                    <li @click="showHowToStartModal = true" class="btn">{{$lang.messages.how_to_start}}</li>
                    <li @click="showHistoryModal = true" class="btn">{{$lang.messages.history}}</li>
                    <li @click="showHelpModal = true" class="btn">{{$lang.messages.help}}</li>
                    <li @click="showFAQModal = true" class="btn ">{{$lang.messages.f_a_q}}</li>
                    <li @click="showPaymentModal = true" class="btn btn-yellow">{{$lang.messages.recharge}}</li>
                </nav>

                <div v-if="!$auth.check()" class="auth">
                    <router-link :to="{ name: 'login' }" tag="button" class="login">Login</router-link>
                    <router-link :to="{ name: 'register' }" tag="button" class="register">Register</router-link>
                </div>
                <div v-if="$auth.check()" class="user">
                    <div class="info">
                        <p class="name">{{user.name}}</p>
                        <p class="email">{{user.email}}</p>
                        <p class="pucks"><strong>{{user.pucks}}</strong> Pucks</p>
                    </div>
                    <div class="avatar" @click="openProfileMenu()">
                        <img :src="user.avatar" alt="">
                    </div>
                    <ul class="dropdown" v-show="activeProfile"  @mouseleave="activeProfile = false">
                        <li>


                        <router-link :to="{ name: 'cabinet' }" tag="a">User cabinet</router-link>
                        </li>
                        <li v-if="$auth.check()">
                            <a href="#" @click.prevent="$auth.logout()">Logout</a>
                        </li>

                    </ul>

                </div>
            </div>

        </header>
        <article id="mainArticle">

                <keep-alive>

                    <router-view></router-view>
                </keep-alive>

            <breadcrumbs></breadcrumbs>
        </article>
        <nav id="mainNav">
            <router-link tag="li" class="btn " to="/playzone">{{$lang.messages.playzone}}</router-link>
            <router-link tag="li" class="btn" to="/market">{{$lang.messages.market}}</router-link>
            <li @click="showPromoModal = true" class="btn">{{$lang.messages.promo}}</li>
            <router-link tag="li" class="btn" to="/achievement">{{$lang.messages.achievement}}</router-link>

            <!--
            <router-link tag="li" class="btn" to="/lottery">{{$lang.messages.raffle_cards}}</router-link>
            <router-link tag="li" class="btn" to="/auction">{{$lang.messages.auction}}</router-link>
            <router-link tag="li" class="btn" to="/players_packs">{{$lang.messages.players_packs}}</router-link>
            <router-link tag="li" disabled class="btn" to="/wheel_of_fortune">{{$lang.messages.wheel_of_fortune}}
            </router-link>
            <router-link tag="li" disabled class="btn" to="/promo_code">{{$lang.messages.promocodes}}</router-link>
            <router-link tag="li" disabled class="btn" to="/wager_match">{{$lang.messages.wager_matches}}</router-link>
            <router-link tag="li" disabled class="btn" to="/coins">{{$lang.messages.coins}}</router-link>
            -->
            <nav class="lang">
                <li @click="lang('ru')"><img src="/svg/ru.svg" alt=""></li>
                <li @click="lang('en')"><img src="/svg/en.svg" alt=""></li>
            </nav>
            <div class="partners">
                <a href="">{{$lang.messages.terms_of_use}}</a>
                <a href="">{{$lang.messages.become_a_supplier}}</a>
                <a href="">{{$lang.messages.become_a_partner}}</a>

            </div>
        </nav>


        <footer id="pageFooter">

            <div class="report-btn" @click="showReportModal = true">
                <p>{{$lang.messages.report}}</p>
                <img src="/img/chat-report.png" alt="">
            </div>

        </footer>

        <payment :show.sync="showPaymentModal" v-on:close="closePaymentModal($event)"></payment>
        <help :show.sync="showHelpModal" v-on:close="closeHelpModal($event)"></help>
        <history :show.sync="showHistoryModal" v-on:close="closeHistoryModal($event)"></history>
        <how-to-start :show.sync="showHowToStartModal" v-on:close="closeHowToStartModal($event)"></how-to-start>
        <f-a-q :show.sync="showFAQModal" v-on:close="closeFAQModal($event)"></f-a-q>
        <promo :show.sync="showPromoModal" v-on:close="closePromoModal($event)"></promo>
        <report :show.sync="showReportModal" v-on:close="closeReportModal($event)"></report>

    </div>
</template>

<script>

    import Payment from '../components/modals/Payment.vue';
    import Help from '../components/modals/Help.vue';
    import History from '../components/modals/History.vue';
    import HowToStart from '../components/modals/Howtostart.vue';
    import FAQ from '../components/modals/FAQ.vue';
    import Promo from '../components/modals/Promo.vue';
    import Report from '../components/modals/Report.vue';

    import Breadcrumbs from '../components/Breadcrumbs.vue'

    export default {

        data() {
            return {
                activeProfile:false,
                showPaymentModal: false,
                showHelpModal: false,
                showHistoryModal: false,
                showHowToStartModal: false,
                showFAQModal: false,
                showPromoModal: false,
                showReportModal: false,
                user: {
                    user_id:1,
                    name:'Aleksander G. Frolov',
                    email:'test.large.email@gmail.com',
                    avatar:'https://pp.userapi.com/c844724/v844724471/1d7e3b/jopJX6wvbYA.jpg',
                    pucks:200000,
                }
            }
        },
        methods: {
            openProfileMenu:function(){
                this.activeProfile = !this.activeProfile;
            },
            lang: function (l) {

                if (l == undefined && !this.$cookies.isKey('lang')) {
                    this.$cookies.set('lang', 'ru');
                    this.$lang.setLang(this.$cookies.get('lang'));
                }

                if (l == undefined && this.$cookies.isKey('lang'))
                    this.$lang.setLang(this.$cookies.get('lang'));

                if (l != undefined) {
                    this.$lang.setLang(l);
                    this.$cookies.set('lang', l);
                }

            },
            closePaymentModal: function (event) {
                this.showPaymentModal = event;
            },
            closeHowToStartModal: function (event) {
                this.showHowToStartModal = event;
            },
            closeHistoryModal: function (event) {
                this.showHistoryModal = event;
            },
            closeFAQModal: function (event) {
                this.showFAQModal = event;
            },
            closeHelpModal: function (event) {
                this.showHelpModal = event;
            },
            closePromoModal: function (event) {
                this.showPromoModal = event;
            },
            closeReportModal: function (event) {
                this.showReportModal = event;
            },


        },
        beforeMount() {
            this.lang()
        },
        components: {
            Payment, Help,HowToStart,History, FAQ,Promo,  Breadcrumbs, Report
        },
    }
</script>

<style scoped="scoped" lang="scss">

    $color_1: #393939;
    $color_2: #ffff00;
    $color_3: #868686;
    $min-width: 1232px;

    #main {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: minmax(auto, auto);
        grid-template-areas:
                "hd hd hd hd hd   hd   hd   hd   hd   hd hd hd"
                "main main main main main main main main main main main main"
                "ft ft ft ft ft   ft   ft   ft   ft   ft ft ft";
        height: 100vh;
        width: $min-width;
        padding: 100px 0;
        margin: 0 auto;

    }

    header, footer, article, nav, div {
        padding: 20px;
        box-sizing: border-box;

        //border:1px gold solid;

    }

    #pageHeader {
        background: $color_1;
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 0;
        position:fixed;
        top:0;
        left:0;
        width:100%;
        z-index: 1000;
        min-width:$min-width;
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.65);
        .center {
            width: $min-width;
            height: 100%;
            display: grid;
            grid-template-columns: 118px 700px auto;
            align-items: center;
            padding: 0;
            .logo {
                width:120px;
                height:120px;
            }
            nav {
                display: grid;
                column-gap: 10px;
                grid-template-columns: auto auto auto auto auto;
                li.btn {
                    list-style: none;
                    padding: 15px 10px;
                    background: #393939;
                    font-weight: 800;
                    text-align: center;
                    font-size: 18px;
                    color: white;
                    box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;
                    cursor: pointer;
                    font-family: 'Open Sans', sans-serif;
                    transition: 1s;

                    &:hover {
                        transition: 1s;
                        box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px yellow inset;
                    }

                }

                li.btn-yellow {
                    background: yellow;
                    color: #393939;
                    box-shadow: 0px 2px 2px 1px black;
                }
            }
        }

        .auth {
            display: flex;
            justify-content: space-around;
            align-items: center;
            button {
                width: 176px;
                font-size: 18px;
                padding: 15px 10px;
                color: white;
                font-weight: 800;
                box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;
                &.login {
                    background-color: #03A9F4;
                }

                &.register {
                    background-color: #8BC34A;                }
            }
        }

        .user {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 350px;
            height: 120px;
            padding: 0;
            position: relative;
            .info {
                width: 260px;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-end;
                p.name {
                    font-size: 18px;
                    margin: 0;
                    text-align: right;
                    color: white;
                    padding:0;
                }
                p.email {
                    color:lightgray;
                    text-align: right;
                    margin:0;
                }
                p.pucks {
                    color:white;
                    text-align: right;
                    margin:0;
                    strong {
                        font-size: 24px;
                        color: yellow;
                    }
                }
            }

            .avatar {
                width: 90px;
                height: 90px;
                padding: 5px;
                box-sizing: border-box;
                border: 3px yellow solid;
                position:relative;
                &:after {
                    content: '';
                    width: 100%;
                    height: 16px;
                    position: absolute;
                    bottom: -19px;
                    left: 0;
                    background: url('/img/down-arrow.png') center center no-repeat;
                }
                img {
                    width: 100%;
                    height: 100%;
                }


            }


            .dropdown {
                right: 0;
                position: absolute;
                bottom: -81px;
                width: 200px;
                padding: 0;
                display: block;
                li {
                    padding: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #393939;

                    &:hover {
                        background: yellow;
                        transition: .5s;
                        a {
                            color:#393939;
                        }
                    }
                    a {
                        color: white;
                        font-weight: 800;
                        font-size: 15px;
                        text-decoration: none;
                        display: block;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                    }
                }
            }
        }
    }

    #pageFooter {
        grid-area: ft;
        .report-btn{
            width: 205px;
            height: 80px;
            background-color: #660000;
            border-radius: 80px;
            box-shadow: 2px 2px 2px 2px black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            bottom: 50px;
            right: 50px;
            cursor:pointer;
            p {
                color: white;
                display: inline-block;
                width: 95px;
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 800;
                text-align: center;
                padding-top: 15px;
            }
            img {
                display: inline-block;
            }
        }
    }



    #mainArticle {
        grid-area: main;
        padding: 0;
    }

    #mainNav {
        display: grid;
        grid-gap: 5px;
        position: fixed;
        top: 200px;
        left: -20px;
        transition: .5s;
        -webkit-border-radius: 0px 5px 5px 0px;
        -moz-border-radius: 0px 5px 5px 0px;
        border-radius: 0px 5px 5px 0px;
        @media (max-width: 1500px) {
            & {
                left:-190px;
                transition: .5s;
            }

            &:hover {
                left:-20px;
                transition: .5s;
            }
        }
        .btn {
            list-style: none;
            width: 212px;
            height: 67px;
            padding: 25px 25px;
            background: #393939;
            margin: 0;
            font-size: 14px;
            text-align: center;
            text-transform: uppercase;
            font-weight: 800;
            color: white;
            border-radius: 0px 5px 5px 0px;
            box-shadow: 0px 2px 2px 1px black;
            transition: 1s;
            cursor: pointer;

            &:hover {
                background: $color_2;
                color: $color_1;
                transition: 1s;

            }
        }

        .btn[disabled] {
            color: $color_3;
        }
        .active {
            background: $color_2;
            color: $color_1;
            transition: 1s;
        }

        .partners {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 50px;
            width:212px;
            a {
                text-decoration: underline;
                text-decoration-style: dashed;
                text-decoration-color: #1b1e21;
                color: #a7a5a5;
                text-align: center;
                font-size: 12px;
                transition:.5s;
                &:hover {
                    color:lighten(#a7a5a5,20%);
                    transition:.5s;
                }
            }
        }
        .lang {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 50px;

            li {
                list-style: none;
                cursor: pointer;
                img {
                    width: 40px;
                    height: 20px;
                    transition: .5s;
                    &:hover {
                        transition: .5s;
                        transform: scale(1.1, 1.1);
                    }
                }
            }
        }
    }

    #siteAds {
        grid-area: ads;
    }

    .content {
        width: 1223px;
        min-height: 50px;
    }

</style>