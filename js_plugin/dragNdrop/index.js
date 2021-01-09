const ball = document.querySelector('.ball')

function drag(event) {
  let shiftX = event.clientX - ball.getBoundingClientRect().left
  let shiftY = event.clientY - ball.getBoundingClientRect().top

  ball.style.position = "absolute"
  ball.style.zIndex = 1000;
  document.body.append(ball)

  const moveAt = (pageX, pageY) => {
    ball.style.left = pageX - shiftX + 'px'
    ball.style.top = pageY - shiftY + 'px'
  }

  const onMouseMove = (event) => {
    moveAt(event.pageX, event.pageY)
  }

  moveAt(event.pageX, event.pageY)

  document.addEventListener('mousemove', onMouseMove)

  ball.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove)
    ball.onmouseup = null
  })

  ball.ondragstart = () => false;
}

ball.addEventListener('mousedown', (event) => {
  drag(event)
})