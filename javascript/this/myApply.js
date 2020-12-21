/*
 * 手动实现apply
 * @Author: scoyzhao
 * @Date: 2020-12-21 20:53:20
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-21 21:03:20
 */

Function.prototype.myApply = function (context = window, args) {
  if (typeof this !== 'function') {
    throw new Error(`${this.name} is not a function`)
  }

  // * 这两步是为了防止函数名重复
  const fn = Symbol()
  context[fn] = this
  let result
  if (Array.isArray(args)) {
    result = context[fn](...args)
  } else {
    result = context[fn]()
  }
  delete context[fn]

  return result
}
