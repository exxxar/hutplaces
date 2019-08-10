<form action="{{route('broadcast.message')}}" method="post">
    {{csrf_field()}}
    <h2>Массовое оповещение пользователей</h2>
    <div class="row">

        <div class="col-sm-12 col-md-6">
            <div class="form-group ">
                <label for="title">Заголовок сообщения</label>
                <input type="text" class="form-control" name="title" id="title" value="">
            </div>
        </div>


        <div class="col-sm-12 col-md-6">
            <div class="form-group ">
                <label for="message">Сообщение</label>
                <input type="text" class="form-control" name="message" id="message" value="">
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-sm-12 col-md-4">

            <button class="btn btn-primary">Отправить</button>

        </div>
    </div>

    <hr>
</form>