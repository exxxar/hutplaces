<template>
    <div  class="info-block">
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <table  v-if="tickets!=null&&tickets.length>0">
            <tr>
                <th>{{$lang.cabinet.tickets.status}}</th>
                <th>{{$lang.cabinet.tickets.title}}</th>
                <th>{{$lang.cabinet.tickets.description}}</th>
                <th>{{$lang.cabinet.tickets.ticket_type}}</th>
                <th>{{$lang.cabinet.tickets.created_at}}</th>
            </tr>
            <tr v-for="ticket in tickets">
                <td>
                    <h4 v-if="ticket.is_active">
                        {{$lang.cabinet.tickets.in_progress}}
                    </h4>
                    <h4 v-else>{{$lang.cabinet.tickets.complete}}</h4>
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
        <h3 v-if="tickets==null||tickets.length==0">{{$lang.cabinet.tickets.error_1}}</h3>
    </div>
</template>

<script>

    export default {
        props:["user"],

        activated() {
            this.loadTickets()
            this.prepareContent()
        },
        mounted() {
            Event.$on('updateTickets', () => {
                this.loadTickets()
            });
            this.loadTickets()
            this.prepareContent()
        },
        methods: {
            loadTickets() {
                axios
                    .get( `/users/tickets/${this.user.id}`)
                    .then(response => {
                        this.tickets = response.data.tickets;
                    });
            },

            prepareContent() {
                this.content.title = this.$lang.cabinet.stats.main_title
                this.content.content = this.$lang.cabinet.stats.main_description
            },

        },
        data() {
            return {
                content: {
                    title: '',
                    content: ''
                },
                tickets: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>


