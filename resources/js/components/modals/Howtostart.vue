<template>

  <div class="modal-body how-to-start-modal">
    <p>Для принятия участия в розыгрыше,<br>
      необходимо авторизоваться через ВК</p>
    <div class="modal-logo"><img v-lazy="'/img/vk-login-icon.png'" alt=""></div>
    <hr>
    <p>Перед участием в игре незабудьте<br>
      пополнить свой счет!</p>
    <p> В игре собственная валюта - <span>Pucks</span>.</p>
    <div class="modal-logo"><img v-lazy="'/img/money-icon-1.png'" alt=""></div>
    <hr>
    <p>На балансе должно быть досаточное <br>
      количество средств.</p>
    <h2>1 <span>Pucks</span> = 1 Руб</h2>
    <hr>
    <p>Честность выбора победителя можно <br>
      проверить на сайте <span>random.org</span></p>
    <div class="modal-logo"><img v-lazy="'/img/security-icon-1.png'" alt=""></div>
    <hr>
    <p>Быстрая доставка выигрыша<br>
      в течении 24-х часов</p>
    <div class="modal-logo"><img v-lazy="'/img/time-icon-1.png'" alt=""></div>
  </div>

</template>
<script>
  export default {
    name: 'how-to-start',
  }
</script>
<style>

</style>
