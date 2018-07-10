var lastCat;
var count;
var allArray = ["Donkey Kong", "Halo", "Mario", "Pokemon", "Zelda"]

// thought that the whole array thing was overrated for making extra buttons, so I made it into a single function and then call it in a loop for our initial buttons.
function createBtn(e) {
    console.log(e)
    // we create the button and pass in its value and append it all at once.
    var btn = $("<button>").attr("data", e).text(e).addClass("gbtn col-lg-1 col-md-2 col-sm-3 m-2")
    $("#groupButtons").append(btn);
    
}

$(document).on("click", ".gif", function(e){
    var state = $(this).attr("data-state");
    console.log(state)
    if(state === "still")
    {
        $(this).attr("src", $(this).attr("data-anim"));
        $(this).attr("data-state", "anim")
    }
    else if(state === "anim")
    {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
})



$(document).on("click", ".gbtn", function(){
    console.log("Working");
    var cat = $(this).attr("data");
    console.log("gbtn pressed cat = "+cat)
    if(lastCat !== cat){
        $("#gif-holder").empty();
        count =  0;
    }
    else{
        count += 10;
    }
    console.log(cat)
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=SqDrH8MvVP6WWe4bL1hHDhBI958qbUvh&q="+cat+"&limit=12&rating=g&offset="+count;
    console.log(queryURL);
    // api key SqDrH8MvVP6WWe4bL1hHDhBI958qbUvh
    //this is where all the api madness happens
    $.ajax(
        {
        url:queryURL,
        method:"GET"
        }).then(function (response){
        response.data.forEach(function(e)
        {

            var image = $("<img>").attr("src", e.images.original_still.url).attr("data-still",e.images.original_still.url).attr("data-anim", e.images.original.url).attr("data-state","still").addClass("gif col-lg-3 col-md-6 my-2 p-2 border rounded col-sm-12").attr("style", "align-self: center;")
            //var newDiv = $("<div>").addClass("col-lg-3 col-md-6 col-sm-12").append(image)
            $("#gif-holder").prepend(image);
        }) 
    })
})

allArray.forEach(function(e){
    createBtn(e);
})


// this is for creating new buttons
$("#input").on("submit", function(e){
    e.preventDefault();
    var str= $("#group-input").val().trim()
    if(allArray.indexOf(str) === -1){
        createBtn(str);
        allArray.push(str);
    }
    $("#group-input").val("")
})
