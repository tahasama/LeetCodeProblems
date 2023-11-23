// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

let nums = [3, 2, 3];

var majorityElement = function (nums) {
  let n = nums.length;
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      k++;
      if (k >= n / 2) {
        nums.push(nums[i]);
      }
    }
    return k;
  }
};

let result = majorityElement(nums);
console.log("~ result:", result);
