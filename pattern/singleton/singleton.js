class Singleton {
  constructor(name) {
    if(Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;

    this.name = name;

    return this;
  }

  getName() {
    return this.name;
  }
}

const instanceOne = new Singleton('One');
const instanceTwo = new Singleton('Two');
const instanceThree = new Singleton('Three');

console.log(`Name of instance: ${instanceOne.getName()}`);
console.log(`Name of instance: ${instanceTwo.getName()}`);
console.log(`Name of instance: ${instanceThree.getName()}`);
