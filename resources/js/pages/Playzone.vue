<template>
  <div>
    <ul>
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
