/**
 * 创建唯一的字符串
 * @return {string} ojgdvbvaua40
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

// elementui日期时间范围 快捷选项
export const pickerOptionsRange = {
  shortcuts: [{
    text: '今天',
    onClick(picker) {
      const end = new Date()
      const start = new Date(new Date().toDateString())
      start.setTime(start.getTime())
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一周',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
}

// elementui月份范围 快捷选项
export const pickerOptionsRangeMonth = {
  shortcuts: [{
      text: '今年至今',
      onClick(picker) {
        const end = new Date()
        const start = new Date(new Date().getFullYear(), 0)
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近半年',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setMonth(start.getMonth() - 6)
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近一年',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setMonth(start.getMonth() - 12)
        picker.$emit('pick', [start, end])
      }
    }
  ]
}
