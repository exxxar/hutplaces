<template>
    <ul>
        <li class="btn btn-black-2" @click="openPath('/playzone')">{{$lang.menu.playzone}}</li>
        <li class="btn btn-black-2" @click="openPath('/market')">{{$lang.menu.market}}</li>
        <li class="btn btn-black-2" @click="openModal('promo')">{{$lang.menu.promocodes}}</li>
        <li class="btn btn-black-2" @click="openPath('/achievements')">{{$lang.menu.achievement}}</li>

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
            openPath(name) {
                this.$router.push({path: name})
                this.$emit('close');
            },
            openModal(name) {
                this.$emit('close');
                this.$emit("modal", name);
            }
        }
    }

</script>
