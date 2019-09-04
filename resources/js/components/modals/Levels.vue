<template>
    <div class="modal-levels">
        <h3>Таблица уровней</h3>
        <table v-if="levels!=null&&levels.length>0">
            <tr>
                <td>title</td>
                <td>experience</td>
                <td>level</td>
                <td>discount</td>
            </tr>
            <tr v-for="level in levels">
                <td >
                    <p v-if="level.level==user.level.level" class="current">{{level.title}}</p>
                    <p v-else>{{level.title}}</p>

                </td>
                 <td>{{level.experience}}</td>
                <td>{{level.level}}</td>
                <td>{{level.discount}}</td>
            </tr>
        </table>
        <h3 v-else>Уровни не найдены!(:</h3>
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
            loadLevels() {
                axios
                    .get(`/levels`)
                    .then(response => {
                        this.levels = response.data.levels
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
