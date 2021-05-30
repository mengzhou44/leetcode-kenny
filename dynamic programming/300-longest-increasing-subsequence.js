var lengthOfLIS = function (nums) {
    if (nums.length < 2) return nums.length
    let n = nums.length

    let dp = new Array(nums.length).fill(0)

    let res = 0
    for (let i = 0; i < n; i++) {
        let len = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                len = Math.max(dp[j] + 1, len)
            }
        }
        dp[i] = len
        if (res < len) {
            res = len
        }
    }

    return res
};
