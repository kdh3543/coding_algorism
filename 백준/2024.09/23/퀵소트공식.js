function sort(numList) {
  if (numList.length <= 1) return numList;
  const left = [];
  const right = [];
  const middle = numList[0];

  for (let i = 1; i < numList.length; i++) {
    if (middle < numList[i]) {
      left.push(numList[i]);
    } else {
      right.push(numList[i]);
    }
  }
  const sortedLeft = sort(left);
  const sortedRight = sort(right);

  return [...sortedLeft, middle, ...sortedRight];
}
