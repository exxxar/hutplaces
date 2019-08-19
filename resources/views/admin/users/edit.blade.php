@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Current User</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
            </div>
        </div>
    </div>


    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    <form method="post" action="{{ route('users.update', $user->id) }}" enctype="multipart/form-data">

        @method('PATCH')
        @csrf

        <table class="table mt-2">
            <thead class="thead-light ">
            <th>Param</th>
            <th>Value</th>
            </thead>
            <tbody>
            <tr>
                <td>Avatar</td>
                <td>
                    @if(!empty($user->avatar))
                        <div class="form-group">
                            @if (strpos("http",$user->avatar)!=false)
                                <img style="width:200px;height:200px;" src="{{$user->avatar}}" alt="">
                            @else
                                <img style="width:200px;height:200px;" src="{{ url('/img/avatars/'.$user->avatar)}}" alt="">
                            @endif
                        </div>
                    @endif
                    <div class="form-group">
                        @if(!empty($user->avatar))
                            <label>Current avatar:{{$user->avatar}}</label>
                        @else
                            <label>No avatar before</label>
                        @endif
                        <input type="file" name="avatar" class="form-control">
                    </div>

                </td>
            </tr>
            <tr>
                <td>Name</td>
                <td>
                    <input type="text" name="name" value="{{$user->name}}" class="form-control">
                </td>
            </tr>

            <tr>
                <td>Password</td>
                <td>
                    <input type="text" name="password" class="form-control">
                </td>
            </tr>

            <tr>
                <td>Email</td>
                <td><input type="email" name="email" value="{{$user->email}}" class="form-control"></td>
            </tr>

            <tr>
                <td>Skype</td>
                <td><input type="text" name="skype" value="{{$user->skype}}" class="form-control"></td>
            </tr>


            <tr>
                <td>Vkontakte</td>
                <td><input type="text" name="vk" value="{{$user->vk}}" class="form-control"></td>
            </tr>

            <tr>
                <td>Facebook</td>
                <td><input type="text" name="fb" value="{{$user->fb}}" class="form-control"></td>
            </tr>


            <tr>
                <td>Twitter</td>
                <td><input type="text" name="tw" value="{{$user->tw}}" class="form-control"></td>
            </tr>

            <tr>
                <td>Money</td>
                <td><input type="number" name="money" value="{{$user->money}}" class="form-control"></td>
            </tr>

            <tr>
                <td>Level</td>
                <td>
                    <label>You can create new levels <a href="{{route("levels.create")}}">here</a></label>
                    <select class="form-control" name="level">
                        @foreach($levels as $level)
                            @if ($level->id==$user->level->id)
                                <option value="{{$level->id}}" selected>{{$level->title}}</option>
                            @else
                                <option value="{{$level->id}}">{{$level->title}}</option>
                            @endif
                        @endforeach
                    </select>
                </td>
            </tr>

            <tr>
                <td>Discount, %</td>
                <td><input type="number" name="discount" value="{{$user->discount}}" class="form-control"></td>
            </tr>


            <tr>
                <td>Exp</td>
                <td><input type="number" name="exp" value="{{$user->exp}}" class="form-control"></td>
            </tr>

            <tr>
                <td>Active</td>
                <td><input type="checkbox" class="form-control" name="active" {{$user->active?"checked":""}}></td>
            </tr>
            <tr>
                <td>Coins</td>
                <td><input type="number" name="coins" value="{{$user->coins}}" class="form-control"></td>
            </tr>
            <tr>
                <td>Roles</td>
                <td>
                    {!! Form::select('roles[]', $roles,$userRole, array('class' => 'form-control','multiple')) !!}
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                    <button class="btn btn-primary">Update</button>
                </td>
            </tr>
            </tbody>
        </table>

    </form>
@endsection