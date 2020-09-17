$(document).ready(function() {
    $(".txtb").on("keyup", function(e){
        if(e.keyCode == 13 && $("txtb").val() !== "false"){
            var task = $("<div class='task'></div>").text($(".txtb").val());
            var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function() {
                    p.remove();
                });
            });

            var check = $("<i class='fas fa-check'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $(".comp").append(p);
                    p.fadeIn();
                })
                $(this).remove();
            })

            task.append(del, check);
            $(".notcomp").append(task);
            $(".txtb").val(" ");
        }
    });

    $("#task-search").on("keyup", function() {

        var value = $(this).val().toLowerCase();

        $(".task").filter(function() {

          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
});