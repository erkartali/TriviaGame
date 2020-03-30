var inputs = trivia.elements;
// var nodeLists =;
var names = trivia;
var radios = [];
var checked = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 120;
var clicked = false;
var unansweredFlag = false;
var timeId;

// control which css blocks are showing
function showResultsdisplay() {
    $('.result-wrapper').css('display', 'initial')
}

function hideQuestionDisplay() {
    $('.darken-overlay').css('display', 'none');
}

function showQuestionDisplay() { 
    $('.darken-overlay').css('display', 'initial');
}

function hideStartBlock() {
    $('.start-block').css('display', 'none');
}

// prevent redirecting to top of screen on click
$(".label-prevent").click(function(event){
    event.preventDefault();
});
  


// collect all answers and show results
var  collectAnswers = () => {
    
    // get all radio buttons
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'radio') {
            radios.push(inputs[i]);
        }
    }
    
    // loop through all radio buttons and create an array for only checked buttons
    for (let j = 0; j < radios.length; j++) {
        if (radios[j].checked === true) {
            checked.push(radios[j]);
        }
    }
    
    // loop through all checked button and increment correct and incorrect
    for (let k = 0; k < checked.length; k++) {
        if (checked[k].value === 'correct') {
            correct++;
        } else if (checked[k].value === 'incorrect') {
            incorrect++;
        } 
    }

    checkUnanswered()
    
    // output the results of the quiz to the html and prevent further clicking
    if (!clicked) {
        $('#correct-answers').html(correct + ' right');
        $('#incorrect-answers').html(incorrect + ' wrong');
        $('#unanswered').html( unanswered + ' unanswered');
        clicked = true;
    } 
    showResultsdisplay()
    hideQuestionDisplay()
    clearInterval(timeId);
}

// get unanswered questions
function checkUnanswered() {
    unanswered = 12 - (correct + incorrect);
    }


// create timer 
var timer = () => {
    time--;
    $('#timer').html(time);
    if (time === 0) {
        collectAnswers();
    }
}

// start the timer 
var startTheTimer = () => {
    timeId = setInterval(timer, 1000);
    showQuestionDisplay();
    hideStartBlock();
}

$('#countdown').click(startTheTimer);
$('.radio-submit').click(collectAnswers);



/*

*/