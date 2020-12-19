/*
 * 0,1,...,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字
 * @Author: scoyzhao
 * @Date: 2020-12-19 16:10:43
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-19 17:46:23
 */

/*
 * 有几种解法：
 * 1. 数组：每次计算下标
 * 2. 链表：环形链表，到某个数字就跳过就好
 * 3. 迭代，需要推导关系
 */

// 2 时间复杂度O(n * m)，空间复杂度O(n)
const LastRemaining_Solution = (n, m) => {
  if (n < 1 || m < 1) {
    return -1
  }

  const head = { val: 0 }
  let current = head
  for (let i = 1; i < n; i++) {
    current.next = { val: i }
    current = current.next;
  }
  current.next = head;

  while (current !== current.next) {
    for (let i = 0; i < m - 1; i++) {
      current = current.next;
    }

    current = current.next.next
  }

  return current.val
}

// 3 递归
// 可以得出一个结论，前一个存活的 + m 就是下一个存活的，这个就是推导公式
// 即 f(n, m) = (f(n - 1, m) + m) % n
const LastRemaining_Solution = (n, m) => {
  return n === 1 ? 1 : (f(n - 1) + m) % n
}


