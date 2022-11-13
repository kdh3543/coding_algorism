function solution(arr1, arr2) {
  return arr1.map((a, index)=>
  a.map((b,index2)=>b+ arr2[index][index2]));
}

