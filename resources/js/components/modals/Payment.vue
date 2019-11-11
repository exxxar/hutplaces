<template>

    <div class="modal-body recharge-modal">
        <div class="modal-logo"><img v-lazy="'/img/money-card-icon-1.png'" alt=""></div>
        <h1>Введите сумму пополнения</h1>
        <div class="input-group">
            <label for="input-value">Сумма пополнения</label>
            <input type="number" autocomplete="off" min="1" id="input-value" v-model="money">
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
        data() {
            return {
                authenticated: false,
                payment_system: "test",
                money: ''
            }
        },
        created(){
            this.$store.dispatch('getCurrentUser')
        },
        watch: {
            getAuthenticated(newValue, oldValue) {
                this.authenticated = newValue != null;
            },
        },
        computed: {
            getAuthenticated() {
                return this.$store.getters.USER;
            },

        },
        methods: {
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            requestPayment() {

                if (!this.authenticated) {
                    this.message("Ошибка", `Для пополнения счета авторизуйтесь!`, "warn");
                    this.$emit('close');
                    return
                }

                axios
                    .post(`/payment/${this.payment_system}`, {
                        money: this.money
                    })
                    .then((response) => {
                        Event.$emit("updateUserProfile");
                        Event.$emit("updateTransactions");

                        var tmp = response.data;
                        this.message("Успех!", `Деньги в размере ${tmp.money} ${tmp.currency} успешно добавлены!`, "warn");


                    })
                    .catch(function (error) {

                    });
                this.$emit("close");
            }

        }
    }
</script>
<style>

</style>
