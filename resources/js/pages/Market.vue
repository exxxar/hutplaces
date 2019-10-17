<template>
    <div>
        <h1 class="main-title" v-html="$lang.market.main_title"></h1>
        <p class="description" v-html="$lang.market.main_description"></p>

        <ul>
            <router-link tag="li" class="btn coins opened" v-lazy:background-image="'/img/auction-bg.png'"
                         to="/auction">
                {{$lang.market.auction}}
            </router-link>

            <router-link tag="li" class="btn coins opened" v-lazy:background-image="'/img/coins-bg.png'" to="/coins">
                {{$lang.market.coins}}
            </router-link>

            <li class="btn packs closed" @click="showError($lang.market.error_3)"
                v-lazy:background-image="'/img/packs-bg.png'">
                {{$lang.market.players_packs}}
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
                    title: this.$lang.market.error_title,
                    text: message
                })
            }
        }
    }
</script>

<style scoped="true" lang="scss">
    @import '~/partials.scss';

</style>
