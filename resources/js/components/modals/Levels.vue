<template>
    <div class="modal-body levels-modal">
        <h3 v-html="$lang.levels.title"></h3>
        <table v-if="levels!=null&&levels.length>0">
            <tr>
                <td v-html="$lang.levels.table_1"></td>
                <td v-html="$lang.levels.table_2"></td>
                <td v-html="$lang.levels.table_3"></td>
                <td v-html="$lang.levels.table_4"></td>
            </tr>
            <tr v-for="level in levels">
                <td >
                    <p v-if="level.level==user.level.level" class="current">{{prepareLevelTitle(level.title)}}</p>
                    <p v-else>{{prepareLevelTitle(level.title)}}</p>

                </td>
                 <td>{{level.experience}}</td>
                <td>{{level.level}}</td>
                <td>{{level.discount}}</td>
            </tr>
        </table>
        <div class="no-items" v-else><img :src="$lang.levels.no_levels" alt=""></div>

    </div>
</template>

<script>

    export default {
        props:["user"],
        data() {
            return {
                levels: null
            }
        },
        computed: {
            loadLevels() {
                return this.$store.getters.LEVELS;
            },
        },
        watch: {
            loadLevels(newValue, oldValue) {
                this.levels = newValue
            },
        },
        activated() {
            this.refreshLevels()
        },
        mounted() {
            this.refreshLevels()
        },
        methods: {
            prepareLevelTitle(title){
                return eval(`this.$lang.levels.${title}`);
            },
            refreshLevels() {
                this.$loading(true)
                this.$store.dispatch("loadAllSettings")
                this.$loading(false)
            },

        },

    }
</script>
<style lang="scss">

</style>
