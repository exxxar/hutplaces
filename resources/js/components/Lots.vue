<template>
    <div class="info-block" v-if="auctions">
        <ul class="lots" v-if="prepareLots()!=null&&prepareLots().length>0">
            <auc-item :auc="lot"
                      :controls="true"
                      :user="user"
                      :lifetime="lifetime"
                      v-for="lot in  prepareLots()"
            ></auc-item>
        </ul>

        <div class="no-items" v-if="prepareLots()==null|| prepareLots().length==0">
            <img src="img/empty-ru.png" alt="">
        </div>


    </div>

</template>

<script>


    import FlipCountdown from 'vue2-flip-countdown'
    import CardSearch from '@/components/admin/CardSearch.vue'
    import AucItem from '@/components/AucItem.vue'
    import {Tabs as CardTabs, Tab as CardSection} from 'vue-simple-tabs';

    export default {
        props: ["type", "filters", "lifetime", "user"],
        activated() {
            this.$store.dispatch("loadAuctions", {type: this.type})
        },
        mounted() {

            this.$store.dispatch("loadAuctions", {type: this.type})

        },
        computed: {
            loadAuctions() {
                return this.$store.getters.AUCTIONS;
            },
            loadMyLots() {
                return this.$store.getters.MY_LOTS;
            },
            loadMyBids() {
                return this.$store.getters.MY_BIDS;
            },
        },
        watch: {

            loadMyBids(newValue, oldValue) {
                if (this.type == 1)
                    this.auctions = newValue
            },
            loadMyLots(newValue, oldValue) {
                if (this.type == 2)
                    this.auctions = newValue
            },
            loadAuctions(newValue, oldValue) {
                if (this.type == 0 || this.type == undefined || this.type == null)
                    this.auctions = newValue
            },
        },
        mounted() {
            setInterval(() => {
                this.deadlineList.forEach((game, index) => {
                    if (game)
                        if (!this.isActiveDate(game)) {
                            this.deadlineList.splice(index, 1);
                            this.$store.dispatch("loadAuctions", {type: 0})
                        }
                });
            }, 10000);
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

            isActiveDate(lot) {

                var date1 = Date.parse(lot.updated_at == null ? lot.created_at : lot.updated_at);
                var date2 = Date.now();
                var time = [100000, 6, 12, 24, 36, 48, 96, 128];

                date1 = date1 + time[lot.lifetime] * 60 * 60 * 1000;

                return date2 < date1;
            },

            prepareLots() {
                this.deadlineList = [];

                if (this.auctions == null || this.auctions == undefined)
                    return [];

                var tmp_summary = this.auctions;

                tmp_summary = tmp_summary.filter(lot => this.isActiveDate(lot));

                if (this.filters != null) {

                    if (this.filters.title.trim().length > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.title != null ? lot.title.indexOf(this.filters.title) != -1 : false ||
                            lot.card != null ? lot.card.player.indexOf(this.filters.title) != -1 : false ||
                            lot.item != null ? lot.item.title.indexOf(this.filters.title) != -1 : false
                        );

                    if (this.filters.max_bid_price > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.bid_price >= this.filters.min_bid_price &&
                            lot.bid_price <= this.filters.max_bid_price);

                    if (this.filters.max_buy_price > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.buy_price >= this.filters.min_buy_price &&
                            lot.buy_price <= this.filters.max_buy_price);

                    if (this.filters.max_step_price > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.step_price >= this.filters.min_step_price &&
                            lot.step_price <= this.filters.max_step_price);

                    if (!this.filters.all_consoles)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.console_type == (this.filters.console_type ? 1 : 0));

                    if (this.filters.lifetime > 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.lifetime == this.filters.lifetime);

                    if (this.user.is_trader == 0)
                        tmp_summary = tmp_summary.filter(lot =>
                            lot.is_active == 1);

                    this.deadlineList = tmp_summary.filter(lot =>
                        lot.lifetime > 0);


                }

                document.getElementById("pageContent").scrollTop = 0;

                return tmp_summary;
            },


        },
        data() {
            return {
                auctions: this.loadAuctions,
                deadlineList: [],

            }
        },
        components: {
            CardSearch, FlipCountdown, CardTabs, CardSection, AucItem
        }

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";

</style>

