/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[\W_]+/g,"").toLowerCase()
  console.log(s)
  return s === s.split('').reverse().join('')
};