function solution(bridge_length, weight, truck_weights) {
  let arr = Array.from({ length: bridge_length }, () => 0);
  let answer = 0;
  let truck_value = 0;

  while (true) {
    arr.shift();
    let result = arr.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    if (result + truck_weights[0] <= weight) {
      truck_value = truck_weights.shift();
    } else {
      truck_value = 0;
    }
    arr.push(truck_value);
    answer++;
    if (
      arr.every((value) => {
        return value === 0;
      })
    )
      break;
  }
  return answer;
}
