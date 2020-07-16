class Queue {
    constructor() {
      this.collection = [];
    }
  
    print() {
      console.log(this.collection);
    }
  
    enqueue(element) {
      this.collection.push(element);
    }
  
    dequeue() {
      return this.collection.shift();
    }
  
    clean() {
      return this.collection.length = 0;
    }
  
    size() {
      console.log(this.collection.length);
      return this.collection.length;
    }
  }
  
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.print();
  
  queue.dequeue();
  queue.print();
  queue.size();