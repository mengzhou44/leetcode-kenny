/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    if (preorder.length === 0) return null
    if (preorder.length === 1) return new TreeNode(preorder[0])

    let rootval = preorder[0]
    let root = new TreeNode(rootval)
    let leftInorder = inorder.slice(0, inorder.indexOf(rootval))
    let rightInorder = inorder.slice(inorder.indexOf(rootval) + 1)

    let leftPreorder = preorder.slice(1, leftInorder.length + 1)
    let rightPreorder = preorder.slice(1 + leftInorder.length)

    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)

    return root

};