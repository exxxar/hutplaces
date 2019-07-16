@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Ticket Management</h2>
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
            <th>email</th>
            <th>created_at</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($tickets as $key => $ticket)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $ticket->email }}</td>
                <td>{{ $ticket->created_at }}</td>
                <td>
                    <a class="btn btn-info" href="{{ route('tickets.show',$ticket->id) }}">Show</a>
                    @can('tickets-delete')
                        {!! Form::open(['method' => 'DELETE','route' => ['tickets.destroy', $ticket->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}
                    @endcan
                </td>
            </tr>
        @endforeach
    </table>


    {!! $tickets->render() !!}


@endsection