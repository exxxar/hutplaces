<template>
    <div class="card-wrapper">
        <div class="lot-item" :style="cssProps" v-if="auc">
<!--
            <div class="buyer" v-if="auc.buyer_id!=null">
                <router-link tag="div" class="user"
                             :to="{ name: 'PlayerInfo',params: {userId:auc.buyer_id==null} }">
                    <img v-if="auc.buyer.avatar==null||auc.buyer.avatar==''" :src="'/img/noavatar.png'" alt="">
                    <img v-else :src="`/img/avatars/${auc.buyer.avatar}`" alt="">
                </router-link>
            </div>-->

            <div class="card-info" v-if="auc.lot_type=='2'"
                 @click="show(`card-show-${auc.id}`)">i
            </div>
            <div class="card-info" v-if="auc.lot_type=='1'||auc.lot_type=='0'"
                 @click="show(`card-show-item-${auc.id}`)">i
            </div>

            <card-tabs>
                <card-section title="" active="true">
                    <div class="buyer" v-if="auc.buyer_id!=null&&user.id==auc.buyer_id">
                        <i class="far fa-arrow-alt-circle-up"></i>
                    </div>
                    <div class="buyer new-buyer" v-if="auc.buyer_id!=null&&user.id!=auc.buyer_id">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>

                    <div class="card" v-if="auc.lot_type=='2'">
                        <img v-if="auc.lot.card.image==null" v-lazy="'/img/item-element.jpg'" alt="">
                        <img v-else v-lazy="`/img/cards/${auc.lot.card.image}`" alt="">
                    </div>

                    <div class="item" v-if="auc.lot_type=='0'">
                        <img v-if="auc.lot.item.image==null" v-lazy="'/img/item-element.jpg'" alt="">
                        <img v-else v-lazy="`/img/cards/${auc.lot.item.image}`" alt="">
                    </div>

                    <div class="coins" v-if="auc.lot_type=='1'">
                        <img v-if="auc.lot.item.image==null" v-lazy="'/img/coins-element.jpg'" alt="">
                        <img v-else v-lazy="`/img/cards/${auc.lot.item.image}`" alt="">
                    </div>

                    <div class="price">
                        <p class="step-price">
                            <span> step  </span>{{auc.step_price}} <span> {{$lang.games.money}}  </span></p>
                        <p class="bid-price"><span> bid  </span>{{auc.bid_price}} <span> {{$lang.games.money}}  </span>
                        </p>
                        <p class="buy-price"><span> buy  </span>{{auc.buy_price}} <span> {{$lang.games.money}}  </span>
                        </p>

                    </div>


                    <div class="controlls" v-if="user&&auc.lifetime!=0">
                        <div class="bid btn btn-yellow" @click="bidLot()">Ставка</div>
                        <div class="buy btn btn-orange" @click="buyLot()">Выкуп</div>
                    </div>

                    <div class="controlls" v-if="user&&auc.lifetime==0">
                             <div class="buy btn btn-yellow btn-rounded" @click="buyLot()">Выкуп</div>
                    </div>

                    <div class="controlls" v-if="!user">
                        <router-link to="/signin" tag="button" class="btn btn-yellow "><i
                                class="fas fa-sign-in-alt"></i></router-link>
                        <router-link to="/signup" tag="button" class="btn btn-orange "><i class="fas fa-user-plus"></i>
                        </router-link>
                    </div>

                    <div class="deadline" v-if="auc.lifetime!=0">
                        <flip-countdown :deadline="prepareDeadline()"></flip-countdown>
                    </div>

                    <div class="console">
                        <i v-if="auc.console_type==1" class="fab fa-playstation"></i>
                        <i v-if="auc.console_type==0" class="fab fa-xbox"></i>
                    </div>
                </card-section>

                <div v-if="controls&&user">
                    <card-section title="" v-if="user.is_trader">
                        <scroll class="scroll-area-2">

                            <!--  <div class="input-group">
                                  <div class="cancel" @click="cancelLot(auc.id)"
                                       v-if="auc.seller_id==user.id&&auc.buyer_id!=null">
                                      <i
                                              class="far fa-times-circle"></i></div>
                              </div>-->

                            <div class="input-group">
                                <label :for="`active-type-${auc.id}`" class="col-form-label"
                                       v-html="$lang.game.active"></label>

                                <toggle :check="auc.is_active==1"
                                        :id="`active-type-${auc.id}`"
                                        v-on:check="setActive($event)"
                                        :labelon="$lang.game.yes"
                                        :labeloff="$lang.game.no"
                                        :width="120"></toggle>
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

            <modal :name="`card-show-${auc.id}`" :adaptive="true" width="100%" height="100%">
                <scroll class="scroll-area">
                    <a href="#" @click="hide(`card-show-${auc.id}`)" class="close"></a>
                    <card :card="getCard()" v-on:close="hide(`card-show-${auc.id}`)"></card>
                </scroll>
            </modal>

            <modal v-if="auc.lot_type=='1'||auc.lot_type=='0'" :name="`card-show-item-${auc.id}`" :adaptive="true"
                   width="100%" height="100%">
                <scroll class="scroll-area">
                    <a href="#" @click="hide(`card-show-item-${auc.id}`)" class="close"></a>
                    <div class="modal-body">
                        <h1>{{auc.title}}</h1>
                        <p v-if="auc.lot.item.description!=null" v-html="auc.lot.item.description"></p>
                        <p v-if="auc.lot_type=='1'">{{auc.lot.item.value}}</p>
                    </div>

                </scroll>
            </modal>
        </div>
    </div>

</template>

<script>
    import FlipCountdown from 'vue2-flip-countdown'
    import Card from '@/components/admin/Card.vue'
    import {Tabs as CardTabs, Tab as CardSection} from 'vue-simple-tabs';
    import Scroll from 'vue-custom-scrollbar'

    import Toggle from '@/components/Toggle.vue'

    export default {
        props: ["auc", "controls", "lifetime", "user"],
        data() {
            return {
                is_active: 0 || this.auc.is_active,
                selected_lifetime: this.auc.lifetime,
            }
        },
        methods: {
            bidLot() {
                this.$store.dispatch("doBidLot", {id: this.auc.id})
                    .then((res) => {
                        this.message(res.data.message)
                    }).catch(() => {
                    this.message("Сделать ставку не удалось, обратитесь к администратору!")
                });

            },
            buyLot() {
                this.$store.dispatch("doBuyLot", {id: this.auc.id})
                    .then((res) => {
                        this.message(res.data.message)
                    }).catch(() => {
                    this.message("Неудалось преобрести лот, обратитесь к администрации")
                });

            },
            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
            },
            remove() {
                this.$store.dispatch("removeAuctionLot", {id: this.auc.id})
                    .then(() => {
                        this.message(this.$lang.game.success_3)

                        this.$store.dispatch("loadAuctions")

                        document.querySelectorAll(".lot-item ul li:nth-of-type(1)").forEach(function (a) {
                            a.click();
                        });
                    }).catch(() => {
                    this.message(this.$lang.game.error_2)
                })

            },
            setLifetime(event) {
                this.selected_lifetime = event.target.value;
                this.save()
            },
            setActive(active) {
                this.is_active = active
                this.save()
            },
            save() {
                this.$store.dispatch("updateAuctionLot", {
                    id: this.auc.id,
                    lifetime: this.selected_lifetime,
                    active: this.is_active ? 1 : 0,

                })
                    .then(() => {

                        this.$store.dispatch("loadAuctions")
                    }).catch((msg) => {
                    console.log(msg);
                })
                this.message(this.$lang.game.success_1)
            },
            getCard() {
                return this.auc.lot.card;
            },

            prepareDeadline() {
                let date = Date.parse(this.auc.updated_at);
                let time = [1000, 6, 12, 24, 36, 48, 96, 128];

                date = date + time[this.auc.lifetime] * 60 * 60 * 1000;
                return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
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
        computed: {
            cssProps() {
                return {
                    '--opacity': (this.auc.is_active?1:0.5)
                }
            }
        },
        components: {
            Card, CardTabs, CardSection, FlipCountdown, Scroll, Toggle
        },

    }

</script>

<style lang="scss" scoped>
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
        opacity: var(--opacity);

        &:hover {
            .controlls {
                opacity: 1.0;
                transition: opacity .3s;
            }

            .price {
                height: 70px;
                transition: .3s;
                font-size: 14px;

            }
        }

        .controlls {
            position: absolute;
            bottom: 80px;
            right: 0px;
            display: flex;
            justify-content: center;
            height: 59px;
            width: 100%;
            z-index: 10;
            color: white;
            font-size: 16px;
            line-height: 120%;
            opacity: 0.0;
            transition: opacity .3s;

            .btn {
                &:nth-of-type(1) {
                    border-radius: 5px 0px 0px 5px;
                }

                &:nth-of-type(2) {
                    border-radius: 0px 5px 5px 0px;
                }

                &.btn-rounded {
                    border-radius:5px;
                }
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
            z-index: 12;
            top: 0;
            right: 0;
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
            width: 100%;
            position: absolute;
            color: #ffffff;
            font-weight: bold;
            bottom: 0px;
            height: 5px;
            overflow: hidden;
            transition: .3s;
            right: 0px;
            background: rgba(54, 54, 54, 0.56);
            padding: 10px;
            box-sizing: border-box;
            border-radius: 0;
            display: flex;
            align-items: center;
            font-size: 10px;
            opacity: 1;
            line-height: 140%;
            p {
                width: 32%;
                display: flex;
                flex-direction: column;
                span {
                    text-transform: uppercase;
                    font-size: 10px;
                    color: yellow;
                }
            }
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
            overflow: hidden;
            background-color: #2c3e50;

            img {
                width: 253px;
                height: 344px;
                object-fit: cover;
                mix-blend-mode: luminosity;
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
            text-shadow: 2px 2px 2px black;
        }

        .win {
            position: absolute;
            z-index: 12;
            top: 20px;
            left: 0;
            width: 100%;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;

            h1 {
                text-transform: uppercase;
                color: white;
                text-shadow: 2px 2px 2px black;
                font-size: 24px;
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
            top: -28px;
            left: 25px;
            padding: 0;
            font-size: 18px;
            color: #03A9F4;
            text-shadow: 2px 2px 2px black;
            width: 50px;

            &.new-buyer {
                color: #FF9800;
            }

        }
        .cancel {
            position: relative;
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
                mix-blend-mode: luminosity;
            }
        }

    }


</style>