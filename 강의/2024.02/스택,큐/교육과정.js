let schedule = "CBA";
let classes = "CADBGE";

let arr = schedule.split("");
let first = arr[0];
for (let x of classes) {
  if (x === first) {
    // console.log(arr);
    arr.shift();
    first = arr[0];
  }
}
console.log(arr.length === 0 ? "YES" : "NO");
