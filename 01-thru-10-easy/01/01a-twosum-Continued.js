const nums = [2, 7, 11, 15];
const target = 9;

// Weird solution for LeetCode's Two Sum problem brought to you by ADHD
// https://leetcode.com/problems/two-sum/description/

function twoSum(nums, target) {
  const numIndices = new Map();

  // Create a map of number indices 🍌
  for (let i = 0; i < nums.length; i++) {
    if (!numIndices.has(nums[i])) {
      numIndices.set(nums[i], []);
    }
    numIndices.get(nums[i]).push(i);
  }

  // Generate all possible sums 🍌
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    const b = target - a;

    if (numIndices.has(b)) {
      const indicesOfB = numIndices.get(b);
      for (const index of indicesOfB) {
        if (index !== i) {
          return [i, index];
        }
      }
    }
  }

  return []; // If no pair found, return an empty array 🍌
}

console.log(twoSum(nums, target));

// moar

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,3], 6));

// oh fuck lol this actually performed really well

// Time complexity: O(n)
// Also Allegedly

// Space Complexity: O(n)
// Allegedly

// RUNTIME:
// 60 ms
// Beats
// 89.18 %

// MEMORY:
// lololololol
// 48.3 MB
// Beats
// 5.19 %