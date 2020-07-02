class Cook {
  cooking() {
    console.log('Order is cooking');
  }
};

class Equipment {
  equip() {
    console.log('Order is going');
  }
};

class Delivery {
  delivery() {
    console.log('Order is delivery');
  }
};

class OrderDone {
  done() {
    console.log('Order is done');
  }
};


class OrderFacade {
  constructor(cook, equip, delivery, done) {
    this._cook = cook;
    this._equip = equip;
    this._delivery = delivery;
    this._done = done;
  }

  orderIsDone() {
    this._cook.cooking();
    this._equip.equip();
    this._delivery.delivery();
    this._done.done();
  }
};

const newOrder = new OrderFacade(
  new Cook(),
  new Equipment(),
  new Delivery(),
  new OrderDone()
);

newOrder.orderIsDone();
