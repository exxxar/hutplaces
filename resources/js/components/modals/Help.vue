<template>
  <div class="modal-body help-modal">
    <h1>Помощь и обратная связь</h1>
    <div class="input-group">
      <label>Тема сообщение</label>
      <input type="text">

    </div>
    <div class="input-group">
      <label>Email</label>
      <input type="email">
    </div>

    <div class="input-group">
      <label>Сообщение</label>
      <textarea placeholder="Введите ваше сообщение"></textarea>
    </div>
    <div class="input-group">
      <div class="btn btn-yellow full">Задать вопрос</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'faq',
  props: ['show'],
  methods: {}
}
</script>
<style>

</style>
