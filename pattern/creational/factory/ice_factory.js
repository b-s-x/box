function simpleText() {
  function add(text) {
    console.log(`${text} change`);
  }

  function remove() {
    //logic
  }

//if use without Object.freeze, internal logic function can be change
  // return {
  //   add,
  //   remove
  // };

// Object.freeze make methods immutable
  return Object.freeze({
    add,
    remove
  });
}

const newSimple = simpleText();

const changingLogicFunction = newSimple.add = () => console.log("Everything is change");
changingLogicFunction();

newSimple.add("Never")