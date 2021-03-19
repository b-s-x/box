class State {
  constructor(name, duration, next) {
    this.name = name;
    this.duration = duration;
    this.next = next;
  }
}

class Controller {
  trigger(state, callback) {
    callback(state);
    setTimeout(() => {
      this.trigger(state.next, callback);
    }, state.duration * 1000);
  }
}

const red = new State("red", 10);
const yellowR = new State("yellowR", 2);
const yellowG = new State("yellowG", 2);
const green = new State("green", 15);

red.next = yellowR;
yellowR.next = green;
green.next = yellowG;
yellowG.next = red;

const controller = new Controller();

let activeColor = null;

controller.trigger(red, (state) => {
  activeColor = state.name;
});