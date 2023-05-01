/*
操作时间
Moment.js 中文网
http://momentjs.cn/
 */
import moment from 'moment'

// moment转YYYY-MM-DD HH:mm:ss格式    这样调用formatDuration(initUpdateDuration())
export function formatDuration(duration, formatText = 'YYYY-MM-DD HH:mm:ss') {
  try {
    return {
      startTime: duration[0].format(formatText),
      endTime: duration[1].format(formatText),
    }
  } catch (e) {
    return {}
  }
}

// 昨天时间区间，但moment格式
export function initUpdateDuration() {
  return [
    moment()
      .subtract(1, 'days')
      .startOf('day'),
    moment()
      .subtract(1, 'days')
      .endOf('day'),
  ]
}
