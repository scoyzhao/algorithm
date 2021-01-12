/*
 * @Author: scoyzhao
 * @Date: 2021-01-12 21:01:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2021-01-12 21:21:38
 */

const filterNonUnique = arr => arr.filter(i =>
  arr.indexOf(i) === arr.lastIndexOf(i)
)
