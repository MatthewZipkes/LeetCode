/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let maxSum = nums[0]
  let currMax = maxSum;
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i])
    maxSum = Math.max(currMax, maxSum)
  }
  return maxSum
};