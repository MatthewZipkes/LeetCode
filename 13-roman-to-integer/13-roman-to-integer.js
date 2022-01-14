/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanInt = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    let sum = 0;
    let counter = 0
    while (counter < s.length) {
      console.log(counter)
      console.log(sum)
       if (s[counter] === 'I' && s[counter + 1] === 'V') {
         sum += 4;
         counter += 2;
       } else if (s[counter] === 'I' && s[counter + 1] === 'X') {
        sum += 9;
        counter += 2;
      } else if (s[counter] === 'X' && s[counter + 1] === 'L') {
        sum += 40;
        counter += 2;
      } else if (s[counter] === 'X' && s[counter + 1] === 'C') {
        sum += 90;
        counter += 2;
      } else if (s[counter] === 'C' && s[counter + 1] === 'D') {
        sum += 400;
        counter += 2;
      } else if (s[counter] === 'C' && s[counter + 1] === 'M') {
        sum += 900;
        counter += 2;
      } else {
        console.log(s[counter])
       sum += romanInt[s[counter]];
        counter ++ 
      }
    }
  return sum
};