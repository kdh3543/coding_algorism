function solution(name, yearning, photo) {
  let result = Array.from({ length: photo.length }, (_) => 0)

  for (let i = 0; i < photo.length; i++) {
    photo[i].map((val) => {
      let num = name.findIndex((v) => v === val)
      if (num !== -1) result[i] += yearning[num]
    })
  }
  return result
}
