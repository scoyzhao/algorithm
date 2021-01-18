/*
 * @Author: scoyzhao
 * @Date: 2021-01-18 19:21:56
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2021-01-18 19:29:24
 */

// Note 确保实例被创建一次

const Singleton = function (name) {
  this.name = name
}

Singleton.prototype.getName = function () {
  alert(this.name)
}

Singleton.getInstance = (function (name) {
  var instance
  return function () {
    if (!instance) {
      instance = new Singleton(name)
    }

    return instance
  }
})()

const a = Singleton.getInstance('ConardLi');
const b = Singleton.getInstance('ConardLi2');

console.log(a === b);   //true
