/*
 * 输入一个链表，反转链表后，输出新链表的表头
 * @Author: scoyzhao
 * @Date: 2020-12-18 10:56:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-18 11:01:06
 */

// NOTE 使用前插法，以此把后面的节点查到第一个的前面，同时需要注意next的值

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

const reverseList = (head) => {
  let currentNode = null
  let headNode = head
  while (head && head.next) {
    currentNode = headNode.next
    headNode.next = currentNode.next
    currentNode.next = headNode
    currentNode = headNode
  }

  return head
}
