var callFadeQueue = function (result) {
  var myQueue = { queue: 'manageFading', duration: 'slow' };
        $({})
            .queue(function (next) {
                $('.hideRow').fadeOut('slow', next);
            })
            .queue(function (next) {
                $(result).fadeIn(2000, next);
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

function evalUserInput (total) {
  if (total <= 7) {
    return "#cssShow";
  }
  if (total <= 18 && total > 7) {
    return "#rubyShow";
  }
  if (total <= 23 && total > 18) {
    return "#cSharpShow";
  }
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
    var total = sum(answer1, answer2, answer3, answer4, answer5)
    // callFadeQueue();
    if (validateInput(answer1, answer2, answer3, answer4, answer5)===true) {
      console.log('SUCCESS!');
      console.log(evalUserInput(total));
      callFadeQueue(evalUserInput(total));
    } else {
      console.log('FAILURE!');
    }

    // console.log(answer1, answer2, answer3, answer4, answer5);
  });
});
