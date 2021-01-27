const WEEK_DAY_OFFSET = 2

export default () => {
  const weekDay = Math.floor(Math.random() * 7) - 1
  const realWeekDayNumber = weekDay + WEEK_DAY_OFFSET
  const dayName = getName(realWeekDayNumber)
  console.log(dayName)
}

const getName = day => {
  const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return WEEK_DAYS[day - 1]
}
