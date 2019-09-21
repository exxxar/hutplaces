<template>
    <div class="all-lots">
        <div class="left-panel">
            <div class="form-group">
                <label>Card title</label>
                <input type="text" maxlength="30" v-model="lot.title">
            </div>

            <div class="form-group">
                <label>Step price</label>
                <input type="number" min="0" max="99999999" v-model="lot.step_price">
            </div>

            <div class="form-group">
                <label>Bid price</label>
                <input type="number" min="0" max="99999999" v-model="lot.bid_price">
            </div>


            <div class="form-group">
                <label>Buy price</label>
                <input type="number" min="0" max="99999999" v-model="lot.buy_price">
            </div>

            <div v-if="lifetime!=null&&lifetime.length>0" class="form-group">
                <label>Lifetime</label>
                <select v-model="lot.lifetime">
                    <option v-for="time in lifetime" :value="time.value">{{prepareLifetime(time.key)}}</option>
                </select>
            </div>

            <div class="form-group">
                <toggle :check="lot.console_type"
                        :id="'alllots-console'"
                        v-on:check="checkConsole($event)"
                        :labelon="'XBOX'"
                        :labeloff="'PS4'"
                        :width="147"></toggle>
            </div>

            <div class="form-group">
                <button class="btn btn-yellow full" @click="filterLots()">Найти лот</button>
            </div>


        </div>


        <div class="right-panel">
            <scroll class="scroll-area">
                <lots :type="'all'"></lots>
            </scroll>
        </div>
    </div>
</template>

<script>


    import Toggle from '@/components/Toggle.vue'
    import CardSearch from '@/components/admin/CardSearch.vue'
    import Lots from '@/components/Lots.vue'

    import Scroll from 'vue-custom-scrollbar'

    export default {
        methods: {
            filterLots() {

            },
            getCard(data) {
                this.lot.title = data.Player;
                console.log("card data", data)
                this.hide("card-search")
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            loadLifetimes() {
                axios
                    .get('/settings/lifetime')
                    .then(response => {
                        this.lifetime = response.data.lifetime;
                        console.log(response)
                    });
            },
            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
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
            Toggle, CardSearch, Scroll, Lots
        }

    }
</script>
<style lang="scss">
    @import "~/auction.scss";


</style>

