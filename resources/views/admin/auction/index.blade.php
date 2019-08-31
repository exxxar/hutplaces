@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Auction Management</h2>
            </div>

            <div class="pull-right">
                @can('auction-create')
                    <a class="btn btn-success" href="{{ route('auction.create') }}"> Create New Auction</a>
                @endcan
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
            <th>title</th>
            <th>active</th>
            <th>lot_type</th>
            <th>lifetime</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($auctions as $key => $auction)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $auction->title }}</td>
                <td>
                    @if($auction->is_active)
                        yes
                    @else
                        no
                    @endif
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
                <td>
                    <a class="btn btn-info" href="{{ route('auction.show',$auction->id) }}">Show</a>
                    @can('auction-edit')
                        <a class="btn btn-primary" href="{{ route('auction.edit',$auction->id) }}">Edit</a>
                    @endcan
                    @can('auction-delete')
                        {!! Form::open(['method' => 'DELETE','route' => ['auction.destroy', $auction->id],'style'=>'display:inline']) !!}
                        {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                        {!! Form::close() !!}
                    @endcan
                </td>
            </tr>
        @endforeach
    </table>


    {!! $auctions->render() !!}


@endsection
