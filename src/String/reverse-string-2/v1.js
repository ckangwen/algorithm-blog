function reverseByPart(str, start, end) {
  let l = start, r = end - 1
  while(l < r) {
    let t = str[l]
    str[l++] = str[r]
    str[r--] = t
  }
}

/**
 * 执行用时 :88 ms
 * 内存消耗 :37.5 MB
 */
function reverseStr(str, k) {
  let arr = [...str]
  let k2 = 2 * k
  let rest = arr.length % k2
  console.log(rest)
  // 向上取整
  let len = Math.ceil(arr.length / k2)
  for(let i = 0; i < len; i++) {
    if (i === len - 1 && rest !== 0 && rest < k) {
      // 不足k个字符，全部反转
      reverseByPart(arr, i * k2, arr.length)
    } else {
      reverseByPart(arr, i * k2, i * k2 + k)
    }
  }
  return arr.join('')
}

module.exports = reverseStr