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
 var rob = function(root) {

    if (root === null)  return  0
    let cache = new Map()
    return dfs(root)

   function dfs(cur) {
       if (cur === null)  return 0

       if (cache.has(cur)) return cache.get(cur)

       let  profit1 = dfs(cur.left) + dfs(cur.right)

       let profit2 = cur.val

       if (cur.left!==null)  {
            profit2 += dfs(cur.left.left) + dfs(cur.left.right)
       }

       if (cur.right!==null)  {
            profit2 += dfs(cur.right.left) + dfs(cur.right.right)
       }

       let profit = Math.max(profit1, profit2)
       cache.set(cur, profit)

       return profit
   }

};