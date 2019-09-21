<template>
    <div>
        <h1 class="main-title">Игровой маркет</h1>
        <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit.
        </p>

        <ul>

            <router-link tag="li" class="btn coins opened" v-lazy:background-image="'/img/auction-bg.png'" to="/auction">
                {{$lang.main.auction}}
            </router-link>

            <router-link tag="li" class="btn coins opened" v-lazy:background-image="'/img/coins-bg.png'" to="/coins">
                {{$lang.main.coins}}
            </router-link>

            <li class="btn packs closed" @click="showError('Раздел Аукцион закрыт!')" v-lazy:background-image="'/img/packs-bg.png'">
                {{$lang.main.players_packs}}
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
