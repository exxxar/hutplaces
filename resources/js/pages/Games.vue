
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

      <div v-for="category in categories" class="category" v-if="getCardList(category.min,category.max).length>0">
        <h1 class="category"><span>{{category.title}} Pucks</span></h1>
        <div class="cards" >
          <div class="card" v-for="c in getCardList(category.min,category.max)"  >
            <div class="card-wrapper" >
              <div v-html="prepareUrl(c.card_data)" class="card-data" @click="lotteryOpen(c.card_id)" ></div>
              <div class="price">{{c.price }} Pucks</div>
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
        {min:200,max:1000,title:'200+'},
      ],
      cards: [
        {
          card_id: 1,
          places: 28,
          card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
          price: 250,
          occupied_places: 20,
          player_name: 'Jeff Carter',
          ovr: 94
        },
        {
          card_id: 1,
          places: 31,
          card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
          price: 25,
          occupied_places: 10,
          player_name: 'Jeff Carter',
          ovr: 94
        },
        {
          card_id: 1,
          places: 25,
          card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
          price: 55,
          occupied_places: 18,
          player_name: 'Jeff Carter',
          ovr: 94
        },
        {
          card_id: 1,
          places: 14,
          card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
          price: 25,
          occupied_places: 11,
          player_name: 'Jeff Carter',
          ovr: 94
        },
        {
          card_id: 1,
          places: 78,
          card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
          price: 25,
          occupied_places: 12,
          player_name: 'Jeff Carter',
          ovr: 94
        },
        {
          card_id: 1,
          places: 12,
          card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
          price: 25,
          occupied_places: 14,
          player_name: 'Jeff Carter',
          ovr: 94
        }
      ]
    }
  },

  methods: {
    getCardList: function (min, max) {
      var sort = null
      switch (this.sort) {
        default:
        case 'price-down': sort = (a, b) => b.price - a.price; break;
        case 'price-up': sort = (a, b) => a.price - b.price; break;
        case 'places-up': sort = (a, b) => b.places - a.places; break;
        case 'places-down': sort = (a, b) => a.places - b.places; break;
        case 'occupied-places-up': sort = (a, b) => b.occupied_places - a.occupied_places; break;
        case 'occupied-places-down': sort = (a, b) => a.occupied_places - b.occupied_places;  break;
        case 'ovr-up': sort = (a, b) => a.ovr - b.ovr;  break;
        case 'ovr-down': sort = (a, b) => a.ovr - b.ovr;  break;
      }
      return this.cards
        .filter(card => card.price >= min && card.price < max)
        .sort(sort)
    },

    prepareUrl: function (template) {
      return template.replace(/\/assets/gi, 'https://hutdb.net/assets')
    },
    lineWidth: function (c1, c2) {
      return {
        '--line-width': ((c1 / c2) * 100) + '%'
      }
    },
    lotteryOpen: function (cardId) {
      this.$router.push({ name: 'Lottery', params: { id: cardId } })
    }
  }

}
</script>

<style lang="scss">
@import "~/fonts.scss";
@import "~/games.scss";
</style>
