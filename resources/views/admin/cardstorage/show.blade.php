@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Show Lottery</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('lottery.index') }}"> Back</a>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>title:</strong>
                {{ $lottery->title }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>console_type:</strong>
                @switch($lottery->console_type)
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
                        {{$lottery->console_type}}
                @endswitch
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
                <strong>game_type:</strong>
                @switch($lottery->game_type)
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
                        {{$lottery->game_type}}
                @endswitch 
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>base_price:</strong>
                {{ $lottery->base_price }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>base_discount:</strong>
                {{ $lottery->base_discount }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>places:</strong>
                {{ $lottery->places }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>winner_id:</strong>
                {{ $lottery->winner_id }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>occupied_places:</strong>
                {{ $lottery->occupied_places }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>next_lottery_id:</strong>
                {{ $lottery->next_lottery_id }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>prev_lottery_id:</strong>
                {{ $lottery->prev_lottery_id }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>visible:</strong>
                @if($lottery->visible)
                    yes
                @else
                    no
                @endif
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>is_only_one:</strong>
                @if($lottery->is_only_one)
                    yes
                @else
                    no
                @endif
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>completed:</strong>
                @if($lottery->completed)
                    yes
                @else
                    no
                @endif
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>active:</strong>
                @if($lottery->active)
                    yes
                @else
                    no
                @endif
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>lifetime:</strong>
                @switch($lottery->lifetime)
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
                        {{$lottery->lifetime}}
                @endswitch 
            </div>
        </div>
    </div>
@endsection