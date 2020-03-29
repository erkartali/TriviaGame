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
    if (trivia.drink1[0].checked === false && trivia.drink1[1].checked === false && trivia.drink1[2].checked === false && trivia.drink1[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink2[0].checked === false && trivia.drink2[1].checked === false && trivia.drink2[2].checked === false && trivia.drink2[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink3[0].checked === false && trivia.drink3[1].checked === false && trivia.drink3[2].checked === false && trivia.drink3[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink4[0].checked === false && trivia.drink4[1].checked === false && trivia.drink4[2].checked === false && trivia.drink4[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink5[0].checked === false && trivia.drink5[1].checked === false && trivia.drink5[2].checked === false && trivia.drink5[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink6[0].checked === false && trivia.drink6[1].checked === false && trivia.drink6[2].checked === false && trivia.drink6[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink7[0].checked === false && trivia.drink7[1].checked === false && trivia.drink7[2].checked === false && trivia.drink7[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink8[0].checked === false && trivia.drink8[1].checked === false && trivia.drink8[2].checked === false && trivia.drink8[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink9[0].checked === false && trivia.drink9[1].checked === false && trivia.drink9[2].checked === false && trivia.drink9[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink10[0].checked === false && trivia.drink10[1].checked === false && trivia.drink10[2].checked === false && trivia.drink10[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink11[1].checked === false && trivia.drink11[1].checked === false && trivia.drink11[2].checked === false && trivia.drink11[3].checked === false) {
        unanswered++;
    }
    if (trivia.drink12[0].checked === false && trivia.drink12[1].checked === false && trivia.drink12[2].checked === false && trivia.drink12[3].checked === false) {
        unanswered++;
    }
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

