class Emitter {
  constructor() {
    this.events = [];
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener)
  }

  emit(type) {
    if(this.events[type]) {
      this.events[type].forEach((listener) => {
        listener();
      })
    }
  }
};

const emtr = new Emitter();

emtr.on('greet', () => {
  console.log('Welcome');
});

emtr.on('greet', () => {
  console.log('Greet');
});

emtr.emit('greet');
