/*
 * @Author: scoyzhao
 * @Date: 2021-01-14 20:57:01
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2021-01-14 21:20:08
 */

// Note 因为有点像reduce，所以使用reduce实现

function compose(...fns) {
  let isFirst = true
  return (...args) => {
    return fns.reduceRight((result, fn) => {
      if (!isFirst) return fn(result)

      // Note 第一个调用的会走这里，因为参数可以是各种各样的，需要特殊化处理
      isFirst = false
      return fn(...result)
    }, args)
  }
}


const fn1 = () => { console.log(1) }
const fn2 = () => { console.log(2) }
const fn3 = (a) => { console.log(a) }

compose(fn1, fn2, fn3)(1)
