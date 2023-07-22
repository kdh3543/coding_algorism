function solution(order) {
  return order.reduce((a, b) => a + (b.includes('cafelatte') ? 5000 : 4500), 0)
}

let order = ['cafelatte', 'americanoice', 'hotcafelatte', 'anything']

console.log(
  order.reduce((a, b) => a + (b.includes('cafelatte') ? 5000 : 4500), 0)
)
