@extends('layouts.admin')

@section('content')
    <h2 class="mb-4">Поиск карточек</h2>

    <card-search></card-search>

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
