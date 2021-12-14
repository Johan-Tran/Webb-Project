var recipeValue = [];

$(document).ready(function(){
    $(".check").each(function(){
        if($(this).prop("checked")){
            $(this).next(".strike").addClass("line");
        }
    });

    $(".recipeVal").each(function(){
        recipeValue.push(parseFloat($(this).text(), 10));
    });
});

$(document).ready(function(){
    $(".check").click(function(){
        $(this).next(".strike").toggleClass("line", $(this).is(":checked"));
    }); 
});

function ChangeNum(num) {
    $(".portion").text($(num).val());

    var recipeSum = recipeValue.map(x => x * $(num).val());

    for(var i = 0; i < recipeSum.length; i++){
        $(".recipeVal").eq(i).text(recipeSum[i]);
    }
}