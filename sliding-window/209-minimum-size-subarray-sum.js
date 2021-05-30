/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let minLength = Number.MAX_SAFE_INTEGER

    let left = 0
    let sum = 0
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum >= target) {
            let len = right - left + 1
            minLength = Math.min(len, minLength)
            sum = sum - nums[left]
            left++
        }
    }

    return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength

};