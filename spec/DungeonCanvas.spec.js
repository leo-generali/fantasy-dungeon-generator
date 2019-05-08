import { Dungeon } from '../src/scripts/Dungeon';
import { DungeonCanvas } from '../src/scripts/DungeonCanvas';

let dungeonCanvas;

const cellSize = 10,
  dungeonTilesX = 10,
  dungeonTilesY = 30;

beforeEach(() => {
  dungeonCanvas = new DungeonCanvas(cellSize);
  dungeonCanvas.setSize(dungeonTilesX, dungeonTilesY);
});

describe('.setSize', () => {
  it("properly sets the width of the dungeon's canvas element", () => {
    const width = cellSize * dungeonTilesX;
    expect(dungeonCanvas.canvas.width).toBe(width);
  });

  it("properly sets the height of the dungeon's canvas element", () => {
    const height = cellSize * dungeonTilesY;
    expect(dungeonCanvas.canvas.height).toBe(height);
  });
});
