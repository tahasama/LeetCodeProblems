let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  for (let index = 0; index < prices.length; index++) {
    if (prices[index] > prices[index + 1]) {
      const sell = prices[index];
      return sell;
    } else {
      const buy = prices[index];
      return buy;
    }
  }
  return sell - buy;
};

let result = maxProfit(prices);
console.log("~ result:", result);
