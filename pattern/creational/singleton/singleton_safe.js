const Singleton = new (function() {
  const single = this;
  return () =>  single
})();


console.assert(new Singleton() === new Singleton());
console.log('instances are equal');