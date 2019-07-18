@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Promocode Management</h2>
            </div>
            <div class="pull-right">
                @can('promo-create')
                    <a class="btn btn-success" href="{{ route('promo.create') }}"> Create New Promo</a>
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
            <th>lifetime</th>
            <th>isActive</th>
            <th>title</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($promocodes as $key => $promo)
            <tr>
                <td>{{ ++$i }}</td>
                <td>
                    @switch($promo->lifetime)
                        @case(0)
                            12
                            @break
                    
                        @case(1)
                            24
                            @break
    
                        @case(2)
                            36
                            @break
    
                        @case(3)
                            48
                            @break

                        @case(4)
                            96
                            @break
    
                        @case(5)
                            128
                            @break
                        
                        @default
                            {{$promo->lifetime}}
                    @endswitch 
                </td>
                <td>
                    @if($promo->isActive)
                        yes
                    @else
                        no
                    @endif
                </td>
                <td>{{ $promo->title }}</td>
                <td>
                    <a class="btn btn-info" href="{{ route('promo.show',$promo->id) }}">Show</a>
                    @can('promo-edit')
                        <a class="btn btn-primary" href="{{ route('promo.edit',$promo->id) }}">Edit</a>
                    @endcan
                    @can('promo-delete')
                        {!! Form::open(['method' => 'DELETE','route' => ['promo.destroy', $promo->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}
                    @endcan
                </td>
            </tr>
        @endforeach
    </table>


    {!! $promocodes->render() !!}


@endsection