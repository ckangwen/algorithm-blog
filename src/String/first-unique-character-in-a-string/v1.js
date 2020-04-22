/**
 * 执行用时 208ms
 * 内存消耗 43.1MB
 */
module.exports = function firstUniqChar(s) {
  s = [...s]
  let map = {}
  s.forEach(t => {
    map[t] = (++map[t]) || 1
  })
  return s.indexOf(Object.keys(map).find(t => map[t] == 1))
}