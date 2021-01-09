function move() {
  const element = document.querySelector(".myBar")
  let width = 0;

  const frame = () => {
    if(width >= 100) {
      clearInterval(id)
    } else {
      width++;
      element.style.width = width + "%"
      document.querySelector(".label").innerHTML = width + "%"
    }
  }

  let id = setInterval(frame, 10);
}