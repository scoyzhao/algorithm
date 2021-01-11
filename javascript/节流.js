/*
 * @Author: scoyzhao
 * @Date: 2021-01-11 21:18:29
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2021-01-11 21:20:34
 */

function throttle(event, time) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        event.apply(this, args);
      }, time);
    }
  }
}
