<template>
    <div id="nhl-cards">

        <h1>NHL 19</h1>
        <nav>
            <router-link :to="{ path: '/games/nhl/chains'}" append>Цепочки</router-link>
            <router-link :to="{ path: '/games/nhl/single'}" append>Одиночные</router-link>
        </nav>


        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>

    export default  {


    }

</script>

<style lang="scss">
    #nhl-cards {
        display: grid;
        justify-items: center;
        padding: 0;
        h1 {
            color: #fff;
            text-align: center;
            font-size: 30px;
            font-family: 'Open Sans';
            font-size: 36px;
            font-weight: 900;
        }
        nav {
            padding: 0px 0px 10px 10px;
            a {
                font-weight: 700;
                text-decoration-style: dashed;
                color: #868686;
            }

            a.active {
                color:#ffffff;
            }
        }

    }

</style>

