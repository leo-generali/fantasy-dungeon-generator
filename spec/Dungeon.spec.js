import { Dungeon } from '../src/scripts/Dungeon';
import { DungeonCanvas } from '../src/scripts/DungeonCanvas';

let dungeon;

beforeEach(() => {
  const size = [50, 50];
  dungeon = Dungeon.create(...size);
});

describe('.create', () => {
  it('returns a DungeonCanvas class', () => {
    expect(dungeon).toBeInstanceOf(DungeonCanvas);
  });
});
