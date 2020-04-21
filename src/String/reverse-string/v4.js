/**
 * ES6结构赋值
 * 执行用时 :124 ms, 在所有 JavaScript 提交中击败了93.43%的用户
 * 内存消耗 :47.1 MB, 在所有 JavaScript 提交中击败了22.27%的用户
 */
module.exports = function reverseString(arr) {
  const len = arr.length
  for (let i = 0; i < len / 2; i++) {
    [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]]
  }
}