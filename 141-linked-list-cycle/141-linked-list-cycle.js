/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slowPointer = head;
  let fastPointer = head;
    while (fastPointer !== null && fastPointer.next !== null && fastPointer.next.next !== null) {
      if (slowPointer.next === fastPointer.next.next) {
        return true
      }
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    } 
  return false
};