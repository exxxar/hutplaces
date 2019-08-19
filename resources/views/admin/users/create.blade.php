@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Create New User</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
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


        </div>
    </div>


    <form method="post" action="{{ route('users.store') }}" enctype="multipart/form-data">
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
                    <input type="file" name="avatar" class="form-control">
                </td>
            </tr>
            <tr>
                <td>Name</td>
                <td>
                    <input type="text" name="name" class="form-control">
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
                <td><input type="email" name="email" class="form-control"></td>
            </tr>

            <tr>
                <td>Skype</td>
                <td><input type="text" name="skype" class="form-control"></td>
            </tr>


            <tr>
                <td>Vkontakte</td>
                <td><input type="text" name="vk" class="form-control"></td>
            </tr>

            <tr>
                <td>Facebook</td>
                <td><input type="text" name="fb" class="form-control"></td>
            </tr>


            <tr>
                <td>Twitter</td>
                <td><input type="text" name="tw" class="form-control"></td>
            </tr>

            <tr>
                <td>Money</td>
                <td><input type="number" name="money" class="form-control"></td>
            </tr>

            <tr>
                <td>Level</td>
                <td>
                    <label for="">You can create new levels <a href="{{route("levels.create")}}">here</a></label>
                    <select class="form-control" name="level">
                        @foreach($levels as $level)
                            <option value="{{$level->id}}">{{$level->title}}</option>
                        @endforeach
                    </select>
                </td>
            </tr>

            <tr>
                <td>Discount, %</td>
                <td><input type="number" name="discount" class="form-control"></td>
            </tr>


            <tr>
                <td>Exp</td>
                <td><input type="number" name="exp" class="form-control"></td>
            </tr>

            <tr>
                <td>Active</td>
                <td><input type="checkbox" class="form-control" name="active"></td>
            </tr>
            <tr>
                <td>Coins</td>
                <td><input type="number" name="coins" class="form-control"></td>
            </tr>
            <tr>
                <td>Roles</td>
                <td>
                    {!! Form::select('roles[]', $roles,null, array('class' => 'form-control','multiple')) !!}
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                    <button class="btn btn-primary">Create</button>
                </td>
            </tr>
            </tbody>
        </table>
    </form>
@endsection