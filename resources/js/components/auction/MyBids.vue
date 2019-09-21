<template>
    <div class="my-bids">
        <lots :type="'mybids'"></lots>
    </div>
</template>

<script>
    import Lots from '@/components/Lots.vue'

    export default {
        components: {
            Lots
        }

    }
</script>
<style lang="scss" scoped>
    @import "~/auction.scss";


</style>

