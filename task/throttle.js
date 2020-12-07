function throttle(func, delay) {
  let timeout;
  return (...args) => {
    if (timeout) return

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  }
}

const handler = () => {
  let result = 0

  return function() {
    console.log(result)
    return result++
  }
}

const hand = handler()

const returnedFunction = throttle(hand, 2000)

window.addEventListener('click', returnedFunction);