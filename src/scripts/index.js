// Styles
import '../styles/index.scss';
import tileset from '../tilesets/dungeon.png';

import { App } from './App';

new App('.app-new-dungeon');

const tileSize = 16;

// const canvas = document.querySelector('.titleset');
const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;
const ctx = canvas.getContext('2d');

var canvas2 = document.querySelector('.titleset-draw');
canvas2.height = 256;
canvas2.width = 256;
var ctx2 = canvas2.getContext('2d');

make_base();

function make_base() {
  const base_image = new Image();
  base_image.src = tileset;
  base_image.onload = function() {
    ctx.drawImage(base_image, 0, 0);

    let imageData = ctx.getImageData(tileSize * 0, tileSize * 11, 16, 16);
    ctx.putImageData(imageData, 260, 0);
    ctx2.putImageData(imageData, 150, 10);
  };
}
