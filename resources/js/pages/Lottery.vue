<template>
    <div class="lottery-section" id="lottery-section" v-if="game">

        <div class="left-side">
            <div class="fixed">
                <div class="controls">
                    <div class="mini-btn" v-tooltip.bottom="'Поделиться игрой'" @click="toClipboard()"><img
                            src="/img/cards-share-icon.png" alt=""></div>
                    <div class="mini-btn" v-tooltip.bottom="'Защита выигрыша'" @click="showModal('security')"><img
                            src="/img/cards-security-icon.png" alt=""></div>
                    <div class="mini-btn" v-tooltip.bottom="'Информация по карточке'" @click="showModal('cardinfo')">
                        <img
                                src="/img/cards-info-icon.png" alt=""></div>
                </div>
                <div class="card" v-html="prepareUrl()"></div>
                <!--    <div class="block-info">
                        <div class="console">
                            <img :src="getPlatform()" alt="">
                        </div>
                        <h4>{{card.player_name}}</h4>
                        <p class="year">{{card.year}} год</p>
                        <p class="price"><strong>{{card.price}}</strong> Pucks</p>
                    </div>-->
                <div class="buttons">
                    <div class="random" @click="startAnim()">
                        <div class="line" :style="cssProps"></div>
                        <div class="text" @click="pickRandom()">Случайное место</div>
                    </div>
                    <button class="buy">Купить сразу</button>
                </div>
            </div>
        </div>
        <vue-custom-scrollbar class="right-side" id="right-side">
            <ul class="lotery ">
                <li class="slot" v-for="p in prepareSlots()">
                    <div v-if="typeof(p) === 'object'">
                        <img @click="clickUserSlot(p)" :src="getAvatar(p.avatar)" alt="">
                    </div>
                    <div v-else><p @click="pickSlot(p-1)" class="number">{{p}}</p></div>

                </li>

            </ul>
            <a class="scrollTop" v-scroll-to="{
                 el: '#right-side',
                 container: '#pageContent',
                 duration: 500,
                 easing: 'linear',
                 offset: -200,
                 force: true,
                 cancelable: true,
                 x: false,
                 y: true
     }">Top</a>

        </vue-custom-scrollbar>

        <modal name="security" height="auto">
            <a href="#" @click="hideModal('security')" class="close"></a>
            <security></security>
        </modal>

        <modal name="cardinfo" height="auto">
            <a href="#" @click="hideModal('cardinfo')" class="close"></a>
            <card-info></card-info>
        </modal>

    </div>
</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import CardInfo from '../components/modals/CardInfo'
    import Security from '../components/modals/Security'


    export default {
        props: ['gameId'],
        components: {
            vueCustomScrollbar, CardInfo, Security
        },
        watch: {
            'gameId': function (newVal, oldVal) {
                this.loadGame();
            }
        },
        mounted() {
            this.loadGame();
            Event.$on("updatePlaces",()=>{
                this.updatePlaces();
            });
        },
        data() {
            return {
                settings: {
                    maxScrollbarLength: 60
                },
                game: null
            }
        },
        computed: {
            cssProps() {
                return {
                    '--line-width': (this.game.occupied_places / this.game.places) * 100 + "%",
                }
            },
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
            updatePlaces() {
                axios
                    .get(`/lottery/places/${this.gameId}`)
                    .then(response => {
                        this.game.place_list = response.data.place_list;
                    });
            },
            loadGame() {
                this.$loading(true)
                axios
                    .get(`/lottery/get/${this.gameId}`)
                    .then(response => {
                        if (response.data.status == 404) {
                            this.$router.push({name: 'Games'})
                            this.$loading(true)
                            return;
                        }
                        this.game = response.data.game;
                        setTimeout(() => this.$loading(false), 2000);
                    });
            },

            startAnim() {
                var lotery = document.querySelectorAll(".lotery")[0];
                lotery.classList.add("lottery-animation");
            },
            showModal(name) {
                this.$modal.show(name)
            },
            hideModal(name) {
                this.$modal.hide(name)
            },
            toClipboard() {
                let currentUrl = window.location.host + window.location.pathname;
                this.$copyText(currentUrl);
                this.message('Копирование ссылки', `Ссылка на текущую игру успешно скопирована!`, "error")

            },
            getAvatar(img) {
                return img == '' || img == null || img == undefined ? "/img/noavatar.png" : img;
            },
            getPlatform() {
                switch (this.game.console_type) {
                    default:
                    case 1:
                        return "/img/xbox-icon.png";
                    case 2:
                        return "/img/ps4-icon.png";
                    case 3:
                        return "/img/pc-icon.png";
                }
            },
            pickRandom(place) {
                axios
                    .post('/lottery/pick/random', {
                        id: this.gameId
                    }).then(response => {
                    if (response.data.status != 200) {
                        this.message('Участие в рандоме', `${response.data.message}`, "error")
                        return;
                    }
                    this.message('Участие в рандоме', `${response.data.message} ${response.data.place}`, "error")
                    Event.$emit("updateUserProfile");
                });

            },
            pickSlot(place) {
                axios
                    .post('/lottery/pick/', {
                        id: this.gameId,
                        place_number: place
                    })
                    .then(response => {
                        if (response.data.status != 200) {
                            this.message('Участие в рандоме', `${response.data.message}`, "error")
                            return;
                        }
                        this.message('Участи в рандоме', `${response.data.message} ${response.data.place}`, "error")
                        Event.$emit("updateUserProfile");
                    });
            },
            clickUserSlot() {
                alert("EmptySlot")
            },
            prepareSlots() {
                var tmp = [];
                for (var i = 0; i < this.game.places; i++) {
                    var finde = false;
                    for (var u in this.game.place_list) {
                        if (i == this.game.place_list[u].place_number) {
                            tmp.push(this.game.place_list[u].user);
                            finde = true;
                            break;
                        }
                    }

                    if (!finde) {
                        tmp.push(i + 1)
                    }

                }
                return tmp;
            },
            prepareUrl: function () {
                if (this.game.lot.card != null)
                    return JSON.parse(this.game.lot.card.Card_data).value;
                return '/img/noavatar.png';
            },

        }
    }

</script>

<style lang="scss">
    @import "~/fonts.scss";
    @import "~/lottery.scss";

</style>
