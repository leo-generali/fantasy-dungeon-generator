import { Dungeon } from './Dungeon';
import { DungeonOptions } from './DungeonOptions';

class App {
  constructor(newButtonSelector) {
    this._dungeonContainer = document.querySelector('.app-dungeon-container');
    this._button = document.querySelector(newButtonSelector);

    this._options = new DungeonOptions();

    this._button.addEventListener('click', () => {
      this._refreshDungeon();
    });

    this._addColorSchemeHandler();

    this._createNewDungeon();
  }

  // Private functions
  _createNewDungeon() {
    const options = this._options.get;
    const dungeon = Dungeon.create(options);
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

  _addColorSchemeHandler() {
    const updateColorSchemeButtons = document.querySelectorAll(
      '.app-color-scheme-button'
    );

    updateColorSchemeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        console.log('asdasd');
        this._refreshDungeon();
      });
    });
  }
}

export { App };
