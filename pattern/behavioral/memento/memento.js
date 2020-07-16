class Memento {
  constructor(content) {
    this._content = content
  }

  getContent() {
    return this._content
  }
}

class Editor {
  constructor() {
    this._content = ''
  }

  type(words) {
    this._content = this._content + ' ' + words
  }

  getContent() {
    return this._content
  }

  save() {
    return new Memento(this._content)
  }

  restore(memento) {
    this._content = memento.getContent()
  }
}

const editor = new Editor()


editor.type('1')
editor.type('2')

console.log(editor.getContent());

const saved = editor.save()

editor.type('3')

console.log(editor.getContent());

editor.restore(saved)

console.log(editor.getContent());