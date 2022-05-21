/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//start in the middle of the array
// check if target equals the middle if not see if it is grater than or less than
// slice off array depending on if it is greater than or less than
// recurse until you find the target or -1
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1
  while (start < end) {
    let mid = start + Math.floor((end - start + 1) / 2)
    if (target < nums[mid]) {
      end = mid - 1
    } else {
      start = mid
    }
  }
  return nums[start]==target ? start : -1;
};