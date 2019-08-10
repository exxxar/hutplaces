<form action="{{route('slider.image.upload')}}" method="post" enctype="multipart/form-data">
    {{csrf_field()}}
    <h2>Загрузка изображений для слайдера</h2>
    <div class="row">

        <div class="col-12">
            <div class="form-group ">
                <label for="images">Изображения</label>
                <input type="file" class="form-control" id="images" name="images[]" multiple accept="image/*">
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Отправить</button>
        </div>
    </div>
</form>


@isset($images)
    @if(count($images)>0)
        <div class="row mt-3">
            @foreach ($images as $image)
                <div class="col-3">
                    <form action="{{ route('slider.image.delete') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="image" value="{{ basename($image) }}">
                        <button type="submit" class="btn btn-danger" style="position: absolute;">X</button>
                    </form>
                    <a target="_blank" href="{{ route('slider.image.get', ['filename' => basename($image)]) }}">
                        <img style="width: 100%"
                             src="{{ route('slider.image.get', ['filename' => basename($image)]) }}" alt="">
                    </a>
                </div>
            @endforeach
        </div>
    @endif
@endisset