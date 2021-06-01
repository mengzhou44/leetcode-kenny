/* 0-1 knapsack problem
For an overall introduction to knapsack problem, see https://en.wikipedia.org/wiki/Knapsack_problem
Function name: knapsack
Param:
  items: an array of {w: v:} (where 'w' stands for weight, and 'v' stands for value)
  capacity: a positive integer number
Will return max sum value that can reach, and the chosen subset to add up to the value.
Example:
var items = [{w:3,b:10},{w:1,b:3},{w:2,b:9},{w:2,b:5},{w:1,b:6}];
var capacity = 6;
console.log(knapsack(items, capacity));
will return
{ maxValue: 25,
  subset: [ { w: 1, v: 6 }, { w: 2, v: 9 }, { w: 3, v: 10 } ] }
*/

// function knapsack(items, capacity) {

//      let max = 0

//      dfs(0,capacity)

//      return max

//      function dfs(index,  cap, sum =0  ) {

//            if (index === items.length)  {
//                 max = Math.max(max, sum)
//                 return
//            }

//            if  (items[index].w<= cap) {
//                 dfs(index+1, cap-items[index].w, sum+items[index].b)
//            }

//            dfs(index+1, cap, sum)

//      }
// }


function  knapsack(items, capacity) {
    if (items === null || items.length === 0 || capacity === 0)  return  0
    let m= items.length
    let dp = new Array(m)
    for(let i=0; i<dp.length; i++) {
         dp[i] = new Array(capacity+1).fill(0)
    }

   for(let col=1; col<capacity+1; col++) {
        if (items[0].b<=capacity) {
            dp[0][col]= items[0].w
        }
   }

   for(let i=1;i<m; i++) {
        for(let c=1; c<=capacity; c++) {
             let profit1 = 0
             let profit2 = 0
             if (items[i].w<=c) {
                 profit1 = items[i].b + dp[i-1][c-items[i].w]
             }
             profit2= dp[i-1][c]
             dp[i][c] = Math.max(profit1, profit2)
        }
   }

   return dp[m-1][capacity]

}



var items = [{w:3,b:10},{w:1,b:3},{w:2,b:9},{w:2,b:5},{w:1,b:6}];
var capacity = 6;
console.log('result', knapsack(items, capacity));