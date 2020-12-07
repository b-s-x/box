function once(func) {
	let result;

	return function() {
		if(func) {
			result = func.apply(this, arguments);
			func = null;
		}

		return result;
	};
}

const sum = (a, b) =>  {
  console.log(a + b);

  return a + b
}

const onceCall = once(sum)

onceCall(1, 2)
onceCall(1, 2)
onceCall(1, 2)