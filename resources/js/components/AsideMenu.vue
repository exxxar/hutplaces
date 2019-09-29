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
            <ul class="more">
                <li @click="openModal('rules')"><a href="#rules">{{$lang.menu.terms_of_use}}</a></li>
                <li @click="openModal('supplier')"><a href="#supplier">{{$lang.menu.become_a_supplier}}</a></li>
                <li @click="openModal('about')"><a href="#about">{{$lang.menu.about_us}}</a></li>
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
            openModal(name) {
                this.selfHide();
                this.$emit("modal", name);
            }
        }
    }

</script>
