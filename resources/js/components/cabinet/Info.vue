<template>
    <div>
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <h4>Основная информация</h4>
        <form action="" v-if="user!=null">
            <table>
                <tr>
                    <td>Email</td>
                    <td>{{user.email}}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><input type="text" v-model="user.name"></td>
                </tr>
                <tr>
                    <td>Skype</td>
                    <td><input type="text" v-model="user.skype"></td>
                </tr>

                <tr>
                    <td>Vkontakte</td>
                    <td><input type="text" v-model="user.vk"></td>
                </tr>


                <tr>
                    <td>Facebook</td>
                    <td><input type="text" v-model="user.vk"></td>
                </tr>


                <tr>
                    <td>Twitter</td>
                    <td><input type="text" v-model="user.tw"></td>
                </tr>


                <tr>
                    <td>Money</td>
                    <td>{{user.money}}</td>
                </tr>

                <tr>
                    <td>Level</td>
                    <td>{{user.level.title}}</td>
                </tr>

                <tr>
                    <td>Discount</td>
                    <td>{{user.discount}}%</td>
                </tr>


                <tr>
                    <td>Exp</td>
                    <td>{{user.exp}}</td>
                </tr>


                <tr>
                    <td>Coins</td>
                    <td>{{user.coins}}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button class="btn btn-yellow">Сохранить</button>
                    </td>
                </tr>
            </table>
        </form>

        <h4>Изменение пароля</h4>
        <form action="" v-if="user!=null">
            <table>
                <tr>
                    <td>Current password</td>
                    <td><input type="password" v-model="password.old"></td>
                </tr>
                <tr>
                    <td>New password</td>
                    <td><input type="password" v-model="password.new1"></td>
                </tr>
                <tr>
                    <td>Confirm password</td>
                    <td><input type="password" v-model="password.new2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button class="btn btn-yellow">Сохранить</button>
                    </td>
                </tr>
            </table>
        </form>

    </div>
</template>

<script>

    export default {
        props: ["user"],
        methods: {
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            changePassword(){
              if (this.new1!=this.new2)
              {
                  this.message("Change password", "new password are not same", "warn")
                  return
              }
            },
            loadContent() {
                axios
                    .get('/content/info/all')
                    .then(response => {
                        this.content = response.data.content;
                    });
            },

        },
        data() {
            return {
                content: {
                    title: "Информация о пользователе",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
                },
                password: {
                    old: '',
                    new1: '',
                    new2: ''
                }
            }
        },

    }
</script>
<style lang="scss" scoped>


    h3 {
        font-weight: 100;
        font-size: 36px;
        color: white;
        text-transform: uppercase;
    }

    h4 {
        font-weight: 100;
        text-align: left;
        font-size: 24px;
        line-height: 150%;
        color: white;
        text-transform: uppercase;
        margin-top: 20px;
    }

    table {
        width: 100%;
        tr {
            color: white;
            line-height: 150%;
            border: 1px white solid;

            &:nth-last-child(1) {
                border: 1px white solid;
                border-bottom: 0px;
                border-left: 0px;
                border-right: 0px;
                td:nth-last-child(1) {
                    border: 1px white solid;
                }
            }

            th,
            td {
                padding: 10px;
                word-break: break-all;
                width: 20%;

                input {
                    color: #ffff00;
                    border: 1px solid #dcdcdc;
                    border-radius: 5px;
                    width: 300px;
                    height: 40px;
                    font-weight: bold;
                    text-align: center;
                    font-size: 16px;
                    background-color: #2c3e50;

                }

                .btn {
                    width: 300px;
                }
            }
        }
    }


</style>


