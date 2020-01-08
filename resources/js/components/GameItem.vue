<template>
    <div class="card-wrapper">
        <div class="lot-item">
            <div class="progress">
                <div class="line" :style="lineWidth(game.occupied_places,game.places)"></div>
                <div class="info">{{game.occupied_places}}/{{game.places}}</div>
            </div>
            <div class="card-info"  v-if="controls"
                 @click="getCardInfo(`card-show-${game.id}`)">i
            </div>

            <div class="console">
                <i v-if="game.console_type==1" class="fab fa-playstation"></i>
                <i v-if="game.console_type==0" class="fab fa-xbox"></i>
            </div>
           <!-- <div class="card-info" v-if="(game.lot_type=='1'||game.lot_type=='0')&&controls"
                 @click="show(`card-show-item-${game.id}`)">i
            </div>-->
            <card-tabs>
                <card-section title="" active="true">
                    <div class="card" v-if="game.lot_type=='2'">
                        <img v-if="game.lot.card==null" v-lazy="'/img/item-element.jpg'" alt="">
                        <img v-else :style="cardStatus()" v-lazy="prepareCardArt(game.lot.card.card_art)" alt="">
                    </div>

                    <div class="item" v-if="game.lot_type=='0'">
                        <img v-if="game.lot.item.image==null" v-lazy="'/img/item-element.jpg'" alt="">
                        <img v-else v-lazy="`/img/cards/${game.lot.item.image}`" alt="">
                    </div>
                    <div class="coins" v-if="game.lot_type=='1'">
                        <img v-if="game.lot.item.image==null" v-lazy="'/img/coins-element.jpg'" alt="">
                        <img v-else v-lazy="`/img/cards/${game.lot.item.image}`" alt="">
                    </div>

                    <div class="sale" :data-sale="`-${game.base_discount}%`" v-if="game.base_discount>0"></div>

                    <div class="price">{{game.base_price }} {{$lang.games.money}}</div>


                    <div class="controlls" v-if="controls">
                        <button class="btn btn-yellow" v-if="game.active==1" @click="lotteryOpen()">Open</button>
                    </div>

                    <div class="deadline" v-if="game.completed!=1&&game.lifetime!=0">
                        <flip-countdown :deadline="prepareDeadline()"></flip-countdown>
                    </div>

                    <div class="win" v-if="game.completed==1">
                        <h1 v-html="$lang.game.completed"></h1>
                    </div>


                </card-section>

                <div v-if="user">
                    <card-section title="" v-if="controls&&user.is_trader">
                        <scroll class="scroll-area-2">
                            <div class="input-group">
                                <label :for="`status-completed-${game.id}`" class="col-form-label"
                                       v-html="$lang.game.completed"></label>
                                <toggle :check="game.completed==1?true:false"
                                        :id="`status-completed-${game.id}`"
                                        v-on:check="setCompleted($event)"
                                        :labelon="$lang.game.yes"
                                        :labeloff="$lang.game.no"
                                        :width="120"></toggle>
                            </div>

                            <div class="input-group">
                                <label :for="`visible-type-${game.id}`" class="col-form-label"
                                       v-html="$lang.game.visible"></label>

                                <toggle :check="game.visible==1?true:false"
                                        :id="`visible-type-${game.id}`"
                                        v-on:check="setVisible($event)"
                                        :labelon="$lang.game.yes"
                                        :labeloff="$lang.game.no"
                                        :width="120"></toggle>
                            </div>

                            <div class="input-group">
                                <label :for="`active-type-${game.id}`" class="col-form-label"
                                       v-html="$lang.game.active"></label>

                                <toggle :check="game.active==1?true:false"
                                        :id="`active-type-${game.id}`"
                                        v-on:check="setActive($event)"
                                        :labelon="$lang.game.yes"
                                        :labeloff="$lang.game.no"
                                        :width="120"></toggle>
                            </div>

                            <div class="input-group">
                                <label :for="`only-one-type-${game.id}`" class="col-form-label"
                                       v-html="$lang.game.is_only_one"></label>

                                <toggle :check="game.is_only_one==1?true:false"
                                        :id="`only-one-type-${game.id}`"
                                        v-on:check="setIsOnlyOne($event)"
                                        :labelon="$lang.game.yes"
                                        :labeloff="$lang.game.no"
                                        :width="120"></toggle>
                            </div>

                            <div class="input-group">
                                <label :for="`console-type-${game.id}`" class="col-form-label"
                                       v-html="'Тип консоли'"></label>

                                <toggle :check="game.console_type==1?true:false"
                                        :id="`console-type-${game.id}`"
                                        v-on:check="setConsoleType($event)"
                                        :labelon="'PS4'"
                                        :labeloff="'XBOX'"
                                        :width="140"></toggle>
                            </div>

                            <div class="input-group">
                                <label for="lifetime" v-html="$lang.game.lifetime"></label>
                                <select id="lifetime" class="form-control" @change="setLifetime($event)"
                                        v-model="selected_lifetime">
                                    <option v-if="lifetime!=null&&lifetime.length>0" v-for="time in lifetime"
                                            :value="time.value">
                                        {{prepareLifetime(time.key)}}
                                    </option>
                                </select>
                            </div>

                            <div class="input-group">
                                <button class="btn btn-yellow" v-html="$lang.game.remove" @click="remove()"></button>
                            </div>

                        </scroll>
                    </card-section>
                </div>

            </card-tabs>

            <modal :name="`card-show-${game.id}`" :adaptive="true" width="100%" height="100%">
                <scroll class="scroll-area">
                    <a href="#" @click="hide(`card-show-${game.id}`)" class="close"></a>
                    <card :card="card_example" v-on:close="hide(`card-show-${game.id}`)"></card>
                </scroll>
            </modal>


            <modal v-if="game.lot_type=='1'||game.lot_type=='0'" :name="`card-show-item-${game.id}`" :adaptive="true"
                   width="100%" height="100%">
                <scroll class="scroll-area">
                    <a href="#" @click="hide(`card-show-item-${game.id}`)" class="close"></a>
                    <div class="modal-body">
                        <h1>{{game.title}}</h1>
                        <p v-if="game.lot.item.description!=null" v-html="game.lot.item.description"></p>
                        <p v-if="game.lot_type=='1'">{{game.lot.item.value}}</p>
                    </div>

                </scroll>
            </modal>
        </div>
    </div>

</template>

<script>
    import FlipCountdown from 'vue2-flip-countdown'
    import Card from '@/components/admin/CardNHLHUT.vue'
    import {Tabs as CardTabs, Tab as CardSection} from 'vue-simple-tabs';
    import Scroll from 'vue-custom-scrollbar'

    import Toggle from '@/components/Toggle.vue'

    export default {
        props: ['game', 'controls', 'user', 'lifetime'],

        data() {
            return {
                card_example:'',
                active: 0 || this.game.active,
                visible: 0 || this.game.visible,
                completed: 0 || this.game.completed,
                is_only_one: 0 || this.game.is_only_one,
                selected_lifetime: this.game.lifetime,
                console_type: this.game.console_type,
            }
        },
        methods: {

            cardStatus(){
                return this.active? {
                    '--blend_mode': 'unset'
                }: {
                    '--blend_mode': 'luminosity'
                };

                //return this.active?var(--blend_mode)
            },
            getCardInfo(modal) {

                if (this.game.lot.card == null)
                    return;


                let html = this.game.lot.card.card_art;
                //<a id="3481" href
                let start = html.indexOf(`<a id="`) + 7;
                let end = html.indexOf(`" href`);
                let id = html.substr(start, end - start);

                this.$loading(true)
                this.request_url = `https://nhlhutbuilder.com/player-stats.php?sb=1&id=${id}`;
                axios.post('search_nhlhut_player', {url: this.request_url})
                    .then(res => {
                        let start = res.data.indexOf(`<div id="player_stats_page" class="container">`);
                        let end = res.data.indexOf(`</body>`);

                        this.card_example = res.data.substr(start, end - start);

                        start = this.card_example.indexOf("<img");
                        end = this.card_example.indexOf("/>") + 2;
                        let img = this.card_example.substr(start, end - start);

                        this.card_example = this.card_example.replace(/src="/gi, `src="https://nhlhutbuilder.com/`)

                        this.$loading(false)
                        this.show(modal)

                    }).catch(err => {
                    this.$loading(false)
                    this.message("Ошибка загрузки карточки", `Ничего не найдено!`, 'error');

                })
            },
            prepareCardArt(cardArt) {

                let start = cardArt.indexOf(`id="`) + 4;
                let end = cardArt.indexOf(`" href`);
                let imgId = cardArt.substr(start, end - start);

                return `https://nhlhutbuilder.com/images/card_art/players/${imgId}.jpg`;
            },
            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
            },
            remove() {
                axios.post('/lottery/remove', {
                    id: this.game.id
                })
                    .then((response) => {
                        this.message(this.$lang.game.success_3)
                        this.$store.dispatch("loadGames")
                        this.$store.dispatch("loadDrafts")

                        document.querySelectorAll(".lot-item ul li:nth-of-type(1)").forEach(function (a) {
                            a.click();
                        });
                    })
                    .catch((error) => {
                        this.message(this.$lang.game.error_2)
                    })
                this.message(this.$lang.game.success_2)
            },
            setLifetime(event) {
                this.selected_lifetime = event.target.value;

                this.save()
            },
            setIsOnlyOne(onlyOne) {
                this.is_only_one = onlyOne
                this.save()
            },
            setConsoleType(consoleType) {
                this.console_type = consoleType
                this.save()
            },
            setCompleted(completed) {
                this.completed = completed
                this.save()
            },
            setVisible(visible) {
                this.visible = visible
                this.save()

            },
            setActive(active) {
                this.active = active
                this.save()
            },
            save() {
                let formData = new FormData()

                formData.append('id', this.game.id)
                formData.append('is_only_one', this.is_only_one ? 1 : 0)
                formData.append('completed', this.completed ? 1 : 0)
                formData.append('visible', this.visible ? 1 : 0)
                formData.append('active', this.active ? 1 : 0)
                formData.append('lifetime', this.selected_lifetime)
                formData.append('console_type', this.console_type? 1 : 0)

                axios.post('/lottery/update', formData)
                    .then((response) => {
                        this.message(this.$lang.game.success_1)
                        this.$store.dispatch("loadGames")
                        this.$store.dispatch("loadDrafts")

                    })
                    .catch((error) => {
                        this.message(this.$lang.game.error_1)
                    })

                this.message(this.$lang.game.success_2)
            },

            lotteryOpen: function () {
                this.$router.push({name: 'Lottery', params: {gameId: this.game.id}})
            },
            prepareDeadline() {
                let date = Date.parse(this.game.updated_at);
                let time = [1000, 6, 12, 24, 36, 48, 96, 128];

                date = date + time[this.game.lifetime] * 60 * 60 * 1000;
                return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
            },
            lineWidth: function (c1, c2) {
                return {
                    '--line-width': ((c1 / c2) * 100) + '%'
                }
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.game.error_title,
                    text: message
                })
            },


        },
        components: {
            Card, CardTabs, CardSection, FlipCountdown, Scroll, Toggle
        },

    }

</script>

<style lang="scss">
    @import "~/fonts.scss";
    @import "~/lottery.scss";

    .scroll-area-2 {
        width: 100%;
        height: 350px;
        padding: 10px;
        box-sizing: border-box;

        .input-group {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            label {
                color: white;
                line-height: 150%;
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 900;
            }

            select {
                border: 2px yellow solid !important;
                background: #2c3e50 !important;
                color: white !important;
                padding: 10px;
                border-radius: 5px;
                font-weight: 900;
                option {
                    color: white !important;
                }
            }
        }
    }

    .card-wrapper {
        padding: 50px 30px 0px 30px;
    }

    .lot-item {
        width: 255px;
        border: 1px yellow solid;
        height: 350px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            .price,
            .sale,
            .controlls {
                opacity: 1;
                transition: 0.3s;
            }
        }

        .controlls {
            position: absolute;
            bottom: 0;
            left: 0px;

            opacity: 0;
            transition: 0.3s;

            button {
                color: #2c3e50;
                background-color: yellow;
                box-shadow: 1px 0px 2px 0px black;
                border-radius: 0px 5px 0px 0px;
                padding: 10px 20px;
            }
        }

        .card-info {
            position: absolute;
            top: -38px;
            right: -38px;
            width: 36px;
            height: 36px;
            border-radius: 0% 50% 50% 0%;
            border: 1px yellow solid;
            box-shadow: 0px 0px 2px 0px black;
            /* text-shadow: 1px 1px 1px black; */
            z-index: 14;
            color: white;
            font-weight: 900;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 0.3s;
            background: #2c3e50;

            &:hover {
                transition: .3s;
                background-color: yellow;
                color: #2c3e50;
            }
        }
        .sale {
            border: 35px solid transparent;
            border-top: 35px solid yellow;
            border-right: 35px solid yellow;
            position: absolute;
            z-index: 14;
            top: 0;
            right: 0;
            opacity: 0;
            transition: 0.3s;

            &:after {
                content: attr(data-sale);
                position: absolute;
                top: -17px;
                right: -29px;
                color: #2c3e50;
                font-size: 14px;
                font-weight: 900;
                transform: rotate(45deg)
            }
        }
        .price {
            z-index: 14;
            position: absolute;
            color: #2c3e50;
            font-weight: bold;
            bottom: 0px;
            right: 0px;
            background: yellow;
            padding: 10px;
            border-radius: 5px 0px 0px 0px;

            opacity: 0;
            transition: 0.3s;
        }

        .progress {
            z-index: 5;
            position: absolute;
            font-weight: bold;
            top: -37px;
            left: 0px;
            height: 37px;
            padding: 10px;
            color: white;
            width: 100%;
            text-align: left;
            box-sizing: border-box;
            background: #2c3e5096;

            .info {
                position: absolute;
                z-index: 5;
                left: 50px;
                top: 13px;
                font-size: 12px;
            }
            .line {
                height: 100%;
                background: #054608ad;
                position: absolute;
                z-index: 4;
                top: 0;
                left: 0;
                width: var(--line-width);
            }
        }

        .coins,
        .item {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            background-color: #2c3e50;
            overflow: hidden;

            img {
                width: 253px;
                height: 350px;
                object-fit: cover;
                mix-blend-mode: var(--blend_mode);

            }
        }

        ul {
            position: absolute;
            z-index: 12;
            width: 100%;
            border-radius: 5px 0px 0px 0px;
            top: -38px;
            border: 1px yellow solid;
            left: -1px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: white;
            flex-wrap: wrap;
            text-transform: uppercase;
            font-weight: 900;
            li {
                padding: 10px;
                cursor: pointer;

                &:after {
                    content: '\f007';
                    font-style: normal;
                    font-variant: normal;
                    text-rendering: auto;
                    -webkit-font-smoothing: antialiased;
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    text-shadow: 1px 1px 1px black;
                }
                &.active {
                    color: yellow;
                }

                &:nth-of-type(1):after {
                    content: '\f2bb';
                }

                &:nth-of-type(2):after {
                    content: '\f1da';
                }

                &:nth-of-type(3):after {
                    content: '\f007';
                }
            }
        }

        .prices {
            position: absolute;
            bottom: 64px;
            width: 100%;
            z-index: 14;
            padding: 0px 30px;
            box-sizing: border-box;
            left: 0;

            h5 {
                font-size: 20px;
                font-weight: 900;
                line-height: 150%;
                color: yellow;
                text-transform: uppercase;
                text-align: center;
                border-top: 1px yellow solid;
            }

            p {
                color: white;
                font-size: 16px;
                font-weight: 900;
                line-height: 150%;
                text-align: center;
            }

        }

        .console {
            position: absolute;
            top: -28px;
            left: 0px;
            padding: 0px 10px;
            font-size: 20px;
            color: #ffff00;
            z-index: 10;
            text-shadow: 2px 2px 2px black;
        }

        .win {
            position: absolute;
            z-index: 12;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background: #ffeb3be6;

            h1 {
                text-transform: uppercase;
                color: #607D8B;
                font-weight: 900;
                font-size: 24px;
                padding: 20px;
                width: 100%;
            }
        }
        .deadline {
            padding: 20px;
            position: absolute;
            z-index: 12;
            top: -60px;
            opacity: 0.1;
            transition: 0.3s;
            right: -78px;
            width: 250px;
            color: #FFEB3B;
            text-transform: uppercase;
            text-shadow: 2px 2px 2px black;
            height: 200px;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            transform: scale(0.5);

            &:hover {
                transition: .3s;
                opacity: 1;
            }

            .flip-clock {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                width: 100%;
                box-sizing: border-box;
                .flip-card {
                    font-size: 2.25rem !important;
                }

                .flip-clock__slot {
                    font-size: 12px;
                }
            }

        }

        .seller {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 170px;
            left: 0;
            z-index: 12;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            background: transparent;

            @include flex(center, center);

            a {

                img {
                    width: 100%;
                    box-shadow: 0px 0px 5px 0px black;
                }
            }
        }

        h3 {
            left: 0px;
            position: absolute;
            width: 100%;
            top: 20px;
            font-size: 18px;
        }
        .buyer {
            position: absolute;
            z-index: 14;
            top: 10px;
            width: 100%;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            .user {
                width: 80px;
                height: 80px;
                border: 1px yellow solid;
                display: flex;
                justify-content: center;
                align-items: center;

                background-color: #d3d3d3c4;
                box-shadow: 0px 0px 5px 0px black;
                cursor: pointer;
                border-radius: 10px 0px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .cancel {
            position: absolute;
            z-index: 20;
            font-size: 72px;
            color: red;
            text-shadow: 2px 2px 2px black;
            cursor: pointer;
            transition: .5s;
            top: 15px;
            &:hover {
                transition: .5s;
                color: orangered;
            }
        }

        .card {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;

            background-color: #2c3e50;
            overflow: hidden;
            img {
                width: 253px;
                height: 350px;
                object-fit: cover;
                mix-blend-mode: var(--blend_mode);
            }
        }

    }


</style>
