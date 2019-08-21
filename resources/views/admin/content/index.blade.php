@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Content Management</h2>
            </div>
            <div class="pull-right">
                @can("content-create")
                    <a class="btn btn-success" href="{{ route('content.create') }}">Create New Content</a>
                @endcan
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif


    @isset($content)
        <table class="table table-bordered">
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>lang</th>
                <th>Type</th>
                <th width="280px">Action</th>
            </tr>
            @foreach ($content as $key => $c)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td>{{ $c->title }}</td>
                    <td>{{ $c->lang }}</td>
                    <td><a class="btn btn-primary" href="{{route("content.all",["type"=>$c->type])}}">{{ $c->type }}</a>
                    </td>
                    <td>
                        <a class="btn btn-info" href="{{ route('content.show',$c->id) }}">Show</a>

                        @can("content-edit")
                            <a class="btn btn-primary" href="{{ route('content.edit',$c->id) }}">Edit</a>
                        @endcan

                        @can("content-delete")
                            {!! Form::open(['method' => 'DELETE','route' => ['content.destroy', $c->id],'style'=>'display:inline']) !!}
                            {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                            {!! Form::close() !!}
                        @endcan
                    </td>
                </tr>
            @endforeach
        </table>
        {!! $content->render() !!}
    @endisset

@endsection