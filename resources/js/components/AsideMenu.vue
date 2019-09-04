<template>
    <ul>
        <router-link :to="{ name: 'Playzone' }" tag="li" class="btn btn-black-2">{{$lang.menu.playzone}}
        </router-link>

        <router-link :to="{ name: 'Market' }" tag="li" class="btn btn-black-2">{{$lang.menu.market}}
        </router-link>

        <li class="btn btn-black-2" @click="openModal('promo')">{{$lang.menu.promocodes}}</li>
        <router-link :to="{ name: 'Achievements' }" tag="li" class="btn btn-black-2">{{$lang.menu.achievement}}
        </router-link>
        <li class="more-menu">
            <div class="lang">
                <a @click="changeLang('ru')"><img src="/img/ru.jpg" alt=""></a>
                <a @click="changeLang('en')"><img src="/img/en.jpg" alt=""></a>
            </div>
            <ul class="more">
                <li @click="openModal('terms')"><a href="#terms">{{$lang.menu.terms_of_use}}</a></li>
                <li @click="openModal('supplier')"><a href="#supplier">{{$lang.menu.become_a_supplier}}</a></li>
                <li @click="openModal('partner')"><a href="#partner">{{$lang.menu.become_a_partner}}</a></li>
                <li @click="openModal('report')"><a class="report" href="#report">{{$lang.menu.report}}</a></li>
            </ul>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'defaultLayout',
        methods: {
            selfHide() {
                this.$emit("self-hide");
            },
            changeLang(lang) {
                this.$lang.setLang(lang)
            },
            openModal(name) {
                this.selfHide();
                this.$emit("modal", name);
            }
        }
    }

</script>
