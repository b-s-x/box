class IteratorOne {
  constructor(elements) {
      this._index = 0;
      this._elements = elements
  }

  next() {
      return this._elements[this._index++]
  }

  hasNext() {
      return this._index < this._elements.length;
  }
}

const runOne = () => {

  const elements = [1, '2', 3, '4', 5]

  const collection = new IteratorOne(elements)

  while(collection.hasNext()) {
      console.log(collection.next());
  }
}

runOne();

// __________________________________________________________

class IteratorTwo {
  constructor(arr) {
      this._index = 0;
      this._keys = Object.keys(arr);
      this._arr = arr;
  }

  next() {
      return this._arr[this._keys[this._index++]];
  }

  hasNext() {
      return this._index < this._keys.length;
  }
};

const order = {
  bigMac: { type: 'burger', size: '2', price: '139'},
  makNaggets: { type: 'naggets', quantity: '6', price: '90'},
  fries: { type: 'fries', size: 'standard', price: '69'},    
  makCoffee: { type: 'coffee', size: 'standard', price: '89', sugar: false},    
};


const runTwo = () => {
  
  const collectionTwo = new IteratorTwo(order);

  while(collectionTwo.hasNext()) {
      console.log(collectionTwo.next());
  };
};

runTwo();
