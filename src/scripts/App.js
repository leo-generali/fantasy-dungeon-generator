import { Dungeon } from './Dungeon';

class App {
  constructor(newButtonSelector) {
    this._button = document.querySelector(newButtonSelector);
    this._size = [70, 40];

    this._button.addEventListener('click', () => {
      this.createNewDungeon();
    });

    this.createNewDungeon();
  }

  createNewDungeon() {
    Dungeon.create(...this._size);
  }
}

export { App };
