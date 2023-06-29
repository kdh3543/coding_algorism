let d1 = '20070301'
let d2 = '20070515'
let sum = 0

let day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let daySum = day.reduce((a, b) => a + b, 0)
if (d1.slice(0, 4) !== d2.slice(0, 4)) {
  for (let i = 0; i < Math.abs(d1.slice(0, 4) - d2.slice(0, 4)); i++) {
    sum += daySum
  }
}
sum += Math.abs(dayAccount(day, d1) - dayAccount(day, d2))
console.log(sum)
function dayAccount(day, d) {
  return (
    day.slice(0, parseInt(d.slice(4, 6)) - 1).reduce((a, b) => a + b, 0) +
    parseInt(d.slice(6))
  )
}

// 다른 풀이
function subdate(date) {
  const 년 = parseInt(date.slice(0, 4))
  const 월 = parseInt(date.slice(4, 6))
  const 일 = parseInt(date.slice(6))
  const 월별일 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let 일수 = 년 * 365 + 일
  for (let i = 1; i < 월; i++) {
    일수 += 월별일[i]
  }
  return 일수
}

function solution(a, b) {
  return Math.abs(subdate(a) - subdate(b))
}
