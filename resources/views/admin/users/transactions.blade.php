@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show user's transactions</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>

            @isset($transactions)
                <table class="table mt-2">
                    <thead class="thead-light">
                    <th>Payment system</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Created At</th>
                    </thead>
                    <tbody>
                    @foreach ($transactions as $transaction)
                        <tr>
                            <td>{{$transaction->payment_system}}</td>
                            <td>{{$transaction->amount}}</td>
                            <td>{{$transaction->currency}}</td>
                            <td>{{$transaction->created_at}}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>

                {{ $transactions->links() }}
            @endisset
        </div>
    </div>


@endsection