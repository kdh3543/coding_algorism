function solution(park, routes) {
  let parkArr = park.map((v) => v.split(""));

  let start = { x: 0, y: 0 };
  park.map((v, i) => {
    if (v.indexOf("S") !== -1) {
      start.x = i;
      start.y = v.indexOf("S");
    }
  });

  for (let i = 0; i < routes.length; i++) {
    const routesUnit = routes[i].split(" ");
    const unitNum = parseInt(routesUnit[1]);
    const direction = routesUnit[0];
    let j = 0;
    const originStart = { ...start };
    while (j < unitNum) {
      j++;
      switch (direction) {
        case "E":
          start.y += 1;
          break;
        case "W":
          start.y -= 1;
          break;
        case "S":
          start.x += 1;
          break;
        case "N":
          start.x -= 1;
          break;
      }
      if (
        start.y > park[0].length - 1 ||
        start.y < 0 ||
        start.x > park.length - 1 ||
        start.x < 0 ||
        parkArr[start.x][start.y] === "X"
      ) {
        start = originStart;
        break;
      }
    }
  }
  return [start.x, start.y];
}
