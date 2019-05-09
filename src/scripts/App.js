import { Dungeon } from './Dungeon';

class App {
  constructor(newButtonSelector) {
    this._dungeonContainer = document.querySelector('.app-dungeon-container');
    this._button = document.querySelector(newButtonSelector);

    this._size = [25, 25];

    this._button.addEventListener('click', () => {
      this._refreshDungeon();
    });

    this._createNewDungeon();
  }

  // Private functions

  _createNewDungeon() {
    const dungeon = Dungeon.create(...this._size);
    this._appendDungeonToPage(dungeon);
  }

  _appendDungeonToPage(dungeon) {
    this._dungeonContainer.appendChild(dungeon.canvas);
  }

  _clearDrawnDungeon() {
    const dungeon = document.querySelector('canvas');
    this._dungeonContainer.removeChild(dungeon);
  }

  _refreshDungeon() {
    this._clearDrawnDungeon();
    this._createNewDungeon();
  }
}

export { App };
