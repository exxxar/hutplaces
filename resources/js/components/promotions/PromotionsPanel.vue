<template>
    <div class="modal-body promo-add-modal">
        <form @submit.prevent="save">

            <div class="row">
                <div class="input-group">
                    <label for="title" class="col-form-label">Название</label>
                    <input type="text" id="title" class="form-control" maxlength="50" v-model="promo_data.title"
                           required>
                </div>
            </div>

            <div class="row">
                <div class="input-group">
                    <label for="description" class="col-form-label">Описание</label>
                    <textarea id="description" maxlength="255" class="form-control" v-model="promo_data.description"
                              required></textarea>
                </div>
            </div>

            <div class="row">
                <div class="input-group">
                    <label for="lifetime" v-html="$lang.modals.auction_card_panel.lifetime"></label>
                    <select id="lifetime" class="form-control" @change="setLifetime($event)" required>
                        <option v-if="lifetime!=null&&lifetime.length>0" v-for="time in lifetime"
                                :value="time.value">
                            {{prepareLifetime(time.key)}}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="input-group">
                    <label for="count" class="col-form-label">
                        Число
                    </label>
                    <input id="count" type="number" min="0" max="1000000000" class="form-control"
                           v-model="promo_data.count" required>
                </div>
            </div>

            <div class="row">
                <div class="half">
                    <div class="input-group">
                        <label for="code" class="col-form-label">
                            Код
                        </label>
                        <input id="code" type="text" maxlength="8" minlength="8" placeholder="XXXXXXXX"
                               class="form-control"
                               v-model="promo_data.code" required>
                    </div>
                </div>

                <div class="half">
                    <div class="input-group">

                        <button class="btn btn-primary refresh-btn" type="button" @click="generate()"><i
                                class="fas fa-sync-alt"></i></button>
                    </div>
                </div>

            </div>


            <h2>Призы</h2>

            <div class="row">
                <div class="input-group check">
                    <input id="is_money" type="checkbox" class="form-control"
                           v-model="is_money">
                    <label for="is_money" class="col-form-label">
                        <i class="far fa-money-bill-alt"></i>
                    </label>
                </div>

                <div class="input-group check">
                    <input id="is_exp" type="checkbox" checked class="form-control"
                           v-model="is_exp">
                    <label for="is_exp" class="col-form-label">
                        <i class="fas fa-walking"></i>
                    </label>
                </div>

                <div class="input-group check">
                    <input id="is_discount" type="checkbox" class="form-control"
                           v-model="is_discount">
                    <label for="is_discount" class="col-form-label">
                        <i class="fas fa-percent"></i>
                    </label>
                </div>

                <div class="input-group check">
                    <input id="is_coins" type="checkbox" class="form-control"
                           v-model="is_coins">
                    <label for="is_coins" class="col-form-label">
                        <i class="fas fa-coins"></i>
                    </label>
                </div>

                <div class="input-group check">
                    <input id="is_bonus" type="checkbox" class="form-control"
                           v-model="is_bonus">
                    <label for="is_bonus" class="col-form-label">
                        <i class="fas fa-user-tag"></i>
                    </label>
                </div>


            </div>

            <div class="row" v-if="is_money">
                <div class="input-group">
                    <label for="money" class="col-form-label">
                        Деньги
                    </label>
                    <input id="money" type="number" min="0" max="1000000000" maxlength="8" class="form-control"
                           v-model="promo_data.money" required>
                </div>
            </div>

            <div class="row" v-if="is_exp">
                <div class="input-group">
                    <label for="exp" class="col-form-label">
                        Опыт
                    </label>
                    <input id="exp" type="number" min="0" max="1000000000" maxlength="8" class="form-control"
                           v-model="promo_data.exp" required>
                </div>
            </div>

            <div class="row" v-if="is_discount">
                <div class="input-group">
                    <label for="discount" class="col-form-label">
                        Скидка
                    </label>
                    <input id="discount" type="number" min="0" max="1000000000" maxlength="8" class="form-control"
                           v-model="promo_data.discount" required>
                </div>
            </div>


            <div class="row" v-if="is_coins">
                <div class="input-group">
                    <label for="coins" class="col-form-label">
                        Монеты
                    </label>
                    <input id="coins" type="number" min="0" max="1000000000" maxlength="8" class="form-control"
                           v-model="promo_data.coins" required>
                </div>
            </div>

            <div class="row" v-if="is_bonus">
                <div class="input-group">
                    <label for="bonus" class="col-form-label">
                        Бонусы
                    </label>
                    <input id="bonus" type="number" min="0" max="1000000000" maxlength="8" class="form-control"
                           v-model="promo_data.bonus" required>
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


    </div>
</template>

<script>

    import Toggle from '@/components/Toggle.vue'
    import Scroll from 'vue-custom-scrollbar'
    import CardSearch from '@/components/admin/CardSearchNHLHUT.vue'
    import Card from '@/components/admin/CardHUTDB.vue'


    export default {
        name: 'PromotionsPanel',
        props: ["user"],
        data: function () {
            return {
                lifetime: this.$store.getters.LIFETIME,

                is_money: false,
                is_exp: true,
                is_discount: false,
                is_coins: false,
                is_bonus: false,

                promo_data: {
                    title: '',
                    description: '',
                    lifetime: 0,
                    count: 0,
                    code: '',

                    money: 0,
                    exp: 0,
                    discount: 0,
                    bonus: 0,
                    coins: 0
                },
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData',
            loadLifetime(newValue, oldValue) {
                this.lifetime = newValue
            },
            is_money: function (newValue, oldValue) {
                this.promo_data.money = 0;

            },
            is_exp: function (newValue, oldValue) {
                this.promo_data.exp = 0;
            },
            is_discount: function (newValue, oldValue) {
                this.promo_data.discount = 0;
            },
            is_coins: function (newValue, oldValue) {
                this.promo_data.coins = 0;
            },
            is_bonus: function (newValue, oldValue) {
                this.promo_data.bonus = 0;
            },


        },
        computed: {
            loadLifetime() {
                return this.$store.getters.LIFETIME;
            },
        },
        methods: {
            fetchData() {
                this.$store.dispatch("loadLifetime")
            },
            generate() {
                this.promo_data.code = (btoa(Math.floor(Math.random() * (Math.floor(9999999) - Math.ceil(0))) + Math.ceil(0)))
                    .toUpperCase()
                    .substr(0, 8);
            },
            save() {

                if (this.promo_data.count == 0) {
                    this.message("Количество активаций не может быть равно 0!")
                    return
                }


                let formData = new FormData()

                formData.append('lifetime', this.promo_data.lifetime)
                formData.append('title', this.promo_data.title)
                formData.append('description', this.promo_data.description)
                formData.append('count', this.promo_data.count)
                formData.append('code', this.promo_data.code)

                if (this.is_money)
                    formData.append('money', this.promo_data.money)

                if (this.is_exp)
                    formData.append('exp', this.promo_data.exp)

                if (this.is_discount)
                    formData.append('discount', this.promo_data.discount)

                if (this.is_coins)
                    formData.append('coins', this.promo_data.coins)

                if (this.is_bonus)
                    formData.append('bonus', this.promo_data.bonus)

                axios.post('/promo/add', formData)
                    .then((response) => {
                        this.message(this.$lang.modals.auction_card_panel.success_1)

                        this.$store.dispatch("loadPromotions")
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

            setLifetime(event) {
                this.promo_data.lifetime = event.target.value;
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

    .refresh-btn {
        width: auto !important;
        margin-top: 14px;
        height: auto;
    }
</style>

