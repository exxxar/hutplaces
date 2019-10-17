<template>
    <div>

        <div class="form">
            <h1>{{$lang.auth.sign_up}}</h1>
            <div class="input-group">
                <label>{{$lang.auth.name}}</label>
                <input type="text" autocomplete="off" :placeholder="$lang.auth.enter_name" v-model="name">
            </div>

            <div class="input-group">
                <label>{{$lang.auth.email}}</label>
                <input type="email" autocomplete="off" :placeholder="$lang.auth.enter_email" v-model="email">
            </div>

            <div class="input-group">
                <label>{{$lang.auth.password}}</label>
                <input type="password" autocomplete="off" :placeholder="$lang.auth.enter_password" v-model="password">

            </div>

            <div class="input-group">
                <label>{{$lang.auth.confirm_password}}</label>
                <input type="password" autocomplete="off" :placeholder="$lang.auth.confirm_password"
                       v-model="confirm_password">

            </div>

            <div class="input-group buttons">
                <button @click="register()" class="btn btn-yellow">{{$lang.auth.sign_up}}</button>
                <router-link tag="a" :to="{ name: 'Login' }" class="link">{{$lang.auth.sign_in}}</router-link>

            </div>
            <hr>
            <ul class="social">
                <li><a href="/social-auth/vkontakte"><i class="fab fa-vk"></i></a></li>
                <li><a href="/social-auth/facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
            </ul>
            <div class="input-group">
                <a href="" class="rules">{{$lang.auth.product_terms_of_use}}</a>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                confirm_password: '',
                name: '',
            };
        },

        methods: {
            register() {
                if (this.password != this.confirm_password) {
                    Event.$emit("message", {
                        title: 'Регистрация',
                        message: 'Пароли не совпадают',
                        type: 'warn'
                    });

                    return;
                }

                this.$loading(true)
                this.$store.dispatch('registerUser', {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                }).then(() => {

                    this.$store.dispatch('loginUser', {
                        username: this.email,
                        password: this.password,
                    }).then(() => {
                        this.$router.push({path: '/cabinet'})
                        Event.$emit("updateUserProfile")

                        this.$loading(false)
                    }).catch(() => {
                        this.$loading(false)
                    })

                }).catch(() => {
                    this.$loading(false)
                })


            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "~/auth.scss";

    .form {
        padding-bottom: 150px;
    }
</style>