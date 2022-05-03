class Door {
  open() {
    console.log('Openning the door');
  }

  close() {
    console.log('Closing the door');
  }
}

class Security {
  constructor(door) {
    this._door = door
  }

  open(password) {
    if(this.authenticate(password)) {
      this._door.open()
    } else {
      console.log('No access');
    }
  }

  authenticate(password) {
    return password === 'bsx'
  }

  close() {
    this._door.close()
  }
};

const door = new Security(new Door());
door.open('invalid');

door.open('bsx');
door.close();
