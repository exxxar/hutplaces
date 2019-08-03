<template>
    <div>

        <div class="form">
            <h1>Sign Up</h1>
            <div class="input-group">
                <label for="name">Name</label>
                <input type="text" autocomplete="off" placeholder="Введите вашу почту" v-model="name">
            </div>

            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" autocomplete="off"  placeholder="Введите вашу почту" v-model="email">
            </div>

            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" autocomplete="off" placeholder="Введите пароль" v-model="password">

            </div>

            <div class="input-group">
                <label for="confirm_password">Confirm password</label>
                <input type="password" autocomplete="off" placeholder="Введите пароль" v-model="confirm_password">

            </div>

            <div class="input-group buttons">
                <button @click="register()" class="btn btn-yellow">Sign Up</button>
                <router-link tag="button" :to="{ name: 'Login' }" class="btn btn-other">Sign In</router-link>

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
                email: '',
                password: '',
                confirm_password: '',
                name: '',
            };
        },

        methods: {
            register() {
                if (this.password!=this.confirm_password) {
                    this.$notify({
                        group: 'main',
                        type: 'warn',
                        title: 'Пароли не совпадают',
                        text: `Попробуйте ввести одинаковые пароли!`
                    });

                    return;
                }
                let data = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    _token:axios.defaults.headers.common['X-CSRF-TOKEN']
                };



                axios.post('/registration', data)
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

    .form {
        padding-bottom:150px;
    }
</style>