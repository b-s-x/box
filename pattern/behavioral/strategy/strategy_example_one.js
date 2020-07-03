class StrategyManager {
  constructor() {
    this._strategy = null;
  }

  set strategy(strategy) {
    this._strategy = strategy;
  }

  get strategy() {
    return this._strategy
  }

  doAction() {
    this._strategy.doAction()
  }
}

class StrategyOne {
  doAction() {
    console.log('Method: StrategyOne');
  }
}

class StrategyTwo {
  doAction() {
    console.log('Method: StrategyTwo');
  }
}

const strategyManager= new StrategyManager();
const strategyOne = new StrategyOne();
const strategyTwo = new StrategyTwo();

strategyManager.strategy = strategyOne;
strategyManager.doAction();

strategyManager.strategy = strategyTwo;
strategyManager.doAction();
