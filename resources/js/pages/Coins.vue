<template>
  <div class="coins-section">

    <h1>ПОКУПА \ ПРОДАЖА МОНЕТ</h1>
    <div class="switchers">
      <toggle :check="console"
              :id="'sw-console'"
              v-on:check="checkConsole($event)"
              :labelon="'XBOX'"
              :labeloff="'PS4'"
              :width="148"></toggle>
      <toggle :check="year"
              :id="'sw-year'"
              v-on:check="checkYear($event)"
              :labelon="'2020'"
              :labeloff="'2021'"
              :width="140"></toggle>
      <toggle :check="currency"
              :id="'sw-currency'"
              v-on:check="checkCurrency($event)"
              :labelon="'PUCKS'"
              :labeloff="$lang.messages.rub"
              :width="160"></toggle>
    </div>

    <h2>{{$lang.messages.coins_h2}}</h2>

    <div class="calc">
      <div class="row">
        <button v-on:click="decrease">-</button>
        <input type="text" v-model.number="sum">
        <button v-on:click="increase">+</button>
      </div>
      <div class="row">
        <button v-on:click="sum = 50000">50k</button>
        <button v-on:click="sum = 100000">100k</button>
        <button v-on:click="sum = 250000">250k</button>
        <button v-on:click="sum = 500000">500k</button>
        <button v-on:click="sum = 1000000">1M</button>
      </div>
    </div>

    <div class="price">
      <div class="main-price">
        <div class="price-text">{{$lang.messages.price}}:</div>
        <div class="price-amount">
          <div><span>400.00</span> Pucks</div>
          <div><span>400.00</span> {{$lang.messages.rubles}}</div>
        </div>
      </div>
      <a class="link-yellow" href="#">{{$lang.messages.how_to_buy}}</a>
    </div>

    <hr>
   <p><a href="#" @click="show('card-search')">Найдите карточку</a> или, впишите вручную</p>
    <form class="player">
      <input :placeholder="$lang.messages.player" type="text" v-model="player">
      <input :placeholder="$lang.messages.team" type="text"  v-model="team">
      <input :placeholder="$lang.messages.rating" type="text"  v-model="rating">
      <input :placeholder="$lang.messages.initial_price" type="text"  v-model="initial_price">
      <input :placeholder="$lang.messages.buyout_price" type="text"  v-model="buyout_price">
      <input :placeholder="$lang.messages.team_hut" type="text"  v-model="team_hut">
      <div class="buy-row">
        <button class="btn btn-yellow" type="submit">{{$lang.messages.buy}}</button>
        <a class="link-light" href="#">{{$lang.messages.sell_to_us}}</a>
      </div>
    </form>

    <modal name="card-search" :adaptive="true" width="100%" height="100%">
      <scroll class="scroll-area">
          <a href="#" @click="hide('card-search')" class="close"></a>
          <h1>Поиск карточек игроков</h1>
          <card-search v-on:card="getCard($event)"></card-search>
      </scroll>
    </modal>
  </div>
</template>

<script>

import Toggle from '../components/Toggle.vue'
import CardSearch from '../components/admin/CardSearch.vue'
import Scroll from 'vue-custom-scrollbar'

export default {
  data () {
    return {
      console: true,
      year: false,
      currency: true,
      sum: 0,
        player:'',
        team:'',
        rating:'',
        initial_price:'',
        buyout_price:'',
        team_hut:''


    }
  },
  methods: {
      getCard(data){

        this.player = data.Player;
        this.team = `${data.League} ${data.Team}`;
        this.rating = data.OVR;
        this.hide("card-search")

      },
      show(name) {
          this.$modal.show(name)
      },
      hide(name) {
          this.$modal.hide(name)
      },
    checkConsole: function (event) {
      console.log(event)
      this.console = event
    },
    checkYear: function (event) {
      console.log(event)
      this.year = event
    },
    checkCurrency: function (event) {
      console.log(event)
      this.currency = event
    },
    increase: function () {
      if (this.sum < 10000000) {
        this.sum += 50000
      }
    },
    decrease: function () {
      if (this.sum >= 50000) {
        this.sum -= 50000
      }
    }
  },
  components: {
    Toggle, CardSearch,Scroll
  }
}
</script>

<style lang="scss" scoped>
  @import "~/coins.scss";

  h1 {
    width: 100%;
    text-align: center;
    font-weight: 100;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;
    color:$color4;
    padding: 10px;
    box-sizing: border-box;
  }

  p {
    text-align: center;
    color: white;
    width: 100%;

    a {
      font-weight: 900;
      color:white;
      text-decoration-style: dashed;
    }
  }
</style>

<style lang="scss">
  @import "~/cardsearch.scss";
</style>