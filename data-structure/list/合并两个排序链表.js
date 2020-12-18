/*
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则
 * @Author: scoyzhao
 * @Date: 2020-12-18 11:36:37
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-18 11:45:51
 */

// NOTE 取头节点最小的，和它的next以及另一个的头节点比较，循环往复，值得注意的是，停止条件，另外代码使用了递归～

const merge = (p1, p2) => {
  if (!p1) {
    return p2
  }

  if (!p2) {
    return p1
  }

  let head
  if (p1.val < p2.val) {
    head = p1
    head.next = merge(p1.next, p2)
  } else {
    head = p2
    head.next = merge(p1, p2.next)
  }

  return head
}
