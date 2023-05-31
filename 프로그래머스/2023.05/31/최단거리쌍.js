let S = [1, 3, 4, 8, 13, 17, 20]
let num = S[S.length - 1]
let answer = []
while (S.length !== 0) {
  let s = S.shift()
  if (num > S[0] - s) {
    answer = []
    answer.push(s, S[0])
    num = S[0] - s
  }
}

console.log(answer)

// 다른 풀이
let s = [1, 3, 4, 8, 13, 17, 20]
let index = 0
let minim = Infinity
for (let i = 1; i < S.length; i++) {
  if (s[i] - s[i - 1] < minim) {
    index = i
    minim = s[i] - s[i - 1]
  }
}

// 또 다른 풀이
let ss = s.slice(1)
s.map((v, i) => [v, ss[i]]).sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0]
