$(document).ready(function(){ 
    $("#question-title-1").click(function(){
        $("#content-body-1").toggle()
    })
    $("#question-title-2").click(function(){
        $("#content-body-2").toggle()
        $("div#extraControls").removeClass("hidden");
    })
    $("#question-title-3").click(function(){
        $("#content-body-3").toggle()
        $("div#extraControls").removeClass("hidden");
    })
    $("#question-title-4").click(function(){
        $("#content-body-4").toggle()
        $("div#extraControls").removeClass("hidden");
    })
    $("#question-title-5").click(function(){
        $("#content-body-5").toggle()
        $("div#extraControls").removeClass("hidden");
    })
})

// I wanted to add in the jquery to add a class for the arrow to turn around, as I mentioned in styles. 


/*

    $.ajax({
        url:"data.json",
        data: "rows",
        beforeSend: function(){
            console.log("Sending row")
        }
    })
*/