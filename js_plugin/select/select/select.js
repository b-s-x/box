const getTemplate = (data = [], placeholder, selectID) => {
  let text = placeholder ?? "Placeholder"

  const items = data.map((item) => {
    let cls = ""
    if(item.id === selectID) {
      text = item.value
      cls = "selected"
    }
    return `
      <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
    `
  })

  return `
  <div class="select__backdrop" data-type="backdrop"> </div>
  <div class="select__input" data-type="input">
    <span data-type="value"> ${text} </span>
    <i class="fas fa-chevron-down" data-type="arrow"></i>
  </div>
  <div class="select__dropdown">
    <ul class="select__list">
      ${items.join('')}
    </ul>
  </div>`
}

export class Select {
  constructor(selector, options) {
    this.$element = document.querySelector(selector)
    this.options = options
    this.selectID = options.selectID

    this.#render()
    this.#setup()
  }

  #render() {
    const {placeholder, data} = this.options
    this.$element.classList.add("select")
    this.$element.innerHTML = getTemplate(data, placeholder, this.selectID)
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$element.addEventListener("click", this.clickHandler)
    this.$arrow = this.$element.querySelector('[data-type="arrow"]')
    this.$value = this.$element.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    this.toggle()

    const {type} = event.target.dataset

    if(type === "item") {
      const id = event.target.dataset.id
      this.select(id)
    } else if(type === "backdrop") {
      this.close()
    }
  }

  get current() {
    return this.options.data.find((item) => item.id === this.selectID)
  }

  select(id) {
    this.selectID = id
    this.$value.textContent = this.current.value

    this.$element.querySelectorAll(`[data-type="item"]`).forEach((element) => {
      element.classList.remove("selected")
    })
    this.$element.querySelector(`[data-id="${id}"]`).classList.add("selected")

    this.close()
  }

  destroy() {
    this.$element.removeEventListener("click", this.clickHandler)
    this.$element.innerHTML = ""
  }

  toggle() {
    this.$element.classList.toggle("open")
    this.$arrow.classList.toggle("fa-chevron-up")
  }

  close() {
    this.$element.classList.remove("open")
  }
}