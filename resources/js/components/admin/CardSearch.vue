<template>
    <div class="search-form">
      <div class="row">
          <div class="col-6">

            <label for="sort" class="col-form-label">Sort</label>
            <select id="sort" class="form-control" v-model="sort">
                <option value="DESC" selected>По убыванию</option>
                <option value="ASC">По возрастанию</option>
            </select>

            </div>

            <div class="col-6">

            <label for="year" class="col-form-label">Year</label>
            <select id="year" class="form-control" v-model="year">
                <option>18</option>
                <option>19</option>
                <option>20</option>
            </select>

          </div>
      </div>

            <hr>

            <div class="row">
                <div class="col-6">

              <label for="player" class="col-form-label">Player</label>
              <input id="player" class="form-control" v-model.trim="player">

                </div>
                <div class="col-3">
                  <label for="ovrmin" class="col-form-label">Ovrmin</label>
                  <input id="ovrmin" class="form-control" v-model.number="ovrmin">
                </div>
                <div class="col-3">
                  <label for="ovrmax" class="col-form-label">Ovrmax</label>
                  <input id="ovrmax" class="form-control" v-model.number="ovrmax">
                </div>

              </div>

              <div class="row">
                  <div class="col-6">
            <label for="league" class="col-form-label">League</label>
            <select id="league" class="form-control" v-model="league">
                <option>Any</option>
                <option>NHL</option>
                <option>SHL</option>
                <option>Liiga</option>
                <option>AHL</option>
                <option>NL</option>
                <option>OHL</option>
                <option>DEL</option>
                <option>ELH</option>
                <option>EBEL</option>
                <option>CHL</option>
                <option>ECHL</option>
                <option>Allsvenska</option>
                <option>WHL</option>
                <option>QMJHL</option>
                <option>National</option>
            </select>

            </div>
            <div class="col-6">
              <label for="team" class="col-form-label">Team</label>
              <select id="team" class="form-control" v-model="team">
                  <option>Any</option><option>Pittsburgh Penguins</option><option>Edmonton Oilers</option><option>Edmonton Oil Kings</option><option>Washington Capitals</option><option>Ottawa Senators</option><option>Ottawa 67's</option><option>Los Angeles Kings</option><option>Tampa Bay Lightning</option><option>Philadelphia Flyers</option><option>Toronto Maple Leafs</option><option>Toronto Marlies</option><option>Nashville Predators</option><option>New Jersey Devils</option><option>Colorado Avalanche</option><option>Colorado Eagles</option><option>St. Louis Blues</option><option>Boston Bruins</option><option>San Jose Sharks</option><option>Winnipeg Jets</option><option>Chicago Blackhawks</option><option>Dallas Stars</option><option>Calgary Flames</option><option>Calgary Hitmen</option><option>Columbus Blue Jackets</option><option>Minnesota Wild</option><option>Anaheim Ducks</option><option>Vegas Golden Knights</option><option>Arizona Coyotes</option><option>Florida Panthers</option><option>Florida Everblades</option><option>New York Islanders</option><option>Buffalo Sabres</option><option>Montreal Canadiens</option><option>Carolina Hurricanes</option><option>Cardiff Devils</option><option>Vancouver Canucks</option><option>Vancouver Giants</option><option>Detroit Red Wings</option><option>New York Rangers</option><option>NHL Free Agents</option><option>Frolunda Indians</option><option>TPS Turku</option><option>Rockford IceHogs</option><option>EV Zug</option><option>HC Lugano</option><option>San Antonio Rampage</option><option>Sarnia Sting</option><option>Rochester Americans</option><option>Manitoba Moose</option><option>Manchester Monarchs</option><option>Barrie Colts</option><option>Linkopings HC</option><option>ZSC Lions</option><option>EHC Munchen</option><option>Eisbaren Berlin</option><option>SC Bern</option><option>HC Plzen</option><option>Djurgardens Hockey</option><option>Geneve-Servette HC</option><option>Iowa Wild</option><option>EHC Biel</option><option>Grand Rapids Griffins</option><option>Providence Bruins</option><option>SCL Tigers</option><option>Chicago Wolves</option><option>Red Bull Salzburg</option><option>Texas Stars</option><option>Tucson Roadrunners</option><option>Bakersfield Condors</option><option>San Diego Gulls</option><option>Ontario Reign</option><option>Bili Tygri Liberec</option><option>HC Kometa Brno</option><option>JYP Jyvaskyla</option><option>ERC Ingolstadt</option><option>HC Sparta Praha</option><option>HC Vitkovice Steel</option><option>HC Vita Hasten</option><option>HC Dynamo Pardubice</option><option>Bridgeport Sound Tigers</option><option>Banska Bystrica</option><option>Kolner Haie</option><option>Adler Mannheim</option><option>Lehigh Valley Phantoms</option><option>Laval Rockets</option><option>Augsburger Panther</option><option>Milwaukee Admirals</option><option>Utica Comets</option><option>Stockton Heat</option><option>Storhamar Hamar</option><option>Syracuse Crunch</option><option>Hartford Wolf Pack</option><option>Hartford Whalers</option><option>Cleveland Monsters</option><option>Wilkes-Barre/Scranton Penguins</option><option>Hershey Bears</option><option>Charlotte Checkers</option><option>Belleville Senators</option><option>Binghamton Devils</option><option>HC Fribourg-Gotteron</option><option>Brynas IF</option><option>Skelleftea AIK</option><option>Vaxjo Lakers</option><option>HC Davos</option><option>HC Ambri-Piotta</option><option>Thomas Sabo Ice Tigers</option><option>Medicine Hat Tigers</option><option>Medvescak Zagreb</option><option>HC VERVA Litvinov</option><option>HC Energie Karlovy Vary</option><option>Pirati Chomutov</option><option>HC Lausanne</option><option>Grizzly Adams Wolfsburg</option><option>Rapperswil-Jona Lakers</option><option>San Jose Barracuda</option><option>Fort Wayne Komets</option><option>Springfield Thunderbirds</option><option>Malmo Redhawks</option><option>Almtuna IS</option><option>Newfoundland Growlers</option><option>HV71</option><option>Sodertalje SK</option><option>Helsingin IFK</option><option>Dusseldorfer EG</option><option>Lulea Hockey</option><option>Fischtown Pinguins</option><option>Graz 99ers</option><option>Norway</option><option>Norfolk Admirals</option><option>Iserlohn Roosters</option><option>SaiPa Lappeenranta</option><option>Mountfield HK</option><option>HC Olomouc</option><option>HC Ocelari Trinec</option><option>Tri-City Americans</option><option>Rogle BK</option><option>Vienna Capitals</option><option>Orebro Hockey</option><option>Straubing Tigers</option><option>EC VSV</option><option>Schwenninger Wild Wings</option><option>BK Mlada Boleslav</option><option>Krefeld Pinguine</option><option>Portland Pirates </option><option>Portland Winter Hawks</option><option>Halifax Mooseheads</option><option>Oulun Karpat</option><option>KooKoo Kouvala</option><option>Kootenay Ice</option><option>Leksands IF</option><option>Rauman Lukko</option><option>HPK Hameenlinna</option><option>Hamilton Bulldogs</option><option>PSG Zlin</option><option>Karlskrona HK</option><option>Mora IK</option><option>Black Wings Linz</option><option>Atlanta Gladiators</option><option>Tampereen Tappara</option><option>IK Pantern</option><option>Toledo Walleye</option><option>Sudbury Wolves</option><option>HCB Sudtirol Alperia</option><option>Great Britain</option><option>Greenville Swamp Rabbits</option><option>Tampereen Ilves</option><option>Wheeling Nailers</option><option>Dornbirner EC</option><option>Idaho Steelheads</option><option>Mikkelin Jukurit</option><option>KalPa Kuopio</option><option>Kalamazoo Wings</option><option>Farjestad BK</option><option>Kansas City Mavericks</option><option>Sault Ste. Marie Greyhounds</option><option>Mississauga Steelheads</option><option>Missouri Mavericks</option><option>Cincinnati Cyclones</option><option>SAPA Fehervar AV 19</option><option>Brandon Wheat Kings</option><option>Brampton Beast</option><option>EC KAC</option><option>Orlando Solar Bears</option><option>Allen Americans</option><option>Adirondack Thunder</option><option>Reading Royals</option><option>Rapid City Rush</option><option>Maine Mariners</option><option>Timra IK</option><option>Vaasan Sport</option><option>Moose Jaw Warriors</option><option>Kelowna Rockets</option><option>HC TWK Innsbruck</option><option>MODO Hockey</option><option>Pelicans Lahti</option><option>South Carolina Stingrays</option><option>Worcester Railers</option><option>AIK</option><option>Indy Fuel</option><option>Wichita Thunder</option><option>Porin Assat</option><option>Orli Znojmo</option><option>Owen Sound Attack</option><option>Kitchener Rangers</option><option>Regina Pats</option><option>IF Bjorkloven</option><option>Kingston Frontenacs</option><option>Acadie-Bathurst Titan</option><option>Vasterviks IK</option><option>Utah Grizzlies</option><option>Tulsa Oilers</option><option>IK Oskarshamn</option><option>Jacksonville IceMen</option><option>Spokane Chiefs</option><option>Victoriaville Tigres</option><option>Victoria Royals</option><option>Saginaw Spirit</option><option>Guelph Storm</option><option>London Knights</option><option>Drummondville Voltigeurs</option><option>Tingsryds AIF</option><option>GKS Tychy</option><option>Sherbrooke Phoenix</option><option>Peterborough Petes</option><option>Swift Current Broncos</option><option>North Bay Battalion</option><option>Rimouski Oceanic</option><option>Quebec Remparts</option><option>Prince Albert Raiders</option><option>Gatineau Olympiques</option><option>Blainville-Boisbriand Armada</option><option>Windsor Spitfires</option><option>BIK Karlskoga</option><option>Neman Grodno</option><option>Everett Silvertips</option><option>Baie-Comeau Drakkar</option><option>Charlottetown Islanders</option><option>Kamloops Blazers</option><option>Seattle Thunderbirds</option><option>Red Deer Rebels</option><option>Niagara IceDogs</option><option>Flint Firebirds</option><option>St. Johns Ice Caps</option><option>Saint John Sea Dogs</option><option>Val-D'Or Foreurs</option><option>Valerenga Ishockey</option><option>Oshawa Generals</option><option>Lethbridge Hurricanes</option><option>Aalborg Pirates</option><option>Cape Breton Screaming Eagles</option><option>Saskatoon Blades</option><option>Moncton Wildcats</option><option>Prince George Cougars</option><option>Erie Otters</option><option>Chicoutimi Sagueneens</option><option>Rouyn-Noranda Huskies</option><option>Shawinigan Cataractes</option><option>Minnesota North Stars</option><option>Quebec Nordiques</option><option>Austria</option><option>Canada</option><option>Czech Republic</option><option>Finland</option><option>France</option><option>Germany</option><option>Denmark </option><option>Italy</option><option>Russia</option><option>Slovakia</option><option>Sweden</option><option>Switzerland</option><option>USA</option><option>Atlantic All-Stars</option><option>Pacific All-Stars</option><option>Binghamton Senators</option><option>Springfield Falcons</option><option>Latvia</option><option>Lake Erie Monsters </option><option>Ukraine</option>
              </select>
            </div>
            </div>

            <div class="row">
                <div class="col-6">

            <label for="pos" class="col-form-label">Position</label>
            <select id="pos" class="form-control" v-model="pos" multiple="multiple">
                <option value="LW">Left Wing</option>
                <option value="C">Center</option>
                <option value="RW">Right Wing</option>
                <option value="LD">Left Defensemen</option>
                <option value="RD">Right Defensemen</option>
            </select>
            </div>
            <div class="col-6">
            <label for="stype" class="col-form-label">Type</label>
            <select id="stype" class="form-control" v-model="stype" multiple="multiple">
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

            <label for="shoots" class="col-form-label">Shoots</label>
            <select id="shoots" v-model="shoots" class="form-control">
                <option>Any</option>
                <option>Left</option>
                <option>Right</option>
            </select>

            </div>
            <div class="col-6">
            <label for="hgt" class="col-form-label">Height</label>
            <select id="hgt" v-model="hgt" multiple="multiple" class="form-control">
                <option value="6%279">6'9</option>
                <option value="6%278">6'8</option>
                <option value="6%277">6'7</option>
                <option value="6%276">6'6</option>
                <option value="6%275">6'5</option>
                <option value="6%274">6'4</option>
                <option value="6%273">6'3</option>
                <option value="6%272">6'2</option>
                <option value="6%271">6'1</option>
                <option value="6%270">6'0</option>
                <option value="5%2711">5'11</option>
                <option value="5%2710">5'10</option>
                <option value="5%279">5'9</option>
                <option value="5%278">5'8</option>
                <option value="5%277">5'7</option>
                <option value="5%276">5'6</option>
                <option value="5%275">5'5</option>
            </select>

          </div>
          </div>

          <div class="row">
              <div class="col-6">
            <label for="synergy" class="col-form-label">Synergy</label>
            <select id="synergy" v-model="synergy" multiple="multiple" class="form-control">
                <option value="PP">PP - Passing Playmaker</option>
                <option value="S">S - Speedsters</option>
                <option value="NP">NP - Net Front Presence</option>
                <option value="FM">FM - Faceoff Master</option>
                <option value="CS">CS - Call The Shot</option>
                <option value="DZ">DZ - Dangle Zone</option>
                <option value="HT">HT - Hammer Time</option>
                <option value="BE">BE - The Beast</option>
                <option value="DW">DW - Defensive Warrior</option>
                <option value="BM">BM - Breakout Master</option>
                <option value="T">T - It's a Trap</option>
                <option value="BR">BR - Bruiser</option>
                <option value="FB">FB - For The Boys</option>
                <option value="TB">TB - The Beauty</option>
                <option value="BU">BU - Burner</option>
                <option value="HH">HH - Heavy Hitter</option>
                <option value="CP">CP - Clutch Player</option>
                <option value="FS">FS - Fine Shooting</option>
            </select>

            </div>
            <div class="col-6">
            <label for="scard" class="col-form-label">Card</label>
            <select id="scard" v-model="scard" multiple="multiple" class="form-control">
                <option value="sGold">Rare Gold</option>
                <option value="Gold">Gold</option>
                <option value="sSilver">Rare SIlver</option>
                <option value="Silver">Silver</option>
                <option value="sBronze">Rare Bronze</option>
                <option value="Bronze">Bronze</option>
                <option value="TOTW">Team of the Week (Gold)</option>
                <option value="STOTW">Team of the Week (Silver)</option>
                <option value="BTOTW">Team of the Week (Bronze)</option>
                <option value="LGD">Legends</option>
                <option value="ROOK">Rookies</option>
                <option value="COVER">Cover</option>
                <option value="ALM">Alumni</option>
                <option value="CS">Competitive Seasons</option>
                <option value="HC">Hut Champion</option>
                <option value="DC">Draft Champions</option>
                <option value="GAT">Gatorade</option>
                <option value="EVO">Evolution</option>
                <option value="PT">Prime Time</option>
                <option value="MS">Milestone</option>
                <option value="HWN">Halloween</option>
                <option value="MSP">Master Set Player</option>
                <option value="GSCGE">Global Series Germany</option>
                <option value="GSCFI">Global Series Finland</option>
                <option value="GSCSE">Global Series Sweden</option>
                <option value="GSCSI">Global Series Switzerland</option>
                <option value="TG">Thanksgiving</option>
                <option value="DIAM">DIamond</option>
                <option value="XMAS">Christmas</option>
                <option value="IPOTG">International Player of the Game</option>
                <option value="WC">Winter Classic</option>
                <option value="EVO2">Evolution 2</option>
            </select>

          </div>
          </div>

          <div class="row">
            <div class="col-3">
              <label for="wgtmin" class="col-form-label">Weight min</label>
              <input id="wgtmin" v-model.number="wgtmin" class="form-control">
            </div>

            <div class="col-3">
              <label for="wgtmax" class="col-form-label">Weight max</label>
              <input id="wgtmax" v-model.number="wgtmax" class="form-control">
            </div>

            <div class="col-6">
            <label for="nationality" class="col-form-label">Nationality</label>
            <select id="nationality" v-model="nationality" class="form-control">
                <option>Any</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Canada</option>
                <option>Cezech Republic</option>
                <option>Croatia</option>
                <option>Czech Republic</option>
                <option>Denmark</option>
                <option>England</option>
                <option>Estonia</option>
                <option>Finland</option>
                <option>France</option>
                <option>Germany</option>
                <option>Hungary</option>
                <option>Italy</option>
                <option>Latvia</option>
                <option>Liberia</option>
                <option>Lithuania</option>
                <option>Netherlands</option>
                <option>Norway</option>
                <option>Poland</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Ukraine</option>
                <option>USA</option>
            </select>
</div>
</div>

        <div class="row">
            <div class="col-3  mt-3 mb-3" v-if="synergy.includes(syn.name)" v-for="(syn, index) in synergyRate" v-bind:key="syn.id">
                {{ syn.name }} - {{ syn.rate }}
                <button class="btn btn-info" v-on:click="synDec(syn.id)">-</button>
                <button class="btn btn-info" v-on:click="synInc(syn.id)">+</button>
            </div>
        </div>

<div class="row mt-5 mb-5">
  <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-primary" v-on:click="search">SEARCH</button>
  </div>
</div>
        <table class="table table-striped table-lg">
            <tr>
                <th>Card</th>
                <th>League</th>
                <th>Team</th>
                <th>Name</th>
                <th>Salary</th>
                <th>OVR</th>
                <th>Цена карточки</th>
                <th>Кол-во мест</th>
                <th>Консоль</th>
                <th>Действие</th>
            </tr>
            <tr v-for="result in results" v-bind:key="result.id">
                <td>{{ result.id }}</td>
                <td>{{ result.League }}</td>
                <td>{{ result.Team }}</td>
                <td>{{ result.Player }}</td>
                <td>{{ result.salary }}</td>
                <td>{{ result.OVR }}</td>
                <td>
                  <div class="form-group row"><input type="text" class="form-control col-sm-8"></div>
                </td>
                <td>
                  <div class="form-group row"><input type="text" class="form-control col-sm-8"></div>
                </td>
                <td>
                  <div class="form-group row">
                      <select class="form-control col-sm-8">
                          <option value="">All</option>
                          <option value="">PLAYSTATION 4</option>
                          <option value="">XBOX</option>
                      </select>
                  </div>
                </td>
                <td>
                  <button class="btn btn-info">Добавить</button>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'SearchForm',
        data: function () {
            return {
                year: '19',
                proxyurl: 'https://cors-anywhere.herokuapp.com/',
                request: '',
                sort: 'DESC',
                player: '',
                league: 'Any',
                pos: [],
                shoots: 'Any',
                hgt: [],
                synergy: [],
                synergyRate: [
                    {id: 0, name: 'PP', rate: 0},
                    {id: 1, name: 'S', rate: 0},
                    {id: 2, name: 'NP', rate: 0},
                    {id: 3, name: 'FM', rate: 0},
                    {id: 4, name: 'CS', rate: 0},
                    {id: 5, name: 'DZ', rate: 0},
                    {id: 6, name: 'HT', rate: 0},
                    {id: 7, name: 'BE', rate: 0},
                    {id: 8, name: 'DW', rate: 0},
                    {id: 9, name: 'BM', rate: 0},
                    {id: 10, name: 'T', rate: 0},
                    {id: 11, name: 'BR', rate: 0},
                    {id: 12, name: 'FB', rate: 0},
                    {id: 13, name: 'TB', rate: 0},
                    {id: 14, name: 'BU', rate: 0},
                    {id: 15, name: 'HH', rate: 0},
                    {id: 16, name: 'CP', rate: 0},
                    {id: 17, name: 'FS', rate: 0},
                ],
                ovrmin: '',
                ovrmax: '',
                team: 'Any',
                stype: [],
                scard: [],
                wgtmin: '',
                wgtmax: '',
                nationality: 'Any',
                results: ''
            }
        },
        watch: {
            synergy: {
                handler(newVal, oldVal){
                    if (newVal.length > oldVal.length) {
                        let difference = newVal.filter(x => !oldVal.includes(x));
                        let elem = difference[0];
                        this.synergyRate.find( syn => syn.name === elem ).rate = 1;
                    }

                    if (newVal.length < oldVal.length) {
                        let difference = oldVal.filter(x => !newVal.includes(x));
                        let elem = difference[0];
                        this.synergyRate.find( syn => syn.name === elem ).rate = 0;
                    }
                }
            },
            synergyRate: {
                handler(val) {
                    //
                },
                deep: true
            }
        },
        methods: {
            synDec: function (id) {
                if (this.synergyRate.find( syn => syn.id === id ).rate>1){
                    this.synergyRate.find( syn => syn.id === id ).rate--;
                }
            },
            synInc: function (id) {
                this.synergyRate.find( syn => syn.id === id ).rate++;
            },
            search: function () {
                this.makeUrl();
                axios.post('search', {url: this.request})
                    .then(res => {
                        this.results = res.data;
                        this.results.shift();
                    }).catch(err => {
                        console.log(err)
                    })
            },
            makeUrl: function () {

                this.request = `https://hutdb.net/ajax/stats.php?year=${this.year}&page=0&selected=OVR&sort=${this.sort}`;

                if (this.player !== '') {
                    let player = this.player.replace(' ', '%20');
                    this.request += `&player=${player}`;
                }

                if (this.league !== 'Any') {
                    this.request += `&league=${this.league}`;
                }

                if (this.pos.length > 0) {
                    this.request += `&pos=${this.pos}`;
                }

                if (this.shoots !== 'Any') {
                    this.request += `&shoots=${this.shoots}`;
                }

                if (this.hgt.length > 0) {
                    this.request += `&hgt=${this.hgt}`;
                }

                if (this.synergy.length > 0) {
                    this.request += `&synergy=`;
                    this.synergy.map(synName => {
                        this.request += `${synName}-${this.synergyRate.find( syn => syn.name === synName ).rate},`;
                    });
                    this.request = this.request.slice(0, -1);
                }

                if (this.ovrmin !== '') {
                    this.request += `&ovrmin=${ovrmin}`;
                }

                if (this.ovrmax !== '') {
                    this.request += `&ovrmax=${ovrmax}`;
                }

                if (this.team !== 'Any') {
                    this.request += `&team=${this.team}`;
                }

                if (this.stype.length > 0) {
                    this.request += `&stype=${this.stype}`;
                }

                if (this.scard.length > 0) {
                    this.request += `&scard=${this.scard}`;
                }

                if (this.wgtmin !== '') {
                    this.request += `&wgtmin=${wgtmin}`;
                }

                if (this.wgtmax !== '') {
                    this.request += `&wgtmax=${wgtmax}`;
                }

                if (this.nationality !== 'Any') {
                    this.request += `&nationality=${this.nationality}`;
                }

                console.log(this.request);
            }
        }
    }
</script>
