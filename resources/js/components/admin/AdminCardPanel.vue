<template>
    <div>

        <card-search v-on:card='onCardFind($event)'></card-search>
        <modal name="card-add">
            <div class="center-modal">
                <div class="row">

                    <div class="form-group  col-sm-12">
                        <label>Цена карточки</label>
                        <input type="number" min="0" class="form-control"  v-model="savedCard.price">

                    </div>
                    <div class="form-group col-sm-12">
                        <label>Количество мест</label>
                        <input type="number" min="0" class="form-control "  v-model="savedCard.places">

                    </div>

                    <div class="form-group col-sm-12">
                        <label>Платформа</label>
                        <select class="form-control " v-model="savedCard.console">
                            <option value="1" selected>PLAYSTATION 4</option>
                            <option value="2">XBOX</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-12">
                        <button class="btn btn-info" @click="save()">Добавить</button>
                    </div>

                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        name: 'AdminCardPanel',
        data: function () {
            return {
                savedCard: {
                    console:1,
                    places:0,
                    price:0,
                    card:null
                },
            }
        },
        methods: {
            onCardFind(data){
                this.savedCard.card = data;
                this.show("card-add")
            },
            save() {
                var tmp = this.savedCard;

                axios.post('addcard', {data: this.savedCard})
                    .then(res => {
                        this.hide("card-add");
                    }).catch(err => {
                    console.log(err)
                })

                this.savedCard = tmp;
            },
            show(name) {

                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
        },

    }
</script>

<style lang="scss">
    .center-modal {
        padding: 20px;
    }
</style>

