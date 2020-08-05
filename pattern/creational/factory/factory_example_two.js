class Server {
    getDescriprion() {
        console.log('server run');
    }
};
  
class BackendPerson {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getDescriprion() {
        console.log(`Developer name: ${this._name}, age: ${this._age}`);
        return this._name, this._age;
    }
};

class BackendFactory {
    makeServer() {
        return new Server();
    };
  
    backendPerson(name, age) {
        return new BackendPerson(name, age);
    }
};
  
const backendFactory = new BackendFactory();
  
const server = backendFactory.makeServer();
const expert = backendFactory.backendPerson('bsx', 25);

server.getDescriprion();
expert.getDescriprion();
