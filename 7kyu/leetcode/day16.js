//stack problem

class Stack {
    constructor(){
      this.storage = {}
      this.size = 0
    }
    push(element){
      this.size++
      this.storage[this.size] = element
    }
    pop(){
      let removed = this.storage[this.size]
      delete this.storage[this.size]
      this.size--
      return removed
    }
    peek(){
      return this.storage[this.size]
    }
  }
  
  const stack = new Stack()
  
  stack.push('apple')
  stack.push('banana')
  stack.push('plum')
  
  stack.pop()

//queue problem

class Queue {
    constructor() {
      this.storage = {}
      this.head = 0
      this.tail = 0
    }
    enqueue(element) {
      this.storage[this.tail] = element
      this.tail++
    }
    dequeue() {
      let removed = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      return removed
    }
  }
  
  const queue = new Queue()
  
  queue.enqueue('apple')
  queue.enqueue('banana')
  queue.enqueue('blueberry')
  
  queue.dequeue('apple')
  
  queue.enqueue('strawberry')

  //linked list problem
  //data points to the next bit of data continiously

  //queue practice
  class Queue {
    constructor() {
      this.storage = {}
      this.head = 0
      this.tail = 0
    }
    enqueue(element) {
      this.storage[this.tail] = element
      this.tail++
    }
    dequeue() {
      let removed = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      return removed
    }
  }
  
  const queue = new Queue()
  
  queue.enqueue('apple')
  queue.enqueue('banana')
  queue.enqueue('blueberry')
  
  queue.dequeue('apple')
  
  queue.enqueue('strawberry')