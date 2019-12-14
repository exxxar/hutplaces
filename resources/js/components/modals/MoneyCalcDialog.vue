<template>
    <div class="modal-body money-calc-modal">

        <div class="form">
            <h1>{{title}}</h1>

            <p>{{description}}</p>

            <div class="calc">
                <div class="row">
                    <button v-on:click="decrease">-</button>
                    <input type="number" min="0" v-model.number="sum">
                    <button v-on:click="increase">+</button>
                </div>
                <div class="row">
                    <button v-on:click="sum += 500">500</button>
                    <button v-on:click="sum += 1000">1k</button>
                    <button v-on:click="sum += 2000">2k</button>
                    <button v-on:click="sum += 5000">5k</button>
                    <button v-on:click="sum += 10000">10k</button>
                </div>
            </div>
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
        props: ["buttons", "title", "description", "start"],
        data() {
            return {
                sum: this.start ? this.start : 0
            };
        },
        methods: {
            sendResult() {
                this.$emit("close")
                this.$emit("result", Math.max(this.sum, this.start));
            },
            increase: function () {
                this.sum += 500
            },
            decrease: function () {
                if (this.sum - 500 >= this.start) {
                    this.sum -= 500
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .money-calc-modal {
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
        .calc {
            background: #FFFFFF;
            padding: 28px 24px 28px 24px;
            box-sizing: border-box;
            box-shadow: 0px 0px 2px 0px #000000;
            width: 100%;
            height: 140px;
            border-radius: 5px;

            .row {
                display: flex;
                justify-content: space-between;

                input {
                    color: #2C3E50;
                    border: 1px solid #dcdcdc;
                    border-radius: 5px;
                    width: 300px;
                    height: 40px;
                    font-weight: bold;
                    text-align: center;
                    font-size: 16px;

                }

                &:nth-child(1) {
                    button {
                        width: 40px;
                        height: 40px;
                        background: #2C3E50;
                        color: #FFFFFF;
                        border-radius: 5px;
                        font-weight: bold;
                        font-size: 30px;
                        padding-bottom: 10px;
                        cursor: pointer;
                    }
                }

                &:nth-child(2) {
                    padding: 0px;
                    margin-top: 10px;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;

                    button {
                        color: #2C3E50;
                        border: 1px solid #D3D3D3;
                        border-radius: 5px;
                        width: 45px;
                        height: 40px;
                        font-weight: bold;
                        font-size: 12px;
                        cursor: pointer;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                }
            }
        }

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

