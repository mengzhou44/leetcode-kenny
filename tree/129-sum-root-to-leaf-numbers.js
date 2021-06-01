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
var sumNumbers = function (root) {
    if (root === null) return 0
    let res = 0
    dfs(root)

    return res

    function dfs(cur, sum = 0) {
        if (cur === null) return

        sum = 10 * sum + cur.val

        if (cur.left === null && cur.right === null) {
            res += sum
            return
        }

        dfs(cur.left, sum)
        dfs(cur.right, sum)
    }
};