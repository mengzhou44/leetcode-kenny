/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    let map = new Map()
    for (let ch of p) {
        if (!map.has(ch)) {
            map.set(ch, 0)
        }
        map.set(ch, map.get(ch) + 1)
    }


    let res = []
    let left = 0
    let right = p.length - 1

    let cur = new Map()
    for (let i = 0; i < p.length; i++) {
        if (!cur.has(s[i])) {
            cur.set(s[i], 0)
        }
        cur.set(s[i], cur.get(s[i]) + 1)
    }

    while (right < s.length) {

        if (isAnagram(map, cur)) {
            res.push(left)
        }

        let temp = cur.get(s[left]) - 1
        if (temp === 0) {
            cur.delete(s[left])
        } else {
            cur.set(s[left], temp)
        }

        left++
        right++
        if (right < s.length) {
            if (!cur.has(s[right])) {
                cur.set(s[right], 1)
            } else {
                cur.set(s[right], 1 + cur.get(s[right]))
            }
        }
    }

    return res

    function isAnagram(original, cur) {

        if (cur.size !== original.size) return false
        for (let key of original.keys()) {
            if (!cur.has(key)) return false
            if (original.get(key) !== cur.get(key)) return false
        }

        return true
    }


};