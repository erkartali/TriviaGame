var correctAnswers = 0;
var incorrectAnswers = 0;
var questions = [];


// var displayRadioValue = () => { 
//     var result = document.getElementsByName('movie'); 
    
//     for(i = 0; i < result.length; i++) { 
//         if (result[i].checked) {
//             var checked = result[i];
//             console.log(checked.value)
//             if (checked.value === 'correct') {
//                 correctAnswers++;
//             } else {
//                 incorrectAnswers++;
//             }
//         }
//     }
//     console.log('correct answers:', correctAnswers, 'incorrect answers:', incorrectAnswers);
// } 

// $('.radio-submit').click(displayRadioValue);

var inputs = trivia.elements;
var radios = [];
var checked = [];
var correct = 0;
var incorrect = 0;

var  runThatShit = () => {

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'radio') {
            radios.push(inputs[i]);
        }

    }
    console.log(radios)
     for (let j = 0; j < radios.length; j++) {
         if (radios[j].checked === true) {
             checked.push(radios[j]);
         }
     }
     console.log(checked);
     for (let k = 0; k < checked.length; k++) {
         if (checked[k].value === 'correct') {
             correct++;
         } else if (checked[k].value === 'incorrect') {
             incorrect++;
         }  
        }
        console.log('correct:', correct);
        console.log('incorrect:', incorrect);
}

$('.radio-submit').click(runThatShit);


