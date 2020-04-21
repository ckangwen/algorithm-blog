/**
 * @param{Array} c 需要反转的字符数组
 * @description
 * https://leetcode-cn.com/problems/reverse-string/
 *  原地反转字符串
 * @returns {void}
 * @example
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 */
// const reverseString = require('./v1')
// const reverseString = require('./v2')
// const reverseString = require('./v3')
const reverseString = require('./v4')

let arr = ['h','e','l','l','o']
reverseString(arr)
console.log(arr)