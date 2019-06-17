$(document).ready(function () {


    $(document).on('click','.list-group-item',function () {
        $(this).remove();
    });

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function (files) {
        console.log(files);

        var fd = new FormData();

        fd.append("_token",$("[name='_token']").val());

        var ins = files.length;
        for (var x = 0; x < ins; x++) {
            fd.append("files[]",files[x]);
        }
        console.log(uploadForm);
        $.ajax({
            url: uploadForm.action,
            type: "POST",
            data:fd,
            contentType: false,
            cache: false,
            processData: false
        }).done(function (a) {
            console.log(a);
            $("#js-upload-files").val("");
            var tmp = JSON.parse(a);
            $(".list-group").empty();
            $.each(tmp, function (arg1) {
                if (tmp[arg1].type=="success")
                    $(".list-group").append(' <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>' + tmp[arg1].filename + '</a>');
                else
                    $(".list-group").append(' <a href="#" class="list-group-item list-group-item-failed"><span class="badge alert-error pull-right">Error</span>' + tmp[arg1].filename + '</a>');
            });
            document.location.reload(true);
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