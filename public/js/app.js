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

const link = chosenArticle.find('A').text();
const title = chosenArticle.find('H3').text();
const summ = chosenArticle.find('P').text();
const data = {
        url: link,
        title: title,
        summary: summ
    };

$.post("api/add", data)
.then(response => {
    chosenArticle.remove()
    UIkit.notification({
        message: 'Article Has Been Saved',
        status: 'success',
        pos: 'bottom-left',
        timeout: 3000
    });
})
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
        card.next('HR').remove()
        card.remove()
        UIkit.notification({
            message: 'Article Has Been Deleted',
            status: 'warning',
            pos: 'bottom-left',
            timeout: 3000
        });
    })
  .catch(err => console.log(err));
});
//Currently bugs out
$(document).on("click", "#modal-btn", function() {
    const article = $(this).parents('DIV.saved-article');
    const title = article.find('H3').text();
    const p = article.attr('data-text')
    const id = article.find('BUTTON.delete').attr('data-id')
    $('BUTTON.add-note').attr('data-id', id);
    $('#modal-title').append(title);
    $('#modal-p').append(p);
});

$(document).on("click", "BUTTON#close-btn", function() {
    $('#modal-title').empty();
    $('#modal-p').empty();
    $('#note').val('');
    $('BUTTON.add-note').attr('data-id', '');
})

$(document).on("click", "BUTTON.add-note", function() {
const modal = $(this).parents('DIV#modal');
const newNote = modal.find('textarea#note').val();
const selectedId = modal.find('BUTTON.add-note').attr('data-id')

const updateData = {
    note: newNote
};

$.post("api/update/" + selectedId, updateData )
.then(response => {
    console.log(response)
    location.reload(true)
})
.catch(err => console.log(err));

});


});