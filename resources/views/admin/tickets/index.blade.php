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


    @isset($tickets)
        <table class="table">
            <thead class="thead-light">
            <th>#</th>
            <th>Status</th>
            <th>Ticket type</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Action</th>
            </thead>

            <tbody>
            @foreach ($tickets as $ticket)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td>
                        @if ($ticket->is_active)
                            <span class="badge badge-warning">In process</span>
                        @else
                            <span class="badge badge-success">Completed</span>
                        @endif
                    </td>
                    <td>{{$ticket->ticket_type->key}}</td>
                    <td>{{ $ticket->created_at}}</td>
                    <td>{{ $ticket->updated_at}}</td>
                    <td>
                        <a class="btn btn-info" href="{{ route('tickets.show',$ticket->id) }}">Show</a>

                        {!! Form::open(['method' => 'DELETE','route' => ['tickets.destroy', $ticket->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}

                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        {!! $tickets->render() !!}
    @endisset

@endsection