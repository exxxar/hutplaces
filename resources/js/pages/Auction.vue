<template>
    <div class="info-block">

        <tabs :options="{ useUrlFragment: false }">
            <tab :name="$lang.auction.lots">
                <all-lots></all-lots>
            </tab>
            <tab :name="$lang.auction.my_bids">
                <scroll class="scroll-area">
                    <my-bids></my-bids>
                </scroll>
            </tab>
            <tab :name="$lang.auction.my_lots">
                <my-lots :userId="user.id"></my-lots>
            </tab>
        </tabs>
    </div>
</template>

<script>

    import Scroll from 'vue-custom-scrollbar'
    import MyLots from '@/components/auction/MyLots.vue'
    import MyBids from '@/components/auction/MyBids.vue'
    import AllLots from '@/components/auction/AllLots.vue'

    export default {
        data() {
            return {
                content: {
                    title: this.$lang.auction.main_title,
                    content: this.$lang.auction.main_description
                },
                user:null
            }
        },
        mounted(){
          this.loadCurrentUser();
        },
        methods:{
            loadCurrentUser() {
                this.$store.dispatch('getCurrentUser')
                    .then(() => {
                        this.user = this.$store.getters.USER
                    });


            },
        },
        components: {
            Scroll, MyLots, AllLots, MyBids
        }

    }
</script>
<style lang="scss" scoped>
    @import "~/auction.scss";


</style>

