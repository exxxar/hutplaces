<template>
    <div class="info-block">
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <ul class="items-list" v-if="items!=null&&items.length>0">
            <li class="item" v-for="item in items"></li>
        </ul>
        <div class="no-items" v-if="items==null||items.length==0"><img :src="$lang.cabinet.items.error_1" alt=""></div>
    </div>
</template>

<script>

    export default {
        props: ["user"],
        activated() {
            this.loadItems()
            this.prepareContent()
        },
        mounted() {
            this.prepareContent()
            this.loadItems()

            Event.$on('updateItems', () => {
                this.loadItems()
            });
        },

        methods: {
            loadItems() {
                axios
                    .get(`/users/items/${this.user.id}`)
                    .then(response => {
                        console.log("items:",response)
                        this.items = response.data.items;
                    });
            },
            prepareContent() {
                this.content.title = this.$lang.cabinet.cards.main_title
                this.content.content = this.$lang.cabinet.cards.main_description
            }

        },

        data() {
            return {
                content: {
                    title: '',
                    content: ''
                },
                items: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>


