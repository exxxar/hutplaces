<template>
    <div id="personal-cabinet">
        <div class="left-side">
            <div class="profile">
                <div class="avatar">
                    <img src="img/noavatar.png" alt="">
                    <ul class="controls">
                        <li v-tooltip.bottom="'Сменить фотографию профиля'"><i class="fas fa-camera"></i></li>
                    </ul>
                </div>

                <div class="money">
                    <p>{{user.coins}} <span>Pucks</span></p>
                </div>



            </div>

        </div>
        <div class="right-side">
            <tabs :options="{ useUrlFragment: false }">
                <tab name="Информация">
                    <scroll class="scroll-area">

                    </scroll>
                </tab>
                <tab name="Достижения">
                    <scroll class="scroll-area">
                        <users-achievements :userId="user.id"></users-achievements>
                    </scroll>
                </tab>
                <tab name="Лотерея">
                    <div class="filters">
                        <label for="opt1" class="radio">
                            <input type="radio" name="rdo" id="opt1" class="hidden"/>
                            <span class="label"></span>Все
                        </label>

                        <label for="opt2" class="radio">
                            <input type="radio" name="rdo" id="opt2" class="hidden"/>
                            <span class="label"></span>Активные
                        </label>

                        <label for="opt3" class="radio">
                            <input type="radio" name="rdo" id="opt3" class="hidden"/>
                            <span class="label"></span>Завершенные
                        </label>


                    </div>
                    <scroll class="scroll-area">

                    </scroll>
                </tab>
                <tab id="oh-hi-mark" name="Транзакции">
                    <scroll class="scroll-area">

                    </scroll>
                </tab>
                <tab name="История">
                    <scroll class="scroll-area">

                    </scroll>
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
    import Scroll from 'vue-custom-scrollbar'

    import UsersAchievements from '@/pages/Achievement.vue'


    export default {
        data(){
            return {
                user:auth.user
            }

        },
        activated(){
          this.user = auth.user
        },
        components: {
            UsersAchievements, Scroll
        }
    }
</script>

<style lang="scss">
    @import "~/cabinet.scss";
</style>
