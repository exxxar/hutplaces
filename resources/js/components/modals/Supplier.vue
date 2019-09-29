<template>
  <div class="modal-body supplier-modal">
    <h1>Стать партнером</h1>
    <p>
      Каждый участник игрового портала <strong>hutplace</strong> может стать нашим партнером и продавать свои игровые предметы другим игрокам. Для того, что бы ваши карты оказались на аукционе, вам необходимо написать нашему оператору в чат или на почту <a href="mailto:support@hutplace.ru" target="_blank">support@hutplace.ru</a>. Данная опция требует
      предварительной модерации с нашей стороны, необходимой для отсеивания недобросовестных продавцов. После проведения проверки и получения необходимых инструкций вы получаете доступ к аукциону.
    </p>


    <div class="input-group">
      <label>Email</label>
      <input type="email">
    </div>

    <div class="input-group">
      <label>Сообщение</label>
      <textarea placeholder="Введите ваше сообщение"></textarea>
    </div>
    <div class="input-group">
      <div class="btn btn-yellow full">Стать партнером</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'supplier',
  props: ['show'],
  methods: {}
}
</script>
<style>

</style>
