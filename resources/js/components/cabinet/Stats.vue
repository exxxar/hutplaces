<template>
    <div>
        <h1 class="main-title" v-html="content.title"></h1>
        <p class="description" v-html="content.content"></p>
        <table v-if="stats!=null&&trigger_types!=null">
            <tr>
                <th>Param</th>
                <th>Value</th>
            </tr>
            <tr  v-for="stat in stats">
                <td>{{prepareTypeText(stat.stat_type)}}</td>
                <td>{{ stat.stat_value }}</td>
            </tr>
        </table>
        <h3 v-if="trigger_types==null||trigger_types.length==0">Не удалось получитть типы тригеров</h3>
        <h3 v-if="stats==null||stats.lenght==0">У вас нет Статистки:(</h3>
    </div>
</template>
<script>
    export default {
        name: "Stats",
        data() {
            return {
                stats: null,
                trigger_types: null,
                content: {
                    title: "Пользовательская статистика",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid atque doloremque eius enim excepturi exercitationem expedita fugiat fugit hic in ipsam nemo nesciunt, omnis quaerat quisquam rerum tempore velit."
                },
            }
        },

        activated() {
            this.loadTypes()
            this.loadStats()
        },
        mounted() {
            Event.$on("updateStats", () => {
                this.loadTypes()
                this.loadStats()
            });
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
                    .get(`/users/stats/${auth.user.id}`)
                    .then(response => {
                        this.stats = response.data.stats;
                    });
            },
            loadContent() {
                axios
                    .get('/content/stats/all')
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