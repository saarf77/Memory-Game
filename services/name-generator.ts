const CHARACTERS = [
  // Marvel
  "Iron Man",
  "Spider-Man",
  "Black Widow",
  "Thor",
  "Captain Marvel",
  // Disney
  "Mickey Mouse",
  "Donald Duck",
  "Simba",
  "Mulan",
  "Stitch",
  // DC Comics
  "Batman",
  "Wonder Woman",
  "Superman",
  "Flash",
  "Green Lantern",
  // Pixar
  "Buzz Lightyear",
  "Woody",
  "Nemo",
  "Wall-E",
  "Remy",
  // Animation
  "Pikachu",
  "Totoro",
  "Sonic",
  "Mario",
  "Kirby",
]

export class NameGeneratorService {
  static generateName(): string {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
  }

  static generateId(): string {
    return Math.random().toString(36).substring(2, 9)
  }
}

