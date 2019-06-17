$(document).ready(function(){
   $(".select-avatar").click(function(){
       var name = $(this).attr("data-select");
       $("#avatarUser").val(name);
   })
});