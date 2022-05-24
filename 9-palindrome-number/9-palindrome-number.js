/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let stringNum = x.toString()
  console.log(stringNum)
  let reverseString = stringNum.split('').reverse()
  console.log(reverseString)
  if (reverseString.join('') === stringNum) {
    return true;
  } else {
    return false
  }
};