<template>
    <div id="personal-cabinet" v-if="user!=null">
        <div class="left-side">
            <div class="profile">
                <div class="avatar">
                    <img v-if="!process_avatar" v-lazy="prepareAvatar()" alt="">
                    <img v-else v-lazy="'/img/loading.gif'" alt="">

                    <ul class="controls">
                        <li v-tooltip.bottom="$lang.cabinet.change_profile_photo" @click="show('image-selector')"><i
                                class="fas fa-camera"></i></li>
                        <li v-tooltip.bottom="$lang.cabinet.random_profile_photo" @click="randomAvatar()"><i
                                class="fas fa-sync"></i></li>
                    </ul>
                </div>

                <div class="money">
                    <p>{{user.coins}} <span>{{$lang.cabinet.money}}</span></p>
                    <p>{{user.bonus}} <span>{{$lang.cabinet.bonus}}</span></p>
                </div>

                <div class="level" @click="show('levels')">
                    <div class="text">{{prepareLevelTitle()}}  </div>
                    <div class="line" :style="cssProps()"></div>
                </div>
            </div>

        </div>
        <div class="right-side">
            <tabs :options="{ useUrlFragment: false }">
                <tab :name="$lang.cabinet.information_title">
                    <scroll class="scroll-area">
                        <users-info :user="user"></users-info>
                    </scroll>
                </tab>
                <tab :name="$lang.cabinet.achievements_title">
                    <scroll class="scroll-area">
                        <users-achievements :userId="user.id"></users-achievements>
                    </scroll>
                </tab>
                <tab :name="$lang.cabinet.transactions_title">
                    <scroll class="scroll-area">
                        <users-transactions :user="user"></users-transactions>
                    </scroll>
                </tab>
                <tab :name="$lang.cabinet.stats_title">
                    <scroll class="scroll-area">
                        <users-stats :user="user"></users-stats>
                    </scroll>
                </tab>
                <tab :name="$lang.cabinet.promocodes_title">
                    <scroll class="scroll-area">
                        <users-promocodes :user="user"></users-promocodes>
                    </scroll>
                </tab>
                <tab :name="$lang.cabinet.cards_title">
                    <scroll class="scroll-area">
                        <users-cards :user="user"></users-cards>
                    </scroll>
                </tab>

                <tab :name="$lang.cabinet.items_title">
                    <scroll class="scroll-area">
                        <users-items :user="user"></users-items>
                    </scroll>
                </tab>

                <tab :name="$lang.cabinet.lotteries_title">
                    <scroll class="scroll-area">
                        <users-lotteries :win="false" :user="user"></users-lotteries>
                    </scroll>
                </tab>


                <tab :name="$lang.cabinet.wins_title">
                    <scroll class="scroll-area">
                        <users-lotteries :win="true" :user="user"></users-lotteries>
                    </scroll>
                </tab>
                <tab :name="$lang.cabinet.tickets_title">
                    <scroll class="scroll-area">
                        <users-tickets :user="user"></users-tickets>
                    </scroll>
                </tab>
                <tab :name="$lang.cabinet.auction_mylots_title">
                    <scroll class="scroll-area">
                        <users-auc-lots :type="'mylots'"></users-auc-lots>
                    </scroll>
                </tab>
                <!--
                              <tab :name="$lang.cabinet.auction_mybids_title">
                                  <scroll class="scroll-area">

                                  </scroll>
                              </tab>-->
            </tabs>
        </div>

        <modal name="image-selector" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('image-selector')" class="close"></a>
                <image-selector v-on:close="hide('image-selector')" v-on:image="setImage($event)"></image-selector>
            </scroll>
        </modal>


        <modal name="levels" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('levels')" class="close"></a>
                <levels :user="user"></levels>
            </scroll>
        </modal>
    </div>
</template>

<script>
    import Scroll from 'vue-custom-scrollbar'

    import UsersAchievements from '@/pages/Achievement.vue'
    import UsersTransactions from '@/components/cabinet/Transactions.vue'
    import UsersStats from '@/components/cabinet/Stats.vue'
    import UsersPromocodes from '@/components/cabinet/Promocodes.vue'
    import UsersCards from '@/components/cabinet/Cards.vue'
    import UsersItems from '@/components/cabinet/Items.vue'
    import UsersLotteries from '@/components/cabinet/Lottery.vue'
    import UsersTickets from '@/components/cabinet/Tickets.vue'
    import UsersInfo from '@/components/cabinet/Info.vue'
    import UsersAucLots from '@/components/Lots.vue'
    import ImageSelector from '@/components/modals/ImageSelector.vue'
    import Levels from '@/components/modals/Levels.vue'


    export default {
        data() {
            return {
                process_avatar: false,
                user: null,
                next: null
            }

        },
        computed: {
            loadCurrentUser() {
                return this.$store.getters.USER;
            }
        },
        watch: {
            loadCurrentUser(newValue, oldValue) {
                this.user = newValue
            },
        },
        mounted(){
            Event.$emit('updateData');
        },
        methods: {
            prepareLevelTitle() {
                return this.user != null ? eval(`this.$lang.levels.${this.user.level.title}`) : '<empty>';
            },
            cssProps() {
                return {
                    '--line-width': this.user == null || this.next == null ? "0%" : (this.user.exp / this.next.experience) * 100 + "%",
                }
            },
            nextLevel() {
                axios.get(`/levels/next/${this.user.level.level}`, {}).then(res => {
                    this.next = res.data.next
                })


            },
            setImage(img) {
                this.process_avatar = true;
                this.user.avatar = img;
                axios
                    .post('/users/avatar/set', {
                        image: img
                    })
                    .then(response => {
                        Event.$emit("updateUserProfile");

                        Event.$emit("message", {
                            title: 'Кабинет',
                            message: response.data.message,
                            type: 'warn'
                        });


                        this.process_avatar = false;
                    });
            },
            prepareAvatar() {
                if (this.user == null || this.user.avatar == null || this.user.avatar == "")
                    return "/img/noavatar.png";
                else
                    return `/img/avatars/${this.user.avatar}`;

            },

            randomAvatar: function () {
                this.process_avatar = true;
                axios
                    .get('/users/avatar/refresh')
                    .then(response => {
                        this.user.avatar = response.data.avatar;
                        Event.$emit("message", {
                            title: 'Кабинет',
                            message: response.data.message,
                            type: 'warn'
                        });

                        Event.$emit("updateUserProfile");
                        this.process_avatar = false;


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
            UsersAchievements,
            UsersTransactions,
            UsersStats,
            UsersPromocodes,
            UsersCards,
            UsersLotteries,
            UsersTickets,
            UsersInfo,
            Scroll,
            ImageSelector,
            Levels,
            UsersAucLots,
            UsersItems
        }
    }
</script>

<style lang="scss">
    @import "~/cabinet.scss";

</style>
