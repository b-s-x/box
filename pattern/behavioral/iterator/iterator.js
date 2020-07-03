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

const collectionOne = new IteratorOne(['1', '2', '3', '4', '5'])

while(collectionOne.hasNext()) {
  console.log(collectionOne.next());
}

// __________________________________________________________

class IteratorTwo {
  constructor(elements) {
    this._index = 0;
    this._keys = Object.keys(elements);
    this._elements = elements;
  }

  next() {
    return this._elements[this._keys[this._index++]];
  }

  hasNext() {
    return this._index < this._keys.length
  }
};

const autos = {
  audi: { model: 'Audi', color: 'black', price: '20000'},
  bmw: { model: 'BMW', color: 'white', price: '30000'},
  tesla: { model: 'Tesla', color: 'black', price: '40000'},
};

const collectionTwo = new IteratorTwo(autos);

while(collectionTwo.hasNext()) {
  console.log(collectionTwo.next());
};
