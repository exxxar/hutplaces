<template>
    <div class="modal-body" v-if="game">
        <h1>ИНФОРМАЦИЯ О КАРТОЧКЕ</h1>
        <p>X-BOX</p>
        <p>Цена карточки: {{game.base_price}} Pucks</p>
        <p>Цена ставки: {{getPlacePrice()}} Pucks</p>
        <ul class="history">
            <li v-for="place in game.place_list">{{place.user.name}} занял место {{place.place_number}} в {{place.created_at}}</li>
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
