$(document).ready(function(){
var philosophers = ["Siddhārtha Gautama", "Friedrich Nietzsche","Alan Watts", "George Orwell", "Aldus Huxly"]
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
$(document).on("click", ".pButton", createGif)
renderButtons()

})
