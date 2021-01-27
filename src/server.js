export default () => {
  // два числа от 0 до 10. Если первое больше второго - вывести разницу, если наоборот - вывести сумму
  const a = Math.floor(Math.random() * 11)
  const b = Math.floor(Math.random() * 11)
  const result = getResult(a, b)
  console.log(a, b, result)
}

const getResult = (a, b) => {
  if (a > b) {
    return a - b
  } else {
    return a + b
  }
}
