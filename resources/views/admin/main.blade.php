@extends('layouts.admin')

@section('content')
    @auth
        @can("setting-edit")
            @include("partials.settings")
        @endcan

        @can("broadcast-push")
            @include("partials.broadcast-message")
        @endcan

        @can("slider-change")
            @include("partials.image-slider")
        @endcan
        <hr>
        <div class="row">

            @can("lottery-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-splotch"></i></p>
                        <h5>Розыгрыши</h5>
                        <a href="{{ url("admin/lottery") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("card-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="far fa-address-card"></i></p>
                        <h5>Карточки</h5>
                        <a href="{{ url("admin/cards") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("promocode-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-box-open"></i></p>
                        <h5>Бонусы и промокоды</h5>
                        <a href="{{ url("admin/promo") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("achievement-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-trophy"></i></p>
                        <h5>Достижения</h5>
                        <a href="{{ url("admin/achievements") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("user-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-users"></i></p>
                        <h5>Пользователи</h5>
                        <a href="{{ url("admin/users") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("role-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-user-tag"></i></p>
                        <h5>Роли пользователя</h5>
                        <a href="{{ url("admin/roles") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("level-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-level-up-alt"></i></p>
                        <h5>Уровни пользователей</h5>
                        <a href="{{ url("admin/levels") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("content-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-file-word"></i></p>
                        <h5>Управление контентом</h5>
                        <a href="{{ url("admin/content") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan


            @can("cards-storage-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-save"></i></p>
                        <h5>Хранилище карточек</h5>
                        <a href="{{ url("admin/storage") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("ticket-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-clipboard-list"></i></p>
                        <h5>Тикеты</h5>
                        <a href="{{ url("admin/tickets") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("statistic-list")
                <div class="col-sm-3">
                    <div class="custom-card">
                        <p><i class="fas fa-chart-pie"></i></p>
                        <h5>Статистика</h5>
                        <a href="{{ url("admin/statistic") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @dev
            @can("auction-list")
                <div class="col-sm-3">
                    <div class="custom-card in-developed">
                        <p><i class="fas fa-random"></i></p>
                        <h5>Аукционы</h5>
                        <a href="{{ url("admin/auction") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan


            @can("mails-list")
                <div class="col-sm-3">
                    <div class="custom-card in-developed">
                        <p><i class="fas fa-mail-bulk"></i></p>
                        <h5>Рассылка</h5>
                        <a href="{{ url("admin/mails") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("coins-list")
                <div class="col-sm-3">
                    <div class="custom-card in-developed">
                        <p><i class="fas fa-coins"></i></p>
                        <h5>Монеты</h5>
                        <a href="{{ url("admin/coins") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan


            @can("wof-list")
                <div class="col-sm-3">
                    <div class="custom-card in-developed">
                        <p><i class="fas fa-dharmachakra"></i></p>
                        <h5>Колесо фортуны</h5>
                        <a href="{{ url("admin/wof") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("wager-list")
                <div class="col-sm-3">
                    <div class="custom-card in-developed">
                        <p><i class="far fa-handshake"></i></p>
                        <h5>Пари-матчи</h5>
                        <a href="{{ url("admin/wager") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan

            @can("packs-list")
                <div class="col-sm-3">
                    <div class="custom-card in-developed">
                        <p><i class="fas fa-hockey-puck"></i></p>
                        <h5>Паки игроков</h5>
                        <a href="{{ url("admin/packs") }}" class="btn btn-info">Переход к разделу</a>
                    </div>
                </div>
            @endcan
            @enddev
        </div>
    @endauth

    @guest
        <h1>Данный раздел для вас недоступен!</h1>
    @endguest

@endsection
