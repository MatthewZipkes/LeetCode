/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null && l2 === null) {
    return l1
  } else if (l1 === null && l2 !== null) {
    return l2
  } else if (l1 !== null && l2 === null) {
    return l1
  }
  
let sortList;
  if (l1.val < l2.val) {
        sortList = new ListNode(l1.val)
        l1 = l1.next
      } else {
        sortList = new ListNode(l2.val) 
         l2 = l2.next
      }
  let head = sortList
    while (l1 !== null & l2 !== null) {
      if (l1.val < l2.val) {
        sortList.next = new ListNode(l1.val)
        l1 = l1.next
      } else {
        sortList.next = new ListNode(l2.val) 
         l2 = l2.next
      }
      sortList = sortList.next
    }

  sortList.next = l1 || l2
  return head
}
// set the head to the lowest val of l1 or l2 