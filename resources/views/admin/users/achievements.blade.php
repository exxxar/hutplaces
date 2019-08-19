@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show user's achievements</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>


            @isset($achievements)
            <div class="row mt-2">
                @foreach ($achievements as $achievement)
                    <div class="col-sm-3 mt-2">
                        <a href="{{route("achievements.show",$achievement->id)}}">
                        <div class="achievement"
                             style="background-image: url('{{url('img/achievements/bg/'.$achievement->background)}}')">
                            <img src="{{url('img/achievements/element/'.$achievement->image)}}" alt="">

                        </div>
                        </a>
                    </div>
                @endforeach
            </div>
                {{ $achievements->links() }}
            @endisset
        </div>
    </div>
@endsection