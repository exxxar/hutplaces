<template>
  <div class="modal-body" id="login-form">
    <div class="alert alert-danger" v-if="error">
      <p>There was an error, unable to sign in with those credentials.</p>
    </div>
    <div class="modal-logo"><img src="/img/money-card-icon-1.png" alt=""></div>
    <h1>Авторизация пользователя</h1>
    <form  @submit.prevent="login" method="post">
      <div class="input-group">
        <label for="email">E-mail</label>
        <input autocomplete="false" type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input autocomplete="false" type="password" id="password" class="form-control" placeholder="Password" v-model="password" required>
      </div>
      <div class="input-group">
        <button type="submit" class="btn btn-yellow full">Sign in</button>
      </div>

    </form>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        email: null,
        password: null,
        error: false
      }
    },
    methods: {
      login(){
        var app = this
        this.$auth.login({
          params: {
            email: app.email,
            password: app.password
          },
          success: function () {},
          error: function () {},
          rememberMe: true,
          redirect: '/cabinet',
          fetchUser: true,
        });
      },
    }
  }
</script>

<style lang="scss" scoped="scoped">

</style>
