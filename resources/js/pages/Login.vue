<template>
  <div>


    <div class="form">
      <h1>Sign In</h1>
      <div class="input-group">
        <label for="username">Email</label>
        <input type="text" name="username" autocomplete="off" placeholder="Введите вашу почту" v-model="username">
      </div>

      <div class="input-group">
        <label for="password">Password</label>

        <input type="password" name="password" autocomplete="off" placeholder="Введите пароль" v-model="password">

      </div>
      <div class="input-group buttons">
        <button @click="login()" class="btn btn-yellow">Sign In</button>
        <router-link tag="button" :to="{ name: 'Register' }" class="btn btn-other">Sign Up</router-link>

      </div>

      <hr>
      <ul class="social">
        <li><a href="/social-auth/vkontakte"><i class="fab fa-vk"></i></a></li>
        <li><a href="/social-auth/facebook"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
      </ul>
      <a href="" class="rules">Правила использования продукта</a>
    </div>





  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },

    methods: {
      login() {
        let data = {
          username: this.username,
          password: this.password,
            _token:axios.defaults.headers.common['X-CSRF-TOKEN']
        };

        console.log(data);
      console.log(axios.defaults.headers.common['X-CSRF-TOKEN']);

          axios.post('/login', data)
              .then(({data}) => {
                  auth.login(data.token, data.user);

                  this.$router.push('/cabinet');
              })
              .catch(({response}) => {
                  alert(response.data.message);
              });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/auth.scss";
</style>