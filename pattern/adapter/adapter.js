class CableOne {
  connect() {
  //logic
  }
};

class CableTwo {
  connect() {
    //logic
  }
};

class Connection {
  port(cable) {
    cable.connect();
  }
};

class AnotherCable {
  anotherConnect() {
    console.log('Another Cable');
  }
};

class AnotherCableAdapter {
  constructor(cable) {
    this._cable = cable
  }

  connect() {
    this._cable.anotherConnect();
  }
};

const anotherCable = new AnotherCable();
const adapterCable = new AnotherCableAdapter(anotherCable);

const connection = new Connection();
connection.port(adapterCable);
