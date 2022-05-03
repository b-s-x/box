class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
};

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Tesla Engine');
  }

  installChassis() {
    console.log('Install Tesla chassis');
  }

  addElectronic() {
    console.log('Add Tesla electronic');
  }

  collectAccessories() {
    console.log('Collect Tesla Accesories');
  }
};

class PorsheBuilder extends Builder {
  addEngine() {
    console.log('Add Porshe Engine');
  }

  installChassis() {
    console.log('Install Porshe chassis');
  }

  addElectronic() {
    console.log('Add Porshe electronic');
  }

  collectAccessories() {
    console.log('Collect Porshe Accesories');
  }
};

const teslaBuilder = new TeslaBuilder();
const porsheBuilder = new PorsheBuilder();

teslaBuilder.build();
porsheBuilder.build();
