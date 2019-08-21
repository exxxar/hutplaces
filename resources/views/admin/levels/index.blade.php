@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Levels Management</h2>
            </div>
            <div class="pull-right">
                @can('level-create')
                    <a class="btn btn-success" href="{{ route('levels.create') }}"> Create New Level</a>
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
            <th>experience</th>
            <th>level</th>
            <th>discount</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($levels as $key => $level)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $level->title }}</td>
                <td>{{ $level->experience }}</td>
                <td>{{ $level->level }}</td>
                <td>{{ $level->discount }}</td>
                <td>
                    <a class="btn btn-info" href="{{ route('levels.show',$level->id) }}">Show</a>
                    @can('level-edit')
                        <a class="btn btn-primary" href="{{ route('levels.edit',$level->id) }}">Edit</a>
                    @endcan
                    @can('level-delete')
                        {!! Form::open(['method' => 'DELETE','route' => ['levels.destroy', $level->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}
                    @endcan
                </td>
            </tr>
        @endforeach
    </table>


    {!! $levels->render() !!}


@endsection