$(document).ready(function(){
var philosophers = ["Siddhārtha Gautama", "Friedrich Nietzsche","Alan Watts", "George Orwell", "Aldus Huxley"]
function renderButtons() {
    $(".buttons").empty();
  for (i=0;i < philosophers.length;i++){
      var p = $("<button class='btn btn-primary'>");
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


$(document).on("click", ".pButton", generategif)

renderButtons()
function generategif(){
$(".gif").empty();
var name = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
name + "&api_key=dc6zaTOxFJmzC&limit=12"

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
    var results = response.data;
    console.log(results)

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div class='item'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var personImage = $("<img class='image'>");
     
      personImage.attr("src", results[i].images.fixed_width_still.url);
      personImage.attr("data-animate",results[i].images.fixed_width.url);
      personImage.attr("data-still", results[i].images.fixed_width_still.url);
      personImage.attr("data-state", "still")
      gifDiv.prepend(p);
      gifDiv.prepend(personImage);

      $(".gif").prepend(gifDiv);
      
    
}
$(document).on("click", ".image", function(){
    var state = $(this).data('state')
 
    if (state == "still"){
        $(this).attr("src",$(this).data("animate"));
        $(this).data("state", "animate")
      }
      else if (state == "animate"){
        $(this).attr("src",$(this).data("still"));
        $(this).data("state", "still")
      }
 
 })

})}
})
