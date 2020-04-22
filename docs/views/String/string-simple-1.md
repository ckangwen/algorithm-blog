---
title: 字符串-简单-1-10
date: 2020-04-21
tags:
 - 字符串
 - 简单
categories:
 - 字符串
---

## 赎金信

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/ransom-note

给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)

```js
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

### 排序与双指针
题目要求`magazine`中的字母是否可以构成`ransom`，且`magazine`中的同个字符不能被重复使用。那么对于`ransom`中的字符，都去`magazine`中查找是否存在。

用暴力查找太慢，将`magazine`和`ransom`字符串转换为数组有序化排列，双指针分别指向两个字符数组的第一个字符，依次对比，双指针一起移动。

本次字符查找需要在索引不会越界的情况下进行循环，循环过程中会产生三种情况:

(为了便于识别，现将`magazine`和`ransom`上的指针分别命名为`i`和`j`)

1. 如果两个字符相等，则统一后移。

2. 如果`magazine[i]`大于`ransom[j]`，则表示`magazine`中该字符个数多余`ransom`中的字符，只需要将`magazine`的指针后移，继续比较的操作。

3. 如果如果`magazine[i]`小于`ransom[j]`，则表示`magazine`中该字符个数少于`ransom`中的字符，因为字符不能被复用，所以无法构成结果，退出循环。



当循环结束后，如果`i === r.length`，说明循环正常的执行了下去，对于`ransom`中的每个字母都在`magazine`中找到对应的字母，返回`true`，否则返回`false`。



```js
function canConstruct(ransomNote, magazine) {
  let rArr = [...ransomNote].sort()
  let mArr = [...magazine].sort()
  let i = 0, j = 0

  while(i < rArr.length && j < mArr.length) {
    if (rArr[i] < mArr[j]) {
      // 表示ransomNote中该字符的个数大于magazine中的字符个数
      // 不满足条件，终止循环
      return false
    } else if (rArr[i] > mArr[j]) {
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
```



### 哈希表计数

分别统计`ransom`和`magazine`中各个字符出现的次数，如果`ransom`中每个字符出现的次数均不大于`magazine`中对于字符的个数，则可以构成，返回`true`。

设置一个对象，使用字母为键，该字母出现的次数为值，将字符串转换为数组进行遍历处理。

先统计`magazine`中各字符的数量，然后在遍历`ransom`时减去对应数量的值，若对象中字符数量存在负数，则表示`magazine`的字符数量不满足`ransom`的字符数量，不能构成。

```js
function canConstruct(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false
  let arr = [...magazine]
  let hash = {}
  arr.forEach(t => {
    hash[t] = (++hash[t]) || 1
  })
  arr = [...ransomNote]
  arr.forEach(t => {
    if (hash[t] == null) {
      hash[t] = -1
    } else {
      hash[t] = --hash[t]
    }

  })
  return Object.values(hash).every(t => t >= 0)
}
```



### 索引查找

首先，是判定`magazine`的长度是否小于`ransom`，如果小于那么一定是false

之后，它实际上是遍历了`ransom`当中的所有字符，然后在`map`中保存的并非是`magazine`中每类字母的个数，而是在对应当前字符在`magazine`中每类字母应该遍历的起始位置。如果`index === -1`则表示在`magazine`中从`map`指定的遍历位置开始没有找到一样的字符，则输出false。

```js
function canConstruct(ransomNote, magazine) {
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
```


