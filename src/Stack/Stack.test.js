const Stack = require('./Stack')

describe('Stack测试', () => {
  const stack = new Stack()
  it('push测试', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.toString()).toBe('2,1')
  })
  it('pop测试', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    stack.pop()
    expect(stack.pop()).toBeNull()
    expect(stack.isEmpty()).toBeTruthy()
  })
  it('peek测试', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.peek()).toBe(2)
  })
  it('toArray测试', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.toArray()).toEqual([2,1])
  })
})