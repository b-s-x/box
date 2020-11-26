class Emitter {
  constructor() {
    this.events = {};
    console.log(this.events);
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

  off(type) {
    return this.events[type] = 0;
  }
};

const emtr = new Emitter();

emtr.on('greet', () => {
  console.log('Welcome');
});

emtr.on('greet', () => {
  console.log('Greet');
});

emtr.on('gr', () => {
  console.log('Gr');
});

emtr.emit('greet');
emtr.emit('gr')

emtr.off('gr')
