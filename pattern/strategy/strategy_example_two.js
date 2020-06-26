class StrategyManager {
  constructor() {
    this._strategies = [];
  }

  addStrategy(strategy) {
    this._strategies = [...this._strategies, strategy ];
  }

  getStrategy(name) {
    return this._strategies.find((strategy) => strategy._name === name)
  }
}

class Strategy {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }

  doAction() {
    this._handler();
  }
}

const strategyManager = new StrategyManager();
const strategyOne = new Strategy('strategyOne', () => console.log('strategyOne'));
const strategyTwo = new Strategy('strategyTwo', () => console.log('strategyTwo'));

strategyManager.addStrategy(strategyOne);
strategyManager.addStrategy(strategyTwo);

const strategyA = strategyManager.getStrategy('strategyOne');
strategyA.doAction();

const strategyB = strategyManager.getStrategy('strategyTwo');
strategyB.doAction();
