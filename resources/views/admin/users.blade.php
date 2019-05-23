@extends('layouts.admin')



@section('content')

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
            <th scope="col">active</th>
            <th scope="col">avatar</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
            @foreach($users as $key => $user)
            <tr>
                <td>{{$key + 1}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$user->skype}}</td>
                <td>{{$user->vk}}</td>
                <td>{{$user->fb}}</td>
                <td>{{$user->tw}}</td>
                <td>{{$user->money}}</td>
                <td>{{$user->level}}</td>
                <td>{{$user->discount}}</td>
                <td>{{$user->exp}}</td>
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
                            <button class="btn btn-info" data-toggle="modal" data-target="#editUser{{$key}}">Редактировать
                            </button>
                        </div>
                    </div>


                </td>
            </tr>
            @endforeach

        </tbody>
    </table>

    {{ $users->links() }}

    <!-- Edit User Modal -->
    @foreach($users as $key => $user)
    <div class="modal fade" id="editUser{{$key}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Редактирование данных</h5>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form method="post" action="{{ route('users.update', $user->id) }}">
                        @method('PATCH')
                        @csrf
                        <input type="hidden" name="id" value={{ $user->id }}>
                        <div class="form-group">
                            <label for="nameUser">Имя пользователя</label>
                            <input type="text" class="form-control" id="nameUser" placeholder="name" name="name" value={{$user->name}}>
                        </div>

                        <div class="form-group">
                            <label for="emailUser">Почта пользователя</label>
                            <input type="email" class="form-control" id="emailUser" placeholder="name@example.com" name="email" value={{$user->email}}>
                        </div>

                        <hr>

                        <div class="form-group">
                            <label for="skypeUser">Skype</label>
                            <input type="text" class="form-control" id="skypeUser" placeholder="skype" name="skype" value={{$user->skype}}>
                        </div>

                        <div class="form-group">
                            <label for="vkUser">Vkontakte</label>
                            <input type="text" class="form-control" id="vkUser" placeholder="vk" name="vk" value={{$user->vk}}>
                        </div>


                        <div class="form-group">
                            <label for="fbUser">Facebook</label>
                            <input type="text" class="form-control" id="fbUser" placeholder="fb" name="fb" value={{$user->fb}}>
                        </div>


                        <div class="form-group">
                            <label for="twUser">Twitter</label>
                            <input type="text" class="form-control" id="twUser" placeholder="tw" name="tw" value={{$user->tw}}>
                        </div>

                        <div class="form-group">
                            <label for="twUser">Money</label>
                            <input type="text" class="form-control" id="twUser" placeholder="money" name="money" value={{$user->money}}>
                        </div>

                        <div class="form-group">
                            <label for="levelUser">Level</label>
                            <input type="number" min="1" class="form-control" id="levelUser" placeholder="1" name="level" value={{$user->level}}>
                        </div>


                        <div class="form-group">
                            <label for="discountUser">Discount</label>
                            <input type="number" min="0" class="form-control" id="discountUser" placeholder="discount" name="discount" value={{$user->discount}}>
                        </div>


                        <div class="form-group">
                            <label for="expUser">Expirience</label>
                            <input type="number" min="0" class="form-control" id="expUser" placeholder="exp" name="exp" value={{$user->exp}}>
                        </div>

                        <div class="form-group">
                            <select class="form-control" name="active">
                                @if($user->active == 1)
                                    <option value=1>Активен</option>
                                    <option value=0>Не активен</option>
                                @else
                                    <option value=0>Не активен</option>
                                    <option value=1>Активен</option>
                                @endif
                            </select>
                        </div>

                        <div class="form-group">
                            <a href="">Загрузить аватара</a>
                            <br>
                            <input type="text" class="form-control" name="avatar" id="nameUser" placeholder="name@example.com" value={{$user->avatar}}>
                        </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="submit" class="btn btn-primary">Отправить</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    @endforeach
@endsection