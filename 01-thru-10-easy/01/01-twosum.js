// 1. Two Sum - Easy

// Problem: https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// 🐸 NOTES

// given an array of integers
// we need to know arrays*
// we need to know what integers are* (as in, defined)
// we need to know what target is (oh this is given)
// we need to see expected output

// we are returning indices of two numbers

// the integers in each position are what adds up to the target
// so we need to access array, access and review each integer per index, and add each integer with every other integer besides itself 0+1, 0+2, 0+3, 0+4, 1+2, 1+3, 1+4, 2+3, 2+4, 3+4 etc
// and then return the index positions of the two integers that add up to the target

// 🌼 ATTEMPT

/* const nums = [2,7,11,15]
const target = 9 */

// loop through array
// for every index, add every other index
// when nums[x] + nums[y] = target 

/* function findTwo(nums, target) {
// pass in nums array, target 
    // for array[], find sum of array[a] + array[b,c,d,e, ...]
    // how do I iterate through the array without repeating? maybe try repeating then correct later

    // for every element in array, add other elements in array
    // for every array[0], add array[i], for array length

    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0 // forgot to initialize lol?
        
        currentSum = (nums[i], ...nums[nums.length])
            // this is where I like, broke because I can't recall how to implement the "other integer"
            // I just added the sum part "sum(nums[i], ...nums[nums.length])"
            // oh the sum part is wrong

            console.log(currentSum)
    } */

// comparison
// does currentSum = target? if yes, console log indices 

// current value + sumX = target, map the indices! <- from video but worry about this later

/*     if 
    (sum(nums[a],nums[b]) = target)
    return [a,b]
} */

// 🐸 DERAIL

// omg what if we just find all the possible answers to sum the target and then search for in the array lol
// this is chaotic

// for target = 9, find all possible combinations of 2 whole numbers that add up to 9
// number a, number b
// if both a and b are in array, console.log indices of a and b

// okay that's out of my system now

/* 🌼 actually I did not get this out of my system lol 
see 

🌼 */



// 🍌 EXAMPLES

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// 🧁 SOLUTION

const nums = [2,7,11,15]
const target = 9



var twoSum = function(nums, target) {
    // omfg i accidentally wrote `nums.length` instead of `i < nums.length` and broke my terminal LOL
    for (let i = 0; i < nums.length; i++) {
    // The outer loop iterates over each element in the array using the index variable i (from 0 to the array length - 1).

        for (let j = i + 1; j < nums.length; j++) {
        // The inner loop iterates over the remaining elements in the array using the index variable j (from i + 1 to the array length - 1). This loop starts from the element right after the current one being checked by the outer loop.
            if (nums[i] + nums[j] == target) {
            // checks if the sum of the elements at indices i and j is equal to the target value. If this condition is true, then the function has found the two elements it was looking for.
                return[i, j];
                // returns an array containing the indices i and j of the two elements that sum up to the target value.               
            }
        }
    }
}
console.log(twoSum(nums, target));


// I'm not going to get all upset over the fact I barely understand the easiest to find solution so let's just review the concepts here first

// what do we need to know about this answer?


// Nested loops are loops within loops, where an inner loop is placed inside an outer loop. In this arrangement, for each iteration of the outer loop, the inner loop iterates through its entire sequence. Essentially, nested loops work like a set of iterations happening within a larger set of iterations.

/*

1. The outer loop starts with i = 0, which represents the first element in the nums array.

// let i - declares i
// let i = 0 is the initialization expression, used to initialize the counter variable
// we need to declare i as 0 because we are starting at the first element in the array
// 0 represents the index of the first element in the array

// i < nums.length - a condition; we are iterating through the array until we reach the end of the array
// if i < nums.length is true, the loop continues iterating; if i < nums.length is false, the loop ends
// we say `i < ` so that as long as the index is less than the length of the array, the loop will continue
// .length is a property of the array object that returns the number of elements in the array

// i++ - the afterthought, lol (generally used to update the counter variable)
// an expression to be evaluated at the end of each loop iteration, before the next evaluation of condition
// the iteration is used to direct the loop to increment while the condition is true
// the statement is run, then the condition is evaluated again, and if it is true, the statement runs again
// we are incrementing i by 1 after each iteration, so that we can move on to the next element in the array

// statement - the code to be executed in the loop
// if the statement is a loop, the 

2. The inner loop starts with j = i + 1, which represents the second element in the array.
The reason for starting from i + 1 is to avoid considering the same element twice
and to only check combinations of distinct elements for their sum.

3. The inner loop iterates over the remaining elements in the array,
comparing the sum of nums[i] and nums[j] with the target value.

4. If the sum is equal to the target value, the function returns the indices i and j.

5. If the inner loop reaches the end of the array without finding a matching sum,
the outer loop moves to the next element by incrementing i.

6. The inner loop starts again with j = i + 1,
iterating over the remaining elements in the array and checking for a matching sum.

7. This process continues until either a matching sum is found
or the outer loop has iterated through all elements in the array without finding a match.

*/




// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// yes.