<template>
    <div class="lottery-section">
        <div class="left-side">
            <div class="card" v-html="prepareUrl(card.card_data)"></div>
            <div class="block-info">
                <div class="console">
                    <img :src="getPlatform()" alt="">
                </div>
                <h4>{{card.player_name}}</h4>
                <p class="year">{{card.year}} год</p>
                <p class="price"><strong>{{card.price}}</strong> Pucks</p>
            </div>
            <div class="buttons">
                <div class="share">
                    <div class="line" :style="cssProps"></div>
                    <div class="text">Поделиться</div>
                </div>
                <button class="random_place">Случайное место
                </button>
                <button class="buy">Купить в магазине</button>
            </div>
        </div>
        <div class="right-side" >
            <ul class="lotery">
                <li class="slot" v-for="p in prepareSlots()">
                    <div v-if="typeof(p) === 'object'"><img @click="clickUserSlot(p)" :src="p.photo" alt=""></div>
                    <div  v-else> <p @click="clickFreeSlot(p-1)" class="number">{{p}}</p></div>

                </li>
            </ul>

            <vue-custom-scrollbar class="history"  :settings="settings" @ps-scroll-y="scrollHanle">
                <li v-for="u in places"><p><img src="">{{u.date_pick}} в {{u.time_pick}} <strong>{{u.name}}</strong> занял место #{{u.place_id}}</p></li>
            </vue-custom-scrollbar>



        </div>

    </div>
</template>



<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'

    export default {
        components: {
            vueCustomScrollbar
        },
        data(){
            return {

                settings: {
                    maxScrollbarLength: 60
                },
                card: {
                    card_id:1,
                    places:25,
                    card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
                    price:2500,
                    occupied_places:20,
                    year:2019,
                    player_name:'Jeff Carter',
                    ovr:94
                },
                platform:1,//1 - xbox, 2 - ps4, 3 - pc


                places: [
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:2,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    },
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:6,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    },
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:10,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    },
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:12,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    },
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:13,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    },
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:14,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    },
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:17,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    },
                    {
                        user_id:1,
                        name:'Stefan J',
                        date_pick:'11.04.2019',
                        time_pick:'15:35:55',
                        place_id:18,
                        photo:'https://pp.userapi.com/c845021/v845021943/147293/DwHXe3mC_9I.jpg?ava=1',
                        vk_link:'http://vk.com/id1'
                    }

                ]



            }
        },
        computed: {
            cssProps(){
                return {
                    '--line-width':(this.card.occupied_places/this.card.places)*100+"%",
                }
            },
        },

        methods:{

            getPlatform(){
              switch(this.platform){
                  default:
                  case 1: return "/img/xbox-icon.png";
                  case 2: return "/img/ps4-icon.png";
                  case 3: return "/img/pc-icon.png";
              }
            },
            clickFreeSlot(){
              alert("FreeSlot")
            },
            clickUserSlot(){
                alert("EmptySlot")
            },
            prepareSlots(){
              var tmp = [];
              for(var i=0;i<this.card.places;i++){
                  var finde = false;
                  for(var u in this.places){
                      if (i==this.places[u].place_id) {
                          tmp.push(this.places[u]);
                          finde = true;
                          break;
                      }
                  }

                  if (!finde){
                      tmp.push(i+1)
                  }

              }
              console.log(tmp);
                return tmp;
            },

            prepareUrl:function (template) {
                return template.replace(/\/assets/gi, "https://hutdb.net/assets");
            },
            scrollHanle(evt) {
                console.log(evt)
            }
        }
    }

</script>

<style lang="scss">
    h1 {
        color:red;
    }

    .lottery-section {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: minmax(260px, 900px);
        grid-template-areas:
                "card card card space lot lot lot lot lot lot lot lot";
        width: 100%;

        .left-side {
            grid-area: card;
            position: fixed;
            .card {
                width: 100%;
                box-sizing: border-box;
                padding: 10px;
                border: 1px white solid;
                box-shadow: 0px 0px 11px 1px white inset;
            }

            .block-info {
                width: 100%;
                position: relative;
                background-color: #393939;
                margin-top: 10px;
                box-sizing: border-box;
                padding: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                box-shadow: 0px 0px 2px 0px black;
                .console {
                    position: absolute;
                    right: -35px;
                    top: -35px;
                    width: 70px;
                    height: 70px;
                    border: 4px yellow solid;
                    padding: 10px;
                    background-color: #393939af;
                    box-sizing: border-box;
                    border-radius: 50%;
                    z-index: 12;
                    img {
                        width:100%;
                        height:100%;
                    }
                }

                h4 {
                    color: white;
                    text-align: center;
                    width: 100%;
                    font-size: 20px;
                    font-weight: 100;
                }

                p.year {
                    width: 100%;
                    text-align: center;
                    /* line-height: 202%; */
                    font-size: 14px;
                    padding-top: 10px;
                    color: #646464;
                }

                p.price {
                    width: 100%;
                    text-align: center;
                    font-size: 18px;
                    color: #646464;
                    /* padding: 0; */
                    line-height: 0;
                    strong {
                        color: yellow;
                    }
                }
            }

            .buttons {
                width:100%;
                .share {
                    height:42px;
                    background-color:#74b65f;
                    position: relative;
                    margin-top:10px;
                    cursor:pointer;
                    .line {
                        position: absolute;
                        top:0;
                        left:0;
                        height:100%;
                        width:var(--line-width);
                        background-color: #5fa252;
                    }
                    .text {
                        width:100%;
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height:100%;
                        color:white;
                        font-weight:100;
                        font-size:18px;
                    }
                }

                button.random_place {
                    height: 42px;
                    background-color: #6ac0f3;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 100;
                    font-size: 18px;
                    width: 100%;
                }
                button.buy {
                    height: 42px;
                    background-color: #d86a43;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 100;
                    font-size: 18px;
                    width: 100%;
                }
            }

        }

        .right-side {
            grid-area: lot;

            .lotery {
                padding:0;
                .slot {
                    width:135px;
                    height:135px;
                    border:1px white solid;
                    margin-bottom:10px;
                    margin-right:16px;
                    display: inline-block;
                    box-shadow: 0px 0px 11px 0px white inset;
                    position: relative;
                    background-color:#393939af;

                    &:nth-of-type(5n) {
                        margin-right: 0px;
                    }
                    div {
                        height:inherit;
                        width: inherit;
                        position: absolute;
                        top:0;
                        left:0;
                        padding: 10px;
                        img {
                            width:100%;
                            height: 100%;
                        }
                    }

                    .number {
                        width: 100%;
                        height: 100%;
                        background-color: #50504f;
                        /* padding: 10px; */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 24px;
                        color: white;
                        border-radius: 50%
                    }

                }
            }

            .history {
                width: 100%;
                padding: 10px;
                height: 195px;
                overflow-y: scroll;
                box-sizing: border-box;
                border: 1px white solid;
                box-shadow: 0px 0px 11px 0px white inset;
                li {
                    list-style: none;
                    color:#b3b1b1;
                    font-size: 16px;
                    p {
                        margin-bottom:5px;
                        strong {
                            color:white;
                        }
                    }

                }
            }

        }

    }
</style>
