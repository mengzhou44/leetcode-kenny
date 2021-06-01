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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) return []
    let res = []

    let array = [root]
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let level = []
        while (count < levelSize) {
            let node = array.shift()
            level.push(node.val)
            if (node.left !== null) {
                array.push(node.left)
            }

            if (node.right !== null) {
                array.push(node.right)
            }

            count++
        }

        res.push(level)
    }

    return res
};