interface IItemAble<T> {
  getItems(): Array<T>
  add(data: T): void
  getItemOut(): T | undefined
}

class Queue<T> implements IItemAble<T> {
  items: Array<T> = []

  enqueue(item: T) {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    return this.items.shift()
  }

  getItems = (): Array<T> => this.items
  add = (item: T) => this.enqueue(item)
  getItemOut = (): T => this.getItemOut()
}

class Stack<T> implements IItemAble<T> {
  items: Array<T> = []

  push(item: T) {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  getItems = (): Array<T> => this.items
  add = (item: T) => this.push(item)
  getItemOut = (): T => this.pop()
}

class Main<T> {
  ability: IItemAble<T>
  // constructor(ability: IItemAble<T>) {
  //   this.ability = ability
  // }
  addAbility(ability: IItemAble<T>) {
    this.ability = ability
  }
}

// ;(() => {
//   const items = [1, 2, 3, 4, 5]
//   const queue = new Queue<number>()
//   const stack = new Stack<string>()

//   items.forEach((i) => {
//     return queue.enqueue(i)
//   })

//   console.log('queues', queue.items)
//   console.log(queue.dequeue())
//   console.log('queues', queue.items)

//   items.forEach((i) => {
//     return stack.push(i.toString())
//   })

//   console.log('queues', stack.items)
//   console.log(stack.pop())
//   console.log('queues', stack.items)
// })()

;(() => {
  const items = [1, 2, 3, 4, 5]
  const queue = new Queue<number>()
  const stack = new stack<string>()

  const main = new Main()
})()

export {}
