/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
 let maxSum = nums[0]
 let currentMax = maxSum
 for (let i = 1; i < nums.length; i++) {
   currentMax = Math.max(nums[i], currentMax + nums[i])
   maxSum = Math.max(currentMax, maxSum)
 }
  return maxSum
};