<template>

    <div class="modal-body promo-modal">
        <div class="modal-logo"><img v-lazy="'/img/promo-logo.png'" alt=""></div>
        <h1 v-html="$lang.modals.promocodes.title"></h1>
        <div class="input-group">
            <label v-html="$lang.modals.promocodes.your_promo"></label>
            <input type="text" autocomplete="off" v-model="promo" maxlength="8">
        </div>

        <div class="input-group">
            <button class="btn btn-yellow full" @click="doRequest()" v-html="$lang.modals.promocodes.activate"></button>
        </div>
    </div>

</template>
<script>

    export default {
        name: 'promo',
        data() {
            return {
                promo: ""
            }
        },
        methods: {
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.modals.promocodes.error_title,
                    text: message
                })
            },
            doRequest() {
                if (this.promo.length != 8) {
                    this.message(this.$lang.modals.promocodes.error_1);
                    return;
                }
                axios
                    .post('/promo/activate', {
                        code: this.promo
                    }).then(response => {
                    this.message(response.data.message);
                });
            }
        }

    }
</script>
<style>

</style>
