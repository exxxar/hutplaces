<template>
    <div class="info-block">
        <h1 class="main-title">Пользовательская статистика</h1>
        <p class="description">
            Каждый пользователь имеет свои уникальные характеристики, изменение которых приводит к получению тех или иных игровых благ. Вы можете сами отслеживать изменения характеристик и точно знать когда вы получите пкакое-либо преимущество.</p>
        <table v-if="stats!=null&&trigger_type!=null">
            <tr>
                <th v-html="$lang.cabinet.stats.param"></th>
                <th v-html="$lang.cabinet.stats.value"></th>
            </tr>
            <tr v-for="stat in stats">
                <td>{{prepareTypeText(stat.stat_type)}}</td>
                <td>{{ stat.stat_value }}</td>
            </tr>
        </table>
        <h3 v-if="trigger_type==null||trigger_type.length==0">{{$lang.cabinet.stats.error_1}}</h3>
        <div class="no-items" v-if="stats==null||stats.length==0"><img :src="$lang.cabinet.stats.error_2" alt=""></div>
    </div>
</template>
<script>
    export default {
        name: "Stats",
        props: ["user"],
        data() {
            return {
                stats: null,
                trigger_type: null,
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData',
            loadTriggerType(newValue, oldValue) {
                this.trigger_type = newValue
            },
            loadsStats(newValue, oldValue) {
                this.stats = newValue
            },
        },
        mounted() {
            Event.$on("updateStats", () => {
                this.fetchData();
            });
        },
        computed: {
            loadStats() {
                return this.$store.getters.STATS;
            },
            loadTriggerType() {
                return this.$store.getters.TRIGGER_TYPE;
            }
        },
        methods: {
            fetchData(){
                if (this.user != null)
                    this.$store.dispatch("loadStats", {user_id: this.user.id})
            },
            prepareTypeText(type) {
                var title = this.trigger_type.filter(t => t.value == type);
                return eval(`this.$lang.triggertypes.${title[0].key.toLowerCase()}`)
            },

        }
    }
</script>
<style lang="scss" scoped>
    @import "~/cabinet.scss";
</style>