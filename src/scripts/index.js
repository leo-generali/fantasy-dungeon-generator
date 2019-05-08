import { Dungeon } from './Dungeon';
import { build } from 'dungeoneer';

const WIDTH = 51;
const HEIGHT = 51;

Dungeon.create(WIDTH, HEIGHT);

document.querySelector('.app-new-dungeon').addEventListener(
  'mousedown',
  function() {
    document.querySelector('.app-new-dungeon').classList.add('mousedown');
  },
  false
);

document.querySelector('.app-new-dungeon').addEventListener(
  'mouseup',
  function() {
    document.querySelector('.app-new-dungeon').classList.remove('mousedown');
    Dungeon.create(WIDTH, HEIGHT);
  },
  false
);
