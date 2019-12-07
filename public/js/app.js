console.log("App is connected!")

$(document).ready(function() {

    //Clears articles 
$(document).on("click","#clear-btn", function() {
    event.preventDefault();

    $("#article-container").children().empty();
        $("#article-container").prepend("<h2> No Articles To Display</h2>").attr("class", "uk-text-center");
});


$(document).on("click", ".save-btn", function() {
const chosenArticle = $(this).parent(".article");

const link = chosenArticle.find("a").text();
const title = chosenArticle.find("h3").text();

    data = {
        url: link,
        title: title
    };

$.post("api/add", data)
.then(response => {console.log(response)})
.catch(err => {console.log(err)});
});


$(document).on("click", "button.delete", function() {
  const id =  $(this).attr("data-id");
  const card = $(this).parents(".saved-article");
  $.ajax({
      url: "api/delete/" + id,
      type: "DELETE"
  })
  .then((response) => {
      card.remove()
    })
  .catch(err => console.log(err));
});


});

