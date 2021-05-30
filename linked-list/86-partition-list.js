/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    let l1 = new ListNode(-1)
    let cur0 = l1
    let l2 = new ListNode(-1)

    l2.next = head

    let cur = l2.next
    let prev = l2
    while (cur !== null) {
        if (cur.val >= x) {
            prev = cur
            cur = cur.next
        } else {
            let next = cur.next
            prev.next = next

            cur0.next = cur
            cur.next = null
            cur0 = cur

            cur = next
        }
    }

    cur0.next = l2.next

    return l1.next

};