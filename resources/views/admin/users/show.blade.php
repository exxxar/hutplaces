@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="pull-left">
                <h2> Show User</h2>
            </div>

            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
                @can("user-edit")
                    <a class="btn btn-info" href="{{ route('users.edit',$user->id) }}"> Edit</a>
                @endcan
            </div>

            @if (count($errors) > 0)
                <div class="alert alert-danger mt-2">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <table class="table mt-2">
                <thead class="thead-light">
                <th>Param</th>
                <th>Value</th>
                </thead>
                <tbody>
                <tr>
                    <td>Avatar</td>
                    <td>
                        @if(!empty($user->avatar))
                            @if (strpos("http",$user->avatar)!=false)
                                <img style="width:200px;height:200px;" src="{{$user->avatar}}" alt="">
                            @else
                                <img style="width:200px;height:200px;" src="{{ url('/img/avatars/'.$user->avatar)}}"
                                     alt="">
                            @endif
                        @else
                            <img src="{{url('/img/noavatar.png')}}" alt="" style="width:150px;height:150px;">
                        @endif
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{{$user->name}}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{{$user->email}}</td>
                </tr>
                @if(!empty($user->skype))
                    <tr>
                        <td>Skype</td>
                        <td>{{$user->skype}}</td>
                    </tr>
                @endif

                @if(!empty($user->vk))
                    <tr>
                        <td>Vkontakte</td>
                        <td>{{$user->vk}}</td>
                    </tr>
                @endif

                @if(!empty($user->fb))
                    <tr>
                        <td>Facebook</td>
                        <td>{{$user->fb}}</td>
                    </tr>
                @endif

                @if(!empty($user->tw))
                    <tr>
                        <td>Twitter</td>
                        <td>{{$user->tw}}</td>
                    </tr>
                @endif

                <tr>
                    <td>Money</td>
                    <td>{{$user->money}}</td>
                </tr>

                <tr>
                    <td>Level</td>
                    <td>{{$user->level->title}}</td>
                </tr>

                @if(!empty($user->discount))
                    <tr>
                        <td>Discount</td>
                        <td>{{$user->discount}}%</td>
                    </tr>
                @endif

                <tr>
                    <td>Exp</td>
                    <td>{{$user->exp}}</td>
                </tr>

                <tr>
                    <td>Active</td>
                    <td><input type="checkbox" class="form-control" {{$user->active?"checked":""}}></td>
                </tr>
                <tr>
                    <td>Coins</td>
                    <td>{{$user->coins}}</td>
                </tr>
                <tr>
                    <td>Roles</td>
                    <td>
                        @if(!empty($user->getRoleNames()))
                            @foreach($user->getRoleNames() as $v)
                                <label class="badge badge-success">{{ $v }}</label>
                            @endforeach
                        @endif
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

@endsection