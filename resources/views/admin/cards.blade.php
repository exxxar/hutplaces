@extends('layouts.admin')

@section('content')
    <h2 class="mb-4">Поиск карточек</h2>
    <form id="basic-player-search" class="mb-4" method="post" action="{{ route('card.search') }}">
        @csrf
        <div class="row">
            <div class="col-sm-6">

                <div class="form-group row">
                    <label for="sort" class="col-sm-2 col-form-label">Sort</label>
                    <div class="col-sm-10">
                        <select id="sort" class="form-control" name="sort">
                            <option value="DESC" selected>По убыванию</option>
                            <option value="ASC">По возрастанию</option>
                        </select>
                    </div>
                </div>
                <hr>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Player</label>
                    <div class="col-sm-10">
                        <input type="text" id="player" name="player" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">League</label>
                    <div class="col-sm-10">
                        <select id="league" name="league" class="form-control">
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
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Position</label>
                    <div class="col-sm-10">
                        <select name="pos[]" class="form-control" multiple="multiple" id="pos">
                            <option value="LW">Left Wing</option>
                            <option value="C">Center</option>
                            <option value="RW">Right Wing</option>
                            <option value="LD">Left Defensemen</option>
                            <option value="RD">Right Defensemen</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Shoots</label>
                    <div class="col-sm-10">
                        <select id="shoots" name="shoots" class="form-control">
                            <option>Any</option>
                            <option>Left</option>
                            <option>Right</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Height</label>
                    <div class="col-sm-10">
                        <select name="hgt[]" multiple="multiple" id="hgt" placeholder="Select Height" class="form-control">
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

            </div><!-- END .stats-left -->
            <div class="col-sm-6">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Overall</label>
                    <div class="col-sm-5"><input name="ovrmin" type="text" class="form-control mt-1" id="ovrmin" placeholder="MIN"></div>
                    <div class="col-sm-5"><input name="ovrmax" type="text" class="form-control mt-1" id="ovrmax" placeholder="MAX"></div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Team</label>
                    <div class="col-sm-10">
                        <select id="team" name="team" class="form-control">
                            <option>Any</option>
                            <option>Pittsburgh Penguins</option>
                            <option>Edmonton Oilers</option>
                            <option>Edmonton Oil Kings</option>
                            <option>Washington Capitals</option>
                            <option>Ottawa Senators</option>
                            <option>Ottawa 67's</option>
                            <option>Los Angeles Kings</option>
                            <option>Tampa Bay Lightning</option>
                            <option>Philadelphia Flyers</option>
                            <option>Toronto Maple Leafs</option>
                            <option>Toronto Marlies</option>
                            <option>Nashville Predators</option>
                            <option>New Jersey Devils</option>
                            <option>Colorado Avalanche</option>
                            <option>Colorado Eagles</option>
                            <option>St. Louis Blues</option>
                            <option>Boston Bruins</option>
                            <option>San Jose Sharks</option>
                            <option>Winnipeg Jets</option>
                            <option>Chicago Blackhawks</option>
                            <option>Dallas Stars</option>
                            <option>Calgary Flames</option>
                            <option>Calgary Hitmen</option>
                            <option>Columbus Blue Jackets</option>
                            <option>Minnesota Wild</option>
                            <option>Anaheim Ducks</option>
                            <option>Vegas Golden Knights</option>
                            <option>Arizona Coyotes</option>
                            <option>Florida Panthers</option>
                            <option>Florida Everblades</option>
                            <option>New York Islanders</option>
                            <option>Buffalo Sabres</option>
                            <option>Montreal Canadiens</option>
                            <option>Carolina Hurricanes</option>
                            <option>Cardiff Devils</option>
                            <option>Vancouver Canucks</option>
                            <option>Vancouver Giants</option>
                            <option>Detroit Red Wings</option>
                            <option>New York Rangers</option>
                            <option>NHL Free Agents</option>
                            <option>Frolunda Indians</option>
                            <option>TPS Turku</option>
                            <option>Rockford IceHogs</option>
                            <option>EV Zug</option>
                            <option>HC Lugano</option>
                            <option>San Antonio Rampage</option>
                            <option>Sarnia Sting</option>
                            <option>Rochester Americans</option>
                            <option>Manitoba Moose</option>
                            <option>Manchester Monarchs</option>
                            <option>Barrie Colts</option>
                            <option>Linkopings HC</option>
                            <option>ZSC Lions</option>
                            <option>EHC Munchen</option>
                            <option>Eisbaren Berlin</option>
                            <option>SC Bern</option>
                            <option>HC Plzen</option>
                            <option>Djurgardens Hockey</option>
                            <option>Geneve-Servette HC</option>
                            <option>Iowa Wild</option>
                            <option>EHC Biel</option>
                            <option>Grand Rapids Griffins</option>
                            <option>Providence Bruins</option>
                            <option>SCL Tigers</option>
                            <option>Chicago Wolves</option>
                            <option>Red Bull Salzburg</option>
                            <option>Texas Stars</option>
                            <option>Tucson Roadrunners</option>
                            <option>Bakersfield Condors</option>
                            <option>San Diego Gulls</option>
                            <option>Ontario Reign</option>
                            <option>Bili Tygri Liberec</option>
                            <option>HC Kometa Brno</option><option>JYP Jyvaskyla</option><option>ERC Ingolstadt</option><option>HC Sparta Praha</option><option>HC Vitkovice Steel</option><option>HC Vita Hasten</option><option>HC Dynamo Pardubice</option><option>Bridgeport Sound Tigers</option><option>Banska Bystrica</option><option>Kolner Haie</option><option>Adler Mannheim</option><option>Lehigh Valley Phantoms</option><option>Laval Rockets</option><option>Augsburger Panther</option><option>Milwaukee Admirals</option><option>Utica Comets</option><option>Stockton Heat</option><option>Storhamar Hamar</option><option>Syracuse Crunch</option><option>Hartford Wolf Pack</option><option>Hartford Whalers</option><option>Cleveland Monsters</option><option>Wilkes-Barre/Scranton Penguins</option><option>Hershey Bears</option><option>Charlotte Checkers</option><option>Belleville Senators</option><option>Binghamton Devils</option><option>HC Fribourg-Gotteron</option><option>Brynas IF</option><option>Skelleftea AIK</option><option>Vaxjo Lakers</option><option>HC Davos</option><option>HC Ambri-Piotta</option><option>Thomas Sabo Ice Tigers</option><option>Medicine Hat Tigers</option><option>Medvescak Zagreb</option><option>HC VERVA Litvinov</option><option>HC Energie Karlovy Vary</option><option>Pirati Chomutov</option><option>HC Lausanne</option><option>Grizzly Adams Wolfsburg</option><option>Rapperswil-Jona Lakers</option><option>San Jose Barracuda</option><option>Fort Wayne Komets</option><option>Springfield Thunderbirds</option><option>Malmo Redhawks</option><option>Almtuna IS</option><option>Newfoundland Growlers</option><option>HV71</option><option>Sodertalje SK</option><option>Helsingin IFK</option><option>Dusseldorfer EG</option><option>Lulea Hockey</option><option>Fischtown Pinguins</option><option>Graz 99ers</option><option>Norway</option><option>Norfolk Admirals</option><option>Iserlohn Roosters</option><option>SaiPa Lappeenranta</option><option>Mountfield HK</option><option>HC Olomouc</option><option>HC Ocelari Trinec</option><option>Tri-City Americans</option><option>Rogle BK</option><option>Vienna Capitals</option><option>Orebro Hockey</option><option>Straubing Tigers</option><option>EC VSV</option><option>Schwenninger Wild Wings</option><option>BK Mlada Boleslav</option><option>Krefeld Pinguine</option><option>Portland Pirates </option><option>Portland Winter Hawks</option><option>Halifax Mooseheads</option><option>Oulun Karpat</option><option>KooKoo Kouvala</option><option>Kootenay Ice</option><option>Leksands IF</option><option>Rauman Lukko</option><option>HPK Hameenlinna</option><option>Hamilton Bulldogs</option><option>PSG Zlin</option><option>Karlskrona HK</option><option>Mora IK</option><option>Black Wings Linz</option><option>Atlanta Gladiators</option><option>Tampereen Tappara</option><option>IK Pantern</option><option>Toledo Walleye</option><option>Sudbury Wolves</option><option>HCB Sudtirol Alperia</option><option>Great Britain</option><option>Greenville Swamp Rabbits</option><option>Tampereen Ilves</option><option>Wheeling Nailers</option><option>Dornbirner EC</option><option>Idaho Steelheads</option><option>Mikkelin Jukurit</option><option>KalPa Kuopio</option><option>Kalamazoo Wings</option><option>Farjestad BK</option><option>Kansas City Mavericks</option><option>Sault Ste. Marie Greyhounds</option><option>Mississauga Steelheads</option><option>Missouri Mavericks</option><option>Cincinnati Cyclones</option><option>SAPA Fehervar AV 19</option><option>Brandon Wheat Kings</option><option>Brampton Beast</option><option>EC KAC</option><option>Orlando Solar Bears</option><option>Allen Americans</option><option>Adirondack Thunder</option><option>Reading Royals</option><option>Rapid City Rush</option><option>Maine Mariners</option><option>Timra IK</option><option>Vaasan Sport</option><option>Moose Jaw Warriors</option><option>Kelowna Rockets</option><option>HC TWK Innsbruck</option><option>MODO Hockey</option><option>Pelicans Lahti</option><option>South Carolina Stingrays</option><option>Worcester Railers</option><option>AIK</option><option>Indy Fuel</option><option>Wichita Thunder</option><option>Porin Assat</option><option>Orli Znojmo</option><option>Owen Sound Attack</option><option>Kitchener Rangers</option><option>Regina Pats</option><option>IF Bjorkloven</option><option>Kingston Frontenacs</option><option>Acadie-Bathurst Titan</option><option>Vasterviks IK</option><option>Utah Grizzlies</option><option>Tulsa Oilers</option><option>IK Oskarshamn</option><option>Jacksonville IceMen</option><option>Spokane Chiefs</option><option>Victoriaville Tigres</option><option>Victoria Royals</option><option>Saginaw Spirit</option><option>Guelph Storm</option><option>London Knights</option><option>Drummondville Voltigeurs</option><option>Tingsryds AIF</option><option>GKS Tychy</option><option>Sherbrooke Phoenix</option><option>Peterborough Petes</option><option>Swift Current Broncos</option><option>North Bay Battalion</option><option>Rimouski Oceanic</option><option>Quebec Remparts</option><option>Prince Albert Raiders</option><option>Gatineau Olympiques</option><option>Blainville-Boisbriand Armada</option><option>Windsor Spitfires</option><option>BIK Karlskoga</option><option>Neman Grodno</option><option>Everett Silvertips</option><option>Baie-Comeau Drakkar</option><option>Charlottetown Islanders</option><option>Kamloops Blazers</option><option>Seattle Thunderbirds</option><option>Red Deer Rebels</option><option>Niagara IceDogs</option><option>Flint Firebirds</option><option>St. Johns Ice Caps</option><option>Saint John Sea Dogs</option><option>Val-D'Or Foreurs</option><option>Valerenga Ishockey</option><option>Oshawa Generals</option><option>Lethbridge Hurricanes</option><option>Aalborg Pirates</option><option>Cape Breton Screaming Eagles</option><option>Saskatoon Blades</option><option>Moncton Wildcats</option><option>Prince George Cougars</option><option>Erie Otters</option><option>Chicoutimi Sagueneens</option><option>Rouyn-Noranda Huskies</option><option>Shawinigan Cataractes</option><option>Minnesota North Stars</option><option>Quebec Nordiques</option><option>Austria</option><option>Canada</option><option>Czech Republic</option><option>Finland</option><option>France</option><option>Germany</option><option>Denmark </option><option>Italy</option><option>Russia</option><option>Slovakia</option><option>Sweden</option><option>Switzerland</option><option>USA</option><option>Atlantic All-Stars</option><option>Pacific All-Stars</option><option>Binghamton Senators</option><option>Springfield Falcons</option><option>Latvia</option><option>Lake Erie Monsters </option><option>Ukraine</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Type</label>
                    <div class="col-sm-10">
                        <select name="stype[]" multiple="multiple" id="stype" placeholder="Select Type" class="form-control">
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
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Card</label>
                    <div class="col-sm-10">
                        <select name="scard[]" multiple="multiple" id="scard" placeholder="Select Card" class="form-control">
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
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Weight</label>
                    <div class="col-sm-5"><input type="text" class="form-control mt-1" id="wgtmin" name="wgtmin" placeholder="MIN">
                    </div>
                    <div class="col-sm-5 "><input type="text" class="form-control mt-1" id="wgtmax" name="wgtmax" placeholder="MAX"></div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Nationality</label>
                    <div class="col-sm-10">
                        <select id="nationality" class="form-control" name="nationality">
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

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Synergy</label>
                    <div class="col-sm-10">
                        <select type="text" id="synergy" name="synergy" class="form-control" multiple="multiple" value=""
                                placeholder="Select Synergy">
                        </select>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-sm-6">
                <button id="search" type="submit" class="btn btn-primary">Найти
                    карточки
                </button>
            </div>
        </div>
    </form>

    <div class="row">
        <div class="col col-sm-12 card-search-table">
            <div class="table">
                <table class="table table-striped table-lg">
                    <thead>
                    <tr>
                        <th><a data-value="card">Card</a></th>
                        <th><a data-value="league">League</a></th>
                        <th><a data-value="team">Team</a></th>
                        <th><a data-value="name">Name</a></th>
                        <th><a data-value="salary">Salary</a></th>
                        <th><a data-value="ovr">OVR</a></th>
                        <th>Цена карточки</th>
                        <th>Кол-во мест</th>
                        <th>Консоль</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($cards as $card)
                    <tr>
                        <td>{{ $card->id }}</td>
                        <td>{{ $card->League }}</td>
                        <td>{{ $card->Team }}</td>
                        <td><a href="https://hutdb.net/19/view/{{ $card->id }}" target="_blank">{{ $card->Player }}</a></td>
                        <td>{{ $card->salary }}</td>
                        <td>{{ $card->OVR }}</td>
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
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12">
            <h2>Мои карточки <a id="refresh-cards" class="refresh-cards" data-page-id="0"><i class="fas fa-sync-alt"></i></a></h2>

            <div class="row">
                <div class="col-sm-2">
                    <button data-target="add-custom-item" class="btn btn-info modal-trigger">Добавить</button>
                </div>
                <div class="col-sm-2 form-group">
                    <input type="checkbox" class="form-check-input" checked id="lot-in-game">
                    <label class="form-check-label" for="lot-in-game">В игре</label>

                </div>

                <div class="col-sm-2">
                    <label for="lots-per-page">Количество лотов на страницу</label>
                    <select id="lots-per-page" class="form-control">
                        <option value="1" selected>10</option>
                        <option value="2">20</option>
                        <option value="3">30</option>
                        <option value="4">50</option>
                        <option value="5">100</option>
                    </select>

                </div>

                <div class="col-sm-4">
                    <label for="sort-filters">Фильтры</label>
                    <select id="sort-filters" class="form-control">
                        <option value="1" selected>По очередности добавления (+)</option>
                        <option value="2">По очередности добавления (-)</option>
                        <option value="3">По цене (+)</option>
                        <option value="4">По цене (-)</option>
                        <option value="5">По заполненности (+)</option>
                        <option value="6">По заполненности (-)</option>
                        <option value="7">По числу мест (+)</option>
                        <option value="8">По числу мест (-)</option>
                        <option value="9">Сперва Pcol-sm-4</option>
                        <option value="10">Сперва XBOX</option>
                    </select>

                </div>

                <div class="col-sm-2">

                    <div class="dropdown mt-3">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Действия
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Удалить</a>
                            <a class="dropdown-item" href="#">Завершить</a>
                            <a class="dropdown-item" href="#">Начать</a>
                        </div>
                    </div>


                </div>
            </div>


            <div class="row">
                <div class="col col-sm-12">
                    <ul id="card-pagination" class="pagination">

                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-12">
                    <div class="table" id="my-card-list">


                    </div>
                </div>
            </div>

        </div>
    </div>


    <!-- Всплывающее окно карточек -->
    <div class="player-popup-window"></div>


    <!-- Модалка для редактирования информации по карточкам -->
    <div id="card-edit" class="modal">
        <div class="modal-content">
            <h4>Карточка</h4>
            <div id="card-data">
                <input type="hidden" id="edited-id" value="0">
                <div class="row">
                    <div class="input-field col col-sm-6 col-md-4">
                        <label for="edited-price">Цена карточки</label>
                        <input type="number" id="edited-price" min="0" value="0">
                    </div>
                    <div class="input-field col col-sm-6 col-md-4">
                        <label for="edited-places">Всего мест</label>
                        <input type="number" id="edited-places" min="0" value="0">
                    </div>
                    <div class="input-field col col-sm-6 col-md-4">
                        <label for="edited-occupied-places">Занято мест</label>
                        <input type="number" id="edited-occupied-places" min="0" value="0" disabled>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col col-sm-6 col-md-4">

                        <input type="time" id="edited-end-time">
                        <label for="edited-end-time">Время окончания</label>
                    </div>
                    <div class="input-field col col-sm-6 col-md-4">

                        <input type="date" id="edited-end-date">
                        <label for="edited-end-date">Дата окончания</label>
                    </div>
                    <div class="input-field col col-sm-6 col-md-4">

                        <select id="edited-console">
                            <option value="1">Sony Playstation 4</option>
                            <option value="2">XBOX</option>
                        </select>
                        <label for="edited-end-date">Консоль</label>
                    </div>
                    <div class="row">
                        <div class="input-field col col-sm-6 m3">
                            <label>
                                <input type="checkbox" id="edited-in-game"/>
                                <span>В игре</span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
            <div id="card-data-preloader">
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            </div>

        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close btn waves-effect waves-green save-modified-card-data">Сохранить</a>
        </div>
    </div>


    <!-- Распределение мест -->
    <div id="game-places" class="modal">
        <div class="modal-content custom-modal-bg">
            <div class="playing-field" id="playing-field">


            </div>
            <div class="progress" id="game-preloader">
                <div class="indeterminate"></div>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Закрыть</a>
        </div>
    </div>


@endsection