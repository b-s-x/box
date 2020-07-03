class ChatRoom {
  showMessage(user, msg) {
    const time = new Date();
    const sender = user.getName();

    console.log((time + '[' + sender + ']:' + msg));
  }
}

class User {
  constructor(name, chatMediator) {
    this.name = name;
    this.chatMediator = chatMediator
  }

  getName() {
    return this.name
  }

  send(msg) {
    this.chatMediator.showMessage(this, msg)
  }
}

const mediator = new ChatRoom()
const john = new User('John', mediator);
const jane = new User('Jane', mediator);

john.send('Hi');
jane.send('Hey')









































//
