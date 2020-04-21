/**
 * 双指针法
 * left指针和right指针分别指向首位元素，交换两个指针指向的元素，并向中间移动，直到两个指针相遇
 * 时间复杂度：O(N),执行了N/2次的交换
 * 空间复杂度：O(1)，只使用了常数级空间(额外空间规模不随输入数据变化)
 * 执行用时 : 132 ms, 在所有 JavaScript 提交中击败了76.60%的用户
 * 内存消耗 : 46.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
module.exports = function reverseString(arr) {
  let l = 0, r = arr.length - 1

  while(l <= r) {
    const t = arr[l]
    arr[l++] = arr[r]
    arr[r--] = t
  }
}