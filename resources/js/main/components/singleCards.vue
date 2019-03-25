
<template>
    <div id="nhl-single-card-list">
        <div class="filters">
            <p>Сортировать по:</p>
            <label for="opt1" class="radio">
                <input type="radio" name="filter" id="opt1"   value="places" v-model="sort" class="hidden"/>
                <span class="label"></span>количеству мест
            </label>

            <label for="opt2" class="radio">
                <input type="radio" name="filter" id="opt2" value="price" v-model="sort" class="hidden"/>
                <span class="label"></span>стоимости
            </label>

            <label for="opt3" class="radio">
                <input type="radio" name="filter" id="opt3"  value="occupied" v-model="sort" class="hidden"/>
                <span class="label"></span>заполненности
            </label>
        </div>

        <div class="cards">
            <div class="card" v-for="c in cards" >
                <div class="card-wrapper" >
                    <div v-html="prepareUrl(c.card_data)" class="card-data" @click="lotteryOpen(c.card_id)" ></div>
                    <div class="price">{{c.price}} Pucks</div>
                    <div class="places">{{c.places}}</div>
                </div>
                <div class="progress">
                    <div class="line" :style="lineWidth(c.occupied_places,c.places)"></div>
                    <div class="info">{{c.occupied_places}}/{{c.places}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {

        data(){
            return {
                sort:'price',
                cards: [
                    {
                        card_id:1,
                        places:25,
                        card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
                        price:250,
                        occupied_places:20,
                        player_name:'Jeff Carter',
                        ovr:94
                    },
                    {
                        card_id:1,
                        places:25,
                        card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
                        price:25,
                        occupied_places:10,
                        player_name:'Jeff Carter',
                        ovr:94
                    },
                    {
                        card_id:1,
                        places:25,
                        card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
                        price:25,
                        occupied_places:18,
                        player_name:'Jeff Carter',
                        ovr:94
                    },
                    {
                        card_id:1,
                        places:25,
                        card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
                        price:25,
                        occupied_places:11,
                        player_name:'Jeff Carter',
                        ovr:94
                    },{
                        card_id:1,
                        places:25,
                        card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
                        price:25,
                        occupied_places:12,
                        player_name:'Jeff Carter',
                        ovr:94
                    },{
                        card_id:1,
                        places:25,
                        card_data: "<div class=\"ncard toty-ol\"> <div class=\"backplate\" style=\"background-image: url(/assets/img/cards/19/toty/ygtoty/nhl/tor.png);\"> <div class=\"background toty\"></div> <div class=\"toty_tag tag top\"> <div class=\"cardtype\">OVR</div> <div class=\"overall\">99</div> </div> <div class=\"headshot toty-headshot top\" style=\"background-image: url('/assets/img/headshots/active/9810.png');\"></div> <div class=\"name\"> <div class=\"firstname\">MITCHELL</div> <div class=\"lastname\">MARNER</div> </div> <div class=\"info\"> <div class=\"position\">RW</div> <div class=\"bullet\"></div> <div class=\"type\">PLY</div> </div> <div class=\"attributes\"> <div class=\"attr-value\"> <div class=\"attr-name\">SKT</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">SHT</div> 97 </div> <div class=\"attr-value\"> <div class=\"attr-name\">HND</div> 99 </div> <div class=\"attr-value\"> <div class=\"attr-name\">CHK</div> 91 </div> <div class=\"attr-value\"> <div class=\"attr-name\">DEF</div> 96 </div> </div> <div class=\"team toty-team team-right\">Maple Leafs</div> <div class=\"logo toty-logo\" style=\"background-image: url('/assets/img/logos/nhl/tor.png');\"></div> </div> </div> ",
                        price:25,
                        occupied_places:14,
                        player_name:'Jeff Carter',
                        ovr:94
                    }
                ]
            }
                ;
        },
        methods: {
            prepareUrl:function (template) {
                return template.replace(/\/assets/gi, "https://hutdb.net/assets");
            },
            lineWidth:function (c1,c2) {
                return {
                    '--line-width': ((c1/c2)*100) + "%",
                }
            },
            lotteryOpen:function(cardId){
                this.$router.push({ name: 'Lottery', params: { id:cardId } });
            }
        }


    }
</script>

<style lang="scss">
    #nhl-single-card-list {
        display: grid;
        justify-items: center;
        padding: 0;
        .filters {
            display: flex;
            align-items: baseline;
            justify-content: flex-start;
            width: 100%;
            background-color: #393939;
            box-sizing: border-box;
            padding: 0px 10px;
            box-shadow: 2px 2px 9px -2px black;
            color: white;
        }
    }

    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        flex-wrap:wrap;
        .card {
            color: white;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 255px;
            .card-wrapper {
                padding: 5px;
                box-sizing: border-box;
                border: 1px white solid;
                box-shadow: 0px 0px 8px 1px white inset;
                position: relative;
                .card-data {
                    z-index: 0;
                }
                .price {
                    position:absolute;
                    right:0;
                    bottom:0;
                    padding: 10px 20px;
                    background:yellow;
                    color:#393939;
                    z-index: 11;
                    font-weight: 800;
                    font-size:14px;
                }

                .places {
                    position:absolute;
                    top:0;
                    left:0;
                    padding: 10px 20px;
                    background:yellow;
                    color:#393939;
                    z-index: 11;
                    font-weight: 800;
                    font-size:14px;
                }
            }

            .progress {
                width: 100%;
                height: 35px;
                /* padding: 0px; */
                margin-top: 5px;
                box-shadow: 0px 0px 3px 1px #0d0d0d;
                background-color: #393939;
                position: relative;
                .line {
                    height:100%;
                    background-color:#2d6a2d;
                    width:var(--line-width);
                    top:0;
                    left:0;
                    position:absolute;
                    z-index:1;
                }
                .info {
                    width:100%;
                    height:100%;
                    top:0;
                    left:0;
                    font-size:12px;
                    font-weight:600;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    z-index: 12;
                    position: relative;
                }
            }

        }
    }
    .radio {
        position: relative;
        cursor: pointer;
        line-height: 20px;
        font-size: 14px;
        margin: 15px;
    }
    .radio .label {
        position: relative;
        display: block;
        float: left;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        border: 2px solid #c8ccd4;
        border-radius: 100%;
        -webkit-tap-highlight-color: transparent;
    }
    .radio .label:after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: #ff0;
        transform: scale(0);
        transition: all 0.2s ease;
        opacity: 0.08;
        pointer-events: none;
    }
    .radio:hover .label:after {
        transform: scale(3.6);
    }
    input[type="radio"]:checked + .label {
        border-color: #ff0;
    }
    input[type="radio"]:checked + .label:after {
        transform: scale(1);
        transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
        opacity: 1;
    }

    .hidden {
        display: none;
    }
</style>