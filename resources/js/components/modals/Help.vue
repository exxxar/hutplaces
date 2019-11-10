<template>
    <div class="modal-body help-modal">
        <h1 v-html="$lang.modals.help.main_title"></h1>
        <form @submit.prevent="sendRequest" class="full">
            <div class="input-group">
                <label v-html="$lang.modals.help.title"></label>
                <input type="text" :placeholder="$lang.modals.help.title_placeholder" v-model="title" required>

            </div>
            <div class="input-group">
                <label v-html="$lang.modals.help.email"></label>
                <input type="email" :placeholder="$lang.modals.help.email_placeholder" v-model="email" required>
            </div>

            <div class="input-group">
                <label v-html="$lang.modals.help.message"></label>
                <textarea :placeholder="$lang.modals.help.message_placeholder" v-model="text" required></textarea>
            </div>
            <div class="input-group">
                <button type="submit" class="btn btn-yellow full" v-html="$lang.modals.help.ask"></button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'help',
        data() {
            return {
                email: '',
                text: '',
                title: ''
            }
        },
        methods: {
            message(message) {
                this.$notify({
                    group: 'main',
                    type: "warn",
                    title: this.$lang.modals.help.message_title,
                    text: message
                })
            },

            sendRequest(e) {
                let currentObj = this

                if (this.email == '' || this.text == '' || this.title == '') {
                    this.message(this.$lang.modals.help.error_1)
                    return
                }

                let formData = new FormData()
                formData.append('email', this.email)
                formData.append('title', this.title)
                formData.append('message', this.text)

                axios.post('/help/ask', formData)
                    .then((response) => {
                        e.target.reset()
                        this.message(this.$lang.modals.help.success_2)
                    })
                    .catch((error) => {
                        this.message(this.$lang.modals.help.error_2)
                    })

                this.message(this.$lang.modals.help.success_1)
                this.$emit('close')
            }

        }

    }
</script>

