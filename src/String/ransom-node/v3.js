/**
 * 执行用时 72ms
 * 内存消耗 37.2MB
 */

module.exports = function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false

  const arr = [...ransomNote]
  const map = {}
  for(let i = 0; i < arr.length; i++) {
    let index = magazine.indexOf(arr[i], map[arr[i]] || 0)
    if (index > -1) {
      map[arr[i]] = index + 1
    } else {
      return false
    }
  }
  return true
}