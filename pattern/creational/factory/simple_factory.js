class Cat {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  };

  getName() {
    return this._name;
  };

  getColor() {
    return this._color;
  };
};

const CatFactory = {
  makeCat: (name, color) => new Cat(name, color)
};

const barsik = CatFactory.makeCat('Barsik', 'black');

console.log(barsik);
console.log(barsik._name);
