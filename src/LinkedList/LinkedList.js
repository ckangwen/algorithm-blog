class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }

  value(cb) {
    return cb ? cb(this.value) : this.value
  }

  toString() {
    return this.value.toString()
  }
}

class LinkedList {
  constructor(comparatorFunction) {
    this.head = null
    this.tail = null
    this.length = 0
  }

  size() {
    return this.length
  }

  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 链接入链表
      this.tail.next = newNode
      // 链表最后一个元素改变，更新tail指针
      this.tail = newNode
    }

    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds')
    }

    let node = this.head
    for (let i = 1; i <= index; i++) {
      node = node.next
    }

    return node
  }

  delete(value) {
    if (!this.head) return null

    let prev = null

    while(this.head.value === value) {
      prev = this.head
      this.head = this.head.next
    }

    let curr = this.head

    while(curr) {
      if (curr.value === value) {
        prev.next = curr.next
        // 如果当前值是待删除的值，那么prev节点不需要改变
        curr = curr.next
      } else {
        prev = curr
        curr = curr.next
      }
    }

    if (this.tail.value === value) {
      prev.next = null
      this.tail = prev
    }

    this.length--
    return this
  }

  deleteByIndex(index) {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds')
    }

    let curr = this.head
    let prev = null

    if (index === 0) {
      this.head = this.head.next
    } else {
      let i = 0
      while(curr && i < index) {
        prev = curr
        curr = curr.next
        i++
      }

      if (this.tail === curr) {
        this.tail = prev
      }
      // 如果是tail，则this.tail = null
      prev.next = curr.next
    }


    this.length --
    return curr
  }

  reverse() {
    let curr = this.head
    let prev = null
    let next = null

    while(curr) {
      // 存储下一个节点
      next = curr.next
      // 将当前节点的next指向prev
      curr.next = prev

      // 指定next之后，将prev指向自身，用作下一次使用
      prev = curr
      curr = next
    }

    // 重置head、tail指针
    this.tail = this.head
    this.head = prev
    return this
  }

  deleteTail() {
    const tail = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return tail
    } else {
      this.deleteByIndex(this.length - 1)
    }

    this.length--

    return tail
  }

  deleteHead() {
    if (!this.head) { return null }

    const head = this.head
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    this.length--

    return head
  }

  fromArray(values) {
    values.forEach(item => {
      this.append(item)
    })
    return this
  }

  toArray() {
    const nodes = []
    let curr = this.head
    while(curr) {
      nodes.push(curr.value)
      curr = curr.next
    }

    return nodes
  }

  toString() {
    return this.toArray().map(item => item.toString()).toString()
  }
}

module.exports =  LinkedList