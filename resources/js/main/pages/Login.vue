<template>
    <div id="login-form">
        <div class="alert alert-danger" v-if="error">
            <p>There was an error, unable to sign in with those credentials.</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">

            <div class="form-group">
                <label for="email">E-mail</label>
                <input autocomplete="false" type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input autocomplete="false" type="password" id="password" class="form-control" placeholder="Password" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-default">Sign in</button>
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
    #login-form {
        width: 500px;
        margin: auto;

    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background: #393939;
        padding: 70px 30px 20px 30px;
        box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;
        .form-group {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            flex-wrap: wrap;

            label {
                display: block;
                color: #8f8f8f;
                position: relative;
                /* bottom: 89px; */
                /* left: 0px; */
                width: 100%;
            }
            input {
                font-size: 18px;
                padding: 15px 20px;
                width: 500px;
                background: transparent;
                display: block;
                border: 1px white solid;
                margin-bottom: 30px;
                color: white;
                box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;
                font-weight: 800;
                &:focus{
                    outline: none;
                }
            }


        }
        button[type="submit"]{
            width: 176px;
            font-size: 18px;
            padding: 15px 10px;
            color: white;
            font-weight: 800;
            box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;
            background: #03a9f4;
        }
    }
</style>