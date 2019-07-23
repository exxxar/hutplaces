@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Create New cardstorage</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('cardstorage.index') }}"> Back</a>
            </div>
        </div>
    </div>


    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    {!! Form::open(array('route' => 'cardstorage.store','method'=>'POST')) !!}
    <div class="row">
            <div class="col-sm-12">

                <div class="form-group">
                    <label for="title">title</label>
                    <input class="form-control" type="text" placeholder="title" name="title">
                </div>

                <div class="form-group">
                    <label for="console_type">console_type</label>
                    <select class="form-control" name="console_type">
                        <option value=0>xbox</option>
                        <option value=1>ps4</option>
                        <option value=2>pc</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="lot_type">lot_type</label>
                    <select class="form-control" name="lot_type">
                        <option value=0>card</option>
                        <option value=1>coins</option>
                        <option value=2>other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="game_type">game_type</label>
                    <select class="form-control" name="game_type">
                        <option value=0>NHL</option>
                        <option value=1>NBA</option>
                        <option value=2>FIFA</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="base_price">base_price</label>
                    <input class="form-control" type="number" min="0" placeholder="base_price" name="base_price">
                </div>

                <div class="form-group">
                    <label for="base_discount">base_discount</label>
                    <input class="form-control" type="number" min="0" placeholder="base_discount" name="base_discount">
                </div>

                <div class="form-group">
                    <label for="places">places</label>
                    <input class="form-control" type="number" min="1" placeholder="places" name="places" value="1">
                </div>

                <div class="form-group">
                    <label for="occupied_places">occupied_places</label>
                    <input class="form-control" type="number" min="0" placeholder="occupied_places" name="occupied_places">
                </div>


                <div class="form-group">
                    <label for="visible">visible</label>
                    <select class="form-control" name="visible">
                        <option value=1>yes</option>
                        <option value=0>no</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="is_only_one">is_only_one</label>
                    <select class="form-control" name="is_only_one">
                        <option value=1>yes</option>
                        <option value=0>no</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="completed">completed</label>
                    <select class="form-control" name="completed">
                        <option value=1>yes</option>
                        <option value=0>no</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="active">active</label>
                    <select class="form-control" name="active">
                        <option value=1>yes</option>
                        <option value=0>no</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="lifetime">lifetime</label>
                    <select class="form-control" name="lifetime">
                        <option value=0>unlimited</option>
                        <option value=1>12</option>
                        <option value=2>24</option>
                        <option value=3>36</option>
                        <option value=4>48</option>
                    </select>
                </div>

            </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
    {!! Form::close() !!}


@endsection