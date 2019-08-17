<template>
    <ul>
        <router-link :to="{ name: 'Playzone' }" tag="li" class="btn btn-black-2">Игровая зона
        </router-link>

        <router-link :to="{ name: 'Market' }" tag="li" class="btn btn-black-2">Маркет
        </router-link>

        <li class="btn btn-black-2" @click="openModal('promo')">Промокоды</li>

        <router-link :to="{ name: 'Achievements' }" tag="li" class="btn btn-black-2">Достижения
        </router-link>

        <li class="more-menu">
            <div class="lang">
                <a href=""><img src="/img/ru.jpg" alt=""></a>
                <a href=""><img src="/img/en.jpg" alt=""></a>
            </div>
            <ul class="more">
                <li @click="openModal('terms')"><a href="#terms">Пользовательское соглашение</a></li>
                <li @click="openModal('supplier')"><a href="#supplier">Стать поставщиком</a></li>
                <li @click="openModal('partner')"><a href="#partner">Стать партнером</a></li>
                <li @click="openModal('report')"><a class="report" href="#report">Баг-репорты</a></li>
            </ul>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'defaultLayout',
        methods: {
            selfHide(){
                this.$emit("self-hide");
            },
            openModal(name){
                this.selfHide();
                this.$emit("modal",name);
            }
        }
    }

</script>
