<template>
  <div>

    <h1 class="main-title">Игровые возможности</h1>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit.
    </p>

    <ul>
      <li class="btn auction closed"  v-lazy:background-image="'/img/auction-bg.png'" @click="showError('Раздел Аукцион закрыт!')">
        {{$lang.messages.auction}}
        <span></span>
      </li>

      <router-link tag="li" class="btn coins opened" v-lazy:background-image="'/img/coins-bg.png'" to="/coins">
        {{$lang.messages.coins}}
      </router-link>

      <li class="btn packs closed" @click="showError('Раздел Аукцион закрыт!')" v-lazy:background-image="'/img/packs-bg.png'">
        {{$lang.messages.players_packs}}
        <span></span>
      </li>


      <router-link tag="li" class="btn randoms opened" to="/randoms" v-lazy:background-image="'/img/lottery-bg.png'">
        {{$lang.messages.randoms}}
      </router-link>

      <li class="btn fortune closed"  @click="showError('Раздел Колесо фортуны не доступен')" v-lazy:background-image="'/img/wheel-of-fortune-bg.png'">
        {{$lang.messages.wheel_of_fortune}}
        <span></span>
      </li>

      <li class="btn wager closed" @click="showError('Раздел Вагер-матчей не доступен')" v-lazy:background-image="'/img/wager-bg.png'">
        {{$lang.messages.wager_matches}}
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
          type: 'error',
          title: 'Important message',
          text: message
        })
      }
    }
  }
</script>

<style scoped="true" lang="scss">
  @import '~/partials.scss';

</style>
