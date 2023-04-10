function solution(today, terms, privacies) {
  let answer = [];
  let todayArr = today.split(".").map((val) => parseInt(val));
  let privaciesSplit = privacies.map((val) => val.split(" "));

  let termsDayArr = terms.map((val) => parseInt(val.split(" ")[1]));
  let termsTypeArr = terms.map((val) => val.split(" ")[0]);

  let dayArr = privaciesSplit.map((val) =>
    val[0].split(".").map((item) => parseInt(item))
  );
  let typeArr = privaciesSplit.map((val) => val[1]);

  for (let i = 0; i < dayArr.length; i++) {
    for (let j = 0; j < termsTypeArr.length; j++) {
      if (termsTypeArr[j] === typeArr[i]) {
        dayArr[i][1] += termsDayArr[j];
      }
    }
  }
  for (let i = 0; i < dayArr.length; i++) {
    if (dayArr[i][1] > 12) {
      if (dayArr[i][1] % 12 === 0) {
        dayArr[i][0] += Math.floor(dayArr[i][1] / 12) - 1;
        dayArr[i][1] = 12;
        continue;
      }
      dayArr[i][0] += Math.floor(dayArr[i][1] / 12);
      dayArr[i][1] %= 12;
    }
  }
  for (let i = 0; i < dayArr.length; i++) {
    if (dayArr[i][0] > todayArr[0]) {
      continue;
    } else if (dayArr[i][0] === todayArr[0]) {
      if (dayArr[i][1] > todayArr[1]) {
        continue;
      } else if (dayArr[i][1] === todayArr[1]) {
        if (dayArr[i][2] > todayArr[2]) {
          continue;
        } else {
          answer.push(i + 1);
        }
      } else {
        answer.push(i + 1);
      }
    } else {
      answer.push(i + 1);
    }
  }
  return answer;
}
