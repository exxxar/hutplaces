@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show user's wins</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>

            @isset($wins)
                <table class="table mt-2">
                    <thead class="thead-light">
                    <th>Title</th>
                    <th>Lot</th>
                    <th>Console type</th>
                    <th>Date end</th>
                    </thead>
                    <tbody>
                    @foreach ($wins as $win)
                        <tr>
                            <td>
                                @if (!empty($win->title))
                                    {{$win->title}}
                                @else
                                    Undefined
                                @endif

                            </td>
                            <td>{!! json_decode($win->lot->card->Card_data)->value!!}</td>
                            <td>{{$win->console_type->key}}</td>
                            <td>{{$win->updated_at}}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>

                {{ $wins->links() }}
            @endisset
        </div>
    </div>
@endsection