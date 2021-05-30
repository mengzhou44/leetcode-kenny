/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 1; i < dp.length; i++) {
        for (let word of wordDict) {
            if (s.substring(0, i).endsWith(word)) {
                if (dp[i - word.length]) {
                    dp[i] = true
                }
            }
        }
    }

    return dp[s.length]
};



/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {

    let dp = new Array(s.length+1).fill(false)
    dp[0] = true

    for(let i = 1;i<dp.length; i++) {
          for( let j=0 ; j<i; j++ ) {
              if (dp[j] === true &&  wordDict.includes(s.substring(j,i))) {
                  dp[i] = true
                  break
              }
          }

    }

    return dp[s.length]
};