<template>
    <div>
        <h1 class="main-title" v-html="$lang.market.main_title"></h1>
        <p class="description" v-html="$lang.market.main_description"></p>


        <ul>
            <router-link tag="li" class="btn auction opened"
                         to="/auction">
                {{$lang.market.auction}}
            </router-link>

            <router-link tag="li" class="btn coins opened"
                         to="/coins">
                {{$lang.market.coins}}
            </router-link>

            <router-link tag="li" class="btn promotions opened"
                         to="/promotions">
                {{$lang.market.promotions}}
            </router-link>

            <router-link tag="li" class="btn packs opened"
                         to="/packs">
                {{$lang.market.players_packs}}
            </router-link>


        </ul>

    </div>
</template>

<script>


    export default {
        watch: {
            '$route': 'fetchData'
        },
        created(){
          this.fetchData()
        },
        methods: {
            fetchData() {
                this.$store.dispatch('getCurrentUser')
            },
            message: function (message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.market.error_title,
                    text: message
                })
            }
        },

    }
</script>

<style scoped="true" lang="scss">
    @import '~/partials.scss';

</style>
