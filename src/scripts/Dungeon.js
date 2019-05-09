import { DungeonCanvas } from './DungeonCanvas';
import { Room } from './Room';
import { build } from 'dungeoneer';

class Dungeon {
  static create(args) {
    const { size, seed, colors } = args;
    const [height, width] = size;

    const cellSize = 16;

    const dungeonCanvas = new DungeonCanvas(cellSize);
    const dungeon = build({ width, height, seed });

    dungeonCanvas.setSize(width, height);
    dungeonCanvas.paintBackground(colors.background);

    for (let x = 0; x < dungeon.tiles.length; x++) {
      for (let y = 0; y < dungeon.tiles[x].length; y++) {
        const tile = dungeon.tiles[x][y];

        if (tile.type === 'wall') continue;
        if (tile.type === 'floor')
          dungeonCanvas.paintTile([x, y], colors.floor);
        if (tile.type === 'door') dungeonCanvas.paintTile([x, y], colors.door);

        dungeon.rooms.forEach(({ height, width, x: roomX, y: roomY }) => {
          const room = new Room(height, width, roomX, roomY);
          const overlapping = room.overlappingWithPoint([x, y]);

          if (overlapping) dungeonCanvas.paintTile([x, y], colors.room);
        });
      }
    }

    return dungeonCanvas;
  }
}

export { Dungeon };
