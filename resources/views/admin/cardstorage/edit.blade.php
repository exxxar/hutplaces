@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Lottery</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('lottery.index') }}"> Back</a>
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


    {!! Form::model($lottery, ['method' => 'PATCH','route' => ['lottery.update', $lottery->id]]) !!}
    <div class="row">
            <div class="col-sm-12">
    
                    <div class="form-group">
                        <label for="title">title</label>
                        <input class="form-control" type="text" placeholder="title" name="title" value={{$lottery->title}}>
                    </div>

                    <div class="form-group">
                        <label for="console_type">console_type</label>
                        <select class="form-control" name="console_type">
                            @switch($lottery->console_type)
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
                            @switch($lottery->lot_type)
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
                            @switch($lottery->game_type)
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
                        <label for="base_price">base_price</label>
                        <input class="form-control" type="number" min="0" placeholder="base_price" name="base_price" value={{$lottery->base_price}}>
                    </div>

                    <div class="form-group">
                        <label for="base_discount">base_discount</label>
                        <input class="form-control" type="number" min="0" placeholder="base_discount" name="base_discount" value={{$lottery->base_discount}}>
                    </div>

                    <div class="form-group">
                        <label for="places">places</label>
                        <input class="form-control" type="number" min="1" placeholder="places" name="places" value={{$lottery->places}}>
                    </div>

                    <div class="form-group">
                        <label for="winner_id">places</label>
                        <input class="form-control" type="number" placeholder="winner_id" name="winner_id" value={{$lottery->winner_id}}>
                    </div>

                    <div class="form-group">
                        <label for="occupied_places">occupied_places</label>
                        <input class="form-control" type="number" min="0" placeholder="occupied_places" name="occupied_places" value={{$lottery->occupied_places}}>
                    </div>

                    <div class="form-group">
                        <label for="next_lottery_id">next_lottery_id</label>
                        <input class="form-control" type="number" placeholder="next_lottery_id" name="next_lottery_id" value={{$lottery->next_lottery_id}}>
                    </div>

                    <div class="form-group">
                        <label for="prev_lottery_id">prev_lottery_id</label>
                        <input class="form-control" type="number" placeholder="prev_lottery_id" name="prev_lottery_id" value={{$lottery->prev_lottery_id}}>
                    </div>

                    <div class="form-group">
                        <label for="visible">visible</label>
                        <select class="form-control" name="visible">
                            @if($lottery->visible == 1)
                                <option value=1>yes</option>
                                <option value=0>no</option>
                            @else
                                <option value=0>no</option>
                                <option value=1>yes</option>
                            @endif
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="is_only_one">is_only_one</label>
                        <select class="form-control" name="is_only_one">
                            @if($lottery->is_only_one == 1)
                                <option value=1>yes</option>
                                <option value=0>no</option>
                            @else
                                <option value=0>no</option>
                                <option value=1>yes</option>
                            @endif
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="completed">completed</label>
                        <select class="form-control" name="completed">
                            @if($lottery->completed == 1)
                                <option value=1>yes</option>
                                <option value=0>no</option>
                            @else
                                <option value=0>no</option>
                                <option value=1>yes</option>
                            @endif
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="active">active</label>
                        <select class="form-control" name="active">
                            @if($lottery->active == 1)
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
                            @switch($lottery->lifetime)
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