/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
    let sChars = {}
    let tChars = {}
    for (let i = 0; i < s.length; i++) {
      if(!sChars.hasOwnProperty(s[i])) {
        sChars[s[i]] = 1;
      } else {
        sChars[s[i]] += 1
      }
      if(!tChars.hasOwnProperty(t[i])) {
        tChars[t[i]] = 1;
      } else {
        tChars[t[i]] += 1
      }
    }
  for (key in sChars) {
    console.log(sChars[key], tChars[key])
    if (sChars[key] !== tChars[key]) {
      return false
    } 
  }
  return true
};