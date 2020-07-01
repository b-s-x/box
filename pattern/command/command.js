class Controller {
  turnOn() {
    console.log('Controller on');
  }

  turnOff() {
    console.log('Controller off');
  }
};

class TurnOnCommand {
  constructor(controller) {
    this._controller = controller;
  }

  execute() {
    this._controller.turnOn();
  }

  undo() {
    this._controller.turnOff();
  }

  redo() {
    this.execute();
  }
};

class TurnOffCommand {
  constructor(controller) {
    this._controller = controller;
  }

  execute() {
    this._controller.turnOff();
  }

  undo() {
    this._controller.turnOn();
  }

  redo() {
    this.execute();
  }
};

class RemoteControl {
  submit(command) {
    command.execute();
  }
};

const controller = new Controller();

const turnOn = new TurnOnCommand(controller);
const turnOff = new TurnOffCommand(controller);

const remote = new RemoteControl();
remote.submit(turnOn);
remote.submit(turnOff);
