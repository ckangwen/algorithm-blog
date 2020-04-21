/**
 * 执行用时 :132 ms, 在所有 JavaScript 提交中击败了76.60%的用户
 * 内存消耗 :46.8 MB, 在所有 JavaScript 提交中击败了100%的用户
 */
module.exports = function reverseString(arr) {
  const len = arr.length
  for(let i = 0; i < len / 2; i++) {
    let t = arr[i]
    arr[i] = arr[len - 1 - i]
    arr[len - i - 1] = t
  }
}