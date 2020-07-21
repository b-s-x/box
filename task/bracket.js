const arr = '{{{{}}}}}{}{}}{{{}}{}}}}}}}{}}}}{{{{{}{}{}{}{{}}{{{{}{}{}{{{}}{}{}}{}{}}{}{}{}}}{}{{{{}{}{}}}}{}{{}{}{}{}{}'

const literalCounter = (arr) => {
    let left = 0;
    let right = 0;

    arr = arr.split('');
    arr.forEach(elem => {   
        (elem == '{') ? left++ : right++
    });
    return right - left
}
console.time('one');
console.log(literalCounter(arr));
console.timeEnd('one');

// --------------------------------------------------------------

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
    }
    
    peek() {
      return this.storage[this.count];
    }
  
    size() {
      console.log(this.count);
      console.log(this.storage);
      return this.count;
    }
  }
  
class LiteralCounter {
    constructor(arr, stack) {
        this.arr = arr.split('');
        this.stack = stack;
    }

    count() {
        this.arr.forEach((elem) => {   
            (elem == '{') ? this.stack.push(elem) : this.stack.pop()
        });

        return this.stack.size()
    }
}

const stack = new Stack();
const counter = new LiteralCounter(arr, stack);

console.time('two');
counter.count();
console.timeEnd('two');
