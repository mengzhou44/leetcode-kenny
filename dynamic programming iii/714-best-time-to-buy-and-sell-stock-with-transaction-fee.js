/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {

    if (prices.length < 2) return 0

    let m = prices.length
    let dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(2).fill(0)
    }

    dp[0][0] = 0
    dp[0][1] = -prices[0] - fee

    for (let i = 1; i < m; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)
    }

    return dp[m - 1][0]
};