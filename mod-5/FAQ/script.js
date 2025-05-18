
const reset = document.getElementById("reset-button");



// clicking question!!!
const question = document.getElementsByClassName("question");
let answer =  document.getElementsByClassName("answer");

//create loop for all quesions and answers

for (let i = 0; i < question.length; i++) {
const clickQuestion = question[i];
const clickAnswer = answer[i];

// create function to display answer when clicking
clickQuestion.addEventListener('click', function showText (event) {
    
// if else statement in functon 
    if (clickAnswer.style.display === 'none') {
        clickAnswer.style.display ='block';

    }else {
        clickAnswer.style.display = 'none';


}});

}
