console.log("App is connected!")

$(document).ready(function() {

    //Clears articles 
$(document).on("click","#clear-btn", function() {
    event.preventDefault();

    $("#article-container").children().empty();
        $("#article-container").prepend("<h2> No Articles To Display</h2>").attr("class", "uk-text-center");
});


$(document).on("click", ".save-btn", function() {
    console.log("Ready to save article");
const chosenArticle = $(this).parent(".article");

const link = chosenArticle.find("a").text();
const title = chosenArticle.find("h3").text();

    data = {
        url: link,
        title: title
    };

$.post("/add", data)
.then(response => {console.log(response)})
.catch(err => {console.log(err)});

console.log(data);

})

});

