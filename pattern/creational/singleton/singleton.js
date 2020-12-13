class Singleton {
  constructor(name) {
    if(Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;

    this._name = name;

    return this;
  }

  getName() {
    return this._name;
  }
}

const instanceOne = new Singleton('One');
// Singleton.instance = null
const instanceTwo = new Singleton('Two');
const instanceThree = new Singleton('');

console.log(`Name of instance: ${instanceOne.getName()}`);
console.log(`Name of instance: ${instanceTwo.getName()}`);
console.log(`Name of instance: ${instanceThree.getName()}`);
