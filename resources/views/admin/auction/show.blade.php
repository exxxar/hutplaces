@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Show Auction</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('auction.index') }}"> Back</a>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>title:</strong>
                {{ $auction->title }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>console_type:</strong>
                @switch($auction->console_type)
                    @case(0)
                        xbox
                        @break

                    @case(1)
                        ps4
                        @break

                    @case(2)
                        pc
                        @break

                    @default
                        {{$auction->console_type}}
                @endswitch
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>lot_id:</strong>
                {{ $auction->lot_id }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>game_type:</strong>
                @switch($auction->game_type)
                    @case(0)
                        NHL
                        @break

                    @case(1)
                        NBA
                        @break

                    @case(2)
                        FIFA
                        @break

                    @default
                        {{$auction->game_type}}
                @endswitch
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>step_price:</strong>
                {{ $auction->step_price }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>bid_price:</strong>
                {{ $auction->bid_price }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>buyer_id:</strong>
                {{ $auction->buyer_id }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>buy_price:</strong>
                {{ $auction->buy_price }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>lot_type:</strong>
                @switch($lottery->lot_type)
                    @case(0)
                        card
                        @break

                    @case(1)
                        coins
                        @break

                    @case(2)
                        other
                        @break

                    @default
                        {{$lottery->lot_type}}
                @endswitch
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>active:</strong>
                @if($auction->is_active)
                    yes
                @else
                    no
                @endif
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>lifetime:</strong>
                @switch($auction->lifetime)
                    @case(0)
                        unlimited
                        @break

                    @case(1)
                        12
                        @break

                    @case(2)
                        24
                        @break

                    @case(3)
                        36
                        @break

                    @case(4)
                        48
                        @break

                    @default
                        {{$auction->lifetime}}
                @endswitch
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>seller_id:</strong>
                {{ $auction->seller_id }}
            </div>
        </div>
    </div>
@endsection
