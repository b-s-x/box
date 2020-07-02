class Developer {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  getSalary() {
    return this._salary;
  }
}

class Designer {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  getSalary() {
    return this._salary;
  }
}

class Organisation {
  constructor() {
    this._employees = [];
  }

  addEmployee(employee) {
    this._employees.push(employee)
  }

  getNetSalaries() {
    let netSalary = 0

    this._employees.forEach((employee) => {
      netSalary += employee.getSalary()
    })

    return netSalary
  }
}

const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane', 10000)

const organisation = new Organisation();

organisation.addEmployee(john)
organisation.addEmployee(jane)
console.log(organisation.getNetSalaries());
