<template>
  <div id="register-form" class="modal-body">
    <div class="alert alert-danger" v-if="error && !success">
      <p>There was an error, unable to complete registration.</p>
    </div>
    <div class="alert alert-success" v-if="success">
      <p>Registration completed. You can now <router-link :to="{name:'login'}">sign in.</router-link></p>
    </div>

    <div class="modal-logo"><img src="/img/money-card-icon-1.png" alt=""></div>
    <h1>Регистрация нового пользователя</h1>

    <form @submit.prevent="register" v-if="!success" method="post" accept-charset="UTF-8">
      <div class="input-group" v-bind:class="{ 'has-error': error && errors.name }">
        <label for="name">Name</label>
        <input type="text"  autocomplete="false" id="name" class="form-control" v-model="name" placeholder="Enter Your name" required>
        <span class="help-block" v-if="error && errors.name">{{ errors.name }}</span>
      </div>
      <div class="input-group" v-bind:class="{ 'has-error': error && errors.email }">
        <label for="email">E-mail</label>
        <input type="email"  autocomplete="false" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
        <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
      </div>
      <div class="input-group" v-bind:class="{ 'has-error': error && errors.password }">
        <label for="password">Password</label>
        <input type="password"  autocomplete="false" id="password" class="form-control" v-model="password" required>
        <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
      </div>

      <div class="input-group">

      <button type="submit"  @click="recaptcha" class="btn btn-yellow full">Submit</button>

      </div>
    </form>
  </div>
</template>
<script>


  export default {
    data(){
      return {
        name: '',
        email: '',
        password: '',
        error: false,
        errors: {},
        success: false
      };
    },
    methods: {
      recaptcha() {

      },
      register(){
        this.$recaptcha('login').then((token) => {
          console.log(token) // Will print the token
        })

        /*var app = this
        this.$auth.register({
          data: {
            name: app.name,
            email: app.email,
            password: app.password
          },
          success: function () {
            app.success = true
          },
          error: function (resp) {
            app.error = true;
            app.errors = resp.response.data.errors;
          },
          redirect: null
        });*/
      }
    },

  }
</script>


<style lang="scss" scoped="scoped">

</style>
