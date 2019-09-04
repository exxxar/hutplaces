<template>
    <div id="personal-cabinet" v-if="user!=null">
        <div class="left-side">
            <div class="profile">
                <div class="avatar">
                    <img v-lazy="prepareAvatar()" alt="">
                </div>

                <div class="level" @click="show('levels')">
                    <div class="text">{{user.level.title}}  </div>
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

                <tab :name="$lang.cabinet.wins_title">
                    <scroll class="scroll-area">
                        <users-lotteries :win="true" :user="user"></users-lotteries>
                    </scroll>
                </tab>

            </tabs>
        </div>

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
    import UsersLotteries from '@/components/cabinet/Lottery.vue'
    import UsersInfo from '@/components/cabinet/Info.vue'
    import Levels from '@/components/modals/Levels.vue'


    export default {
        props: ["userId"],
        data() {
            return {
                user: null,
                next:null

            }
        },
        computed: {
            currentUser: function () {
                return this.$store.getters.USER;
            },

        },
        watch: {
            'currentUser': function (newVal, oldVal) {
                this.checkSelf();
                this.nextLevel()
            }
        },
        activated() {
            this.getUser();


        },
        mounted() {
            this.getUser();


        },
        methods: {
            cssProps() {
                return {
                    '--line-width': this.user==null||this.next==null?"0%":(this.user.exp/ this.next.experience) * 100 + "%",
                }
            },
            checkSelf() {
                if (this.user != null && this.currentUser != null)
                    if (this.user.id == this.currentUser.id)
                        this.$router.push({name: 'Cabinet'});
            },
            getUser() {
                this.$store.dispatch('getAnyUser', {user_id: this.userId}).then((response) => {
                    this.user = response.data

                }).catch(() => {
                    this.$router.push({name: 'PageNotFound'});
                })
            },
            prepareAvatar() {

                if (this.user == null || this.user.avatar == null || this.user.avatar == "")
                    return "/img/noavatar.png";

                if (this.user.avatar.indexOf("http") == 0)
                    return this.user.avatar;

                return `/img/avatars/${this.user.avatar}`;

            },

            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },

            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },

            nextLevel(){
               axios.
                    get(`/levels/next/${this.user.level.level}`,{
                }).then(res => {
                   this.next =  res.data.next
                })


            }

        },

        components: {
            UsersAchievements,
            UsersLotteries,
            UsersInfo,
            Scroll,
            Levels
        }
    }
</script>

<style lang="scss">
    @import "~/cabinet.scss";

</style>
