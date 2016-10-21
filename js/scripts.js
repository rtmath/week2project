var toResultQueue = function (result) {
  var myQueue = { queue: 'manageFading', duration: 'slow' };
        $({})
            .queue(function (next) {
                $('.hideRow').fadeOut('slow', next);
            })
            .queue(function (next) {
                $(result).fadeIn(1000, next);
            });
}

var toHomeQueue = function (result) {
  var myQueue = { queue: 'manageFading', duration: 'slow' };
        $({})
            .queue(function (next) {
                $(result).fadeOut(1000, next);
            })
            .queue(function (next) {
                $('.hideRow').fadeIn('slow', next);
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
  $('#hide_returnButton').show();
  if (total <= 7) {
    return "#hide_css";
  }
  if (total <= 18 && total > 7) {
    return "#hide_ruby";
  }
  if (total <= 23 && total > 18) {
    return "#hide_cSharp";
  }
}

$(document).ready(function() {

  var DISPLAYED = "";

  $('#descriptionButton').click(function() {
    //Commenting/Uncommenting this code is to quickly display result to test layout of the result screen - directions are below to restore original functionality
    $('#qRow').fadeIn(600)
    $('#questionnaire').fadeIn(600) //<--uncomment this line of code to restore functionality
    //$('#questionnaire').hide(); //<-- comment these lines of code to restore functionality
    //$('#hide_css').fadeIn(800); //<--
  });

  $('#questionnaire').submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($('select[name=question1]').val());
    var answer2 = parseInt($('select[name=question2]').val());
    var answer3 = parseInt($('select[name=question3]').val());
    var answer4 = parseInt($('select[name=question4]').val());
    var answer5 = parseInt($('select[name=question5]').val());
    var total = sum(answer1, answer2, answer3, answer4, answer5)

    if (validateInput(answer1, answer2, answer3, answer4, answer5)===true) {
      console.log('SUCCESS!');
      DISPLAYED = evalUserInput(total);
      toResultQueue(evalUserInput(total));
      // console.log(displayed);
    } else {
      console.log('FAILURE!');
    }

    // console.log(answer1, answer2, answer3, answer4, answer5);
  });

  $('#returnHome').click(function(event) {
    event.preventDefault();
    toHomeQueue(DISPLAYED);
    });

});
