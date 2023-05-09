function solution(my_string, k) {
  let word = ''
  for (let i = 0; i < k; i++) {
    word += my_string
  }
  return word
}

// Array(100) - 빈 값 100개가 들어감
// '0'.repeat(100).split('') - 0 값 100개의 배열 생성
// Array(10).fill().map((_,i) => i+1) - 1 ~ 10 까지의 배열이 생성됨

// let initialval = 0
// reduce => array.reduce((accum, currval) => accum + currval, initialval)
