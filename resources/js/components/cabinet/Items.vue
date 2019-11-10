<template>
    <div class="info-block">
        <h1 class="main-title" v-html="this.$lang.cabinet.cards.main_title"></h1>
        <p class="description" v-html="this.$lang.cabinet.cards.main_description"></p>
        <ul class="items-list" v-if="items!=null&&items.length>0">
            <li class="item" v-for="item in items"></li>
        </ul>
        <div class="no-items" v-if="items==null||items.length==0"><img :src="$lang.cabinet.items.error_1" alt=""></div>
    </div>
</template>

<script>
    export default {
        props: ["user"],
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        mounted() {
            Event.$on('updateItems', () => {
                this.fetchData()
            });
        },
        methods: {
            fetchData() {
                this.loadItems()
            },
            loadItems() {
                axios
                    .get(`/users/items/${this.user.id}`)
                    .then(response => {
                        this.items = response.data.items;
                    });
            },
        },
        data() {
            return {
                items: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>


