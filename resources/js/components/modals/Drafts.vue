<template>
    <div class="modal-body modal-drafts">
        <h1>Черновики [{{lotteries != null ? lotteries.length : 0}}]</h1>

        <game v-if="prepareLotteries()!=null&&prepareLotteries().length>0"
              :game="game"
              :controls="true"
              :user="user"
              v-for="game in prepareLotteries()"></game>

        <div class="input-group">
            <button class="btn btn-yellow" @click="nextPage()" v-if="this.lotteries.length>=(this.step*this.page+this.step)">
                Показать еще
            </button>
        </div>

    </div>
</template>

<script>

    import Game from '@/components/Game.vue'

    export default {
        props: ["user"],
        data() {
            return {
                step: 4,
                page: 0,
                lotteries: null,
            }
        },
        mounted() {
            this.$store.dispatch("loadDrafts")
        },
        computed: {
            loadGames() {
                return this.$store.getters.DRAFTS;
            }
        },
        watch: {
            loadGames(newValue, oldValue) {
                this.lotteries = newValue
            }
        },
        methods: {
            nextPage() {
                this.page += 1;
            },
            prepareLotteries() {

                console.log("array slice", this.lotteries != null ? this.lotteries.slice(0, this.page * this.step + this.step) : []);
                return this.lotteries != null ? this.lotteries.slice(0, this.page * this.step + this.step) : [];
            }
        },
        components: {
            Game
        }

    }
</script>
<style lang="scss" scoped>

    .modal-drafts {
        width: 100%;
        justify-content: center;

        .input-group {
            justify-content:center;
        }
    }


</style>
