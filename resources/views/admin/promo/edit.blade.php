@extends('layouts.admin')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Promocode</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('promo.index') }}"> Back</a>
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


    {!! Form::model($promocode, ['method' => 'PATCH','route' => ['promo.update', $promocode->id]]) !!}
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>lifetime:</strong>
                <select class="form-control" name="lifetime">
                    @switch($promocode->lifetime)
                        @case(0)
                            <option value=0>12</option>
                            <option value=1>24</option>
                            <option value=2>36</option>
                            <option value=3>48</option>
                            <option value=4>96</option>
                            <option value=5>128</option>
                            @break
                    
                        @case(1)
                            <option value=1>24</option>
                            <option value=0>12</option>
                            <option value=2>36</option>
                            <option value=3>48</option>
                            <option value=4>96</option>
                            <option value=5>128</option>
                            @break

                        @case(2)
                            <option value=2>36</option>
                            <option value=0>12</option>
                            <option value=1>24</option>
                            <option value=3>48</option>
                            <option value=4>96</option>
                            <option value=5>128</option>
                            @break
                        
                        @case(3)
                            <option value=3>48</option>
                            <option value=0>12</option>
                            <option value=1>24</option>
                            <option value=2>36</option>
                            <option value=4>96</option>
                            <option value=5>128</option>
                            @break
                        
                        @case(4)
                            <option value=4>96</option>
                            <option value=0>12</option>
                            <option value=1>24</option>
                            <option value=2>36</option>
                            <option value=3>48</option>
                            <option value=5>128</option>
                            @break

                        @case(5)
                            <option value=5>128</option>
                            <option value=0>12</option>
                            <option value=1>24</option>
                            <option value=2>36</option>
                            <option value=3>48</option>
                            <option value=4>96</option>
                            @break
                    @endswitch 
                </select>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>isActive:</strong>
                <select class="form-control" name="isActive">
                    @if($promocode->isActive == 1)
                        <option value=1>yes</option>
                        <option value=0>no</option>
                    @else
                        <option value=0>no</option>
                        <option value=1>yes</option>
                    @endif
                </select>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>title:</strong>
                {!! Form::text('title', null, array('placeholder' => 'title','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>description:</strong>
                {!! Form::text('description', null, array('placeholder' => 'description','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>activation_count:</strong>
                {!! Form::text('activation_count', null, array('placeholder' => 'activation_count','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>count:</strong>
                {!! Form::text('count', null, array('placeholder' => 'count','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>money:</strong>
                {!! Form::text('money', null, array('placeholder' => 'money','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>exp:</strong>
                {!! Form::text('exp', null, array('placeholder' => 'exp','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>discount:</strong>
                {!! Form::text('discount', null, array('placeholder' => 'discount','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>items_id:</strong>
                {!! Form::text('items_id', null, array('placeholder' => 'items_id','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>cards_id:</strong>
                {!! Form::text('cards_id', null, array('placeholder' => 'cards_id','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>images_storage_id:</strong>
                {!! Form::text('images_storage_id', null, array('placeholder' => 'images_storage_id','class' => 'form-control')) !!}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
    {!! Form::close() !!}


@endsection