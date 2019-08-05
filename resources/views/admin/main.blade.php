@extends('layouts.admin')

@section('content')
<div class="row">
    <form action="">
        <h2>Параметры системы</h2>
        <div class="row">

            <div class="col-sm-6">

                <div class="form-group ">
                    <label for="procent">Мой процент, %</label>
                    <input type="number" class="form-control" id="procent" value="">
                </div>
                <div class="form-group  ">
                    <label for="title">Название валюты</label>
                    <input type="text" class="form-control" id="title" value="">
                </div>

                <div class="form-group  ">
                    <label for="year">Год</label>
                    <select id="year" name="year" class="form-control">
                    </select>

                </div>
            </div>
            <div class="col-sm-6">

                <div class="form-group ">
                    <label for="coins">Монеты</label>
                    <input type="number" class="form-control" id="coins" value="">
                </div>

                <div class="form-group  ">
                    <label for="rub">Рубли</label>
                    <input type="number" class="form-control" id="rub" value="">
                </div>

            </div>


            <div class="col-sm-12">
                <div class="form-group">
                    <button class="btn btn-primary" id="save-options">Сохранить</button>
                </div>
            </div>

        </div>

        <hr>
    </form>

    <form action="{{route('broadcast.message')}}" method="post">
        {{csrf_field()}}
        <h2>Массовое оповещение пользователей</h2>
        <div class="row">

            <div class="col-sm-12 col-md-6">
                <div class="form-group ">
                    <label for="title">Заголовок сообщения</label>
                    <input type="text" class="form-control" name="title" id="title" value="">
                </div>
            </div>

            <div class="col-sm-12 col-md-6">
                <div class="form-group ">
                    <label for="message">Сообщение</label>
                    <input type="text" class="form-control" name="message" id="message" value="">
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-sm-12 col-md-4">

                    <button class="btn btn-primary">Отправить</button>

            </div>
        </div>

        <hr>
    </form>

    <div class="row">
        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-users"></i></p>
                <h5>Пользователи</h5>
                <a href="{{ url("admin/users") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-user-tag"></i></p>
                <h5>Роли пользователя</h5>
                <a href="{{ url("admin/roles") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p>  <i class="fas fa-level-up-alt"></i></p>
                <h5>Уровни пользователей</h5>
                <a href="{{ url("admin/levels") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="far fa-address-card"></i></p>
                <h5>Карточки</h5>
                <a href="{{ url("admin/cards") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-random"></i></p>
                <h5>Аукционы</h5>
                <a href="{{ url("admin/auction") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-mail-bulk"></i></p>
                <h5>Рассылка</h5>
                <a href="{{ url("admin/mails") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-box-open"></i></p>
                <h5>Бонусы и промокоды</h5>
                <a href="{{ url("admin/promo") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-chart-pie"></i></p>
                <h5>Статистика</h5>
                <a href="{{ url("admin/statistic") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-coins"></i></p>
                <h5>Монеты</h5>
                <a href="{{ url("admin/coins") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-dharmachakra"></i></p>
                <h5>Колесо фортуны</h5>
                <a href="{{ url("admin/wof") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-splotch"></i></p>
                <h5>Розыгрыши</h5>
                <a href="{{ url("admin/lottery") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="far fa-handshake"></i></p>
                <h5>Пари-матчи</h5>
                <a href="{{ url("admin/wager") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-hockey-puck"></i></p>
                <h5>Паки игроков</h5>
                <a href="{{ url("admin/packs") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-trophy"></i></p>
                <h5>Достижения</h5>
                <a href="{{ url("admin/achievements") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-clipboard-list"></i></p>
                <h5>Тикеты</h5>
                <a href="{{ url("admin/tickets") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-save"></i></p>
                <h5>Хранилище карточек</h5>
                <a href="{{ url("admin/storage") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-images"></i></p>
                <h5>Хранилище изображений</h5>
                <a href="{{ url("admin/images") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>
    </div>
</div>
@endsection