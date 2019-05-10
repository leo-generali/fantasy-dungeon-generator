import { DungeonKeyColor } from './DungeonKeyColor';

const order = ['Background', 'Floor', 'Room', 'Door'];

class DungeonKey {
  static create(colors) {
    return order.map((elem) =>
      DungeonKeyColor.create(elem, colors[elem.toLowerCase()])
    );
  }
}

export { DungeonKey };
