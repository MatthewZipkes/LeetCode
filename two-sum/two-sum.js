/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indices = [];
  let leftP = 0;
  let rightP = 1;
  while (leftP < nums.length) {
    if(nums[leftP] + nums[rightP] === target) {
      indices.push(leftP)
      indices.push(rightP)
      break
    }
    if (rightP === nums.length) {
      leftP++;
      rightP = leftP + 1
    } else {
      rightP++
    }
  }
  return indices
};

//have a left and right pointer
// loop through the array until you find the matching pair

/*

[1,   2,   3,   4,   5] | target = 7
      ^              ^
      |              |
    Left           Right

1+2 = 3 !== target (7)
1+3 = 4 !== target(7)
1+4 = 5 !== target(7)
1+5 = 6 !== target(7)
2+3 = 5 !== target(7)
2+4 = 6 !== target(7)
2+5 = 7 === target(7)

output [1, 4]

*/