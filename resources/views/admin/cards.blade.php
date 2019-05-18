@extends('layouts.admin')

@section('content')
    <h2 class="mb-4">Поиск карточек</h2>
    <form id="basic-player-search" class="mb-4" method="post" action="">
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
                        <select name="pos" class="form-control" multiple="multiple" id="pos" placeholder="Select Position">
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
                        <select name="hgt" multiple="multiple" id="hgt" placeholder="Select Height" class="form-control">
                            <option>Any</option>
                        </select>
                    </div>

                </div>

            </div><!-- END .stats-left -->
            <div class="col-sm-6">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Overall</label>
                    <div class="col-sm-5"><input type="text" class="form-control mt-1" id="ovrmin" placeholder="MIN"></div>
                    <div class="col-sm-5"><input type="text" class="form-control mt-1" id="ovrmax" placeholder="MAX"></div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Team</label>
                    <div class="col-sm-10">
                        <select id="team" name="team" class="form-control">
                            <option>Any</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Type</label>
                    <div class="col-sm-10">
                        <select name="stype" multiple="multiple" id="stype" placeholder="Select Type" class="form-control">
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
                        <select name="scard" multiple="multiple" id="scard" placeholder="Select Card" class="form-control">
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
                    <div class="col-sm-5 "><input type="text" class="form-control mt-1" id="wgtmax" name="wgtmax"
                                                  placeholder="MAX"></div>
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
                <button id="search" type="button" class="btn btn-primary">Найти
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
                    <tr>
                        <td>test001</td>
                        <td>test002</td>
                        <td>test003</td>
                        <td><a href="">test004</a></td>
                        <td>test005</td>
                        <td>test006</td>
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
                    <tr>
                        <td>test001</td>
                        <td>test002</td>
                        <td>test003</td>
                        <td><a href="">test004</a></td>
                        <td>test005</td>
                        <td>test006</td>
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
                    <tr>
                        <td>test001</td>
                        <td>test002</td>
                        <td>test003</td>
                        <td><a href="">test004</a></td>
                        <td>test005</td>
                        <td>test006</td>
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
                    <tr>
                        <td>test001</td>
                        <td>test002</td>
                        <td>test003</td>
                        <td><a href="">test004</a></td>
                        <td>test005</td>
                        <td>test006</td>
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
                    <tr>
                        <td>test001</td>
                        <td>test002</td>
                        <td>test003</td>
                        <td><a href="">test004</a></td>
                        <td>test005</td>
                        <td>test006</td>
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
                    <tr>
                        <td>test001</td>
                        <td>test002</td>
                        <td>test003</td>
                        <td><a href="">test004</a></td>
                        <td>test005</td>
                        <td>test006</td>
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