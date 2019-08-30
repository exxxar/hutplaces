<template>
    <div>
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <table v-if="transactions!=null&&transactions.length>0">
            <tr>
                <th>Amount</th>
                <th>Payment system</th>
                <th>Currency</th>
                <th>Date</th>
            </tr>
            <tr  v-for="transaction in transactions">
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.payment_system }}</td>
                <td>{{ transaction.currency }}</td>
                <td>{{ transaction.created_at }}</td>
            </tr>
        </table>
        <h3 v-if="transactions==null||transactions.length==0">У вас нет Транзакций:(</h3>
    </div>
</template>
<script>
    export default {
        name: "Transactions",
        data() {
            return {
                transactions: null,
                content: {
                    title: "Пользовательские транзакции",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
                },
            }
        },

        activated() {
            this.loadTransactions()
        },
        mounted() {
            Event.$on('updateTransactions', () => {
                this.loadTransactions()
            });
        },
        methods: {
            loadTransactions() {
                axios
                    .get(`/users/transactions/${auth.user.id}`)
                    .then(response => {
                        this.transactions = response.data.transactions;
                    });
            },
            loadContent() {
                axios
                    .get('/content/transactions/all')
                    .then(response => {
                        this.content = response.data.content;
                    });
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