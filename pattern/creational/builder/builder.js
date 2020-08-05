class Burger {
	constructor(builder) {
        this.size = builder.size
        this.beef = builder.beef || false
        this.cheese =  builder.cheese || false
		this.pepperoni = builder.pepperoni || false
		this.tomato = builder.tomato || false
	}
}

class BurgerBuilder {
	constructor(size) {
    	this.size = size
	}

	addPepperoni(quantity) {
		this.pepperoni = quantity;
		return this
	}

	addCheese(quantity) {
		this.cheese = quantity;
		return this
	}

	addTomato(quantity) {
		this.tomato = quantity;
		return this
    }
    
    addBeef(quantity) {
        this.beef = quantity;
        return this
    }

	build() {
		console.log('Burger is done');
		return new Burger(this)
	}
}

const burger = (new BurgerBuilder('medium'))
    // .addPepperoni(4)
    .addBeef(1)
	.addTomato(2)
	.addCheese(3)
	.build()

console.log(burger);
