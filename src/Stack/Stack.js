const LinkedList = require('../LinkedList/LinkedList')

class Stack {
  constructor() {
    this.linkedList = new LinkedList()
  }
  isEmpty() {
    return !this.linkedList.head
  }

  // stack是先进后出类型，每次入栈的位置总是在栈顶
  push(value) {
    this.linkedList.prepend(value)
  }

  pop() {
    const head = this.linkedList.deleteHead()
    return head ? head.value : null
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Empty Stack')
    }
    return this.linkedList.head.value
  }

  toArray() {
    return this.linkedList.toArray()
  }

  toString() {
    return this.linkedList.toString()
  }
}

module.exports = Stack