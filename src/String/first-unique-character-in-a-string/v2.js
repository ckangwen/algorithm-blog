/**
 * 执行用时 136ms
 * 内存消耗 42.9MB
 */
module.exports = function firstUniqChar(s) {
  s = [...s]
  let map = {}
  s.forEach(t => {
    map[t] = (++map[t]) || 1
  })
  for(let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i
    }
  }
  return -1
}