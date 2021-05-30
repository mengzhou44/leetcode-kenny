/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
    let res = []
    dfs(0, [])

    return res


    function dfs(row, cur) {

        if (cur.length === n) {
            res.push(createBoard(cur))
            return
        }

        if (row.length === n) return
        for (let col = 0; col < n; col++) {
            if (!isInAttack(row, col, cur)) {
                cur.push([row, col])
                dfs(row + 1, [...cur])
                cur.pop()
            }

        }
    }

    function isInAttack(row, col, cur) {
        for (let [x, y] of cur) {
            if (row === x || col === y || Math.abs(row - x) === Math.abs(col - y)) return true
        }

        return false
    }

    function createBoard(queens) {
        let board = []

        for (let [row, col] of queens) {
            let temp = ''
            for (let c = 0; c < n; c++) {
                if (c !== col) {
                    temp += '.'
                } else {
                    temp += 'Q'
                }
            }
            board.push(temp)
        }

        return board
    }
}