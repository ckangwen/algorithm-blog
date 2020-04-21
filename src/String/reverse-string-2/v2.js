/**
 * 执行用时：80ms
 * 内存消耗：37.5MB
 */
function reverseStr(str, k) {
  let len = Math.ceil(str.length / (2 * k))
  const arr = []
  for(let i = 0; i < len; i++) {
    arr.push(str.substr(i * 2 * k, 2 * k))
  }
  return arr.map(item => {
    if (item.length > k && item.length <= 2 * k) {
      return [...item.substr(0, k)].reverse().join('') + item.substr(k)
    } else {
      return [...item.substr(0, k)].reverse().join('')
    }
  }).join('')
}

module.exports = reverseStr
