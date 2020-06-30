class Server {
  getDescriprion() {
    console.log('server');
  }
};

class Client {
  getDescriprion() {
    console.log('client');
  }
};
// ____________________________________________________________________
class BackendPerson {
  getDescriprion() {
    console.log("I'm backend developer!");
  }
};

class FrontendPerson {
  getDescriprion() {
    console.log("I'm frontend developer!");
  }
};
// ____________________________________________________________________
class BackendFactory {
  makeServer() {
    return new Server();
  };

  backendPerson() {
    return new BackendPerson();
  }
};

class FrontendFactory {
  makeClient() {
    return new Client();
  };

  frontendPerson() {
    return new FrontendPerson();
  }
};
// ____________________________________________________________________
const backendFactory = new BackendFactory();

const server = backendFactory.makeServer();
const expert = backendFactory.backendPerson();

server.getDescriprion();
expert.getDescriprion();





























//
