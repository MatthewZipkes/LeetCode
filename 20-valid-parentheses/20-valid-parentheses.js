/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  // check to see if the string is balanced if not return false
  // create a stack 
  // create an object that stores the pairs of parenthases
  // loop through the string
    // create a char variable 
    //if we see an open paren add the closing to stack
    // else if the pop from the stack and see if it equals the char if it doesn't return false
  //stack sould be empty by the end of the algo if it is return true it is valid else return false
  if (s.length % 2 !== 0) {
    return false
  } 
  
  const stack = [];
  const parens = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (parens[char]) {
      stack.push(parens[char])
    } else if (char !== stack.pop()) {
      return false
    }
  }
  return stack.length === 0
};