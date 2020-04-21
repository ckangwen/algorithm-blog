const LinkedList = require('./LinkedList')

describe('LinkedList Test', () => {
  const linkedList = new LinkedList()
  it('创建空的链表', () => {
    expect(linkedList.toString()).toBe('')
    expect(linkedList.head).toBeNull(null)
    expect(linkedList.tail).toBeNull(null)
  })
  it('append方法测试', () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(10)
    expect(linkedList.head.toString()).toBe('1')
    expect(linkedList.tail.toString()).toBe('10')
    expect(linkedList.toString()).toBe('1,2,10')
  })

  it('prepend方法测试', () => {
    linkedList.prepend(1)
    linkedList.prepend(10)
    linkedList.prepend(100)

    expect(linkedList.head.toString()).toBe('100')
    expect(linkedList.tail.toString()).toBe('1')
    expect(linkedList.toString()).toBe('100,10,1')
  })

  it('deleteByIndex测试', () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.prepend(3)
    // 3,1,2
    expect(linkedList.deleteByIndex(0).toString()).toBe('3')
    expect(linkedList.toString()).toBe('1,2')
    expect(linkedList.deleteByIndex(1).toString()).toBe('2')
    expect(linkedList.toString()).toBe('1')
  })

  it('delete方法测试', () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(1)
    linkedList.append(1)

    expect(linkedList.toString()).toBe('1,2,1,1')
    expect(linkedList.delete(1).toString()).toBe('2')
  })

  it('get方法测试', () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    expect(linkedList.get(0).toString()).toBe('1')
    expect(linkedList.get(2).toString()).toBe('3')
  })

  it('deleteHead和deleteTail方法测试', () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    expect(linkedList.deleteHead().toString()).toBe('1')
    expect(linkedList.deleteTail().toString()).toBe('3')
    expect(linkedList.toString()).toBe('2')
  })

  it('reverse方法测试', () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    expect(linkedList.reverse().toString()).toBe('3,2,1')
  })
  it('fromArray方法测试', () => {
    expect(linkedList.fromArray([2, 2, 2, 3, 4]).toString()).toBe('2,2,2,3,4')
  })

  it('toArray方法测试', () => {
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    expect(linkedList.toArray()).toEqual([1,2,3])
  })
})