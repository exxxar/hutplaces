<template>
  <div>

    <h1 class="main-title">Игровая зона</h1>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit.
    </p>

    <ul>
      <router-link tag="li" v-lazy:background-image="'/img/lottery-bg.png'" class="btn randoms opened" to="/randoms">
        {{$lang.main.randoms}}
      </router-link>

      <li class="btn fortune closed" v-lazy:background-image="'/img/wheel-of-fortune-bg.png'"   @click="showError('Раздел Колесо фортуны не доступен')">
        {{$lang.main.wheel_of_fortune}}
        <span></span>
      </li>

      <li class="btn wager closed" v-lazy:background-image="'/img/wager-bg.png'"  @click="showError('Раздел Вагер-матчей не доступен')">
        {{$lang.main.wager_matches}}
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
