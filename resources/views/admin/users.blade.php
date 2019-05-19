@extends('layouts.admin')



@section('content')
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
            <th scope="col">level</th>
            <th scope="col">discount</th>
            <th scope="col">exp</th>
            <th scope="col">active</th>
            <th scope="col">avatar</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Aleks</td>
            <td>test@gmail.com</td>
            <td>test skype</td>
            <td>test vk</td>
            <td>test fb</td>
            <td>test tw</td>
            <td>1</td>
            <td>0%</td>
            <td>100</td>
            <td>1</td>
            <td><a href="" data-toggle="modal" data-target="#editUserAvatar">Avatar</a></td>
            <td>

                <div class="row">
                    <div class="col-sm-4">
                        <button class="btn btn-warning">Удалить</button>
                    </div>
                    <div class="col-sm-4">
                        <button class="btn btn-info" data-toggle="modal" data-target="#editUser">Редактировать
                        </button>
                    </div>
                </div>


            </td>
        </tr>

        </tbody>
    </table>



    <!-- Edit User Modal -->
    <div class="modal fade" id="editUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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

                    <form>
                        <input type="hidden" name="id" value="">
                        <div class="form-group">
                            <label for="nameUser">Имя пользователя</label>
                            <input type="text" class="form-control" id="nameUser" placeholder="name@example.com">
                        </div>

                        <div class="form-group">
                            <label for="emailUser">Почта пользователя</label>
                            <input type="email" class="form-control" id="emailUser" placeholder="name@example.com">
                        </div>

                        <div class="form-group">
                            <label for="passUser">Пароль</label>
                            <input type="password" class="form-control" id="passUser" placeholder="test pass">
                        </div>

                        <hr>

                        <div class="form-group">
                            <label for="skypeUser">Skyp</label>
                            <input type="text" class="form-control" id="skypeUser" placeholder="test skype">
                        </div>

                        <div class="form-group">
                            <label for="vkUser">Vkontakte</label>
                            <input type="text" class="form-control" id="vkUser" placeholder="test vk">
                        </div>


                        <div class="form-group">
                            <label for="fbUser">Facebook</label>
                            <input type="text" class="form-control" id="fbUser" placeholder="test fb">
                        </div>


                        <div class="form-group">
                            <label for="twUser">Twitter</label>
                            <input type="text" class="form-control" id="twUser" placeholder="test tw">
                        </div>

                        <div class="form-group">
                            <label for="levelUser">Level</label>
                            <input type="number" min="1" class="form-control" id="levelUser" placeholder="1">
                        </div>


                        <div class="form-group">
                            <label for="discountUser">Discount</label>
                            <input type="number" min="0" class="form-control" id="discountUser" placeholder="0">
                        </div>


                        <div class="form-group">
                            <label for="expUser">Expirience</label>
                            <input type="number" min="0" class="form-control" id="expUser" placeholder="0">
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <label class="form-check-label" for="activeeUser">
                                    <input class="form-check-input" type="checkbox" id="activeeUser">
                                    Active
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <a href="">Загрузить аватара</a>
                            <br>
                            <input type="text" class="form-control" disabled id="nameUser" placeholder="name@example.com">
                        </div>

                    </form>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary">Отправить</button>
                </div>
            </div>
        </div>
    </div>
@endsection