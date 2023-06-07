let price = 10
let cap = 150
let plusprice = 3
let pluscap = [30, 70, 15, 40, 65]

let answer = Math.floor(cap / price)
pluscap.sort((a, b) => b - a)
for (let i = 0; i < pluscap.length; i++) {
  price += plusprice
  cap += pluscap[i]
  if (answer < Math.floor(cap / price)) {
    answer = Math.floor(cap / price)
  } else {
    break
  }
}

console.log(answer)
