function solution(order) {
  let num = [3, 6, 9]
  let count = 0
  Array.from(order.toString()).map((v) => {
    if (num.includes(parseInt(v))) count++
  })
  return count
}

// 다른 정답
let order = 29423

order.toString().match(/[369]/g).length
// ==> 런타임 에러가 발생할 수 있음
// 만약 length 앞이 null이면 런타임 에러 발생함
let value = order.toString().match(/[369]/g).length ?? []

// 2번 정답 set 사용
let s = new Set('369')
order
  .toString()
  .split('')
  .filter((v) => (v == '3' || v == '6' || v == '9' ? true : false)).length

// -> set을 사용해서 더 간편하게
order
  .toString()
  .split('')
  .filter((v) => s.has(v)).length
