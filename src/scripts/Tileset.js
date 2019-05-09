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

// const tileSize = 16;

// const canvas = document.querySelector('.titleset');
// const canvas = document.createElement('canvas');
// canvas.height = 500;
// canvas.width = 500;
// const ctx = canvas.getContext('2d');

// var canvas2 = document.querySelector('.titleset-draw');
// canvas2.height = 256;
// canvas2.width = 256;
// var ctx2 = canvas2.getContext('2d');

// make_base();

// function make_base() {
//   const base_image = new Image();
//   base_image.src = tileset;
//   base_image.onload = function() {
//     ctx.drawImage(base_image, 0, 0);

//     let imageData = ctx.getImageData(tileSize * 0, tileSize * 11, 16, 16);
//     ctx.putImageData(imageData, 260, 0);
//     ctx2.putImageData(imageData, 150, 10);
//   };
// }

export { Tileset };
