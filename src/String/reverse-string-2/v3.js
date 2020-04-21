/**
 * 直接翻转每个`2k`字符块
 * 每个块开始于`2k`的倍数，也就是2k、4k、6k。如果没有足够的字符，我们不需要翻转这个块
 * 为了翻转从i到j的块，我们可以交换i++和j--的字符
 * 时间复杂度: O(N),其中N是str的大小。我们建立了一个辅助数组，用来翻转str的一半字符
 * 空间复杂度: O(N),字符转换成的数组的大小
 */
function reverseStr(str, k) {
  const arr = str.split('')

  for(let start = 0; start < arr.length; start += 2 * k) {
    let i = start
    // j表示在本次循环中，i所能达到的最大值(2 * k + k - 1)，即每2k个字符块中前k个字符块
    let j = Math.min(start + k - 1, arr.length - 1)
    while(i < j) {
      const t = arr[i]
      arr[i++] = arr[j]
      arr[j] = t
    }
  }

  return arr.join('')
}
module.exports = reverseStr
