// 13. Roman to Integer - Easy

// Problem: https://leetcode.com/problems/roman-to-integer/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

/* Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000 */

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

/*
I can be placed before V (5) and X (10) to make 4 and 9. 

X can be placed before L (50) and C (100) to make 40 and 90. 

C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

/*
1 <= s.length <= 15

s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').

It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

// let romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];


// I can be placed before V (5) and X (10) to make 4 and 9.
// exception for 4 and 9
// X can be placed before L (50) and C (100) to make 40 and 90.
// exception for 40 and 90
// C can be placed before D (500) and M (1000) to make 400 and 900.
// exception for 400 and 900

// exception range all the way up to 3999

// let int = 0;

// if int is 1 less than 5 or 10
// if int is 10 less than 50 or 100
// if int is 100 less than 100 or 1000

// Maybe something ...

// let int = 4
// let remainInt = 5 % int

// console.log(remainInt);

// let int2 = 9

// let remainInt2 = 5 % int2
// let remainInt3 = 10 % int2

// console.log(remainInt2);
// console.log(remainInt3);

// // output
// > 1
// > 5
// > 1

// if (int > 0 & int < 9) & (5 % int === 1 OR 10 % int ===1) * no but we'll get there

// if int >= 500, D, OH MY GOD I'M TAKING IN ROMAN NUMERALS NOT INTEGERS LOL

// The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

// const romanNumerals = {
//     I : 1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     D : 500,
//     M : 1000
// };

// // let addNumerals = "".toUpperCase; REGEX
// let rNumerals = "V";
// console.log(rNumerals);

// if addNumerals includes IVXLCDM, and no other chars and chars are not lowercase, return array of chars
// /[IVXLCDM]/g shoutout to https://regexr.com/

// const regex = /[IVXLCDM]/g;

// const arrayNumerals = rNumerals.match(regex)
// // return arrayNumerals[]

// console.log(arrayNumerals);

// okay wtf do I do with this array now lol

// if array.length == 1
// and if array[0] === Object.keys({romanNumerals})[i]
// uhhhh
// return Object.values({romanNumerals:[i]})

// match to key, return value?

// okay I'm going to cheat on this one, there's so much math
// JK I just failed to recognize the pattern :)

const romanNumerals = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
};

// CONVERT ROMAN NUMERAL STRING TO INT
var romanToInt = function(s) {
    let total = 0;
    let prevValue = 0;

    for (let i = 0; i < s.length; i++) {
        let currentValue = romanNumerals[s[i]];

        // If previous numeral smaller than the current numeral, subtract previous numeral's value twice
        if (prevValue < currentValue) {
            total -= 2 * prevValue;
        }

        total += currentValue;
        prevValue = currentValue;
    }
    
    return total;
};

// TEST
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

// Runtime
// 114 ms
// Beats
// 94.18 %

// Memory
// 46.7 MB
// Beats
// 85.44 %

// The romanToInt function iterates through the input string s and adds the values of the Roman numerals to the total. If the previous numeral is smaller than the current numeral, it means that we need to subtract the previous numeral's value from the total. Since we already added the previous numeral's value, we need to subtract it twice to correct the total.


// FOR LOOP
// for (let i = 0; i < s.length; i++) {
//     let currentValue = romanNumerals[s[i]];
//     // ...
// }

/* This is a for loop that iterates through the string s, which contains the Roman numeral. The loop starts with i = 0 and continues until i is less than the length of the string s. For each iteration of the loop, the value of i increases by 1. This way, the loop processes each character in the string.

let currentValue = romanNumerals[s[i]]; is a statement inside the loop that retrieves the value of the current Roman numeral character. It does so by using the i as an index to access the character in the string s (s[i]) and then looking up the corresponding value in the romanNumerals object.

For example, if s is "IX", when i = 0, s[i] is "I", and romanNumerals[s[i]] would be romanNumerals["I"], which is equal to 1. Therefore, currentValue would be assigned the value 1 for this iteration. */

// CHECK IF VALUE LOWER THAN
// if (prevValue < currentValue) {
//     total -= 2 * prevValue;
// }

/* This conditional statement checks whether the value of the previous Roman numeral (prevValue) is less than the value of the current Roman numeral (currentValue). When this is true, it means we have a case where a smaller numeral appears before a larger numeral, such as "IV" (4) or "XC" (90). In these cases, we need to subtract the smaller numeral from the larger one.

However, in the loop, we have already added the value of the smaller numeral to the total. To correct the total, we need to subtract the smaller numeral's value twice: once to cancel the addition, and another time for the actual subtraction.

For example, if we are processing the Roman numeral "IV", we first encounter "I" and add its value 1 to total. Then, we see "V" and realize that we have a case of a smaller numeral before a larger one. So, we subtract 2 * prevValue, which is 2 * 1, from the total. The total then becomes 1 - 2 = -1. After this, we add the value of the current numeral "V" (5) to the total, resulting in a final value of -1 + 5 = 4, which is the correct integer representation of the Roman numeral "IV". */

// LAST PIECE BEFORE RETURN
// total += currentValue;
// prevValue = currentValue;

/* These two lines are responsible for updating the total and setting the prevValue for the next iteration of the loop.

total += currentValue;: This line adds the integer value of the current Roman numeral character (currentValue) to the running total. As we iterate through the input string, we add up the values of the individual Roman numerals. In cases where a smaller numeral appears before a larger numeral (e.g., "IV"), we've already corrected the total with the previous if statement, so adding currentValue will yield the correct result.

prevValue = currentValue;: This line updates the prevValue variable, setting it equal to the currentValue. This is important for the next iteration of the loop, as prevValue will now store the value of the current Roman numeral. In the next iteration, it will be used to compare with the next Roman numeral in the string, allowing the code to handle cases of smaller numerals before larger ones correctly.

As the loop iterates through the entire input string, the total will accumulate the integer values of the Roman numerals, and at the end of the loop, the total variable will hold the correct integer value corresponding to the input Roman numeral string. */

// EXAMPLE: 444

// 444 = CDXLIV
// 400 = CD
// 40 = XL
// 4 = IV

/* CDXLIV:
this Roman numeral represents the number 444
it follows the rules for smaller numerals preceding larger ones
full process of function, here - */

// Set total to 0 and prevValue to 0.

// Start looping through the input string "CDXLIV".

// i = 0 (Character: "C")

// currentValue = romanNumerals["C"] = 100
// prevValue < currentValue? (0 < 100) True, but since it's the first character, we don't need to subtract anything.
// total += currentValue (0 + 100) = 100
// prevValue = currentValue = 100
// i = 1 (Character: "D")

// currentValue = romanNumerals["D"] = 500
// prevValue < currentValue? (100 < 500) True, subtract 2 * prevValue from total (100 - 2 * 100) = -100
// total += currentValue (-100 + 500) = 400
// prevValue = currentValue = 500
// i = 2 (Character: "X")

// currentValue = romanNumerals["X"] = 10
// prevValue < currentValue? (500 < 10) False, do nothing.
// total += currentValue (400 + 10) = 410
// prevValue = currentValue = 10
// i = 3 (Character: "L")

// currentValue = romanNumerals["L"] = 50
// prevValue < currentValue? (10 < 50) True, subtract 2 * prevValue from total (410 - 2 * 10) = 390
// total += currentValue (390 + 50) = 440
// prevValue = currentValue = 50
// i = 4 (Character: "I")

// currentValue = romanNumerals["I"] = 1
// prevValue < currentValue? (50 < 1) False, do nothing.
// total += currentValue (440 + 1) = 441
// prevValue = currentValue = 1
// i = 5 (Character: "V")

// currentValue = romanNumerals["V"] = 5
// prevValue < currentValue? (1 < 5) True, subtract 2 * prevValue from total (441 - 2 * 1) = 439
// total += currentValue (439 + 5) = 444
// prevValue = currentValue = 5
// End of the loop.

// The final value of total is 444, which is the correct integer representation for the Roman numeral "CDXLIV".

/* JavaScript doesn't inherently know not to do anything for the first character. Instead, the initial value of prevValue being 0 ensures that the condition prevValue < currentValue will be true for the first character, but the subtraction will not affect the total because we are subtracting 2 * prevValue (which is 2 * 0 = 0). This effectively means that the subtraction step does not change the total for the first character.

i = 0 (Character: "C")
currentValue = romanNumerals["C"] = 100
prevValue < currentValue? (0 < 100) True, but since prevValue is 0, the subtraction does not affect the total: total -= 2 * prevValue (100 - 2 * 0) = 100
total += currentValue (0 + 100) = 100
prevValue = currentValue = 100

As you can see, while the subtraction step does execute, it doesn't change the total value because prevValue is 0. The loop continues to work correctly for subsequent characters, taking the correct action when a smaller numeral appears before a larger one, based on the logic in the conditional statement. */