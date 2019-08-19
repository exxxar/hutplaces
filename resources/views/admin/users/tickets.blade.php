@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show user's tickets</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>

            @isset($tickets)
                <table class="table mt-2">
                    <thead class="thead-light">
                    <th>#</th>
                    <th>Ticket</th>
                     </thead>
                    <tbody>
                    @foreach ($tickets as $ticket)
                        <tr>
                            <td>{{$ticket->id}}</td>

                            <td>
                                <h4>
                                    @if ($ticket->is_active)
                                        <span class="badge badge-warning">In process</span>
                                    @else
                                        <span class="badge badge-success">Completed</span>
                                    @endif
                                    {{$ticket->title}}[{{$ticket->created_at}}]
                                </h4>
                                <h6 class="mt-2">{{$ticket->ticket_type->key}} Type</h6>
                                <hr>
                                <p>{{$ticket->description}}</p>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>

                {{ $tickets->links() }}
            @endisset
        </div>
    </div>


@endsection