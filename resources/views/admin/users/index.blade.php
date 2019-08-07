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

<table class="table">

    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">skype</th>
        <th scope="col">vk</th>
        <th scope="col">fb</th>
        <th scope="col">tw</th>
        <th scope="col">money</th>
        <th scope="col">level</th>
        <th scope="col">discount</th>
        <th scope="col">exp</th>
        <th scope="col">coins</th>
        <th scope="col">active</th>
        <th scope="col">avatar</th>
        <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    @foreach($users as $key => $user)
        <tr>
            <td>{{$key + 1}}</td>
            <td><a href="{{ route('users.show',$user->id) }}">{{$user->name}}</a></td>
            <td>{{$user->email}}</td>
            <td>{{$user->skype}}</td>
            <td>{{$user->vk}}</td>
            <td>{{$user->fb}}</td>
            <td>{{$user->tw}}</td>
            <td>{{$user->money}}</td>
            <td>{{$user->level->title}}</td>
            <td>{{$user->discount}}</td>
            <td>{{$user->exp}}</td>
            <td>{{$user->coins}}</td>
            <td>
                @if(!empty($user->getRoleNames()))
                    @foreach($user->getRoleNames() as $v)
                        <label class="badge badge-success">{{ $v }}</label>
                    @endforeach
                @endif
            </td>
            <td>
                @if($user->active == 1)
                    Активен
                @else
                    Не активен
                @endif
            </td>
            <td><a href="" data-toggle="modal" data-target="#editUserAvatar">Avatar</a></td>
            <td>

                <div class="row">
                    <div class="col-sm-4">
                        <form action="{{ route('users.destroy', $user->id)}}" method="post">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" type="submit">Удалить</button>
                        </form>
                    </div>
                    <div class="col-sm-4">

                        <a class="btn btn-info" href="{{ route('users.edit',$user->id) }}">Редактировать</a>


                    </div>
                </div>


            </td>
        </tr>
    @endforeach

    </tbody>
</table>

{{ $users->links() }}


@endsection

