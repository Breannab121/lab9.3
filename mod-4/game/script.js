let game = {
numberGuess: "4",
randomNumber: Math.floor(Math.random() * 8),
currentGuesses: 0,
maxGuesses: 3,
};

console.log(numberGuess);
console.log(Math.floor(Math.random() * 8));


if (numberGuess === randomNumber) {
    return "you are correct!"
};

if (numberGuess > randomNumber) {
    return "oops too high"   
} else {
    (numberGuess < randomNumber)
    return "oops  too low"
}


