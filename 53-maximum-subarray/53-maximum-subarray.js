/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    let max = nums[0]; // Need a starting number we don't care if it is the actual max
    let current = Math.max(max, 0); //get the biggest number out of these two
    
    for (let i = 1; i < nums.length; i += 1) { //loop through nums (we start at 1 because we have the first element)
        current += nums[i]; //add next value in array
        max = Math.max(max, current); // if current is greater than max then max = current
        current = Math.max(current, 0); // if current is not greater than 0 current will be 0 
    }
    
    return max;
};