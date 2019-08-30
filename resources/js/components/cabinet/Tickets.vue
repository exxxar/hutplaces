<template>
    <div>
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <table  v-if="tickets!=null&&tickets.length>0">
            <tr>
                <th>Status</th>
                <th>Title</th>
                <th>Description</th>
                <th>ticket_type</th>
                <th>created_at</th>
            </tr>
            <tr v-for="ticket in tickets">
                <td>
                    <h4 v-if="ticket.is_active">
                       In process
                    </h4>
                    <h4 v-else>Completed</h4>
                </td>
                <td>
                   {{ ticket.title }}
                </td>
                <td>
                    {{ ticket.description }}
                </td>
                <td>
                    {{ ticket.ticket_type }}
                </td>
                <td>
                    {{ ticket.created_at }}
                </td>
            </tr>
        </table>
        <h3 v-if="tickets==null||tickets.length==0">У вас нет Баг-репортов:(</h3>
    </div>
</template>

<script>

    export default {
        activated() {
            this.loadTickets()
            //this.loadContent()
        },
        mounted() {
            Event.$on('updateTickets', () => {
                this.loadTickets()
            });
        },
        methods: {
            loadContent() {
                axios
                    .get('/content/tickets/all')
                    .then(response => {
                        this.content = response.data.content;
                    });
            },
            loadTickets() {
                axios
                    .get( `/users/tickets/${auth.user.id}`)
                    .then(response => {
                        this.tickets = response.data.tickets;
                    });
            },

        },
        data() {
            return {
                content: {
                    title: "Баг-репорты пользователя",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
                },
                tickets: null,
            }
        },

    }
</script>
<style lang="scss" scoped>


    h3 {
        font-weight: 100;
        font-size: 36px;
        color: white;
        text-transform: uppercase;
    }

    table {
        width: 100%;
        tr {
            color: white;
            line-height: 150%;
            border: 1px white solid;
            th,
            td {
                padding: 10px;
                word-break: break-all;
                width:20%;
            }
        }
    }


</style>


