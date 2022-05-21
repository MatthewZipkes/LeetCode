/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // loop through array of nums
  // add each num to a set
    // if the set has that num already return true
  //return false if the loop finishes without returning true\
  let numbers = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (!numbers.has(nums[i])) {
      numbers.add(nums[i])
    } else {
      return true
    }
  }
  return false
};