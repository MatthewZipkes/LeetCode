/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  //loop through an array and check if the num already exists and if it does return true
  // if it doesn't return false
  let uniqNums = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!uniqNums.has(nums[i])) {
      uniqNums.add(nums[i])
    } else {
      return true;
    }
  } 
  return false
};