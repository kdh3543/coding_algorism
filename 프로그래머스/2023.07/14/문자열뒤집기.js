function solution(my_string, s, e) {
  var answer = ''
  return my_string.split([...my_string].slice(s, e + 1).join('')).join(
    [...my_string]
      .slice(s, e + 1)
      .reverse()
      .join('')
  )
}
