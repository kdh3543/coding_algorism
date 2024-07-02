/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const k = 2;
let arr = [];
let j = nums.length - 1;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === k) {
    nums[i] = nums[--j];
    nums[--j] = k;
    arr.push(nums[--j]);
  } else {
    arr.push(nums[i]);
  }
}
console.log(arr);
