function solution(wallpaper) {
  let boolArr = [];
  let answer = [
    wallpaper[0].split("").length,
    wallpaper[0].split("").length,
    0,
    0,
  ];

  for (let i = 0; i < wallpaper.length; i++) {
    boolArr.push(wallpaper[i].split("").some((v) => v === "#"));
    if (
      answer[1] > wallpaper[i].split("").indexOf("#") &&
      wallpaper[i].split("").indexOf("#") !== -1
    ) {
      answer[1] = wallpaper[i].split("").indexOf("#");
    }
    if (answer[3] < wallpaper[i].split("").lastIndexOf("#") + 1) {
      answer[3] = wallpaper[i].split("").lastIndexOf("#") + 1;
    }
  }
  answer[0] = boolArr.indexOf(true);
  answer[2] = boolArr.lastIndexOf(true) + 1;
  return answer;
}
