/**
 * @param {number} n
 * @return {number}
 */

//bottom up
var climbStairs = function (n) {

    let dp = new Array(n + 1).fill(0)

    dp[0] = 1
    dp[1] = 1


    for (i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
};


//top down

var climbStairs = function(n) {
    let memo = [1,1]

    return helper(n)

    function helper(n) {
         if (memo[n] !== undefined)  return memo[n]

         let res= helper(n-1)  + helper(n-2)
         memo[n] = res

         return res
    }
};