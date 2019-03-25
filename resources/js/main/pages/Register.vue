<template>
    <div id="register-form">
        <div class="alert alert-danger" v-if="error && !success">
            <p>There was an error, unable to complete registration.</p>
        </div>
        <div class="alert alert-success" v-if="success">
            <p>Registration completed. You can now <router-link :to="{name:'login'}">sign in.</router-link></p>
        </div>
        <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post" accept-charset="UTF-8">
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.name }">
                <label for="name">Name</label>
                <input type="text"  autocomplete="false" id="name" class="form-control" v-model="name" placeholder="Enter Your name" required>
                <span class="help-block" v-if="error && errors.name">{{ errors.name }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
                <label for="email">E-mail</label>
                <input type="email"  autocomplete="false" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                <label for="password">Password</label>
                <input type="password"  autocomplete="false" id="password" class="form-control" v-model="password" required>
                <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
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
            register(){
                var app = this
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
                });
            }
        }
    }
</script>


<style lang="scss" scoped="scoped">
    #register-form {
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