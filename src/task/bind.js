const bind = (func, context, ...boundArgs) => (...args) =>
  func.apply(context, [...boundArgs, ...args]);

// Пример:

function greeting(greeting, punctuation) {
  return `${greeting} ${this.userName}${punctuation}`;
}

const alex = { userName: "Alex" };
const alexBound = bind(greeting, alex);

console.log(alexBound("Hello", "!")); // 'Hello Alex!'