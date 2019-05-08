class Room {
  constructor(height, width, x, y) {
    this._x1 = x - 1;
    this._y1 = y - 1;
    this._x2 = x + height;
    this._y2 = y + width;
  }

  overlappingWithPoint(coordinates) {
    const [x, y] = coordinates;
    const xCoordinationInPlane = x > this._x1 && x < this._x2;
    const yCoordinationInPlane = y > this._y1 && y < this._y2;
    return xCoordinationInPlane && yCoordinationInPlane;
  }
}

export { Room };
