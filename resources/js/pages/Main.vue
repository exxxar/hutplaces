<template>
    <div>
        <market></market>
        <div class="large-promo">
            <carousel :per-page="1" :loop="true" :mouse-drag="true">
                <slide>
                    <img :src="'/img/slides/1.jpg'" alt="Слайд 1">
                </slide>
                <slide>
                    <img :src="'/img/slides/2.jpg'" alt="Слайд 2">
                </slide>

                <slide>
                    <img :src="'/img/slides/3.jpg'" alt="Слайд 3">
                </slide>
            </carousel>
        </div>
        <playzone></playzone>
    </div>
</template>

<script>
    import Playzone from '@/pages/Playzone.vue'
    import Market from '@/pages/Market.vue'
    import {Carousel, Slide} from 'vue-carousel';
    export default {
        mounted() {
            Event.$emit('updateData');
        },
        components: {
            Playzone, Market,  Carousel, Slide,
        }
    }
</script>

<style scoped="true" lang="scss">
    @import '~/partials.scss';
</style>
