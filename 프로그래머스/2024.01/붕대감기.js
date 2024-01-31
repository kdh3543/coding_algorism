function solution(bandage, health, attacks) {
  let maximum = health;
  let last = attacks[attacks.length - 1][0];
  let attackList = attacks.map((v) => v[0]);
  let attackIndex = 0;
  let continueSuccess = 0;
  for (let i = 0; i <= last; i++) {
    if (health < 0) {
      health = -1;
      break;
    }
    if (attackList[attackIndex] === i) {
      health -= attacks[attackIndex][1];
      attackIndex++;
      continueSuccess = 0;
    } else {
      continueSuccess++;
      health++;
      if (continueSuccess === bandage[0]) {
        health += continueSuccess;
        continueSuccess = 0;
      }
      if (health > maximum) {
        health = maximum;
      }
    }
  }
  return health;
}
