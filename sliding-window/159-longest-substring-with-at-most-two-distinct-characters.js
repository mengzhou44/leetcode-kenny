/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    let left = 0
    let maxLength = 0
    let map = new Map()
    for (let right = 0; right < s.length; right++) {
        expandMap(s[right])
        while (map.size > 2) {
            shrinkMap(s[left])
            left++
        }

        let windowSize = right - left + 1
        if (windowSize > maxLength) {
            maxLength = windowSize
        }
    }

    return maxLength

    function expandMap(ch) {
        if (!map.has(ch)) {
            map.set(ch, 1)
        } else {
            map.set(ch, map.get(ch) + 1)
        }
    }

    function shrinkMap(ch) {
        map.set(ch, map.get(ch) - 1)
        if (map.get(ch) === 0) {
            map.delete(ch)
        }
    }
};