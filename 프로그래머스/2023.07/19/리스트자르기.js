function solution(n, slicer, num_list) {
  var answer = []
  switch (n) {
    case (n = 1):
      answer = num_list.slice(0, slicer[1] + 1)
      break
    case (n = 2):
      answer = num_list.slice(slicer[0])
      break
    case (n = 3):
      answer = num_list.slice(slicer[0], slicer[1] + 1)
      break
    case (n = 4):
      num_list = num_list.slice(slicer[0], slicer[1] + 1)
      answer = num_list.filter((_, i) => i % slicer[2] === 0)
      break
  }
  return answer
}
