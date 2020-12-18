/*
 * 寻找环形链表的入口点
 * @Author: scoyzhao
 * @Date: 2020-12-18 11:15:55
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-18 11:25:55
 */

/*
* 问题拆解：
* 1.链表是否有环？-> 两个指针一个比一个快一倍，如果其中一个为null没有相交，那么说明没有环
* 2.环的长度？ -> 从环内某个位置开始回到这个位置就是环的长度
* 3.入口点？ -> 一个指针先走环的长度，另一个开始走，相交的地方就是环入口
*/

function EntryNodeOfLoop(pHead) {
  if (!pHead || !pHead.next) {
    return null;
  }

  let p1 = pHead
  let p2 = pHead

  // 1.
  while (p1 !== p2) {
    if (p2 === null || p2.next === null) {
      return null
    }

    p1 = p1.next
    p2 = p2.next.next
  }

  // 2.
  let length = 1
  let temp = p1
  while (p1 !== temp) {
    p1 = p1.next
    length++
  }

  // 3.
  p1 = p2 = pHead
  while (length !== 0) {
    p1 = p1.next
  }

  while(p1 !== p2) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
}


