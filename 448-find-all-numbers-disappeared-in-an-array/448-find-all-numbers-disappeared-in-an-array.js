/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // given an array find numbers not in range of [1 - n = nums.length] and add them to an array then return array
  const numsOutOfRange = [];
  const numsInRange = new Set();
  for (let i = 0; i < nums.length; i++) {
    numsInRange.add(nums[i])
  }
  for (let i = 1; i <= nums.length; i++) {
    console.log(nums.length)
    console.log(i)
    if (!numsInRange.has(i)) {
      numsOutOfRange.push(i)
    }
  }
  console.log(numsOutOfRange)
  return numsOutOfRange
};