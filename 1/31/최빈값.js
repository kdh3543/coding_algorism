function solution(array) {
  array.sort((a, b) => a - b);
  let number = 0;
  let answer = 0;
  let occur = {};

  for (let v of array) {
    occur[v] = occur[v] ? occur[v] + 1 : 1;
  }

  for (const [key, value] of Object.entries(occur)) {
    if (value > number) {
      answer = parseInt(key);
      number = value;
    } else if (value == number) {
      answer = -1;
    }
  }
  return answer;
}
//for in --> 객체의 열거 가능한 속성들을 순회, key 값에 접근, 객체 사용
//for of --> 객체 순회, Array, Map, Set, arguments등이 해당(object x)
