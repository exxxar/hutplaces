<template>
    <div class="modal-body" v-if="game">
        <h1>{{$lang.modals.card_info.title}}</h1>
        <p>
            <i v-if="game.console_type==1" class="fab fa-playstation"></i>
            <i v-if="game.console_type==0" class="fab fa-xbox"></i>
        </p>
        <p>{{$lang.modals.card_info.base_price}} {{game.base_price}} {{$lang.modals.card_info.money}}</p>
        <p>{{$lang.modals.card_info.place_price}}{{getPlacePrice()}} {{$lang.modals.card_info.money}}</p>

            <div v-for="place in game.place_list" class="history-item">
                <p>{{place.user.name}} {{$lang.modals.card_info.pick_place}} {{place.place_number}} [ {{place.created_at}} ]
                </p>
            </div>

    </div>
</template>
<script>
    export default {
        name: 'faq',
        props: ['game'],

        methods: {
            getPlacePrice(){
                return Math.ceil(this.game.base_price / this.game.places);
            }
        }
    }
</script>
<style lang="scss">

        .history-item {
            color: #b3b1b1;
            font-size: 16px;
            p {
                margin-bottom: 5px;
                strong {
                    color: white;
                }
            }

        }

</style>
