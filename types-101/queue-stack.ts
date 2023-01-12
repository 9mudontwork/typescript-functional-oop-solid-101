class Queue<T> {
  items: Array<T> = []

  enqueue(item: T) {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    return this.items.shift()
  }
}

class Stack<T> {
  items: Array<T> = []

  push(item: T) {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }
}

;(() => {
  const items = [1, 2, 3, 4, 5]
  const queue = new Queue<number>()
  const stack = new Stack<string>()

  items.forEach((i) => {
    return queue.enqueue(i)
  })

  console.log('queues', queue.items)
  console.log(queue.dequeue())
  console.log('queues', queue.items)

  items.forEach((i) => {
    return stack.push(i.toString())
  })

  console.log('queues', stack.items)
  console.log(stack.pop())
  console.log('queues', stack.items)
})()

export {}
