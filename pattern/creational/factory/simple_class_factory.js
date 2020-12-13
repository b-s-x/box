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
  
class CatFactory {
    make(name, color) {
        return new Cat(name, color)
    }
};

const cat = new CatFactory();
const barsik = cat.make('Barsik', 'black');

console.log(barsik);
console.log(barsik._name);
  