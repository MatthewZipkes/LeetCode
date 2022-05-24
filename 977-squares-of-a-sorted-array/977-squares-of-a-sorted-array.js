/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let sqArray = []
   for (let i = 0; i < nums.length; i++) {
     sqArray.push(Math.pow(nums[i], 2))
   }
  return sqArray.sort((a,b) => {
    return a - b
  })
};