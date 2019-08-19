@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show user's stats</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>

            @isset($stats)
                <table class="table mt-2">
                    <thead class="thead-light">
                    <th>Param</th>
                    <th>Value</th>
                    </thead>
                    <tbody>
                    @foreach ($stats as $stat)
                        <tr>
                            <td>{{$stat->stat_type->key}}</td>
                            <td>{{$stat->stat_value}}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @endisset
        </div>
    </div>
@endsection