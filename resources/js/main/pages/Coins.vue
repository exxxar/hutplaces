<template>
    <div class="coins-section">

        <div class="switchers">
            <toggle :check="console"
                    :id="'sw-console'"
                    v-on:check="checkConsole($event)"
                    :labelon="'XBOX'"
                    :labeloff="'PS4'"
                    :width="148"></toggle>
            <toggle :check="year"
                    :id="'sw-year'"
                    v-on:check="checkYear($event)"
                    :labelon="'2019'"
                    :labeloff="'2020'"
                    :width="140"></toggle>
            <toggle :check="currency"
                    :id="'sw-currency'"
                    v-on:check="checkCurrency($event)"
                    :labelon="'PUCKS'"
                    :labeloff="'РУБЛИ'"
                    :width="160"></toggle>
        </div>
        <h2>{{$lang.messages.coins_h2}}</h2>
        <div class="calc">
            <div class="row">
                <button class="inc">-</button>
                <input type="text">
                <button class="dec">+</button>
            </div>
            <div class="row">
                <button class="change">50k</button>
                <button class="change">100k</button>
                <button class="change">250k</button>
                <button class="change">500k</button>
                <button class="change">1M</button>
            </div>
        </div>


    </div>
</template>

<script>

    import Toggle from '../components/Toggle.vue'

    export default {
        data(){
          return {
              console:true,
              year:false,
              currency:true
          }
        },
        methods:{
            checkConsole: function (event) {
                console.log(event);
                this.console = event;

            },
            checkYear: function (event) {
                console.log(event);
                this.year = event;
            },
            checkCurrency: function (event) {
                console.log(event);
                this.currency = event;
            },
        },
        components: {
            Toggle
        }
    }
</script>

<style lang="scss">
    .coins-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
    }
    .switchers {
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        width:600px;
    }
    h2 {
        text-align: center;
        text-transform: uppercase;
        color:white;
    }
    .calc {
        background: white;
        padding:20px;
        box-sizing: border-box;
        box-shadow: 3px 3px 2px 2px black;
        width:600px;
    }
</style>