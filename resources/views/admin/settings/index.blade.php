@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Settings Management</h2>
            </div>
            <div class="pull-right">
                @can('setting-create')
                    <a class="btn btn-success" href="{{ route('settings.create') }}"> Create New Setting</a>
                @endcan
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    @isset($settings)

        <table class="table table-bordered">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Value</th>
                <th width="280px">Action</th>
            </tr>
            @foreach ($settings as $key => $setting)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td>{{ $setting->title }}</td>
                    <td>{{ $setting->value }}</td>
                    <td>
                        <a class="btn btn-info" href="{{ route('settings.show',$setting->id) }}">Show</a>
                        @can('setting-edit')
                            <a class="btn btn-primary" href="{{ route('settings.edit',$setting->id) }}">Edit</a>
                        @endcan
                        @can('setting-delete')
                            {!! Form::open(['method' => 'DELETE','route' => ['settings.destroy', $setting->id],'style'=>'display:inline']) !!}
                            {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                            {!! Form::close() !!}
                        @endcan
                    </td>
                </tr>
            @endforeach
        </table>
        {!! $settings->render() !!}
    @endisset
@endsection