
$(document).ready(function(){
    $(".check").each(function(){
        if($(this).prop("checked")){
            $(this).next(".strike").addClass("line");
        }
    });
});

$(document).ready(function(){
    $(".check").click(function(){
        $(this).next(".strike").toggleClass("line", $(this).is(":checked"));
    }); 
});

function ChangeNum(num) {
    $(".portion").text($(num).val());
    $(".hej").text($(num).val());
}