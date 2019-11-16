<template>
    <div class="modal-body confirm-modal">

        <div class="form">
            <h1>{{title}}</h1>

            <p>{{description}}</p>
            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <button type="submit" class="btn btn-yellow" @click="sendResult(true)">{{buttons.ok}}</button>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <button type="submit" class="btn btn-primary" @click="sendResult(false)">{{buttons.cancel}}
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        name: 'confirm',
        props: ["buttons", "title", "description"],
        methods: {
            sendResult(res) {
                this.$emit("close")
                this.$emit("result", res);
            },
        }

    }
</script>

<style lang="scss" scoped>
    .confirm-modal {
        display: flex;
        align-items: center;

        justify-content: center;

        width: 100%;
        height: 100vh;
    }

    .form {
        width: 500px;
        display: flex;
        flex-wrap: wrap;
        .row {
            display: flex;
            justify-content: center;
            width: 100%;

            .half:nth-of-type(1) {
                .input-group {
                    justify-content: flex-end;
                }
            }

            .half:nth-of-type(2) {
                .input-group {
                    justify-content: flex-start;
                }
            }
        }
    }
</style>

