@extends('layouts.admin')
@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Achievement Management</h2>
            </div>

            <div class="pull-right">
                @can("achievement-create")
                    <a class="btn btn-success" href="{{ route('achievements.create') }}"> Create New achievement</a>
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

    @isset($achievements)
        <table class="table table-bordered">
            <tr>
                <th>#</th>
                <th>Acievement</th>
                <th>Type</th>
                <th>Trigger type</th>
                <th>Trigger value</th>
                <th width="280px">Action</th>
            </tr>
            @foreach ($achievements as $key => $achievement)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td>
                        <div class="achievement"
                             style="background-image: url('{{url('img/achievements/bg/'.$achievement->background)}}')">
                            <img src="{{url('img/achievements/element/'.$achievement->image)}}" alt="">

                        </div>
                    </td>
                    <td>
                        {{$achievement->type->key}}
                    </td>
                    <td>
                        {{$achievement->trigger_type->key}}
                    </td>
                    <td>
                        {{$achievement->trigger_value}}
                    </td>
                    <td>

                        <a class="btn btn-info" href="{{ route('achievements.show',$achievement->id) }}">Show</a>
                        @can("achievement-edit")
                            <a class="btn btn-primary" href="{{ route('achievements.edit',$achievement->id) }}">Edit</a>
                        @endcan

                        @can("achievement-delete")
                            {!! Form::open(['method' => 'DELETE','route' => ['achievements.destroy', $achievement->id],'style'=>'display:inline']) !!}
                            {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                            {!! Form::close() !!}
                        @endcan
                    </td>
                </tr>
            @endforeach
        </table>
        {!! $achievements->render() !!}
    @endisset


@endsection