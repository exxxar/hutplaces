<template>
    <div class="modal-body modal-drafts" v-if="lotteries!=null">
        <h1>Черновики [{{lotteries != null ? lotteries.length : 0}}]</h1>

        <game-item v-if="prepareLotteries().length>0"
                   :game="game"
                   :controls="true"
                   :user="user"
                   :lifetime="lifetime"
                   v-for="game in prepareLotteries()"></game-item>

        <div class="input-group">
            <button class="btn btn-yellow" @click="nextPage()"
                    v-if="this.lotteries.length>=(this.step*this.page+this.step)">
                Показать еще
            </button>
        </div>
    </div>
</template>

<script>

    import GameItem from '@/components/GameItem.vue'

    export default {
        props: ["user"],
        data() {
            return {
                step: 4,
                page: 0,
                lotteries: null,
                lifetime:null
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData',
            loadGames(newValue, oldValue) {
                this.lotteries = newValue
            },
            loadLifetime(newValue, oldValue) {
                this.lifetime = newValue
            }
        },


        mounted() {


            Event.$on('updateDrafts', () => {
                this.fetchData()
            });
        },
        computed: {
            loadLifetime() {
                return this.$store.getters.LIFETIME;
            },
            loadGames() {
                return this.$store.getters.DRAFTS;
            }
        },

        methods: {
            fetchData() {
                this.$store.dispatch("loadDrafts")
                this.$store.dispatch("loadAllSettings")
            },
            nextPage() {
                this.page += 1;
            },
            prepareLotteries() {
                return this.lotteries != null ? this.lotteries.slice(0, this.page * this.step + this.step) : [];
            }
        },
        components: {
            GameItem
        }

    }
</script>
<style lang="scss" scoped>

    .modal-drafts {
        width: 100%;
        justify-content: center;

        .input-group {
            justify-content: center;
        }
    }


</style>
