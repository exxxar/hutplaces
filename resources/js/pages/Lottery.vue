<template>
    <div class="lottery-section" id="lottery-section" v-if="game">
        <div class="left-side">
            <div class="fixed">
                <div class="controls">
                    <div class="mini-btn" v-tooltip.bottom="$lang.lottery.share_game" @click="toClipboard()">
                        <img src="/img/cards-share-icon.png" alt=""></div>
                    <div class="mini-btn" v-tooltip.bottom="$lang.lottery.win_protection"
                         @click="show('security')">
                        <img src="/img/cards-security-icon.png" alt=""></div>
                    <div class="mini-btn" v-tooltip.bottom="$lang.lottery.card_information"
                         @click="show('cardinfo')">
                        <img src="/img/cards-info-icon.png" alt=""></div>
                </div>
                <div class="card">
                    <game-item :game="game"
                               :controls="false">

                    </game-item>
                </div>


                <div class="buttons" v-if="!user">
                    <router-link to="/signin" tag="button" class="btn btn-yellow rounded-left"><i
                            class="fas fa-sign-in-alt"></i>
                    </router-link>
                    <router-link to="/signup" tag="button" class="btn btn-orange rounded-right"><i
                            class="fas fa-user-plus"></i>
                    </router-link>
                </div>

                <div class="buttons" v-if="user">
                    <button class="random" @click="pickRandom()" :disabled="randomDisabled">
                        <div class="line" :style="cssProps"></div>
                        <div class="text">Случайное место</div>
                    </button>
                    <button class="buy" @click="show('confirm')">Купить сразу</button>
                </div>
            </div>
        </div>
        <scroll class="right-side" id="right-side">
            <ul class="lottery">
                <li class="slot" v-for="(p, index) in prepareSlots()" :id="`slot-${index}`">
                    <div v-if="typeof(p) === 'object'">
                        <img @click="clickUserSlot(p,index)" :src="getAvatar(p.avatar)" alt="">
                    </div>
                    <div v-else><p @click="pickSlot(index)" class="number">{{index + 1}}</p></div>

                </li>

            </ul>

        </scroll>

        <modal name="security" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('security')" class="close"></a>
                <security
                        :random="game.random==null?'':game.random"
                        :signature="game.signature==null?'':game.signature"
                        :winner="game.winner"
                        :winner_place="game.winner_place">
                </security>

            </scroll>
        </modal>

        <modal name="cardinfo" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('cardinfo')" class="close"></a>
                <card-info :game="game"></card-info>
            </scroll>

        </modal>

        <modal name="winner" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('winner')" class="close"></a>
                <div class="modal-body lottery-winner-modal">
                    <h1>Поздравляем победителя!</h1>
                    <div class="winner" v-if="game.winner!=null"><img :src="`/img/avatars/${game.winner.avatar}`"
                                                                      alt=""></div>
                </div>
            </scroll>

        </modal>


        <modal name="confirm" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('confirm')" class="close"></a>
                <confirm :buttons="{ok:'Подтвердить',cancel:'Отменить'}"
                         :title="'Подтверждение действия'"
                         :description="'Покупка карточки'"
                         v-on:close="hide('confirm')"
                         v-on:result="pickCard($event)">
                </confirm>
            </scroll>

        </modal>

    </div>
</template>

<script>


    import Confirm from '@/components/modals/ConfirmDialog.vue'

    import CardInfo from '../components/modals/CardInfo'
    import Security from '../components/modals/Security'

    import FlipCountdown from 'vue2-flip-countdown'
    import Card from '@/components/admin/CardHUTDB.vue'
    import GameItem from '@/components/GameItem.vue'

    import Scroll from 'vue-custom-scrollbar'
    import UserCardPanel from '@/components/admin/LotteryCardPanel.vue'

    import {Tabs as CardTabs, Tab as CardSection} from 'vue-simple-tabs';

    export default {
        props: ['gameId'],

        data() {
            return {
                randomDisabled: false,
                settings: {
                    maxScrollbarLength: 60
                },
                user: null,
                game: null
            }
        },
        computed: {
            cssProps() {
                return {
                    '--line-width': (this.game.occupied_places / this.game.places) * 100 + "%",
                }
            },
            loadCurrentUser() {
                return this.$store.getters.USER;
            }
        },
        watch: {
            '$route': 'fetchData',
            'game.occupied_places': function (newVal, oldVal) {
                this.randomDisabled = this.game.occupied_places == this.game.places;
            },
            loadCurrentUser(newValue, oldValue) {
                this.user = newValue
            },
        },
        mounted() {
            Event.$on("updatePlaces", () => {
                this.updatePlaces();
            });

            Event.$on("startRaffle", (data) => {
                var lottery = data.lottery;
                var time = 9000;
                this.startAnim(lottery.winner_place, time);
                setTimeout(() => {
                    this.show('winner')
                    this.loadGame();
                }, time + 2000);

            });
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loadGame();
                this.$store.dispatch('getCurrentUser')
            },
            prepareDeadline(game) {
                var date = Date.parse(game.created_at);
                var time = [6, 12, 24, 36, 48, 96, 128, 10000];

                date = date + time[game.lifetime] * 60 * 60 * 1000;
                return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
            },
            lineWidth: function (c1, c2) {
                return {
                    '--line-width': ((c1 / c2) * 100) + '%'
                }
            },
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
                        this.game.occupied_places = response.data.occupied_places;
                    });
            },
            loadGame() {
                this.$loading(true)
                axios
                    .get(`/lottery/show/${this.gameId}`)
                    .then(response => {
                        this.game = response.data.game;
                        this.$loading(false)
                    })
                    .catch(() => {
                        this.$router.push({name: 'Games'})
                    })
            },
            startAnim(stopNumber, time) {
                document.querySelectorAll(".lottery")[0]
                    .classList.add("lottery-animation");
                setTimeout(() => {
                        document.querySelectorAll(`.slot:nth-of-type(${stopNumber})`)[0]
                            .classList.add("win-slot");
                        this.message(this.$lang.messages.lottery_success_title, `${stopNumber} ${this.$lang.messages.lottery_success_2}`, "error")

                    }
                    , 9000);
                setTimeout(() => {
                    document.querySelectorAll(".lottery")[0]
                        .classList.remove("lottery-animation");
                }, 12000);

            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            toClipboard() {
                let currentUrl = window.location.host + window.location.pathname;
                this.$copyText(currentUrl);
                this.message(this.$lang.messages.copy_link, this.$lang.messages.lottery_success_3, "error")
            },
            getAvatar(img) {
                return img == '' || img == null || img == undefined ? "/img/noavatar.png" : `/img/avatars/${img}`;
            },
            pickCard(event) {
                if (!event) {
                    this.message("Рандомы", "Покупка отменена", "error")
                    return
                }

                axios
                    .post('/lottery/buy', {
                        id: this.gameId
                    }).then(response => {
                    Event.$emit("updateUserProfile");
                    this.message(this.$lang.messages.card_purchas, this.$lang.messages.lottery_success_4, "error")
                });
            },
            pickRandom(place) {
                if (!this.randomDisabled) {
                    this.randomDisabled = true;
                    axios
                        .post('/lottery/pick/random', {
                            id: this.gameId
                        }).then(response => {
                        this.randomDisabled = false;
                        if (response.data.status != 200) {
                            this.message(this.$lang.messages.lottery_warning_2, `${response.data.message}`, "error")
                            return;
                        }
                        Event.$emit("updateUserProfile");
                        this.message(this.$lang.messages.lottery_warning_2, `${response.data.message} ${response.data.place}`, "error")


                    });

                }
                else {
                    this.message(this.$lang.messages.lottery_warning_2, this.$lang.messages.lottery_error_1, "error")
                }
            },
            pickSlot(place) {
                if (this.user == null) {
                    this.message("Рандомы", "Авторизируйтесь сперва!", "error")
                    return
                }

                var item = document.getElementById(`slot-${place}`);
                if (item.getAttribute("disabled") == null) {
                    item.setAttribute("disabled", "");

                    axios
                        .post('/lottery/pick', {
                            id: this.gameId,
                            place_number: place
                        })
                        .then(response => {
                            item.removeAttribute("disabled");

                            if (response.data.status != 200) {
                                this.message(this.$lang.messages.lottery_warning_2, `${response.data.message}`, "error")
                                return;
                            }
                            this.message(this.$lang.messages.lottery_warning_2, `${response.data.message} ${response.data.place + 1}`, "error")
                            Event.$emit("updateUserProfile");

                        }).catch(() => {
                        item.removeAttribute("disabled");
                    });
                }
            },
            clickUserSlot(slot, index) {
                // this.startAnim(index + 1);
                //setTimeout(() => this.showModal('win'), 10000);
            },
            prepareSlots() {
                var tmp = [];
                for (var i = 0; i < this.game.places; i++) {
                    var find = false;
                    for (var u in this.game.place_list) {
                        if (i == this.game.place_list[u].place_number) {
                            tmp.push(this.game.place_list[u].user);
                            find = true;
                            break;
                        }
                    }

                    if (!find) {
                        tmp.push(i + 1)
                    }

                }
                return tmp;
            },

        },
        components: {
            CardInfo, Security,
            Scroll, UserCardPanel,
            Card, CardTabs, CardSection, FlipCountdown, GameItem,
            Confirm
        },
    }

</script>

<style lang="scss">
    @import "~/fonts.scss";
    @import "~/lottery.scss";


    .lottery-winner-modal {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
