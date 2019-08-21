@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Cards Management</h2>
            </div>
            <div class="pull-right">
                @can('cards-storage-create')
                    <a class="btn btn-success" href="{{ route('storage.create') }}"> Create New Card</a>
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
            <th>Card</th>
            <th>League</th>
            <th>Player</th>
            <th>Team</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($cardstorages as $key => $cardstorage)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $cardstorage->Card }}</td>
                <td>{{ $cardstorage->League }}</td>
                <td>{{ $cardstorage->Player }}</td>
                <td>{{ $cardstorage->Team }}</td>
                <td>
                    <a class="btn btn-info" href="{{ route('storage.show',$cardstorage->id) }}">Show</a>
                    @can('cards-storage-edit')
                        <a class="btn btn-primary" href="{{ route('storage.edit',$cardstorage->id) }}">Edit</a>
                    @endcan
                    @can('cards-storage-delete')
                        {!! Form::open(['method' => 'DELETE','route' => ['storage.destroy', $cardstorage->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}
                    @endcan
                </td>
            </tr>
        @endforeach
    </table>
    {!! $cardstorages->render() !!}
@endsection
