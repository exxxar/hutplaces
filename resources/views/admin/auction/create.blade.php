@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Create New Auction</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('auction.index') }}"> Back</a>
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


    {!! Form::open(array('route' => 'auction.store','method'=>'POST')) !!}
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
                    <label for="lifetime">lifetime</label>
                    <select class="form-control" name="lifetime">
                        <option value=0>unlimited</option>
                        <option value=1>12</option>
                        <option value=2>24</option>
                        <option value=3>36</option>
                        <option value=4>48</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="step_price">step_price</label>
                    <input class="form-control" type="number" min="0" placeholder="step_price" name="step_price">
                </div>

                <div class="form-group">
                    <label for="bid_price">bid_price</label>
                    <input class="form-control" type="number" min="0" placeholder="bid_price" name="bid_price">
                </div>

                <div class="form-group">
                    <label for="lot_id">lot_id</label>
                    <input class="form-control" type="number" placeholder="lot_id" name="lot_id" value="1">
                </div>

                <div class="form-group">
                    <label for="buy_price">buy_price</label>
                    <input class="form-control" type="number" min="0" placeholder="buy_price" name="buy_price">
                </div>

                <div class="form-group">
                    <label for="active">active</label>
                    <select class="form-control" name="is_active">
                        <option value=1>yes</option>
                        <option value=0>no</option>
                    </select>
                </div>



            </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
    {!! Form::close() !!}


@endsection
