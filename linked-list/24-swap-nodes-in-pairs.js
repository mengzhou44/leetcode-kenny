/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) return head

    let dummy = new ListNode(-1)
    dummy.next = head


    let p1 = dummy.next.next
    let p2 = dummy.next
    let prev = dummy

    while (p2 != null) {
        prev.next = p1
        let next = p1.next
        p1.next = p2
        p2.next = next
        prev = p2
        if (p2.next === null || p2.next.next === null) {
            break
        }
        p1 = p2.next.next
        p2 = p2.next
    }

    return dummy.next
};