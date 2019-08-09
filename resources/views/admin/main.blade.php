@extends('layouts.admin')

@section('content')

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

    <form action="{{route('slider.image.upload')}}" method="post" enctype="multipart/form-data">
        {{csrf_field()}}
        <h2>Загрузка изображений для слайдера</h2>
        <div class="row">

            <div class="col-12">
                <div class="form-group ">
                    <label for="images">Изображения</label>
                    <input type="file" class="form-control" id="images" name="images[]" multiple accept="image/*">
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Отправить</button>
            </div>
        </div>
    </form>
    
        <div class="row mt-3">
            @foreach ($images as $image)
                <div class="col-3">
                    <form action="{{ route('slider.image.delete') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="image" value="{{ basename($image) }}">
                        <button type="submit" class="btn btn-danger" style="position: absolute;">X</button>
                    </form>
                    <a target="_blank" href="{{ route('slider.image.get', ['filename' => basename($image)]) }}">
                        <img style="width: 100%" src="{{ route('slider.image.get', ['filename' => basename($image)]) }}" alt="">
                    </a>
                </div>
            @endforeach
        </div>

   {{--     <div class="row  mt-4">
            <div class="col-sm-12">
                <div id="demo" class="carousel slide" data-ride="carousel">

                    <!-- Indicators -->
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <!-- The slideshow -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Los Angeles" width="1100" height="500">
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Chicago" width="1100" height="500">
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="New York" width="1100" height="500">
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>--}}

        <hr>


    <div class="row">
        <div class="col-sm-3">
            <div class="custom-card">
                <p><i class="fas fa-file-word"></i>/p>
                <h5>Управление контентом</h5>
                <a href="{{ url("admin/content") }}" class="btn btn-info">Переход к разделу</a>
            </div>
        </div>

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

@endsection
