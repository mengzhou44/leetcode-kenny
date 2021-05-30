/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null) return null

    if (head.next === null) return null

    let slow = head
    let fast = head

    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = slow.next

        if (slow === fast) {

            while (slow !== head) {
                slow = slow.next
                head = head.next
            }

            return slow
        }
    }

    return null
};