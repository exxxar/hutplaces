<template>
    <div class="info-block">
        <h1 class="main-title" v-html="$lang.cabinet.stats.main_title"></h1>
        <p class="description" v-html="$lang.cabinet.stats.main_description"></p>
        <table v-if="tickets!=null&&tickets.length>0">
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
        <div class="no-items" v-if="tickets==null||tickets.length==0"><img :src="$lang.cabinet.tickets.error_1" alt="">
        </div>

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
            Event.$on('updateTickets', () => {
                this.fetchData()
            });
        },

        methods: {
            fetchData() {
                this.loadTickets();
            },
            loadTickets() {
                axios
                    .get(`/users/tickets/${this.user.id}`)
                    .then(response => {
                        this.tickets = response.data.tickets;
                    });
            },

        },
        data() {
            return {
                tickets: null,
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>


