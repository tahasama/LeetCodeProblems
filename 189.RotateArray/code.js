nums = [1, 2];
k = 3;

var rotate = function (nums, k) {
  k = k % nums.length;

  for (let index = 0; index < k; index++) {
    const element = nums.pop();
    nums.unshift(element);
  }

  return nums;
};

let result = rotate(nums, k);
console.log("~ result:", result);
