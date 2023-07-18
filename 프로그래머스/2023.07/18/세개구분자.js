function solution(myStr) {
  return myStr.split(/[a-c]/g).filter((v) => v !== '').length === 0
    ? ['EMPTY']
    : myStr.split(/[a-c]/g).filter((v) => v !== '')
}
