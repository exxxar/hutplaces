<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description"
          content="Пример на bootstrap 4: Базовая панель администратора с фиксированной боковой панелью и навигационной панелью.">

    <title>Панель администратора</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
    </style>
    <!-- Custom styles for this template -->
    <link href="{{url("/css/admin/admin.css")}}" rel="stylesheet">

</head>

<body>


<nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">


    @auth
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">HUTPLACES</a>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Найти" aria-label="Search">
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="{{url('/logout')}}">Выход</a>
            </li>
        </ul>
    @endauth



</nav>

<div class="container-fluid">

    @guest
        <div class="row">

            <main role="main" class="col-md-12 ml-sm-auto col-lg-12 px-4">
                @yield('content')
            </main>

        </div>
        @else

            <div class="row">

                <nav class="col-md-2 d-none d-md-block bg-light sidebar">

                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="{{ url("admin/") }}">
                                    <i class="fas fa-home"></i>
                                    @lang('admin.main') <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/users") }}">
                                    <i class="fas fa-users"></i>
                                    @lang('admin.users')
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/roles") }}">
                                    <i class="fas fa-user-tag"></i>
                                    @lang('admin.roles')
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/levels") }}">
                                    <i class="fas fa-level-up-alt"></i>
                                    @lang('admin.levels')
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/tickets") }}">
                                    <i class="fas fa-clipboard-list"></i>
                                    @lang('admin.tickets')
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/cards") }}">
                                    <i class="far fa-address-card"></i>
                                    @lang('admin.cards')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/lottery") }}">
                                    <i class="fas fa-splotch"></i>
                                    @lang('admin.lottery')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/auction") }}">
                                    <i class="fas fa-random"></i>
                                    @lang('admin.auctions')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/mails") }}">
                                    <i class="fas fa-mail-bulk"></i>
                                    @lang('admin.mails')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/promo") }}">
                                    <i class="fas fa-box-open"></i>
                                    @lang('admin.promo')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/statistic") }}">
                                    <i class="fas fa-chart-pie"></i>
                                    @lang('admin.statistic')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/coins") }}">
                                    <i class="fas fa-coins"></i>
                                    @lang('admin.coins')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/wof") }}">
                                    <i class="fas fa-dharmachakra"></i>
                                    @lang('admin.wof')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/wager") }}">
                                    <i class="far fa-handshake"></i>
                                    @lang('admin.wager')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/packs") }}">
                                    <i class="fas fa-hockey-puck"></i>
                                    @lang('admin.packs')
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/achievements") }}">
                                    <i class="fas fa-trophy"></i>
                                    @lang('admin.achievements')
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/storage") }}">
                                    <i class="fas fa-save"></i>
                                    @lang('admin.storage')
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ url("admin/images") }}">
                                    <i class="fas fa-images"></i>
                                    @lang('admin.images')
                                </a>
                            </li>
                        </ul>

                        <hr>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Сообщений <span class="badge badge-secondary">9</span>
                                    <span class="sr-only">непрочитанных сообщений</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Отчетов об ошибках <span class="badge badge-secondary">19</span>
                                    <span class="sr-only">непрочитанных сообщений</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Монет <span class="badge badge-secondary">1</span>
                                    <span class="sr-only">непрочитанных сообщений</span>
                                </a>
                            </li>

                        </ul>
                        <hr>
                        <div class="lang">
                            <h4> @lang('admin.lang')</h4>
                            <ul class="select-lang">
                                <li><a href="{{url('admin/lang/en')}}"><img src="{{url("/svg/en.svg")}}" alt=""></a>
                                </li>
                                <li><a href="{{url('admin/lang/ru')}}"><img src="{{url("/svg/ru.svg")}}" alt=""></a>
                                </li>
                            </ul>
                        </div>
                        <hr>

                    </div>
                </nav>


                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    @yield('content')
                </main>

                <div id="huts-preloader">
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
                </div>
            </div>
            @endguest

</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js"></script>
<script src="main.js"></script>
</body>
</html>