$(document).ready(function(){
var philosophers = ["Siddhārtha Gautama", "Friedrich Nietzsche","Alan Watts", "George Orwell", "Aldus Huxly"]
function renderButtons() {
    $(".buttons").empty()
  for (i=0;i < philosophers.length;i++){
    $("<button id='mybutton'>" + philosophers[i]+ "</button>").appendTo(".buttons")
  }
  }
$("#add-philo").on("click", function(event){
    event.preventDefault();
    var newPhilo= $("#gif-input").val();
    philosophers.push(newPhilo);
    renderButtons()
})
renderButtons()
})