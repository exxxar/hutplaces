@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show user's activated promocodes</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>

            @isset($promocodes)
                <table class="table mt-2">
                    <thead class="thead-light">
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Prize</th>
                    <th>Action</th>
                    </thead>
                    <tbody>
                    @foreach ($promocodes as $promo)
                        <tr>
                            <td>{{$promo->id}}</td>
                            <td>{{$promo->title}}</td>
                            <td>{{$promo->description}}</td>
                            <td>
                                @foreach($promo->prizes() as $prize)
                                    <span class="badge badge-primary">{{$prize}}</span>
                                @endforeach
                            </td>
                            <td><a class="btn btn-primary" href="{{route('promo.show',$promo->id)}}">Show</a></td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
                {{ $promocodes->links() }}
            @endisset
        </div>
    </div>
@endsection