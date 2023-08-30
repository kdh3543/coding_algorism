function solution(players, callings) {
  let playersObj = {};
  let reverseObj = {};
  players.map((v, i) => {
    playersObj[v] = i;
    reverseObj[i] = v;
  });
  callings.map((v) => switchObj(playersObj, reverseObj, v));
  return Object.entries(playersObj)
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0]);
}

function switchObj(obj, reverseObj, param) {
  let originNum = obj[param];
  let changeNum = obj[reverseObj[originNum - 1]];
  let originParam = reverseObj[originNum];
  let changeParam = reverseObj[changeNum];

  obj[originParam] = changeNum;
  obj[changeParam] = originNum;
  reverseObj[originNum] = changeParam;
  reverseObj[changeNum] = originParam;
}
