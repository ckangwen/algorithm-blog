/**
 * 执行用时 128ms
 * 内存消耗 43.3MB
 * 哈希表计数
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
module.exports = function canConstruct(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false
  let arr = [...magazine]
  let hash = {}
  arr.forEach(t => {
    hash[t] = (++hash[t]) || 1
  })
  arr = [...ransomNote]
  arr.forEach(t => {
    if (hash[t] == null) {
      hash[t] = -1
    } else {
      hash[t] = --hash[t]
    }

  })
  return Object.values(hash).every(t => t >= 0)
}