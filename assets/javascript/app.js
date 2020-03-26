var inputs = trivia.elements;
// var nodeLists =;
var names = trivia;
var radios = [];
var checked = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 60;
var clicked = false;
var timeId;

// console.log(inputs);

var  collectAnswers = () => {
    
    // get all radio buttons
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'radio') {
            radios.push(inputs[i]);
        }
    }
    console.log(radios)
    
    // loop through all radio buttons and create an array for only checked buttons
    for (let j = 0; j < radios.length; j++) {
        if (radios[j].checked === true) {
            checked.push(radios[j]);
        }
    }
    console.log(checked);
    
    // loop through all checked button and increment correct and incorrect
    for (let k = 0; k < checked.length; k++) {
        if (checked[k].value === 'correct') {
            correct++;
        } else if (checked[k].value === 'incorrect') {
            incorrect++;
        } 
    }

    checkUnanswered()

    // console.log(trivia.movie[0].checked);
    // console.log(trivia.movie[1].checked);
    // console.log(trivia.movie[2].checked);
    // console.log(trivia.movie[3].checked);

    console.log('correct:', correct);
    console.log('incorrect:', incorrect);
    console.log('unanswered:', unanswered);
    
    // output the results of the quiz to the html and prevent further clicking
    if (!clicked) {
        $('#correct-answers').html(correct + ' right');
        $('#incorrect-answers').html(incorrect + ' wrong');
        $('#unanswered').html( unanswered + ' unanswered');
        clicked = true;
    } 
    
    clearInterval(timeId);
}

function checkUnanswered() {
    if (trivia.movie[0].checked === false && trivia.movie[1].checked === false && trivia.movie[2].checked === false && trivia.movie[3].checked === false) {
        unanswered++;
    }
    if (trivia.spice[0].checked === false && trivia.spice[1].checked === false && trivia.spice[2].checked === false && trivia.spice[3].checked === false) {
        unanswered++;
    }
    if (trivia.sport[0].checked === false && trivia.sport[1].checked === false && trivia.sport[2].checked === false && trivia.sport[3].checked === false) {
        unanswered++;
    }
    if (trivia.color[0].checked === false && trivia.color[1].checked === false && trivia.color[2].checked === false && trivia.color[3].checked === false) {
        unanswered++;
    }
    if (trivia.smirf[0].checked === false && trivia.smirf[1].checked === false && trivia.smirf[2].checked === false && trivia.smirf[3].checked === false) {
        unanswered++;
    }
}

var timer = () => {
    time--;
    $('#timer').html(time);
    if (time === 0) {
        collectAnswers();
    }
}

var startTheTimer = () => {
    timeId = setInterval(timer, 1000);
    $('.game-questions').css('display', 'initial');
}

$('#countdown').click(startTheTimer);
$('.radio-submit').click(collectAnswers);

