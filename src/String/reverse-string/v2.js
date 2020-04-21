/**
 * 递归
 * 时间复杂度: O(N)，执行了 N/2 次交换
 * 空间复杂度: O(N)，递归过程中使用的堆栈空间
 * 执行用时 :140 ms, 在所有 JavaScript 提交中击败了52.37%的用户
 * 内存消耗 :49.3 MB, 在所有 JavaScript 提交中击败了9.09%的用户
 */
module.exports = function reverseString(arr) {
  helper(arr, 0, arr.length - 1)
}

function helper(arr, left, right) {
  if (left <= right) {
    const t = arr[left]
    arr[left++] = arr[right]
    arr[right--] = t
    helper(arr, left, right)
  }
}