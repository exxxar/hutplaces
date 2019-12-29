<template>
    <div class="modal-body card-info-modal" v-if="game">
        <h1 v-html="$lang.modals.card_info.title"></h1>
        <p>
            <i v-if="game.console_type==1" class="fab fa-playstation"></i>
            <i v-if="game.console_type==0" class="fab fa-xbox"></i>
        </p>

        <div class="card" v-if="game.lot_type=='2'">
            <card :card="game.lot.card"></card>
        </div>

        <p>{{$lang.modals.card_info.base_price}} <strong>{{game.base_price}}</strong> {{$lang.modals.card_info.money}}
        </p>
        <p>{{$lang.modals.card_info.place_price}} <strong>{{getPlacePrice()}}</strong> {{$lang.modals.card_info.money}}
        </p>

        <div v-for="place in game.place_list" class="history-item">
            <p>{{place.user.name}} {{$lang.modals.card_info.pick_place}} <strong>{{place.place_number + 1}}</strong>
                [ {{place.created_at}} ]
            </p>
        </div>

    </div>
</template>
<script>

    import Card from '@/components/admin/CardNHLHUT.vue'

    export default {
        name: 'faq',
        props: ['game'],
        methods: {
            getPlacePrice() {
                return Math.ceil(this.game.base_price / this.game.places);
            }
        },
        components: {
            Card
        },
    }
</script>
<style lang="scss">

</style>
