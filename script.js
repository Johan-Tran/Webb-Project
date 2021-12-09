
$(document).ready(function(){
    $(".check").click(function(){
        $(this).next(".strike").toggleClass("line", $(this).is(":checked"));
    }); 
});

var defValue = $(".hej").val();

function ChangeNum(num) {
    $(".hej").val($(num).val() * defValue);
}
