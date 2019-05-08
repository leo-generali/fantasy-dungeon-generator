import { build } from 'dungeoneer';

class Dungeon {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.ctx = canvas.getContext('2d');
  }

  static create(width, height) {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const cellSize = 10;
    const dungeon = build({
      width: width,
      height: height
    });

    console.log('Generated dungeon', dungeon);

    canvas.width = width * cellSize;
    canvas.height = height * cellSize;

    canvas.style.width = width * cellSize + 'px';
    canvas.style.height = height * cellSize + 'px';

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = 'red';

    dungeon.rooms.forEach((room) => {
      ctx.fillStyle = 'red';
      ctx.fillRect(
        room.x * cellSize,
        room.y * cellSize,
        room.width * cellSize,
        room.height * cellSize
      );
    });

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

    for (let x = 0; x < dungeon.tiles.length; x++) {
      for (let y = 0; y < dungeon.tiles[x].length; y++) {
        if (dungeon.tiles[x][y].type === 'floor') {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
        if (dungeon.tiles[x][y].type === 'door') {
          ctx.fillStyle = 'yellow';
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    }

    window.ctx = ctx;
    window.dungeon = dungeon;

    window.border = () => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(cellSize * width, 0);
      ctx.lineTo(cellSize * width, cellSize * height);
      ctx.lineTo(0, cellSize * height);
      ctx.lineTo(0, 0);
      ctx.strokeStyle = 'white';
      ctx.stroke();
    };
  }
}

export { Dungeon };
