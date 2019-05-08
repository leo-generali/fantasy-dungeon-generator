import tileset from '../tilesets/dungeon.png';

class Tileset {
  constructor(cellSize = 16) {
    this._cellSize = cellSize;
    this._canvas = document.createElement('canvas');
    this._ctx = this._canvas.getContext('2d');

    this._tileset = new Image();
    _tileset.src = 'public/dungeon-tileset.png';
    _tileset.onload = () => {
      this._ctx.drawImage(this._tileset);
    };
  }

  drawTile() {}
}

export { Tileset };
