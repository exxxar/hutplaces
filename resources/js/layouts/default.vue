<template>
    <div>
        <header id="pageHeader">
            <div class="center">
                <div class="logo-wrapper">
                    <a href="/"><img class="logo" src="/img/logo.jpg" alt=""></a>
                </div>
                <button @click="show('payment')" class="btn btn-yellow btn-mobile">{{$lang.messages.recharge}}</button>
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
        <footer id="pageFooter">

        </footer>
        <notifications group="main"/>
        <modal name="report" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('report')" class="close"></a>
                <report></report>
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
        <modal name="help" height="auto">
            <a href="#" @click="hide('help')" class="close"></a>
            <help></help>
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
    import Scroll from 'vue-custom-scrollbar'

    export default {
        name: 'defaultLayout',
        data() {
            return {
                authenticated: auth.check(),
                user: auth.user,
                settings: {
                    maxScrollbarLength: 60
                }
            }
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
        mounted: function () {
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
                if (window.auth.user.id == data.userId)
                    api.call('get', '/get-user')
                        .then(({resposne}) => {
                            this.user = resposne;
                        });
            });

            if (this.$route.query.token) {
                auth.retriveUser(this.$route.query.token);
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

            Event.$on('userLoggedIn', () => {
                this.authenticated = true;
                this.user = auth.user;

                this.$notify({
                    group: 'main',
                    type: 'success',
                    title: 'Вход в систему',
                    text: `Пользователь ${this.user.name} успешно вошел в систему!`
                })

            });

            Event.$on('updateUserProfile', () => {

                axios
                    .get('/get-user').then(response => {
                    this.user = response.data;
                });


            });

            Event.$on('userLoggedOut', () => {
                this.authenticated = false;
                this.user = null;
            });
        },

        components: {
            Payment, Help, HowToStart, History, FAQ, Promo, Report, Login, Registration, Scroll, AsideMenu, MainMenu
        }
    }
</script>

<style lang="scss">
    @import '~/reset.scss';
    @import '~/main.scss';
</style>
