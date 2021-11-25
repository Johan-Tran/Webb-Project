
$(document).ready(function(){
    $(".check").click(function(){
        $(this).next(".strike").toggleClass("test1", $(this).is(":checked"));
    }); 
});

