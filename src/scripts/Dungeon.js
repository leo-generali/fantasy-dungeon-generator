import { DungeonCanvas } from './DungeonCanvas';
import { Room } from './Room';
import { build } from 'dungeoneer';

class Dungeon {
  static create(width, height, seed) {
    const cellSize = 16;
    console.log(seed);

    const dungeonCanvas = new DungeonCanvas(cellSize);
    const dungeon = build({ width, height, seed });

    dungeonCanvas.setSize(width, height);
    dungeonCanvas.paintBackground('#2C3A47');

    for (let x = 0; x < dungeon.tiles.length; x++) {
      for (let y = 0; y < dungeon.tiles[x].length; y++) {
        const tile = dungeon.tiles[x][y];

        if (tile.type === 'wall') continue;
        if (tile.type === 'floor') dungeonCanvas.paintTile([x, y], '#778ca3');
        if (tile.type === 'door') dungeonCanvas.paintTile([x, y], '#fc5c65');

        dungeon.rooms.forEach(({ height, width, x: roomX, y: roomY }) => {
          const room = new Room(height, width, roomX, roomY);
          const overlapping = room.overlappingWithPoint([x, y]);

          if (overlapping) dungeonCanvas.paintTile([x, y], '#4b6584');
        });
      }
    }

    return dungeonCanvas;
  }
}

export { Dungeon };
