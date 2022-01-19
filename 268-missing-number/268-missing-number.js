/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let expectedNums = nums.length
  let arrSum = 0
  for(let i = 0; i<nums.length; i++){  
        arrSum = arrSum + nums[i]
        expectedNums = expectedNums + i
    }
   return expectedNums - arrSum
};