function solution(ingredient) {
  let count = 0;
  for (let i = 0; i < ingredient.length-3; i++) {
    if ('' + ingredient[i]+ingredient[i+1]+ingredient[i+2]+ingredient[i+3]=== '1231') {
      ingredient.splice(i,4,'')
      i = -1
      count++
    }
  }
  return count;
}

let ingredient = [1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
let count = 0;
for (let i = 0; i < ingredient.length-3; i++) {
  if ('' + ingredient[i]+ingredient[i+1]+ingredient[i+2]+ingredient[i+3]=== '1231') {
    ingredient.splice(i,4)
    i = -1
    count++
  }
}
console.log(count)