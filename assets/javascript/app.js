var allArray = ["Donkey Kong", "Halo", "Mario", "Pokemon", "Zelda"]

// thought that the whole array thing was overrated for making extra buttons, so I made it into a single function and then call it in a loop for our initial buttons.
function createBtn(e) {
    console.log(e)
    // we create the button and pass in its value and append it all at once.
    var btn = $("<button>").attr("data", e).text(e).addClass("gbtn col-lg-1 col-m-2 col-sm-3 m-2")
    $("#groupButtons").append(btn);
    
}
$(document).on("click", ".gbtn", function(){
    var cat = $(this).attr("data");
    console.log(cat)
    //this is where all the api madness happens
})

allArray.forEach(function(e){
    createBtn(e);
})

// this is where all the logic for the button to rule them all goes.
$("#add-group").click(function(){
    event.preventDefault();
    createBtn($("#group-input").val().trim())
})
