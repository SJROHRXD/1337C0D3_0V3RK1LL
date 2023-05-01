let x = -10


// let digits = []

// while (x > 0) {
//     let endDigit = x % 10;
//     digits.unshift(endDigit);
//     x = Math.floor(x  / 10);
// }

// const reverseDigits = []

// digits.forEach((element) => {
//     reverseDigits.unshift(element)
// });

// console.log(reverseDigits)

// var isPalindrome = function(digits, reverseDigits) {
//     for (i = 0; i < digits.length; i++) {
//         if (digits[i] !== reverseDigits[i]) {
//             return false;
//         }
//         return true;
//     }
// }


// console.log(isPalindrome(digits, reverseDigits))
// oh, whoops, I need to wrap this and have it return true or false

function isPalindrome(x) {
    if (x < 0) {
        return false;
      }

    let digits = [];
    while (x > 0) {
      let endDigit = x % 10;
      digits.unshift(endDigit);
      x = Math.floor(x / 10);
    }
  
    const reverseDigits = [];
    digits.forEach((element) => {
      reverseDigits.unshift(element);
    });
  
    for (i = 0; i < digits.length; i++) {
      if (digits[i] !== reverseDigits[i]) {
        return false;
      }
    }
    return true;
  }

console.log(isPalindrome(x))

// FURTHER

// The space and time complexity of the isPalindrome function are as follows:

// Time Complexity:

// The while loop iterates over the digits in x once, which takes O(log_10(x)) time, since the number of digits in x is proportional to log_10(x).
// The forEach loop also iterates over the digits in x once, which takes O(log_10(x)) time.
// The final for loop iterates over the digits in x once, which takes O(log_10(x)) time.
// Therefore, the overall time complexity of the function is O(log_10(x)).

// Space Complexity:

// The function uses two arrays to store the digits of x, digits and reverseDigits, each of which has length O(log_10(x)).
// Therefore, the overall space complexity of the function is O(log_10(x)).
// Note that the space complexity could be reduced to O(1) by comparing the digits of x directly in the while loop, without storing them in arrays. However, this would require modifying the input value of x, which may not be desirable in all cases.

// This is very smart

/* function isPalindrome(num) {
    if (num < 0) {
      // Negative numbers are not palindromes
      return false;
    }
    
    let reversedNum = 0;
    let originalNum = num;
    
    // Reverse the digits of the original number
    while (originalNum > 0) {
      reversedNum = reversedNum * 10 + originalNum % 10;
      originalNum = Math.floor(originalNum / 10);
    }
    
    // Check if the reversed number is the same as the original number
    return num === reversedNum;
  } */

// Least Memory

/* var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x % 10 === 0 && x !== 0) return false;
    var reversed = 0;
    while (reversed < x){
        reversed = reversed *10 + (x % 10);
        x = Math.floor(x/10);
    }
    return x === reversed || x === Math.floor(reversed /10);
} */



// So the line copy = ~~(copy / 10); is equivalent to copy = Math.floor(copy / 10);, but may be faster due to the absence of a function call.

/* var isPalindrome = function(x) {
    var reverse = 0;
    var copy = x;

    //The loop break when the copy of original number becomes zero
    //Also negative number cannot be a palindrome
    while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10);
    }

    return reverse == x;
}; */

// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     if (x % 10 === 0 && x !== 0) return false;
//     var reversed = 0;
//     while (reversed < x){
//         reversed = reversed *10 + (x % 10);
//         x = ~~(x/10);
//     }
//     return x === reversed || x === ~~(reversed /10);
// } 


/* The best time complexity you can achieve for checking whether an integer x is a palindrome is O(log_10(x)), which is proportional to the number of digits in x. This is because you need to iterate over each digit in x at least once to check if it is a palindrome.

One way to achieve this time complexity is to use the following algorithm:

Check if x is negative or ends with a zero (if it's not zero itself). If either of these conditions is true, x cannot be a palindrome, so return false.
Reverse the first half of x by repeatedly taking the last digit of x and adding it to a new variable, reversed, until you have reversed half of the digits. If x has an odd number of digits, you can ignore the middle digit.
Compare reversed with the second half of x. If they are the same, x is a palindrome, so return true. Otherwise, x is not a palindrome, so return false. */



function isPalindrome(x) {
  // Check if x is negative or ends with a zero
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // If x has an odd number of digits, we can ignore the middle digit
  return x === reversed || x === Math.floor(reversed / 10);
}

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

/* This implementation has a time complexity of O(log_10(x)) and a space complexity of O(1). It uses only basic arithmetic operations and does not require the use of any additional data structures. */