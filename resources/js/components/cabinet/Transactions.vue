<template>
    <div  class="info-block">
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
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
        <h3 v-if="transactions==null||transactions.length==0">{{$lang.cabinet.transactions.error_1}}</h3>
    </div>
</template>
<script>
    export default {
        name: "Transactions",
        props: ["user"],
        data() {
            return {
                transactions: null,
                content: {
                    title: '',
                    content: ''
                },
            }
        },
        activated() {
            this.loadTransactions()
            this.prepareContent()
        },
        mounted() {
            Event.$on('updateTransactions', () => {
                this.loadTransactions()
            });
            this.loadTransactions()
            this.prepareContent()
        },
        methods: {
            loadTransactions() {
                axios
                    .get(`/users/transactions/${this.user.id}`)
                    .then(response => {
                        this.transactions = response.data.transactions;
                    });
            },
            prepareContent() {
                this.content.title = this.$lang.cabinet.transactions.main_title
                this.content.content = this.$lang.cabinet.transactions.main_description
            },
        }
    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>