<template>
    <div>
        <form @submit.prevent="sendRequest" class="form">
            <h1>{{$lang.auth.sign_in}}</h1>
            <div class="input-group">
                <label>{{$lang.auth.email}}</label>
                <input type="text" name="username" autocomplete="off" :placeholder="$lang.auth.enter_your_mail"
                       v-model="username" required>
            </div>
            <div class="input-group">
                <label>{{$lang.auth.password}}</label>
                <input type="password" name="password" autocomplete="off" :placeholder="$lang.auth.enter_password"
                       v-model="password" required>
            </div>
            <div class="input-group buttons">
                <button type="submit" class="btn btn-yellow">{{$lang.auth.sign_in}}</button>
                <router-link tag="a" :to="{ name: 'Register' }" class="link">{{$lang.auth.sign_up}}
                </router-link>
            </div>
            <hr>
            <ul class="social">
                <li><a href="/social-auth/vkontakte"><i class="fab fa-vk"></i></a></li>
                <li><a href="/social-auth/facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
            </ul>
            <div class="input-group">
                <a href="rules" class="rules" @click="openRules()">{{$lang.auth.product_terms_of_use}}</a>
            </div>

        </form>


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
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: 'Авторизация',
                    text: message
                })
            },
            openRules() {
                Event.$emit('modal', 'rules');
            },
            sendRequest(e) {

                this.$loading(true)
                this.$store.dispatch('loginUser', {
                    'username':this.username,
                    'password': this.password
                })
                    .then((res) => {
                        Event.$emit("updateUserProfile")
                        this.$router.push({path: '/cabinet'})
                        this.$loading(false)
                    })
                    .catch((msg) => {
                        this.message(msg.data.message);
                        this.$loading(false)
                    })
            },

        }
    }
</script>

<style lang="scss" scoped>
    @import "~/auth.scss";
</style>