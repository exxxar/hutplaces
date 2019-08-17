<template>

    <div class="modal-body promo-modal">
      <div class="modal-logo"><img v-lazy="'/img/promo-logo.png'" alt=""></div>
      <h1>Введите действительный промокод</h1>
      <div class="input-group">
        <label for="input-promo">Ваш промокод</label>
        <input type="text" autocomplete="off" id="input-promo" maxlength="20">
      </div>

      <div class="input-group">
      <button class="btn btn-yellow full">Активировать</button>
      </div>
    </div>

</template>
<script>

export default {
  name: 'promo',
  methods: {}

}
</script>
<style>

</style>
