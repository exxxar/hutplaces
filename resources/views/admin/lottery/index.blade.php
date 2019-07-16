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
                <td>{{ $lottery->lot_type }}</td>
                <td>{{ $lottery->visible }}</td>
                <td>{{ $lottery->completed }}</td>
                <td>{{ $lottery->active }}</td>
                <td>{{ $lottery->lifetime }}</td>
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