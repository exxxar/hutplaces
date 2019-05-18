@extends('layouts.admin')

@section('content')
<div class="row">
    <form>
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


    <div class="row">
        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-users"></i></p>
                <h5>Пользователи</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="far fa-address-card"></i></p>
                <h5>Карточки</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-random"></i></p>
                <h5>Аукционы</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-mail-bulk"></i></p>
                <h5>Рассылка</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-box-open"></i></p>
                <h5>Бонусы и промокоды</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-chart-pie"></i></p>
                <h5>Статистика</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-coins"></i></p>
                <h5>Монеты</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-dharmachakra"></i></p>
                <h5>Колесо фортуны</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="far fa-handshake"></i></p>
                <h5>Пари-матчи</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-hockey-puck"></i></p>
                <h5>Паки игроков</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-trophy"></i></p>
                <h5>Достижения</h5>
                <a href="#" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>
    </div>
</div>
@endsection