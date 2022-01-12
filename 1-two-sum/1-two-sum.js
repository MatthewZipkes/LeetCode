
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexs = {};
    let results = [];
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
    if (indexs.hasOwnProperty(diff)) {
        results = [indexs[diff], i]
      break
    }
      indexs[nums[i]] = i;
  }
  return results;
};