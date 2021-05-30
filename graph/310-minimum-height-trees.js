/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    let map = new Map()

    for (let i = 0; i < n; i++) {
        map.set(i, new Set())
    }

    for (let [a, b] of edges) {
        map.get(a).add(b)
        map.get(b).add(a)
    }

    let leaves = []
    for (let key of map.keys()) {
        if (map.get(key).size === 1) {
            leaves.push(key)
        }
    }

    while (map.size > 2) {
        cutLeaves()
    }

    return Array.from(map.keys())

    function cutLeaves() {
        let i = 0
        let temp = []
        while (i < leaves.length) {

            let another = Array.from(map.get(leaves[i]))[0]
            map.delete(leaves[i])
            map.get(another).delete(leaves[i])
            if (map.get(another).size === 1) {
                temp.push(another)
            }
            i++
        }
        leaves = [...temp]
    }
};


