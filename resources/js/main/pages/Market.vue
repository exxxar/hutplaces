<template>
    <div>
        <ul>
            <router-link tag="li" class="btn auction closed" to="/auction">
                {{$lang.messages.auction}}
                <span></span>
            </router-link>

            <router-link tag="li" disabled class="btn coins closed" to="/coins">
                {{$lang.messages.coins}}
                <span></span>
            </router-link>

            <router-link tag="li" disabled class="btn packs closed" to="/packs">
                {{$lang.messages.players_packs}}
                <span></span>
            </router-link>

        </ul>

    </div>
</template>

<style scoped="true" lang="scss">
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;

        li {
            position: relative;
            background-position: center center;
            height: 300px;
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            box-shadow: 0px 0px 2px 0px #424242;
            cursor: pointer;
            flex-wrap: wrap;
            background-color: #393939;
            box-sizing: border-box;
            padding: 30px;
            font-size: 24px;
            text-align: center;
            font-weight: 800;
            color: yellow;

            span {
                width: 30px;
                height: 30px;
                position: absolute;
                bottom: 15px;
                background-size: contain;
                background-position: center center;
            }

            &.closed {
                color: #666666;
                span {
                    background-image: url('/img/lock-close.png');

                }
            }

            &.opened {
                span {

                    background-image: url('/img/lock-open.png');
                }
            }

            &.auction {
                background-image: url('/img/auction-bg.png');
            }
            &.coins {
                background-image: url('/img/coins-bg.png');
            }
            &.packs {
                background-image: url('/img/packs-bg.png');
            }

        }

    }



</style>

