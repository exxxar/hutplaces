<template>
    <div  class="info-block">
        <h1 class="main-title" v-html="$lang.cabinet.promocodes.main_title"></h1>
        <p class="description" v-html="$lang.cabinet.promocodes.main_description"></p>
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
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        mounted() {
            Event.$on('updatePromocodes', () => {
                this.fetchData()
            });
        },

        methods: {
            fetchData(){
                this.loadPromocodes()
            },
            loadPromocodes() {
                axios
                    .get(`/users/promo/${this.user.id}`)
                    .then(response => {
                        this.promocodes = response.data.promocodes;
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