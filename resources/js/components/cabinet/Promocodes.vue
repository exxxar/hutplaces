<template>
    <div  class="info-block">
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <table v-if="promocodes!=null&&promocodes.length>0">
            <tr>
                <th>{{$lang.cabinet.promocodes.title}}</th>
                <th>{{$lang.cabinet.promocodes.description}}</th>
                <th>{{$lang.cabinet.promocodes.code}}</th>
                <th>{{$lang.cabinet.promocodes.prize}}</th>
                <th>{{$lang.cabinet.promocodes.date}}</th>
            </tr>
            <tr v-for="promo in promocodes">
                <td>{{ promo.title }}</td>
                <td>{{ promo.description }}</td>
                <td>{{ promo.code }}</td>
                <td>{{ prepareRewards(promo) }}</td>
                <td>{{ promo.created_at }}</td>
            </tr>
        </table>
        <div class="no-items" v-if="promocodes==null||promocodes.length==0"><img :src="$lang.cabinet.promocodes.error_1" alt=""></div>

    </div>
</template>
<script>
    export default {
        name: "Promocodes",
        props: ["user"],
        data() {
            return {
                promocodes: null,
                content: {
                    title: '',
                    content: ''
                },
            }
        },
        activated() {
            this.loadPromocodes()
            this.prepareContent()
        },
        mounted() {
            Event.$on('updatePromocodes', () => {
                this.loadPromocodes()
            });
            this.loadPromocodes()
            this.prepareContent()
        },
        methods: {
            prepareContent() {
                this.content.title = this.$lang.cabinet.promocodes.main_title
                this.content.content = this.$lang.cabinet.promocodes.main_description
            },
            loadPromocodes() {
                axios
                    .get(`/users/promo/${this.user.id}`)
                    .then(response => {
                        this.promocodes = response.data.promocodes;
                    });
            },
            loadContent() {
                axios
                    .get('/content/promocodes/all')
                    .then(response => {
                        this.content = response.data.content;
                    });
            },

            prepareRewards(promo) {
                var tmp = '';
                var hasPrize = false;

                if (promo.discount != null && promo.discount != 0) {
                    tmp += eval(`this.$lang.achievements.discount`) + ", ";
                    hasPrize = true;
                }

                if (promo.exp != null && promo.exp != 0) {
                    tmp += eval(`this.$lang.achievements.exp`) + ", ";
                    hasPrize = true;
                }

                if (promo.coins != null && promo.coins != 0) {
                    tmp += eval(`this.$lang.achievements.coins`) + ", ";
                    hasPrize = true;
                }

                if (promo.money != null && promo.money != 0) {
                    tmp += eval(`this.$lang.achievements.money`) + ", ";
                    hasPrize = true;
                }

                if (promo.card_id != null) {
                    tmp += eval(`this.$lang.achievements.card`) + ", ";
                    hasPrize = true;
                }

                if (promo.item_id != null) {
                    tmp += eval(`this.$lang.achievements.item`);
                    hasPrize = true;
                }

                if (!hasPrize)
                    tmp = eval(`this.$lang.achievements.empty`)


                return tmp.lastIndexOf(",") > 0 ?
                    tmp.slice(0, tmp.lastIndexOf(",")) :
                    tmp;
            },
        }
    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>