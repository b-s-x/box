 class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(item) {
    this._observers.push(item);
    console.log('subscribed');
  }

  unsubscribe(item) {
    this._observers = this._observers.filter((subscriber) => subscriber !== item );
    console.log('unsubscribed');
  }

  notify(data) {
    this._observers.forEach((observer) => observer.update(data));
    console.log('Observers is notified!');
  }
}

class Observer {
  update(newData) {
    this._data = newData;
    console.log('update', newData);
  }
}

const subject = new Subject();
const observerA = new Observer();
const observerB = new Observer();

subject.subscribe(observerA);
subject.subscribe(observerB);

subject.notify({data:'1'});
