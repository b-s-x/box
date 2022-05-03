class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(item) {
    this._observers.push(item)
    console.log(`${item.getName()} subscribe`);
  }

  unsubscribe(item) {
    this._observers = this._observers.filter((sub) => sub !== item)
    console.log(`${item.getName()} unsubscribe`);
  }

  notify(data) {
    this._observers.forEach((observer) => observer.update(data))
  }
}

class Observer {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name
  }

  update(newData) {
    this._data = newData;
    console.log(`${this._name} update`, newData);
  }
}

const subject = new Subject();
const observerA = new Observer('observerA')
const observerB = new Observer('observerB')

subject.subscribe(observerA)
subject.subscribe(observerB)

subject.notify({data: '1'})

subject.notify({
  data: {
    name: 'bsx',
    date: true,
  }
})

subject.unsubscribe(observerB)