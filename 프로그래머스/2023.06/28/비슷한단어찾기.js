function OneEditApart(s1, s2) {
  while (splitS1.length !== 0 && splitS2.length !== 0) {
    if (splitS1[0] === splitS2[0]) {
      splitS1.shift()
      splitS2.shift()
      continue
    } else if (splitS1[splitS1.length - 1] === splitS2[splitS2.length - 1]) {
      splitS1.pop()
      splitS2.pop()
      continue
    } else {
      break
    }
  }

  return splitS1.length === 1 || splitS2.length === 1 ? true : false
}
