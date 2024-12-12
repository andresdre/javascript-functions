// Exercise 1
function maxOfTwoNumbers(x, y){
    if (x >= y) {
    return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Results:', maxOfTwoNumbers(3,9))

// Exercise 2
function isAdult(age){
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log('Exercise 2 Result:', isAdult(17))


// Exercise 3
function isCharAVowel(vowel){
    if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Results:', isCharAVowel("s"))


function isCharAVowel(char)  {
    const vowels = "aeiou";
    return vowels.includes(char)
        
    }  

console.log('Exercise 3 Result:', isCharAVowel("b"));


//Exercise 4
function generateEmail(name, domain){
    return name + '@' + domain;
}
console.log('Exercise 4 Results:' + generateEmail('johnsmith', 'example.com'))


// Exercise 5
function greetUser(name, time){
    return "Good" + ' ' + time + ' ' + name; 
}

console.log('Exercise 5 Result:', greetUser("Sam", "Morning"))


//Exercise 6
function maxOfThree(x, y, z){
    if (x > y && x > z){
        return x;
    } else if (y > x && y > z){
        return y;
    } else {
        return z;
    }
}

console.log('Exercise 6 Result:', maxOfThree(20, 42, 3))


// Exercise 7
function calculateTip(total, tip){
    const tipAmmount = total * (tip / 100);
    return tipAmmount;
}

console.log('Exercise 7 result:', calculateTip(50, 20))


// Exercise 8
function celciusToFarenheit(celcius){
    return (celcius * 9/5) + 32;
}

function farenheitToCelcius(farenheit){
    return (farenheit - 32) * 9/5;
}

let tempInCelcius = 25;
let tempInfarenheit = celciusToFarenheit(tempInCelcius);

console.log('exercise 8 Result:', `${tempInCelcius} C is ${tempInfarenheit} F`)


// Exercise 9
function basicCalculator(x, y, operator){
    let add = x + y;
    let subtract = x - y;
    let multiply = x * y;
    let divide = x / y;


if (operator === "add"){
    return add;
} else if (operator === "subtract"){
    return subtract;
} else if (operator === "multiply"){
    return multiply;
} else if (operator === "divide"){
    return divide;
} else {
    return "Invalid Operator";
}

}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'add'));
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'));
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'multiply'));
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'divide'));




