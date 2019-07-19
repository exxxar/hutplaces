@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Show Achievement</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('achievements.index') }}"> Back</a>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>category:</strong>
                @switch($achievement->category)
                    @case(0)
                        basic
                        @break

                    @default
                        {{$achievement->category}}
                @endswitch
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>type:</strong>
                @switch($achievement->type)
                    @case(0)
                        частое
                        @break
                
                    @case(1)
                        редкое
                        @break

                    @case(2)
                        очень редкое
                        @break

                    @case(3)
                        легендарное
                        @break

                    @default
                        {{$achievement->type}}
                @endswitch
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>title:</strong>
                {{ $achievement->title }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>description:</strong>
                {{ $achievement->description }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>discount:</strong>
                {{ $achievement->discount }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>exp:</strong>
                {{ $achievement->exp }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>coins:</strong>
                {{ $achievement->coins }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>money:</strong>
                {{ $achievement->money }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>items_id:</strong>
                {{ $achievement->items_id }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>cards_id:</strong>
                {{ $achievement->cards_id }}
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>images_storage_id:</strong>
                {{ $achievement->images_storage_id }}
            </div>
        </div>
    </div>
@endsection