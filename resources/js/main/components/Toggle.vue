<template>
    <div class="onoffswitch" :style="cssProps" @click="click()">
        <input type="checkbox" name="onoffswitch"  class="onoffswitch-checkbox" :id="id" :checked="check" v-model="value">
        <label class="onoffswitch-label" :for="id">
            <span class="onoffswitch-inner" :on="labelon" :off="labeloff"></span>
            <span class="onoffswitch-switch" :on="labelon" :off="labeloff"></span>
        </label>
    </div>
</template>

<script>

    export default {

        data(){
          return {
              value:false
          }
        },
        props: {
            id: {type: String, default: "id", required: true},
            labelon: {type: String, default: "inherit", required: true},
            labeloff: {type: String, default: "inherit", required: true},
            width: {type: Number, default:160 , required: true},
            check: {type:Boolean, default:false,required:false},
        },
        methods: {
            click() {
                this.$emit('check',this.value );
            },
        },
        computed: {
            cssProps() { return {
                '--component-width': (this.width) + "px",
                }
            }
        }

    }
</script>
<style lang="scss">


    .onoffswitch {
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        width: var(--component-width);
        .onoffswitch-checkbox {
            display: none;
        }

        .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
            margin-left: 0;
        }
        .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
            right: 0px;

            padding:0px 10px;
        }

        .onoffswitch-checkbox + .onoffswitch-label .onoffswitch-switch:after {
            content: attr(on);
            font-size: 14px;
            color: #404040;;
            font-weight: 600;
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-family: Trebuchet, Arial, sans-serif;
            font-weight: bold;

        }
        .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch:after {
            content: attr(off);
            font-size: 14px;
            font-weight: 600;
            color: #404040;;
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-family: Trebuchet, Arial, sans-serif;
            font-weight: bold;

        }

        .onoffswitch-label {
            display: block;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid yellow;
            border-radius: 5px;
            .onoffswitch-inner {
                display: block;
                width: 200%;
                margin-left: -100%;
                transition: margin 0.1s ease-in 0s;

                &:before {
                    content: attr(on);
                    padding-left: 15px;
                    background-color: #404040;
                    color: #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                &:after {
                    content: attr(off);
                    padding-right: 15px;
                    background-color: #404040;
                    color: white;
                    text-align: right;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                }
            }

            .onoffswitch-switch {
                display: block;
                //width: var(--width-off);
                padding:0px 10px;
                margin: 5px;
                background: yellow;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 73px;
                border: 2px solid yellow;
                border-radius: 2px;
                transition: all 0.1s ease-in 0s;
            }

            .onoffswitch-inner:before, .onoffswitch-inner:after {
                display: block;
                float: left;
                width: 50%;
                height: 40px;
                padding: 6px 20px 5px 20px;
                line-height: 30px;
                font-size: 14px;
                color: white;
                font-family: Trebuchet, Arial, sans-serif;
                font-weight: bold;
                box-sizing: border-box;
            }
        }


    }


</style>
