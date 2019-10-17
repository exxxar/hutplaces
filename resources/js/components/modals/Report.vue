<template>
    <div class="modal-body report-modal">
        <div class="modal-logo">
            <img src="/img/report-logo.png" alt="">
        </div>
        <h1 v-html="$lang.messages.report"></h1>
       <!-- <router-link tag="a" disabled class="reports-link" to="/my-reports">
            {{$lang.modals.report.my_reports}}
        </router-link>-->

        <form @submit.prevent="sendReport">
            <div class="input-group">
                <label for="select-email" v-html="$lang.modals.report.email"></label>
                <input autocomplete="false" type="email" id="select-email"
                       :placeholder="$lang.modals.report.email_placeholder" v-model="email" required>
            </div>

            <div class="input-group">
                <label for="select-errorType" v-html="$lang.modals.report.error_type"></label>
                <select id="select-errorType" v-model="error_type" required>
                    <option value="0" v-html="$lang.modals.report.error_type_1" selected></option>
                    <option value="1" v-html="$lang.modals.report.error_type_2"></option>
                    <option value="2" v-html="$lang.modals.report.error_type_3"></option>
                </select>
            </div>

            <div class="input-group">
                <label for="select-errorMessage" v-html="$lang.modals.report.error_message"></label>
                <textarea autocomplete="false" id="select-errorMessage"
                          :placeholder="$lang.modals.report.error_message_placeholder" v-model="description"
                          required></textarea>
            </div>

            <div class="input-group">
                <input type="file" name="file" accept=".gif,.jpg,.jpeg,.png" id="file" ref="files" class="inputfile"
                       v-on:change="onImageChange" multiple/>
                <label for="file">
                    <p v-if="images.length==0" v-html="$lang.modals.report.choose_file"></p>
                    <p v-else>You choos {{images.length}} files</p>
                </label>

            </div>
            <div class="input-group">
                <button type="submit" class="btn btn-yellow full" v-html="$lang.modals.report.send_report"></button>
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
                images: [],
                description: '',
                email: '',
                error_type: '0',
            }
        },
        methods: {
            message(message) {
                this.$notify({
                    group: 'main',
                    type: "warn",
                    title: this.$lang.modals.report.message_title,
                    text: message
                })
            },

            onImageChange(e) {
                this.images = this.$refs.files.files
            },
            sendReport(e) {
                let currentObj = this

                if (this.email == '' || this.description == '' ) {
                    this.message(this.$lang.modals.report.error_1)
                    return
                }

                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                }

                let formData = new FormData()
                for (var i = 0; i < this.images.length; i++) {
                    let file = this.images[i]
                    formData.append('images[' + i + ']', file)
                }

                formData.append('email', this.email)
                formData.append('description', this.description)
                formData.append('error_type', this.error_type)

                axios.post('/reports/save', formData, config)
                    .then((response)=> {
                        e.target.reset()
                        this.email = ''
                        this.description = ''
                        this.message(this.$lang.modals.report.success_2)
                    })
                    .catch( (error) => {
                        this.message(this.$lang.modals.report.error_2)
                    })

                this.message(this.$lang.modals.report.success_1)
                this.$emit('close')
            }

        }

    }
</script>
