class User {
  constructor(name) {
    this._name = name;
    this.say()
  }

  say() {
    console.log(`Hello, user ${this._name}`);
  }
}

class DecorateUser {
  constructor(user, location, place) {
    this._user = user;
    this._name = user._name;
    this._location = location;
    this._place = place;

    this.say()
  }

  say() {
    console.log(
    `Decoration thing:
    user: ${this._name},
    location: ${this._location},
    place: ${this._place}`
    );
  }
}

 const user = new User('bsx')

 const decorated = new DecorateUser(user, "Rusty Islands", "Rusty Lake" )
