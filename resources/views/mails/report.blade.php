@extends('layouts.mails')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Bug-report</div>

                    <div class="card-body">
                        <h1> {!!  $title !!} </h1>
                        <h3>{!!  $email !!}</h3>
                        <p>{!!  $description !!}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
