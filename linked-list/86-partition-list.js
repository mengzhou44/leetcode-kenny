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
    let l2 = new ListNode(-1)
    let cur1 = l1
    let cur2 = l2

    let cur = head
    while (cur !== null) {
        let next = cur.next
        cur.next = null
        if (cur.val >= x) {
            cur1.next = cur
            cur1 = cur
        } else {
            cur2.next = cur
            cur2 = cur
        }
        cur = next
    }

    cur2.next = l1.next

    return l2.next

};