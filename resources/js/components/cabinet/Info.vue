<template>
    <div class="info-block">
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <h4>{{$lang.cabinet.info.title_1}}</h4>
        <div v-if="user!=null">
            <table>
                <tr>
                    <td>{{$lang.cabinet.info.email}}</td>
                    <td>{{user.email}}</td>
                </tr>
                <tr>
                    <td>{{$lang.cabinet.info.name}}</td>
                    <td v-if="checkCurrent()"><input type="text" v-model="user.name"></td>
                    <td v-else>{{user.name}}</td>
                </tr>
                <tr v-if="user.skype!=null&&checkCurrent()">
                    <td>{{$lang.cabinet.info.skype}}</td>
                    <td v-if="checkCurrent()"><input type="text" v-model="user.skype"></td>
                    <td v-else>{{user.skype}}</td>
                </tr>

                <tr v-if="user.vk!=null&&checkCurrent()">
                    <td>{{$lang.cabinet.info.vk}}</td>
                    <td v-if="checkCurrent()"><input type="text" v-model="user.vk"></td>
                    <td v-else>{{user.vk}}</td>
                </tr>


                <tr v-if="user.fb!=null&&checkCurrent()">
                    <td>{{$lang.cabinet.info.fb}}</td>
                    <td v-if="checkCurrent()"><input type="text" v-model="user.fb"></td>
                    <td v-else>{{user.fb}}</td>
                </tr>


                <tr v-if="user.tw!=null&&checkCurrent()">
                    <td>{{$lang.cabinet.info.tw}}</td>
                    <td v-if="checkCurrent()"><input type="text" v-model="user.tw"></td>
                    <td v-else>{{user.tw}}</td>
                </tr>


                <tr>
                    <td>{{$lang.cabinet.info.money}}</td>
                    <td>{{user.money}}</td>
                </tr>

                <tr>
                    <td>{{$lang.cabinet.info.level}}</td>
                    <td>{{prepareLevelTitle()}}</td>
                </tr>

                <tr>
                    <td>{{$lang.cabinet.info.discount}}</td>
                    <td>{{user.discount}}%</td>
                </tr>


                <tr>
                    <td>{{$lang.cabinet.info.exp}}</td>
                    <td>{{user.exp}}</td>
                </tr>


                <tr>
                    <td>{{$lang.cabinet.info.coins}}</td>
                    <td>{{user.coins}}</td>
                </tr>
                <tr>
                    <td></td>
                    <td v-if="checkCurrent()">
                        <button class="btn btn-yellow" @click="changeInfo()">{{$lang.cabinet.info.save}}</button>
                    </td>
                    <td v-else></td>
                </tr>
            </table>
        </div>
        <div v-if="user!=null">
            <div v-if="checkCurrent()">
                <h4>{{$lang.cabinet.info.title_2}}</h4>

                <table>
                    <tr>
                        <td>{{$lang.cabinet.info.current_password}}</td>
                        <td><input type="password" v-model="password.old"></td>
                    </tr>
                    <tr>
                        <td>{{$lang.cabinet.info.new_password}}</td>
                        <td><input type="password" v-model="password.new1"></td>
                    </tr>
                    <tr>
                        <td>{{$lang.cabinet.info.confirm_password}}</td>
                        <td><input type="password" v-model="password.new2"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button class="btn btn-yellow" @click="changePassword()">{{$lang.cabinet.info.save}}</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ["user"],
        mounted(){
          this.prepareContent()
        },
        activated(){
            this.prepareContent()
        },
        methods: {
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            prepareLevelTitle(title){
                return eval(`this.$lang.levels.${this.user.level.title}`);
            },
            checkCurrent() {
                return this.currentUser == null ? false :
                    this.user.id == this.currentUser.id;
            },
            changeInfo(){
                if (!this.checkCurrent())
                    return;

                this.$store.dispatch('updateUser', {
                    name: this.user.name,
                    skype: this.user.skype,
                    vk: this.user.vk,
                    fb: this.user.fb,
                    tw: this.user.tw,
                }).then((response) => {
                    this.message("Update user's info",response.data.message,"warn")
                    Event.$emit("updateUserProfile")
                });
            },
            changePassword() {
                if (!this.checkCurrent())
                    return;

                if (this.new1 != this.new2) {
                    this.message("Change password", "new password are not same", "warn")
                    return
                }

                this.$store.dispatch('updatePassword', this.password).then((response) => {
                    this.message("Update password",response.data.message,"warn")
                    Event.$emit("updateUserProfile")
                });


            },
            prepareContent() {
                this.content.title = this.$lang.cabinet.info.main_title
                this.content.content = this.$lang.cabinet.info.main_description
            }

        },
        computed: {
            currentUser: function () {
                return this.$store.getters.USER;
            },
        },

        data() {
            return {
                content: {
                    title: '',
                    content:''
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
    @import '~/info.scss';

    h3 {
        font-weight: 100;
        font-size: 36px;
        color: white;
        text-transform: uppercase;
    }

</style>


