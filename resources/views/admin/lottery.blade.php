@extends('layouts.admin')

@section('content')
    
    <!-- Errors and messages -->
    @if ($errors->any())
    <div class="alert alert-danger">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <ul>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
    </div><br/>
    @endif

    @if ($message = Session::get('success'))
    <div class="alert alert-success alert-block">  
    <button type="button" class="close" data-dismiss="alert">×</button>
    {{ $message }}
    </div>
    @endif

    <h4>Розыгрыши</h4>
    <a class="btn btn-info" data-toggle="modal" data-target="#add-new-lottery"><i class="fas fa-plus-circle"></i></a>

    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">console_type</th>
            <th scope="col">lot_type</th>
            <th scope="col">game_type</th>
            <th scope="col">base_price</th>
            <th scope="col">base_discount</th>
            <th scope="col">places</th>
            <th scope="col">winner_id</th>
            <th scope="col">occupied_places</th>
            <th scope="col">next_lottery_id</th>
            <th scope="col">prev_lottery_id</th>
            <th scope="col">visible</th>
            <th scope="col">is_only_one</th>
            <th scope="col">completed</th>
            <th scope="col">active</th>
            <th scope="col">lifetime</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
            @foreach($lotteries as $key => $lottery)
            <tr>
                <td>{{$key + 1}}</td>
                <td>{{$lottery->title}}</td>
                <td>
                    @switch($lottery->console_type)
                        @case(0)
                            xbox
                            @break
                    
                        @case(1)
                            ps4
                            @break

                        @case(2)
                            pc
                            @break

                        @default
                            {{$lottery->console_type}}
                    @endswitch
                </td>
                <td>
                    @switch($lottery->lot_type)
                        @case(0)
                            card
                            @break
                    
                        @case(1)
                            coins
                            @break

                        @case(2)
                            other
                            @break

                        @default
                            {{$lottery->lot_type}}
                    @endswitch                                    
                </td>
                <td>
                    @switch($lottery->game_type)
                        @case(0)
                            NHL
                            @break
                    
                        @case(1)
                            NBA
                            @break

                        @case(2)
                            FIFA
                            @break

                        @default
                            {{$lottery->game_type}}
                    @endswitch                      
                </td>
                <td>{{$lottery->base_price}}</td>
                <td>{{$lottery->base_discount}}</td>
                <td>{{$lottery->places}}</td>
                <td>{{$lottery->winner_id}}</td>
                <td>{{$lottery->occupied_places}}</td>
                <td>{{$lottery->next_lottery_id}}</td>
                <td>{{$lottery->prev_lottery_id}}</td>
                <td>
                    @if($lottery->visible)
                        yes
                    @else
                        no
                    @endif
                </td>
                <td>
                    @if($lottery->is_only_one)
                        yes
                    @else
                        no
                    @endif
                </td>
                <td>
                    @if($lottery->completed)
                        yes
                    @else
                        no
                    @endif
                </td>
                
                <td>
                    @if($lottery->active)
                        yes
                    @else
                        no
                    @endif
                </td>

                <td>
                    @switch($lottery->lifetime)
                        @case(0)
                            unlimited
                            @break
                    
                        @case(1)
                            12
                            @break

                        @case(2)
                            24
                            @break
                        
                        @case(3)
                            36
                            @break
                            
                        @case(4)
                            48
                            @break

                        @default
                            {{$lottery->lifetime}}
                    @endswitch   
                </td>

                <td>

                    <div class="row">
                        <div class="col-sm-4">
                            <form action="{{ route('lottery.destroy', $lottery->id)}}" method="post">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-danger" type="submit">Удалить</button>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <button class="btn btn-info" data-toggle="modal" data-target="#edit-lottery-{{$key}}">Редактировать
                            </button>
                        </div>
                    </div>


                </td>
            </tr>
            @endforeach

        </tbody>
    </table>


    {{ $lotteries->links() }}

    <!-- Добавление розыгрыша -->

    <!-- Modal -->
    <div class="modal fade" id="add-new-lottery" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Добавление</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Добавление розыгрыша</h4>
                    <form method="post" action="{{ route('lottery.store') }}">
                        @csrf
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
                                    <label for="next_lottery_id">next_lottery_id</label>
                                    <input class="form-control" type="number" placeholder="next_lottery_id" name="next_lottery_id">
                                </div>

                                <div class="form-group">
                                    <label for="prev_lottery_id">prev_lottery_id</label>
                                    <input class="form-control" type="number" placeholder="prev_lottery_id" name="prev_lottery_id">
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
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                            <button type="submit" class="btn btn-primary">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <!-- Редактирование розыгрыша -->

    @foreach($lotteries as $key => $lottery)

    <!-- Modal -->

        <div class="modal fade" id="edit-lottery-{{$key}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Редактирование</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h4>Редактирование розыгрыша</h4>
                        <form method="post" action="{{ route('lottery.update', $lottery->id) }}">
                            @method('PATCH')
                            @csrf
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
                            </div>
    
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                <button type="submit" class="btn btn-primary">Сохранить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    @endforeach

@endsection