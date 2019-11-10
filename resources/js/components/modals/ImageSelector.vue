<template>
    <div class="modal-body images-modal">
        <ul v-if="images!=null&&images.length>0">
            <li v-for="img in images" @click="selectImage(img)"><img v-lazy="`/img/avatars/${img}`" alt=""></li>
        </ul>
        <h3 v-else>Изображений не найдено!(:</h3>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                images: null
            }
        },
        computed: {
            loadImages() {
                return this.$store.getters.IMAGES;
            },
        },
        watch: {
            loadImages(newValue, oldValue) {
                this.images = newValue
            },
        },
        activated() {
            this.refreshImages()
        },
        mounted() {
            this.refreshImages()
        },
        methods: {
            refreshImages() {
                this.$loading(true)
                this.$store.dispatch("loadImages")
                this.$loading(false)
            },
            selectImage(img) {
                this.$emit('image', img)
                this.$emit("close");
            }
        },

    }
</script>
<style>

</style>
