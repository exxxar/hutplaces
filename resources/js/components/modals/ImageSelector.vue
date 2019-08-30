<template>
    <div class="modal-images">
        <ul v-if="images!=null&&images.length>0">
            <li v-for="img in images" @click="selectImage(img)"><img v-lazy="prepareImage(img)" alt=""></li>
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

        mounted(){
            this.loadImages()
        },

        methods: {
            prepareImage(img){
                return `/img/avatars/${img}`;
            },
            loadImages(){
                axios
                    .get(`/images/all`)
                    .then(response => {
                        this.images = response.data.images
                        console.log(response)
                    });
            },
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            selfHide() {
                this.$emit("self-hide");
            },
            selectImage(img) {
                this.$emit('image', img)
                this.selfHide();
            }
        },

    }
</script>
<style lang="scss" scoped>
    .modal-images {
        width: 1000px;
        @media (max-width: 1000px) {
            & {
                width: 100%;
            }
        }
    }

    h3 {
        font-weight: 100;
        font-size: 36px;
        color: white;
        text-transform: uppercase;
    }

    ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        li {
            width: 150px;
            height: 150px;
            margin-bottom: 10px;
            cursor:pointer;
        }
    }

</style>
