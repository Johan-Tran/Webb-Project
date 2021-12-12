
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

var defValue = $(".hej").val();

function ChangeNum(num) {
    $(".hej").val($(num).val() * defValue);
    $(".portion").val($(num).val());
}