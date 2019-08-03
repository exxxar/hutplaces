<template>

  <div class="modal-body">
    <div class="modal-logo"><img src="/img/money-card-icon-1.png" alt=""></div>
    <h1>Введите сумму пополнения</h1>
    <div class="input-group">
      <label for="input-value">Сумма пополнения</label>
      <input type="number" autocomplete="off" min="0" id="input-value" value="0">
    </div>

    <div class="input-group">
      <label for="select-payment">Платежная система</label>
      <select id="select-payment">
        <option value="">Яндекс.Деньги</option>
        <option value="">WebMoney</option>
        <option value="">PAYPAL</option>
      </select>
    </div>

    <div class="input-group">

    <button class="btn btn-yellow full">Пополнить</button>

    </div>
  </div>

</template>
<script>

  export default {
    name: 'payment',
    methods: {}
  }
</script>
<style>

</style>
