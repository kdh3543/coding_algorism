function solution(quiz) {
  let answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let splitQuiz = quiz[i].split(" ");
    let num = 0;
    if (splitQuiz[1] === "+") {
      num = parseInt(splitQuiz[0]) + parseInt(splitQuiz[2]);
    } else {
      num = parseInt(splitQuiz[0]) - parseInt(splitQuiz[2]);
    }
    if (splitQuiz[3] === "=" && parseInt(splitQuiz[4]) === num) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }
  return answer;
}
