<template>
    <div>
        <div class="search-form">
            <div class="row ff">

                <div class="col-6">
                    <label for="year" class="col-form-label">Year</label>
                    <toggle :check="year"
                            :id="'year'"
                            v-on:check="checkYear($event)"
                            :labelon="'2019'"
                            :labeloff="'2020'"
                            :width="140"></toggle>

                </div>

                <div class="col-6">
                    <label for="per_page" class="col-form-label">Max elements</label>
                    <select id="per_page" class="form-control" v-model="per_page">
                        <option value="100" selected>100</option>
                        <option value="75">75</option>
                        <option value="50">50</option>
                        <option value="25">25</option>
                        <option value="10">10</option>

                    </select>

                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col-6 player">

                    <label for="player" class="col-form-label">Player</label>
                    <input id="player" class="form-control" v-model.trim="playerName">

                </div>
                <div class="col-3">
                    <label for="minOvr" class="col-form-label">Ovrmin</label>
                    <input id="minOvr" class="form-control" v-model.number="minOvr">
                </div>
                <div class="col-3">
                    <label for="maxOvr" class="col-form-label">Ovrmax</label>
                    <input id="maxOvr" class="form-control" v-model.number="maxOvr">
                </div>

            </div>

            <div class="row">
                <div class="col-6">
                    <label for="league" class="col-form-label">League</label>
                    <select id="league" class="form-control" v-model="league">
                        <option value="" selected>Any</option>
                        <option :value="leag" v-for="leag in leagueOptions">{{leag}}</option>
                    </select>

                </div>
                <div class="col-6">
                    <label for="team" class="col-form-label">Team</label>
                    <select id="team" class="form-control" v-model="team">
                        <option value="" selected>Any</option>
                        <option value="BAN">Banksa Bystrica</option>
                        <option value="BEL">Belfast Giants</option>
                        <option value="CAR">Cardiff Devils</option>
                        <option value="FRI">Frisk Asker</option>
                        <option value="GKS">GKS Tychy</option>
                        <option value="GRN">Grenoble Bruleurs de Loups</option>
                        <option value="RUN">Rungsted Seier Capital</option>
                        <option value="MIN">Yunost Minsk</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <label for="position" class="col-form-label">Position</label>
                    <select id="position" class="form-control" v-model="position" multiple="multiple">
                        <option value="" selected>Any</option>
                        <option value="LW">Left Wing</option>
                        <option value="C">Center</option>
                        <option value="RW">Right Wing</option>
                        <option value="LD">Left Defensemen</option>
                        <option value="RD">Right Defensemen</option>
                    </select>
                </div>
                <div class="col-6">
                    <label for="playerType" class="col-form-label">Type</label>
                    <select id="playerType" class="form-control" v-model="playerType" multiple="multiple">
                        <option value="" selected>Any</option>
                        <option value="PLY">Playmaker</option>
                        <option value="PWF">Power Forward</option>
                        <option value="TWF">Two-Way Forward</option>
                        <option value="TWD">Two-Way Defensemen</option>
                        <option value="OFD">Offenive Defensemen</option>
                        <option value="SNP">Sniper</option>
                        <option value="DFD">Defensive Defesemen</option>
                        <option value="GRN">Grinder</option>
                        <option value="ENF">Enforcer</option>
                    </select>

                </div>
            </div>

            <div class="row">
                <div class="col-6">

                    <label for="handedness" class="col-form-label">Shoots</label>
                    <select id="handedness" v-model="handedness" multiple="multiple" class="form-control">
                        <option value="Any" selected>Any</option>
                        <option>Left</option>
                        <option>Right</option>
                    </select>

                </div>
                <div class="col-6">
                    <label for="height" class="col-form-label">Height</label>
                    <select id="height" v-model="height" multiple="multiple" class="form-control">
                        <option :value="h.id" v-for="h in heightLabels">{{h.name}}</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <label for="synergy" class="col-form-label">Synergy</label>
                    <select id="synergy" v-model="synergy" multiple="multiple" class="form-control">
                        <option :value="syn.id" v-for="syn in getSynergy()">{{syn.name}}</option>
                    </select>

                </div>
                <div class="col-6">
                    <label for="card" class="col-form-label">Card</label>
                    <select id="card" v-model="card" multiple="multiple" class="form-control">
                        <option value="" selected>Any</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Bronze">Bronze</option>
                        <option value="PT">Primetime</option>
                        <option value="TOTW">Team of the Week</option>
                        <option value="HTH">Hometown Hero</option>
                        <option value="sICON">Standard Icon</option>
                        <option value="ICON">Master Icon</option>
                        <option value="Global">Global</option>
                        <option value="CLS">Classic</option>
                        <option value="mspCLS">MSP - Classic</option>
                        <option value="FAN">Fantasy Hockey</option>
                        <option value="mspFAN">MSP - Fantasy Hockey</option>
                    </select>

                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <label for="wgtmin" class="col-form-label">Weight min</label>
                    <input id="wgtmin" v-model.number="minWgt" class="form-control">
                </div>

                <div class="col-3">
                    <label for="wgtmax" class="col-form-label">Weight max</label>
                    <input id="wgtmax" v-model.number="maxWgt" class="form-control">
                </div>

                <div class="col-6">
                    <label for="nationality" class="col-form-label">Nationality</label>
                    <select id="nationality" v-model="nationality" class="form-control">
                        <option value="" selected>Any</option>
                        <option :value="n" v-for="n in nationalityOptions">{{n}}</option>
                    </select>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-12 d-flex justify-content-center">
                    <button class="btn btn-primary" v-on:click="search">SEARCH</button>
                </div>
            </div>
            <table class="table table-striped table-lg" v-if="results!=''">
                <thead>
                <th>Card</th>
                <th>League</th>
                <th>Team</th>
                <th>Name</th>
                <th>Salary</th>
                <th>OVR</th>
                <th>Действие</th>
                </thead>
                <tbody>
                <tr v-for="result in results" v-bind:key="result.id">
                    <td @click="getCard(result.id)" style="cursor:pointer;"><span>{{ result.id }}</span></td>
                    <td>{{ result.league }}</td>
                    <td>{{ result.team }}</td>
                    <td>{{ result.player }}</td>
                    <td>{{ result.salary }}</td>
                    <td>{{ result.ovr }}</td>

                    <td>
                        <button class="btn btn-info" @click="addCard(result)">Выбрать</button>
                    </td>
                </tr>
                </tbody>
            </table>


        </div>

        <modal name="card" width="100%" height="100%">
            <a href="#" @click="hide('card')" class="close"></a>
            <!-- <div v-html="cardExample"></div>-->
            <card :card="card_example"></card>
        </modal>
    </div>
</template>

<script>

    import Toggle from '@/components/Toggle.vue'
    import Card from '@/components/admin/Card.vue'

    export default {
        name: 'SearchForm',
        data() {
            return {
                savedCard: {
                    console: 0,
                    places: 0,
                    price: 0,
                    card: null
                },
                year: true,
                proxyurl: 'https://cors-anywhere.herokuapp.com/',
                request: '',
                playerName: '',
                league: 'Any',
                position: [],
                handedness: [],
                height: [],
                synergy: [],
                heightLabels: [
                    {id: 64, name: "5'4"},
                    {id: 65, name: "5'5"},
                    {id: 66, name: "5'6"},
                    {id: 67, name: "5'7"},
                    {id: 68, name: "5'8"},
                    {id: 69, name: "5'9"},
                    {id: 70, name: "5'10"},
                    {id: 71, name: "5'11"},
                    {id: 72, name: "6'0"},
                    {id: 73, name: "6'1"},
                    {id: 74, name: "6'2"},
                    {id: 75, name: "6'3"},
                    {id: 76, name: "6'4"},
                    {id: 77, name: "6'5"},
                    {id: 78, name: "6'6"},
                    {id: 79, name: "6'7"},
                    {id: 80, name: "6'8"},
                    {id: 81, name: "6'9"},
                ],
                leagueOptions: ["NHL", "AHL", "ECHL", "OHL", "QMJHL", "WHL", "SHL", "Liiga", "NL", "DEL", "EBEL", "CHL", "ELH", "Allsvenska", "National"],
                nationalityOptions: ["Australia", "Austria", "Belarus", "Belgium", "Canada", "Croatia", "Czech Republic", "Denmark", "England", "Estonia", "Finland", "France", "Germany", "Hungary", "Italy", "Latvia", "Liberia", "Lithuania", "Netherlands", "Norway", "Poland", "Romania", "Russia", "Slovakia", "Slovenia", "Sweden", "Switzerland", "USA", "Ukraine"],
                synergyLabels: [
                    {id: 1, name: 'PP', year: 19},
                    {id: 2, name: 'S', year: 19},
                    {id: 3, name: 'NP', year: 19},
                    {id: 4, name: 'FM', year: 19},
                    {id: 5, name: 'CS', year: 19},
                    {id: 6, name: 'DZ', year: 19},
                    {id: 7, name: 'HT', year: 19},
                    {id: 8, name: 'BE', year: 19},
                    {id: 9, name: 'DW', year: 19},
                    {id: 10, name: 'BM', year: 19},
                    {id: 11, name: 'T', year: 19},
                    {id: 12, name: 'BR', year: 19},
                    {id: 13, name: 'FB', year: 19},
                    {id: 14, name: 'TB', year: 19},
                    {id: 15, name: 'BU', year: 19},
                    {id: 16, name: 'HH', year: 19},
                    {id: 17, name: 'CP', year: 19},
                    {id: 18, name: 'FS', year: 19},
                    {id: 19, name: 'NP', year: 20},
                    {id: 20, name: 'X', year: 20},
                    {id: 21, name: 'BL', year: 20},
                    {id: 22, name: 'TN', year: 20},
                    {id: 23, name: 'AD', year: 20},
                    {id: 24, name: 'DK', year: 20},
                    {id: 25, name: 'BM', year: 20},
                    {id: 26, name: 'WK', year: 20},
                    {id: 27, name: 'RS', year: 20},
                    {id: 28, name: 'M', year: 20},
                    {id: 29, name: 'WM', year: 20},
                    {id: 30, name: '1T', year: 20},
                    {id: 31, name: 'WC', year: 20},
                    {id: 32, name: 'FB', year: 20},
                    {id: 33, name: 'SP', year: 20},
                    {id: 34, name: 'TK', year: 20},

                ],
                minOvr: '',
                maxOvr: '',
                team: 'Any',
                playerType: [],
                per_page: 100,
                card: [],
                card_example: null,
                minWgt: '',
                maxWgt: '',
                synergy_id: [],
                nationality: 'Any',
                results: ''
            }
        },

        methods: {
            getSynergy() {
                let year = this.year ? 19 : 20;
                return this.synergyLabels.filter(s => s.year == year)
            },
            message(title, message, type) {
                this.$notify({
                    group: 'main',
                    type: type,
                    title: title,
                    text: message
                })
            },
            addCard(card) {
                this.$emit('card', card);
            },
            show(name) {
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            getCard(id) {
                this.$loading(true)
                this.request = `https://api.hutdb.net/api/players/${id}`;
                axios.post('search', {url: this.request})
                    .then(res => {
                        console.log(res);

                        this.card_example = res.data;
                        this.$loading(false)
                        this.show("card")

                    }).catch(err => {
                    console.log(err)
                    this.$loading(false)
                    this.message("Ошибка загрузки карточки", `Ничего не найдено!`, 'error');

                })
            },
            search: function () {
                this.$loading(true)
                this.makeUrl();
                axios.post('search', {url: this.request})
                    .then(res => {
                        this.results = res.data;
                        this.results.shift();
                        this.$loading(false)
                    }).catch(err => {
                    this.message("Ошибка поиска", `Ничего не найдено!`, 'error');
                    this.$loading(false)
                    console.log(err)
                })
            },
            makeUrl: function () {


                let year = this.year ? 20 : 19;

                this.request = `https://api.hutdb.net/api/players?year=${year}&page=0&per_age=${this.per_page}`;

                if (this.playerName !== '') {
                    let player = this.playerName.replace(' ', '%20');
                    this.request += `&playerName=${player}`;
                }

                if (this.league !== 'Any') {
                    this.request += `&league=${this.league}`;
                }

                if (this.position.length > 0) {
                    this.request += `&position[]=`;
                    this.position.map(pos => {
                        this.request += `${pos},`;
                    });
                    this.request = this.request.slice(0, -1);
                }

                if (this.handedness !== 'Any') {
                    this.request += `&handedness=${this.handedness}`;
                }

                if (this.height.length > 0) {
                    this.request += `&height[]=`;
                    this.height.map(h => {
                        this.request += `${h},`;
                    });
                    this.request = this.request.slice(0, -1);
                }

                if (this.synergy_id.length > 0) {
                    this.request += `&synergy_id[]=`;
                    this.synergy_id.map(syn => {
                        this.request += `${syn.id},`;
                    });
                    this.request = this.request.slice(0, -1);
                }

                if (this.minOvr !== '') {
                    this.request += `&minOvr=${minOvr}`;
                }

                if (this.maxOvr !== '') {
                    this.request += `&maxOvr=${maxOvr}`;
                }

                if (this.team !== 'Any') {
                    this.request += `&team=${this.team}`;
                }

                if (this.playerType.length > 0) {
                    this.request += `&playerType[]=`;
                    this.playerType.map(type => {
                        this.request += `${type},`;
                    });
                    this.request = this.request.slice(0, -1);
                }

                if (this.card.length > 0) {
                    this.request += `&card=${this.card}`;
                }

                if (this.minWgt !== '') {
                    this.request += `&minWgt=${minWgt}`;
                }

                if (this.maxWgt !== '') {
                    this.request += `&maxWgt=${maxWgt}`;
                }

                if (this.nationality !== 'Any') {
                    this.request += `&nationality=${this.nationality}`;
                }

                console.log(this.request);
            },

            checkYear: function (event) {
                this.year = event
            },
        },
        components: {
            Toggle, Card
        }
    }
</script>

<style lang="scss">

</style>

