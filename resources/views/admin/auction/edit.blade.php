@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Auction</h2>
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


    {!! Form::model($auction, ['method' => 'PATCH','route' => ['auction.update', $auction->id]]) !!}
    <div class="row">
            <div class="col-sm-12">

                    <div class="form-group">
                        <label for="title">title</label>
                        <input class="form-control" type="text" placeholder="title" name="title" value={{$auction->title}}>
                    </div>

                    <div class="form-group">
                        <label for="console_type">console_type</label>
                        <select class="form-control" name="console_type">
                            @switch($auction->console_type)
                                @case(0)
                                    <option value=0>xbox</option>
                                    <option value=1>ps4</option>
                                    <option value=2>pc</option>
                                    @break

                                @case(1)
                                    <option value=1>ps4</option>
                                    <option value=0>xbox</option>
                                    <option value=2>pc</option>
                                    @break

                                @case(2)
                                    <option value=2>pc</option>
                                    <option value=1>ps4</option>
                                    <option value=0>xbox</option>
                                    @break
                            @endswitch
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="lot_type">lot_type</label>
                        <select class="form-control" name="lot_type">
                            @switch($auction->lot_type)
                                @case(0)
                                    <option value=0>card</option>
                                    <option value=1>coins</option>
                                    <option value=2>other</option>
                                    @break

                                @case(1)
                                    <option value=1>coins</option>
                                    <option value=0>card</option>
                                    <option value=2>other</option>
                                    @break

                                @case(2)
                                    <option value=2>other</option>
                                    <option value=0>card</option>
                                    <option value=1>coins</option>
                                    @break
                            @endswitch
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="game_type">game_type</label>
                        <select class="form-control" name="game_type">
                            @switch($auction->game_type)
                                @case(0)
                                    <option value=0>NHL</option>
                                    <option value=1>NBA</option>
                                    <option value=2>FIFA</option>
                                    @break

                                @case(1)
                                    <option value=1>NBA</option>
                                    <option value=0>NHL</option>
                                    <option value=2>FIFA</option>
                                    @break

                                @case(2)
                                    <option value=2>FIFA</option>
                                    <option value=0>NHL</option>
                                    <option value=1>NBA</option>
                                    @break
                            @endswitch

                        </select>
                    </div>

                    <div class="form-group">
                        <label for="step_price">step_price</label>
                        <input class="form-control" type="number" min="0" placeholder="step_price" name="step_price" value={{$auction->step_price}}>
                    </div>

                    <div class="form-group">
                        <label for="bid_price">bid_price</label>
                        <input class="form-control" type="number" min="0" placeholder="bid_price" name="bid_price" value={{$auction->bid_price}}>
                    </div>

                    <div class="form-group">
                        <label for="buy_price">buy_price</label>
                        <input class="form-control" type="number" min="0" placeholder="buy_price" name="buy_price" value={{$auction->buy_price}}>
                    </div>

                    <div class="form-group">
                        <label for="active">active</label>
                        <select class="form-control" name="is_active">
                            @if($auction->active == 1)
                                <option value=1>yes</option>
                                <option value=0>no</option>
                            @else
                                <option value=0>no</option>
                                <option value=1>yes</option>
                            @endif
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="lifetime">lifetime</label>
                        <select class="form-control" name="lifetime">
                            @switch($auction->lifetime)
                                @case(0)
                                    <option value=0>unlimited</option>
                                    <option value=1>12</option>
                                    <option value=2>24</option>
                                    <option value=3>36</option>
                                    <option value=4>48</option>
                                    @break

                                @case(1)
                                    <option value=1>12</option>
                                    <option value=0>unlimited</option>
                                    <option value=2>24</option>
                                    <option value=3>36</option>
                                    <option value=4>48</option>
                                    @break

                                @case(2)
                                    <option value=2>24</option>
                                    <option value=0>unlimited</option>
                                    <option value=1>12</option>
                                    <option value=3>36</option>
                                    <option value=4>48</option>
                                    @break

                                @case(3)
                                    <option value=3>36</option>
                                    <option value=0>unlimited</option>
                                    <option value=1>12</option>
                                    <option value=2>24</option>
                                    <option value=4>48</option>
                                    @break

                                @case(4)
                                    <option value=4>48</option>
                                    <option value=0>unlimited</option>
                                    <option value=1>12</option>
                                    <option value=2>24</option>
                                    <option value=3>36</option>
                                    @break
                            @endswitch
                        </select>
                    </div>

                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
    </div>
    {!! Form::close() !!}


@endsection
