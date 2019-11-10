<template>
    <div class="info-block">
        <h1 class="main-title" v-html="$lang.cabinet.transactions.main_title"></h1>
        <p class="description" v-html="$lang.cabinet.transactions.main_description"></p>
        <table v-if="transactions!=null&&transactions.length>0">
            <tr>
                <th>{{$lang.cabinet.transactions.amount}}</th>
                <th>{{$lang.cabinet.transactions.payment_system}}</th>
                <th>{{$lang.cabinet.transactions.currency}}</th>
                <th>{{$lang.cabinet.transactions.date}}</th>
            </tr>
            <tr v-for="transaction in transactions">
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.payment_system }}</td>
                <td>{{ transaction.currency }}</td>
                <td>{{ transaction.created_at }}</td>
            </tr>
        </table>
        <div class="no-items" v-if="transactions==null||transactions.length==0"><img
                :src="$lang.cabinet.transactions.error_1" alt=""></div>

    </div>
</template>
<script>
    export default {
        name: "Transactions",
        props: ["user"],
        data() {
            return {
                transactions: null,
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        mounted() {
            Event.$on('updateTransactions', () => {
                this.fetchData()
            });
        },
        methods: {
            fetchData() {
                this.loadTransactions()
            },
            loadTransactions() {
                axios
                    .get(`/users/transactions/${this.user.id}`)
                    .then(response => {
                        this.transactions = response.data.transactions;
                    });
            },
        }
    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>