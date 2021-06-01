/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    if (root === null) return root

    let array = [root]

    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let cur = null

        while (count < levelSize) {

            let node = array.shift()
            if (cur !== null) {
                cur.next = node
            }
            cur = node

            if (node.left !== null) {
                array.push(node.left)
            }

            if (node.right !== null) {
                array.push(node.right)
            }

            count++
        }
    }
    return root
};