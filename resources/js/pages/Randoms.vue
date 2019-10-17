<template>
  <div class="random-games">

      <h1 class="main-title">Выбери свою игру!</h1>
      <p class="description">

          </p>
    <ul class="games-list">
      <li class="game" v-for="game in games">
        <div class="row">
          <img class="game-logo" v-lazy="game.logo" alt="">
        </div>
       <div class="row">
         <a :href="game.url" target="_blank">{{game.url}}</a>
       </div>

        <router-link :to="{ path: '/games/'+game.route}" append class="large-promo">
          <carousel :autoplay="true" :controls="false" :data="game.slides"></carousel>
        </router-link>
        <div class="control">
          <p class="label">{{game.title}}</p>
          <ul class="platforms">
            <li v-for="platform in game.platforms"><a href=''>{{platform.title}}</a></li>
          </ul>
          <p class="counter">
            {{$lang.messages.lottery}}
            <span>{{game.lottery_count}}</span>
          </p>
        </div>
      </li>

    </ul>

  </div>
</template>

<script>

import carousel from '@chenfengyuan/vue-carousel'


export default {
  components: {
    carousel
  },
  methods: {
    addSlide (i) {
      return `<div class="example-slide"><img src="${i}" alt=""></div>`
    }

  },

  data () {
    return {
      games: [
        {
          route: 'nhl',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/EA_Sports.svg/220px-EA_Sports.svg.png',
          url: 'http://www.easports.com/nhl',
          banner: 'img/logo.png',
          title: 'NHL 20',
          platforms: [
            {
              platform_id: 1,
              title: 'xbox one'
            },
            {
              platform_id: 2,
              title: 'play station 4'
            }

          ],
          lottery_count: 10,
          slides: [
            this.addSlide('/img/slides/3.jpg'),
            this.addSlide('/img/slides/2.jpg'),
            this.addSlide('/img/slides/1.jpg'),
          ]
        },



      ]

    }
  }
}
</script>

<style lang="scss">
  @import "~/randoms.scss";
</style>
