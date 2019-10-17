<template>
    <div class="modal-levels">
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
        mounted() {
            this.loadLevels()
        },
        methods: {
            prepareLevelTitle(title){
                return eval(`this.$lang.levels.${title}`);
            },
            loadLevels() {
                this.$loading(true)
                axios
                    .get(`/levels`)
                    .then(response => {
                        this.levels = response.data.levels
                        this.$loading(false)
                    });
            },

        },

    }
</script>
<style lang="scss" scoped>
    .modal-levels {
        width: 1000px;
        @media (max-width: 1000px) {
            & {
                width: 100%;
            }
        }
    }

    h3 {
        font-weight: 100;
        font-size: 36px;
        color: white;
        text-transform: uppercase;
    }

    table {
        width: 100%;
        margin-top:15px;
        tr {
            color: white;
            line-height: 150%;
            border: 1px white solid;
            th,
            td {
                padding: 10px;
                .current {
                    font-weight:900;
                    color:yellow;
                }
            }
        }
    }
</style>
