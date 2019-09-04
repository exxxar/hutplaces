<template>
    <div class="onoffswitch" :style="cssProps" @click="click()">
        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" :id="id" :checked="check"
               v-model="value">
        <label class="onoffswitch-label" :for="id">
            <span class="onoffswitch-inner" :on="labelon" :off="labeloff"></span>
            <span class="onoffswitch-switch" :on="labelon" :off="labeloff"></span>
        </label>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                value: false
            }
        },
        props: {
            id: {type: String, default: 'id', required: true},
            labelon: {type: String, default: 'inherit', required: true},
            labeloff: {type: String, default: 'inherit', required: true},
            width: {type: Number, default: 160, required: true},
            check: {type: Boolean, default: false, required: false}
        },
        methods: {
            click() {
                this.$emit('check', this.value)
            }
        },
        computed: {
            cssProps() {
                return {
                    '--component-width': (this.width) + 'px'
                }
            }
        }
    }
</script>
<style lang="scss">
    @import "~/toggle.scss";
</style>
