/*
 * @Author: scoyzhao
 * @Date: 2021-01-13 14:38:14
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2021-01-13 15:02:30
 */


// Note 1.reduce实现
const flatten = (array) => {
  return array.reduce((target, current) => (
    Array.isArray(current) ?
      target = [...target, ...flatten(current)] :
      target = [...target, current]
  ), [])
}

// Note 2.指定深度
const flattenByDeep = (array, deep = 1) => {
  return array.reduce((target, current) => (
    Array.isArray(current) && deep > 1 ?
      target = [...target, ...flattenByDeep(current, deep - 1)] :
      target = [...target, current]
  ), [])
}

let arr = [1, 2, [3, 4, [5, [6, 7]]]]
console.log(flatten(arr))
console.log(flattenByDeep(arr, 2))
