<template>
    <div>
        <h1><strong> HUT<i>Place</i></strong> - {{$lang.messages.games_h1}}</h1>
        <ul class="games-list">

            <li class="game" v-for="game in games">
                <img class="game-logo" :src="game.logo" alt="">
                <a :href="game.url" target="_blank">{{game.url}}</a>
                <router-link :to="{ path: '/games/'+game.route}" append class="large-promo">
                    <carousel  :autoplay="true" :controls="false" :data="game.slides"></carousel>
                </router-link>
                <div class="control">
                    <p class="label">{{game.title}}</p>
                    <ul class="platforms">
                        <li v-for="platform in game.platforms"><a href=''>{{platform.title}}</a></li>
                    </ul>
                    <p class="counter">
                        {{$lang.messages.lottery}}
                        <span>{{game.lottery_count}}</span>
                    </p>
                </div>
            </li>

        </ul>


    </div>
</template>

<script>
    import scrollZone from 'vue-perfect-scrollbar';

    import carousel from '@chenfengyuan/vue-carousel';

    export default {
        components: {
            scrollZone,carousel
        },
        data() {
            return {
                games: [
                    {
                        route: 'nhl',
                        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/EA_Sports.svg/220px-EA_Sports.svg.png',
                        url: 'http://www.easports.com/nhl',
                        banner: '/img/nhl-banner.jpg',
                        title: 'NHL 19',
                        platforms: [
                            {
                                platform_id: 1,
                                title: 'xbox one'
                            },
                            {
                                platform_id: 2,
                                title: 'play station 4'
                            }

                        ],
                        lottery_count: 78,
                        slides:  [
                            '<div class="example-slide"><img src="/img/nhl-banner.jpg" alt=""></div>',
                            '<div class="example-slide"><img src="/img/nhl-banner.jpg" alt=""></div>',
                            '<div class="example-slide"><img src="/img/nhl-banner.jpg" alt=""></div>',
                        ]
                    },




                ],

            }
        }
    }
</script>

<style lang="scss">

    .example-slide {
        align-items: center;
        background-color: #666;
        color: #999;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        min-height: 10rem;
    }

    h1 {
        color: #ff0;
        font-weight: 600;
        text-align: center;
        font-size: 30px;
        strong {
            font-size: 36px;
            color: white;
            i {
                color: #ff0;
                font-style: italic;
            }
        }

    }

    .ps > .ps__scrollbar-y-rail > .ps__scrollbar-y {
        background-color: #ff0 !important;
    }

    .games-list {
        display: grid;
        width: 100%;
       // height: 570px;
        border-top: 2px #a7a5a5 solid;
        box-sizing: border-box;
        padding: 10px 10px;
        justify-items: center;
        .game {
            display: grid;
            height: 550px;
            width: 1000px;
            align-items: center;
            justify-items: center;
            box-sizing: border-box;
            padding: 10px 0px 10px 0px;

            a[target="_blank"] {
                font-size: 12px;
                text-transform: uppercase;
                font-weight: 800;
                color: gray;
                line-height: 35px;
                text-decoration-style: dashed;

                &:after {
                    content: '';
                    width: 23px;
                    height: 15px;
                    background: url('/img/link-arrow.png');
                    top: 0;
                    left: 0;
                    display: block;
                    margin: 10px auto;
                }
            }
            .game-logo {
                width: 50px;
                height: 50px;
            }
            .large-promo {
                height: 350px;
                box-sizing: border-box;
                border: 2px #a7a5a5 solid;
                padding: 10px;
                width: 100%;
            }

            .control {
                margin-top: 10px;
                height: 50px;
                width: 100%;
                background-color: #393939;
                box-shadow: 2px 2px 11px 0px black;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;
                position: relative;
                p {
                    margin: 0;
                }

                p.label {
                    font-size: 16px;
                    font-weight: 900;
                    margin-left: 20px;
                    color: #989898;
                }

                .platforms {
                    display: flex;
                    li {
                        list-style: none;
                        a {
                            color: white;
                            padding-left: 5px;
                            padding-right: 5px;
                            text-decoration-style: dashed;
                        }
                    }
                }
                p.counter {
                    width: 145px;
                    color: #989898;
                    font-weight: 900;
                    span {
                        width: 70px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: yellow;
                        color: #000000;
                        font-size: 16px;
                        font-weight: 900;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
            }

        }
    }

</style>