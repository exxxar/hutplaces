<template>
    <div id="personal-cabinet">
        <div class="left-side">
            <div class="profile">
                <div class="avatar">
                    <img v-if="!process_avatar" v-lazy="prepareAvatar()" alt="">
                    <img v-else v-lazy="'/img/loading.gif'" alt="">

                    <ul class="controls">
                        <li v-tooltip.bottom="'Сменить фотографию профиля'" @click="show('image-selector')"><i class="fas fa-camera"></i></li>
                        <li v-tooltip.bottom="'Случайная фотография профиля'" @click="randomAvatar()"><i
                                class="fas fa-sync"></i></li>
                    </ul>
                </div>

                <div class="money">
                    <p>{{user.coins}} <span>Pucks</span></p>
                </div>

                <div class="level">
                    <div class="text">Брозовый уровень</div>
                    <div class="line"></div>
                </div>
            </div>

        </div>
        <div class="right-side">
            <tabs :options="{ useUrlFragment: false }">
                <tab name="Информация">
                    <scroll class="scroll-area">
                        <users-info :user="user"></users-info>
                    </scroll>
                </tab>
                <tab name="Достижения">
                    <scroll class="scroll-area">
                        <users-achievements :userId="user.id"></users-achievements>
                    </scroll>
                </tab>
                <tab name="Транзакции">
                    <scroll class="scroll-area">
                        <users-transactions></users-transactions>
                    </scroll>
                </tab>
                <tab name="Статистика">
                    <scroll class="scroll-area">
                        <users-stats></users-stats>
                    </scroll>
                </tab>
                <tab name="Промокоды">
                    <scroll class="scroll-area">
                        <users-promocodes></users-promocodes>
                    </scroll>
                </tab>
                <tab name="Карточки">
                    <scroll class="scroll-area">
                        <users-cards></users-cards>
                    </scroll>
                </tab>
                <tab name="Розыгрыши">
                    <scroll class="scroll-area">
                        <users-lotteries :win="false"></users-lotteries>
                    </scroll>
                </tab>
                <tab name="Победы">
                    <scroll class="scroll-area">
                        <users-lotteries :win="true"></users-lotteries>
                    </scroll>
                </tab>
                <tab name="Баг-репорты">
                    <scroll class="scroll-area">
                        <users-tickets></users-tickets>
                    </scroll>
                </tab>

            </tabs>
        </div>

        <modal name="image-selector" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('image-selector')" class="close"></a>
                <image-selector v-on:self-hide="hide('image-selector')" v-on:image="setImage($event)"></image-selector>
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
    import UsersLotteries from '@/components/cabinet/Lottery.vue'
    import UsersTickets from '@/components/cabinet/Tickets.vue'
    import UsersInfo from '@/components/cabinet/Info.vue'
    import ImageSelector from '@/components/modals/ImageSelector.vue'


    export default {
        data() {
            return {
                process_avatar:false,
                user: auth.user
            }

        },
        methods: {
            setImage(img){
                this.process_avatar = true;
                this.user.avatar = img;
                axios
                    .post('/users/avatar/set',{
                        image:img
                    })
                    .then(response => {
                        this.message("System", response.data.message, "warn");
                        this.process_avatar = false;
                    });
            },
            prepareAvatar() {
                if (this.user == null || this.user.avatar == null || this.user.avatar == "")
                    return "/img/noavatar.jpg";
                else
                    return `/img/avatars/${this.user.avatar}`;

            },
            loadCurrentUser() {
                axios
                    .get('/get-user')
                    .then(response => {
                        this.user = response.data;
                    });
            },
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            randomAvatar: function () {
                this.process_avatar = true;
                axios
                    .get('/users/avatar/refresh')
                    .then(response => {
                        this.user.avatar = response.data.avatar;
                        this.message("System", response.data.message, "warn");
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
        activated() {
            this.loadCurrentUser();
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
            ImageSelector
        }
    }
</script>

<style lang="scss">
    @import "~/cabinet.scss";

</style>
