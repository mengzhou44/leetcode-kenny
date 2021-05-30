var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length
    let n = text2.length
    let dp = new Array(m + 1)

    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }

    }

    return dp[m][n]

};