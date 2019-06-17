$(document).ready(function () {


    $(document).on('click','.list-group-item',function () {
        $(this).remove();
    });

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function (files) {
        console.log(files);

        console.log(uploadForm);
        $.ajax({
            url: uploadForm.action,
            type: "POST",
            data: new FormData(uploadForm),
            contentType: false,
            cache: false,
            processData: false
        }).done(function (a) {
            console.log(a);
            $("#js-upload-files").val("");
            var tmp = JSON.parse(a);
            $(".list-group").empty();
            $.each(tmp, function (arg1) {
                $(".list-group").append(' <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>' + tmp[arg1] + '</a>');
            });

        });

    }

    uploadForm.addEventListener('submit', function (e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

    dropZone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function () {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function () {
        this.className = 'upload-drop-zone';
        return false;
    }


});