<template>
    <div>
        <h1 class="main-title">{{content.title}}</h1>
        <p class="description">{{content.content}}</p>
        <ul>
            <li class="btn auction closed" v-lazy:background-image="'/img/auction-bg.png'"
                @click="message($lang.messages.main_error_1)">
                {{$lang.main.auction}}
                <span></span>
            </li>
            <router-link tag="li" class="btn coins opened" v-lazy:background-image="'/img/coins-bg.png'" to="/coins">
                {{$lang.main.coins}}
            </router-link>
            <li class="btn packs closed" @click="message($lang.messages.main_error_2)"
                v-lazy:background-image="'/img/packs-bg.png'">
                {{$lang.main.players_packs}}
                <span></span>
            </li>
            <router-link tag="li" class="btn randoms opened" to="/randoms"
                         v-lazy:background-image="'/img/lottery-bg.png'">
                {{$lang.main.randoms}}
            </router-link>
            <li class="btn fortune closed" @click="message($lang.messages.main_error_3)"
                v-lazy:background-image="'/img/wheel-of-fortune-bg.png'">
                {{$lang.main.wheel_of_fortune}}
                <span></span>
            </li>
            <li class="btn wager closed" @click="message($lang.messages.main_error_4)"
                v-lazy:background-image="'/img/wager-bg.png'">
                {{$lang.main.wager_matches}}
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              content: {
                  title: this.$lang.main.main_title,
                  content: this.$lang.main.main_description
              },
          }
        },
        methods: {
            message(message,) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.messages.main_error_title,
                    text: message
                })
            },
        }
    }
</script>

<style scoped="true" lang="scss">
    @import '~/partials.scss';
</style>
