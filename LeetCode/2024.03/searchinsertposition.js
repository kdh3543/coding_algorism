/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let answer = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      answer = i;
      break;
    }
  }
  if (answer === null) {
    answer = nums.length;
  }
  return answer;
};
