class Seed {
  constructor(selector = '.app-dungeon-seed-input') {
    this._elem = document.querySelector(selector);
    this._value = this._elem.value;

    this._elem.addEventListener('keyup', (event) => {
      const { value } = this._elem;
      this.value = value;
    });
  }

  set value(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

export { Seed };
