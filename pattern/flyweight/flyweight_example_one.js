class KarakTea {

}

class TeaMaker {
  constructor() {
    this.availableTea = {};
  }

  make(preference) {
    this.availableTea[preference] = this.availableTea[preference] || (new KarakTea())
    return this.availableTea[preference]
  }
}

class TeaShop {
  constructor(teaMaker) {
    this.teaMaker = teaMaker;
    this.orders = [];
  }

  takeOrder(teaType, table) {
    this.orders[table] = this.teaMaker.make(teaType)
  }

  serve() {
    this.orders.forEach((order, index) => {
      console.log('Serving tea to table#' + index);
    });
  }
}

const teaMaker = new TeaMaker()
const shop = new TeaShop(teaMaker)

shop.takeOrder('less sugar', 1)
shop.takeOrder('more milk', 2)
shop.takeOrder('without sugar', 5)

shop.serve()
