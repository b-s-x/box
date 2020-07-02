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
    console.log('Add Electronic Engine');
  }

  installChassis() {
    console.log('installChassis');
  }

  addElectronic() {
    console.log('addElectronic');
  }

  collectAccessories() {
    console.log('collectAccessories');
  }
};

class PorsheBuilder extends Builder {
  addEngine() {
    console.log('Add Electronic Engine');
  }

  installChassis() {
    console.log('installChassis');
  }

  addElectronic() {
    console.log('addElectronic');
  }

  collectAccessories() {
    console.log('collectAccessories');
  }
};

const teslaBuilder = new TeslaBuilder();
const porsheBuilder = new PorsheBuilder();

teslaBuilder.build();
porsheBuilder.build();
