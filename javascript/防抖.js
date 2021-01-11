/*
 * @Author: scoyzhao
 * @Date: 2021-01-11 21:03:12
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2021-01-11 21:18:02
 */

/**
 *在debounce函数中返回一个闭包，这里用的普通function，
  里面的setTimeout则用的箭头函数，这样做的意义是让this的指向准确，
  this的真实指向并非debounce的调用者，而是返回闭包的调用者。
 */

function debounce(event, time) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, args);
    }, time);
  };
}