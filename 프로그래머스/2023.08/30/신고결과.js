function solution(id_list, report, k) {
  let setReport = [...new Set(report)];
  let reportingNum = {};
  let reportedNum = {};
  id_list.map((v) => {
    reportingNum[v] = 0;
    reportedNum[v] = 0;
  });

  for (let i = 0; i < setReport.length; i++) {
    let tmp = setReport[i].split(" ");
    reportedNum[tmp[1]]++;
  }

  for (let i = 0; i < setReport.length; i++) {
    let tmp = setReport[i].split(" ");
    if (reportedNum[tmp[1]] >= k) {
      reportingNum[tmp[0]]++;
    }
  }
  let answer = [];

  for (let key in reportingNum) {
    answer.push(reportingNum[key]);
  }
  return answer;
}

// 다른 풀이
let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;
let reports = [...new Set(report)].map((v) => v.split(" "));

let bad = new Map();
for (let i = 0; i < reports.length; i++) {
  bad.set(reports[i][1], bad.get(reports[i][1]) + 1 || 1);
}
let good = new Map();

for (let i = 0; i < reports.length; i++) {
  if (bad.get(reports[i][1]) >= k) {
    good.set(reports[i][0], good.get(reports[i][0]) + 1 || 1);
  }
}

// ㅁㅊ 개천재
let answer = id_list.map((a) => good.get(a) || 0);

console.log(bad, good, answer);
