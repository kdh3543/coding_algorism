function solution(nums) {
  var answer = 0;
  let result = [...new Set(nums)]
  if (nums.length / 2 < result.length) {
    answer = nums.length / 2
  } else {
    answer = result.length
  }
  return answer;
}
