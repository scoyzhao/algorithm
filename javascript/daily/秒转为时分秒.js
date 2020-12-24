/*
 * 秒转为时分秒，不用JS的API
 * @Author: scoyzhao
 * @Date: 2020-12-24 17:04:07
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-24 17:44:31
 */


const secondToTimeStr = (t) => {
  if (!t) {
    return '00:00:00'
  }

  if (t < 60) {
    return `00:00:${t < 10 ? `0${t}` : `${t}`}`
  }

  if (t < 3600) {
    let m = Number.parseInt(t / 60),
      s = t - m * 60

    return '00:' + `${m < 10 ? `0${m}` : m}` + ':' + `${s < 10 ? `0${s}` : s}`
  }

  if (t < 24 * 3600) {
    let h = Number.parseInt(t / 3600),
      m = Number.parseInt((t - h * 3600) / 60),
      s = Number.parseInt(t - h * 3600 - m * 60)

    return `${h < 10 ? `0${h}` : h}` + ':' +`${m < 10 ? `0${m}` : m}` + ':' + `${s < 10 ? `0${s}` : s}`
  }

  let d = Number.parseInt(Number.parseInt(t / (3600 * 24)))
  let s = t - d * 24 * 3600

  return `${d}天` + secondToTimeStr(s)
}
