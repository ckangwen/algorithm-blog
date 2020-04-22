/**
 * 执行用时 116ms
 * 内存消耗 43MB
 */
module.exports = function firstUniqChar(s) {
  const hash = {}
  s = [...s]
  const result = new Map()
  s.forEach((t, i) => {
    if (!hash[t]) {
      hash[t] = 1
      result.set(t, i)
    } else {
      result.delete(t)
    }
  })

  if (result.size === 0) return -1
  return result.values().next().value
}