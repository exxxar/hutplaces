<template>
    <div>
        <h1 class="main-title" v-html="$lang.playzone.main_title"></h1>
        <p class="description" v-html="this.$lang.playzone.main_description"></p>
        <ul>
            <router-link tag="li" v-lazy:background-image="'/img/lottery-bg.png'" class="btn randoms opened"
                         to="/nhl">
                {{$lang.playzone.randoms}}
            </router-link>

            <li class="btn fortune closed" v-lazy:background-image="'/img/wheel-of-fortune-bg.png'"
                @click="showError($lang.playzone.error_1)">
                {{$lang.playzone.wheel_of_fortune}}
                <span></span>
            </li>

            <li class="btn wager closed" v-lazy:background-image="'/img/wager-bg.png'"
                @click="showError($lang.playzone.error_2)">
                {{$lang.playzone.wager_matches}}
                <span></span>
            </li>

        </ul>

    </div>
</template>
<script>
    export default {
        methods: {
            showError: function (message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.playzone.error_title,
                    text: message
                })
            }
        }
    }
</script>

<style scoped="true" lang="scss">
    @import '~/partials.scss';
</style>
