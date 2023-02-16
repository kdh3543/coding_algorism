function solution(spell, dic) {
  return dic.some((val) =>
    spell.every((item) => {
      return val.includes(item)
    })
  )
    ? 1
    : 2
}
