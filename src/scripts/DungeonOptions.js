import { Seed } from './Seed';
import { DungeonColors } from './DungeonColors';

class DungeonOptions {
  constructor() {
    this._size = [25, 25];

    this._colors = new DungeonColors();
    this._seedInput = new Seed();
  }

  get get() {
    return {
      colors: this._getColors(),
      seed: this._getSeedValue(),
      size: this._size
    };
  }

  // Private
  _getSeedValue() {
    return this._seedInput.value;
  }

  _getColors() {
    return this._colors.colorScheme;
  }
}

export { DungeonOptions };
