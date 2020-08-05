class Laptop {
  constructor({ ram, hdd, name, ssd }) {
      this.ram = ram || 0;
      this.hdd = hdd || 0;
      this.name = name || 0;
      this.ssd = ssd || 0;
  }
};

class Tablet {
  constructor({ram, hdd, name, network}) {
      this.ram = ram || 0;
      this.hdd = hdd || 0;
      this.name = name || 0;
      this.network = network || 0;
  }
};

const gadget = { Laptop, Tablet };

function createGadget(type, attr) {
  const GadgetType = gadget[type];
  return new GadgetType(attr);
}

const myLaptopOne = createGadget('Laptop', {
  ram: 8,
  ssd: 256,
  name: 'MacBook',
});

const myLaptopTwo = createGadget('Laptop', {
  ram: 8,
  hdd: 512,
  name: 'Dell',
});

console.log(myLaptopOne);
console.log(myLaptopTwo);
