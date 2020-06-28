class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(item) {
    this._observers.push(item);
  }

  unsubscribe(item) {
    this._observers = this._observers.filter((subscriber) => subscriber !== item );
  }

  notify(data) {
    this._observers.forEach((observer) => observer(data));
  }
}

class Observer {
  update() {

  }
}

















//
