$(document).ready(function(){
    $("#groceries").submit(function(event){
        event.preventDefault();
        var input = $("#grocitem").val();
        var splitInput = input.split(" ");
        splitInput.sort();
        splitInput.forEach(function(item){
            $("#output").append("<li>"+item.toUpperCase()+"</li>");
            $("#groceries").hide();
        })
    })
})