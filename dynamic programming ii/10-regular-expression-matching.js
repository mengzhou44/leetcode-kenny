function isMatch(s, p) {
    let memo = new Map()
    return search(s, p)

    function search(s, p) {
        if (p.length === 0) return s.length === 0
        let key = createKey(s, p)
        if (memo.has(key)) return memo.get(key)

        let firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === '.')

        let res
        if (p.length >= 2 && p[1] === '*') {
            res = search(s, p.substring(2)) ||
                (firstMatch && search(s.substring(1), p))
        } else {
            res = firstMatch && isMatch(s.substring(1), p.substring(1))
        }

        memo.set(key, res)
        return res

    }


    function createKey(s, p) {
        return `${s}-${p}`
    }

}