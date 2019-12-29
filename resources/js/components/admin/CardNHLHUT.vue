<template>
    <div class="modal-body card-modal" v-html="card">
    </div>
</template>
<script>
    export default {
        props: ["card"],
        mounted(){
            console.log("activate_Card=",this.card)
        }

    }
</script>

<style lang="scss">
#player_stats_page {
    width: 100%;

    #toggle_synergies,
    #player_header {
        color:white;
        text-transform:uppercase;
        text-align:center;
        font-weight:800;
    }
    table {
        width:100%;
        tr {
            td {
                color:white;
                text-transform: uppercase;
                padding: 0;
            }
        }
    }

    #card_art {
        width:240px;

    }

    .clear.center {
        display:none;
    }
    .order_card_syns,
    #other_cards {
        color:white;
        text-transform:uppercase;
        text-align:center;
    }
    .other_card_container {
        width:100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        img {
            width:240px;
        }
    }
}
</style>
