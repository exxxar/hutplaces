<template>
    <div class="modal-body win-modal">

        <div class="form">
            <h1>{{title}}</h1>

            <p>{{description}}</p>
            <div class="row">
                <div class="input-group">
                    <button class="btn btn-yellow" @click="close()">Продолжить</button>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        name: 'confirm',
        props: ["title", "description"],
        methods: {
            close() {
                this.$emit("close")
            },
        }

    }
</script>

<style lang="scss" scoped>
    .win-modal {
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

            .input-group {
                width: 100%;
                justify-content: center;
            }

        }
    }
</style>

