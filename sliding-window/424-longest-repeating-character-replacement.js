/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0
    let longest = k
    let map = new Map()

    for (let right = 0; right < s.length; right++) {
        expandMap(s[right])

        while (isInvalidWindow()) {
            shrinkMap((s[left]))
            left++
        }

        let len = right - left + 1
        if (longest < len) {
            longest = len
        }
    }

    return longest

    function isInvalidWindow() {
        let total = 0
        let mostRepeats = 0

        for (let ch of map.keys()) {
            let count = map.get(ch)
            mostRepeats = Math.max(mostRepeats, count)
            total += count
        }

        return total - mostRepeats > k
    }

    function shrinkMap(ch) {
        let temp = map.get(ch) - 1
        if (temp === 0) {
            map.delete(ch)
        } else {
            map.set(ch, temp)
        }
    }

    function expandMap(ch) {
        if (!map.has(ch)) {
            map.set(ch, 1)
        } else {
            map.set(ch, map.get(ch) + 1)
        }
    }
};