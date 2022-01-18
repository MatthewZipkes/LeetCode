/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;

};