const cards = document.querySelectorAll(".card")

cards.forEach((card) => {

  card.addEventListener("mousemove", startRotate)
  card.addEventListener("mouseout", stopRotate)
  card.removeEventListener("mouseout", startRotate)
  card.removeEventListener("mousemove", stopRotate)

  function startRotate(event) {
    const cardItem = card.querySelector(".card-item")
    const halfHeight = cardItem.offsetHeight / 2
    const halfWidth = cardItem.offsetWidth / 2

    cardItem.style.transform =
    `rotateX(${-(event.offsetY - halfHeight) / 9}deg)` +
    `rotateY(${(event.offsetX - halfWidth) / 9}deg)`
    cardItem.style.transition = "transform 0.2s"
  }

  function stopRotate() {
    const cardItem = card.querySelector(".card-item")
    cardItem.style.transform = "rotate(0)"
    cardItem.style.transition = "transform 1s"
  }
})
