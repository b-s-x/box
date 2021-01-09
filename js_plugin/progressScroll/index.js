const progress = document.querySelector(".progress")

const progressScroll = (event) => {
  let windowScroll = document.documentElement.scrollTop // прокрутка скролла от 0 -> n

  let clientHeight = document.documentElement.clientHeight //видимая часть страницы
  let windowHeight = document.documentElement.scrollHeight - clientHeight

  let percent = windowScroll / windowHeight * 100;

  progress.style.width = percent + '%'
}

window.addEventListener("scroll", progressScroll)