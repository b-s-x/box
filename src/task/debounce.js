function debounce(func, delay, immediate) {
  let timeout;

  return function executedFunction() {

    const later = () => {
      timeout = null;
      if (!immediate) func(...arguments);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, delay);
    if (immediate & !timeout) func(...arguments);
  };
};

const handler = () => {
  let result = 0

  return function() {
    console.log(result)
    return result++
  }
}

const hand = handler()

window.addEventListener('click', debounce(hand, 2000));