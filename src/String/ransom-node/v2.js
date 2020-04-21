/**
 * 排序与双指针
 * 执行用时 136ms
 * 内存消耗 43MB
 * @param {*} ransomNote
 * @param {*} magazine
 */
module.exports = function canConstruct(ransomNote, magazine) {
  let rArr = [...ransomNote].sort()
  let mArr = [...magazine].sort()
  let i = 0, j = 0

  // r: aaabb
  // m: aabb
  while(i < rArr.length && j < mArr.length) {
    if (rArr[i] < mArr[j]) {
      // aaabbb | aabb
      // 表示ransomNote中该字符的个数大于magazine中的字符个数
      // 不满足条件，终止循环
      return false
    } else if (rArr[i] > mArr[j]) {
      // aabb | aaabb
      // 表示ransomNote中该字符已经结束而magazine中该字符尚有剩余
      // magazine后移到下一个字符
      j++
    } else {
      // 字符一致，统一后移
      i++
      j++
    }
  }

  return i === rArr.length
}