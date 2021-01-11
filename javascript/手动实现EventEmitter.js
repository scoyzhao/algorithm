/*
 * @Author: scoyzhao
 * @Date: 2021-01-11 21:02:58
 * @Last Modified by:   scoyzhao
 * @Last Modified time: 2021-01-11 21:02:58
 */

class MyEventEmitter {
  events = {}
  maxListeners = 10

  addListener(event, listener) {
    if (this.events[event]) {
      return this.events[event].push(listener)
    }

    // TODO 超过maxListener警告
    return this.events[event] = [listener]
  }

  removeListener(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(fn => fn !== listener)
    }

    return false
  }

  setMaxListeners(n) {
    this.maxListeners = n
  }

  once(event, listener) {
    if (this.events[event]) {
      return this.events[event].push((...args) => {
        listener(...args)
        this.removeListener(event, listener)
      })
    }

    // TODO 超过maxListener警告
    return this.events[event] = [listener]
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].map(fn => {
        fn(...args)
      })
    }

    return false
  }
}

var emitter = new MyEventEmitter();

var onceListener = function (args) {
  console.log('我只能被执行一次', args);
}

var listener = function (args) {
  console.log('我是一个listener', args);
}

emitter.once('click', onceListener);
emitter.addListener('click', listener);

emitter.emit('click', '参数');
emitter.emit('click');

emitter.removeListener('click', listener);
emitter.emit('click');