<template>
  <div>

    <h1 class="main-title">Игровые возможности</h1>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit.
    </p>

    <ul>
      <li class="btn auction closed" @click="showError('Раздел Аукцион закрыт!')">
        {{$lang.messages.auction}}
        <span></span>
      </li>

      <router-link tag="li" class="btn coins opened" to="/coins">
        {{$lang.messages.coins}}
      </router-link>

      <li class="btn packs closed" @click="showError('Раздел Аукцион закрыт!')">
        {{$lang.messages.players_packs}}
        <span></span>
      </li>


      <router-link tag="li" class="btn randoms opened" to="/randoms">
        {{$lang.messages.randoms}}
      </router-link>

      <li class="btn fortune closed"  @click="showError('Раздел Колесо фортуны не доступен')">
        {{$lang.messages.wheel_of_fortune}}
        <span></span>
      </li>

      <li class="btn wager closed" @click="showError('Раздел Вагер-матчей не доступен')">
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
