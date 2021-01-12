/*
 * @Author: scoyzhao
 * @Date: 2021-01-12 21:02:37
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2021-01-12 21:21:09
 */

// fn.lengt 返回函数的参数个数

const currying = (fn, ...args1) => {
  if (args1.length >= fn.length) {
    return fn(...args1)
  }

  return (...args2) => currying(fn, ...args1, ...args2)
}

// const consoleTest = (a, b, c) => console.log(a, b, c)

// const curTest = currying(consoleTest)
// curTest(1)(2)(3)
// curTest(1, 2)(3)
// curTest(1, 2, 3)
