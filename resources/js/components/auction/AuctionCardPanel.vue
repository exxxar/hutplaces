<template>
    <div class="modal-body card-add-modal">
        <form @submit.prevent="save">
            <div class="row">
                <div class="half">
                    <div class="input-group card-container">
                        <input type="file" name="file" accept=".jpg,.jpeg,.png" id="file" ref="files" class="inputfile"
                               v-on:change="readURL()"/>
                        <label for="file">
                            <p v-if="prew==null" v-html="$lang.modals.auction_card_panel.choose_file"></p>
                            <img :src="prew" v-else>
                        </label>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <label for="console-type" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.console_type"></label>
                        <toggle :check="console"
                                :id="'console-type'"
                                v-on:check="setConsole($event)"
                                :labelon="'XBOX'"
                                :labeloff="'PS4'"
                                :width="140"></toggle>
                    </div>


                    <div class="input-group">
                        <label for="lot-type" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.lot_type"></label>
                        <select id="lot-type" class="form-control" @change="setLotType($event)">
                            <option value="0" v-html="$lang.modals.auction_card_panel.lot_1"></option>
                            <option value="1" v-html="$lang.modals.auction_card_panel.lot_2"></option>
                            <option value="2" selected v-html="$lang.modals.auction_card_panel.lot_3"></option>
                        </select>
                    </div>

                    <div class="input-group">
                        <label for="lifetime" v-html="$lang.modals.auction_card_panel.lifetime"></label>
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
                                v-html="$lang.modals.auction_card_panel.search_card"></button>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <p v-if="auction_data.card==null">No select card</p>
                        <a @click=" getCard('card')" v-else>Show selected card</a>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <label for="bid-price" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.bid_price"></label>
                        <input id="bid-price" type="number" min="0" max="1000000000" class="form-control"
                               v-model="auction_data.bid_price" required>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <label for="buy-price" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.buy_price"></label>
                        <input id="buy-price" type="number" min="0" max="1000000000" class="form-control"
                               v-model="auction_data.buy_price" required>
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <label for="step-price" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.step_price"></label>
                        <input id="step-price" type="number" min="0" max="1000000000" class="form-control"
                               v-model="auction_data.step_price" required>
                    </div>
                </div>
                <div class="half">
                    <div class="input-group">
                        <label for="active" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.active"></label>
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
                    <label for="description" class="col-form-label"
                           v-html="$lang.modals.auction_card_panel.description"></label>
                    <textarea id="description" class="form-control" v-model="auction_data.description"></textarea>
                </div>

            </div>


            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <label for="title" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.title"></label>
                        <input id="title" class="form-control" v-model="auction_data.title" required>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <label for="value" class="col-form-label"
                               v-html="$lang.modals.auction_card_panel.value"></label>
                        <input id="value" type="number" min="0" max="1000000000" class="form-control"
                               v-model="auction_data.value">
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <button class="btn btn-yellow full" type="submit"
                                v-html="$lang.modals.auction_card_panel.save"></button>
                    </div>
                </div>
                <div class="half">

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
                <card :card="card_example"></card>
            </scroll>
        </modal>
    </div>
</template>

<script>

    import Toggle from '@/components/Toggle.vue'
    import Scroll from 'vue-custom-scrollbar'
    import CardSearch from '@/components/admin/CardSearchNHLHUT.vue'
    import Card from '@/components/admin/CardNHLHUT.vue'


    export default {
        name: 'AuctionCardPanel',
        props: ["user"],
        data: function () {
            return {
                lifetime: this.$store.getters.LIFETIME,
                isCard: true,
                console: false,
                active: true,
                prew: null,
                card_example:'',
                auction_data: {
                    console_type: 0,
                    lot_type: 2,
                    game_type: 1,
                    lifetime: 0,
                    bid_price: 0,
                    buy_price: 0,
                    step_price: 0,
                    title: '',
                    description: '',
                    value: '',
                    card: null,
                },
            }
        },

        methods: {
            getCard(modal) {
                //<a id="3481" href
                let start = this.auction_data.card.indexOf(`<a id="`)+7;
                let end = this.auction_data.card.indexOf(`" href`);
                let id = this.auction_data.card.substr(start,end-start);

                this.$loading(true)
                this.request_url = `https://nhlhutbuilder.com/player-stats.php?sb=1&id=${id}`;
                axios.post('search_nhlhut_player', {url: this.request_url})
                    .then(res => {
                        let start = res.data.indexOf(`<div id="player_stats_page" class="container">`);
                        let end = res.data.indexOf(`</body>`);

                        this.card_example = res.data.substr(start,end-start);

                        start = this.card_example.indexOf("<img");
                        end = this.card_example.indexOf("/>")+2;
                        let img = this.card_example.substr(start,end-start);

                        this.card_example = this.card_example.replace(/src="/gi,`src="https://nhlhutbuilder.com/`)

                        this.$loading(false)
                        this.show(modal)

                    }).catch(err => {
                    console.log(err)
                    this.$loading(false)
                    this.message("Ошибка загрузки карточки", `Ничего не найдено!`, 'error');

                })
            },
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

                if (this.auction_data.lot_type == 2 && this.auction_data.card == null) {
                    this.message(this.$lang.modals.auction_card_panel.error_3)
                    return
                }

                if (!this.active)
                    this.message(this.$lang.modals.auction_card_panel.error_2)

                if (this.auction_data.bid_price == 0 || this.auction_data.step_price == 0) {
                    this.message(this.$lang.modals.auction_card_panel.error_1)
                    return
                }


                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                }

                let formData = new FormData()
                let file = this.$refs.files.files[0];

                if (file != null)
                    formData.append('image', file)

                formData.append('console_type', this.auction_data.console_type)
                formData.append('lot_type', this.auction_data.lot_type)
                formData.append('game_type', this.auction_data.game_type)
                formData.append('lifetime', this.auction_data.lifetime)
                formData.append('places', this.auction_data.places)
                formData.append('bid_price', this.auction_data.bid_price)
                formData.append('buy_price', this.auction_data.buy_price)
                formData.append('step_price', this.auction_data.step_price)
                formData.append('card', JSON.stringify(this.auction_data.card))
                formData.append('active', this.active ? 1 : 0)
                formData.append('title', this.auction_data.title)
                formData.append('description', this.auction_data.description)
                formData.append('value', this.auction_data.value)

                axios.post('/auction/add', formData, config)
                    .then((response) => {
                        this.message(this.$lang.modals.auction_card_panel.success_1)

                        this.$store.dispatch("loadAuctions", {type: 0})
                    })
                    .catch((error) => {
                        this.message(this.$lang.modals.auction_card_panel.error_4)
                    })

                this.message(this.$lang.modals.auction_card_panel.success_2)
                this.$emit('close')
            },

            prepareLifetime(time) {
                return eval(`this.$lang.lifetime.${time}`);
            },
            setConsole(event) {
                this.auction_data.console_type = event ? 0 : 1;
            },
            setActive(event) {
                this.auction_data.active = event;
            },
            setLifetime(event) {
                this.auction_data.lifetime = event.target.value;
            },
            setLotType(event) {
                this.auction_data.lot_type = event.target.value
                switch (event.target.value) {
                    default:
                    case '0':
                        this.isCard = false;
                        this.auction_data.card = null;
                        this.prew = "img/item-element.jpg"
                        break;
                    case '1':
                        this.isCard = false;
                        this.auction_data.card = null;
                        this.prew = "img/coins-element.jpg"
                        break;
                    case '2':
                        this.prew = "img/item-element.jpg"
                        this.isCard = true;
                        break;
                }
            },
            onCardFind(data) {
                let start = data.card_art.indexOf(`id="`)+4;
                let end = data.card_art.indexOf(`" href`);
                let imgId = data.card_art.substr(start,end-start);

                this.prew = `https://nhlhutbuilder.com/images/card_art/players/${imgId}.jpg`;
                console.log("card", data)
                this.auction_data.card = data;

                start = data.full_name.indexOf(`">`)+2;
                end = data.full_name.indexOf(`</`);
                let full_name = data.full_name.substr(start,end-start);

                this.auction_data.title = full_name;

                this.auction_data.description = data.nationality;
                this.auction_data.value = data.overall;
                this.auction_data.buy_price = 0;
                this.auction_data.bid_price = 0;
                this.auction_data.step_price = 0;
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

