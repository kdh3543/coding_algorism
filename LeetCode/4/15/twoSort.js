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
var mergeTwoLists = function (list1, list2) {
  let list = new ListNode()
  let ch = list
  console.log(ch)
  if (list1.length !== 0) {
    return list1.concat(list2).sort((a, b) => a - b)
  } else if (list2.lenth !== 0) {
    return list2.concat(list1).sort((a, b) => a - b)
  } else {
    return []
  }
}

console.log(mergeTwoLists([1], [1, 2, 3]))

let list1 = []
let list2 = []
let arr = new ListNode()

console.log(arr)
