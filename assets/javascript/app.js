var inputs = trivia.elements;
var radios = [];
var checked = [];
var correct = 0;
var incorrect = 0;

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
        console.log('correct:', correct);
        console.log('incorrect:', incorrect);
        $('#correct-answers').html(correct);
        $('#incorrect-answers').html(incorrect);
}

$('.radio-submit').click(collectAnswers);



