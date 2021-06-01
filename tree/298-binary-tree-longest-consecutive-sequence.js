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
var longestConsecutive = function (root) {

    if (root == null) return 0

    let longest = 1

    dfs(root)

    return longest

    function dfs(cur, prevVal = null, len = 1) {
        if (cur === null) return
        if (prevVal !== null && cur.val === prevVal + 1) {
            len++
        } else {
            len = 1
        }

        longest = Math.max(len, longest)

        dfs(cur.left, cur.val, len)
        dfs(cur.right, cur.val, len)

    }

};