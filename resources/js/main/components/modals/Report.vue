<template>
    <div>
        <div class="modal-mask" v-show="show" transition="modal">
            <div class="modal-container">

                <div class="modal-header">
                    <a href="#" class="close" @click="close()"><img src="/img/close-modal.png" alt=""></a>
                </div>

                <div class="modal-body">
                    <img src="/img/report-logo.png" alt="">
                    <h3>{{$lang.messages.report}}</h3>
                    <router-link tag="a" disabled class="reports-link" to="/my-reports">{{$lang.messages.my_reports}}</router-link>
                    <p v-if="success != ''" class="alert" role="alert" @click="success=''">
                        {{success}}
                    </p>


                    <form @submit.prevent="formSubmit">

                        <div class="form-group">
                            <input autocomplete="false" type="text" id="email" class="form-control"
                                   placeholder="Enter email" v-model="email" required>
                        </div>

                        <div class="form-group">
                            <textarea autocomplete="false" id="description" class="form-control"
                                      placeholder="Enter problem description" v-model="description" required></textarea>
                        </div>


                        <div class="form-group">

                            <input type="file" name="file" accept=".gif,.jpg,.jpeg,.png" id="file" ref="files" class="inputfile" v-on:change="onImageChange" multiple/>
                            <label for="file">
                                <p v-if="images.length==0">Choose a file</p>
                                <p v-else>You choos {{images.length}} files</p>

                            </label>




                        </div>
                        <button type="submit" class="btn btn-default">Send</button>
                    </form>

                </div>

                <div class="modal-footer text-right">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'report',
        props: ["show"],
        data() {
            return {
                images: [],
                title: '',
                description: '',
                email: '',
                success: ''
            }
        },
        methods: {
            close() {
                this.email = "";
                this.description = "";
                this.success="";
                this.$emit('close', false);
            },
            onImageChange(e) {
                this.images = this.$refs.files.files;


            },
            formSubmit(e) {

                let currentObj = this;

                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                }

                let formData = new FormData();
                for (var i = 0; i < this.images.length; i++) {
                    let file = this.images[i];
                    formData.append('images[' + i + ']', file);
                }

                formData.append('email', this.email);
                formData.append('description', this.description);

                axios.post('/reportSubmit', formData, config)
                    .then(function (response) {
                        currentObj.success = response.data.success;
                        e.target.reset();
                        this.email = "";
                        this.description = "";
                        this.success="";
                    })
                    .catch(function (error) {

                        currentObj.output = error;
                    });

            }

        }

    }
</script>
<style scoped="scope" lang="scss">

    * {
        box-sizing: border-box;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .9);
        transition: opacity .3s ease;
    }

    .modal-container {
        width: 510px;
        margin: 170px auto 0;
        //padding: 20px 30px;
        background-color: rgba(0, 0, 0, 0);
        transition: all .3s ease;
    }

    .modal-header {

        .close {
            position: fixed;
            top: 20px;
            right: 50px;
        }
        h3 {
            margin-top: 0;
            color: #42b983;
        }
    }

    .modal-body {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        h3 {
            width: 100%;
            color: white;
            text-align: center;
            font-weight: 800;
            font-size: 24px;
            /* line-height: 50px; */
            margin-top: 25px;
            text-transform: uppercase;
        }

        .reports-link {
            color:white;
            font-size: 14px;
            text-decoration-color: white;
            text-decoration-style: dashed;
            cursor:pointer;
        }

        .alert {
            color: #acff7d;
            width:100%;
            line-height: 200%;
            text-align: center;
            cursor:pointer;

        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding-top:20px;
            .form-group {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                flex-wrap: wrap;
                padding: 5px;
                label {
                    display: block;
                    color: #8f8f8f;
                    position: relative;
                    width: 100%;
                }

                textarea,
                input {
                    font-size: 14px;
                    padding: 15px 20px;
                    width: 500px;
                    background: transparent;
                    display: block;
                    border: 1px yellow solid;
                    color: white;
                    font-weight: 100;
                    &:focus {
                        outline: none;
                    }
                }

                textarea {
                    height:200px;
                }

            }

        }
        button[type="submit"] {
            width: 100%;
            font-size: 18px;
            padding: 15px 10px;
            color: #353535;
            font-weight: 800;
            box-shadow: 0px 2px 2px 1px black, 0px 0px 8px 0px white inset;
            background: yellow;
        }
    }

    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .inputfile + label {
        font-size: 14px;
        padding: 15px 20px;
        width: 500px;
        /* background: #2196F3; */
        display: block;
        border: 2px #fbfffb dashed;
        margin-bottom: 30px;
        text-align: center;
        color: white;
        font-weight: 100;
        transition: .5s border;
    }

    .inputfile:focus + label,
    .inputfile + label:hover {
        border: 2px yellow dashed;
        transition: .5s border;
        p {
         cursor:pointer;
        }

    }


    .inputfile:focus + label {
        outline: none;
    }
</style>