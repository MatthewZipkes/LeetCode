/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   const result = [];
  let head = 0;
  let tail = nums.length - 1;

  while (head <= tail) {
    if (nums[head] ** 2 > nums[tail] ** 2) {
      result.unshift(nums[head] ** 2)
      head++
    } else {
      result.unshift(nums[tail] ** 2)
      tail--
    }
  }

  return result
};