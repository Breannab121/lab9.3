//Implement a function that takes a union type of string[] or number[] 
// and returns a formatted string.
//If the input is string[], return a comma-separated list of uppercase strings.
//If the input is number[], return a comma-separated list of numbers rounded to 
// two decimal places.

function formatInput(input: string | number): string {
    if (typeof input === "number") {
        return `Number: ${input.toFixed(2)}`;
    } else{
        return `String: ${input.toUpperCase()}`;
    }
}
console.log(formatInput(123));
console.log(formatInput("hello me"));

//Use type guards to distinguish between string[] and number[].

interface Num {
    number(): void;
}

interface Letter {
    letter(): void;
}

function callInput(alphanumeric: Num | Letter) {
    if ("letter" in alphanumeric){
        alphanumeric.letter();
    } else {
        alphanumeric.number();
    }
}

const myLetter: Letter = { letter: () => console.log("Your are a letter") };
const myNumber: Num = { number: () => console.log("Your are a number") };

callInput(myLetter);
callInput(myNumber);

//Add a type alias for the union type to keep the code concise.

type alphanumeric = string | number;
let a1: alphanumeric = "Letters";
let a2: alphanumeric = 123;

console.log(`alphanumeric: ${a1}, ${a2}`);