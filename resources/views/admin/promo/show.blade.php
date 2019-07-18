@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Show promocode</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('promo.index') }}"> Back</a>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>lifetime:</strong>
                @switch($promocode->lifetime)
                    @case(0)
                        12
                        @break
                
                    @case(1)
                        24
                        @break

                    @case(2)
                        36
                        @break

                    @case(3)
                        48
                        @break

                    @case(4)
                        96
                        @break

                    @case(5)
                        128
                        @break
                    
                    @default
                        {{$promocode->lifetime}}
                @endswitch
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>isActive:</strong>
                @if($promocode->isActive)
                    yes
                @else
                    no
                @endif
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>title:</strong>
                {{ $promocode->title }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>description:</strong>
                {{ $promocode->description }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>activation_count:</strong>
                {{ $promocode->activation_count }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>count:</strong>
                {{ $promocode->count }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>money:</strong>
                {{ $promocode->money }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>exp:</strong>
                {{ $promocode->exp }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>discount:</strong>
                {{ $promocode->discount }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>items_id:</strong>
                {{ $promocode->items_id }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>cards_id:</strong>
                {{ $promocode->cards_id }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>images_storage_id:</strong>
                {{ $promocode->images_storage_id }}
            </div>
        </div>
    </div>
@endsection