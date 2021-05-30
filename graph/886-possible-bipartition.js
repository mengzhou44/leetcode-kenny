/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    let map = new Map()
    for (let i = 1; i <= n; i++) {
        map.set(i, [])
    }

    for (let [a, b] of dislikes) {
        map.get(a).push(b)
        map.get(b).push(a)
    }

    let visited = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        if (visited[i] === 0 && !dfs(i, 1)) {
            return false
        }
    }

    return true

    function dfs(person, group) {
        visited[person] = group

        for (let nei of map.get(person)) {
            if (visited[nei] === group) {
                return false
            }

            if (visited[nei] === 0 && dfs(nei, -group) === false) return false
        }

        return true
    }

};