function solution(n, lost, reserve) {
  reserve = reserve.sort((a,b)=>a-b)
  lost = lost.sort((a,b)=>a-b)
  
  reserve.map((value, reserveIndex) => {
    lost.map((data, index) => {
      if (data === value) {
        lost.splice(index, 1)
        reserve.splice(reserveIndex, 1)
      }
    })
  })
  lost.map((value, index) => {
    reserve.map((data, reserveIndex) => {
      if (data === value) {
        lost.splice(index, 1)
        reserve.splice(reserveIndex, 1)
      }
    })
  })
  for (let i = 0; i <= n; i++) {
    
    reserve.map((value, reserveIndex) => {
      lost.map((data, index) => {
        if (value - 1 === data || value + 1 === data) {
          lost.splice(index, 1)
          reserve.splice(reserveIndex, 1)
        }
      })
    })
  }
  return n - lost.length;
}

const n = 7
  let reserve = [1,2,3,6]
  let lost = [2,3,4]

  reserve = reserve.sort((a,b)=>a-b)
  lost = lost.sort((a, b) => a - b)
  // reserve.map((value, reserveIndex) => {
  //   lost.map((data, index) => {
  //     if (data === value) {
  //       lost.splice(index, 1)
  //       reserve.splice(reserveIndex, 1)
  //     }
  //   })
  // })
  // lost.map((value, index) => {
  //   reserve.map((data, reserveIndex) => {
  //     if (data === value) {
  //       lost.splice(index, 1)
  //       reserve.splice(reserveIndex, 1)
  //     }
  //   })
  // })
for (let i = 0; i < reserve.length; i++){
  for (let j = 0; j < lost.length; j++){
    if (reserve[i] === lost[j]) {
      console.log(reserve[i], ' : ', lost[j])
      lost.splice(j, 1)
      // reserve.splice(i,1)
    }
  }
}
for (let i = 0; i <= n; i++) {
  
  reserve.map((value, reserveIndex) => {
    lost.map((data, index) => {
      if (value - 1 === data || value + 1 === data) {
        lost.splice(index, 1)
        reserve.splice(reserveIndex, 1)
      }
    })
  })
}
console.log(lost)
console.log(reserve)
console.log(n - lost.length)

