@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Transactions Management</h2>
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <p>{{ $message }}</p>
        </div>
    @endif

    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>amount</th>
            <th>payment_system</th>
            <th>currency</th>
            <th>user</th>
            <th>date</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($transactions as $key => $transaction)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $transaction->amount }}</td>
                <td>{{ $transaction->payment_system }}</td>
                <td>{{ $transaction->currency }}</td>
                <td>{{ $transaction->userName }}</td>
                <td>{{ $transaction->created_at }}</td>
                <td>
                    <a class="btn btn-info" href="{{ route('transactions.show',$transaction->id) }}">Show</a>
                    @can('transactions-delete')
                        {!! Form::open(['method' => 'DELETE','route' => ['transactions.destroy', $transaction->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}
                    @endcan
                    {!! Form::open(['method' => 'DELETE','route' => ['transactions.destroy', $transaction->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
    </table>


    {!! $transactions->render() !!}


@endsection