<template>
    <div class="modal-body card-modal">
        <div class="ncard">
            <div class="backplate" >
                <div class="background silver"></div>
                <div class="silver_tag tag top">
                    <div class="cardtype">{{card.card}}</div>
                    <div class="overall">{{card.ovr}}</div>
                </div>
                <div class="headshot top"
                     style="background-image: url('/img/head.png');"></div>

                <div class="name">
                    <div class="firstname">{{card.player.split(' ')[0]}}</div>
                    <div class="lastname">{{card.player.split(' ')[1]}}</div>
                </div>
                <div class="info">
                    <div class="position">{{card.position}}</div>
                    <div class="bullet"></div>
                    <div class="type">{{card.player_type}}</div>
                </div>
                <div class="attributes attributes-right">
                    <div class="attr-name">SKT</div>
                    <div class="attr-name">SHT</div>
                    <div class="attr-name">HND</div>
                    <div class="attr-name">CHK</div>
                    <div class="attr-name">DEF</div>
                    <div class="attr-value">{{card.skt_hgh}}</div>
                    <div class="attr-value">{{card.sht_low}}</div>
                    <div class="attr-value">{{card.hnd_qck}}</div>
                    <div class="attr-value">{{card.chk}}</div>
                    <div class="attr-value">{{card.def_rbc}}</div>
                </div>
                <div class="team-right">{{card.team}}</div>

            </div>
        </div>
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

</style>