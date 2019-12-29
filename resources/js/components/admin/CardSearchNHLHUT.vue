<template>
    <div>
        <div class="search-form">
            <div class="row ff">


                <div class="col-6">
                    <label for="per_page" class="col-form-label">Максимально элементов</label>
                    <select id="per_page" class="form-control" v-model="per_page">
                        <option value="100" selected>100</option>
                        <option value="75">75</option>
                        <option value="50">50</option>
                        <option value="25">25</option>
                        <option value="10">10</option>

                    </select>

                </div>

                <div class="col-6">

                    <label for="handedness" class="col-form-label">Shoots</label>
                    <select id="handedness" v-model="handedness" class="form-control">
                        <option value="" selected>Any</option>
                        <option>Left</option>
                        <option>Right</option>
                    </select>

                </div>
            </div>



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
                        <option :value="team.value" v-for="team in getFilteredTeams()">{{team.text}}</option>

                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <label for="position" class="col-form-label">Position</label>
                    <select id="position" class="form-control" v-model="position">
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
                    <select id="playerType" class="form-control" v-model="playerType">
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
                    <label for="minHeight" class="col-form-label">Min height</label>
                    <select id="minHeight" v-model="minHeight" class="form-control">
                        <option value="241"> 7' 11"</option>
                        <option value="239"> 7' 10"</option>
                        <option value="236"> 7' 9"</option>
                        <option value="234"> 7' 8"</option>
                        <option value="231"> 7' 7"</option>
                        <option value="229"> 7' 6"</option>
                        <option value="226"> 7' 5"</option>
                        <option value="224"> 7' 4"</option>
                        <option value="221"> 7' 3"</option>
                        <option value="218"> 7' 2"</option>
                        <option value="216"> 7' 1"</option>
                        <option value="213"> 7' 0"</option>
                        <option value="211"> 6' 11"</option>
                        <option value="208"> 6' 10"</option>
                        <option value="206"> 6' 9"</option>
                        <option value="203"> 6' 8"</option>
                        <option value="201"> 6' 7"</option>
                        <option value="198"> 6' 6"</option>
                        <option value="196"> 6' 5"</option>
                        <option value="193"> 6' 4"</option>
                        <option value="190"> 6' 3"</option>
                        <option value="188"> 6' 2"</option>
                        <option value="185"> 6' 1"</option>
                        <option value="183"> 6' 0"</option>
                        <option value="180"> 5' 11"</option>
                        <option value="178"> 5' 10"</option>
                        <option value="175"> 5' 9"</option>
                        <option value="173"> 5' 8"</option>
                        <option value="170"> 5' 7"</option>
                        <option value="168"> 5' 6"</option>
                        <option value="165"> 5' 5"</option>
                        <option value="163"> 5' 4"</option>
                        <option value="160"> 5' 3"</option>
                        <option value="157"> 5' 2"</option>
                        <option value="155"> 5' 1"</option>
                        <option value="152"> 5' 0"</option>
                        <option value="150"> 4' 11"</option>
                        <option value="147"> 4' 10"</option>
                        <option value="145"> 4' 9"</option>
                        <option value="142"> 4' 8"</option>
                        <option value="140"> 4' 7"</option>
                        <option value="137"> 4' 6"</option>
                        <option value="135"> 4' 5"</option>
                        <option value="132"> 4' 4"</option>
                        <option value="130"> 4' 3"</option>
                        <option value="127"> 4' 2"</option>
                        <option value="124"> 4' 1"</option>
                        <option value="122"> 4' 0"</option>
                        <option value="119"> 3' 11"</option>
                        <option value="117"> 3' 10"</option>
                        <option value="114"> 3' 9"</option>
                        <option value="112"> 3' 8"</option>
                        <option value="109"> 3' 7"</option>
                        <option value="107"> 3' 6"</option>
                        <option value="104"> 3' 5"</option>
                        <option value="102"> 3' 4"</option>
                        <option value="99"> 3' 3"</option>
                        <option value="97"> 3' 2"</option>
                        <option value="94"> 3' 1"</option>
                        <option value="91" selected> 3' 0"</option>
                    </select>
                </div>

                <div class="col-6">
                    <label for="maxHeight" class="col-form-label">Max height</label>
                    <select id="maxHeight" v-model="maxHeight" class="form-control">
                        <option value="241" selected> 7' 11"</option>
                        <option value="239"> 7' 10"</option>
                        <option value="236"> 7' 9"</option>
                        <option value="234"> 7' 8"</option>
                        <option value="231"> 7' 7"</option>
                        <option value="229"> 7' 6"</option>
                        <option value="226"> 7' 5"</option>
                        <option value="224"> 7' 4"</option>
                        <option value="221"> 7' 3"</option>
                        <option value="218"> 7' 2"</option>
                        <option value="216"> 7' 1"</option>
                        <option value="213"> 7' 0"</option>
                        <option value="211"> 6' 11"</option>
                        <option value="208"> 6' 10"</option>
                        <option value="206"> 6' 9"</option>
                        <option value="203"> 6' 8"</option>
                        <option value="201"> 6' 7"</option>
                        <option value="198"> 6' 6"</option>
                        <option value="196"> 6' 5"</option>
                        <option value="193"> 6' 4"</option>
                        <option value="190"> 6' 3"</option>
                        <option value="188"> 6' 2"</option>
                        <option value="185"> 6' 1"</option>
                        <option value="183"> 6' 0"</option>
                        <option value="180"> 5' 11"</option>
                        <option value="178"> 5' 10"</option>
                        <option value="175"> 5' 9"</option>
                        <option value="173"> 5' 8"</option>
                        <option value="170"> 5' 7"</option>
                        <option value="168"> 5' 6"</option>
                        <option value="165"> 5' 5"</option>
                        <option value="163"> 5' 4"</option>
                        <option value="160"> 5' 3"</option>
                        <option value="157"> 5' 2"</option>
                        <option value="155"> 5' 1"</option>
                        <option value="152"> 5' 0"</option>
                        <option value="150"> 4' 11"</option>
                        <option value="147"> 4' 10"</option>
                        <option value="145"> 4' 9"</option>
                        <option value="142"> 4' 8"</option>
                        <option value="140"> 4' 7"</option>
                        <option value="137"> 4' 6"</option>
                        <option value="135"> 4' 5"</option>
                        <option value="132"> 4' 4"</option>
                        <option value="130"> 4' 3"</option>
                        <option value="127"> 4' 2"</option>
                        <option value="124"> 4' 1"</option>
                        <option value="122"> 4' 0"</option>
                        <option value="119"> 3' 11"</option>
                        <option value="117"> 3' 10"</option>
                        <option value="114"> 3' 9"</option>
                        <option value="112"> 3' 8"</option>
                        <option value="109"> 3' 7"</option>
                        <option value="107"> 3' 6"</option>
                        <option value="104"> 3' 5"</option>
                        <option value="102"> 3' 4"</option>
                        <option value="99"> 3' 3"</option>
                        <option value="97"> 3' 2"</option>
                        <option value="94"> 3' 1"</option>
                        <option value="91"> 3' 0"</option>
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
                    <select id="card" v-model="card" class="form-control">
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
                    <button class="btn btn-primary" v-on:click="search()">Search</button>
                </div>
            </div>

            <table class="table table-striped table-lg" v-if="results!=''">
                <thead>
                <th>Card</th>
                <th>League</th>
                <th>Team</th>
                <th>Name</th>
                <th>OVR</th>
                <th>Действие</th>
                </thead>
                <tbody>
                <tr v-for="result in results" v-bind:key="result.id">
                    <td @click="getCard(result.card_art)" style="cursor:pointer;"><span v-html="prepareCardArt(result.card_art)"></span></td>
                    <td>{{ result.league }}</td>
                    <td>{{ result.team }}</td>
                    <td v-html="result.full_name"></td>
                    <td>{{ result.overall }}</td>

                    <td>
                        <button class="btn btn-info" @click="addCard(result)">Выбрать</button>
                    </td>
                </tr>
                </tbody>
            </table>


        </div>

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
    import Card from '@/components/admin/CardNHLHUT.vue'
    import Scroll from 'vue-custom-scrollbar'

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
                request_url: '',
                query: '',
                playerName: '',
                league: '',
                position: [],
                handedness: '',
                minHeight: 91,
                maxHeight: 241,
                synergy: [],
                heightLabels: [
                    {id: 61, name: "5'0"},
                    {id: 62, name: "5'1"},
                    {id: 63, name: "5'2"},
                    {id: 64, name: "5'3"},
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
                    {id: 82, name: "6'10"},
                    {id: 83, name: "6'11"},
                    {id: 84, name: "7'0"},
                    {id: 85, name: "7'1"},
                    {id: 86, name: "7'2"},
                    {id: 87, name: "7'3"},
                    {id: 88, name: "7'4"},
                    {id: 89, name: "7'5"},
                    {id: 90, name: "7'6"},
                    {id: 91, name: "7'7"},
                    {id: 92, name: "7'8"},
                    {id: 93, name: "7'9"},
                    {id: 94, name: "7'10"},
                    {id: 95, name: "7'11"},
                ],

                leagueOptions: this.leagueOptions20,
                leagueOptions20: ["NHL", "AHL", "ECHL", "OHL", "QMJHL", "WHL", "SHL", "Liiga", "NL", "DEL", "EBEL", "CHL", "ELH", "Allsvenska", "National"],
                leagueOptions19: ["NHL", "SHL", "Liiga", "AHL", "NL", "OHL", "DEL", "ELH", "EBEL", "CHL", "ECHL", "Allsvenska", "WHL", "QMJHL", "National"],
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
                all_teams: [
                    {league: 'NHL', value: "ANA", text: "Anaheim Ducks"},
                    {league: 'NHL', value: "ARZ", text: "Arizona Coyotes"},
                    {league: 'NHL', value: "NHLA", text: "Atlantic All-Stars"},
                    {league: 'NHL', value: "BOS", text: "Boston Bruins"},
                    {league: 'NHL', value: "BUF", text: "Buffalo Sabres"},
                    {league: 'NHL', value: "CGY", text: "Calgary Flames"},
                    {league: 'NHL', value: "CAR", text: "Carolina Hurricanes"},
                    {league: 'NHL', value: "CHI", text: "Chicago Blackhawks"},
                    {league: 'NHL', value: "COL", text: "Colorado Avalanche"},
                    {league: 'NHL', value: "CBJ", text: "Columbus Blue Jackets"},
                    {league: 'NHL', value: "DAL", text: "Dallas Stars"},
                    {league: 'NHL', value: "DET", text: "Detroit Red Wings"},
                    {league: 'NHL', value: "EDM", text: "Edmonton Oilers"},
                    {league: 'NHL', value: "FLA", text: "Florida Panthers"},
                    {league: 'NHL', value: "HAR", text: "Hartford Whalers"},
                    {league: 'NHL', value: "LAK", text: "Los Angeles Kings"},
                    {league: 'NHL', value: "MNS", text: "Minnesota North Stars"},
                    {league: 'NHL', value: "MIN", text: "Minnesota Wild"},
                    {league: 'NHL', value: "MTL", text: "Montreal Canadiens"},
                    {league: 'NHL', value: "NSH", text: "Nashville Predators"},
                    {league: 'NHL', value: "NJD", text: "New Jersey Devils"},
                    {league: 'NHL', value: "NYI", text: "New York Islanders"},
                    {league: 'NHL', value: "NYR", text: "New York Rangers"},
                    {league: 'NHL', value: "FA", text: "NHL Free Agents"},
                    {league: 'NHL', value: "OTT", text: "Ottawa Senators"},
                    {league: 'NHL', value: "NHLP", text: "Pacific All-Stars"},
                    {league: 'NHL', value: "PHI", text: "Philadelphia Flyers"},
                    {league: 'NHL', value: "PIT", text: "Pittsburgh Penguins"},
                    {league: 'NHL', value: "QC", text: "Quebec Nordiques"},
                    {league: 'NHL', value: "SJS", text: "San Jose Sharks"},
                    {league: 'NHL', value: "STL", text: "St. Louis Blues"},
                    {league: 'NHL', value: "TBL", text: "Tampa Bay Lightning"},
                    {league: 'NHL', value: "TOR", text: "Toronto Maple Leafs"},
                    {league: 'NHL', value: "VAN", text: "Vancouver Canucks"},
                    {league: 'NHL', value: "VGK", text: "Vegas Golden Knights"},
                    {league: 'NHL', value: "WSH", text: "Washington Capitals"},
                    {league: 'NHL', value: "WPG", text: "Winnipeg Jets"},
                    {league: 'AHL', value: "BAK", text: "Bakersfield Condors"},
                    {league: 'AHL', value: "BES", text: "Belleville Senators"},
                    {league: 'AHL', value: "BID", text: "Binghamton Devils"},
                    {league: 'AHL', value: "BIN", text: "Binghamton Senators"},
                    {league: 'AHL', value: "BRI", text: "Bridgeport Sound Tigers"},
                    {league: 'AHL', value: "CHA", text: "Charlotte Checkers"},
                    {league: 'AHL', value: "CHW", text: "Chicago Wolves"},
                    {league: 'AHL', value: "CLE", text: "Cleveland Monsters"},
                    {league: 'AHL', value: "COL", text: "Colorado Eagles"},
                    {league: 'AHL', value: "GRA", text: "Grand Rapids Griffins"},
                    {league: 'AHL', value: "HAR", text: "Hartford Wolf Pack"},
                    {league: 'AHL', value: "HER", text: "Hershey Bears"},
                    {league: 'AHL', value: "IOW", text: "Iowa Wild"},
                    {league: 'AHL', value: "LAV", text: "Laval Rockets"},
                    {league: 'AHL', value: "LEH", text: "Lehigh Valley Phantoms"},
                    {league: 'AHL', value: "MAN", text: "Manitoba Moose"},
                    {league: 'AHL', value: "MIL", text: "Milwaukee Admirals"},
                    {league: 'AHL', value: "ONT", text: "Ontario Reign"},
                    {league: 'AHL', value: "PRO", text: "Providence Bruins"},
                    {league: 'AHL', value: "RCH", text: "Rochester Americans"},
                    {league: 'AHL', value: "ROC", text: "Rockford IceHogs"},
                    {league: 'AHL', value: "SAR", text: "San Antonio Rampage"},
                    {league: 'AHL', value: "SDG", text: "San Diego Gulls"},
                    {league: 'AHL', value: "SJB", text: "San Jose Barracuda"},
                    {league: 'AHL', value: "SPT", text: "Springfield Thunderbirds"},
                    {league: 'AHL', value: "STO", text: "Stockton Heat"},
                    {league: 'AHL', value: "SYR", text: "Syracuse Crunch"},
                    {league: 'AHL', value: "TEX", text: "Texas Stars"},
                    {league: 'AHL', value: "TOR", text: "Toronto Marlies"},
                    {league: 'AHL', value: "TUC", text: "Tucson Roadrunners"},
                    {league: 'AHL', value: "UTI", text: "Utica Comets"},
                    {league: 'AHL', value: "WBS", text: "Wilkes-Barre/Scranton Penguins"},

                    {league: 'ECHL', value: "ADT", text: "Adirondack Thunder"},
                    {league: 'ECHL', value: "ALL", text: "Allen Americans"},
                    {league: 'ECHL', value: "ATL", text: "Atlanta Gladiators"},
                    {league: 'ECHL', value: "BRA", text: "Brampton Beast"},
                    {league: 'ECHL', value: "CIN", text: "Cincinnati Cyclones"},
                    {league: 'ECHL', value: "FLA", text: "Florida Everblades"},
                    {league: 'ECHL', value: "FWK", text: "Fort Wayne Komets"},
                    {league: 'ECHL', value: "GRE", text: "Greenville Swamp Rabbits"},
                    {league: 'ECHL', value: "IDS", text: "Idaho Steelheads"},
                    {league: 'ECHL', value: "IND", text: "Indy Fuel"},
                    {league: 'ECHL', value: "JAC", text: "Jacksonville IceMen"},
                    {league: 'ECHL', value: "KAL", text: "Kalamazoo Wings"},
                    {league: 'ECHL', value: "KC", text: "Kansas City Mavericks"},
                    {league: 'ECHL', value: "MAI", text: "Maine Mariners"},
                    {league: 'ECHL', value: "NFLD", text: "Newfoundland Growlers"},
                    {league: 'ECHL', value: "NOR", text: "Norfolk Admirals"},
                    {league: 'ECHL', value: "ORL", text: "Orlando Solar Bears"},
                    {league: 'ECHL', value: "RAP", text: "Rapid City Rush"},
                    {league: 'ECHL', value: "REA", text: "Reading Royals"},
                    {league: 'ECHL', value: "SCS", text: "South Carolina Stingrays"},
                    {league: 'ECHL', value: "TOL", text: "Toledo Walleye"},
                    {league: 'ECHL', value: "TUL", text: "Tulsa Oilers"},
                    {league: 'ECHL', value: "UTA", text: "Utah Grizzlies"},
                    {league: 'ECHL', value: "WHE", text: "Wheeling Nailers"},
                    {league: 'ECHL', value: "WIC", text: "Wichita Thunder"},
                    {league: 'ECHL', value: "WOR", text: "Worcester Railers"},

                    {league: 'OHL', value: "BAR", text: "Barrie Colts"},
                    {league: 'OHL', value: "ERE", text: "Erie Otters"},
                    {league: 'OHL', value: "FLI", text: "Flint Firebirds"},
                    {league: 'OHL', value: "GUE", text: "Guelph Storm"},
                    {league: 'OHL', value: "HAM", text: "Hamilton Bulldogs"},
                    {league: 'OHL', value: "KIN", text: "Kingston Frontenacs"},
                    {league: 'OHL', value: "KIT", text: "Kitchener Rangers"},
                    {league: 'OHL', value: "LON", text: "London Knights"},
                    {league: 'OHL', value: "MIS", text: "Mississauga Steelheads"},
                    {league: 'OHL', value: "NIA", text: "Niagara IceDogs"},
                    {league: 'OHL', value: "NOB", text: "North Bay Battalion"},
                    {league: 'OHL', value: "OSH", text: "Oshawa Generals"},
                    {league: 'OHL', value: "OTT", text: "Ottawa 67's"},
                    {league: 'OHL', value: "OWE", text: "Owen Sound Attack"},
                    {league: 'OHL', value: "PET", text: "Peterborough Petes"},
                    {league: 'OHL', value: "SAG", text: "Saginaw Spirit"},
                    {league: 'OHL', value: "SAR", text: "Sarnia Sting"},
                    {league: 'OHL', value: "SSM", text: "Sault Ste. Marie Greyhounds"},
                    {league: 'OHL', value: "SUD", text: "Sudbury Wolves"},
                    {league: 'OHL', value: "WIN", text: "Windsor Spitfires"},

                    {league: 'QMJHL', value: "ACA", text: "Acadie-Bathurst Titan"},
                    {league: 'QMJHL', value: "BAI", text: "Baie-Comeau Drakkar"},
                    {league: 'QMJHL', value: "BLA", text: "Blainville-Boisbriand Armada"},
                    {league: 'QMJHL', value: "CB", text: "Cape Breton Screaming Eagles"},
                    {league: 'QMJHL', value: "CHR", text: "Charlottetown Islanders"},
                    {league: 'QMJHL', value: "CHC", text: "Chicoutimi Sagueneens"},
                    {league: 'QMJHL', value: "DRU", text: "Drummondville Voltigeurs"},
                    {league: 'QMJHL', value: "GAT", text: "Gatineau Olympiques"},
                    {league: 'QMJHL', value: "HFX", text: "Halifax Mooseheads"},
                    {league: 'QMJHL', value: "MON", text: "Moncton Wildcats"},
                    {league: 'QMJHL', value: "QUE", text: "Quebec Remparts"},
                    {league: 'QMJHL', value: "RIM", text: "Rimouski Oceanic"},
                    {league: 'QMJHL', value: "ROU", text: "Rouyn-Noranda Huskies"},
                    {league: 'QMJHL', value: "STJ", text: "Saint John Sea Dogs"},
                    {league: 'QMJHL', value: "SHA", text: "Shawinigan Cataractes"},
                    {league: 'QMJHL', value: "SHE", text: "Sherbrooke Phoenix"},
                    {league: 'QMJHL', value: "VAL", text: "Val-D'Or Foreurs"},
                    {league: 'QMJHL', value: "VIC", text: "Victoriaville Tigres"},

                    {league: 'WHL', value: "BRA", text: "Brandon Wheat Kings"},
                    {league: 'WHL', value: "CGY", text: "Calgary Hitmen"},
                    {league: 'WHL', value: "EDM", text: "Edmonton Oil Kings"},
                    {league: 'WHL', value: "EVE", text: "Everett Silvertips"},
                    {league: 'WHL', value: "KAM", text: "Kamloops Blazers"},
                    {league: 'WHL', value: "KEL", text: "Kelowna Rockets"},
                    {league: 'WHL', value: "LET", text: "Lethbridge Hurricanes"},
                    {league: 'WHL', value: "MED", text: "Medicine Hat Tigers"},
                    {league: 'WHL', value: "MOO", text: "Moose Jaw Warriors"},
                    {league: 'WHL', value: "POR", text: "Portland Winter Hawks"},
                    {league: 'WHL', value: "PRA", text: "Prince Albert Raiders"},
                    {league: 'WHL', value: "PRG", text: "Prince George Cougars"},
                    {league: 'WHL', value: "RED", text: "Red Deer Rebels"},
                    {league: 'WHL', value: "REG", text: "Regina Pats"},
                    {league: 'WHL', value: "SAS", text: "Saskatoon Blades"},
                    {league: 'WHL', value: "SEA", text: "Seattle Thunderbirds"},
                    {league: 'WHL', value: "SPO", text: "Spokane Chiefs"},
                    {league: 'WHL', value: "SWC", text: "Swift Current Broncos"},
                    {league: 'WHL', value: "TRI", text: "Tri-City Americans"},
                    {league: 'WHL', value: "VAN", text: "Vancouver Giants"},
                    {league: 'WHL', value: "VIC", text: "Victoria Royals"},
                    {league: 'WHL', value: "WPI", text: "Winnipeg Ice"},

                    {league: 'SHL', value: "BRY", text: "Brynas IF"},
                    {league: 'SHL', value: "DJU", text: "Djugardens Hockey"},
                    {league: 'SHL', value: "FAR", text: "Farjestad BK"},
                    {league: 'SHL', value: "FRO", text: "Frolunda Indians"},
                    {league: 'SHL', value: "HV", text: "HV71"},
                    {league: 'SHL', value: "OSK", text: "IK Oskarshamn"},
                    {league: 'SHL', value: "LEK", text: "Leksands IF"},
                    {league: 'SHL', value: "LIN", text: "Linkopings HC"},
                    {league: 'SHL', value: "LUL", text: "Lulea Hockey"},
                    {league: 'SHL', value: "MAL", text: "Malmo Redhawks"},
                    {league: 'SHL', value: "ORE", text: "Orebro Hockey"},
                    {league: 'SHL', value: "ROG", text: "Rogle BK"},
                    {league: 'SHL', value: "SKE", text: "Skelleftea AK"},
                    {league: 'SHL', value: "VAX", text: "Vaxjo Lakers"},

                    {league: 'Liiga', value: "HEL", text: "Helsingin IFK"},
                    {league: 'Liiga', value: "HAM", text: "HPK Hameenlinna"},
                    {league: 'Liiga', value: "JYV", text: "JYP Jyvaskyla"},
                    {league: 'Liiga', value: "KAL", text: "KalPa Kuopio"},
                    {league: 'Liiga', value: "KOO", text: "KooKoo Kouvala"},
                    {league: 'Liiga', value: "MIK", text: "Mikkelin Jukurit"},
                    {league: 'Liiga', value: "OUL", text: "Oulun Karpat"},
                    {league: 'Liiga', value: "LAH", text: "Pelicans Lahti"},
                    {league: 'Liiga', value: "POA", text: "Porin Assat"},
                    {league: 'Liiga', value: "RAU", text: "Rauman Lukko"},
                    {league: 'Liiga', value: "LAP", text: "SaiPa Lappeenranta"},
                    {league: 'Liiga', value: "TAI", text: "Tampereen Ilves"},
                    {league: 'Liiga', value: "TAT", text: "Tampereen Tappara"},
                    {league: 'Liiga', value: "TUR", text: "TPS Turku"},
                    {league: 'Liiga', value: "VAA", text: "Vaasan Sport"},

                    {league: 'NL', value: "EHC", text: "EHC Biel"},
                    {league: 'NL', value: "EV", text: "EV Zug"},
                    {league: 'NL', value: "GES", text: "Geneve-Servette HC"},
                    {league: 'NL', value: "AMP", text: "HC Ambri-Piotta"},
                    {league: 'NL', value: "DAV", text: "HC Davos"},
                    {league: 'NL', value: "FRG", text: "HC Fribourg-Gotteron"},
                    {league: 'NL', value: "LAU", text: "HC Lausanne"},
                    {league: 'NL', value: "LUG", text: "HC Lugano"},
                    {league: 'NL', value: "RAJ", text: "Rapperswil-Jona Lakers"},
                    {league: 'NL', value: "BER", text: "SC Bern"},
                    {league: 'NL', value: "SCL", text: "SCL Tigers"},
                    {league: 'NL', value: "ZSC", text: "ZSC Lions"},

                    {league: 'DEL', value: "ADL", text: "Adler Mannheim"},
                    {league: 'DEL', value: "AUG", text: "Augsburger Panther"},
                    {league: 'DEL', value: "DUS", text: "Dusseldorfer EG"},
                    {league: 'DEL', value: "MUN", text: "EHC Munchen"},
                    {league: 'DEL', value: "BER", text: "Eisbaren Berlin"},
                    {league: 'DEL', value: "ING", text: "ERC Ingolstadt"},
                    {league: 'DEL', value: "FIP", text: "Fischtown Pinguins"},
                    {league: 'DEL', value: "WOL", text: "Grizzly Adams Wolfsburg"},
                    {league: 'DEL', value: "ISE", text: "Iserlohn Roosters"},
                    {league: 'DEL', value: "KOL", text: "Kolner Haie"},
                    {league: 'DEL', value: "KRE", text: "Krefeld Pinguine"},
                    {league: 'DEL', value: "SWW", text: "Schwenninger Wild Wings"},
                    {league: 'DEL', value: "STR", text: "Straubing Tigers"},
                    {league: 'DEL', value: "THO", text: "Thomas Sabo Ice Tigers"},

                    {league: 'EBEL', value: "LBW", text: "Black Wings Linz"},
                    {league: 'EBEL', value: "DOB", text: "Dornbirner EC"},
                    {league: 'EBEL', value: "KAC", text: "EC KAC"},
                    {league: 'EBEL', value: "VSV", text: "EC VSV"},
                    {league: 'EBEL', value: "MMG", text: "Graz 99ers"},
                    {league: 'EBEL', value: "TWK", text: "HC TWK Innsbruck"},
                    {league: 'EBEL', value: "SUD", text: "HCB Sudtirol Alperia"},
                    {league: 'EBEL', value: "ORZ", text: "Orli Znojmo"},
                    {league: 'EBEL', value: "RBS", text: "Red Bull Salzburg"},
                    {league: 'EBEL', value: "FEH", text: "SAPA Fehervar AV 19"},
                    {league: 'EBEL', value: "VIE", text: "Vienna Capitals"},

                    {league: 'CHL', value: "BAN", text: "Banksa Bystrica"},
                    {league: 'CHL', value: "BEL", text: "Belfast Giants"},
                    {league: 'CHL', value: "CAR", text: "Cardiff Devils"},
                    {league: 'CHL', value: "FRI", text: "Frisk Asker"},
                    {league: 'CHL', value: "GKS", text: "GKS Tychy"},
                    {league: 'CHL', value: "GRN", text: "Grenoble Bruleurs de Loups"},
                    {league: 'CHL', value: "RUN", text: "Rungsted Seier Capital"},
                    {league: 'CHL', value: "MIN", text: "Yunost Minsk"},

                    {league: 'ELH', value: "PSG", text: "Aukro Berani Zlin"},
                    {league: 'ELH', value: "TYG", text: "Bili Tygri Liberec"},
                    {league: 'ELH', value: "MLA", text: "BK Mlada Boleslav"},
                    {league: 'ELH', value: "PAR", text: "Dynamo Pardubice"},
                    {league: 'ELH', value: "KRL", text: "HC Energie Karlovy Vary"},
                    {league: 'ELH', value: "OLO", text: "HC Olomouc"},
                    {league: 'ELH', value: "SKO", text: "HC Skoda Plzen"},
                    {league: 'ELH', value: "VIT", text: "HC Vitkovice Steel"},
                    {league: 'ELH', value: "BRN", text: "Kometa Brno"},
                    {league: 'ELH', value: "MTF", text: "Mountfield HK"},
                    {league: 'ELH', value: "TRI", text: "Ocelari Trinec"},
                    {league: 'ELH', value: "KLD", text: "Rytiri Kladno"},
                    {league: 'ELH', value: "SPA", text: "Sparta Praha"},
                    {league: 'ELH', value: "VER", text: "Verva Litvinov"},

                    {league: 'Allsvenska', value: "AIK", text: "AIK"},
                    {league: 'Allsvenska', value: "AIS", text: "Almtuna IS"},
                    {league: 'Allsvenska', value: "BIK", text: "BIK Karlskoga"},
                    {league: 'Allsvenska', value: "VIT", text: "HC Vita Hasten"},
                    {league: 'Allsvenska', value: "BJO", text: "IF Bjorkloven"},
                    {league: 'Allsvenska', value: "KHK", text: "Karlskrona HK"},
                    {league: 'Allsvenska', value: "KRI", text: "Kristianstad IK"},
                    {league: 'Allsvenska', value: "MOD", text: "MODO Hockey"},
                    {league: 'Allsvenska', value: "MOR", text: "Mora IK"},
                    {league: 'Allsvenska', value: "SOD", text: "Sodertalje SK"},
                    {league: 'Allsvenska', value: "TIM", text: "Timra IK"},
                    {league: 'Allsvenska', value: "TIN", text: "Tingsryds AIF"},
                    {league: 'Allsvenska', value: "VIK", text: "Vasterviks IK"},
                    {league: 'Allsvenska', value: "VAS", text: "VIK Vasteras HK"},

                    {league: 'National', value: "AUS", text: "Austria"},
                    {league: 'National', value: "CAN", text: "Canada"},
                    {league: 'National', value: "CZE", text: "Czech Republic"},
                    {league: 'National', value: "DEN", text: "Denmark"},
                    {league: 'National', value: "FIN", text: "Finland"},
                    {league: 'National', value: "FRA", text: "France"},
                    {league: 'National', value: "GER", text: "Germany"},
                    {league: 'National', value: "GRE", text: "Great Britain"},
                    {league: 'National', value: "ITL", text: "Italy"},
                    {league: 'National', value: "LAT", text: "Latvia"},
                    {league: 'National', value: "NOR", text: "Norway"},
                    {league: 'National', value: "RUS", text: "Russia"},
                    {league: 'National', value: "SLO", text: "Slovakia"},
                    {league: 'National', value: "SWE", text: "Sweden"},
                    {league: 'National', value: "SZL", text: "Switzerland"},
                    {league: 'National', value: "UKR", text: "Ukraine"},
                    {league: 'National', value: "USA", text: "United States of America"},


                ],
                minOvr: '70',
                maxOvr: '99',
                team: '',
                playerType: '',
                per_page: 25,
                card: '',
                card_example: null,
                minWgt: '',
                maxWgt: '',
                synergy_id: [],
                nationality: '',
                results: ''
            }
        },

        created() {
            this.leagueOptions = this.leagueOptions19;
        },
        methods: {
            prepareCardArt(cardArt){
                let start = cardArt.indexOf("<img");
                let end = cardArt.indexOf("/>")+2;
                let img = cardArt.substr(start,end-start);

                return img.replace(`src="`,`src="https://nhlhutbuilder.com/`)
               // retrun  "<a id="3481`https://nhlhutbuilder.com/images/card_art/players/${imgId}.jpg`="?id=3481" class="advanced-stats"><img src="images/card_art/players/3481.jpg" width="100px" /></a>"

            },
            getFilteredTeams() {
                return this.all_teams.filter(item => item.league == this.league);
            },
            getSynergy() {
                return this.synergyLabels.filter(s => s.year == 20)
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
            getCard(html) {
                //<a id="3481" href
                let start = html.indexOf(`<a id="`)+7;
                let end = html.indexOf(`" href`);
                let id = html.substr(start,end-start);

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
                axios.post('search_nhlhut', {url: this.request_url, query: this.query})
                    .then(res => {
                        this.results = res.data.data;
                        console.log( this.results)
                       // this.results.shift();
                        this.$loading(false)
                    }).catch(err => {
                    this.message("Ошибка поиска", `Ничего не найдено!`, 'error');
                    this.$loading(false)
                    console.log(err)
                })
            },
            makeUrl: function () {

                let index = 0;
                this.query = "";
                this.request_url = `https://nhlhutbuilder.com/php/player_stats.php`;

                let additional = function (index) {
                    return `&columns[${index}][searchable]=true&olumns[${index}][orderable]=true&columns[${index}][search][regex]=true`;
                }


                this.query += `draw=5&start=0&length=${this.per_page}`;
                this.query += `&columns[${index}][data]=overall&columns[${index}][search][value]=${this.minOvr}<${this.maxOvr}${additional(index)}`;
                this.query += `&columns[${++index}][data]=full_name&columns[${index}][search][value]=${this.playerName.replace(' ', '%20')}`;
                this.query += `&columns[${++index}][data]=league&columns[${index}][search][value]=${this.league}`;
                let pos = "";
                this.position.map(posItem => {
                    pos += `${posItem}|`;
                });
                this.query += `&columns[${++index}][data]=position&columns[${index}][search][value]=${this.position.length > 0 ? pos.slice(0, -1) : ""}`;
                this.query += `&columns[${++index}][data]=hand&columns[${index}][search][value]=${this.handedness.toLowerCase()}`;
                this.query += `&columns[${++index}][data]=height&columns[${index}][search][value]=${this.minHeight}<${this.maxHeight}`;

                let syn = "0!";
                if (this.synergy.length > 0) {
                    this.synergy.map(synItem => {
                        syn += `${synItem},`;
                    });
                }
                this.query += `&columns[${++index}][data]=synergies&columns[${index}][search][value]=${syn.slice(0, -1)}`;

                this.query += `&columns[${++index}][data]=team&columns[${index}][search][value]=${this.team}`;
                this.query += `&columns[${++index}][data]=ptype&columns[${index}][search][value]=${this.playerType}`;
                this.query += `&columns[${++index}][data]=card&columns[${index}][search][value]=${this.card}`;
                this.query += `&columns[${++index}][data]=weight&columns[${index}][search][value]=${this.minWgt}<${this.maxWgt}`;
                this.query += `&columns[${++index}][data]=nationality&columns[${index}][search][value]=${this.nationality}`;
               // this.query += `&order[${++index}][dir]=desc`;

            },


        },
        components: {
            Toggle, Card,Scroll
        }
    }
</script>

<style lang="scss">

</style>

