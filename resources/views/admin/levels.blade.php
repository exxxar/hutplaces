@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-sm-12">

            <h4>Таблица опыта</h4>
            <a class="btn btn-info" data-toggle="modal" data-target="#add-new-level"><i class="fas fa-plus-circle"></i></a>

            <table class="table">
                <thead>
                <th>Уровень</th>
                <th>Название</th>
                <th>Бонусные баллы</th>
                <th>Скидка</th>
                <th>Действия</th>
                </thead>
                <tbody id="levels-list">

                </tbody>

            </table>

        </div>
    </div>


    <!-- Добавление уровней -->

    <!-- Modal -->
    <div class="modal fade" id="add-new-level" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Добавление\Редактирование уровня</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Добавление уровня</h4>
                    <form action="">
                        <input type="hidden" name="id" valeu="">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label
                                            for="level">Введите уровень</label>
                                    <input id="add-new-level_level" class="form-control"
                                                               type="number" min="0" value="0" name="level"></div>

                                <div class="form-group"><label for="title">Введите
                                        название уровня</label><input id="add-new-level_title" class="form-control" type="text"
                                                               value="Новый уровень" name="title"></div>

                                <div class="form-group"><label
                                            for="experience">Введите бонусные баллы</label><input id="add-new-level_experience" class="form-control"
                                                               type="number" min="0" value="0" name="experience"></div>

                                <div class="form-group"><label
                                            for="discount">Введите скидку,%</label><input id="add-new-level_discount" class="form-control"
                                                               type="number" min="0" value="0" name="discount"></div>

                            </div>
                        </div>


                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary">Сохранить</button>
                </div>
            </div>
        </div>
    </div>


@endsection



