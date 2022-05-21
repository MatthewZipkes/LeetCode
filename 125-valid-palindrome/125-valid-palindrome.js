/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, '')
  s = s.toLowerCase()
  let reverseString = s.split('').reverse().join('')
  console.log(reverseString)
  if (s === reverseString) {
  return true
  } else {
    return false
  }
};