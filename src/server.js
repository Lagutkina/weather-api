const WEEK_DAY_OFFSET = 2

export default () => {
  const weekDay = Math.floor(Math.random() * 7) - 1
  const realWeekDayNumber = logRealWeekDay(weekDay)
  const dayName = getName(realWeekDayNumber)
  console.log(dayName)
}

const logRealWeekDay = weekDay => {
  const realWeekDay = summ(weekDay, WEEK_DAY_OFFSET)
  // console.log('Real day = ' + realWeekDay)
  return realWeekDay
}

const summ = (a, b) => {
  return a + b
}

const getName = day => {
  if (day === 1) {
    return 'Mon'
  }
  if (day === 2) {
    return 'Tue'
  }
  if (day === 3) {
    return 'Wed'
  }
  if (day === 4) {
    return 'Thu'
  }
  if (day === 5) {
    return 'Fri'
  }
  if (day === 6) {
    return 'Sat'
  }
  if (day === 7) {
    return 'Sun'
  }
}
