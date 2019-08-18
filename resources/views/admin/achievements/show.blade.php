@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 mt-2 ">
            <div class="pull-left">
                <h2>Show Achievement</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('achievements.index') }}"> Back</a>
                <a class="btn btn-info" href="{{ route('achievements.edit',$achievement->id) }}"> Edit</a>
            </div>

            <table class="table mt-2">
                <thead class="thead-light">
                <th>Param</th>
                <th>Value</th>
                </thead>
                <tbody>
                <tr>
                    <td>Active:</td>
                    <td><input type="checkbox" class="form-control" {{ $achievement->is_active?"checked='true'":"" }}></td>
                </tr>
                <tr>
                    <td>Title:</td>
                    <td> {{ $achievement->title }}</td>
                </tr>
                <tr>
                    <td>Type:</td>
                    <td> {{ $achievement->type->key }}</td>
                </tr>
                <tr>
                    <td>Trigger type:</td>
                    <td> {{$achievement->trigger_type->key }}</td>
                </tr>
                <tr>
                    <td>Trigger value:</td>
                    <td> {{ $achievement->trigger_value }}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td> {{ $achievement->description }}</td>
                </tr>
                <tr>
                    <td>Random reward:</td>
                    <td><input type="checkbox" class="form-control" {{ $achievement->random_rewards?"checked='true'":"" }}></td>
                </tr>
                @if($achievement->discount!=0&&$achievement->discount!=null)
                    <tr>
                        <td>Discount:</td>
                        <td> {{ $achievement->discount }}</td>
                    </tr>
                @endif

                @if($achievement->exp!=0&&$achievement->exp!=null)
                    <tr>
                        <td>Exp:</td>
                        <td> {{ $achievement->exp }}</td>
                    </tr>
                @endif

                @if($achievement->coins!=0&&$achievement->coins!=null)
                    <tr>
                        <td>Coins:</td>
                        <td> {{ $achievement->coins }}</td>
                    </tr>
                @endif

                @if($achievement->money!=0&&$achievement->money!=null)
                    <tr>
                        <td>Money:</td>
                        <td> {{ $achievement->money }}</td>
                    </tr>
                @endif

                @if($achievement->item_id!=null)
                    <tr>
                        <td>Money:</td>
                        <td> {{ $achievement->item_id }}</td>
                    </tr>
                @endif

                @if(!empty($achievement->card))
                    <tr>
                        <td>Card:</td>
                        <td>   {!! json_decode($achievement->card->Card_data)->value !!}</td>
                    </tr>
                @endif


                <tr>
                    <td>Image:</td>
                    <td>
                        <div class="achievement"
                             style="background-image: url('{{url('img/achievements/bg/'.$achievement->background)}}')">
                            <img src="{{url('img/achievements/element/'.$achievement->image)}}" alt="">

                        </div>

                    </td>
                </tr>


                </tbody>
            </table>
        </div>
    </div>


@endsection