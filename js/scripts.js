var callFadeQueue = function () {
  var myQueue = { queue: 'manageFading', duration: 'slow' };
        $({})
            .queue(function (next) {
                $('.hideRow').fadeOut('slow', next);
            })
            .queue(function (next) {
                $('#cssShow').fadeIn(2000, next);
            });
}

function sum(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

function validateInput(answer1, answer2, answer3, answer4, answer5) {
  if (answer1 === answer1 && answer2 === answer2 && answer3 === answer3 && answer4 === answer4 && answer5 === answer5) {
    return true;
  }
  else {
    return false;
  }
} <!--TODO:Use IsNaN instead of 'a === a' format-->

function calcUserInput (answer1, answer2, answer3, answer4, answer5) {
  var total = sum(answer1, answer2, answer3, answer4, answer5);
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
    // callFadeQueue();
    if (validateInput(answer1, answer2, answer3, answer4, answer5)===true) {
      console.log('SUCCESS!');
    } else {
      console.log('FAILURE!');
    }

    // console.log(answer1, answer2, answer3, answer4, answer5);
  });
});
