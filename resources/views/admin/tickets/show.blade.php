@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Show Ticket</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('tickets.index') }}"> Back</a>
            </div>

            <form method="post" action="{{ route('tickets.update', $ticket->id) }}">

                @method('PATCH')
                @csrf
                <table class="table mt-2">
                    <thead class="thead-light">
                    <th>Param</th>
                    <th>Value</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Active</td>
                        <td><input type="checkbox" name="is_active"
                                   class="form-control" {{$ticket->is_active?"checked":""}}></td>
                    </tr>
                    <tr>
                        <td>Ticket type</td>
                        <td>
                            <select name="ticket_type" class="form-control">
                                @foreach ( \App\Enums\TicketType::getInstances() as $ticketType)
                                    @if ($ticket->ticket_type->value==$ticketType->value)
                                        <option value="{{$ticketType->value}}" selected>{{$ticketType->key}}</option>
                                    @else
                                        <option value="{{$ticketType->value}}">{{$ticketType->key}}</option>
                                    @endif
                                @endforeach
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{{$ticket->title}}</td>
                    </tr>
                    <tr>
                        <td>Created at</td>
                        <td>{{$ticket->created_at}}</td>
                    </tr>
                    <tr>
                        <td>Updated at</td>
                        <td>{{$ticket->updated_at}}</td>
                    </tr>
                    @if(!empty($ticket->email))
                        <tr>
                            <td>Email</td>
                            <td>{{$ticket->email}}</td>
                        </tr>
                    @endif
                    <tr>
                        <td>Description</td>
                        <td>{{$ticket->description}}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button class="btn btn-primary" type="submit">Update</button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </form>
        </div>
    </div>


@endsection