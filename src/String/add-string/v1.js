/**
 * 执行用时 72ms
 * 内存消耗 37.1MB
 * @param {string} num1
 * @param {string} num2
 */
module.exports = function addString(num1, num2) {
  let res = '', carry = 0
  let len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, 0)
  num2 = num2.padStart(len, 0)

  let sum = 0
  while(len--) {
    sum = Number(num1[len]) + Number(num2[len]) + carry
    carry = parseInt(sum / 10)
    res = sum % 10 + res
  }

  return sum >= 10 ? `1${res}`: res
}
