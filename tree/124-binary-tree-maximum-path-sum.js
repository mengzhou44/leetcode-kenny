/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let max = Number.MIN_SAFE_INTEGER

    dfs(root)

    return max

    function dfs(cur, map = new Map()) {
        if (cur === null) return 0

        if (map.has(cur)) {
            return map.get(cur)
        }

        let left = Math.max(0, dfs(cur.left, map))
        let right = Math.max(0, dfs(cur.right, map))

        let pathSum = cur.val + left + right

        max = Math.max(max, pathSum)

        let len = cur.val + Math.max(left, right)

        map.set(cur, len)

        return len
    }

};