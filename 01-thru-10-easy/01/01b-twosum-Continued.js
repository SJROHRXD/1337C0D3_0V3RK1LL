const nums = [2, 7, 11, 15];
const target = 9;

// Other solutions for LeetCode's Two Sum problem // Explained
// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    
    if(nums.length===2)return [0,1];
    let memo = {};

    for(let i=0; i<nums.length; i++){
        let num2 = target - nums[i];
        if(memo[num2] !== undefined){
            return [memo[num2], i]
        }
        memo[nums[i]] = i;
    }
};

/*
🍔 This is another implementation of the twoSum function using an object called memo to store the indices of the numbers.

1. If the length of the input array nums is 2, return [0, 1] since there are only two elements, and they must add up to the target.

2. Create an empty object memo.

3. Iterate through the input array nums using a for loop.

    a. Calculate the complement of the current number (num2 = target - nums[i]).

    b. Check if the complement is already present in the memo object.
        - If it is, the current number (nums[i]) and its complement (num2) add up to the target value. Return an array with their indices.

    c. If the complement is not in the memo object, store the current number (nums[i]) in the memo object with its index (i) as the value.

🍔 Space & Time Complexity Analysis

Time complexity: O(n)

    This algorithm iterates through the input array nums once, which is linear time complexity.

Space complexity: O(n)

    The space complexity is determined by the memo object, which stores the indices of each number in the input array. In the worst case, the object will store every number in the array, making the space complexity O(n).

Note: n represents the size of the input array.
*/

var threeSum = function(nums, target) {
    let hashedMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let toMatchTarget = target - nums[i];
        if(hashedMap.has(toMatchTarget)) {
            let foundIndex = hashedMap.get(toMatchTarget);
            return i < foundIndex? [i, foundIndex] : [foundIndex, i];
        }else {
            hashedMap.set(nums[i], i);
        }
    }
};


/*
🍔 This is another implementation of the twoSum function using a Map called hashedMap to store the indices of the numbers.

1. Create a new Map called hashedMap.

2. Iterate through the input array nums using a for loop.
    a. Calculate the complement of the current number (toMatchTarget = target - nums[i]).
    b. Check if the complement is already present in the hashedMap.
        - If it is, the current number (nums[i]) and its complement (toMatchTarget) add up to the target value. Get the index of the complement from the hashedMap (foundIndex = hashedMap.get(toMatchTarget)), and return an array with their indices, sorted in ascending order.
    c. If the complement is not in the hashedMap, store the current number (nums[i]) in the hashedMap with its index (i) as the value.

🍔 Space & Time Complexity Analysis

Time complexity: O(n)

    This algorithm iterates through the input array nums once, which is linear time complexity.

Space complexity: O(n)

    The space complexity is determined by the hashedMap Map, which stores the indices of each number in the input array. In the worst case, the Map will store every number in the array, making the space complexity O(n).

Note: n represents the size of the input array.
*/

// 🌷 Notes from ChatGPT-4:

/* In most practical solutions to this problem, you will use some kind of data structure (like a hash table, a Map, or an object) to store the numbers and their indices as you iterate through the input array. This is necessary to achieve a linear time complexity, O(n), but it comes at the cost of linear space complexity, O(n).

If you try to optimize for space complexity, you would have to modify the input array... and ChatGPT sort of forgot here that the entire point is to refer to the integers provided by their indices, lol. */

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,3], 6));

console.log(threeSum([2,7,11,15], 9));
console.log(threeSum([3,2,4], 6));
console.log(threeSum([3,3], 6));
console.log(threeSum([3,2,3], 6));