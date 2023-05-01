// 9. Palindrome Number - Easy

// Problem: https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is a palindrome, and false otherwise.

// var x = Integer
// set a typed variable for x

var g = 0 // this is an integer, should return True
var f = .0333 // this is a float, should return False
var e = 121 // this is an integer, should return True
var d = -121 // this is an integer, but we need negatives to return False because of the "minus" sign + add check for negatives
var c = "no" // this is a string, should return False
var b = "1" // this is a string, should return False
var a = "0" // this is a string, should return False

var isPalindrome = function(x) {
    
};


// parameter is Number / Integer X
// return value is a Boolean

// we need to know what a palindrome is
// A palindrome is a word, number, phrase, or other sequence of characters 
// which reads the same backward as forward, such as madam or racecar or the number 10801

// okay shooting from the hip, I would like to try just reversing the order of x, storing it and comparing it
// I'm curious if I can do this without converting to a string

// what if I stashed the variables by character, then compared them?
// I would need to know the length of the number, then I would need to know how to access each character

// like...store the number... by accessing the last available character, etc, so x.length, x.length-1, x.length-2, etc
// then compare the two numbers

// this is a coercion puzzle

// alright, first let's see what we can do with Integers
// how are Integers stored in JS?
// https://stackoverflow.com/questions/3885817/how-does-javascript-store-integers-in-variables

// how to check if a number is a positive integer
// 


// what if... I printed the hex or binary of the number to an array, then... reversed the array and converted in back to a number?
// are hex and binary considered strings?
// fuck

// how the heck do I individually compareee
// store number to array > THERE'S A METHOD TO SPLIT THIS UP I KNOW IT > is any element in array not an integer? > return reversed array
// this still might require converting to string

// charAt maybe?
// what are available number methods???

// typeOf x maybe?
// === strict equality

// create a Number Object w specific properties maybe?

// Number.isInteger()

// Number.isFinite() ooooh shit oh nvm god dammit
// Math.sign ? if output is -1, then don't continue loop maybe

// what about a binary array?
// typedarray?

// okay so we can take the number and divide by 10 until the number is no longer a whole number, and after each divide we print the digit in the one's place to an array

// for (let i = 0; i < arrayX.length ; i++) {
    
//     // this is wrong but this loop will... 

//     let shifty = arrayX * .1
//         // check if boop == 0; if true, stop?

//     arrayX * .01
//     arrayX * .001
//     // for the number of digits


//     // THEN

//     // convert results back to whole numbers?

//     // results of shifty printed to newArrayX

//     // reverse array order?
// }

// FUCK I WAS SO CLOSE

// Modulus operator
/* let number = 12345;
let digits = [];

while (number > 0) {
    let lastDigit = number % 10; // Get the last digit
    digits.unshift(lastDigit); // Add the last digit to the beginning of the array
    number = Math.floor(number / 10); // Remove the last digit from the number
}

console.log(digits); // Output: [1, 2, 3, 4, 5] */

let num = 121
console.log (num)

// console.log(`arrayX is a(n) ` + typeof(arrayX) + ` with a value of ${arrayX}`)
console.log(`num is a `+ typeof(num) + ` with a value of ${num}`)

// ALRIGHT MODULUS NOW

let digits = []

while (num > 0) {
    let endDigit = num % 10;
    digits.unshift(endDigit);
    num = Math.floor(num  / 10);
}

console.log(digits)

// oh fuck oh fuck oh fuck

let reverseDigits = []
// let unShiftyDigits

digits.forEach((element) => {
    reverseDigits.unshift(element)
});

console.log(`${digits} reversed: ` + reverseDigits)

// 125
// js:114 num is a number with a value of 125
// js:126 (3) [1, 2, 5]
// js:137 (3) [5, 2, 1]

// omgomgomg

// now, for array.length, by indices, is array1[0] === array2[0]? until done
// I guess we have to interate from the end and start and compare

function checkPalidrome(digits, reverseDigits) {
    for (i = 0; i < digits.length; i++) {
        if (digits[i] !== reverseDigits[i]) {
            return false;
        }
        return true;
    }
}

console.log(checkPalidrome(digits, reverseDigits))


// okay altogether

/* ⭐🌟

let num = 222
let digits = []

while (num > 0) {
    let endDigit = num % 10;
    digits.unshift(endDigit);
    num = Math.floor(num  / 10);
}

let reverseDigits = []

digits.forEach((element) => {
    reverseDigits.unshift(element)
});

function checkPalidrome(digits, reverseDigits) {
    for (i = 0; i < digits.length; i++) {
        if (digits[i] !== reverseDigits[i]) {
            return false;
        }
        return true;
    }
}

⭐🌟 */

/* 🌷
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
🌷 */

/* 🌷
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
🌷 */

/* 🌷
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
🌷  */

// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?