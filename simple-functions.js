function add7(num) { 
    console.log(num += 7);
}
add7(8); //function 1

function multiply(num1, num2) {
    console.log(num1 * num2);
}
multiply(7, 8); //function 2

function capitalize(string) {
    if (string === (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())) {
        console.log('The string has already gotten its first letter capitalized')
    } else {
    console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
    }
}
capitalize('Daylight');
capitalize('EvEninG'); //function 3: capitalize the first letter.

function lastLetter(string) {
    console.log(string.charAt(string.length-1));
}
lastLetter('So you think you can dance'); //function 4: extract and print the last letter in the string

let min = (a, b) => (a<b) ? console.log(a) :
(a == b) ? console.log('Both have equal value') : console.log(b);
min(-8, 23); //function 5: pick out the number with lesser value out of the two.

let randomNumber = (start, end) => //(end-start)<0 ? 'Invalid starting and ending numbers' : //the function managed to work even with end variable smaller than start variable in value.
 Math.floor(Math.random()*(end - start)) + start;
console.log(randomNumber(103, 73)); //function 6: Generate a whole random number in between the starting and ending numbers. 



