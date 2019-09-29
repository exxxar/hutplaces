<template>
  <div class="modal-body partner-modal">
    <h1>Стать партнером</h1>

    <div class="input-group">
      <label>Email</label>
      <input type="email">
    </div>
    
    <div class="input-group">
      <label>Заголовок</label>
      <textarea placeholder="Сообщение"></textarea>
    </div>
    

    <div class="input-group">
      <div class="btn btn-yellow full">Отправить запрос</div>
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
