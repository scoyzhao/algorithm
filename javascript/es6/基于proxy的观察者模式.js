/*
 * 函数自动观察数据对象的模式，一旦对象有变化，那么函数就执行
 * @Author: scoyzhao
 * @Date: 2020-12-23 15:37:05
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-23 15:44:38
 */


const observers = new Set()
const addObserver = fn => observers.add(fn)

const observable = obj => {
  obj, {
    set: (target, key, value, receiver) => {
      observers.forEach(observer => observer())
      return Reflect.set(target, key, value, receiver)
    }
  }
}
