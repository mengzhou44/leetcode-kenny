/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let map = new Map()
    let indegree = new Array(numCourses).fill(0)

    for (let [toTake, preq] of prerequisites) {
        if (!map.has(preq)) {
            map.set(preq, [])
        }
        map.get(preq).push(toTake)
        indegree[toTake]++
    }

    let queue = []
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }
    let order = []
    while (queue.length > 0) {
        let course = queue.shift()
        order.push(course)
        if (map.has(course)) {
            for (let toTake of map.get(course)) {
                indegree[toTake]--

                if (indegree[toTake] === 0) {
                    queue.push(toTake)
                }
            }
        }
    }

    return numCourses === order.length
};



 var canFinish = function(numCourses, prerequisites) {
    let map = new Map()
    for(i=0; i<numCourses; i++) {
         map.set(i, [])
    }

    for(let [toTake, preq] of prerequisites) {
        map.get(preq).push(toTake)
    }

    let visited = new Array(numCourses).fill(0)

    for(let i=0; i<numCourses; i++) {
         if (visited[i] === 0) {
              if (!dfs(i)) return false
         }
    }

    return true

    function dfs(course) {

        if (visited[course] === 1)   return  true

        if (visited[course] === -1)   return false

        visited[course] = -1

       for(let c of map.get(course)) {
                  if (visited[c] === 1) continue
                  if (!dfs(c)) return false
       }

        visited[course] = 1

        return true
    }
};
