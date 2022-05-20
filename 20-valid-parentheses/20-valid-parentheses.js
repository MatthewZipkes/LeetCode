/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }

  const stack = [];
  const map = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      stack.push(map[char])
      // console.log(stack.pop())
    } else if (char !== stack.pop()) {
      return false
    }
  }
  return stack.length === 0
};