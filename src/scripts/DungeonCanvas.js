class DungeonCanvas {
  constructor(selector, cellSize) {
    this._cellSize = cellSize;
    this._canvas = document.querySelector(selector);
    this._ctx = this._canvas.getContext('2d');
  }

  get canvas() {
    return this._canvas;
  }

  get context() {
    return this._ctx;
  }

  setSize(width, height) {
    this._canvas.width = width * this._cellSize;
    this._canvas.height = height * this._cellSize;

    this._canvas.style.width = width * this._cellSize + 'px';
    this._canvas.style.height = height * this._cellSize + 'px';
  }

  paintBackground() {
    this._ctx.fillStyle = 'black';
    this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
  }

  paintTile(coordinates, color) {
    const [x, y] = coordinates;
    this._ctx.fillStyle = color;
    this._fillTile(x, y);
  }

  // Private Methods

  _fillTile(x, y) {
    this._ctx.fillRect(
      x * this._cellSize,
      y * this._cellSize,
      this._cellSize,
      this._cellSize
    );
  }
}

export { DungeonCanvas };
