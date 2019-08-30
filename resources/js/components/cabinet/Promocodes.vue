<template>
    <div>
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <table v-if="promocodes!=null&&promocodes.length>0">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Code</th>
                <th>Prize</th>
                <th>Date</th>
            </tr>
            <tr v-for="promo in promocodes">
                <td>{{ promo.title }}</td>
                <td>{{ promo.description }}</td>
                <td>{{ promo.code }}</td>
                <td>{{ prepareRewards(promo) }}</td>
                <td>{{ promo.created_at }}</td>
            </tr>
        </table>
        <h3 v-if="promocodes==null||promocodes.length==0">У вас нет Баг-репортов:(</h3>
    </div>
</template>
<script>
    export default {
        name: "Promocodes",
        data() {
            return {
                promocodes: null,
                content: {
                    title: "Введенные промокоды",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
                },
            }
        },

        activated() {
            this.loadPromocodes()
        },
        mounted() {
            Event.$on('updatePromocodes', () => {
                this.loadPromocodes()
            });
        },
        methods: {
            loadPromocodes() {
                axios
                    .get(`/users/promo/${auth.user.id}`)
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
    table {
        width: 100%;
        tr {
            color: white;
            line-height: 150%;
            border: 1px white solid;

            th,
            td {
                padding: 10px;
            }
        }
    }
</style>