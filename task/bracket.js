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

class LiteralCounter {
  constructor(arr) {
      this.arr = arr.split('');
      this.stack = [];
  }

  count() {
      this.arr.forEach((elem) => {   
          (elem == '{') ? this.stack.push(elem) : this.stack.pop()
      });
      return this.stack.length
  }

  result() {
      this.count()

      if(this.stack.length == 0) return console.log('true')
      else return console.log('false')
  }

}

const counter = new LiteralCounter(arr);

counter.result();