var correctAnswers = 0;
var incorrectAnswers = 0;


var displayRadioValue = () => { 
    var result = document.getElementsByName('movie'); 
    
    for(i = 0; i < result.length; i++) { 
        if (result[i].checked) {
            var checked = result[i];
            console.log(checked.value)
            if (checked.value === 'correct') {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    }
    console.log('correct answers:', correctAnswers, 'incorrect answers:', incorrectAnswers);
} 

$('.radio-submit').click(displayRadioValue);


