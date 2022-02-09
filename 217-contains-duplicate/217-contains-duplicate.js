/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let uniqSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!uniqSet.has(nums[i])) {
      uniqSet.add(nums[i])
    } else {
      return true
    }
  }
  return false
};