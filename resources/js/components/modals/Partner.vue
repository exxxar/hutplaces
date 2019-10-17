<template>
    <div class="modal-body partner-modal">
        <h1 v-html="$lang.modals.partner.title"></h1>
        <p v-html="$lang.modals.partner.description"></p>
        <form @submit.prevent="sendRequest" class="full">
            <div class="input-group">
                <label v-html="$lang.modals.partner.email"></label>
                <input type="email" :placeholder="$lang.modals.partner.email_placeholder" v-model="email" required>
            </div>

            <div class="input-group">
                <label v-html="$lang.modals.partner.message"></label>
                <textarea :placeholder="$lang.modals.partner.message_placeholder" v-model="text" required></textarea>
            </div>


            <div class="input-group">
                <button type="submit" class="btn btn-yellow full" v-html="$lang.modals.partner.send"></button>
            </div>
        </form>

    </div>
</template>
<script>
    export default {
        name: 'report',
        props: ['show'],
        data() {
            return {
                email: '',
                text: ''
            }
        },
        methods: {
            message(message) {
                this.$notify({
                    group: 'main',
                    type: "warn",
                    title: this.$lang.modals.partner.message_title,
                    text: message
                })
            },


            sendRequest(e) {
                let currentObj = this

                if (this.email == '' || this.text == '') {
                    this.message(this.$lang.modals.partner.error_1)
                    return
                }

                let formData = new FormData()
                formData.append('email', this.email)
                formData.append('message', this.text)

                axios.post('/partner/request', formData)
                    .then((response) => {
                        e.target.reset()
                        this.message(this.$lang.modals.partner.success_2)
                    })
                    .catch((error) => {
                        this.message(this.$lang.modals.partner.error_2)
                    })

                this.message(this.$lang.modals.partner.success_1)
                this.$emit('close')
            }

        }

    }
</script>
