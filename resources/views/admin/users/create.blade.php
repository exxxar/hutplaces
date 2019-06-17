@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Create New User</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>
        </div>
    </div>


    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    <form method="post" action="{{ route('users.create') }}">

        <div class="row">
            @csrf
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="nameUser">Имя пользователя</label>
                    <input type="text" class="form-control" id="nameUser" placeholder="name" name="name" value="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="emailUser">Почта пользователя</label>
                    <input type="email" class="form-control" id="emailUser" placeholder="name@example.com" name="email"
                           value="" }>
                </div>
            </div>
            <hr>

            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="skypeUser">Skype</label>
                    <input type="text" class="form-control" id="skypeUser" placeholder="skype" name="skype" value="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="vkUser">Vkontakte</label>
                    <input type="text" class="form-control" id="vkUser" placeholder="vk" name="vk" value="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="fbUser">Facebook</label>
                    <input type="text" class="form-control" id="fbUser" placeholder="fb" name="fb" value="">
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="twUser">Twitter</label>
                    <input type="text" class="form-control" id="twUser" placeholder="tw" name="tw" value="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="twUser">Money</label>
                    <input type="text" class="form-control" id="twUser" placeholder="money" name="money" value="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="levelUser">Level</label>
                    <input type="number" min="1" class="form-control" id="levelUser" placeholder="1" name="level"
                           value="" }>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="discountUser">Discount</label>
                    <input type="number" min="0" class="form-control" id="discountUser" placeholder="discount"
                           name="discount" value="">
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="expUser">Expirience</label>
                    <input type="number" min="0" class="form-control" id="expUser" placeholder="exp" name="exp"
                           value="">
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <label for="coinsUser">Coins</label>
                    <input type="number" min="0" class="form-control" id="coinsUser" placeholder="coins" name="coins"
                           value="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    {!! Form::select('active', ["Не активен","Активен"],1, array('class' => 'form-control')) !!}

                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <a href="#" data-toggle="modal" data-target="#avatarSelect">Загрузить аватар</a>
                    <br>
                    <input type="text" class="form-control" name="avatar" id="avatarUser" placeholder="name@example.com"
                           value="">
                </div>

            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <strong>Role:</strong>
                    {!! Form::select('roles[]', $roles,null, array('class' => 'form-control','multiple')) !!}
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Отправить</button>
                </div>
            </div>
        </div>
    </form>


    <div class="modal fade" id="avatarSelect" tabindex="-1" role="dialog" aria-labelledby="avatarSelectModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="image-list">
                        <div class="row">
                            @foreach($images as $img)
                                <div class="col-sm-6 col-md-4 col-lg-4 image-items">
                                    <div class="image-container">
                                        <img src="{{ route('images.show',basename($img)) }}"
                                             class="border border-primary rounded-sm" alt="">

                                        <div class="controlls">
                                            <a class="btn btn-info select-avatar " href="#"
                                               data-select="{{basename($img)}}">Выбрать</a>
                                            <a class="btn btn-info mt-2" target="_blank"
                                               href="{{ route('images.show',basename($img)) }}">Show</a>
                                            @can('imagestorage-delete')
                                                {!! Form::open(['method' => 'DELETE','route' => ['images.destroy',basename($img)],'style'=>'display:inline']) !!}
                                                {!! Form::submit('Delete', ['class' => 'btn btn-danger mt-2']) !!}
                                                {!! Form::close() !!}
                                            @endcan
                                        </div>
                                    </div>


                                </div>

                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Выбрать и закрыть</button>
                </div>
            </div>
        </div>
    </div>


@endsection