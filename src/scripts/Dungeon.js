import { DungeonCanvas } from './DungeonCanvas';
import { Room } from './Room';
import { build } from 'dungeoneer';

class Dungeon {
  static create(width, height, cellSize = 10) {
    const dungeonCanvas = new DungeonCanvas('canvas', cellSize);
    const dungeon = build({ width, height });

    dungeonCanvas.setSize(width, height);
    dungeonCanvas.paintBackground();

    for (let x = 0; x < dungeon.tiles.length; x++) {
      for (let y = 0; y < dungeon.tiles[x].length; y++) {
        const tile = dungeon.tiles[x][y];

        if (tile.type === 'wall') continue;
        if (tile.type === 'floor') dungeonCanvas.paintTile([x, y], 'pink');
        if (tile.type === 'door') dungeonCanvas.paintTile([x, y], 'yellow');

        dungeon.rooms.forEach(({ height, width, x: roomX, y: roomY }) => {
          const room = new Room(height, width, roomX, roomY);
          const overlapping = room.overlappingWithPoint([x, y]);

          if (overlapping) dungeonCanvas.paintTile([x, y], 'green');
        });
      }
    }
  }
}

export { Dungeon };
