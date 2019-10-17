<template>
    <div>
        <market></market>

        <playzone></playzone>

    </div>
</template>

<script>
    import Playzone from '@/pages/Playzone.vue'
    import Market from '@/pages/Market.vue'

    export default {
        components: {
            Playzone, Market
        }
    }
</script>

<style scoped="true" lang="scss">
    @import '~/partials.scss';
</style>
