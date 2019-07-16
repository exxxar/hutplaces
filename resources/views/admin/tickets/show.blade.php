@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Show Ticket</h2>
            </div>
            <div class="pull-right">  
                <a class="btn btn-primary" href="#"> Close</a>
                <a class="btn btn-primary" href="{{ route('tickets.index') }}"> Back</a>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>email:</strong>
                {{ $ticket->email }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>directory:</strong>
                {{ $ticket->directory }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>created_at:</strong>
                {{ $ticket->created_at }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>description:</strong>
                {{ $ticket->description }}
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <form>
                <div class="form-group">
                    <label for="emailForUser">User email</label>
                    <input type="email" class="form-control" id="emailForUser" placeholder="name@example.com" value="{{ $ticket->email }}">
                </div>

                <div class="form-group">
                    <label for="title">Message title</label>
                    <input type="email" class="form-control" id="title">
                </div>

                <div class="form-group">
                    <label for="message">Response text</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    </div>
@endsection