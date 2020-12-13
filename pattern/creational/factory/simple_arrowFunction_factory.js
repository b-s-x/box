class Person {
  constructor(name) {
    this.name = name;
  }
}

const factorify = (Category) => (...args) => new Category(...args);

// Usage

const p1 = new Person("bsx");
console.log(p1);

const personFactory = factorify(Person);
const p2 = personFactory("bsx");
console.log(p2);
