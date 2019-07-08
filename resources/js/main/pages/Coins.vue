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
                <button class="button-dark inc">-</button>
                <input class="input-light inc" type="text">
                <button class="button-dark dec">+</button>
            </div>
            <div class="row second-row">
                <button class="button-light change">50k</button>
                <button class="button-light change">100k</button>
                <button class="button-light change">250k</button>
                <button class="button-light change">500k</button>
                <button class="button-light change">1M</button>
            </div>
        </div>

        <div class="price">
            <div class="main-price">
                <div class="price-text">цена: </div>
                <div>
                    <div class="price-amount">400.00 Pucks</div>
                    <div class="price-amount">400.00 рублей</div>
                </div>
            </div>
            <a class="how-to-buy">Как купить?</a>
        </div>

        <form class="player">
            <input class="input-dark" placeholder="Фамилия игрока" type="text">
            <input class="input-dark" placeholder="Лига и команда игрока" type="text">
            <input class="input-dark" placeholder="Рейтинг игрока" type="text">
            <input class="input-dark" placeholder="Начальная цена вашей карточки" type="text">
            <input class="input-dark" placeholder="Цена выкупа вашей карточки" type="text">
            <input class="input-dark" placeholder="Название вашей команды в HUT" type="text">
            <button class="button-yellow" type="submit">Купить</button>
        </form>
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
        margin-bottom: 20px;
    }
    h2 {
        text-align: center;
        text-transform: uppercase;
        color:white;
        font-size: 14px;
        width: 100%;
        margin-bottom: 17px;
    }
    .calc {
        background: white;
        padding: 28px 24px 28px 24px; 
        box-sizing: border-box;
        box-shadow: 3px 3px 2px 2px black;
        width:600px;
        height: 140px;
        border-radius: 5px;
    }
    .row{
        display:flex;
        justify-content: space-between;
    }
    .button-dark{
        width: 40px;
        height: 40px;
        background: #404040;
        color: white;
        border-radius: 5px;
        font-weight: bold;
        font-size: 30px;
        padding-bottom: 10px;
    }
    .input-light{
        color: #404040;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        width: 400px;
        height: 40px;
        font-weight: bold;
        text-align: center;
        font-size: 16px;
    }
    .button-light{
        color: #404040;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        width: 75px;
        height: 40px;
        font-weight: bold;
        font-size: 16px;
    }
    .second-row{
        padding: 0 76px 0 76px;
        margin-top: 10px; 
    }
    .price{
        display:flex;
        justify-content: space-between;
        margin-top: 20px;
        padding-left: 210px;
        width: 600px;
        border-bottom: 1px solid white;
        padding-bottom: 15px;
    }
    .main-price{
        display:flex;
    }
    .price-text{
        text-transform: uppercase;
        color:white;
        font-weight: bold;
        font-size: 16px;
        margin-right: 10px;
    }
    .price-amount{
        color:white;
        font-weight: bold;
        font-size: 16px;
    }
    .how-to-buy{
        font-weight: bold;
        color:#ffff00;
        border-bottom: 2px dashed #ffff00;
        align-self: flex-start;
    }
    .player{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 25px;
    }
    .input-dark{
        border: 2px solid #ffff00;
        background: #404040;
        color: white;
        width: 600px;
        height: 40px;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 7px;
    }
    .button-yellow{
        width: 150px;
        height: 40px;
        background-color: #ffff00;
        color: #404040;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 13px;
    }
</style>