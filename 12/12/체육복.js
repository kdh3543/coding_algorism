function solution(n, lost, reserve) {
  let reserve1 = reserve.sort((a,b)=>a-b).filter(x => !lost.includes(x))
  let lost1 = lost.sort((a, b) => a - b).filter(x => !reserve.includes(x))

  for (let i = 0; i <= n; i++) {
    
    reserve1.map((value, reserveIndex) => {
      lost1.map((data, index) => {
        if (value - 1 === data || value + 1 === data) {
          lost1.splice(index, 1)
          reserve1.splice(reserveIndex, 1)
        }
      })
    })
  }
  return n - lost1.length;
}