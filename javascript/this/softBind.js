/*
 * 软绑定：如果函数的this是全局或者undefined，就把它绑定到obj，否则不修改this(浏览器环境通过)
 * @Author: scoyzhao
 * @Date: 2020-12-21 19:52:11
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-21 20:25:14
 */

Function.prototype.softBind = function (obj) {
  if (typeof this !== 'function') {
    throw new Error(`${this.name} is not a function`)
  }

  const fn = this
  const curried = [].slice.call(arguments, 1)
  const bound = function () {
    return fn.apply(
      (!this || this === (window || global)) ? obj : this,
      curried.concat.apply(curried, arguments)
    )
  }
  bound.prototype = Object.create(fn.prototype)

  return bound
}

function foo() {
  console.log('name:', this.name)
}


const obj1 = { name: 'obj1' }
const obj2 = { name: 'obj2' }
const obj3 = { name: 'obj3' }

const fooOBJ = foo.softBind(obj1)
fooOBJ()

obj2.foo = foo.softBind(obj1)
obj2.foo()

fooOBJ.call(obj3)

setTimeout(obj2.foo, 10) // name: obj1

