<template>
    <div>
        <h1 class="main-title">Достижения пользователей</h1>
        <p class="description">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit.
        </p>
        <ul class="achievements">
            <li v-for="a in achievements":style="cssProps(a.background)">
                <div class="image" v-tooltip.bottom="prepareRewards(a.rewards)">
                    <img :src="prepareImage(a.image)" alt="">
                </div>
                <div class="text">
                    <h4>{{a.title}}</h4>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods:{
          cssProps(bg){
              return {
                  '--background-achievements': `url('/img/achievements/bg/${bg}')`,
              }
          },
            prepareImage(img){
              return `/img/achievements/element/${img}`;
            },

            prepareRewards(rewards){
                var tmp = '';
                for(var r in rewards){
                    tmp +=`${rewards[r]}<br>`;
                }
                return tmp;
            }

        },
        data() {
            return {
                achievements: [
                    {
                        id:1,
                        background:'vympel.png',
                        title:'Достиг 1го уровня',
                        image:'ach-1.png',
                        rewards: ['Опыт', 'Монеты','Случайная карточка','Случайный пак']
                    },
                    {
                        id:1,
                        background:'vympel.png',
                        title:'Достиг 2го уровня',
                        image:'ach-2.png',
                        rewards: ['Случайная карточка','Случайный пак']
                    },
                    {
                        id:1,
                        background:'vympel.png',
                        title:'Достиг 3го уровня',
                        image:'ach-3.png',
                        rewards: ['Опыт']
                    },


                ]
            }
        }

    }
</script>
<style lang="scss" scoped>
    @import "~/achievements.scss";
</style>

