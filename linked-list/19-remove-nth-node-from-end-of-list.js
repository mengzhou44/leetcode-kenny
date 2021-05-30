/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(-1)
    dummy.next = head

    let walker = dummy
    let runner = dummy

    let count = 0
    while (count < n) {
        runner = runner.next
        count++
    }

    if (runner === null) return dummy.next.next

    let prev = null
    while (runner !== null) {
        runner = runner.next
        prev = walker
        walker = walker.next
    }

    prev.next = walker.next

    return dummy.next
};