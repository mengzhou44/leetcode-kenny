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
 * @return {number[]}
 */
 var findFrequentTreeSum = function(root) {

    if (root === null)  return []
    let sumMap = new Map()
    dfs(root)

   let maxCount = Array.from(sumMap.values()).sort((a,b)=> b-a)[0]

    let res= []
    for(let key of sumMap.keys()) {
         if (sumMap.get(key) === maxCount) {
             res.push(key)
         }
    }

    return res

   function  dfs(cur, map= new Map())  {
        if (cur === null)  return 0

        if (map.has(cur)) return map.get(cur)

        let sum = cur.val + dfs(cur.left, map) + dfs(cur.right,map)

        if (!sumMap.has(sum)) {
            sumMap.set(sum, 1)
        } else {
            sumMap.set(sum, sumMap.get(sum)+1)
        }
        map.set(cur, sum)

        return sum

   }
};