//Write a program to output the first 100 FizzBuzz numbers.
//Decomposing the problem:
/*1. Write a program to output 1 - 100.
2. Write a program to substitute all numbers divisible by three with "Fizz".
3. Write a program to substitute all numbers divisible by five with "Buzz".
    Additional condtion: numbers divisible by both three and five will be substitute by "Fizz Buzz"*/


function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) { 
        return "Fizz Buzz";
    } else if (num % 3 == 0) {
        return "Fizz";
    } else if (num % 5 == 0) {
        return "Buzz";
    } else {
        return num;
    }
} //You should get a condition check for "Fizz Buzz" number in the very beginning. If you only check for "Fizz" number, the condition will return "Fizz" for "Fizz Buzz" number (like 15, 30,...).

let buzzFizz = (num) => 
    (num % 3 == 0 && num % 5 == 0) ? "Fizz Buzz" :
    (num % 3 == 0) ? "Fizz" :
    (num % 5 == 0) ? "Buzz" : num; //for this to work, the for loop has to be after this Function Expression

    for (let i=1; i <= 100; i++) {
        console.log(fizzBuzzSwitch(i));
    }
function fizzBuzzSwitch(num) {
    switch (true) {
        case (num % 3 == 0 && num % 5 == 0):
            return "Fizz Buzz";
            break;
        case (num % 3 == 0):
            return "Fizz";
            break;
        case (num % 5 == 0):
            return "Buzz";
            break;
        default: 
            return num;
            break;
    }
} //generally, switch case is probably better for this problem because it doesn't need a specific order like in the if...else if...else approach above.