/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let count = n;
  
  for (let i = 0; i < flowerbed.length && count > 0; i++) {
    flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1 && count-- && i++;
  }

  return count === 0;
};