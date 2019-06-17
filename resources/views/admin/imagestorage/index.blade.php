@extends('layouts.admin')


@section('content')

    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Image Storage Management</h2>
            </div>
            <div class="pull-right">
                @can('role-create')
                    <a class="btn btn-success" href="{{ route('roles.create') }}"> Create New Role</a>
                @endcan
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <div class="row">
        <div class="col-sm-12">
            <form action="{{route('images.store')}}" method="post" enctype="multipart/form-data" id="js-upload-form">
                @csrf
                <div class="form-inline">
                    <div class="form-group">
                        <input type="file" name="files[]" id="js-upload-files" multiple>
                    </div>
                    <button type="submit" class="btn btn-sm btn-primary" id="js-upload-submit">Upload files</button>
                </div>
            </form>

            <br>
                 <div class="upload-drop-zone" id="drop-zone">
                Just drag and drop files here
            </div>

                      <!-- Upload Finished -->
            <div class="js-upload-finished">
                <div class="list-group">
                                  </div>
            </div>
        </div>
    </div>
<div class="row">
    @foreach ($files as $file)
        <div class="col-sm-6 col-md-4 col-lg-4 image-items">
            <div class="image-container">
                <img src="{{ route('images.show',basename($file)) }}" class="border border-primary rounded-sm"  alt="">

                    <div class="controlls">

                        <a class="btn btn-info" target="_blank" href="{{ route('images.show',basename($file)) }}">Show</a>
                        @can('imagestorage-delete')
                            {!! Form::open(['method' => 'DELETE','route' => ['images.destroy',basename($file)],'style'=>'display:inline']) !!}
                            {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                            {!! Form::close() !!}
                        @endcan
                    </div>





            </div>

        </div>
    @endforeach
</div>






@endsection