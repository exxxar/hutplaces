<template>
    <div>
        <div class="modal-mask" v-show="show" transition="modal">
            <div class="modal-container">

                <div class="modal-header">
                    <a href="#" class="close" @click="close()"><img src="/img/close-modal.png" alt=""></a>
                </div>

                <div class="modal-body">
                    <img src="/img/payment-logo.png" alt="">
                    <h3>Промокоды</h3>


                </div>

                <div class="modal-footer text-right">
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'promo',
        props: ["show"],
        methods: {
            close() {
                this.$emit('close', false);
            },
        },
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

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
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
        input {
            display: block;
            width: 100%;
            height: 41px;
            border: none;
            border-bottom: 2px solid white;
            padding: 0.5em 1em;
            line-height: 1.5;
        }
    }

    .text-right {
        text-align: right;
    }

    .form-label {
        display: block;
        margin-bottom: 1em;
    }

    .form-label > .form-control {
        margin-top: 0.5em;
    }

    .form-control {
        display: block;
        width: 100%;
        padding: 0.5em 1em;
        line-height: 1.5;
        border: 1px solid #ddd;
    }

    .modal-enter, .modal-leave {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .close {
        position: absolute;
        top: 25px;
        right: 25px;
    }

    .v-input.theme--light {
        width: 100%;
    }

    .v-input__slot:before {
        border-color: rgb(255, 255, 255) !important;
    }

    .theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
        text-align: center;
        font-size: 36px;
    }

    theme--light.v-label {
        left: 10px;
        position: absolute;
    }
</style>