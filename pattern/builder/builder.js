class Burger {
  constructor(builder) {
    this.size = builder.size
    this.cheese = builder.cheese || false
    this.pepperoni = builder.pepperoni || false
    this.lettuce = builder.lettuce || false
    this.tomato = builder.tomato || false
  }
}

class BurgerBuilder {
  constructor(size) {
    this.size = size
  }

  addPepperoni() {
    this.pepperoni = true
    console.log('pepperoni');
    return this
  }

  addLettuce() {
    this.lettuce = true
    console.log('lettuce');
    return this
  }

  addCheese() {
    this.cheese = true
    console.log('cheese');
    return this
  }

  addTomato() {
    this.tomato = true
    console.log('tomato');
    return this
  }

  build() {
    console.log('Burger is done');
    return new Burger(this)
  }
}


const burger = (new BurgerBuilder(14))
  .addPepperoni()
  .addTomato()
  .addCheese()
  .build()
