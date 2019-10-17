<template>
    <div>
        <header id="pageHeader">
            <div class="center">
                <div class="logo-wrapper">
                    <a href="/"><img class="logo" src="/img/logo.jpg" alt=""></a>
                </div>
                <button @click="show('payment')" class="btn btn-yellow btn-mobile">{{$lang.menu.recharge}}</button>
                <nav @click="showMainMenu()">
                    <main-menu v-on:modal="show($event)"
                               :authenticated="authenticated"
                               :user="user">
                    </main-menu>
                </nav>
            </div>
        </header>
        <scroll id="pageContent" :settings="settings">
            <div class="center">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </scroll>
        <aside>
            <nav @click="showAsideMenu()">
                <aside-menu v-on:modal="show($event)"></aside-menu>
            </nav>
        </aside>
        <footer></footer>

        <div class="lang">
            <ul>
                <li @click="lang('ru')"><img src="/img/ru.jpg" alt=""></li>
                <li @click="lang('en')"><img src="/img/en.jpg" alt=""></li>
                <!--   <li @click="lang('fi')"><img src="/img/fi.jpg" alt=""></li>
                   <li @click="lang('se')"><img src="/img/se.jpg" alt=""></li>
                   <li @click="lang('cz')"><img src="/img/cz.gif" alt=""></li>-->
            </ul>
        </div>
        <chat :show="user!=null"></chat>
        <notifications group="main"/>
        <modal name="report" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('report')" class="close"></a>
                <report v-on:close="hide('report')"></report>
            </scroll>
        </modal>
        <modal name="promo" height="auto">
            <a href="#" @click="hide('promo')" class="close"></a>
            <promo></promo>
        </modal>
        <modal name="payment" height="auto">
            <a href="#" @click="hide('payment')" class="close"></a>
            <payment v-on:self-hide="hide('payment')"></payment>
        </modal>
        <modal name="howtostart" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('howtostart')" class="close"></a>
                <how-to-start></how-to-start>
            </scroll>
        </modal>
        <modal name="history" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('history')" class="close"></a>
                <history v-on:self-hide="hide('history')"></history>
            </scroll>
        </modal>
        <modal name="help" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('help')" class="close"></a>
                <help v-on:close="hide('help')"></help>
            </scroll>
        </modal>
        <modal name="faq" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('faq')" class="close"></a>
                <f-a-q></f-a-q>
            </scroll>
        </modal>
        <modal name="login" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('login')" class="close"></a>
                <login></login>
            </scroll>
        </modal>
        <modal name="registration" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('registration')" class="close"></a>
                <registration></registration>
            </scroll>
        </modal>
        <modal name="rules" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('rules')" class="close"></a>
                <rules></rules>
            </scroll>
        </modal>
        <modal name="supplier" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('supplier')" class="close"></a>
                <partner v-on:close="hide('supplier')"></partner>
            </scroll>
        </modal>
        <modal name="about" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('about')" class="close"></a>
                <about></about>
            </scroll>
        </modal>
        <modal name="aside-menu" :adaptive="true" width="100%" height="100%">
            <a href="#" @click="hide('aside-menu')" class="close"></a>
            <div class="modal-body aside-menu-modal">
                <nav>
                    <aside-menu v-on:modal="show($event)"
                                v-on:self-hide="hide('aside-menu')">
                    </aside-menu>
                </nav>
            </div>
        </modal>
        <modal name="main-menu" :adaptive="true" width="100%" height="100%">

            <a href="#" @click="hide('main-menu')" class="close"></a>
            <div class="modal-body main-menu-modal">
                <nav>
                    <main-menu v-on:modal="show($event)"
                               :authenticated="authenticated"
                               :user="user"
                               :alwaysShow="true"
                               v-on:self-hide="hide('main-menu')">
                    </main-menu>
                </nav>
            </div>

        </modal>
    </div>

</template>

<script>
    import Rules from '@/components/modals/Rules.vue'
    import About from '@/components/modals/About.vue'
    import Partner from '@/components/modals/Partner.vue'
    import Payment from '@/components/modals/Payment.vue'
    import Help from '@/components/modals/Help.vue'
    import History from '@/components/modals/History.vue'
    import HowToStart from '@/components/modals/Howtostart.vue'
    import FAQ from '@/components/modals/FAQ.vue'
    import Promo from '@/components/modals/Promo.vue'
    import Report from '@/components/modals/Report.vue'
    import Login from '@/components/modals/Login.vue'
    import Registration from '@/components/modals/Registration.vue'
    import AsideMenu from '@/components/AsideMenu.vue'
    import MainMenu from '@/components/MainMenu.vue'
    import Chat from '@/components/Chat.vue'

    import Scroll from 'vue-custom-scrollbar'


    export default {
        name: 'defaultLayout',
        data() {
            return {
                authenticated: this.check,
                user: this.getUser,
                settings: {
                    maxScrollbarLength: 60
                }
            }
        },
        methods: {
            lang(lang) {
                this.$lang.setLang(lang)
                localStorage.setItem('lang', lang)
            },
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },

            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            showAsideMenu() {
                if (window.innerWidth > 600)
                    return;
                this.show("aside-menu");
            },
            showMainMenu() {
                if (window.innerWidth > 1050)
                    return;

                this.show("main-menu");
            }
        },
        computed: {
            check() {
                console.log("check", this.$store.getters.CHECK)
                return this.$store.getters.CHECK;
            },
            getUser() {
                return this.$store.getters.USER;
            },
        },
        mounted: function () {

            this.$store.dispatch("loadLifetime")
            this.$store.dispatch("loadGames")
            this.$store.dispatch("loadDrafts")

            if (!localStorage.getItem('lang'))
                this.lang('ru');
            else
                this.lang(localStorage.getItem('lang'));

            if (this.check) {
                this.$store.dispatch('getCurrentUser').then(() => {
                    this.authenticated = this.check
                    this.user = this.getUser
                }).catch((reason) => {
                    this.message("Авторизация", `Вы не авторизованы!`, 'warn');
                });
            }

            window.addEventListener("resize", function () {
                var containers = document.querySelectorAll('.scroll-area');
                for (var ccc of containers)
                    ccc.scrollTop = 0;
            });

            pusher.subscribe('pick-place-chanel').bind('pick-place-event', (data) => {
                Event.$emit("updatePlaces")
                if (this.user != null)
                    if (data.user.id == this.user.id)
                        return;

                this.message("Лотерея", `${data.user.name} занял место в лотерее ${data.lottery.title}`, 'warn');

            });

            pusher.subscribe('achievement-gain-chanel').bind('achievement-gain-event', (data) => {
                this.message("Получение достижения", `${data.message}`, 'warn');
            });

            pusher.subscribe('raffle-chanel').bind('raffle-event', (data) => {
                Event.$emit("startRaffle", data)
                this.message("Сообщение от администрации", `${data.message}`, 'warn');
            });

            pusher.subscribe('message-chanel').bind('message-event', (data) => {
                this.message(`${data.title}`, `${data.message}`, 'warn');
            });

            pusher.subscribe(`user-update-chanel`).bind('user-update-event', (data) => {
                if (this.user.id == data.userId) {

                    Event.$emit("updateStats");
                    Event.$emit("updateAchievements");
                    Event.$emit("updateTransactions");
                    Event.$emit("updatePromocodes");
                    Event.$emit("updateLotteries");
                    Event.$emit("updateTickets");

                    this.$store.dispatch('getCurrentUser').catch((reason) => {
                        this.message("Авторизация", `Вы не авторизованы!`, 'warn');
                    });

                }
            });

            if (this.$route.query.token) {
                this.$store.dispatch('retriveUser', this.$route.query.token).catch((reason) => {
                    this.message("Авторизация", `Вы не авторизованы!`, 'warn');
                });

                this.$router.replace({query: ''});
            }

            if (this.$route.query.error) {
                var error = "";
                switch (this.$route.query.error) {
                    default:
                    case 409:
                        error = "Данная учетная запись уже зарегестриривана через другую социальную сеть!"
                        break;
                }
                this.$router.replace({query: ''});

                this.$notify({
                    group: 'main',
                    type: 'error',
                    title: 'Вход в систему',
                    text: `Ошибка входа в систему!${error}`
                })
            }

            /*   Event.$on('userLoggedIn', () => {
                   this.authenticated = true;
                   this.user = auth.user;

                   this.$notify({
                       group: 'main',
                       type: 'success',
                       title: 'Вход в систему',
                       text: `Пользователь ${this.user.name} успешно вошел в систему!`
                   })

               });*/

            Event.$on('updateUserProfile', () => {
                this.$store.dispatch('getCurrentUser').then(() => {
                    this.authenticated = this.check
                    this.user = this.getUser
                }).catch((reason) => {
                    this.message("Авторизация", `Вы не авторизованы!`, 'warn');
                });
            });

            Event.$on("userLogout", () => {
                this.authenticated = false
                this.user = null
            });

            /*   Event.$on('userLoggedOut', () => {
                   this.authenticated = false;
                   this.user = null;
               });*/

            Event.$on('message', (m) => {
                this.message(m.title, m.message, m.type)
            });
        },
        components: {
            Chat,
            Payment,
            Help,
            HowToStart,
            History,
            FAQ,
            Promo,
            Report,
            Login,
            Registration,
            Scroll,
            AsideMenu,
            MainMenu,
            Rules,
            Partner,
            About
        }
    }
</script>

<style lang="scss">
    @import '~/reset.scss';
    @import '~/main.scss';

</style>
