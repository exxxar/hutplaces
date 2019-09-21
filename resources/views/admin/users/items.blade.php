@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show user's items</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>


            @isset($cards)
                <div class="row mt-2">
                    @foreach ($items as $item)

                        <div class="col-sm-3 mt-2">
                            {!! var_dump($item)!!}
                        </div>

                    @endforeach
                </div>
                {{ $cards->links() }}
            @endisset
        </div>
    </div>
@endsection