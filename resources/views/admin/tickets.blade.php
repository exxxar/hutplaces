@extends('layouts.admin')

@section('content')
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
            <th scope="col">Directory</th>
            <th scope="col">Created At</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>test@gmail.com</td>
            <td>some problems</td>
            <td><a href="" title="link to google drive directory" target="_blank">test1</a></td>
            <td>04/05/2019 12:23:21</td>
            <td>

                <div class="row">
                    <div class="col-sm-4">
                        <button class="btn btn-warning">Удалить</button>
                    </div>
                    <div class="col-sm-4">
                        <button class="btn btn-primary">Закрыть</button>
                    </div>
                    <div class="col-sm-4">
                        <button class="btn btn-info" data-toggle="modal" data-target="#replyTicketModal">Ответить
                        </button>
                    </div>
                </div>


            </td>
        </tr>

        </tbody>
    </table>


    <!-- Replyon Ticket Modal -->
    <div class="modal fade" id="replyTicketModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ответ на тикет пользователю</h5>


                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form>
                        <div class="form-group">
                            <label for="emailForUser">Почта пользователя</label>
                            <input type="email" class="form-control" id="emailForUser" placeholder="name@example.com">
                        </div>

                        <div class="form-group">
                            <label for="title">Заголовок сообщения</label>
                            <input type="email" class="form-control" id="title" placeholder="name@example.com">
                        </div>

                        <div class="form-group">
                            <label for="message">Текст ответа</label>
                            <textarea class="form-control" id="message" rows="3"></textarea>
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
