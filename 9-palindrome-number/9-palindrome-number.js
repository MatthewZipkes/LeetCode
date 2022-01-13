/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xString = x.toString();
  let xStringArr = xString.split('');
  let xStringRev = xStringArr.reverse();
  if (xStringRev.join('') === xString) {
    return true;
  } else {
    return false
  }
};