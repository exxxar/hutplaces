<template>
    <div class="card-list">

        <h1 class="main-title">Выбери свою игру!</h1>
        <p class="description">
            Попробуй бесплатно и ощути преимущества данной платформы! Получай игрвые бонусы и достижения играя в рандомы с другими игроками.
            Перед начало игры обязательно ознакомься с правилами нашей платформы.
        </p>
        <div class="large-promo">
            <carousel :per-page="1" :loop="true" :autoplay="true" :mouse-drag="true">
                <slide>
                    <img :src="'/img/slides/1.jpg'" alt="">
                </slide>
                <slide>
                    <img :src="'/img/slides/2.jpg'" alt="">
                </slide>

                <slide>
                    <img :src="'/img/slides/3.jpg'" alt="">
                </slide>
            </carousel>
        </div>

        <div v-if="lotteries!=null&&lotteries.length>0">
            <div id="filters" class="filters">
                <h4>Сортировать по:</h4>
                <div class="input-group">
                    <input type="radio" name="sort" id="sort-1" class="input-hidden"/>
                    <label for="sort-1" v-tooltip.bottom="$lang.games.sort_1" @click="sort = 'places-up'">
                        <img src="/img/cards-count-icon.png" alt=""/>
                    </label>
                    <input type="radio" name="sort" id="sort-2" class="input-hidden"/>
                    <label for="sort-2" @click="sort = 'price-down'" v-tooltip.bottom="$lang.games.sort_2">
                        <img src="/img/cards-price-icon.png" alt=""/>
                    </label>
                    <input type="radio" name="sort" id="sort-3" class="input-hidden"/>
                    <label for="sort-3" @click="sort = 'occupied-places-up'" v-tooltip.bottom="$lang.games.sort_3">
                        <img src="/img/cards-occupied-icon.png" alt=""/>
                    </label>
                    <input type="radio" name="sort" id="sort-4" class="input-hidden"/>
                    <label for="sort-4" @click="sort = 'ovr-up'" v-tooltip.bottom="$lang.games.sort_4">
                        <img src="/img/cards-ovr-icon.png" alt=""/>
                    </label>
                </div>
            </div>
            <div v-for="category in categories" class="category"
                 v-if="getLotteriesList(category.min,category.max).length>0">
                <h1 class="category"><span>{{category.title}} Pucks</span></h1>
                <ul class="lots">
                    <game :game="c" v-for="c in getLotteriesList(category.min,category.max)"
                          v-if="isVisible(c)"
                          :user="user"
                          :controls="true">

                    </game>
                </ul>
            </div>

        </div>

        <div class="admin-btn" v-if="user.is_trader==1" @click="show('lottery-add')" v-html="$lang.menu.add_card_btn">
        </div>

        <modal name="lottery-add" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('lottery-add')" class="close"></a>
                <h1 v-html="$lang.modals.user_card_panel.h1"></h1>

                <user-card-panel
                        :user="user"
                        v-on:close="hide('lottery-add')">

                </user-card-panel>
            </scroll>
        </modal>


    </div>
</template>

<script>


    import Game from '@/components/Game.vue'

    import Scroll from 'vue-custom-scrollbar'
    import {Carousel, Slide} from 'vue-carousel';
    import UserCardPanel from '@/components/admin/UserCardPanel.vue'

    export default {

        data() {
            return {
                sort: 'places-down',
                categories: [
                    {min: 0, max: 50, title: '0-50'},
                    {min: 50, max: 100, title: '50-100'},
                    {min: 100, max: 200, title: '100-200'},
                    {min: 200, max: 100000, title: '200+'},
                ],
                lotteries: null,
                user:{
                    is_trader:0
                },
                lifetime:[]
            }
        },

        mounted(){
            this.$store.dispatch("loadLifetime")
            this.$store.dispatch("loadGames")
            this.$store.dispatch('getCurrentUser');
        },
        computed: {
            loadLifetime() {
                return this.$store.getters.LIFETIME;
            },
            loadGames() {
                return this.$store.getters.GAMES;
            },
            loadCurrentUser(){
                return this.$store.getters.USER;
            }
        },
        watch: {
            loadGames(newValue, oldValue) {
                this.lotteries = newValue
            },
            loadCurrentUser(newValue,oldValue){
                this.user = newValue
            },
            loadLifetime(newValue,oldValue){
                this.lifetime = newValue
            }
        },

        methods: {

            isVisible(game) {
                var date1 = Date.parse(game.updated_at);
                var date2 = Date.now();
                var time = [6, 12, 24, 36, 48, 96, 128, 10000];

                date1 = date1 + time[game.lifetime] * 60 * 60 * 1000;

                console.log("Date:", date1 - date2 > 0, " date1=", date1, " date2=", date2);
                return date1 - date2 > 0;
            },


            getLotteriesList: function (min, max) {
                var sort = null
                switch (this.sort) {
                    default:
                    case 'price-down':
                        sort = (a, b) => b.price - a.price;
                        break;
                    case 'price-up':
                        sort = (a, b) => a.price - b.price;
                        break;
                    case 'places-up':
                        sort = (a, b) => b.places - a.places;
                        break;
                    case 'places-down':
                        sort = (a, b) => a.places - b.places;
                        break;
                    case 'occupied-places-up':
                        sort = (a, b) => b.occupied_places - a.occupied_places;
                        break;
                    case 'occupied-places-down':
                        sort = (a, b) => a.occupied_places - b.occupied_places;
                        break;
                    case 'ovr-up':
                        sort = (a, b) => a.lot.card.ovr - b.lot.card.ovr;
                        break;
                    case 'ovr-down':
                        sort = (a, b) => a.lot.card.ovr - b.lot.card.ovr;
                        break;
                }
                var result = this.lotteries
                    .filter(lottery => lottery.base_price >= min && lottery.base_price < max && this.isVisible(lottery))
                    .sort(sort);

                return result
            },
            loadLotteries() {
                this.$loading(true)
                axios
                    .get('/lottery').then(response => {
                    console.log("lottery", response)
                    this.lotteries = response.data.games;
                    this.$loading(false)
                });
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
        },
        components: {
            Scroll, UserCardPanel, Carousel,
            Slide, Game
        }

    }
</script>

<style lang="scss">
    @import "~/fonts.scss";
    @import "~/games.scss";

    .large-promo {
        box-sizing: border-box;
        width: 100%;

        .VueCarousel-slide {
            border: 2px lightgray solid;
            padding: 10px;
            box-sizing: border-box;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%
            }
        }

    }

    .lots {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
        box-sizing: border-box;
    }

</style>
