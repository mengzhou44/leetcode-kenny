/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 0) return ''

    let start = 0
    let len = 1
    let l = s.length

    let table = new Array(l)
    for (let i = 0; i < l; i++) {
        table[i] = new Array(l).fill(false)
    }

    for (let i = 0; i < l; i++) {
        table[i][i] = true
        if (s[i] === s[i + 1]) {
            table[i][i + 1] = true

            start = i
            len = 2
        }
    }

    for (let width = 3; width <= l; width++) {
        for (let i = 0; i < l - width + 1; i++) {
            let j = i + width - 1
            if (s[i] === s[j] && table[i + 1][j - 1]) {
                table[i][j] = true
                if (len < width) {
                    len = width
                    start = i
                }
            }
        }

    }

    return s.substring(start, start + len)

};

