<template>
  <div class="lottery-section" id="lottery-section">
    <div class="left-side">
      <div class="fixed">
        <div class="controls">
          <div class="mini-btn" v-tooltip.bottom="'Поделиться игрой'" @click="toClipboard()"><img
            src="/img/cards-share-icon.png" alt=""></div>
          <div class="mini-btn" v-tooltip.bottom="'Защита выигрыша'" @click="showModal('security')"><img
            src="/img/cards-security-icon.png" alt=""></div>
          <div class="mini-btn" v-tooltip.bottom="'Информация по карточке'" @click="showModal('cardinfo')"><img
            src="/img/cards-info-icon.png" alt=""></div>
        </div>
        <div class="card" v-html="prepareUrl(card.card_data)"></div>
        <!--    <div class="block-info">
                <div class="console">
                    <img :src="getPlatform()" alt="">
                </div>
                <h4>{{card.player_name}}</h4>
                <p class="year">{{card.year}} год</p>
                <p class="price"><strong>{{card.price}}</strong> Pucks</p>
            </div>-->
        <div class="buttons">
          <div class="random" @click="startAnim()">
            <div class="line" :style="cssProps"></div>
            <div class="text">Случайное место</div>
          </div>
          <button class="buy">Купить сразу</button>
        </div>
      </div>
    </div>
    <vue-custom-scrollbar class="right-side" id="right-side">
      <ul class="lotery ">
        <li class="slot" v-for="p in prepareSlots()">
          <div v-if="typeof(p) === 'object'"><img @click="clickUserSlot(p)" :src="p.photo" alt=""></div>
          <div v-else><p @click="clickFreeSlot(p-1)" class="number">{{p}}</p></div>

        </li>

      </ul>
      <a class="scrollTop" v-scroll-to="{
         el: '#right-side',
         container: '#pageContent',
         duration: 500,
         easing: 'linear',
         offset: -200,
         force: true,
         cancelable: true,
         x: false,
         y: true
     }">Top</a>

      <!--   <vue-custom-scrollbar class="history"  :settings="settings" @ps-scroll-y="scrollHanle">
             <li v-for="u in places"><p><img src="">{{u.date_pick}} в {{u.time_pick}} <strong>{{u.name}}</strong> занял место #{{u.place_id}}</p></li>
         </vue-custom-scrollbar>-->


    </vue-custom-scrollbar>

    <modal name="security" height="auto">
      <a href="#" @click="hideModal('security')" class="close"></a>
      <security></security>
    </modal>

    <modal name="cardinfo" height="auto">
      <a href="#" @click="hideModal('cardinfo')" class="close"></a>
      <card-info></card-info>
    </modal>
  </div>
</template>

<script>
  import vueCustomScrollbar from 'vue-custom-scrollbar'
  import CardInfo from '../components/modals/CardInfo'
  import Security from '../components/modals/Security'

  export default {
    components: {
      vueCustomScrollbar, CardInfo, Security
    },
    data() {
      return {

        settings: {
          maxScrollbarLength: 60
        },
        card: {
          card_id: 1,
          places: 32,
          card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
          price: 2500,
          occupied_places: 20,
          year: 2019,
          player_name: 'Jeff Carter',
          ovr: 94,
          shop_id: null

        },
        platform: 1,//1 - xbox, 2 - ps4, 3 - pc


        places: [
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 2,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          },
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 6,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          },
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 10,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          },
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 12,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          },
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 13,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          },
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 14,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          },
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 17,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          },
          {
            user_id: 1,
            name: 'Stefan J',
            date_pick: '11.04.2019',
            time_pick: '15:35:55',
            place_id: 18,
            photo: 'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
            vk_link: 'http://vk.com/id1'
          }

        ]


      }
    },
    computed: {
      cssProps() {
        return {
          '--line-width': (this.card.occupied_places / this.card.places) * 100 + "%",
        }
      },
    },

    methods: {
      startAnim() {
        //lottery-animation

        var lotery = document.querySelectorAll(".lotery")[0];
        lotery.classList.add("lottery-animation");
        alert("test");
      },
      showModal(name) {
        this.$modal.show(name)
      },
      hideModal(name) {
        this.$modal.hide(name)
      },
      toClipboard() {
        let currentUrl = window.location.host + window.location.pathname;
        this.$copyText(currentUrl);
        this.$notify({
          group: 'main',
          type: 'error',
          title: 'Копирование ссылки',
          text: `Ссылка на текущую игру успешно скопирована!`
        })
      },
      getPlatform() {
        switch (this.platform) {
          default:
          case 1:
            return "/img/xbox-icon.png";
          case 2:
            return "/img/ps4-icon.png";
          case 3:
            return "/img/pc-icon.png";
        }
      },
      clickFreeSlot() {
        alert("FreeSlot")
      },
      clickUserSlot() {
        alert("EmptySlot")
      },
      prepareSlots() {
        var tmp = [];
        for (var i = 0; i < this.card.places; i++) {
          var finde = false;
          for (var u in this.places) {
            if (i == this.places[u].place_id) {
              tmp.push(this.places[u]);
              finde = true;
              break;
            }
          }

          if (!finde) {
            tmp.push(i + 1)
          }

        }
        console.log(tmp);
        return tmp;
      },

      prepareUrl: function (template) {
        return template.replace(/\/assets/gi, "https://hutdb.net/assets");
      },
      scrollHanle(evt) {
        console.log(evt)
      }
    }
  }

</script>

<style lang="scss">
  @import "~/fonts.scss";
  @import "~/lottery.scss";

</style>
