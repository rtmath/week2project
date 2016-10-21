$(document).ready(function() {
  $("#descriptionButton").click(function() {
    $("#questionnaire").fadeIn(600)
  });

  $("#questionnaire").submit(function(event) {
    event.preventDefault();
    console.log("Something happened")
  });
});
