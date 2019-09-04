<template>
    <div>
        <div class="form">
            <h1>{{$lang.auth.sign_in}}</h1>
            <div class="input-group">
                <label>{{$lang.auth.email}}</label>
                <input type="text" name="username" autocomplete="off" :placeholder="$lang.auth.enter_your_mail"
                       v-model="username">
            </div>
            <div class="input-group">
                <label>{{$lang.auth.password}}</label>
                <input type="password" name="password" autocomplete="off" :placeholder="$lang.auth.enter_password"
                       v-model="password">
            </div>
            <div class="input-group buttons">
                <button @click="login()" class="btn btn-yellow">{{$lang.auth.sign_in}}</button>
                <router-link tag="button" :to="{ name: 'Register' }" class="btn btn-other">{{$lang.auth.sign_up}}
                </router-link>
            </div>
            <hr>
            <ul class="social">
                <li><a href="/social-auth/vkontakte"><i class="fab fa-vk"></i></a></li>
                <li><a href="/social-auth/facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
            </ul>
            <a href="" class="rules">{{$lang.auth.product_terms_of_use}}</a>
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
                this.$store.dispatch('loginUser', {
                    username: this.username,
                    password: this.password,
                }).then(() => {
                    this.$router.push({path: '/cabinet'})
                    Event.$emit("updateUserProfile")
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/auth.scss";
</style>