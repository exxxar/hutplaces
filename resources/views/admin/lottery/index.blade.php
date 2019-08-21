@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Lottery Management</h2>
            </div>

            <div class="pull-right">
                @can('lottery-create')
                    <a class="btn btn-success" href="{{ route('lottery.create') }}"> Create New lottery</a>
                @endcan
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))     
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <p>{{ $message }}</p>
        </div>
    @endif


    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>title</th>
            <th>lot_type</th>
            <th>visible</th>
            <th>completed</th>
            <th>active</th>
            <th>lifetime</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($lotteries as $key => $lottery)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $lottery->title }}</td>
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
                    @if($lottery->visible)
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
                    <a class="btn btn-info" href="{{ route('lottery.show',$lottery->id) }}">Show</a>
                    @can('lottery-edit')
                        <a class="btn btn-primary" href="{{ route('lottery.edit',$lottery->id) }}">Edit</a>
                    @endcan
                    @can('lottery-delete')
                        {!! Form::open(['method' => 'DELETE','route' => ['lottery.destroy', $lottery->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}
                    @endcan
                </td>
            </tr>
        @endforeach
    </table>


    {!! $lotteries->render() !!}


@endsection