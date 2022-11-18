function solution(ingredient) {
  return ingredient.join('').indexOf('123',1) !== -1 ? ingredient.join('').indexOf('123',1) : 0;
}

const ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2]
console.log(ingredient.join('').indexOf('123',1))