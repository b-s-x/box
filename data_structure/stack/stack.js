class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++
  }

  pop() {
    if(this.count === 0) return;
    this.count--
    delete this.storage[this.count];
    return this.storage
  }
  
  peek() {
    console.log(this.storage);
    return this.storage[this.count - 1];
  }

  size() {
    console.log(this.count);
    return this.count;
  }
}
  
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  stack.peek();
  stack.size();
  