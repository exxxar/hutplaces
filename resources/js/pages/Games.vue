
<template>
    <div class="card-list">
      <h4>Сортировать по:</h4>
      <div id="filters" class="filters">

          <div class="input-group">
            <input
              type="radio" name="sort"
              id="sort-1" class="input-hidden"/>
            <label for="sort-1" v-tooltip.bottom="'По числу мест'"  @click="sort = 'places-up'">
              <img
                src="/img/cards-count-icon.png"
                alt="sort-3" />
            </label>


            <input
              type="radio" name="sort"
              id="sort-2" class="input-hidden" />
            <label for="sort-2" @click="sort = 'price-down'" v-tooltip.bottom="'По цене места'">
              <img
                src="/img/cards-price-icon.png"
                alt="sort-2" />
            </label>

            <input
              type="radio" name="sort"
              id="sort-3" class="input-hidden" />
            <label for="sort-3" @click="sort = 'occupied-places-up'" v-tooltip.bottom="'По количеству занятых мест'">
              <img
                src="/img/cards-occupied-icon.png"
                alt="sort-3" />
            </label>


            <input
              type="radio" name="sort"
              id="sort-4" class="input-hidden" />
            <label for="sort-4" @click="sort = 'ovr-up'" v-tooltip.bottom="'По OVR'">
              <img
                src="/img/cards-ovr-icon.png"
                alt="sort-4" />
            </label>

          </div>
      </div>

      <div v-for="category in categories" class="category" v-if="getLotteriesList(category.min,category.max).length>0">
        <h1 class="category"><span>{{category.title}} Pucks</span></h1>
        <div class="cards" >
          <div class="card" v-for="c in getLotteriesList(category.min,category.max)" >
            <div class="card-wrapper" >
              <div v-html="prepareUrl(c)" class="card-data" @click="lotteryOpen(c.id)" ></div>
              <div class="price">{{c.base_price }} Pucks</div>
              <div class="places">{{c.places}}</div>
            </div>
            <div class="progress">
              <div class="line" :style="lineWidth(c.occupied_places,c.places)"></div>
              <div class="info">{{c.occupied_places}}/{{c.places}}</div>
            </div>
          </div>

        </div>
      </div>


      <a class="scrollTop" v-scroll-to="{
     el: '#filters',
     container: '#pageContent',
     duration: 500,
     easing: 'linear',
     offset: -200,
     force: true,
     cancelable: true,
     x: false,
     y: true
 }">Top</a>
    </div>
</template>

<script>

export default {

  data () {
    return {
      sort: 'places-down',
      categories: [
        {min:25,max:50,title:'0-50'},
        {min:50,max:100,title:'50-100'},
        {min:100,max:200,title:'100-200'},
        {min:200,max:100000,title:'200+'},
      ],
      lotteries: [
          {
              active: 0,
              base_discount: 0,
              base_price: 12312,
              completed: 0,
              console_type: 0,
              created_at: "2019-08-07 21:22:22",
              game_type: "0",
              id: 4,
              is_only_one: 0,
              lifetime: 0,
              lot: {
                  id: 4,
                  lottery_id: 4,
                  coins: null,
                  items_id: null,
                  cards_id: 4,
                  card:{
                      Card_data:null
                  }
              },
              occupied_places: 0,
              places: 122,
              visible: 0,
              winner_id: null,
          },
      ]
    }
  },

    activated() {
      this.loadLotteries();
    },
  methods: {
    getLotteriesList: function (min, max) {
      var sort = null
      switch (this.sort) {
        default:
        case 'price-down': sort = (a, b) => b.price - a.price; break;
        case 'price-up': sort = (a, b) => a.price - b.price; break;
        case 'places-up': sort = (a, b) => b.places - a.places; break;
        case 'places-down': sort = (a, b) => a.places - b.places; break;
        case 'occupied-places-up': sort = (a, b) => b.occupied_places - a.occupied_places; break;
        case 'occupied-places-down': sort = (a, b) => a.occupied_places - b.occupied_places;  break;
        case 'ovr-up': sort = (a, b) => a.lot.card.OVR - b.lot.card.OVR;  break;
        case 'ovr-down': sort = (a, b) => a.lot.card.OVR - b.lot.card.OVR;  break;
      }
      var result = this.lotteries
          .filter(lottery => lottery.base_price >= min && lottery.base_price < max && lottery.lot.card.Card_data!=null)
          .sort(sort);

      return result
    },

    prepareUrl: function (template) {
        return (JSON.parse(template.lot.card.Card_data)).value;
    },
    lineWidth: function (c1, c2) {
      return {
        '--line-width': ((c1 / c2) * 100) + '%'
      }
    },
     loadLotteries(){
         this.$loading(true)
         axios
             .get('/lottery').then(response => {
             this.lotteries = response.data.games;
             this.$loading(false)
         });
     },
    lotteryOpen: function (lotteryId) {
      this.$router.push({ name: 'Lottery', params: { gameId: lotteryId } })
     /*   Event.$emit('load-new-game');*/
    }
  }

}
</script>

<style lang="scss">
@import "~/fonts.scss";
@import "~/games.scss";
</style>
