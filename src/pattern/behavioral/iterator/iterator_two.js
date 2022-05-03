class Iterator {
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
  
  
  const run = () => {
    
    const collectionTwo = new Iterator(order);
  
    while(collectionTwo.hasNext()) {
        console.log(collectionTwo.next());
    };
  };
  
  run();
  