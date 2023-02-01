function solution(participant, completion) {
  var answer = '';
  let participantArr = participant.sort()
  let completionArr = completion.sort()
  for (let i = 0; i < participant.length; i++){
    if (completionArr[i] !== participantArr[i]) {
      answer = participantArr[i]    
      break;
    }
  }
  return answer;
}