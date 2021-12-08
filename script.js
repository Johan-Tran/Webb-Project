
$(document).ready(function(){
    $(".check").click(function(){
        $(this).next(".strike").toggleClass("line", $(this).is(":checked"));
    }); 
});

