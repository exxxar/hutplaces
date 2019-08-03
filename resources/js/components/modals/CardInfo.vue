<template>
  <div class="modal-body">
    <h1>ИНФОРМАЦИЯ О КАРТОЧКЕ</h1>
    <p>X-BOX</p>
    <p>Цена карточки: 1000 Pucks</p>
    <p>Цена ставки: 120 Pucks</p>
    <ul class="history">

    </ul>
  </div>
</template>
<script>
  export default {
    name: 'faq',
    props: ['show'],
    methods: {}
  }
</script>
<style lang="scss">
  .history {
    width: 100%;
    padding: 10px;
    height: 195px;
    overflow-y: scroll;
    box-sizing: border-box;
    border: 1px white solid;
    box-shadow: 0px 0px 11px 0px white inset;
  li {
    list-style: none;
    color:#b3b1b1;
    font-size: 16px;
  p {
    margin-bottom:5px;
  strong {
    color:white;
  }
  }

  }
  }
</style>
