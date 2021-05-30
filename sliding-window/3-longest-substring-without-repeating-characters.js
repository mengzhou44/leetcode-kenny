var lengthOfLongestSubstring = function (s) {
    let left = 0
    let window = []
    let longest = 0
    for (let right = 0; right < s.length; right++) {
        while (window.includes(s[right])) {
            left++
            window.shift()
        }
        window.push(s[right])
        longest = Math.max(longest, right - left + 1)
    }

    return longest
};