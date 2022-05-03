class Iterator {
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

const run = () => {

  const elements = [1, '2', 3, '4', 5]

  const collection = new Iterator(elements)

  while(collection.hasNext()) {
      console.log(collection.next());
  }
}

run();
