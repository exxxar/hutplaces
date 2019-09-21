<template>
    <div class="info-block">

        <h1 class="main-title">{{content.title}}</h1>
        <p class="description">{{content.content}}</p>

        <ul class="lots" v-if="prepareLots()!=null&&prepareLots().length>0">
            <li class="lot-item" v-for="lot in prepareLots()" v-if="isActiveDate(lot)">
                <card-tabs>
                    <card-section title="Item" active="true">
                        <div class="card" v-if="lot.card!=null" v-html="prepareUrl(lot)"></div>
                        <div class="item" v-if="lot.item!=null"></div>
                        <div class="coins" v-if="lot.coins!=null"></div>
                        <div class="seller">
                            <router-link v-if="lot.seller_id!=null" tag="a" class="link"
                                         :to="{ name: 'PlayerInfo',params: {userId:lot.seller_id} }">
                                By {{lot.seller.name}}
                            </router-link>
                        </div>
                    </card-section>
                    <card-section title="Act">
                        <div class="deadline">
                            <flip-countdown :deadline="prepareDeadline(lot)"></flip-countdown>
                        </div>


                        <div class="controls">
                            <div class="bid btn btn-yellow" @click="bidLot(lot)">Bid</div>
                            <div class="buy btn btn-primary" @click="buyLot(lot)">Buy</div>
                        </div>


                    </card-section>


                    <card-section title="Info">

                        <div class="cancel" @click="cancelLot(lot.id)" v-if="lot.seller_id==userId&&lot.buyer_id==null">
                            <i
                                    class="far fa-times-circle"></i></div>
                        <div class="buyer" v-if="lot.buyer_id!=null">
                            <router-link tag="div" class="user"
                                         :to="{ name: 'PlayerInfo',params: {userId:lot.buyer_id} }">
                                <img :src="prepareAvatar(lot.buyer.avatar)" alt="">
                            </router-link>
                        </div>
                        <h3 v-if="lot.buyer_id==null">No bids</h3>

                        <div class="prices">
                            <h5>Bid</h5>
                            <p>{{lot.bid_price}} Pucks</p>
                            <h5>Step</h5>
                            <p>{{lot.step_price}} Pucks</p>
                            <h5>Buy</h5>
                            <p>{{lot.buy_price}} Pucks</p>
                        </div>

                        <div class="controls" v-if="lot.seller_id==userId">
                            <div v-if="lifetime!=null&&lifetime.length>0" class="form-group">
                                <label>Lifetime</label>
                                <select v-on:change="updateLifetime($event,lot)">
                                    <option v-for="time in lifetime" :value="time.value">{{prepareLifetime(time.key)}}
                                    </option>
                                </select>
                            </div>
                        </div>


                    </card-section>
                </card-tabs>


            </li>

        </ul>
        <h3 v-if="prepareLots()==null||prepareLots().length==0">
            Нет доступных лотов
        </h3>

    </div>

</template>

<script>


    import FlipCountdown from 'vue2-flip-countdown'
    import CardSearch from '@/components/admin/CardSearch.vue'
    import {Tabs as CardTabs, Tab as CardSection} from 'vue-simple-tabs';

    export default {
        props: ["type", "userId"],
        activated() {
            this.loadLots()
            this.loadLifetimes()
        },
        mounted() {

            this.loadLifetimes()
            this.loadLots()


            Event.$on("updateUserLot", () => {
                this.loadLots()
            });
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
            cancelLot(id) {
                this.$store.dispatch('lot', {
                    id: id,
                    type: 'cancel'
                })
                    .then((res) => {
                        this.lots = res.data.lots
                    });
            },
            loadLifetimes() {
                axios
                    .get('/settings/lifetime')
                    .then(response => {
                        this.lifetime = response.data.lifetime;
                        console.log(response)
                    });
            },
            prepareDeadline(lot) {
                var date = Date.parse(lot.created_at);
                var time = [6, 12, 24, 36, 48, 96, 128, 10000];

                date = date + time[lot.lifetime] * 60 * 60 * 1000;
                return timeSolver.getString(new Date(date), "YYYY-MM-DD HH:MM:SS");
            },
            isActiveDate(lot) {
                if (this.type == "mylots")
                    return true;

                var date1 = Date.parse(lot.updated_at == null ? lot.created_at : lot.updated_at);
                var time = [6, 12, 24, 36, 48, 96, 128, 10000];

                var date2 = date1 + time[lot.lifetime] * 60 * 60 * 1000;

                return date1 > date2;
            },
            cancelLot(id) {
                this.$store.dispatch('lot', {
                    id: id,
                    type: 'cancel'
                })
                    .then((res) => {
                        this.lots = res.data.lots
                    });
            },

            loadLots() {
                this.$store.dispatch('lot', {type: this.type})
                    .then((res) => {
                        console.log("getUserLots", res);
                        this.lots = res.data.lots
                    });
            },
            prepareAvatar(avatar) {

                if (avatar == null || avatar == "")
                    return "/img/noavatar.png";
                else
                    return `/img/avatars/${avatar}`;

            },
            prepareUrl: function (template) {
                return (JSON.parse(template.lot.card.Card_data)).value;
            },

            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
            },

            prepareLots() {
                return this.lots != null ? this.lots.filter(lot => lot.lot != null && this.isActiveDate(lot)) : [];
            },
            bidLot(lot) {

            },
            buyLot(lot) {

            },
            updateLifetime(event, lot) {
                this.$store.dispatch('lot', {
                    id: lot.id,
                    type: 'updateLot',
                    lifetime: event.target.selectedIndex
                })
                    .then((res) => {
                        this.message("Auction message", res.data.message, "warn")
                        Event.$emit("updateUserLot");
                    });
            },

        },

        data() {
            return {
                content: {
                    title: this.$lang.achievements.main_title,
                    content: this.$lang.achievements.main_description
                },
                lots: null,
                lifetime: null,
                lot: {
                    title: '',
                    step_price: '',
                    bid_price: '',
                    buy_price: '',
                    lifetime: '',
                    console_type: ''
                }
            }
        },
        components: {
            CardSearch, FlipCountdown, CardTabs, CardSection
        }

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";

</style>

