function solution(new_id) {
  var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
  let splitId = new_id.replace(reg,'').toLowerCase().split('')

  while (true) {
    if (splitId[0] === '.') {
      splitId.shift()
    } else {
      break;
    }
  }
  for (let i = 0; i < splitId.length; i++){
    if (splitId[i] === '.' && splitId[i] === splitId[i + 1]) {
      splitId.splice(i + 1, 1)
      i = i - 1
    }
  }
  while (true) {
    if (splitId[splitId.length - 1] === '.'|| splitId.length > 15) {
      splitId.pop()
    } else {
      break;
    }
  }
      if (splitId.length === 0) {
    splitId.push('a')
  }

  while (true) {
    if (splitId.length<3) {
      splitId.push(splitId[splitId.length-1])
    } else {
      break;
    }
  }
  return splitId.join('');
}

let new_id = '...!@BaT#*......y.abcdefghijklm'
var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
let splitId = new_id.replace(reg,'').toLowerCase().split('')

while (true) {
  if (splitId[0] === '.') {
    splitId.shift()
  } else {
    break;
  }
}
for (let i = 0; i < splitId.length; i++){
  if (splitId[i] === '.' && splitId[i] === splitId[i + 1]) {
    splitId.splice(i + 1, 1)
    i = i - 1
  }
}
while (true) {
  if (splitId[splitId.length - 1] === '.'|| splitId.length > 15) {
    splitId.pop()
  } else {
    break;
  }
}
    if (splitId.length === 0) {
  splitId.push('a')
}

while (true) {
  if (splitId.length<3) {
    splitId.push(splitId[splitId.length-1])
  } else {
    break;
  }
}
console.log(splitId.join(''))
console.log(splitId.length)
