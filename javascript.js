$(document).ready(function(){
var philosophers = ["Siddhārtha Gautama", "Friedrich Nietzsche","Alan Watts", "George Orwell", "Aldus Huxley"]
function renderButtons() {
    $(".buttons").empty();
  for (i=0;i < philosophers.length;i++){
      var p = $("<button>");
      p.attr("data-name", philosophers[i]);
      p.addClass("pButton");
      p.text(philosophers[i])
      $(".buttons").append(p)
    
  }
  
  }
$("#add-philo").on("click", function(event){
    event.preventDefault();
    var newPhilo= $("#gif-input").val();
    philosophers.push(newPhilo);
    renderButtons()
})
function createGif(){
    console.log($(this).attr("data-name"))
}
$(document).on("click", ".pButton", createGif, generategif)

renderButtons()
function generategif(){
var name = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
name + "&api_key=dc6zaTOxFJmzC&limit=10"

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div class='item'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var personImage = $("<img>");
      personImage.attr("src", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(personImage);

      $(".gif").prepend(gifDiv);
    }
  })}
})
