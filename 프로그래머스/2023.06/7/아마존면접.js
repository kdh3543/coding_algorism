function solution(arr) {
  let answer = []
  return answer
}

let arr = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5']
let arr2 = arr.splice(0, arr.length / 2)
let answer = []

arr2.map((v, i) => answer.push(v, arr[i]))

console.log(answer)

/* 
  알아놓으면 유용한 방법
  const zip = (a,b)=> a.map((v,i) => [v , b[i]])

  --> zip([1,2,3,4,5],[2,4,6,8,10])
  ==> [[1,2],[2,4],[3,6],[4,8],[5,10]]
*/
