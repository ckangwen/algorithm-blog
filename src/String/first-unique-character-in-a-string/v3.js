/**
 * 执行用时 180ms
 * 内存消耗 42.9MB
 */
module.exports = function firstUniqChar(s) {
  s = [...s]
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}