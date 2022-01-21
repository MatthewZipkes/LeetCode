/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let amountOfNums = {};
  for (let i = 0; i < nums.length; i++) {
    if (amountOfNums[nums[i]]) {
      amountOfNums[[nums[i]]] += 1;
    } else {
      amountOfNums[[nums[i]]] = 1;
    }
  }
  for (const dups in amountOfNums) {
    if (amountOfNums[dups] < 2) {
      return dups
    }
  }
};