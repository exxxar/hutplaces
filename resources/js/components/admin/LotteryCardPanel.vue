<template>
    <div class="modal-body card-add-modal">
        <form @submit.prevent="save">
            <div class="row">
                <div class="half">
                    <div class="input-group card-container">
                        <input type="file" name="file" accept=".jpg,.jpeg,.png" id="file" ref="files" class="inputfile"
                               v-on:change="readURL()"/>
                        <label for="file">
                            <p v-if="prew==null" v-html="$lang.modals.user_card_panel.choose_file"></p>
                            <img :src="prew" v-else>
                        </label>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <label for="console-type" class="col-form-label"
                               v-html="$lang.modals.user_card_panel.console_type"></label>
                        <toggle :check="console"
                                :id="'console-type'"
                                v-on:check="setConsole($event)"
                                :labelon="'XBOX'"
                                :labeloff="'PS4'"
                                :width="140"></toggle>
                    </div>


                    <div class="input-group">
                        <label for="lot-type" class="col-form-label"
                               v-html="$lang.modals.user_card_panel.lot_type"></label>
                        <select id="lot-type" class="form-control" @change="setLotType($event)">
                            <option value="0" v-html="$lang.modals.user_card_panel.lot_1"></option>
                            <option value="1" v-html="$lang.modals.user_card_panel.lot_2"></option>
                            <option value="2" selected v-html="$lang.modals.user_card_panel.lot_3"></option>
                        </select>
                    </div>

                    <div class="input-group">
                        <label for="lifetime" v-html="$lang.modals.user_card_panel.lifetime"></label>
                        <select id="lifetime" class="form-control" @change="setLifetime($event)">
                            <option v-if="lifetime!=null&&lifetime.length>0" v-for="time in lifetime"
                                    :value="time.value">
                                {{prepareLifetime(time.key)}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row" v-if="isCard">
                <div class="half">
                    <div class="input-group">
                        <button class="btn btn-primary full" type="button" @click="show('card-add')"
                                v-html="$lang.modals.user_card_panel.search_card"></button>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <p v-if="lottery_data.card==null">No select card</p>
                        <a @click="show('card')" v-else>Show selected card</a>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <label for="title" class="col-form-label" v-html="$lang.modals.user_card_panel.title"></label>
                        <input id="title" class="form-control" v-model="lottery_data.title" required>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <label for="base-price" class="col-form-label"
                               v-html="$lang.modals.user_card_panel.base_price"></label>
                        <input id="base-price" type="number" min="0" max="1000000000" class="form-control"
                               v-model="lottery_data.base_price" required>
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <label for="places" class="col-form-label" v-html="$lang.modals.user_card_panel.place"></label>
                        <input id="places" type="number" min="0" max="9999" maxlength="4" class="form-control"
                               v-model="lottery_data.places" required>
                    </div>
                </div>
                <div class="half">
                    <div class="input-group">
                        <label for="discount" class="col-form-label"
                               v-html="$lang.modals.user_card_panel.discount"></label>
                        <input id="discount" type="number" min="0" max="100" maxlength="2" class="form-control"
                               v-model="lottery_data.base_discount" required>
                    </div>
                </div>
            </div>

            <div class="row" v-if="!isCard">

                <div class="input-group">
                    <label for="description" class="col-form-label"
                           v-html="$lang.modals.user_card_panel.description"></label>
                    <textarea id="description" class="form-control" v-model="lottery_data.description"></textarea>
                </div>

            </div>

            <div class="row" v-if="!isCard&&lottery_data.lot_type==1">
                <div class="input-group">
                    <label for="value" class="col-form-label" v-html="$lang.modals.user_card_panel.value"></label>
                    <input id="value" type="number" min="0" max="1000000000" class="form-control"
                           v-model="lottery_data.value">
                </div>
            </div>


            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <button class="btn btn-yellow full" type="submit"
                                v-html="$lang.modals.user_card_panel.save"></button>
                    </div>
                </div>
                <div class="half">
                    <div class="input-group">
                        <label for="active" class="col-form-label" v-html="$lang.modals.user_card_panel.active"></label>
                        <toggle :check="active"
                                :id="'active'"
                                v-on:check="setActive($event)"
                                :labelon="'On'"
                                :labeloff="'Off'"
                                :width="120"></toggle>
                    </div>
                </div>

            </div>

            <div class="row">

                    <div class="input-group">
                        <label for="start_at">Начать в</label>
                        <input type="datetime-local" id="start_at" v-model="lottery_data.start_at">
                    </div>



            </div>

        </form>


        <modal name="card-add" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('card-add')" class="close"></a>
                <card-search v-on:card='onCardFind($event)'></card-search>
            </scroll>
        </modal>

        <modal name="card" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('card')" class="close"></a>
                <card :card="lottery_data.card"></card>
            </scroll>
        </modal>
    </div>
</template>

<script>

    import Toggle from '@/components/Toggle.vue'
    import Scroll from 'vue-custom-scrollbar'
    import CardSearch from '@/components/admin/CardSearch.vue'
    import Card from '@/components/admin/Card.vue'


    export default {
        name: 'UserCardPanel',
        props:["user"],
        data: function () {
            return {
                lifetime:this.$store.getters.LIFETIME,
                isCard: true,
                console: false,
                active: true,
                prew: null,
                lottery_data: {
                    console_type: 0,
                    lot_type: 2,
                    game_type: 1,
                    lifetime: 0,
                    places: 0,
                    base_price: 0,
                    base_discount: 0,
                    title: '',
                    description: '',
                    value: '',
                    start_at:'',
                    card: null,
                },
            }
        },

        methods: {
            readURL() {
                const input = this.$refs.files
                const files = input.files
                if (files && files[0]) {
                    const reader = new FileReader
                    reader.onload = e => {
                        this.prew = e.target.result
                    }
                    reader.readAsDataURL(files[0])
                }
            },
            save() {

                if (this.lottery_data.lot_type == 2 && this.lottery_data.card == null) {
                    this.message(this.$lang.modals.user_card_panel.error_3)
                    return
                }

                if (!this.active)
                    this.message(this.$lang.modals.user_card_panel.error_2)

                if (this.lottery_data.base_price == 0 || this.lottery_data.places == 0) {
                    this.message(this.$lang.modals.user_card_panel.error_1)
                    return
                }


                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                }

                let formData = new FormData()
                let file = this.$refs.files.files[0];

                if (file != null)
                    formData.append('image', file)

                formData.append('console_type', this.lottery_data.console_type)
                formData.append('lot_type', this.lottery_data.lot_type)
                formData.append('game_type', this.lottery_data.game_type)
                formData.append('lifetime', this.lottery_data.lifetime)
                formData.append('places', this.lottery_data.places)
                formData.append('base_price', this.lottery_data.base_price)
                formData.append('base_discount', this.lottery_data.base_discount)
                formData.append('title', this.lottery_data.title)
                formData.append('description', this.lottery_data.description)
                formData.append('value', this.lottery_data.value)
                formData.append('card', JSON.stringify(this.lottery_data.card))
                formData.append('active', this.active ? 1 : 0)
                formData.append('start_at', this.lottery_data.start_at)

                axios.post('/lottery/add', formData, config)
                    .then((response) => {
                        this.message(this.$lang.modals.user_card_panel.success_1)
                        this.$store.dispatch("loadGames")
                    })
                    .catch((error) => {
                        this.message(this.$lang.modals.user_card_panel.error_4)
                    })

                this.message(this.$lang.modals.user_card_panel.success_2)
                this.$emit('close')
            },

            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
            },
            setConsole(event) {
                this.lottery_data.console_type = event ? 0 : 1;
            },
            setActive(event) {
                this.lottery_data.active = event;
            },
            setLifetime(event) {
                this.lottery_data.lifetime = event.target.value;
            },
            setLotType(event) {
                this.lottery_data.lot_type = event.target.value
                switch (event.target.value) {
                    default:
                    case '0':
                        this.isCard = false;
                        this.lottery_data.card = null;
                        this.lottery_data.title = '';
                        this.prew = "img/item-element.jpg"
                        break;
                    case '1':
                        this.isCard = false;
                        this.lottery_data.card = null;
                        this.lottery_data.title = '';
                        this.prew = "img/coins-element.jpg"
                        break;
                    case '2':
                        this.prew = "img/item-element.jpg"
                        this.isCard = true;
                        break;
                }
            },
            onCardFind(data) {
                console.log("card", data)
                this.lottery_data.card = data;
                this.lottery_data.title = this.lottery_data.card.player
                this.hide("card-add")
            },

            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            message(message) {
                this.$notify({
                    group: 'main',
                    type: 'warn',
                    title: this.$lang.modals.user_card_panel.error_title,
                    text: message
                })
            },
        },

        components: {
            Scroll, CardSearch, Toggle, Card
        }

    }
</script>

<style lang="scss">
    .center-modal {
        padding: 20px;
    }
</style>

