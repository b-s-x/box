class OrderStatus {
  constructor(name, nextStatus) {
    this._name = name;
    this._nextStatus = nextStatus;
  }

  next() {
    return new this._nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping)
  }
};

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered)
  }
};

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered)
  }
};

class Order {
  constructor() {
    this._state = new WaitingForPayment();
  }

  nextState() {
    this._state = this._state.next();
  }

  cancelOrder() {
    this._state._name === 'waitingForPayment'
    ? console.log('Order is canceled')
    : console.log("Order can't be canceled");
  }
}

const myOrder = new Order();

console.log(myOrder._state._name);

myOrder.cancelOrder();

myOrder.nextState();
console.log(myOrder._state._name);

myOrder.cancelOrder();

myOrder.nextState();
console.log(myOrder._state._name);
