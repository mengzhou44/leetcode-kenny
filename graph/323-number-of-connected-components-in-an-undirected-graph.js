/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {

    let map = new Map()
    for (let i = 0; i < n; i++) {
        map.set(i, [])
    }
    for (let [a, b] of edges) {
        map.get(a).push(b)
        map.get(b).push(a)
    }

    let count = 0
    let visited = new Set()
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i)
            count++
        }
    }

    return count

    function dfs(index) {
        visited.add(index)
        let neighbours = map.get(index)

        for (let nei of neighbours) {
            if (visited.has(nei)) continue
            dfs(nei)
        }
    }

};