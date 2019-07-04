console.log("App is connected!")

$(document).ready(function() {

$(document).on("click","#clear-btn", function() {
    event.preventDefault();

    $("#article-container").children().empty();
        $("#article-container").prepend("<h2> No Articles To Display</h2>").attr("class", "uk-text-center");
});


});