$("ul").on("click","li", function(){
   $(this).toggleClass("completed");
  });
//click on x to delete
$("ul").on("click","span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
     $(this).remove();   
}); 
});

 $("input[type = 'text']").keypress(function(e){
if(e.which === 13){
    //grabbing the text
  var todo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todo + "</li>");
    
}
     
});

$(".fa-plus").click(function (){
    $("input[type = 'text']").fadeToggle();
    
});