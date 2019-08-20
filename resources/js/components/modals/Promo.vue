<template>

    <div class="modal-body promo-modal">
      <div class="modal-logo"><img v-lazy="'/img/promo-logo.png'" alt=""></div>
      <h1>Введите действительный промокод</h1>
      <div class="input-group">
        <label>Ваш промокод</label>
        <input type="text" autocomplete="off" v-model="promo" maxlength="8">
      </div>

      <div class="input-group">
      <button class="btn btn-yellow full" @click="doRequest()">Активировать</button>
      </div>
    </div>

</template>
<script>

export default {
  name: 'promo',
    data(){
      return {
          promo:""
      }
    },
    mounted(){
        this.doRequest();
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
      doRequest(){
          if (this.promo.length!=8)
          {
              this.message("Ввод промокода","А где промокод?","warn");
              return;
          }
          axios
              .post('/promo/activate',{
                  code:this.promo
              }).then(response => {
              console.log(response);
              this.message("Ввод промокода",response.data.message,"warn");
          });
      }
  }

}
</script>
<style>

</style>
