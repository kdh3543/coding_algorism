function solution(n, arr1, arr2) {
  let answer = []
  for (let i = 0; i < arr1.length; i++){
    arr1[i] = arr1[i].toString(2).padStart(arr1.length, '0')
    arr2[i] = arr2[i].toString(2).padStart(arr2.length, '0')
    answer.push((parseInt(arr1[i]) + parseInt(arr2[i])).toString().padStart(arr1.length,'0'))
  }
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].toString().replace(/[1-2]/g, '#')
    answer[i] = answer[i].toString().replace(/0/g, ' ')
  }
  return answer;
}
