/*
 * 手动实现call
 * @Author: scoyzhao
 * @Date: 2020-12-21 20:26:16
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-21 20:56:58
 */

Function.prototype.myCall = function(context = window, ...args) {
  if (typeof this !== 'function') {
    throw new Error(`${this.name} is not a function`)
  }

  // * 这两步是为了防止函数名重复
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete content[fn]

  return result
}

