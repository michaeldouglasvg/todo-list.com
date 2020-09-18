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

    $("#sort").click(function() {
        var all = $(".task").length;
        var flag;
        var temp = 0;
        prompt("The button program not yet activated, press ok, when you leave a message, cancel to ignore. Thanks for your visit.");
        for(var i = 0; i < all - 1; i++){
            flag = 0;
            for(var j = 0; j < all - 1 -i; j++){
                if(all[j] > all[j+1]){
                    temp = all[j];
                    all[j] = all[j + 1];
                    all[j + 1] = temp;
                    flag = 1;
                }
            }
            if(flag == 0){
                break;
            }
        }
    })
});