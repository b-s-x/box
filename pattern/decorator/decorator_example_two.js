class MacDonaldsCoffee {
  cost () {
    let cost = 80;
    return cost;
  }
}

const sugar = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 5;
}

const small = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost - 25;
}

const large = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 15;
}

const withMilk = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 10;
}

const largeWithMilkAndSugar = (coffee) => {
  large(coffee);
  sugar(coffee);
  withMilk(coffee);
  const cost = coffee.cost();

  coffee.cost = () => cost;
}

const coffee = new MacDonaldsCoffee();
largeWithMilkAndSugar(coffee);
console.log(coffee.cost());
