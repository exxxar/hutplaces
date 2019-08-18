@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Achievement</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('achievements.index') }}"> Back</a>
            </div>
        </div>
    </div>


    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    {!! Form::model($achievement, ['method' => 'PATCH','route' => ['achievements.update', $achievement->id],'enctype'=>'multipart/form-data']) !!}
    <table class="table mt-2">
        <thead class="thead-light">
        <th>Param</th>
        <th>Value</th>
        </thead>
        <tbody>
        <tr>
            <td>Active:</td>
            <td><input type="checkbox" name="is_active"
                       class="form-control" {{ $achievement->is_active?"checked='true'":"" }}></td>
        </tr>
        <tr>
            <td>Title:</td>
            <td><input type="text" class="form-control" name="title" value="{{ $achievement->title }}"></td>
        </tr>
        <tr>
            <td>Type:</td>
            <td>
                <select name="type" class="form-control">
                    @foreach ( \App\Enums\AchievementType::getInstances() as $achievementType)
                        @if ($achievement->type->value==$achievementType->value)
                            <option value="{{$achievementType->value}}" selected>{{$achievementType->key}}</option>
                        @else
                            <option value="{{$achievementType->value}}">{{$achievementType->key}}</option>
                        @endif
                    @endforeach
                </select>
            </td>
        </tr>
        <tr>
            <td>Trigger type:</td>
            <td>
                <select name="trigger_type" class="form-control">
                    @foreach ( \App\Enums\TriggerType::getInstances() as $triggerType)
                        @if ($achievement->trigger_type->value==$triggerType->value)
                            <option value="{{$triggerType->value}}" selected>{{$triggerType->key}}</option>
                        @else
                            <option value="{{$triggerType->value}}">{{$triggerType->key}}</option>
                        @endif
                    @endforeach
                </select>
            </td>
        </tr>
        <tr>
            <td>Trigger value:</td>
            <td><input type="text" class="form-control" name="trigger_value" value="{{ $achievement->trigger_value }}">
            </td>
        </tr>
        <tr>
            <td>Description:</td>
            <td><input type="text" name="description" class="form-control" value="{{ $achievement->description }}"></td>
        </tr>
        <tr>
            <td>Random reward:</td>
            <td><input type="checkbox" name="random_rewards"
                       class="form-control" {{ $achievement->random_rewards?"checked='true'":"" }}></td>
        </tr>

        <tr>
            <td>Discount:</td>
            <td><input type="number" class="form-control" name="discount" value="{{ $achievement->discount }}"></td>
        </tr>


        <tr>
            <td>Exp:</td>
            <td><input type="number" class="form-control" name="exp" value="{{ $achievement->exp }}"></td>
        </tr>


        <tr>
            <td>Coins:</td>
            <td><input type="number" class="form-control" name="coins" value="{{ $achievement->coins }}"></td>
        </tr>


        <tr>
            <td>Money:</td>
            <td><input type="number" class="form-control" name="money" value="{{ $achievement->money }}"></td>
        </tr>


        <tr>
            <td>Item:</td>
            <td><input disabled type="number" class="form-control" name="item_id" value="{{ $achievement->item_id }}"></td>
        </tr>


        <tr>
            <td>Card:</td>
            <td>
                <div class="form-group">
                    <a href="{{route("card.index")}}" class="btn btn-info">Add card first</a>
                </div>
                <div class="form-group">
                    <select name="card_id" class="form-control">
                        @isset($cards)
                            @foreach($cards as $card)
                                @if ($card->id==$achievement->card_id)
                                    <option value="{{$card->id}}"
                                            selected> {!! json_decode($card->Card_data)->value !!}</option>
                                @else
                                    <option value="{{$card->id}}"> {!! json_decode($card->Card_data)->value !!}</option>
                                @endif
                            @endforeach
                        @endisset
                    </select>

                </div>

                <div class="form-group">
                    @if(!empty($achievement->card))
                        {!! json_decode($achievement->card->Card_data)->value !!}
                    @endif
                </div>

            </td>
        </tr>


        <tr>
            <td>Image:</td>
            <td>
                <div class="form-group">
                    <img style="width:280px;margin:auto;display:block;"
                         src="{{url('img/achievements/element/'.$achievement->image)}}" alt="">
                </div>
                <div class="form-group">
                    <label for="">Image: {{$achievement->image}}</label>

                    <input type="file" class="form-control" name="image">
                </div>
            </td>
        </tr>

        <tr>
            <td>Background:</td>
            <td>
                <div class="form-group">
                    <img style="width:280px;margin:auto;display:block;"
                         src="{{url('img/achievements/bg/'.$achievement->background)}}" alt="">
                </div>
                <div class="form-group">
                    <label for="">Background: {{$achievement->background}}</label>
                    <input type="file" class="form-control" name="background">
                </div>
            </td>
        </tr>

        <tr>
            <td>
                <button class="btn btn-primary">Save</button>
            </td>
            <td></td>
        </tr>
        </tbody>
    </table>
    {!! Form::close() !!}


@endsection