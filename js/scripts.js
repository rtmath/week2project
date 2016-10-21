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
  $('#descriptionButton').click(function() {
    $('#questionnaire').fadeIn(600)
  });

  $('#questionnaire').submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($('select[name=question1]').val());
    var answer2 = parseInt($('select[name=question2]').val());
    var answer3 = parseInt($('select[name=question3]').val());
    var answer4 = parseInt($('select[name=question4]').val());
    var answer5 = parseInt($('select[name=question5]').val());
    // callQueue();
    console.log(answer1, answer2, answer3, answer4, answer5);
  });
});
