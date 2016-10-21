var callQueue = function () {
  var myQueue = { queue: 'manageFading', duration: 'slow' };
        $({})
            .queue(function (next) {
                $('.hideRow').fadeOut('slow', next);
            })
            .queue(function (next) {
                $('#jsShow').fadeIn(2000, next);
            });
}

$(document).ready(function() {
  $("#descriptionButton").click(function() {
    $("#questionnaire").fadeIn(600)
  });

  $("#questionnaire").submit(function(event) {
    event.preventDefault();
    callQueue();
    console.log("Something happened")
  });
});
