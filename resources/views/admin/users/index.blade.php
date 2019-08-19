@extends('layouts.admin')

@section("content")
@if ($errors->any())
    <div class="alert alert-danger">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div><br/>
@endif

@if ($message = Session::get('success'))
    <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>
        {{ $message }}
    </div>
@endif
<div class="row">
    <div class="col-sm-4">
        <a class="btn btn-primary" href="{{route("users.create")}}">New user</a>
    </div>
</div>

<table class="table mt-2">

    <thead class="thead-light">
    <tr>
        <th scope="col"></th>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Roles</th>
        <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    @foreach($users as $key => $user)
        <tr>
            <td>
                <form action="{{ route('users.destroy', $user->id)}}" method="post">
                    @csrf
                    @method('DELETE')
                    <a class="btn btn-link" type="submit"><i class="fas fa-times"></i></a>
                </form>
            </td>
            <td>{{$key + 1}}</td>
            <td><a href="{{ route('users.show',$user->id) }}">{{$user->name}}</a>
                @if($user->active == 1)
                    <label class="badge badge-success">Active</label></td>
                @else
                    <label class="badge badge-danger">InActive</label></td>
                @endif

            <td>{{$user->email}}</td>
            <td>
                @if(!empty($user->getRoleNames()))
                    @foreach($user->getRoleNames() as $v)
                        <label class="badge badge-success">{{ $v }}</label>
                    @endforeach
                @endif
            </td>

            <td>
                <div class="row">
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Achievements</a>
                            <a class="dropdown-item" href="{{ route('users.edit',$user->id) }}">Edit</a>
                            <a class="dropdown-item" href="#">Cards</a>
                            <a class="dropdown-item" href="#">Promocodes</a>
                            <a class="dropdown-item" href="#">Roles</a>
                            <a class="dropdown-item" href="{{ route('users.show',$user->id) }}">Show</a>
                            <a class="dropdown-item" href="#">Stats</a>
                            <a class="dropdown-item" href="#">Tickets</a>
                            <a class="dropdown-item" href="#">Transactions</a>
                            <a class="dropdown-item" href="#">Wins</a>
                        </div>
                    </div>


                </div>


            </td>
        </tr>
    @endforeach

    </tbody>
</table>

{{ $users->links() }}


@endsection

