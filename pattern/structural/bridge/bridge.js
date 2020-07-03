class About {
  constructor(theme) {
    this.theme = theme;
  }

  getContent() {
    return 'About page in ' + this.theme.getColor()
  }
}

class Careers {
  constructor(theme) {
    this.theme = theme
  }

  getContent() {
    return 'Careers page in ' + this.theme.getColor()

  }
}

class DarkTheme {
  getColor() {
    return 'Dark Black'
  }
}

class LightTheme {
  getColor() {
    return 'White'
  }
}

class AquaTheme {
  getColor() {
    return 'Light Blue'
  }
}

const darkTheme = new DarkTheme();

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent());
console.log(careers.getContent());
