import { Room } from '../src/scripts/Room';

const room = new Room(10, 10, 1, 1);

describe('.overlappingWithPoint', () => {
  it('returns true if given point is within room plane', () => {
    expect(room.overlappingWithPoint([5, 5])).toBe(true);
  });

  it('returns false if given point is outside room plane', () => {
    expect(room.overlappingWithPoint([12, 12])).toBe(false);
  });
});
