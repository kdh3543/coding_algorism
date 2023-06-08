function solution(n) {}

let arr = ['09:12:23 11:14:35', '10:34:01 13:23:40', '10:34:31 11:20:10']
let time = '11:05:20'
let date = '2022-01-01T'
let count = 0

let arrStamp = arr.map((v) =>
  v.split(' ').map((t) => new Date(date + t + 'Z').getTime())
)

let timeStamp = new Date(date + time + 'Z').getTime()
arrStamp.map((v) => (v[0] <= timeStamp && v[1] >= timeStamp ? count++ : ''))
console.log(count)

// 다른풀이
// 굳이 타임스탬프로 안바꾸고 그냥 split join으로 비교해도 됨
let t = '10:35:00'
t = t.split(':').join('')
let c = 0

for (let log of arr) {
  let 출근 = log.split(' ')[0].split(':').join('')
  let 퇴근 = log.split(' ')[1].split(':').join('')
  if (출근 <= t && t <= 퇴근) {
    c++
  }
}
console.log(c)
