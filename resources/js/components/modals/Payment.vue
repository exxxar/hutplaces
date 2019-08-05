<template>

  <div class="modal-body">
    <div class="modal-logo"><img src="/img/money-card-icon-1.png" alt=""></div>
    <h1>Введите сумму пополнения</h1>
    <div class="input-group">
      <label for="input-value">Сумма пополнения</label>
      <input type="number" autocomplete="off" min="0" id="input-value" v-model="money" @focus="money==0?'':money">
    </div>

    <div class="input-group">
      <label for="select-payment">Платежная система</label>
      <select id="select-payment" v-model="payment_system">
        <option value="test">Test.Деньги</option>
        <option value="yandex">Яндекс.Деньги</option>
        <option value="webmoney">WebMoney</option>
        <option value="paypal">PAYPAL</option>
      </select>
    </div>

    <div class="input-group">

    <button class="btn btn-yellow full" @click="requestPayment()">Пополнить</button>

    </div>
  </div>

</template>
<script>

  export default {
    name: 'payment',
      data(){
        return {
            payment_system:"test",
            money:0
        }
      },
    methods: {
        message(title,message,type){
            this.$notify({
                group: 'main',
                type: type,
                title: title,
                text: message
            })
        },
        requestPayment(){

            var message = this.message;


            if (!auth.check()) {
                message("Ошибка", `Для пополнения счета авторизуйтесь!`, "warn");
                this.$emit('hide',"payment");
                return
            }
            axios.post('/payment/testPaymanet', {
                payment_system: this.selected,
                money: this.money
            })
                .then(function (response) {
                    var tmp = response.data;
                    console.log(tmp);

                  message("Успех!",`Деньги в размере ${tmp.money} ${tmp.currency} успешно добавлены!`,"warn");



                })
                .catch(function (error) {

                });

            this.$emit('hide',"payment");
        }

    }
  }
</script>
<style>

</style>
