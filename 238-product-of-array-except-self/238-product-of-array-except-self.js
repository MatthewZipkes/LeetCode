/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let leftProducts = [];
  let rightProducts = [];
  let products = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (leftProducts.length === 0) {
      leftProducts.push(1);
    } else {
      leftProducts.push(leftProducts[i-1] * nums[i - 1])
    }
  }
  
  for (let i = nums.length - 1; i > -1; i--) {
    if (rightProducts.length === 0) {
      rightProducts.push(1)
    } else {
      rightProducts.unshift(rightProducts[0] * nums[i + 1])
    }
  }
  
  for (let i = 0; i < leftProducts.length; i++) {
    products.push(leftProducts[i] * rightProducts[i])
  }
  
  return products

};