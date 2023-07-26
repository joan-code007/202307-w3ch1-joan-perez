import { type CharactersDefault } from "../../types.js";

export class Character {
  isAlive = true;
  series = "Game of Thrones";
  charactersDefault;

  constructor(charactersDefault: CharactersDefault) {
    this.charactersDefault = charactersDefault;
  }

  communicate() {
    return `${this.charactersDefault.name} says: `;
  }

  die() {
    this.isAlive = false;
  }
}
