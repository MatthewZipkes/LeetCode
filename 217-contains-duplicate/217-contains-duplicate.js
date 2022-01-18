/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let checkNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (!checkNums.includes(nums[i])) {
      checkNums.push(nums[i])
    } else {
      return true
    }
  }
  return false;
};