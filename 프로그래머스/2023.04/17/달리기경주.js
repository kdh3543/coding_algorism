function solution(players, callings) {
  var answer = []
  return answer
}

let players = ['mumu', 'soe', 'poe', 'kai', 'mine']
let callings = ['kai', 'kai', 'mine', 'mine']
// let answer = ['mumu', 'kai', 'mine', 'soe', 'poe']

let answer = []

let map = new Map()

for (let i = 0; i < callings.length; i++) {
  // map.set(callings[i], map.has(callings[i]) ? map.get(callings[i]) + 1 : 1)
  // let num = players.findIndex((val) => val === callings[i])
  let num = 0
  for (let j = 0; j < players.length; j++) {
    if (players[j] === callings[i]) num = j
  }

  if (num === 0) continue
  let tmp = players[num]
  players[num] = players[num - 1]
  players[num - 1] = tmp
}
console.log(map)
console.log(players)
// let t = [1, 2, 3]

// let tmp = t[2]
// t[2] = t[1]
// t[1] = tmp
// console.log(t)
