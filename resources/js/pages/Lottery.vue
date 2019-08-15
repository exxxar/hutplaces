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
                    <div class="random" @click="pickRandom()" :disabled="randomDisabled">
                        <div class="line" :style="cssProps"></div>
                        <div class="text" >Случайное место</div>
                    </div>
                    <button class="buy" @click="pickCard()">Купить сразу</button>
                </div>
            </div>
        </div>
        <vue-custom-scrollbar class="right-side" id="right-side">
            <ul class="lottery">
                <li class="slot" v-for="(p, index) in prepareSlots()" :id="`slot-${index}`">
                    <div v-if="typeof(p) === 'object'">
                        <img @click="clickUserSlot(p,index)" :src="getAvatar(p.avatar)" alt="">
                    </div>
                    <div v-else><p @click="pickSlot(index)" class="number">{{index+1}}</p></div>

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
            <card-info :game="game"></card-info>
        </modal>

        <modal name="win" height="auto">
            <a href="#" @click="hideModal('win')" class="close"></a>
            <div class="modal-body">
                <div class="winner" v-if="winner!=null"><img :src="winner.avatar" alt=""></div>
            </div>
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
            'game.occupied_places':function (newVal, oldVal) {
              if (this.game.occupied_places==this.game.places) {
                  this.randomDisabled = true;
              }
              else{
                  this.randomDisabled = false;
              }


            }
        },
        mounted() {
            this.loadGame();
            Event.$on("updatePlaces",()=>{
                this.updatePlaces();
            });

            Event.$on("startRaffle",(data)=>{
                this.winner = data.winner;
                var lottery = data.lottery;
                var time = 9000;
                this.startAnim(lottery.winner_id,time);
                setTimeout(()=>this.showModal('win'),time+1000);
            });
        },
        data() {
            return {
                winner: null,
                randomDisabled:false,
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
        activated() {
            this.loadGame();
        },
        deactivated(){
            document.querySelectorAll(".scrollTop")[0].click();
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
                        this.game.occupied_places = response.data.occupied_places;
                    });
            },
            loadGame() {
                this.$loading(true)
                axios
                    .get(`/lottery/show/${this.gameId}`)
                    .then(response => {
                        if (response.data.status == 404) {
                            this.$router.push({name: 'Games'})
                            this.$loading(true)
                            return;
                        }
                        this.game = response.data.game;

                        if(this.game.winner_id!=null) {
                            axios
                                .get(`/lottery/winner/${this.gameId}`)
                                .then(response => {
                                    this.winner = response.data.winner;
                                    this.showModal('win');
                                });
                        }

                        setTimeout(() => this.$loading(false), 2000);
                    });
            },
            startAnim(stopNumber,time) {
               document.querySelectorAll(".lottery")[0]
                    .classList.add("lottery-animation");
               setTimeout(()=>{
                   document.querySelectorAll(`.slot:nth-of-type(${stopNumber})`)[0]
                       .classList.add("win-slot");
                   this.message('ПОБЕДА!', `Победил игрок, занявший ${stopNumber} слот!`, "error")
                },9000);
                setTimeout(()=>{
                    document.querySelectorAll(".lottery")[0]
                        .classList.remove("lottery-animation");
                },12000);

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
            pickCard(){
                this.message('Покупка карточки', `С Вашего счета будет списана полная стоимсть карточки!`, "error")
                axios
                    .post('/lottery/buy', {
                        id: this.gameId
                    }).then(response => {
                    Event.$emit("updateUserProfile");
                    this.message('Покупка карточки', `Спасибо за покупку карточки! Купленная карточка находится в вашем личном кабинете`, "error")
                });
            },
            pickRandom(place) {
                if (!this.randomDisabled) {
                    this.randomDisabled = true;
                    axios
                        .post('/lottery/pick/random', {
                            id: this.gameId
                        }).then(response => {
                        if (response.data.status != 200) {
                            this.message('Участие в рандоме', `${response.data.message}`, "error")
                            return;
                        }
                        Event.$emit("updateUserProfile");
                        this.message('Участие в рандоме', `${response.data.message} ${response.data.place}`, "error")

                        this.randomDisabled=false;
                    });

                }
                else {
                    this.message('Участие в рандоме', `Все места уже заняты`, "error")
                }



            },
            pickSlot(place) {
                var item = document.getElementById(`slot-${place}`);
                if (item.getAttribute("disabled")==null) {
                   item.setAttribute("disabled","");
                    axios
                        .post('/lottery/pick/', {
                            id: this.gameId,
                            place_number: place
                        })
                        .then(response => {
                            item.removeAttribute("disabled");

                            if (response.data.status != 200) {
                                this.message('Участие в рандоме', `${response.data.message}`, "error")
                                return;
                            }
                            this.message('Участие в рандоме', `${response.data.message} ${response.data.place}`, "error")
                            Event.$emit("updateUserProfile");

                        });
                }
            },
            clickUserSlot(slot,index) {
                this.startAnim(index+1);
                setTimeout(()=>this.showModal('win'),10000);
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
