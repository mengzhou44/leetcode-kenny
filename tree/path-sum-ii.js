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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    if (root === null) return []
    let res = []
    dfs(root, targetSum)
    return res

    function dfs(cur, target, path = []) {
        if (cur === null) return

        if (cur.val === target && cur.left === null && cur.right === null) {
            path.push(cur.val)
            res.push(path)
            return
        }

        dfs(cur.left, target - cur.val, [...path, cur.val])
        dfs(cur.right, target - cur.val, [...path, cur.val])
    }

};