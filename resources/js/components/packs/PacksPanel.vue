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
                        <label for="packs-type" class="col-form-label"></label>
                        <select name="packs-type" id="packs-type" v-model="packs_data.packs_type">
                            <option value="0" selected>Частые</option>
                            <option value="1">Редкие</option>
                            <option value="2">Уникальные</option>
                            <option value="3">Легендарные</option>
                        </select>
                    </div>

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
                    <label for="title" class="col-form-label">Название</label>
                    <input type="text" id="title" class="form-control" v-model="packs_data.title" required>
                </div>
            </div>

            <div class="row">
                <div class="input-group">
                    <label for="description" class="col-form-label">Описание</label>
                    <textarea id="description" class="form-control" v-model="packs_data.description"
                              required></textarea>
                </div>
            </div>

            <div class="row">
                <div class="input-group">
                    <label for="price" class="col-form-label">Цена</label>
                    <input id="price" type="number" min="0" max="1000000000" class="form-control"
                           v-model="packs_data.price" required>
                </div>
            </div>

            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <label for="lots-in-pack" class="col-form-label">Лоты в паке</label>
                        <input id="lots-in-pack" type="number" min="0" max="1000000000" class="form-control"
                               v-model="packs_data.lots_in_pack" required>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">
                        <label for="lots-guaranteed" class="col-form-label">Гарантированные призы</label>
                        <input id="lots-guaranteed" type="number" min="0" max="1000000000" class="form-control"
                               v-model="packs_data.lots_guaranteed" required>
                    </div>
                </div>


            </div>
            <h2>Формирование рейтингов выпадения</h2>
            <div class="row" v-for="(component,index) in packs_data.raitings">
                <div class="third">
                    <div class="input-group">
                        <label :for="`min-ovr-${index}`" class="col-form-label">Min OVR</label>
                        <input :id="`min-ovr-${index}`" type="number" min="0" max="100" class="form-control"
                               v-model="packs_data.raitings[index].min_ovr" required>
                    </div>

                    <div class="input-group">
                        <label :for="`max-ovr-${index}`" class="col-form-label">Max OVR</label>
                        <input :id="`max-ovr-${index}`" type="number" min="0" max="100" class="form-control"
                               v-model="packs_data.raitings[index].max_ovr" required>
                    </div>

                    <div class="input-group">
                        <label :for="`rate-${index}`" class="col-form-label">Rate</label>
                        <input :id="`rate-${index}`" type="number" min="0" max="100" class="form-control"
                               v-model="packs_data.raitings[index].rate" required>
                    </div>

                </div>


                <div class="input-group">
                    <button class="btn btn-primary full"
                            v-if="packs_data.raitings[index].btn"
                            type="button" @click="addRate(index)">Еще
                    </button>
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


    </div>
</template>

<script>

    import Toggle from '@/components/Toggle.vue'
    import Scroll from 'vue-custom-scrollbar'
    import CardSearch from '@/components/admin/CardSearch.vue'
    import Card from '@/components/admin/Card.vue'


    export default {
        name: 'PacksPanel',
        props: ["user"],
        data: function () {
            return {
                console: false,
                active: true,
                prew: null,
                packs_data: {
                    console_type: 0,
                    game_type: 1,
                    packs_type: 0,
                    lifetime: 0,
                    price: 0,
                    lots_in_pack: 0,
                    lots_guaranteed: 0,
                    title: '',
                    description: '',
                    raitings: [
                        {
                            min_ovr: 0,
                            max_ovr: 0,
                            rate: 0,
                            btn: true
                        },
                    ]
                },
            }
        },

        methods: {
            addRate(index) {
                this.packs_data.raitings[index].btn = false;

                this.packs_data.raitings.push({
                    min_ovr: 0,
                    max_ovr: 0,
                    rate: 0,
                    btn: true
                });
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
                var rate_sum = 0;

                console.log("packs data", this.packs_data)
                this.packs_data.raitings.forEach((el) => {
                    rate_sum += parseInt(el.rate)

                    console.log("rate", el.rate, " sum=", rate_sum)
                    if (el.min_ovr >= el.max_ovr) {
                        this.message("Min OVR должен быть меньше Max OVR")
                        return
                    }
                })

                if (rate_sum > 100) {
                    this.message("Суммарный рейтинг больше 100%, должен быть ровно 100%!")
                    return
                }

                if (rate_sum < 100) {
                    this.message("Суммарный рейтинг меньше 100%, должен быть ровно 100%!")
                    return
                }

                if (parseInt(this.packs_data.price) <= 0) {
                    this.message("Укажите верную цену пака!")
                    return
                }

                if (parseInt(this.packs_data.lots_in_pack) <= 0) {
                    this.message("Укажите верное число лотов в паке!")
                    return
                }

                if (parseInt(this.packs_data.lots_guaranteed) > parseInt(this.packs_data.lots_in_pack)) {
                    this.message("Гарантированных лотов больше чем всего лотов!")
                    return
                }

                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                }

                let formData = new FormData()
                let file = this.$refs.files.files[0];

                if (file != null)
                    formData.append('image', file)

                formData.append('console_type', this.packs_data.console_type)
                formData.append('game_type', this.packs_data.game_type)
                formData.append('packs_type', this.packs_data.packs_type)
                formData.append('price', this.packs_data.price)
                formData.append('is_active', this.active ? 1 : 0)
                formData.append('title', this.packs_data.title)
                formData.append('description', this.packs_data.description)
                formData.append('lots_in_pack', this.packs_data.lots_in_pack)
                formData.append('lots_guaranteed', this.packs_data.lots_guaranteed)
                formData.append('raitings', JSON.stringify(this.packs_data.raitings))


                axios.post('/packs/add', formData, config)
                    .then((response) => {
                        this.message(this.$lang.modals.auction_card_panel.success_1)

                        this.$store.dispatch("loadPacks")
                    })
                    .catch((error) => {
                        this.message(this.$lang.modals.auction_card_panel.error_4)
                    })

                this.message(this.$lang.modals.auction_card_panel.success_2)
                this.$emit('close')
            },

            setConsole(event) {
                this.packs_data.console_type = event ? 0 : 1;
            },
            setActive(event) {
                this.packs_data.active = event;
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

    .third {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>

