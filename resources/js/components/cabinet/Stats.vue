<template>
    <div  class="info-block">
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <table v-if="stats!=null&&trigger_types!=null">
            <tr>
                <th>{{$lang.cabinet.stats.param}}</th>
                <th>{{$lang.cabinet.stats.value}}</th>
            </tr>
            <tr  v-for="stat in stats">
                <td>{{prepareTypeText(stat.stat_type)}}</td>
                <td>{{ stat.stat_value }}</td>
            </tr>
        </table>
        <h3 v-if="trigger_types==null||trigger_types.length==0">{{$lang.cabinet.stats.error_1}}</h3>
        <h3 v-if="stats==null||stats.lenght==0">{{$lang.cabinet.stats.error_2}}</h3>
    </div>
</template>
<script>
    export default {
        name: "Stats",
        props:["user"],
        data() {
            return {
                stats: null,
                trigger_types: null,
                content: {
                    title:  '',
                    content: ''
                },
            }
        },
        activated() {
            this.loadTypes()
            this.loadStats()
            this.prepareContent()
        },
        mounted() {
            Event.$on("updateStats", () => {
                this.loadTypes()
                this.loadStats()
            });
            this.loadTypes()
            this.loadStats()
            this.prepareContent();
        },
        methods: {
            prepareTypeText(type) {
                var title = this.trigger_types.filter(t => t.value == type);
                return eval(`this.$lang.triggertypes.${title[0].key.toLowerCase()}`);
            },
            loadTypes() {
                axios
                    .get(`/users/stats/types`)
                    .then(response => {
                        console.log(response);
                        this.trigger_types = response.data.trigger_types;
                    });

            },
            loadStats() {
                axios
                    .get(`/users/stats/${this.user.id}`)
                    .then(response => {
                        this.stats = response.data.stats;
                    });
            },
            prepareContent() {
                this.content.title = this.$lang.cabinet.stats.main_title
                this.content.content = this.$lang.cabinet.stats.main_description
            },
        }
    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>