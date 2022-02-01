/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let minPrice = Math.min();
    let maxProfit = 0;
    
    for(let price of prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(price - minPrice, maxProfit);
    }
    return maxProfit;
};