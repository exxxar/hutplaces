<template>
    <div>
        <ul>
            <router-link tag="li" class="btn randoms opened" to="/randoms">
                {{$lang.messages.randoms}}
                <span></span>
            </router-link>

            <router-link tag="li" disabled class="btn fortune closed" to="/wheel_of_fortune">
                {{$lang.messages.wheel_of_fortune}}
                <span></span>
            </router-link>

            <router-link tag="li" disabled class="btn wager closed" to="/wager_match">
                {{$lang.messages.wager_matches}}
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

            &.randoms {
                background-image: url('/img/lottery-bg.png');
            }
            &.fortune {
                background-image: url('/img/wheel-of-fortune-bg.png');
            }
            &.wager {
                background-image: url('/img/wager-bg.png');
            }

        }
    }



</style>

