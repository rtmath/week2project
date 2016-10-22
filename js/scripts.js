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
    return "#hide_css";
  }
  if (total <= 16 && total > 7) {
    return "#hide_ruby";
  }
  if (total <= 23 && total > 16) {
    return "#hide_cSharp";
  }
}

$(document).ready(function() {

  var DISPLAYED = "";

  $('#descriptionButton').click(function() {
    $('#descriptionText').fadeOut();
    $('#descriptionButton').fadeOut(function() {
      $('#qRow').fadeIn();
      $('#questionnaire').fadeIn();
    });
  });

  $('#questionnaire').submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($('select[name=question1]').val());
    var answer2 = parseInt($('select[name=question2]').val());
    var answer3 = parseInt($('select[name=question3]').val());
    var answer4 = parseInt($('select[name=question4]').val());
    var answer5 = parseInt($('select[name=question5]').val());
    var total = sum(answer1, answer2, answer3, answer4, answer5)
    console.log(total);
    if (validateInput(answer1, answer2, answer3, answer4, answer5)===true) {
      DISPLAYED = evalUserInput(total);
      $('.hideRow').fadeOut('slow', function() {
          $(DISPLAYED).fadeIn();
          $("#hide_returnButton").fadeIn();
      })
    } else {
      alert('FAILURE!');
    }

    // console.log(answer1, answer2, answer3, answer4, answer5);
  });

  $('#returnHome').submit(function(event) {
    event.preventDefault();
    $(DISPLAYED).fadeOut('slow');
    $("#hide_returnButton").fadeOut('slow', function() {
        $('.hideRow').fadeIn();
      })
    });
});
