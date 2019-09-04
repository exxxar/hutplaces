<template>
    <div class="modal-body" v-if="game">
        <h1>{{$lang.modals.card_info.title}}</h1>
        <p>X-BOX</p>
        <p>{{$lang.modals.card_info.base_price}} {{game.base_price}} {{$lang.modals.card_info.money}}</p>
        <p>{{$lang.modals.card_info.place_price}}{{getPlacePrice()}} {{$lang.modals.card_info.money}}</p>
        <ul class="history">
            <li v-for="place in game.place_list">
                {{place.user.name}} {{$lang.modals.card_info.pick_place}} {{place.place_number}} [ {{place.created_at}} ]
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'faq',
        props: ['game'],
        mounted(){
          console.log(this.game);
        },
        methods: {
            getPlacePrice(){
                return Math.ceil(this.game.base_price / this.game.places);
            }
        }
    }
</script>
<style lang="scss">
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
            color: #b3b1b1;
            font-size: 16px;
            p {
                margin-bottom: 5px;
                strong {
                    color: white;
                }
            }

        }
    }
</style>
